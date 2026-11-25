# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.ts >> HyperFrame Multi-Page Routing & Rendering >> route /project renders without console errors or broken images
- Location: tests\site.spec.ts:39:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 10

- Array []
+ Array [
+   "/assets/icons/linkedin-02.svg",
+   "/assets/icons/Service-Icon-01.svg",
+   "/assets/icons/Service-Icon-01.svg",
+   "/assets/icons/Service-Icon-01.svg",
+   "/assets/icons/Service-Icon-01.svg",
+   "/assets/icons/Service-Icon-01.svg",
+   "/assets/icons/Service-Icon-01.svg",
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
        - heading "Our Work, Your Vision Realized" [level=1] [ref=e25]: Our Work, Your VisionRealized
        - paragraph [ref=e27]: Take a look at our latest creative projects for brands with big ideas.
      - generic [ref=e29]:
        - article [ref=e30]:
          - link "(001) ProFast We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects. ProFast project preview Year /2025 Role /Website Designer Services Branding Web Design Illustration Icon Design" [ref=e31] [cursor=pointer]:
            - /url: /project/profast
            - generic [ref=e34]:
              - generic [ref=e35]:
                - generic [ref=e36]:
                  - generic [ref=e37]: (001)
                  - heading "ProFast" [level=3] [ref=e38]
                - paragraph [ref=e39]: We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects.
              - img "ProFast project preview" [ref=e41]
              - generic [ref=e42]:
                - generic [ref=e43]:
                  - generic [ref=e44]:
                    - generic [ref=e45]: Year
                    - generic [ref=e46]: /2025
                  - generic [ref=e47]:
                    - generic [ref=e48]: Role
                    - generic [ref=e49]: /Website Designer
                - generic [ref=e50]:
                  - generic [ref=e51]: Services
                  - generic [ref=e52]:
                    - generic [ref=e53]: Branding
                    - generic [ref=e56]: Web Design
                    - generic [ref=e59]: Illustration
                    - generic [ref=e62]: Icon Design
        - article [ref=e65]:
          - link "(002) SecureX We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects. SecureX project preview Year /2025 Role /Website Designer Services Branding Web Design Illustration Icon Design" [ref=e66] [cursor=pointer]:
            - /url: /project/securex
            - generic [ref=e69]:
              - generic [ref=e70]:
                - generic [ref=e71]:
                  - generic [ref=e72]: (002)
                  - heading "SecureX" [level=3] [ref=e73]
                - paragraph [ref=e74]: We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects.
              - img "SecureX project preview" [ref=e76]
              - generic [ref=e77]:
                - generic [ref=e78]:
                  - generic [ref=e79]:
                    - generic [ref=e80]: Year
                    - generic [ref=e81]: /2025
                  - generic [ref=e82]:
                    - generic [ref=e83]: Role
                    - generic [ref=e84]: /Website Designer
                - generic [ref=e85]:
                  - generic [ref=e86]: Services
                  - generic [ref=e87]:
                    - generic [ref=e88]: Branding
                    - generic [ref=e91]: Web Design
                    - generic [ref=e94]: Illustration
                    - generic [ref=e97]: Icon Design
        - article [ref=e100]:
          - link "(003) Spinex Pro We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects. Spinex Pro project preview Year /2025 Role /Website Designer Services Branding Web Design Illustration Icon Design" [ref=e101] [cursor=pointer]:
            - /url: /project/spinex-pro
            - generic [ref=e104]:
              - generic [ref=e105]:
                - generic [ref=e106]:
                  - generic [ref=e107]: (003)
                  - heading "Spinex Pro" [level=3] [ref=e108]
                - paragraph [ref=e109]: We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects.
              - img "Spinex Pro project preview" [ref=e111]
              - generic [ref=e112]:
                - generic [ref=e113]:
                  - generic [ref=e114]:
                    - generic [ref=e115]: Year
                    - generic [ref=e116]: /2025
                  - generic [ref=e117]:
                    - generic [ref=e118]: Role
                    - generic [ref=e119]: /Website Designer
                - generic [ref=e120]:
                  - generic [ref=e121]: Services
                  - generic [ref=e122]:
                    - generic [ref=e123]: Branding
                    - generic [ref=e126]: Web Design
                    - generic [ref=e129]: Illustration
                    - generic [ref=e132]: Icon Design
        - article [ref=e135]:
          - link "(004) Virtualex We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects. Virtualex project preview Year /2025 Role /Website Designer Services Branding Web Design Illustration Icon Design" [ref=e136] [cursor=pointer]:
            - /url: /project/virtualex
            - generic [ref=e139]:
              - generic [ref=e140]:
                - generic [ref=e141]:
                  - generic [ref=e142]: (004)
                  - heading "Virtualex" [level=3] [ref=e143]
                - paragraph [ref=e144]: We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects.
              - img "Virtualex project preview" [ref=e146]
              - generic [ref=e147]:
                - generic [ref=e148]:
                  - generic [ref=e149]:
                    - generic [ref=e150]: Year
                    - generic [ref=e151]: /2025
                  - generic [ref=e152]:
                    - generic [ref=e153]: Role
                    - generic [ref=e154]: /Website Designer
                - generic [ref=e155]:
                  - generic [ref=e156]: Services
                  - generic [ref=e157]:
                    - generic [ref=e158]: Branding
                    - generic [ref=e161]: Web Design
                    - generic [ref=e164]: Illustration
                    - generic [ref=e167]: Icon Design
        - article [ref=e170]:
          - link "(005) Fashionable We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects. Fashionable project preview Year /2025 Role /Website Designer Services Branding Web Design Illustration Icon Design" [ref=e171] [cursor=pointer]:
            - /url: /project/fashionable
            - generic [ref=e174]:
              - generic [ref=e175]:
                - generic [ref=e176]:
                  - generic [ref=e177]: (005)
                  - heading "Fashionable" [level=3] [ref=e178]
                - paragraph [ref=e179]: We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects.
              - img "Fashionable project preview" [ref=e181]
              - generic [ref=e182]:
                - generic [ref=e183]:
                  - generic [ref=e184]:
                    - generic [ref=e185]: Year
                    - generic [ref=e186]: /2025
                  - generic [ref=e187]:
                    - generic [ref=e188]: Role
                    - generic [ref=e189]: /Website Designer
                - generic [ref=e190]:
                  - generic [ref=e191]: Services
                  - generic [ref=e192]:
                    - generic [ref=e193]: Branding
                    - generic [ref=e196]: Web Design
                    - generic [ref=e199]: Illustration
                    - generic [ref=e202]: Icon Design
        - article [ref=e205]:
          - link "(006) Co Brand We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects. Co Brand project preview Year /2025 Role /Website Designer Services Branding Web Design Illustration Icon Design" [ref=e206] [cursor=pointer]:
            - /url: /project/co-brand
            - generic [ref=e209]:
              - generic [ref=e210]:
                - generic [ref=e211]:
                  - generic [ref=e212]: (006)
                  - heading "Co Brand" [level=3] [ref=e213]
                - paragraph [ref=e214]: We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects.
              - img "Co Brand project preview" [ref=e216]
              - generic [ref=e217]:
                - generic [ref=e218]:
                  - generic [ref=e219]:
                    - generic [ref=e220]: Year
                    - generic [ref=e221]: /2025
                  - generic [ref=e222]:
                    - generic [ref=e223]: Role
                    - generic [ref=e224]: /Website Designer
                - generic [ref=e225]:
                  - generic [ref=e226]: Services
                  - generic [ref=e227]:
                    - generic [ref=e228]: Branding
                    - generic [ref=e231]: Web Design
                    - generic [ref=e234]: Illustration
                    - generic [ref=e237]: Icon Design
  - generic [ref=e240]:
    - generic [ref=e242]:
      - generic [ref=e244]:
        - generic [ref=e245]: "{"
        - generic [ref=e246]: Contact Us
        - generic [ref=e247]: "}"
      - heading "Have Any Project Idea?" [level=2] [ref=e249]
      - paragraph [ref=e251]: "Great design is about more than just visuals: it is about crafting meaningful experiences that lead to tangible results."
    - link "Contact HyperFrame" [ref=e253] [cursor=pointer]:
      - /url: /contact
      - generic [ref=e254]:
        - generic [ref=e255]: hyperframe@gmail.com ⌝
        - generic [ref=e256]: Get In Touch⌝
        - generic [ref=e257]: hyperframe@gmail.com ⌝
        - generic [ref=e258]: Get In Touch⌝
      - generic [aria-hidden] [ref=e259]:
        - generic [ref=e260]: hyperframe@gmail.com ⌝
        - generic [ref=e261]: Get In Touch⌝
        - generic [ref=e262]: hyperframe@gmail.com ⌝
        - generic [ref=e263]: Get In Touch⌝
      - generic [aria-hidden] [ref=e264]:
        - generic [ref=e265]: hyperframe@gmail.com ⌝
        - generic [ref=e266]: Get In Touch⌝
        - generic [ref=e267]: hyperframe@gmail.com ⌝
        - generic [ref=e268]: Get In Touch⌝
  - contentinfo [ref=e269]:
    - generic [ref=e270]:
      - generic [ref=e271]:
        - generic [ref=e272]:
          - link "HyperFrame Home" [ref=e273] [cursor=pointer]:
            - /url: /
            - img "HyperFrame" [ref=e274]
          - generic [ref=e275]:
            - generic [ref=e276]: Stay Connected With Us
            - generic [ref=e277]:
              - textbox "Enter your email" [ref=e278]:
                - /placeholder: Enter your email...
              - button "Subscribe to newsletter" [ref=e279] [cursor=pointer]
        - generic [ref=e280]:
          - generic [ref=e281]:
            - link "About Us" [ref=e282] [cursor=pointer]:
              - /url: /about
              - generic [aria-hidden] [ref=e284]: About Us
            - link "Services" [ref=e285] [cursor=pointer]:
              - /url: /service
              - generic [aria-hidden] [ref=e287]: Services
            - link "Services Details" [ref=e288] [cursor=pointer]:
              - /url: /service/branding
              - generic [aria-hidden] [ref=e290]: Services Details
            - link "Project" [ref=e291] [cursor=pointer]:
              - /url: /project
              - generic [aria-hidden] [ref=e293]: Project
            - link "Project Details" [ref=e294] [cursor=pointer]:
              - /url: /project/spinex-pro
              - generic [aria-hidden] [ref=e296]: Project Details
            - link "Contact Us" [ref=e297] [cursor=pointer]:
              - /url: /contact
              - generic [aria-hidden] [ref=e299]: Contact Us
          - generic [ref=e300]:
            - link "Style Guide" [ref=e301] [cursor=pointer]:
              - /url: /style-guide
              - generic [aria-hidden] [ref=e303]: Style Guide
            - link "Licenses" [ref=e304] [cursor=pointer]:
              - /url: /licenses
              - generic [aria-hidden] [ref=e306]: Licenses
            - link "Changelog" [ref=e307] [cursor=pointer]:
              - /url: /changelog
              - generic [aria-hidden] [ref=e309]: Changelog
            - link "Privacy Policy" [ref=e310] [cursor=pointer]:
              - /url: /privacy
              - generic [aria-hidden] [ref=e312]: Privacy Policy
            - link "Instructions" [ref=e313] [cursor=pointer]:
              - /url: /instructions
              - generic [aria-hidden] [ref=e315]: Instructions
            - link "404" [ref=e316] [cursor=pointer]:
              - /url: /404
              - generic [aria-hidden] [ref=e318]: "404"
            - link "Password" [ref=e319] [cursor=pointer]:
              - /url: /401
              - generic [aria-hidden] [ref=e321]: Password
      - generic [ref=e322]:
        - generic [ref=e323]:
          - link "(239) 555-0108" [ref=e324] [cursor=pointer]:
            - /url: tel:(239)555-0108
          - link "hello@hyperframe.com" [ref=e325] [cursor=pointer]:
            - /url: mailto:hello@hyperframe.com?subject=Contact%20With%20Us
        - generic [ref=e326]:
          - link "Facebook" [ref=e327] [cursor=pointer]:
            - /url: https://www.facebook.com/
            - img "Facebook" [ref=e328]
          - link "Instagram" [ref=e329] [cursor=pointer]:
            - /url: https://www.instagram.com/
            - img "Instagram" [ref=e330]
          - link "X" [ref=e331] [cursor=pointer]:
            - /url: https://www.x.com/
            - img "X" [ref=e332]
          - link "LinkedIn" [ref=e333] [cursor=pointer]:
            - /url: https://www.linkedin.com/
            - img "LinkedIn" [ref=e334]
      - generic [ref=e335]:
        - generic [ref=e336]: Copyright (c) HyperFrame 2026
        - generic [ref=e337]: Independent React & GSAP Reconstruction
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