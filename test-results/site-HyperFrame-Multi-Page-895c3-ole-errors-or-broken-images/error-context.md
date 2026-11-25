# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.ts >> HyperFrame Multi-Page Routing & Rendering >> route /instructions renders without console errors or broken images
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
        - heading "Instructions" [level=1] [ref=e25]
        - paragraph [ref=e27]: Clear documentation for HyperFrame's interactive GSAP motion architecture, Lenis smooth scrolling, and tokenized styling system.
      - generic [ref=e29]:
        - generic [ref=e30]:
          - heading "1. Element Map (Which selectors the animation script looks for)" [level=2] [ref=e31]
          - paragraph [ref=e32]: "Smooth Scroll (Lenis): targets the document scroller cleanly with inertia damping (lerp: 0.1, smoothWheel: true) and syncs with GSAP ScrollTrigger. Counter Roll: targets [data-counter-target=\"true\"] and animates numeric statistics from 0 to their target value (for example, 95% or $10M+) once entering the viewport. Marquee Loop: targets .marquee_track inside .cta-marquee to drive continuous infinite horizontal scroll of agency calls to action. Sticky Project Stacking: .project-cl-wrap uses sticky positioning at top: 160px on desktop and tablet viewports so ProFast, SecureX, and Spinex Pro cards layer during scroll. Work Process Scroll Sync: tracks vertical scroll progress through .process-content-wrap and moves .process-image-wrap so each of the 5 stages highlights in lockstep."
        - generic [ref=e33]:
          - heading "2. What Each Animation Does" [level=2] [ref=e34]
          - paragraph [ref=e35]: "Hero Intro & Section Reveals: subtle GPU-composited opacity and translateY motion triggers on scroll with ScrollTrigger, respecting prefers-reduced-motion. Fullscreen Menu Drawer: expands from 0% to 100% height on toggle click, traps/restores keyboard focus, and closes cleanly on Escape or navigation. Service Showcase Reveal: smoothly expands .service-hover-details height from 0px to auto on pointer hover and click/keyboard activation. Pricing Add-Development Switch: switches Essential Plan ($1,999 <-> $5,499) and Enterprise Plan ($4,999 <-> $7,599) when toggled."
        - generic [ref=e36]:
          - heading "3. Key Values You Can Edit" [level=2] [ref=e37]
          - paragraph [ref=e38]: "src/styles/tokens.css: Brand palette (--primary-color: #FF4C03, --balck-900: #03020B), spacing scale, border radii, and z-index layers. src/styles/typography.css: Inter Display and Bebas Neue responsive clamps across desktop, 991px tablet, 767px mobile landscape, and 479px mobile portrait. src/animations/gsapSetup.ts & scrollManager.ts: ScrollTrigger scrub smoothing, marquee speed, counter duration, and reduced-motion fallbacks. src/data/*.ts: Typed CMS collections for all 6 projects, 5 services, 7 blog articles, pricing plans, testimonials, work process stages, FAQs, and team members."
        - generic [ref=e39]:
          - heading "4. How to Remove or Customize an Animation" [level=2] [ref=e40]
          - paragraph [ref=e41]: Because all GSAP animations register inside GSAP contexts tied to component lifecycles, you can disable or customize any motion block directly in src/animations/scrollManager.ts without affecting DOM structure or responsive CSS layouts. Users with OS-level prefers-reduced-motion automatically receive static, immediately visible layouts.
  - generic [ref=e42]:
    - generic [ref=e44]:
      - generic [ref=e46]:
        - generic [ref=e47]: "{"
        - generic [ref=e48]: Contact Us
        - generic [ref=e49]: "}"
      - heading "Have Any Project Idea?" [level=2] [ref=e51]
      - paragraph [ref=e53]: "Great design is about more than just visuals: it is about crafting meaningful experiences that lead to tangible results."
    - link "Contact HyperFrame" [ref=e55] [cursor=pointer]:
      - /url: /contact
      - generic [ref=e56]:
        - generic [ref=e57]: hyperframe@gmail.com ⌝
        - generic [ref=e58]: Get In Touch⌝
        - generic [ref=e59]: hyperframe@gmail.com ⌝
        - generic [ref=e60]: Get In Touch⌝
      - generic [aria-hidden] [ref=e61]:
        - generic [ref=e62]: hyperframe@gmail.com ⌝
        - generic [ref=e63]: Get In Touch⌝
        - generic [ref=e64]: hyperframe@gmail.com ⌝
        - generic [ref=e65]: Get In Touch⌝
      - generic [aria-hidden] [ref=e66]:
        - generic [ref=e67]: hyperframe@gmail.com ⌝
        - generic [ref=e68]: Get In Touch⌝
        - generic [ref=e69]: hyperframe@gmail.com ⌝
        - generic [ref=e70]: Get In Touch⌝
  - contentinfo [ref=e71]:
    - generic [ref=e72]:
      - generic [ref=e73]:
        - generic [ref=e74]:
          - link "HyperFrame Home" [ref=e75] [cursor=pointer]:
            - /url: /
            - img "HyperFrame" [ref=e76]
          - generic [ref=e77]:
            - generic [ref=e78]: Stay Connected With Us
            - generic [ref=e79]:
              - textbox "Enter your email" [ref=e80]:
                - /placeholder: Enter your email...
              - button "Subscribe to newsletter" [ref=e81] [cursor=pointer]
        - generic [ref=e82]:
          - generic [ref=e83]:
            - link "About Us" [ref=e84] [cursor=pointer]:
              - /url: /about
              - generic [aria-hidden] [ref=e86]: About Us
            - link "Services" [ref=e87] [cursor=pointer]:
              - /url: /service
              - generic [aria-hidden] [ref=e89]: Services
            - link "Services Details" [ref=e90] [cursor=pointer]:
              - /url: /service/branding
              - generic [aria-hidden] [ref=e92]: Services Details
            - link "Project" [ref=e93] [cursor=pointer]:
              - /url: /project
              - generic [aria-hidden] [ref=e95]: Project
            - link "Project Details" [ref=e96] [cursor=pointer]:
              - /url: /project/spinex-pro
              - generic [aria-hidden] [ref=e98]: Project Details
            - link "Contact Us" [ref=e99] [cursor=pointer]:
              - /url: /contact
              - generic [aria-hidden] [ref=e101]: Contact Us
          - generic [ref=e102]:
            - link "Style Guide" [ref=e103] [cursor=pointer]:
              - /url: /style-guide
              - generic [aria-hidden] [ref=e105]: Style Guide
            - link "Licenses" [ref=e106] [cursor=pointer]:
              - /url: /licenses
              - generic [aria-hidden] [ref=e108]: Licenses
            - link "Changelog" [ref=e109] [cursor=pointer]:
              - /url: /changelog
              - generic [aria-hidden] [ref=e111]: Changelog
            - link "Privacy Policy" [ref=e112] [cursor=pointer]:
              - /url: /privacy
              - generic [aria-hidden] [ref=e114]: Privacy Policy
            - link "Instructions" [ref=e115] [cursor=pointer]:
              - /url: /instructions
              - generic [aria-hidden] [ref=e117]: Instructions
            - link "404" [ref=e118] [cursor=pointer]:
              - /url: /404
              - generic [aria-hidden] [ref=e120]: "404"
            - link "Password" [ref=e121] [cursor=pointer]:
              - /url: /401
              - generic [aria-hidden] [ref=e123]: Password
      - generic [ref=e124]:
        - generic [ref=e125]:
          - link "(239) 555-0108" [ref=e126] [cursor=pointer]:
            - /url: tel:(239)555-0108
          - link "hello@hyperframe.com" [ref=e127] [cursor=pointer]:
            - /url: mailto:hello@hyperframe.com?subject=Contact%20With%20Us
        - generic [ref=e128]:
          - link "Facebook" [ref=e129] [cursor=pointer]:
            - /url: https://www.facebook.com/
            - img "Facebook" [ref=e130]
          - link "Instagram" [ref=e131] [cursor=pointer]:
            - /url: https://www.instagram.com/
            - img "Instagram" [ref=e132]
          - link "X" [ref=e133] [cursor=pointer]:
            - /url: https://www.x.com/
            - img "X" [ref=e134]
          - link "LinkedIn" [ref=e135] [cursor=pointer]:
            - /url: https://www.linkedin.com/
            - img "LinkedIn" [ref=e136]
      - generic [ref=e137]:
        - generic [ref=e138]: Copyright (c) HyperFrame 2026
        - generic [ref=e139]: Independent React & GSAP Reconstruction
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