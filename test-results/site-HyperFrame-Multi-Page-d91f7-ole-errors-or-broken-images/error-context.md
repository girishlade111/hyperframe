# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.ts >> HyperFrame Multi-Page Routing & Rendering >> route /privacy renders without console errors or broken images
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
      - heading "Privacy Policy" [level=1] [ref=e25]
      - paragraph [ref=e27]: HyperFrame operates the agency portfolio website (the “Service”). This page informs you of our policies regarding the collection, use, and disclosure of Personal Information when you use our Service.
    - generic [ref=e31]:
      - generic [ref=e32]:
        - heading "1. Information We Collect" [level=2] [ref=e33]
        - generic [ref=e34]:
          - paragraph [ref=e35]: "We may collect:"
          - list [ref=e36]:
            - listitem [ref=e37]: Name, email address, and message details submitted via our contact form
            - listitem [ref=e38]: Technical data such as IP address, browser type, and device information
      - generic [ref=e39]:
        - heading "2. How We Use Your Information" [level=2] [ref=e40]
        - generic [ref=e41]:
          - paragraph [ref=e42]: "We use your information to:"
          - list [ref=e43]:
            - listitem [ref=e44]: Respond to inquiries and provide our agency services
            - listitem [ref=e45]: Improve website performance and user experience
            - listitem [ref=e46]: Comply with legal obligations
      - generic [ref=e47]:
        - heading "3. Data Sharing" [level=2] [ref=e48]
        - paragraph [ref=e50]: We do not sell or rent your personal information. Data may be shared only with trusted service providers necessary to operate our website or when required by law.
      - generic [ref=e51]:
        - heading "4. Data Retention" [level=2] [ref=e52]
        - paragraph [ref=e54]: We store your information only as long as necessary to fulfill the purposes outlined in this policy.
      - generic [ref=e55]:
        - heading "5. Cookies" [level=2] [ref=e56]
        - paragraph [ref=e58]: Our website may use essential cookies to ensure proper functionality and basic analytics. You can disable cookies through your browser settings.
      - generic [ref=e59]:
        - heading "6. Data Security" [level=2] [ref=e60]
        - paragraph [ref=e62]: We take reasonable measures to protect your personal information, but cannot guarantee 100% security online.
      - generic [ref=e63]:
        - heading "7. Third-Party Links" [level=2] [ref=e64]
        - paragraph [ref=e66]: Our site may include links to external websites. We are not responsible for their privacy practices.
      - generic [ref=e67]:
        - heading "8. Policy Updates" [level=2] [ref=e68]
        - paragraph [ref=e70]: We may update this Privacy Policy from time to time. Changes will appear on this page with a revised date.
      - generic [ref=e71]:
        - heading "9. Contact Us" [level=2] [ref=e72]
        - paragraph [ref=e74]:
          - text: If you have questions about this Privacy Policy, please reach us at
          - link "support@hyperframe.com" [ref=e75] [cursor=pointer]:
            - /url: mailto:support@hyperframe.com
          - text: .
  - contentinfo [ref=e76]:
    - generic [ref=e77]:
      - generic [ref=e78]:
        - generic [ref=e79]:
          - link "HyperFrame Home" [ref=e80] [cursor=pointer]:
            - /url: /
            - img "HyperFrame" [ref=e81]
          - generic [ref=e82]:
            - generic [ref=e83]: Stay Connected With Us
            - generic [ref=e84]:
              - textbox "Enter your email" [ref=e85]:
                - /placeholder: Enter your email...
              - button "Subscribe to newsletter" [ref=e86] [cursor=pointer]
        - generic [ref=e87]:
          - generic [ref=e88]:
            - link "About Us" [ref=e89] [cursor=pointer]:
              - /url: /about
              - generic [aria-hidden] [ref=e91]: About Us
            - link "Services" [ref=e92] [cursor=pointer]:
              - /url: /service
              - generic [aria-hidden] [ref=e94]: Services
            - link "Services Details" [ref=e95] [cursor=pointer]:
              - /url: /service/branding
              - generic [aria-hidden] [ref=e97]: Services Details
            - link "Project" [ref=e98] [cursor=pointer]:
              - /url: /project
              - generic [aria-hidden] [ref=e100]: Project
            - link "Project Details" [ref=e101] [cursor=pointer]:
              - /url: /project/spinex-pro
              - generic [aria-hidden] [ref=e103]: Project Details
            - link "Contact Us" [ref=e104] [cursor=pointer]:
              - /url: /contact
              - generic [aria-hidden] [ref=e106]: Contact Us
          - generic [ref=e107]:
            - link "Style Guide" [ref=e108] [cursor=pointer]:
              - /url: /style-guide
              - generic [aria-hidden] [ref=e110]: Style Guide
            - link "Licenses" [ref=e111] [cursor=pointer]:
              - /url: /licenses
              - generic [aria-hidden] [ref=e113]: Licenses
            - link "Changelog" [ref=e114] [cursor=pointer]:
              - /url: /changelog
              - generic [aria-hidden] [ref=e116]: Changelog
            - link "Privacy Policy" [ref=e117] [cursor=pointer]:
              - /url: /privacy
              - generic [aria-hidden] [ref=e119]: Privacy Policy
            - link "Instructions" [ref=e120] [cursor=pointer]:
              - /url: /instructions
              - generic [aria-hidden] [ref=e122]: Instructions
            - link "404" [ref=e123] [cursor=pointer]:
              - /url: /404
              - generic [aria-hidden] [ref=e125]: "404"
            - link "Password" [ref=e126] [cursor=pointer]:
              - /url: /401
              - generic [aria-hidden] [ref=e128]: Password
      - generic [ref=e129]:
        - generic [ref=e130]:
          - link "(239) 555-0108" [ref=e131] [cursor=pointer]:
            - /url: tel:(239)555-0108
          - link "hello@hyperframe.com" [ref=e132] [cursor=pointer]:
            - /url: mailto:hello@hyperframe.com?subject=Contact%20With%20Us
        - generic [ref=e133]:
          - link "Facebook" [ref=e134] [cursor=pointer]:
            - /url: https://www.facebook.com/
            - img "Facebook" [ref=e135]
          - link "Instagram" [ref=e136] [cursor=pointer]:
            - /url: https://www.instagram.com/
            - img "Instagram" [ref=e137]
          - link "X" [ref=e138] [cursor=pointer]:
            - /url: https://www.x.com/
            - img "X" [ref=e139]
          - link "LinkedIn" [ref=e140] [cursor=pointer]:
            - /url: https://www.linkedin.com/
            - img "LinkedIn" [ref=e141]
      - generic [ref=e142]:
        - generic [ref=e143]: Copyright (c) HyperFrame 2026
        - generic [ref=e144]: Independent React & GSAP Reconstruction
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