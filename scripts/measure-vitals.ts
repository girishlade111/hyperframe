import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const LOCAL_URL = process.env.LOCAL_URL || 'http://127.0.0.1:4173';
const ROUTES = ['/', '/about', '/service', '/project', '/blog', '/contact'];

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const results: Array<Record<string, unknown>> = [];

  for (const route of ROUTES) {
    await page.addInitScript(() => {
      (window as unknown as Record<string, unknown>).__hfPerf = { cls: 0, lcp: 0 };
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as Array<PerformanceEntry & { hadRecentInput?: boolean; value?: number }>) {
          if (!entry.hadRecentInput) {
            (window as unknown as { __hfPerf: { cls: number } }).__hfPerf.cls += entry.value || 0;
          }
        }
      }).observe({ type: 'layout-shift', buffered: true });
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const last = entries[entries.length - 1];
        if (last) {
          (window as unknown as { __hfPerf: { lcp: number } }).__hfPerf.lcp = last.startTime;
        }
      }).observe({ type: 'largest-contentful-paint', buffered: true });
    });

    const t0 = Date.now();
    await page.goto(`${LOCAL_URL}${route}`, { waitUntil: 'networkidle' });
    const loadMs = Date.now() - t0;
    await page.waitForTimeout(800);

    const perf = await page.evaluate(() => {
      const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
      const paint = performance.getEntriesByType('paint');
      const fcp = paint.find((p) => p.name === 'first-contentful-paint')?.startTime || 0;
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const externalRequests = resources
        .map((r) => r.name)
        .filter((u) => !u.startsWith('http://127.0.0.1') && !u.startsWith('data:'));
      const totalBytes = resources.reduce((sum, r) => sum + (r.transferSize || 0), 0);
      const perfData = (window as unknown as { __hfPerf?: { cls: number; lcp: number } }).__hfPerf || { cls: 0, lcp: 0 };
      return {
        fcpMs: Math.round(fcp),
        lcpMs: Math.round(perfData.lcp),
        cls: Number(perfData.cls.toFixed(4)),
        domInteractiveMs: nav ? Math.round(nav.domInteractive) : 0,
        transferKB: Number((totalBytes / 1024).toFixed(1)),
        resourceCount: resources.length,
        externalRequests,
      };
    });

    results.push({ route, wallLoadMs: loadMs, ...perf });
    console.log(`${route}: FCP=${perf.fcpMs}ms LCP=${perf.lcpMs}ms CLS=${perf.cls} transfer=${perf.transferKB}KB external=${perf.externalRequests.length}`);
  }

  await browser.close();
  fs.mkdirSync(path.resolve('docs/testing'), { recursive: true });
  fs.writeFileSync(path.resolve('docs/testing/vitals-metrics.json'), JSON.stringify(results, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
