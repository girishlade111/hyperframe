# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.ts >> HyperFrame Multi-Page Routing & Rendering >> route /style-guide renders without console errors or broken images
- Location: tests\site.spec.ts:39:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  - 1
+ Received  + 4

- Array []
+ Array [
+   "/assets/icons/linkedin-02.svg",
+   "/assets/icons/linkedin-02.svg",
+ ]
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e7]:
      - generic [ref=e8]: "NEW YORK, USA { 01:55 AM }"
      - link "HyperFrame Home" [ref=e11] [cursor=pointer]:
        - /url: /
        - img "HyperFrame" [ref=e12]
      - button "Open navigation menu" [ref=e13] [cursor=pointer]
    - generic [ref=e16]: Available for New Projects
  - navigation [aria-hidden]:
    - generic:
      - generic:
        - generic:
          - generic:
            - link:
              - /url: /
              - generic:
                - generic: "{"
                - generic: Home
                - generic: "}"
            - link:
              - /url: /about
              - generic:
                - generic: "{"
                - generic: About
                - generic: "}"
            - link:
              - /url: /service
              - generic:
                - generic: "{"
                - generic: Services
                - generic: "}"
            - link:
              - /url: /project
              - generic:
                - generic: "{"
                - generic: Projects
                - generic: "}"
            - link:
              - /url: /blog
              - generic:
                - generic: "{"
                - generic: Blogs
                - generic: "}"
            - link:
              - /url: /contact
              - generic:
                - generic: "{"
                - generic: Contact
                - generic: "}"
          - generic:
            - generic:
              - link:
                - /url: tel:(239)555-0108
                - text: (239) 555-0108
              - link:
                - /url: mailto:hello@hyperframe.com?subject=Contact%20With%20Us
                - text: hello@hyperframe.com
            - generic:
              - link:
                - /url: https://www.facebook.com/
              - link:
                - /url: https://www.instagram.com/
              - link:
                - /url: https://www.x.com/
              - link:
                - /url: https://www.linkedin.com/
  - main [ref=e20]:
    - generic [ref=e23]:
      - heading "Style Guide" [level=1] [ref=e25]
      - paragraph [ref=e27]: "Your design backbone: colors, typography, and buttons kept clean and consistent across every screen."
      - link "Back To Home" [ref=e29] [cursor=pointer]:
        - /url: /
        - generic [ref=e30]:
          - generic [ref=e31]: Back To Home
          - generic [aria-hidden] [ref=e32]: Back To Home
    - generic [ref=e37]:
      - generic [ref=e38]:
        - heading "Colors Style" [level=2] [ref=e39]
        - generic [ref=e40]:
          - generic [ref=e41]:
            - heading "Primary Color" [level=3] [ref=e44]
            - generic [ref=e47]:
              - generic [ref=e48]: Primary Color
              - generic [ref=e49]: "#FF4C03"
          - generic [ref=e51]:
            - heading "Title Color" [level=3] [ref=e54]
            - generic [ref=e55]:
              - generic [ref=e57]:
                - generic [ref=e58]: Title Dark
                - generic [ref=e59]: "#03020B"
              - generic [ref=e62]:
                - generic [ref=e63]: Title White
                - generic [ref=e64]: "#FFFFFF"
          - generic [ref=e66]:
            - heading "Paragraph Color" [level=3] [ref=e69]
            - generic [ref=e70]:
              - generic [ref=e72]:
                - generic [ref=e73]: Paragraph Dark
                - generic [ref=e74]: "#676E80"
              - generic [ref=e77]:
                - generic [ref=e78]: Paragraph Grey
                - generic [ref=e79]: "#E1E2E5"
          - generic [ref=e81]:
            - heading "Background Color" [level=3] [ref=e84]
            - generic [ref=e85]:
              - generic [ref=e87]:
                - generic [ref=e88]: Background Dark
                - generic [ref=e89]: "#03020B"
              - generic [ref=e92]:
                - generic [ref=e93]: Background White
                - generic [ref=e94]: "#FFFFFF"
              - generic [ref=e97]:
                - generic [ref=e98]: Background Grey
                - generic [ref=e99]: "#F5F5F5"
              - generic [ref=e102]:
                - generic [ref=e103]: BG Button Grey
                - generic [ref=e104]: "#F1F1F1"
          - generic [ref=e106]:
            - heading "Stroke Color" [level=3] [ref=e109]
            - generic [ref=e110]:
              - generic [ref=e112]:
                - generic [ref=e113]: Stroke Light
                - generic [ref=e114]: "#E1E2E5"
              - generic [ref=e117]:
                - generic [ref=e118]: Stroke Dark
                - generic [ref=e119]: "#595959"
      - generic [ref=e121]:
        - heading "Typography Style" [level=2] [ref=e122]
        - generic [ref=e123]:
          - generic [ref=e124]: Typography Scale
          - generic [ref=e127]: Specs
        - generic [ref=e128]:
          - generic [ref=e129]:
            - generic [ref=e130]: Beyond The Pixel.
            - generic [ref=e131]: Size 140px / LH 100%
          - generic [ref=e133]:
            - generic [ref=e134]: Heading 1
            - generic [ref=e135]: Size 96px / LH 110%
          - generic [ref=e137]:
            - generic [ref=e138]: Heading 2
            - generic [ref=e139]: Size 72px / LH 115%
          - generic [ref=e141]:
            - generic [ref=e142]: Heading 3
            - generic [ref=e143]: Size 72px / LH 115%
          - generic [ref=e145]:
            - generic [ref=e146]: Heading 4
            - generic [ref=e147]: Size 56px / LH 115%
          - generic [ref=e149]:
            - generic [ref=e150]: Heading 5
            - generic [ref=e151]: Size 48px / LH 120%
          - generic [ref=e153]:
            - generic [ref=e154]: Heading 6
            - generic [ref=e155]: Size 40px / LH 120%
          - generic [ref=e157]:
            - generic [ref=e158]: Body Copy Large
            - generic [ref=e159]: Size 24px / LH 145%
          - generic [ref=e161]:
            - generic [ref=e162]: Body Copy Base
            - generic [ref=e163]: Size 18px / LH 150%
          - generic [ref=e165]:
            - generic [ref=e166]: Button Text Small
            - generic [ref=e167]: Size 16px / LH 150%
      - generic [ref=e169]:
        - heading "Buttons Style" [level=2] [ref=e170]
        - generic [ref=e171]:
          - link "Primary Button" [ref=e172] [cursor=pointer]:
            - /url: /contact
            - generic [ref=e173]:
              - generic [ref=e174]: Primary Button
              - generic [aria-hidden] [ref=e175]: Primary Button
          - link "Grey Button" [ref=e178] [cursor=pointer]:
            - /url: /service
            - generic [ref=e179]:
              - generic [ref=e180]: Grey Button
              - generic [aria-hidden] [ref=e181]: Grey Button
          - link "Back To Home" [ref=e184] [cursor=pointer]:
            - /url: /
            - generic [ref=e185]:
              - generic [ref=e186]: Back To Home
              - generic [aria-hidden] [ref=e187]: Back To Home
  - contentinfo [ref=e190]:
    - generic [ref=e191]:
      - generic [ref=e192]:
        - generic [ref=e193]:
          - link "HyperFrame Home" [ref=e194] [cursor=pointer]:
            - /url: /
            - img "HyperFrame" [ref=e195]
          - generic [ref=e196]:
            - generic [ref=e197]: Stay Connected With Us
            - generic [ref=e198]:
              - textbox "Enter your email" [ref=e199]:
                - /placeholder: Enter your email...
              - button "Subscribe to newsletter" [ref=e200] [cursor=pointer]
        - generic [ref=e201]:
          - generic [ref=e202]:
            - link "About Us" [ref=e203] [cursor=pointer]:
              - /url: /about
              - generic [aria-hidden] [ref=e205]: About Us
            - link "Services" [ref=e206] [cursor=pointer]:
              - /url: /service
              - generic [aria-hidden] [ref=e208]: Services
            - link "Services Details" [ref=e209] [cursor=pointer]:
              - /url: /service/branding
              - generic [aria-hidden] [ref=e211]: Services Details
            - link "Project" [ref=e212] [cursor=pointer]:
              - /url: /project
              - generic [aria-hidden] [ref=e214]: Project
            - link "Project Details" [ref=e215] [cursor=pointer]:
              - /url: /project/spinex-pro
              - generic [aria-hidden] [ref=e217]: Project Details
            - link "Contact Us" [ref=e218] [cursor=pointer]:
              - /url: /contact
              - generic [aria-hidden] [ref=e220]: Contact Us
          - generic [ref=e221]:
            - link "Style Guide" [ref=e222] [cursor=pointer]:
              - /url: /style-guide
              - generic [aria-hidden] [ref=e224]: Style Guide
            - link "Licenses" [ref=e225] [cursor=pointer]:
              - /url: /licenses
              - generic [aria-hidden] [ref=e227]: Licenses
            - link "Changelog" [ref=e228] [cursor=pointer]:
              - /url: /changelog
              - generic [aria-hidden] [ref=e230]: Changelog
            - link "Privacy Policy" [ref=e231] [cursor=pointer]:
              - /url: /privacy
              - generic [aria-hidden] [ref=e233]: Privacy Policy
            - link "Instructions" [ref=e234] [cursor=pointer]:
              - /url: /instructions
              - generic [aria-hidden] [ref=e236]: Instructions
            - link "404" [ref=e237] [cursor=pointer]:
              - /url: /404
              - generic [aria-hidden] [ref=e239]: "404"
            - link "Password" [ref=e240] [cursor=pointer]:
              - /url: /401
              - generic [aria-hidden] [ref=e242]: Password
      - generic [ref=e243]:
        - generic [ref=e244]:
          - link "(239) 555-0108" [ref=e245] [cursor=pointer]:
            - /url: tel:(239)555-0108
          - link "hello@hyperframe.com" [ref=e246] [cursor=pointer]:
            - /url: mailto:hello@hyperframe.com?subject=Contact%20With%20Us
        - generic [ref=e247]:
          - link "Facebook" [ref=e248] [cursor=pointer]:
            - /url: https://www.facebook.com/
            - img "Facebook" [ref=e249]
          - link "Instagram" [ref=e250] [cursor=pointer]:
            - /url: https://www.instagram.com/
            - img "Instagram" [ref=e251]
          - link "X" [ref=e252] [cursor=pointer]:
            - /url: https://www.x.com/
            - img "X" [ref=e253]
          - link "LinkedIn" [ref=e254] [cursor=pointer]:
            - /url: https://www.linkedin.com/
            - img "LinkedIn" [ref=e255]
      - generic [ref=e256]:
        - generic [ref=e257]: Copyright (c) HyperFrame 2026
        - generic [ref=e258]: Independent React & GSAP Reconstruction
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | const coreRoutes = [
  4   |   '/',
  5   |   '/about',
  6   |   '/service',
  7   |   '/project',
  8   |   '/blog',
  9   |   '/contact',
  10  |   '/style-guide',
  11  |   '/licenses',
  12  |   '/changelog',
  13  |   '/instructions',
  14  |   '/privacy',
  15  |   '/401',
  16  |   '/password',
  17  | ];
  18  | 
  19  | const projectSlugs = ['profast', 'securex', 'spinex-pro', 'virtualex', 'fashionable', 'co-brand'];
  20  | const serviceSlugs = [
  21  |   'branding',
  22  |   'ui-ux-design',
  23  |   'illustration-design',
  24  |   'no-code-development',
  25  |   'custom-development',
  26  | ];
  27  | const blogSlugs = [
  28  |   '5-website-design-trends-to-watch',
  29  |   'how-to-create-a-design-systems',
  30  |   'the-5-important-trend-in-website-design',
  31  |   '20-useful-prompt-for-webflow',
  32  |   'top-5-webflow-features-in-2025',
  33  |   'how-colors-layouts-influence-users',
  34  |   'how-to-balance-creativity-strategy',
  35  | ];
  36  | 
  37  | test.describe('HyperFrame Multi-Page Routing & Rendering', () => {
  38  |   for (const route of coreRoutes) {
  39  |     test(`route ${route} renders without console errors or broken images`, async ({ page }) => {
  40  |       const errors: string[] = [];
  41  |       page.on('pageerror', (e) => errors.push(e.message));
  42  |       page.on('console', (msg) => {
  43  |         if (msg.type() === 'error') errors.push(msg.text());
  44  |       });
  45  | 
  46  |       await page.setViewportSize({ width: 1440, height: 900 });
  47  |       const res = await page.goto(route, { waitUntil: 'networkidle' });
  48  |       expect(res?.status()).toBe(200);
  49  |       await expect(page).not.toHaveTitle('');
  50  |       await expect(page.locator('header').first()).toBeVisible();
  51  | 
  52  |       // Trigger lazy images by scrolling
  53  |       await page.evaluate(async () => {
  54  |         window.scrollTo(0, document.body.scrollHeight);
  55  |         await new Promise((r) => setTimeout(r, 250));
  56  |         window.scrollTo(0, 0);
  57  |       });
  58  |       await page.waitForTimeout(250);
  59  | 
  60  |       const brokenImages = await page.evaluate(() => {
  61  |         const imgs = Array.from(document.querySelectorAll('img'));
  62  |         return imgs
  63  |           .filter((img) => img.offsetParent !== null && (!img.complete || img.naturalWidth === 0))
  64  |           .map((img) => img.getAttribute('src'));
  65  |       });
  66  | 
  67  |       const overflow = await page.evaluate(() => {
  68  |         return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  69  |       });
  70  | 
> 71  |       expect(brokenImages).toEqual([]);
      |                            ^ Error: expect(received).toEqual(expected) // deep equality
  72  |       expect(overflow).toBe(false);
  73  |       expect(errors).toEqual([]);
  74  |     });
  75  |   }
  76  | 
  77  |   test('all CMS detail slugs render dynamic headings and are not 404', async ({ page }) => {
  78  |     for (const slug of projectSlugs) {
  79  |       await page.goto(`/project/${slug}`, { waitUntil: 'domcontentloaded' });
  80  |       await expect(page.locator('h1').first()).not.toContainText('Page Not Found');
  81  |     }
  82  |     for (const slug of serviceSlugs) {
  83  |       await page.goto(`/service/${slug}`, { waitUntil: 'domcontentloaded' });
  84  |       await expect(page.locator('h1').first()).not.toContainText('Page Not Found');
  85  |     }
  86  |     for (const slug of blogSlugs) {
  87  |       await page.goto(`/blog/${slug}`, { waitUntil: 'domcontentloaded' });
  88  |       await expect(page.locator('h1').first()).not.toContainText('Page Not Found');
  89  |     }
  90  |   });
  91  | 
  92  |   test('unmatched route renders branded 404 page with Back To Homepage', async ({ page }) => {
  93  |     await page.goto('/nonexistent-route-check', { waitUntil: 'domcontentloaded' });
  94  |     await expect(page.locator('h1')).toContainText('Page Not Found!');
  95  |     await page.getByRole('link', { name: 'Back To Homepage' }).click();
  96  |     await expect(page).toHaveURL('/');
  97  |   });
  98  | });
  99  | 
  100 | test.describe('HyperFrame Interactive States & Forms', () => {
  101 |   test('fullscreen menu opens, navigates, and closes via Escape with focus restore', async ({ page }) => {
  102 |     await page.setViewportSize({ width: 1440, height: 900 });
  103 |     await page.goto('/', { waitUntil: 'networkidle' });
  104 | 
  105 |     const menuToggle = page.getByRole('button', { name: /menu/i });
  106 |     await expect(menuToggle).toHaveAttribute('aria-expanded', 'false');
  107 |     await menuToggle.click();
  108 |     await expect(menuToggle).toHaveAttribute('aria-expanded', 'true');
  109 | 
  110 |     const drawer = page.locator('.nav-menu.active');
  111 |     await expect(drawer).toBeVisible();
  112 | 
  113 |     await page.keyboard.press('Escape');
  114 |     await expect(menuToggle).toHaveAttribute('aria-expanded', 'false');
  115 |     await expect(menuToggle).toBeFocused();
  116 |   });
  117 | 
  118 |   test('services showcase expands on click/hover', async ({ page }) => {
  119 |     await page.setViewportSize({ width: 1440, height: 900 });
  120 |     await page.goto('/', { waitUntil: 'networkidle' });
  121 | 
  122 |     const firstServiceToggle = page.locator('.service-single-item button').first();
  123 |     await firstServiceToggle.scrollIntoViewIfNeeded();
  124 |     await firstServiceToggle.click();
  125 |     await expect(firstServiceToggle).toHaveAttribute('aria-expanded', 'true');
  126 |   });
  127 | 
  128 |   test('testimonial slider prev and next controls switch slides', async ({ page }) => {
  129 |     await page.setViewportSize({ width: 1440, height: 900 });
  130 |     await page.goto('/', { waitUntil: 'networkidle' });
  131 | 
  132 |     const slider = page.locator('.testimonials-slider, section.testimonials').first();
  133 |     await slider.scrollIntoViewIfNeeded();
  134 | 
  135 |     const quoteLocator = page.locator('.testimonials-quote, .testimonial-quote, .slider-quote').first();
  136 |     const initialQuote = await quoteLocator.textContent();
  137 | 
  138 |     await page.getByRole('button', { name: /next/i }).click();
  139 |     await expect(quoteLocator).not.toHaveText(initialQuote || '');
  140 | 
  141 |     await page.getByRole('button', { name: /previous/i }).click();
  142 |     await expect(quoteLocator).toHaveText(initialQuote || '');
  143 |   });
  144 | 
  145 |   test('pricing Add Development switch updates plan prices', async ({ page }) => {
  146 |     await page.setViewportSize({ width: 1440, height: 900 });
  147 |     await page.goto('/', { waitUntil: 'networkidle' });
  148 | 
  149 |     const pricingSection = page.locator('section.pricing').first();
  150 |     await pricingSection.scrollIntoViewIfNeeded();
  151 | 
  152 |     await expect(pricingSection).toContainText('$1,999');
  153 |     await expect(pricingSection).toContainText('$4,999');
  154 | 
  155 |     const toggle = pricingSection.getByRole('switch').first();
  156 |     await toggle.click();
  157 |     await expect(pricingSection).toContainText('$5,499');
  158 |   });
  159 | 
  160 |   test('contact form validates required inputs and submits local preview cleanly', async ({ page }) => {
  161 |     await page.setViewportSize({ width: 1440, height: 900 });
  162 |     await page.goto('/contact', { waitUntil: 'networkidle' });
  163 | 
  164 |     await page.getByRole('button', { name: /submit|send/i }).click();
  165 |     await expect(page.locator('form').first()).toContainText('Please enter your full name.');
  166 | 
  167 |     await page.locator('input[name="fullName"]').fill('Alex Mercer');
  168 |     await page.locator('input[name="company"]').fill('ProFast Labs');
  169 |     await page.locator('input[name="email"]').fill('alex@example.com');
  170 |     await page.locator('textarea[name="message"]').fill('Looking to redesign our SaaS platform.');
  171 |     await page.locator('input[type="checkbox"]').check();
```