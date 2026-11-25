# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.ts >> HyperFrame Interactive States & Forms >> fullscreen menu opens, navigates, and closes via Escape with focus restore
- Location: tests\site.spec.ts:101:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.nav-menu.active')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('.nav-menu.active') with timeout 5000ms
  - waiting for locator('.nav-menu.active')

```

```yaml
- banner:
  - text: "NEW YORK, USA { 01:55 AM }"
  - link "HyperFrame Home":
    - /url: /
    - img "HyperFrame"
  - button "Close navigation menu" [expanded]
  - text: Available for New Projects
- navigation "Primary navigation":
  - 'link "{ Home }"':
    - /url: /
  - 'link "{ About }"':
    - /url: /about
  - 'link "{ Services }"':
    - /url: /service
  - 'link "{ Projects }"':
    - /url: /project
  - 'link "{ Blogs }"':
    - /url: /blog
  - 'link "{ Contact }"':
    - /url: /contact
  - link "(239) 555-0108":
    - /url: tel:(239)555-0108
  - link "hello@hyperframe.com":
    - /url: mailto:hello@hyperframe.com?subject=Contact%20With%20Us
  - link "Facebook":
    - /url: https://www.facebook.com/
    - img "Facebook"
  - link "Instagram":
    - /url: https://www.instagram.com/
    - img "Instagram"
  - link "X":
    - /url: https://www.x.com/
    - img "X"
  - link "LinkedIn":
    - /url: https://www.linkedin.com/
    - img "LinkedIn"
- main:
  - heading "We develop websites, apps, and campaigns that truly make a difference for expanding brands." [level=1]
  - text: Design That Drives Results ©20-25 As a digital agency, we specialize in Branding Website Design Web Application Mobile App Illustration Icon Design
  - img "Abstract sculptural background"
  - img "Tessra / Rotashow"
  - img "Norvane"
  - img "Lumeq"
  - img "Orbisto"
  - img "Quillo"
  - text: ( 01 ) About HyperFrame We offer a full range of services website design, development, and digital marketing to boost your brand’s success.
  - paragraph: Our cross-functional teams work together to achieve outstanding results across all digital channels.
  - text: 24 + Websites launched Helping brands stand out online. 3.7M + Monthly visitors Reached by the sites we built. 94 % Client retention Clients who come back for more. ( 02 ) Featured Projects
  - heading "Our Recent Work" [level=2]
  - paragraph: Our cross-functional teams work together to achieve outstanding portfolios across all the digital channels.
  - article:
    - link "(001) ProFast We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects. ProFast project preview Year /2025 Role /Website Designer Services Branding Web Design Illustration Icon Design":
      - /url: /project/profast
      - text: (001)
      - heading "ProFast" [level=3]
      - paragraph: We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects.
      - img "ProFast project preview"
      - text: Year /2025 Role /Website Designer Services Branding Web Design Illustration Icon Design
  - article:
    - link "(002) SecureX We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects. SecureX project preview Year /2025 Role /Website Designer Services Branding Web Design Illustration Icon Design":
      - /url: /project/securex
      - text: (002)
      - heading "SecureX" [level=3]
      - paragraph: We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects.
      - img "SecureX project preview"
      - text: Year /2025 Role /Website Designer Services Branding Web Design Illustration Icon Design
  - article:
    - link "(003) Spinex Pro We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects. Spinex Pro project preview Year /2025 Role /Website Designer Services Branding Web Design Illustration Icon Design":
      - /url: /project/spinex-pro
      - text: (003)
      - heading "Spinex Pro" [level=3]
      - paragraph: We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects.
      - img "Spinex Pro project preview"
      - text: Year /2025 Role /Website Designer Services Branding Web Design Illustration Icon Design
  - link "View All Projects":
    - /url: /project
  - text: ( 03 ) Our Services
  - heading "Services We Provide" [level=2]
  - button "Branding (001)"
  - img "Branding preview 1"
  - img "Branding preview 2"
  - paragraph: We develop websites, apps, and campaigns that truly make a difference for expanding brands.
  - link "View Details":
    - /url: /service/branding
  - button "UI & UX Design (002)"
  - img "UI & UX Design preview 1"
  - img "UI & UX Design preview 2"
  - paragraph: We build digital experiences, websites, and campaigns that move growing brands forward.
  - link "View Details":
    - /url: /service/ui-ux-design
  - button "Illustration Design (003)"
  - img "Illustration Design preview 1"
  - img "Illustration Design preview 2"
  - paragraph: We design websites, apps, and campaigns that turn bold ideas into meaningful brand experiences.
  - link "View Details":
    - /url: /service/illustration-design
  - button "No Code Development (004)"
  - img "No Code Development preview 1"
  - img "No Code Development preview 2"
  - paragraph: We craft digital products and campaigns that help ambitious brands stand out and scale.
  - link "View Details":
    - /url: /service/no-code-development
  - button "Custom Development (005)"
  - img "Custom Development preview 1"
  - img "Custom Development preview 2"
  - paragraph: We create digital experiences that inspire audiences and drive growth for ambitious brands.
  - link "View Details":
    - /url: /service/custom-development
  - text: ( 04 ) Testimonials
  - heading "What Our Client Say" [level=2]
  - paragraph: Our cross-functional teams work together to achieve outstanding portfolios across all the digital channels.
  - article:
    - img "5 out of 5 stars"
    - text: "{ 001 }"
    - paragraph: “HyperFrame rebuilt our brand and website in twelve weeks. Pages now load in under two seconds and online orders are up 40%.”
    - img "Ethan Walker"
    - text: Ethan Walker Founder & CEO at ProFast
  - article:
    - img "5 out of 5 stars"
    - text: "{ 002 }"
    - paragraph: “They turned our complex security product into a story customers understand. Demo requests doubled in the first month after launch.”
    - img "Noah Carter"
    - text: Noah Carter Head of Growth at SecureX
  - article:
    - img "5 out of 5 stars"
    - text: "{ 003 }"
    - paragraph: “The team asked the right questions from day one. We finally have one clear message, and every page of the site supports it.”
    - img "James Whitfield"
    - text: James Whitfield Product Lead at Spinex Pro
  - article:
    - img "5 out of 5 stars"
    - text: "{ 004 }"
    - paragraph: “Our old site felt flat. The new one shows what our VR product feels like, and visitors now stay twice as long as before.”
    - img "Marcus Bennett"
    - text: Marcus Bennett Founder at Virtualex
  - article:
    - img "5 out of 5 stars"
    - text: "{ 005 }"
    - paragraph: “Mobile sales were our weak spot. After the redesign, more than half of our orders come from phones, and repeat orders keep growing.”
    - img "Daniel Reyes"
    - text: Daniel Reyes Co-Founder at Fashionable
  - button "Previous testimonial"
  - button "Next testimonial"
  - img "HyperFrame"
  - img "Client portrait 1"
  - img "Client portrait 2"
  - img "Client portrait 3"
  - img "Client portrait 4"
  - img "Client portrait 5"
  - img "5 stars"
  - text: Trusted by clients worldwide
  - link "Leave a Review":
    - /url: /contact
  - text: ( 05 ) Why Choose Us
  - heading "Why Brands Trust Us" [level=2]
  - paragraph: "Great design is about more than just visuals: it is about crafting meaningful experiences that lead to tangible results."
  - img "HyperFrame"
  - text: "{ 001 } We Improve Conversion Rate: Website Loading Speed +48% Users Bounce Rate -23% { 002 } Yearly Increase Users Conversion Rates"
  - paragraph: Our designs engage millions worldwide.
  - text: /60 X
  - img "Conversion rate growth chart"
  - text: ( 06 ) Pricing Plans
  - heading "Explore Our Pricing" [level=2]
  - paragraph: "Great design is about more than just visuals: it is about crafting meaningful experiences that lead to tangible results."
  - heading "Essential" [level=3]
  - paragraph: Great for small teams or startups that need quick, clean designs for websites or branding materials.
  - 'switch "Essential: Add Development ($3,699)"'
  - text: "Add Development ($3,699) Delivery Time: 4-6 weeks $1,999 $5,499 /month What’s included: Single Landing Page Design Custom UI/UX Design Responsive (Mobile & Tablet) 2 Rounds of Revisions"
  - link "Start Your Project":
    - /url: /contact
  - heading "Enterprise" [level=3]
  - paragraph: A complete customized design solutions with strategy, visuals, and collaboration.
  - 'switch "Enterprise: Add Development ($7,599)"'
  - text: "Add Development ($7,599) Delivery Time: 6-8 weeks $4,999 $7,599 /month What’s included: Up to 10 Page Website Brand Strategy & Identity CMS Setup & Training Priority Support"
  - link "Start Your Project":
    - /url: /contact
  - text: ( 07 ) Our Process
  - heading "From Idea To Launch" [level=2]
  - paragraph: Here’s how we take your idea from concept to launch, making sure every step is smooth, transparent, and focused on results.
  - img "Discovery & Strategy"
  - img "Wireframing & UX"
  - img "User Interface Design"
  - img "Development & Testing"
  - img "Launch and Support"
  - text: "{ 001 }"
  - heading "Discovery & Strategy" [level=3]
  - paragraph: We start by understanding your business, goals, and audience. Through discovery sessions, we align on objectives, competitors, and the message your website needs to deliver.
  - text: "{ 002 }"
  - heading "Wireframing & UX" [level=3]
  - paragraph: Before visuals, we map out the structure. Wireframes help define content hierarchy, user flows, and page layouts, ensuring the site is intuitive and conversion-focused.
  - text: "{ 003 }"
  - heading "User Interface Design" [level=3]
  - paragraph: This is where ideas come to life. We design modern, pixel-perfect interfaces with the right balance of creativity and usability, using your brand style to make the site stand out.
  - text: "{ 004 }"
  - heading "Development & Testing" [level=3]
  - paragraph: We build the site with clean code, then test it on every screen size and browser. Speed, SEO and accessibility are checked and fine-tuned before anything goes live.
  - text: "{ 005 }"
  - heading "Launch and Support" [level=3]
  - paragraph: We launch your new site and provide ongoing support (if needed) for updates, improvements, or scaling. Your website stays fast, secure, and reliable.
  - text: ( 08 ) Team Members
  - heading "Meet Our Team" [level=2]
  - paragraph: "Great design is about more than just visuals: it is about crafting meaningful experiences that lead to tangible results."
  - article:
    - img "Robert Browny"
    - text: ( 001 )
    - heading "Robert Browny" [level=3]
    - text: Founder & CEO at HyperFrame
    - link "Robert Browny on LinkedIn":
      - /url: https://www.linkedin.com/
  - article:
    - img "Jacob Jones"
    - text: ( 002 )
    - heading "Jacob Jones" [level=3]
    - text: Web Developer at HyperFrame
    - link "Jacob Jones on LinkedIn":
      - /url: https://www.linkedin.com/
  - article:
    - img "Ronald Richards"
    - text: ( 003 )
    - heading "Ronald Richards" [level=3]
    - text: Senior Sales VP at HyperFrame
    - link "Ronald Richards on LinkedIn":
      - /url: https://www.linkedin.com/
  - text: ( 09 ) Success Stories
  - heading "Stories That Speak For Themselves" [level=2]
  - paragraph: "Great design is about more than just visuals: it is about crafting meaningful experiences that lead to tangible results."
  - img "HyperFrame"
  - img "Client portrait 1"
  - img "Client portrait 2"
  - img "Client portrait 3"
  - img "Client portrait 4"
  - img "Client portrait 5"
  - img "5 stars"
  - text: Trusted by clients worldwide
  - paragraph: We develop websites, apps, and campaigns that truly make a difference for expanding brands.
  - article:
    - text: ( 001 )
    - img "5 stars"
    - paragraph: “Our team designed a sleek SaaS website with clear messaging, targeted CTAs, and trust-building visuals. Built from a Figma design for quick, scalable deployment.”
    - img "Robert Browny"
    - text: Robert Browny Founder & CEO at Story Pixel /60 % Customer Retention Our designs engage millions worldwide. /225 % Conversion Rate Increase Our designs engage millions worldwide.
  - article:
    - img "Client story featured portrait"
    - text: ( 002 )
    - img "5 stars"
    - paragraph: “Our team designed a sleek SaaS website with clear messaging, targeted CTAs, and trust-building visuals. Built from a Figma design for quick, scalable deployment.”
  - text: ( 10 ) Blogs & Articles
  - heading "Our Latest Blogs" [level=2]
  - link "View All Blogs":
    - /url: /blog
  - article:
    - link "5 Website Design Trends to Watch Learn More":
      - /url: /blog/5-website-design-trends-to-watch
      - img "5 Website Design Trends to Watch"
      - text: Learn More
    - text: (002) September 22, 2026
    - link "5 Website Design Trends to Watch":
      - /url: /blog/5-website-design-trends-to-watch
    - paragraph: Discover the newest digital design trends shaping this year's landscape and see how they can help your brand stand out all over the world by great ui ux design.
  - article:
    - link "How to Create a Design Systems Learn More":
      - /url: /blog/how-to-create-a-design-systems
      - img "How to Create a Design Systems"
      - text: Learn More
    - text: (003) September 22, 2026
    - link "How to Create a Design Systems":
      - /url: /blog/how-to-create-a-design-systems
    - paragraph: Learn why design isn’t just about looks it’s about creating seamless user journeys that drive business results.
- text: ( 11 ) Contact Us
- heading "Have Any Project Idea?" [level=2]
- paragraph: "Great design is about more than just visuals: it is about crafting meaningful experiences that lead to tangible results."
- link "Contact HyperFrame":
  - /url: /contact
  - text: hyperframe@gmail.com ⌝ Get In Touch⌝ hyperframe@gmail.com ⌝ Get In Touch⌝
- contentinfo:
  - link "HyperFrame Home":
    - /url: /
    - img "HyperFrame"
  - text: Stay Connected With Us
  - textbox "Enter your email":
    - /placeholder: Enter your email...
  - button "Subscribe to newsletter"
  - link "About Us":
    - /url: /about
  - link "Services":
    - /url: /service
  - link "Services Details":
    - /url: /service/branding
  - link "Project":
    - /url: /project
  - link "Project Details":
    - /url: /project/spinex-pro
  - link "Contact Us":
    - /url: /contact
  - link "Style Guide":
    - /url: /style-guide
  - link "Licenses":
    - /url: /licenses
  - link "Changelog":
    - /url: /changelog
  - link "Privacy Policy":
    - /url: /privacy
  - link "Instructions":
    - /url: /instructions
  - link "404":
    - /url: /404
  - link "Password":
    - /url: /401
  - link "(239) 555-0108":
    - /url: tel:(239)555-0108
  - link "hello@hyperframe.com":
    - /url: mailto:hello@hyperframe.com?subject=Contact%20With%20Us
  - link "Facebook":
    - /url: https://www.facebook.com/
    - img "Facebook"
  - link "Instagram":
    - /url: https://www.instagram.com/
    - img "Instagram"
  - link "X":
    - /url: https://www.x.com/
    - img "X"
  - link "LinkedIn":
    - /url: https://www.linkedin.com/
    - img "LinkedIn"
  - text: Copyright (c) HyperFrame 2026 Independent React & GSAP Reconstruction
```

# Test source

```ts
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
  71  |       expect(brokenImages).toEqual([]);
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
> 111 |     await expect(drawer).toBeVisible();
      |                          ^ Error: expect(locator).toBeVisible() failed
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
  172 |     await page.getByRole('button', { name: /submit|send/i }).click();
  173 | 
  174 |     await expect(page.getByRole('status')).toContainText('Alex Mercer');
  175 |   });
  176 | 
  177 |   test('FAQ accordion expands and collapses', async ({ page }) => {
  178 |     await page.setViewportSize({ width: 1440, height: 900 });
  179 |     await page.goto('/contact', { waitUntil: 'networkidle' });
  180 | 
  181 |     const firstFaq = page.locator('.faq-question-btn').first();
  182 |     await firstFaq.scrollIntoViewIfNeeded();
  183 |     await expect(firstFaq).toHaveAttribute('aria-expanded', 'false');
  184 |     await firstFaq.click();
  185 |     await expect(firstFaq).toHaveAttribute('aria-expanded', 'true');
  186 |   });
  187 | 
  188 |   test('About Showreel opens VideoModal and closes on Escape', async ({ page }) => {
  189 |     await page.setViewportSize({ width: 1440, height: 900 });
  190 |     await page.goto('/about', { waitUntil: 'networkidle' });
  191 | 
  192 |     const playBtn = page.getByRole('button', { name: /play|showreel/i }).first();
  193 |     await playBtn.scrollIntoViewIfNeeded();
  194 |     await playBtn.click();
  195 | 
  196 |     const dialog = page.getByRole('dialog');
  197 |     await expect(dialog).toBeVisible();
  198 |     await page.keyboard.press('Escape');
  199 |     await expect(dialog).toBeHidden();
  200 |   });
  201 | 
  202 |   test('responsive mobile 390px and tablet 768px have zero horizontal overflow on key pages', async ({ page }) => {
  203 |     for (const vp of [
  204 |       { width: 768, height: 1024 },
  205 |       { width: 390, height: 844 },
  206 |     ]) {
  207 |       await page.setViewportSize(vp);
  208 |       for (const route of ['/', '/about', '/service', '/project', '/contact']) {
  209 |         await page.goto(route, { waitUntil: 'networkidle' });
  210 |         const overflow = await page.evaluate(
  211 |           () => document.documentElement.scrollWidth > document.documentElement.clientWidth
```