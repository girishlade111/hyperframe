# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.ts >> HyperFrame Multi-Page Routing & Rendering >> route /about renders without console errors or broken images
- Location: tests\site.spec.ts:39:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 11

- Array []
+ Array [
+   "/assets/icons/linkedin-02.svg",
+   "/assets/brand/Sponsor-Logo-03.svg",
+   "/assets/brand/Sponsor-Logo-04.svg",
+   "/assets/icons/Rotashow.svg",
+   "/assets/brand/Sponsor-Logo-01.svg",
+   "/assets/brand/Sponsor-Logo-02.svg",
+   "/assets/brand/Sponsor-Logo-03.svg",
+   "/assets/brand/Sponsor-Logo-04.svg",
+   "/assets/icons/linkedin-02.svg",
+ ]
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e7]:
      - generic [ref=e8]: "NEW YORK, USA { 01:54 AM }"
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
        - heading "Creating Experiences That Are Growth-Driven" [level=1] [ref=e25]: Creating Experiences ThatAre Growth-Driven
        - paragraph [ref=e27]: At HyperFrame, we craft websites and digital experiences that combine creativity, usability, and business strategy.
      - generic [ref=e29]:
        - img "Smiling creative strategist in colorful outerwear" [ref=e31]
        - img "Creative director portrait in teal studio lighting" [ref=e33]
        - img "Designer portrait in vivid orange knit sweater" [ref=e35]
    - generic "Featured client brands" [ref=e36]:
      - generic [ref=e38]:
        - img "Tessra / Rotashow" [ref=e40]
        - img "Norvane" [ref=e42]
        - img "Lumeq" [ref=e44]
        - img "Orbisto" [ref=e46]
        - img "Quillo" [ref=e48]
    - generic [ref=e62]:
      - generic [ref=e63]:
        - generic [ref=e64]:
          - generic [ref=e65]: "{"
          - generic [ref=e66]: About Us
          - generic [ref=e67]: "}"
        - heading "The Story Behind HyperFrame" [level=2] [ref=e69]
        - paragraph [ref=e71]: Our cross-functional teams work together to achieve outstanding portfolios across all the digital channels.
      - generic [ref=e73]:
        - generic [ref=e74]:
          - generic [ref=e75]:
            - generic [ref=e76]: "{"
            - generic [ref=e77]: "001"
            - generic [ref=e78]: "}"
          - generic [ref=e79]:
            - heading "Our Story" [level=3] [ref=e80]
            - paragraph [ref=e81]: HyperFrame combines design and growth expertise, helping startups and companies turn digital presence into growth engines.
        - img "Abstract luminous crystalline metallic object" [ref=e83]
        - generic [ref=e84]:
          - generic [ref=e85]:
            - heading "Our Mission" [level=3] [ref=e86]
            - paragraph [ref=e87]: Empower businesses with digital support that are both beautiful and user-friendly, designed to drive results their operations.
          - generic [ref=e88]:
            - generic [ref=e89]: "{"
            - generic [ref=e90]: "002"
            - generic [ref=e91]: "}"
        - img "Portrait in deep blue studio lighting" [ref=e93]
        - generic [ref=e94]:
          - img "Floating orange geometric cube above a flower field" [ref=e96]
          - generic [ref=e97]:
            - generic [ref=e98]:
              - generic [ref=e99]:
                - generic [ref=e100]: "{"
                - generic [ref=e101]: "003"
                - generic [ref=e102]: "}"
              - generic [ref=e103]:
                - heading "Our Vision" [level=3] [ref=e104]
                - paragraph [ref=e105]: To be the go-to creative partner for thinking companies that want to scale through smart design and seamless use.
            - button "Play Showreel 2025 video" [ref=e107] [cursor=pointer]:
              - img "Showreel 2025 thumbnail" [ref=e108]
              - generic [ref=e110]: Showreel 2025
    - generic [ref=e112]:
      - generic [ref=e113]:
        - generic [ref=e114]:
          - generic [ref=e115]: "{"
          - generic [ref=e116]: Our Core Values
          - generic [ref=e117]: "}"
        - heading "The Heart of HyperFrame" [level=2] [ref=e119]
        - paragraph [ref=e121]: The principles that shape how we think, design, and deliver, ensuring every project creates lasting impact.
      - generic [ref=e123]:
        - generic [ref=e124]:
          - generic [ref=e125]:
            - heading "Creativity with Purpose" [level=3] [ref=e126]
            - paragraph [ref=e127]: We do not just design for aesthetics; every idea, layout, and interaction is crafted to achieve impact and measurable results.
          - generic [ref=e129]:
            - generic [ref=e130]: (
            - generic [ref=e131]: "001"
            - generic [ref=e132]: )
        - generic [ref=e134]:
          - generic [ref=e135]:
            - generic [ref=e137]:
              - generic [ref=e138]: (
              - generic [ref=e139]: "002"
              - generic [ref=e140]: )
            - generic [ref=e142]:
              - heading "Seamless Collaboration" [level=3] [ref=e143]
              - paragraph [ref=e144]: Your goals drive our process. We listen, adapt, and co-create to ensure your vision is at the heart of every solution.
          - generic [ref=e145]:
            - generic [ref=e147]:
              - generic [ref=e148]: (
              - generic [ref=e149]: "003"
              - generic [ref=e150]: )
            - generic [ref=e152]:
              - heading "Innovation-First Mindset" [level=3] [ref=e153]
              - paragraph [ref=e154]: We adopt new tools, trends, and technologies to keep your brand at the forefront in a rapidly changing digital landscape.
        - generic [ref=e155]:
          - generic [ref=e156]:
            - heading "Excellence in Execution" [level=3] [ref=e157]
            - paragraph [ref=e158]: Our focus is on every detail, from strategy to delivery, to achieve a seamless, functional, and future-ready outcome.
          - generic [ref=e160]:
            - generic [ref=e161]: (
            - generic [ref=e162]: "004"
            - generic [ref=e163]: )
    - generic [ref=e166]:
      - generic [ref=e167]:
        - generic [ref=e168]:
          - generic [ref=e169]: "{"
          - generic [ref=e170]: Awwwards
          - generic [ref=e171]: "}"
        - heading "Our Achievements" [level=2] [ref=e173]
        - paragraph [ref=e175]: "Great design is about more than just visuals: it is about crafting meaningful experiences that lead to tangible results."
      - generic [ref=e177]:
        - generic [ref=e179] [cursor=pointer]:
          - generic [ref=e180]:
            - generic [ref=e181]: Awwwards
            - generic [ref=e183]: Best UI UX Design Agency 2024
          - generic [ref=e184]: Dec 07, 2024
        - generic [ref=e186] [cursor=pointer]:
          - generic [ref=e187]:
            - generic [ref=e188]: CSS Awards
            - generic [ref=e190]: Innovation in Web Design 2024
          - generic [ref=e191]: Jan 24, 2025
        - generic [ref=e193] [cursor=pointer]:
          - generic [ref=e194]:
            - generic [ref=e195]: Dribbble
            - generic [ref=e197]: Top 10 Best of Mobile App Design 2025
          - generic [ref=e198]: Mar 12, 2025
        - generic [ref=e200] [cursor=pointer]:
          - generic [ref=e201]:
            - generic [ref=e202]: Behance
            - generic [ref=e204]: Winner - Best of Architecture Website 2025
          - generic [ref=e205]: Dec 07, 2024
    - generic [ref=e207]:
      - generic [ref=e208]:
        - generic [ref=e209]:
          - generic [ref=e210]: "{"
          - generic [ref=e211]: Success Stories
          - generic [ref=e212]: "}"
        - heading "Stories That Speak For Themselves" [level=2] [ref=e214]
        - paragraph [ref=e216]: "Great design is about more than just visuals: it is about crafting meaningful experiences that lead to tangible results."
      - generic [ref=e217]:
        - generic [ref=e218]:
          - img "HyperFrame" [ref=e220]
          - generic [ref=e221]:
            - generic [ref=e222]:
              - img "Client portrait 1" [ref=e224]
              - img "Client portrait 2" [ref=e226]
              - img "Client portrait 3" [ref=e228]
              - img "Client portrait 4" [ref=e230]
              - img "Client portrait 5" [ref=e232]
            - generic [ref=e233]:
              - img "5 stars" [ref=e235]
              - generic [ref=e236]: Trusted by clients worldwide
        - paragraph [ref=e238]: We develop websites, apps, and campaigns that truly make a difference for expanding brands.
      - generic [ref=e240]:
        - article [ref=e241]:
          - generic [ref=e242]:
            - generic [ref=e243]:
              - generic [ref=e244]: (
              - generic [ref=e245]: "001"
              - generic [ref=e246]: )
            - img "5 stars" [ref=e248]
            - paragraph [ref=e249]: “Our team designed a sleek SaaS website with clear messaging, targeted CTAs, and trust-building visuals. Built from a Figma design for quick, scalable deployment.”
            - generic [ref=e250]:
              - img "Robert Browny" [ref=e252]
              - generic [ref=e253]:
                - generic [ref=e254]: Robert Browny
                - generic [ref=e255]: Founder & CEO at Story Pixel
          - generic [ref=e256]:
            - generic [ref=e257]:
              - generic [ref=e258]:
                - generic [ref=e259]: /60
                - generic [ref=e260]: "%"
              - generic [ref=e261]: Customer Retention
              - generic [ref=e262]: Our designs engage millions worldwide.
            - generic [ref=e263]:
              - generic [ref=e264]:
                - generic [ref=e265]: /225
                - generic [ref=e266]: "%"
              - generic [ref=e267]: Conversion Rate Increase
              - generic [ref=e268]: Our designs engage millions worldwide.
        - article [ref=e269]:
          - img "Client story featured portrait" [ref=e270]
          - generic [ref=e271]:
            - generic [ref=e272]:
              - generic [ref=e273]: (
              - generic [ref=e274]: "002"
              - generic [ref=e275]: )
            - generic [ref=e276]:
              - img "5 stars" [ref=e278]
              - paragraph [ref=e279]: “Our team designed a sleek SaaS website with clear messaging, targeted CTAs, and trust-building visuals. Built from a Figma design for quick, scalable deployment.”
    - generic [ref=e281]:
      - generic [ref=e282]:
        - generic [ref=e283]:
          - generic [ref=e284]: "{"
          - generic [ref=e285]: Team Members
          - generic [ref=e286]: "}"
        - heading "Meet Our Team" [level=2] [ref=e288]
        - paragraph [ref=e290]: "Great design is about more than just visuals: it is about crafting meaningful experiences that lead to tangible results."
      - generic [ref=e292]:
        - article [ref=e293]:
          - img "Robert Browny" [ref=e294]
          - generic [ref=e296]:
            - generic [ref=e297]:
              - generic [ref=e298]: (
              - generic [ref=e299]: "001"
              - generic [ref=e300]: )
            - heading "Robert Browny" [level=3] [ref=e301]
            - generic [ref=e302]: Founder & CEO at HyperFrame
          - link "Robert Browny on LinkedIn" [ref=e304] [cursor=pointer]:
            - /url: https://www.linkedin.com/
        - article [ref=e305]:
          - img "Jacob Jones" [ref=e306]
          - generic [ref=e308]:
            - generic [ref=e309]:
              - generic [ref=e310]: (
              - generic [ref=e311]: "002"
              - generic [ref=e312]: )
            - heading "Jacob Jones" [level=3] [ref=e313]
            - generic [ref=e314]: Web Developer at HyperFrame
          - link "Jacob Jones on LinkedIn" [ref=e316] [cursor=pointer]:
            - /url: https://www.linkedin.com/
        - article [ref=e317]:
          - img "Ronald Richards" [ref=e318]
          - generic [ref=e320]:
            - generic [ref=e321]:
              - generic [ref=e322]: (
              - generic [ref=e323]: "003"
              - generic [ref=e324]: )
            - heading "Ronald Richards" [level=3] [ref=e325]
            - generic [ref=e326]: Senior Sales VP at HyperFrame
          - link "Ronald Richards on LinkedIn" [ref=e328] [cursor=pointer]:
            - /url: https://www.linkedin.com/
  - generic [ref=e329]:
    - generic [ref=e331]:
      - generic [ref=e333]:
        - generic [ref=e334]: "{"
        - generic [ref=e335]: Contact Us
        - generic [ref=e336]: "}"
      - heading "Have Any Project Idea?" [level=2] [ref=e338]
      - paragraph [ref=e340]: "Great design is about more than just visuals: it is about crafting meaningful experiences that lead to tangible results."
    - link "Contact HyperFrame" [ref=e342] [cursor=pointer]:
      - /url: /contact
      - generic [ref=e343]:
        - generic [ref=e344]: hyperframe@gmail.com ⌝
        - generic [ref=e345]: Get In Touch⌝
        - generic [ref=e346]: hyperframe@gmail.com ⌝
        - generic [ref=e347]: Get In Touch⌝
      - generic [aria-hidden] [ref=e348]:
        - generic [ref=e349]: hyperframe@gmail.com ⌝
        - generic [ref=e350]: Get In Touch⌝
        - generic [ref=e351]: hyperframe@gmail.com ⌝
        - generic [ref=e352]: Get In Touch⌝
      - generic [aria-hidden] [ref=e353]:
        - generic [ref=e354]: hyperframe@gmail.com ⌝
        - generic [ref=e355]: Get In Touch⌝
        - generic [ref=e356]: hyperframe@gmail.com ⌝
        - generic [ref=e357]: Get In Touch⌝
  - contentinfo [ref=e358]:
    - generic [ref=e359]:
      - generic [ref=e360]:
        - generic [ref=e361]:
          - link "HyperFrame Home" [ref=e362] [cursor=pointer]:
            - /url: /
            - img "HyperFrame" [ref=e363]
          - generic [ref=e364]:
            - generic [ref=e365]: Stay Connected With Us
            - generic [ref=e366]:
              - textbox "Enter your email" [ref=e367]:
                - /placeholder: Enter your email...
              - button "Subscribe to newsletter" [ref=e368] [cursor=pointer]
        - generic [ref=e369]:
          - generic [ref=e370]:
            - link "About Us" [ref=e371] [cursor=pointer]:
              - /url: /about
              - generic [aria-hidden] [ref=e373]: About Us
            - link "Services" [ref=e374] [cursor=pointer]:
              - /url: /service
              - generic [aria-hidden] [ref=e376]: Services
            - link "Services Details" [ref=e377] [cursor=pointer]:
              - /url: /service/branding
              - generic [aria-hidden] [ref=e379]: Services Details
            - link "Project" [ref=e380] [cursor=pointer]:
              - /url: /project
              - generic [aria-hidden] [ref=e382]: Project
            - link "Project Details" [ref=e383] [cursor=pointer]:
              - /url: /project/spinex-pro
              - generic [aria-hidden] [ref=e385]: Project Details
            - link "Contact Us" [ref=e386] [cursor=pointer]:
              - /url: /contact
              - generic [aria-hidden] [ref=e388]: Contact Us
          - generic [ref=e389]:
            - link "Style Guide" [ref=e390] [cursor=pointer]:
              - /url: /style-guide
              - generic [aria-hidden] [ref=e392]: Style Guide
            - link "Licenses" [ref=e393] [cursor=pointer]:
              - /url: /licenses
              - generic [aria-hidden] [ref=e395]: Licenses
            - link "Changelog" [ref=e396] [cursor=pointer]:
              - /url: /changelog
              - generic [aria-hidden] [ref=e398]: Changelog
            - link "Privacy Policy" [ref=e399] [cursor=pointer]:
              - /url: /privacy
              - generic [aria-hidden] [ref=e401]: Privacy Policy
            - link "Instructions" [ref=e402] [cursor=pointer]:
              - /url: /instructions
              - generic [aria-hidden] [ref=e404]: Instructions
            - link "404" [ref=e405] [cursor=pointer]:
              - /url: /404
              - generic [aria-hidden] [ref=e407]: "404"
            - link "Password" [ref=e408] [cursor=pointer]:
              - /url: /401
              - generic [aria-hidden] [ref=e410]: Password
      - generic [ref=e411]:
        - generic [ref=e412]:
          - link "(239) 555-0108" [ref=e413] [cursor=pointer]:
            - /url: tel:(239)555-0108
          - link "hello@hyperframe.com" [ref=e414] [cursor=pointer]:
            - /url: mailto:hello@hyperframe.com?subject=Contact%20With%20Us
        - generic [ref=e415]:
          - link "Facebook" [ref=e416] [cursor=pointer]:
            - /url: https://www.facebook.com/
            - img "Facebook" [ref=e417]
          - link "Instagram" [ref=e418] [cursor=pointer]:
            - /url: https://www.instagram.com/
            - img "Instagram" [ref=e419]
          - link "X" [ref=e420] [cursor=pointer]:
            - /url: https://www.x.com/
            - img "X" [ref=e421]
          - link "LinkedIn" [ref=e422] [cursor=pointer]:
            - /url: https://www.linkedin.com/
            - img "LinkedIn" [ref=e423]
      - generic [ref=e424]:
        - generic [ref=e425]: Copyright (c) HyperFrame 2026
        - generic [ref=e426]: Independent React & GSAP Reconstruction
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