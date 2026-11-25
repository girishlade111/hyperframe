import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

const REF_URL = 'https://hyperframe-template.webflow.io';
const LOCAL_URL = process.env.LOCAL_URL || 'http://127.0.0.1:4173';

const ROUTES = ['/', '/about', '/service', '/project', '/blog', '/contact', '/style-guide', '/privacy', '/404'];
const VIEWPORTS = [
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'mobile-390', width: 390, height: 844 },
];

async function captureStable(url: string, width: number, height: number, outFile: string) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width, height } });
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(1500);
  // Scroll through once to trigger lazy images and reveal animations, then return to top
  await page.evaluate(async () => {
    window.scrollTo(0, document.body.scrollHeight);
    await new Promise((r) => setTimeout(r, 400));
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: outFile, fullPage: true });
  await browser.close();
}

function diffPng(refPath: string, localPath: string, diffPath: string) {
  const img1 = PNG.sync.read(fs.readFileSync(refPath));
  const img2 = PNG.sync.read(fs.readFileSync(localPath));
  const width = Math.min(img1.width, img2.width);
  const height = Math.min(img1.height, img2.height);

  const crop = (src: PNG) => {
    if (src.width === width && src.height === height) return src.data;
    const out = Buffer.alloc(width * height * 4);
    for (let y = 0; y < height; y++) {
      src.data.copy(out, y * width * 4, y * src.width * 4, y * src.width * 4 + width * 4);
    }
    return out;
  };

  const diff = new PNG({ width, height });
  const mismatched = pixelmatch(crop(img1), crop(img2), diff.data, width, height, { threshold: 0.15 });
  fs.writeFileSync(diffPath, PNG.sync.write(diff));
  const ratio = mismatched / (width * height);
  return { width, height, refHeight: img1.height, localHeight: img2.height, mismatched, diffPercent: Number((ratio * 100).toFixed(2)) };
}

async function main() {
  const outBase = path.resolve('docs/testing/screenshots');
  fs.mkdirSync(outBase, { recursive: true });
  const report: Array<Record<string, unknown>> = [];

  for (const vp of VIEWPORTS) {
    for (const route of ROUTES) {
      const slug = route === '/' ? 'home' : route.slice(1).replace(/\//g, '_');
      const refPath = path.join(outBase, `${slug}-${vp.name}-ref.png`);
      const localPath = path.join(outBase, `${slug}-${vp.name}-local.png`);
      const diffPath = path.join(outBase, `${slug}-${vp.name}-diff.png`);

      if (!fs.existsSync(refPath)) {
        await captureStable(`${REF_URL}${route === '/' ? '' : route}`, vp.width, vp.height, refPath);
      }
      await captureStable(`${LOCAL_URL}${route}`, vp.width, vp.height, localPath);

      const metrics = diffPng(refPath, localPath, diffPath);
      report.push({ route, viewport: vp.name, ...metrics });
      console.log(`${route} [${vp.name}] -> diff: ${metrics.diffPercent}% (refH=${metrics.refHeight}, localH=${metrics.localHeight})`);
    }
  }

  fs.writeFileSync(path.join(outBase, 'comparison-metrics.json'), JSON.stringify(report, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
