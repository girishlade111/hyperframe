# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.ts >> HyperFrame Interactive States & Forms >> contact form validates required inputs and submits local preview cleanly
- Location: tests\site.spec.ts:160:3

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByRole('status')
Expected substring: "Alex Mercer"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" getByRole('status') with timeout 5000ms
  - waiting for getByRole('status')

```

```yaml
- banner:
  - text: "NEW YORK, USA { 01:58 AM }"
  - link "HyperFrame Home":
    - /url: /
    - img "HyperFrame"
  - button "Open navigation menu"
  - text: Available for New Projects
- main:
  - heading "Let's Work Together!" [level=1]
  - paragraph: Let us help you become even greater at what you do. Fill out the following form and we will get back to you in the next 24 hours.
  - img "HyperFrame"
  - heading "Have A Project In Mind?" [level=2]
  - img "Creative studio workspace"
  - text: Full Name *
  - textbox "Full Name *":
    - /placeholder: First name
  - text: Your Company Name
  - textbox "Your Company Name":
    - /placeholder: Company name
  - text: Email *
  - textbox "Email *":
    - /placeholder: youremail@gmail.com
  - text: How Can We Help?
  - textbox "How Can We Help?":
    - /placeholder: Leave us a message...
  - checkbox "You agree to our friendly Privacy policy."
  - text: You agree to our friendly
  - link "Privacy policy":
    - /url: /privacy
  - text: .
  - button "Send Message"
  - text: "Local development preview: inquiry from Alex Mercer validated locally (configure VITE_CONTACT_ENDPOINT for live delivery). { FAQs }"
  - heading "Frequently Asked Questions" [level=2]
  - paragraph: Our cross-functional teams work together to achieve outstanding portfolios across all the digital channels.
  - button "1. What services does your agency offer?"
  - paragraph: We specialize in UI/UX design, website development, branding, and product design. Whether you need a landing page, a full website, we have got you covered.
  - button "2. How do I get started with a project?"
  - paragraph: Simply reach out to us through our contact form or email. We will schedule a quick discovery call to understand your needs, discuss the details, and guide you through the next steps.
  - button "3. What is your typical project timeline?"
  - paragraph: Timelines vary based on the project type and complexity. A simple website can take 2 to 4 weeks, while larger projects may take 6 to 12 weeks. We will share a clear timeline before we start.
  - button "4. How much do your services cost?"
  - paragraph: Our pricing depends on the scope, timeline, and complexity of your project. We provide custom quotes after understanding your goals and requirements. Get in touch for a detailed proposal tailored to your needs.
  - button "5. Will I be involved in the design process?"
  - paragraph: Yes, absolutely. We keep you involved at every stage, from initial concepts to final delivery. You will receive regular updates, feedback rounds, and full transparency throughout the process.
  - button "6. Development & Testing Platform"
  - paragraph: Yes. We handle the full development process, including cross-browser testing, performance optimization, and bug fixes. Your site will be fast, responsive, and ready for launch.
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
  172 |     await page.getByRole('button', { name: /submit|send/i }).click();
  173 | 
> 174 |     await expect(page.getByRole('status')).toContainText('Alex Mercer');
      |                                            ^ Error: expect(locator).toContainText(expected) failed
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
  212 |         );
  213 |         expect(overflow, `Overflow at ${route} (${vp.width}x${vp.height})`).toBe(false);
  214 |       }
  215 |     }
  216 |   });
  217 | });
  218 | 
```