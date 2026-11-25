# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.ts >> HyperFrame Multi-Page Routing & Rendering >> route /contact renders without console errors or broken images
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
    - generic [ref=e22]:
      - generic [ref=e23]:
        - heading "Let's Work Together!" [level=1] [ref=e25]
        - paragraph [ref=e27]: Let us help you become even greater at what you do.Fill out the following form and we will get back to you in the next 24 hours.
      - generic [ref=e29]:
        - generic [ref=e30]:
          - img "HyperFrame" [ref=e32]
          - heading "Have A Project In Mind?" [level=2] [ref=e34]
          - img "Creative studio workspace" [ref=e36]
        - generic [ref=e38]:
          - generic [ref=e39]:
            - generic [ref=e40]:
              - generic [ref=e41]:
                - generic [ref=e42]: Full Name *
                - textbox "Full Name *" [ref=e43]:
                  - /placeholder: First name
              - generic [ref=e44]:
                - generic [ref=e45]: Your Company Name
                - textbox "Your Company Name" [ref=e46]:
                  - /placeholder: Company name
            - generic [ref=e47]:
              - generic [ref=e48]: Email *
              - textbox "Email *" [ref=e49]:
                - /placeholder: youremail@gmail.com
            - generic [ref=e50]:
              - generic [ref=e51]: How Can We Help?
              - textbox "How Can We Help?" [ref=e52]:
                - /placeholder: Leave us a message...
            - generic [ref=e54] [cursor=pointer]:
              - checkbox "You agree to our friendly Privacy policy." [ref=e55]
              - generic [ref=e56]:
                - text: You agree to our friendly
                - link "Privacy policy" [ref=e57]:
                  - /url: /privacy
                - text: .
          - button "Send Message" [ref=e59] [cursor=pointer]
    - generic [ref=e63]:
      - generic [ref=e64]:
        - generic [ref=e65]:
          - generic [ref=e66]: "{"
          - generic [ref=e67]: FAQs
          - generic [ref=e68]: "}"
        - heading "Frequently Asked Questions" [level=2] [ref=e70]
        - paragraph [ref=e72]: Our cross-functional teams work together to achieve outstanding portfolios across all the digital channels.
      - generic [ref=e74]:
        - generic [ref=e75]:
          - generic [ref=e76]:
            - button "1. What services does your agency offer?" [ref=e77] [cursor=pointer]
            - paragraph [ref=e80]: We specialize in UI/UX design, website development, branding, and product design. Whether you need a landing page, a full website, we have got you covered.
          - generic [ref=e81]:
            - button "2. How do I get started with a project?" [ref=e82] [cursor=pointer]
            - paragraph [ref=e85]: Simply reach out to us through our contact form or email. We will schedule a quick discovery call to understand your needs, discuss the details, and guide you through the next steps.
          - generic [ref=e86]:
            - button "3. What is your typical project timeline?" [ref=e87] [cursor=pointer]
            - paragraph [ref=e90]: Timelines vary based on the project type and complexity. A simple website can take 2 to 4 weeks, while larger projects may take 6 to 12 weeks. We will share a clear timeline before we start.
        - generic [ref=e91]:
          - generic [ref=e92]:
            - button "4. How much do your services cost?" [ref=e93] [cursor=pointer]
            - paragraph [ref=e96]: Our pricing depends on the scope, timeline, and complexity of your project. We provide custom quotes after understanding your goals and requirements. Get in touch for a detailed proposal tailored to your needs.
          - generic [ref=e97]:
            - button "5. Will I be involved in the design process?" [ref=e98] [cursor=pointer]
            - paragraph [ref=e101]: Yes, absolutely. We keep you involved at every stage, from initial concepts to final delivery. You will receive regular updates, feedback rounds, and full transparency throughout the process.
          - generic [ref=e102]:
            - button "6. Development & Testing Platform" [ref=e103] [cursor=pointer]
            - paragraph [ref=e106]: Yes. We handle the full development process, including cross-browser testing, performance optimization, and bug fixes. Your site will be fast, responsive, and ready for launch.
  - contentinfo [ref=e107]:
    - generic [ref=e108]:
      - generic [ref=e109]:
        - generic [ref=e110]:
          - link "HyperFrame Home" [ref=e111] [cursor=pointer]:
            - /url: /
            - img "HyperFrame" [ref=e112]
          - generic [ref=e113]:
            - generic [ref=e114]: Stay Connected With Us
            - generic [ref=e115]:
              - textbox "Enter your email" [ref=e116]:
                - /placeholder: Enter your email...
              - button "Subscribe to newsletter" [ref=e117] [cursor=pointer]
        - generic [ref=e118]:
          - generic [ref=e119]:
            - link "About Us" [ref=e120] [cursor=pointer]:
              - /url: /about
              - generic [aria-hidden] [ref=e122]: About Us
            - link "Services" [ref=e123] [cursor=pointer]:
              - /url: /service
              - generic [aria-hidden] [ref=e125]: Services
            - link "Services Details" [ref=e126] [cursor=pointer]:
              - /url: /service/branding
              - generic [aria-hidden] [ref=e128]: Services Details
            - link "Project" [ref=e129] [cursor=pointer]:
              - /url: /project
              - generic [aria-hidden] [ref=e131]: Project
            - link "Project Details" [ref=e132] [cursor=pointer]:
              - /url: /project/spinex-pro
              - generic [aria-hidden] [ref=e134]: Project Details
            - link "Contact Us" [ref=e135] [cursor=pointer]:
              - /url: /contact
              - generic [aria-hidden] [ref=e137]: Contact Us
          - generic [ref=e138]:
            - link "Style Guide" [ref=e139] [cursor=pointer]:
              - /url: /style-guide
              - generic [aria-hidden] [ref=e141]: Style Guide
            - link "Licenses" [ref=e142] [cursor=pointer]:
              - /url: /licenses
              - generic [aria-hidden] [ref=e144]: Licenses
            - link "Changelog" [ref=e145] [cursor=pointer]:
              - /url: /changelog
              - generic [aria-hidden] [ref=e147]: Changelog
            - link "Privacy Policy" [ref=e148] [cursor=pointer]:
              - /url: /privacy
              - generic [aria-hidden] [ref=e150]: Privacy Policy
            - link "Instructions" [ref=e151] [cursor=pointer]:
              - /url: /instructions
              - generic [aria-hidden] [ref=e153]: Instructions
            - link "404" [ref=e154] [cursor=pointer]:
              - /url: /404
              - generic [aria-hidden] [ref=e156]: "404"
            - link "Password" [ref=e157] [cursor=pointer]:
              - /url: /401
              - generic [aria-hidden] [ref=e159]: Password
      - generic [ref=e160]:
        - generic [ref=e161]:
          - link "(239) 555-0108" [ref=e162] [cursor=pointer]:
            - /url: tel:(239)555-0108
          - link "hello@hyperframe.com" [ref=e163] [cursor=pointer]:
            - /url: mailto:hello@hyperframe.com?subject=Contact%20With%20Us
        - generic [ref=e164]:
          - link "Facebook" [ref=e165] [cursor=pointer]:
            - /url: https://www.facebook.com/
            - img "Facebook" [ref=e166]
          - link "Instagram" [ref=e167] [cursor=pointer]:
            - /url: https://www.instagram.com/
            - img "Instagram" [ref=e168]
          - link "X" [ref=e169] [cursor=pointer]:
            - /url: https://www.x.com/
            - img "X" [ref=e170]
          - link "LinkedIn" [ref=e171] [cursor=pointer]:
            - /url: https://www.linkedin.com/
            - img "LinkedIn" [ref=e172]
      - generic [ref=e173]:
        - generic [ref=e174]: Copyright (c) HyperFrame 2026
        - generic [ref=e175]: Independent React & GSAP Reconstruction
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