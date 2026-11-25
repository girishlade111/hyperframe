import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const BASE_URL = 'https://hyperframe-template.webflow.io';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  // Inspect style-guide + homepage computed styles + CSS rules
  const results: Record<string, unknown> = {};

  for (const route of ['/', '/style-guide', '/about', '/service', '/project', '/blog', '/contact', '/privacy', '/404']) {
    const url = `${BASE_URL}${route === '/' ? '' : route}`;
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => {});
    await page.waitForTimeout(1200);

    const info = await page.evaluate(() => {
      const cssVars: Record<string, string> = {};
      for (const sheet of Array.from(document.styleSheets)) {
        try {
          for (const rule of Array.from(sheet.cssRules)) {
            if (rule instanceof CSSStyleRule && rule.selectorText === ':root') {
              for (const prop of Array.from(rule.style)) {
                if (prop.startsWith('--')) {
                  cssVars[prop] = rule.style.getPropertyValue(prop).trim();
                }
              }
            }
          }
        } catch {
          // ignore cross-origin
        }
      }

      const samples: Record<string, unknown> = {};
      const selectors: Array<[string, string]> = [
        ['h1', 'h1'],
        ['h2', 'h2'],
        ['h3', 'h3'],
        ['h4', 'h4'],
        ['h5', 'h5'],
        ['h6', 'h6'],
        ['p', 'p'],
        ['header', 'header, .navbar, [class*="nav-wrapper"], [class*="header"]'],
        ['primaryButton', '.primary-button, [class*="primary-button"], a.w-button'],
        ['container', '.container, .w-container, [class*="container"]'],
      ];
      for (const [key, sel] of selectors) {
        const el = document.querySelector(sel);
        if (!el) {
          samples[key] = null;
          continue;
        }
        const cs = getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        samples[key] = {
          text: (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 80),
          fontFamily: cs.fontFamily,
          fontSize: cs.fontSize,
          fontWeight: cs.fontWeight,
          lineHeight: cs.lineHeight,
          letterSpacing: cs.letterSpacing,
          color: cs.color,
          backgroundColor: cs.backgroundColor,
          backgroundImage: cs.backgroundImage !== 'none' ? cs.backgroundImage.slice(0, 200) : 'none',
          padding: `${cs.paddingTop} ${cs.paddingRight} ${cs.paddingBottom} ${cs.paddingLeft}`,
          borderRadius: cs.borderRadius,
          width: Math.round(rect.width),
          height: Math.round(rect.height),
        };
      }

      const fontsLoaded = Array.from(document.fonts).map((f) => ({
        family: f.family,
        weight: f.weight,
        style: f.style,
        status: f.status,
      }));

      const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map((l) => l.getAttribute('href'));

      return {
        bodyBg: getComputedStyle(document.body).backgroundColor,
        bodyFont: getComputedStyle(document.body).fontFamily,
        bodyFontSize: getComputedStyle(document.body).fontSize,
        bodyColor: getComputedStyle(document.body).color,
        cssVars,
        fontsLoaded: fontsLoaded.filter((f, idx, arr) => arr.findIndex((x) => x.family === f.family && x.weight === f.weight) === idx),
        stylesheets,
        samples,
      };
    });

    results[route] = info;
  }

  // Extract full text structure of ALL discovered pages for faithful copy/content mapping
  const discoveredPath = path.resolve('docs/research/discovered-routes.json');
  const allRoutes: string[] = fs.existsSync(discoveredPath)
    ? JSON.parse(fs.readFileSync(discoveredPath, 'utf8')).map((r: { localRoute: string }) => r.localRoute)
    : ['/', '/about', '/service', '/project', '/blog', '/contact', '/style-guide', '/privacy', '/404', '/licenses', '/changelog', '/instructions', '/401'];

  const pageContents: Record<string, unknown> = {};
  for (const route of allRoutes) {
    const url = `${BASE_URL}${route === '/' ? '' : route}`;
    const resp = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => null);
    await page.waitForTimeout(800);
    const data = await page.evaluate(() => {
      const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map((h) => ({
        tag: h.tagName,
        className: h.className,
        text: (h.textContent || '').replace(/\s+/g, ' ').trim(),
        fontSize: getComputedStyle(h).fontSize,
        lineHeight: getComputedStyle(h).lineHeight,
        fontFamily: getComputedStyle(h).fontFamily,
      }));
      const images = Array.from(document.querySelectorAll('img')).map((img) => ({
        src: img.currentSrc || img.getAttribute('src') || '',
        alt: img.alt || '',
        className: (img.className || '').toString(),
        width: img.getAttribute('width'),
        height: img.getAttribute('height'),
      }));
      const videos = Array.from(document.querySelectorAll('video')).map((v) => ({
        src: v.getAttribute('src') || v.querySelector('source')?.getAttribute('src') || '',
        poster: v.getAttribute('poster') || '',
        className: (v.className || '').toString(),
      }));
      const textBlocks = Array.from(document.querySelectorAll('p, li, label, button, a, .service-card-title, .project-card-title, .blog-card-title, .pricing-card-title, .faq-question, .member-name, .member-pst, .awwards-card-title, .awwards-web-name, .story-card-title, .value-card-title, .process-card-title, .offer-card-title, .process-b-card-title, .final-card-title, .overvie-single-title, .overvie-single-details, .changelog-single-text, .license-deatils-wrap, .blog-rich-text'))
        .map((el) => ({
          tag: el.tagName,
          className: (el.className || '').toString(),
          text: (el.textContent || '').replace(/\s+/g, ' ').trim(),
          href: el.getAttribute('href') || undefined,
        }))
        .filter((x) => x.text.length > 0 && x.text.length < 2500);
      return {
        title: document.title,
        metaDescription: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
        headings,
        images,
        videos,
        textBlocks: textBlocks.slice(0, 300),
      };
    });
    pageContents[route] = { status: resp?.status() ?? 0, ...data };
  }

  await browser.close();

  const outDir = path.resolve('docs/research');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'computed-styles.json'), JSON.stringify(results, null, 2));
  fs.writeFileSync(path.join(outDir, 'page-contents.json'), JSON.stringify(pageContents, null, 2));
  console.log('Saved computed-styles.json and page-contents.json');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
