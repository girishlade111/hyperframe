import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const BASE_URL = 'https://hyperframe-template.webflow.io';

async function main() {
  const refDir = path.resolve('docs/reference');
  for (const sub of ['desktop', 'tablet', 'mobile', 'interactions', 'animation-frames']) {
    fs.mkdirSync(path.join(refDir, sub), { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(1800);
  await page.screenshot({ path: path.join(refDir, 'desktop/home-1440-hero.png') });

  // Capture open fullscreen menu
  await page.locator('.navbar-button-wrap').click({ force: true });
  await page.waitForTimeout(900);
  const menuMetrics = await page.evaluate(() => {
    const nav = document.querySelector('.nav-desktop') as HTMLElement | null;
    if (!nav) return null;
    const cs = getComputedStyle(nav);
    return {
      display: cs.display,
      transform: cs.transform,
      backgroundImage: cs.backgroundImage,
      height: nav.getBoundingClientRect().height,
      links: Array.from(nav.querySelectorAll('.nav-desk-link')).map((a) => ({
        text: a.textContent?.trim(),
        href: a.getAttribute('href'),
        fontSize: getComputedStyle(a.querySelector('.nav-menu-text') || a).fontSize,
        color: getComputedStyle(a.querySelector('.nav-menu-text') || a).color,
      })),
    };
  });
  await page.screenshot({ path: path.join(refDir, 'interactions/navigation-1440-open.png') });
  // Close menu
  await page.locator('.navbar-button-wrap').click({ force: true });
  await page.waitForTimeout(800);

  // Inspect project stacking on scroll
  const projectCards = page.locator('.section.project-a .project-card');
  const projectCount = await projectCards.count();
  const projectFrames: Array<Record<string, unknown>> = [];
  const projectSecBox = await page.locator('.section.project-a').boundingBox();
  if (projectSecBox) {
    for (const frac of [0.1, 0.35, 0.6, 0.85]) {
      const targetY = Math.round(projectSecBox.y + projectSecBox.height * frac);
      await page.evaluate((y) => window.scrollTo(0, y), targetY);
      await page.waitForTimeout(500);
      const transforms = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.section.project-a .project-cl-wrap')).map((el, i) => {
          const rect = el.getBoundingClientRect();
          const card = el.querySelector('.project-card');
          return {
            index: i,
            top: Math.round(rect.top),
            position: getComputedStyle(el).position,
            cardTransform: card ? getComputedStyle(card).transform : 'none',
            cardScale: card ? getComputedStyle(card).scale : 'none',
          };
        });
      });
      projectFrames.push({ frac, scrollY: targetY, transforms });
      await page.screenshot({ path: path.join(refDir, `animation-frames/home-projects-${Math.round(frac * 100)}.png`) });
    }
  }

  // Inspect service hover state
  const serviceSec = page.locator('.section.service-b').first();
  await serviceSec.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  const firstService = serviceSec.locator('.service-card').first();
  await firstService.hover();
  await page.waitForTimeout(600);
  const serviceHoverMetrics = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.section.service-b .service-card')).map((card, i) => {
      const btm = card.querySelector('.service-card-bottom-wrap') as HTMLElement | null;
      const title = card.querySelector('.service-card-title') as HTMLElement | null;
      return {
        index: i,
        title: title?.textContent?.trim(),
        titleColor: title ? getComputedStyle(title).color : '',
        bottomHeight: btm ? Math.round(btm.getBoundingClientRect().height) : 0,
        bottomOpacity: btm ? getComputedStyle(btm).opacity : '',
      };
    });
  });
  await page.screenshot({ path: path.join(refDir, 'interactions/services-hover-01.png') });

  // Inspect pricing toggle
  const pricingSec = page.locator('.pricing-card').first();
  await pricingSec.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await page.locator('.pricing-toggle-wrap').first().click({ force: true });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(refDir, 'interactions/pricing-toggle-active.png') });

  // Inspect FAQ expansion
  await page.goto(`${BASE_URL}/service`, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(1200);
  const faqItem = page.locator('.faq-single-wrap').first();
  await faqItem.scrollIntoViewIfNeeded();
  await faqItem.click({ force: true });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(refDir, 'interactions/faq-expanded.png') });

  // Full page captures at 1440 for key routes
  for (const [slug, route] of [
    ['home', '/'],
    ['about', '/about'],
    ['service', '/service'],
    ['project', '/project'],
    ['blog', '/blog'],
    ['contact', '/contact'],
    ['style-guide', '/style-guide'],
    ['privacy', '/privacy'],
    ['404', '/404'],
  ]) {
    await page.goto(`${BASE_URL}${route === '/' ? '' : route}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(1200);
    await page.evaluate(async () => {
      window.scrollTo(0, document.body.scrollHeight);
      await new Promise((r) => setTimeout(r, 300));
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(600);
    await page.screenshot({ path: path.join(refDir, `desktop/${slug}-1440-full.png`), fullPage: true });
  }

  // Mobile 390x844
  await page.setViewportSize({ width: 390, height: 844 });
  for (const [slug, route] of [
    ['home', '/'],
    ['project', '/project'],
    ['about', '/about'],
  ]) {
    await page.goto(`${BASE_URL}${route === '/' ? '' : route}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(refDir, `mobile/${slug}-390-full.png`), fullPage: true });
  }

  await browser.close();

  fs.writeFileSync(
    path.resolve('docs/research/interaction-measurements.json'),
    JSON.stringify({ menuMetrics, projectCount, projectFrames, serviceHoverMetrics }, null, 2)
  );
  console.log('Saved interaction-measurements.json and reference screenshots.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
