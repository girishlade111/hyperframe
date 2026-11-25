# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.ts >> HyperFrame Multi-Page Routing & Rendering >> route /blog renders without console errors or broken images
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
        - heading "Insights and Ideas for Digital Growth" [level=1] [ref=e25]: Insights and Ideas forDigital Growth
        - paragraph [ref=e27]: Stay ahead of the curve with expert insights on design, strategy, and technology. Uncover tips, case studies, and trends that are shaping digital experiences.
      - article [ref=e29]:
        - link [ref=e30] [cursor=pointer]:
          - /url: /blog/the-5-important-trend-in-website-design
          - img "The 5 important trend in website design" [ref=e31]
        - generic [ref=e32]:
          - generic [ref=e33]:
            - generic [ref=e34]:
              - generic [ref=e35]: (001)
              - generic [ref=e36]: September 22, 2026
            - link "The 5 important trend in website design" [ref=e37] [cursor=pointer]:
              - /url: /blog/the-5-important-trend-in-website-design
            - paragraph [ref=e38]: Discover the newest digital design trends shaping this year's landscape and see how they can help your brand stand out all over the world by great ui ux design.
          - link "Learn More" [ref=e39] [cursor=pointer]:
            - /url: /blog/the-5-important-trend-in-website-design
            - generic [ref=e40]:
              - generic [ref=e41]: Learn More
              - generic [aria-hidden] [ref=e42]: Learn More
    - generic [ref=e46]:
      - generic [ref=e47]:
        - generic [ref=e48]:
          - generic [ref=e49]: "{"
          - generic [ref=e50]: Our Blogs & Insights
          - generic [ref=e51]: "}"
        - heading "Browse All Blogs" [level=2] [ref=e52]
      - generic [ref=e54]:
        - article [ref=e55]:
          - link "5 Website Design Trends to Watch Learn More" [ref=e56] [cursor=pointer]:
            - /url: /blog/5-website-design-trends-to-watch
            - img "5 Website Design Trends to Watch" [ref=e57]
            - generic [ref=e58]: Learn More
          - generic [ref=e63]:
            - generic [ref=e64]:
              - generic [ref=e65]: (002)
              - generic [ref=e66]: September 22, 2026
            - link "5 Website Design Trends to Watch" [ref=e67] [cursor=pointer]:
              - /url: /blog/5-website-design-trends-to-watch
            - paragraph [ref=e68]: Discover the newest digital design trends shaping this year's landscape and see how they can help your brand stand out all over the world by great ui ux design.
        - article [ref=e69]:
          - link "How to Create a Design Systems Learn More" [ref=e70] [cursor=pointer]:
            - /url: /blog/how-to-create-a-design-systems
            - img "How to Create a Design Systems" [ref=e71]
            - generic [ref=e72]: Learn More
          - generic [ref=e77]:
            - generic [ref=e78]:
              - generic [ref=e79]: (003)
              - generic [ref=e80]: September 22, 2026
            - link "How to Create a Design Systems" [ref=e81] [cursor=pointer]:
              - /url: /blog/how-to-create-a-design-systems
            - paragraph [ref=e82]: Learn why design isn’t just about looks it’s about creating seamless user journeys that drive business results.
        - article [ref=e83]:
          - link "20+ Useful Prompt For Webflow Learn More" [ref=e84] [cursor=pointer]:
            - /url: /blog/20-useful-prompt-for-webflow
            - img "20+ Useful Prompt For Webflow" [ref=e85]
            - generic [ref=e86]: Learn More
          - generic [ref=e91]:
            - generic [ref=e92]:
              - generic [ref=e93]: (004)
              - generic [ref=e94]: September 22, 2026
            - link "20+ Useful Prompt For Webflow" [ref=e95] [cursor=pointer]:
              - /url: /blog/20-useful-prompt-for-webflow
            - paragraph [ref=e96]: Discover the newest digital design trends shaping this year's landscape and see how they can help your brand stand out all over the world by great ui ux design.
        - article [ref=e97]:
          - link "Top 5 Webflow Features in 2025 Learn More" [ref=e98] [cursor=pointer]:
            - /url: /blog/top-5-webflow-features-in-2025
            - img "Top 5 Webflow Features in 2025" [ref=e99]
            - generic [ref=e100]: Learn More
          - generic [ref=e105]:
            - generic [ref=e106]:
              - generic [ref=e107]: (005)
              - generic [ref=e108]: September 22, 2026
            - link "Top 5 Webflow Features in 2025" [ref=e109] [cursor=pointer]:
              - /url: /blog/top-5-webflow-features-in-2025
            - paragraph [ref=e110]: Learn why design isn’t just about looks it’s about creating seamless user journeys that drive business results.
        - article [ref=e111]:
          - link "How Colors & Layouts Influence Users Learn More" [ref=e112] [cursor=pointer]:
            - /url: /blog/how-colors-layouts-influence-users
            - img "How Colors & Layouts Influence Users" [ref=e113]
            - generic [ref=e114]: Learn More
          - generic [ref=e119]:
            - generic [ref=e120]:
              - generic [ref=e121]: (006)
              - generic [ref=e122]: September 22, 2026
            - link "How Colors & Layouts Influence Users" [ref=e123] [cursor=pointer]:
              - /url: /blog/how-colors-layouts-influence-users
            - paragraph [ref=e124]: Discover the newest digital design trends shaping this year's landscape and see how they can help your brand stand out all over the world by great ui ux design.
        - article [ref=e125]:
          - link "How to Balance Creativity & Strategy Learn More" [ref=e126] [cursor=pointer]:
            - /url: /blog/how-to-balance-creativity-strategy
            - img "How to Balance Creativity & Strategy" [ref=e127]
            - generic [ref=e128]: Learn More
          - generic [ref=e133]:
            - generic [ref=e134]:
              - generic [ref=e135]: (007)
              - generic [ref=e136]: September 22, 2026
            - link "How to Balance Creativity & Strategy" [ref=e137] [cursor=pointer]:
              - /url: /blog/how-to-balance-creativity-strategy
            - paragraph [ref=e138]: Learn why design isn’t just about looks it’s about creating seamless user journeys that drive business results.
  - generic [ref=e139]:
    - generic [ref=e141]:
      - generic [ref=e143]:
        - generic [ref=e144]: "{"
        - generic [ref=e145]: Contact Us
        - generic [ref=e146]: "}"
      - heading "Have Any Project Idea?" [level=2] [ref=e148]
      - paragraph [ref=e150]: "Great design is about more than just visuals: it is about crafting meaningful experiences that lead to tangible results."
    - link "Contact HyperFrame" [ref=e152] [cursor=pointer]:
      - /url: /contact
      - generic [ref=e153]:
        - generic [ref=e154]: hyperframe@gmail.com ⌝
        - generic [ref=e155]: Get In Touch⌝
        - generic [ref=e156]: hyperframe@gmail.com ⌝
        - generic [ref=e157]: Get In Touch⌝
      - generic [aria-hidden] [ref=e158]:
        - generic [ref=e159]: hyperframe@gmail.com ⌝
        - generic [ref=e160]: Get In Touch⌝
        - generic [ref=e161]: hyperframe@gmail.com ⌝
        - generic [ref=e162]: Get In Touch⌝
      - generic [aria-hidden] [ref=e163]:
        - generic [ref=e164]: hyperframe@gmail.com ⌝
        - generic [ref=e165]: Get In Touch⌝
        - generic [ref=e166]: hyperframe@gmail.com ⌝
        - generic [ref=e167]: Get In Touch⌝
  - contentinfo [ref=e168]:
    - generic [ref=e169]:
      - generic [ref=e170]:
        - generic [ref=e171]:
          - link "HyperFrame Home" [ref=e172] [cursor=pointer]:
            - /url: /
            - img "HyperFrame" [ref=e173]
          - generic [ref=e174]:
            - generic [ref=e175]: Stay Connected With Us
            - generic [ref=e176]:
              - textbox "Enter your email" [ref=e177]:
                - /placeholder: Enter your email...
              - button "Subscribe to newsletter" [ref=e178] [cursor=pointer]
        - generic [ref=e179]:
          - generic [ref=e180]:
            - link "About Us" [ref=e181] [cursor=pointer]:
              - /url: /about
              - generic [aria-hidden] [ref=e183]: About Us
            - link "Services" [ref=e184] [cursor=pointer]:
              - /url: /service
              - generic [aria-hidden] [ref=e186]: Services
            - link "Services Details" [ref=e187] [cursor=pointer]:
              - /url: /service/branding
              - generic [aria-hidden] [ref=e189]: Services Details
            - link "Project" [ref=e190] [cursor=pointer]:
              - /url: /project
              - generic [aria-hidden] [ref=e192]: Project
            - link "Project Details" [ref=e193] [cursor=pointer]:
              - /url: /project/spinex-pro
              - generic [aria-hidden] [ref=e195]: Project Details
            - link "Contact Us" [ref=e196] [cursor=pointer]:
              - /url: /contact
              - generic [aria-hidden] [ref=e198]: Contact Us
          - generic [ref=e199]:
            - link "Style Guide" [ref=e200] [cursor=pointer]:
              - /url: /style-guide
              - generic [aria-hidden] [ref=e202]: Style Guide
            - link "Licenses" [ref=e203] [cursor=pointer]:
              - /url: /licenses
              - generic [aria-hidden] [ref=e205]: Licenses
            - link "Changelog" [ref=e206] [cursor=pointer]:
              - /url: /changelog
              - generic [aria-hidden] [ref=e208]: Changelog
            - link "Privacy Policy" [ref=e209] [cursor=pointer]:
              - /url: /privacy
              - generic [aria-hidden] [ref=e211]: Privacy Policy
            - link "Instructions" [ref=e212] [cursor=pointer]:
              - /url: /instructions
              - generic [aria-hidden] [ref=e214]: Instructions
            - link "404" [ref=e215] [cursor=pointer]:
              - /url: /404
              - generic [aria-hidden] [ref=e217]: "404"
            - link "Password" [ref=e218] [cursor=pointer]:
              - /url: /401
              - generic [aria-hidden] [ref=e220]: Password
      - generic [ref=e221]:
        - generic [ref=e222]:
          - link "(239) 555-0108" [ref=e223] [cursor=pointer]:
            - /url: tel:(239)555-0108
          - link "hello@hyperframe.com" [ref=e224] [cursor=pointer]:
            - /url: mailto:hello@hyperframe.com?subject=Contact%20With%20Us
        - generic [ref=e225]:
          - link "Facebook" [ref=e226] [cursor=pointer]:
            - /url: https://www.facebook.com/
            - img "Facebook" [ref=e227]
          - link "Instagram" [ref=e228] [cursor=pointer]:
            - /url: https://www.instagram.com/
            - img "Instagram" [ref=e229]
          - link "X" [ref=e230] [cursor=pointer]:
            - /url: https://www.x.com/
            - img "X" [ref=e231]
          - link "LinkedIn" [ref=e232] [cursor=pointer]:
            - /url: https://www.linkedin.com/
            - img "LinkedIn" [ref=e233]
      - generic [ref=e234]:
        - generic [ref=e235]: Copyright (c) HyperFrame 2026
        - generic [ref=e236]: Independent React & GSAP Reconstruction
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