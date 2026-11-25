import { chromium, type Page } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const BASE_URL = 'https://hyperframe-template.webflow.io';

const SEED_ROUTES = [
  '/',
  '/about',
  '/service',
  '/project',
  '/blog',
  '/contact',
  '/style-guide',
  '/privacy',
  '/licenses',
  '/changelog',
  '/instructions',
  '/password',
  '/404',
];

interface RouteInfo {
  referenceUrl: string;
  localRoute: string;
  title: string;
  status: number;
  h1: string;
  links: string[];
  sections: { tag: string; className: string; id: string; textSample: string }[];
}

interface AssetRecord {
  id: string;
  referenceUrl: string;
  referencePages: string[];
  component: string;
  mediaType: 'image' | 'video' | 'svg' | 'font' | 'css-background';
  mimeType: string;
  originalFilename: string;
  originalWidth: number;
  originalHeight: number;
  displayWidth: number;
  displayHeight: number;
  aspectRatio: string;
  objectFit: string;
  objectPosition: string;
  localPath: string;
  licenseStatus: string;
  acquisitionStatus: string;
  sha256: string;
  notes: string;
}

function normalizeRoute(href: string): string | null {
  if (!href) return null;
  if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#') || href.startsWith('javascript:')) {
    return null;
  }
  try {
    const url = new URL(href, BASE_URL);
    if (url.origin !== BASE_URL) return null;
    return url.pathname.replace(/\/+$/, '') || '/';
  } catch {
    return null;
  }
}

async function autoScroll(page: Page) {
  await page.evaluate(async () => {
    await new Promise<void>((resolve) => {
      let totalHeight = 0;
      const distance = 600;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight + 600) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 80);
    });
  });
}

async function main() {
  const outDir = path.resolve('docs/research');
  fs.mkdirSync(outDir, { recursive: true });
  const assetOutBase = path.resolve('public/assets/reference');
  fs.mkdirSync(assetOutBase, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const networkAssets = new Map<string, { contentType: string; size: number }>();
  page.on('response', async (res) => {
    const url = res.url();
    const ct = res.headers()['content-type'] || '';
    if (
      url.includes('website-files.com') ||
      url.includes('fonts.gstatic.com') ||
      ct.startsWith('image/') ||
      ct.startsWith('video/') ||
      ct.startsWith('font/') ||
      url.match(/\.(png|jpe?g|webp|avif|svg|mp4|webm|woff2?|ttf|otf|json)(\?|$)/i)
    ) {
      if (!networkAssets.has(url)) {
        networkAssets.set(url, { contentType: ct, size: Number(res.headers()['content-length'] || 0) });
      }
    }
  });

  const queue = [...SEED_ROUTES];
  const visited = new Set<string>();
  const routes: RouteInfo[] = [];
  const rawDomAssets: Array<{
    route: string;
    url: string;
    mediaType: AssetRecord['mediaType'];
    component: string;
    displayWidth: number;
    displayHeight: number;
    naturalWidth: number;
    naturalHeight: number;
    objectFit: string;
    objectPosition: string;
    alt: string;
  }> = [];

  while (queue.length > 0) {
    const route = queue.shift()!;
    if (visited.has(route)) continue;
    visited.add(route);

    const targetUrl = `${BASE_URL}${route === '/' ? '' : route}`;
    console.log(`Visiting: ${targetUrl}`);
    let status = 0;
    try {
      const resp = await page.goto(targetUrl, { waitUntil: 'networkidle', timeout: 45000 });
      status = resp?.status() ?? 0;
    } catch (err) {
      console.warn(`Timeout/error on ${targetUrl}:`, (err as Error).message);
    }

    await page.waitForTimeout(800);
    await autoScroll(page);
    await page.waitForTimeout(600);

    // Also try opening menu on first page
    if (route === '/') {
      const menuBtn = page.locator('.navbar-menu-icon, .menu-button, [class*="hamburger"], .navbar-right-wrap').first();
      if (await menuBtn.count()) {
        await menuBtn.click({ force: true }).catch(() => {});
        await page.waitForTimeout(500);
      }
    }

    const pageData = await page.evaluate(() => {
      const title = document.title;
      const h1 = document.querySelector('h1')?.textContent?.trim() || '';
      const anchors = Array.from(document.querySelectorAll('a[href]')).map((a) => (a as HTMLAnchorElement).getAttribute('href') || '');
      const sections = Array.from(document.querySelectorAll('section, header, footer, nav')).map((el) => ({
        tag: el.tagName.toLowerCase(),
        className: (el as HTMLElement).className?.toString() || '',
        id: el.id || '',
        textSample: (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 140),
      }));

      const assets: Array<{
        url: string;
        mediaType: 'image' | 'video' | 'svg' | 'css-background';
        component: string;
        displayWidth: number;
        displayHeight: number;
        naturalWidth: number;
        naturalHeight: number;
        objectFit: string;
        objectPosition: string;
        alt: string;
      }> = [];

      document.querySelectorAll('img').forEach((img) => {
        const rect = img.getBoundingClientRect();
        const cs = getComputedStyle(img);
        const src = img.currentSrc || img.getAttribute('src') || img.getAttribute('data-src') || '';
        if (src) {
          assets.push({
            url: src,
            mediaType: src.toLowerCase().includes('.svg') ? 'svg' : 'image',
            component: img.closest('[class]')?.className?.toString() || 'img',
            displayWidth: Math.round(rect.width),
            displayHeight: Math.round(rect.height),
            naturalWidth: img.naturalWidth,
            naturalHeight: img.naturalHeight,
            objectFit: cs.objectFit,
            objectPosition: cs.objectPosition,
            alt: img.alt || '',
          });
        }
      });

      document.querySelectorAll('video, video source').forEach((el) => {
        const src = el.getAttribute('src') || '';
        const poster = el.getAttribute('poster') || '';
        const rect = el.getBoundingClientRect();
        const cs = getComputedStyle(el);
        if (src) {
          assets.push({
            url: src,
            mediaType: 'video',
            component: el.closest('[class]')?.className?.toString() || 'video',
            displayWidth: Math.round(rect.width),
            displayHeight: Math.round(rect.height),
            naturalWidth: 0,
            naturalHeight: 0,
            objectFit: cs.objectFit,
            objectPosition: cs.objectPosition,
            alt: '',
          });
        }
        if (poster) {
          assets.push({
            url: poster,
            mediaType: 'image',
            component: 'video-poster',
            displayWidth: Math.round(rect.width),
            displayHeight: Math.round(rect.height),
            naturalWidth: 0,
            naturalHeight: 0,
            objectFit: cs.objectFit,
            objectPosition: cs.objectPosition,
            alt: '',
          });
        }
      });

      document.querySelectorAll('*').forEach((el) => {
        const bg = getComputedStyle(el).backgroundImage;
        if (bg && bg !== 'none' && bg.includes('url(')) {
          const matches = bg.matchAll(/url\(["']?([^"')]+)["']?\)/g);
          for (const m of matches) {
            const url = m[1];
            if (url && !url.startsWith('data:')) {
              const rect = el.getBoundingClientRect();
              assets.push({
                url,
                mediaType: 'css-background',
                component: (el as HTMLElement).className?.toString() || el.tagName.toLowerCase(),
                displayWidth: Math.round(rect.width),
                displayHeight: Math.round(rect.height),
                naturalWidth: 0,
                naturalHeight: 0,
                objectFit: 'background',
                objectPosition: getComputedStyle(el).backgroundPosition,
                alt: '',
              });
            }
          }
        }
      });

      return { title, h1, anchors, sections, assets };
    });

    const internalLinks = [...new Set(pageData.anchors.map(normalizeRoute).filter((r): r is string => Boolean(r)))];
    for (const link of internalLinks) {
      if (!visited.has(link) && !queue.includes(link)) {
        queue.push(link);
      }
    }

    for (const a of pageData.assets) {
      rawDomAssets.push({ route, ...a });
    }

    routes.push({
      referenceUrl: targetUrl,
      localRoute: route,
      title: pageData.title,
      status,
      h1: pageData.h1,
      links: internalLinks,
      sections: pageData.sections,
    });
  }

  await browser.close();

  fs.writeFileSync(path.join(outDir, 'discovered-routes.json'), JSON.stringify(routes, null, 2));
  fs.writeFileSync(path.join(outDir, 'discovered-dom-assets.json'), JSON.stringify(rawDomAssets, null, 2));
  fs.writeFileSync(
    path.join(outDir, 'discovered-network-assets.json'),
    JSON.stringify(Object.fromEntries(networkAssets.entries()), null, 2)
  );

  console.log(`Discovered ${routes.length} routes, ${rawDomAssets.length} DOM asset usages, ${networkAssets.size} network asset URLs.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
