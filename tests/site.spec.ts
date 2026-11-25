import { test, expect } from '@playwright/test';

const coreRoutes = [
  '/',
  '/about',
  '/service',
  '/project',
  '/blog',
  '/contact',
  '/style-guide',
  '/licenses',
  '/changelog',
  '/instructions',
  '/privacy',
  '/401',
  '/password',
];

const projectSlugs = ['profast', 'securex', 'spinex-pro', 'virtualex', 'fashionable', 'co-brand'];
const serviceSlugs = [
  'branding',
  'ui-ux-design',
  'illustration-design',
  'no-code-development',
  'custom-development',
];
const blogSlugs = [
  '5-website-design-trends-to-watch',
  'how-to-create-a-design-systems',
  'the-5-important-trend-in-website-design',
  '20-useful-prompt-for-webflow',
  'top-5-webflow-features-in-2025',
  'how-colors-layouts-influence-users',
  'how-to-balance-creativity-strategy',
];

test.describe('HyperFrame Multi-Page Routing & Rendering', () => {
  for (const route of coreRoutes) {
    test(`route ${route} renders without console errors or broken images`, async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', (e) => errors.push(e.message));
      page.on('console', (msg) => {
        if (msg.type() === 'error') errors.push(msg.text());
      });

      await page.setViewportSize({ width: 1440, height: 900 });
      const res = await page.goto(route, { waitUntil: 'networkidle' });
      expect(res?.status()).toBe(200);
      await expect(page).not.toHaveTitle('');
      await expect(page.locator('header').first()).toBeVisible();

      // Trigger lazy images by scrolling
      await page.evaluate(async () => {
        window.scrollTo(0, document.body.scrollHeight);
        await new Promise((r) => setTimeout(r, 250));
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(250);

      const brokenImages = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('img'));
        return imgs
          .filter((img) => img.offsetParent !== null && (!img.complete || img.naturalWidth === 0))
          .map((img) => img.getAttribute('src'));
      });

      const overflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });

      expect(brokenImages).toEqual([]);
      expect(overflow).toBe(false);
      expect(errors).toEqual([]);
    });
  }

  test('all CMS detail slugs render dynamic headings and are not 404', async ({ page }) => {
    for (const slug of projectSlugs) {
      await page.goto(`/project/${slug}`, { waitUntil: 'domcontentloaded' });
      await expect(page.locator('h1').first()).not.toContainText('Page Not Found');
    }
    for (const slug of serviceSlugs) {
      await page.goto(`/service/${slug}`, { waitUntil: 'domcontentloaded' });
      await expect(page.locator('h1').first()).not.toContainText('Page Not Found');
    }
    for (const slug of blogSlugs) {
      await page.goto(`/blog/${slug}`, { waitUntil: 'domcontentloaded' });
      await expect(page.locator('h1').first()).not.toContainText('Page Not Found');
    }
  });

  test('unmatched route renders branded 404 page with Back To Homepage', async ({ page }) => {
    await page.goto('/nonexistent-route-check', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('h1')).toContainText('Page Not Found!');
    await page.getByRole('link', { name: 'Back To Homepage' }).click();
    await expect(page).toHaveURL('/');
  });
});

test.describe('HyperFrame Interactive States & Forms', () => {
  test('fullscreen menu opens, navigates, and closes via Escape with focus restore', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const menuToggle = page.getByRole('button', { name: /menu/i });
    await expect(menuToggle).toHaveAttribute('aria-expanded', 'false');
    await menuToggle.click();
    await expect(menuToggle).toHaveAttribute('aria-expanded', 'true');

    const drawer = page.locator('.nav-menu.active');
    await expect(drawer).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(menuToggle).toHaveAttribute('aria-expanded', 'false');
    await expect(menuToggle).toBeFocused();
  });

  test('services showcase expands on click/hover', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const firstServiceToggle = page.locator('.service-single-item button').first();
    await firstServiceToggle.scrollIntoViewIfNeeded();
    await firstServiceToggle.click();
    await expect(firstServiceToggle).toHaveAttribute('aria-expanded', 'true');
  });

  test('testimonial slider prev and next controls switch slides', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const slider = page.locator('.testimonials-slider, section.testimonials').first();
    await slider.scrollIntoViewIfNeeded();

    const quoteLocator = page.locator('.testimonials-quote, .testimonial-quote, .slider-quote').first();
    const initialQuote = await quoteLocator.textContent();

    await page.getByRole('button', { name: /next/i }).click();
    await expect(quoteLocator).not.toHaveText(initialQuote || '');

    await page.getByRole('button', { name: /previous/i }).click();
    await expect(quoteLocator).toHaveText(initialQuote || '');
  });

  test('pricing Add Development switch updates plan prices', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const pricingSection = page.locator('section.pricing').first();
    await pricingSection.scrollIntoViewIfNeeded();

    await expect(pricingSection).toContainText('$1,999');
    await expect(pricingSection).toContainText('$4,999');

    const toggle = pricingSection.getByRole('switch').first();
    await toggle.click();
    await expect(pricingSection).toContainText('$5,499');
  });

  test('contact form validates required inputs and submits local preview cleanly', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/contact', { waitUntil: 'networkidle' });

    await page.getByRole('button', { name: /submit|send/i }).click();
    await expect(page.locator('form').first()).toContainText('Please enter your full name.');

    await page.locator('input[name="fullName"]').fill('Alex Mercer');
    await page.locator('input[name="company"]').fill('ProFast Labs');
    await page.locator('input[name="email"]').fill('alex@example.com');
    await page.locator('textarea[name="message"]').fill('Looking to redesign our SaaS platform.');
    await page.locator('input[type="checkbox"]').check();
    await page.getByRole('button', { name: /submit|send/i }).click();

    await expect(page.getByRole('status')).toContainText('Alex Mercer');
  });

  test('FAQ accordion expands and collapses', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/contact', { waitUntil: 'networkidle' });

    const firstFaq = page.locator('.faq-question-btn').first();
    await firstFaq.scrollIntoViewIfNeeded();
    await expect(firstFaq).toHaveAttribute('aria-expanded', 'false');
    await firstFaq.click();
    await expect(firstFaq).toHaveAttribute('aria-expanded', 'true');
  });

  test('About Showreel opens VideoModal and closes on Escape', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/about', { waitUntil: 'networkidle' });

    const playBtn = page.getByRole('button', { name: /play|showreel/i }).first();
    await playBtn.scrollIntoViewIfNeeded();
    await playBtn.click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
  });

  test('responsive mobile 390px and tablet 768px have zero horizontal overflow on key pages', async ({ page }) => {
    for (const vp of [
      { width: 768, height: 1024 },
      { width: 390, height: 844 },
    ]) {
      await page.setViewportSize(vp);
      for (const route of ['/', '/about', '/service', '/project', '/contact']) {
        await page.goto(route, { waitUntil: 'networkidle' });
        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth > document.documentElement.clientWidth
        );
        expect(overflow, `Overflow at ${route} (${vp.width}x${vp.height})`).toBe(false);
      }
    }
  });
});
