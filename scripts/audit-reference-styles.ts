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
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 }).catch(() => {});
    await page.waitForTimeout(800);

    const info = await page.evaluate(() => {
      const rootStyle = getComputedStyle(document.documentElement);
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
          // cross-origin stylesheet ignored if CORS blocked
        }
      }

      const pickStyle = (sel: string) => {
        const el = document.querySelector(sel);
        if (!el) return null;
        const cs = getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        return {
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
      };

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
        samples: {
          h1: pickStyle('h1'),
          h2: pickStyle('h2'),
          h3: pickStyle('h3'),
          h4: pickStyle('h4'),
          h5: pickStyle('h5'),
          h6: pickStyle('h6'),
          p: pickStyle('p'),
          header: pickStyle('header, .navbar, [class*="nav-wrapper"], [class*="header"]'),
          primaryButton: pickStyle('.primary-button, [class*="primary-button"], a.w-button'),
          container: pickStyle('.container, .w-container, [class*="container"]'),
        },
      };
    });

    results[route] = info;
  }

  // Extract full text structure of key pages for faithful copy/content mapping
  const pageContents: Record<string, unknown> = {};
  for (const route of ['/', '/about', '/service', '/project', '/blog', '/contact', '/style-guide', '/privacy', '/404', '/licenses', '/changelog', '/instructions', '/password']) {
    const url = `${BASE_URL}${route === '/' ? '' : route}`;
    const resp = await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 }).catch(() => null);
    await page.waitForTimeout(500);
    const data = await page.evaluate(() => {
      const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map((h) => ({
        tag: h.tagName,
        className: h.className,
        text: (h.textContent || '').replace(/\s+/g, ' ').trim(),
        fontSize: getComputedStyle(h).fontSize,
        lineHeight: getComputedStyle(h).lineHeight,
        fontFamily: getComputedStyle(h).fontFamily,
      }));
      const textBlocks = Array.from(document.querySelectorAll('p, li, label, button, a'))
        .map((el) => ({
          tag: el.tagName,
          className: (el.className || '').toString(),
          text: (el.textContent || '').replace(/\s+/g, ' ').trim(),
          href: el.getAttribute('href') || undefined,
        }))
        .filter((x) => x.text.length > 0 && x.text.length < 400);
      return {
        title: document.title,
        headings,
        textBlocks: textBlocks.slice(0, 180),
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
