# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.ts >> HyperFrame Multi-Page Routing & Rendering >> route /service renders without console errors or broken images
- Location: tests\site.spec.ts:39:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 24

- Array []
+ Array [
+   "/assets/icons/linkedin-02.svg",
+   "/assets/icons/Stars.svg",
+   "/assets/images/testimonials/Trusted-Image-02.avif",
+   "/assets/icons/Service-Icon-01.svg",
+   "/assets/images/projects/Project-Image-02.avif",
+   "/assets/icons/Service-Icon-01.svg",
+   "/assets/icons/Service-Icon-02.svg",
+   "/assets/icons/Service-Icon-03.svg",
+   "/assets/icons/Service-Icon-04.svg",
+   "/assets/images/projects/Project-Short-Image-03.avif",
+   "/assets/images/projects/Project-Image-03.avif",
+   "/assets/icons/Service-Icon-01.svg",
+   "/assets/icons/Service-Icon-02.svg",
+   "/assets/icons/Service-Icon-03.svg",
+   "/assets/icons/Service-Icon-04.svg",
+   "/assets/images/projects/Project-Short-Image-04.avif",
+   "/assets/images/projects/Project-Image-04.avif",
+   "/assets/icons/Service-Icon-01.svg",
+   "/assets/icons/Service-Icon-02.svg",
+   "/assets/icons/Service-Icon-03.svg",
+   "/assets/icons/Service-Icon-04.svg",
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
    - generic [ref=e21]:
      - generic [ref=e23]:
        - heading "Grow Your Business with Our Services" [level=1] [ref=e25]: Grow Your Businesswith Our Services
        - paragraph [ref=e27]: At HyperFrame, our UI/UX design turns ideas into engaging, user-friendly digital products that inspire and boost conversions, whether launching or redesigning platforms.
        - link "Book a Free Consultation" [ref=e29] [cursor=pointer]:
          - /url: /contact
          - generic [ref=e30]:
            - generic [ref=e31]: Book a Free Consultation
            - generic [aria-hidden] [ref=e32]: Book a Free Consultation
      - generic [ref=e37]:
        - generic [ref=e38]:
          - generic [ref=e39]:
            - generic [ref=e40]: "{"
            - generic [ref=e41]: Our Services
            - generic [ref=e42]: "}"
          - heading "Services We Provide" [level=2] [ref=e43]
        - generic [ref=e45]:
          - generic [ref=e46] [cursor=pointer]:
            - button "Branding (001)" [ref=e47]:
              - generic [ref=e48]: Branding
              - generic [ref=e49]: (001)
            - generic [ref=e50]:
              - generic [ref=e51]:
                - img "Branding preview 1" [ref=e53]
                - img "Branding preview 2" [ref=e55]
              - generic [ref=e56]:
                - paragraph [ref=e57]: We develop websites, apps, and campaigns that truly make a difference for expanding brands.
                - link "View Details" [ref=e58]:
                  - /url: /service/branding
                  - generic [ref=e59]:
                    - generic [ref=e60]: View Details
                    - generic [aria-hidden] [ref=e61]: View Details
          - generic [ref=e64] [cursor=pointer]:
            - button "UI & UX Design (002)" [ref=e65]:
              - generic [ref=e66]: UI & UX Design
              - generic [ref=e67]: (002)
            - generic [ref=e68]:
              - generic [ref=e69]:
                - img "UI & UX Design preview 1" [ref=e71]
                - img "UI & UX Design preview 2" [ref=e73]
              - generic [ref=e74]:
                - paragraph [ref=e75]: We build digital experiences, websites, and campaigns that move growing brands forward.
                - link "View Details" [ref=e76]:
                  - /url: /service/ui-ux-design
                  - generic [ref=e77]:
                    - generic [ref=e78]: View Details
                    - generic [aria-hidden] [ref=e79]: View Details
          - generic [ref=e82] [cursor=pointer]:
            - button "Illustration Design (003)" [ref=e83]:
              - generic [ref=e84]: Illustration Design
              - generic [ref=e85]: (003)
            - generic [ref=e86]:
              - generic [ref=e87]:
                - img "Illustration Design preview 1" [ref=e89]
                - img "Illustration Design preview 2" [ref=e91]
              - generic [ref=e92]:
                - paragraph [ref=e93]: We design websites, apps, and campaigns that turn bold ideas into meaningful brand experiences.
                - link "View Details" [ref=e94]:
                  - /url: /service/illustration-design
                  - generic [ref=e95]:
                    - generic [ref=e96]: View Details
                    - generic [aria-hidden] [ref=e97]: View Details
          - generic [ref=e100] [cursor=pointer]:
            - button "No Code Development (004)" [ref=e101]:
              - generic [ref=e102]: No Code Development
              - generic [ref=e103]: (004)
            - generic [ref=e104]:
              - generic [ref=e105]:
                - img "No Code Development preview 1" [ref=e107]
                - img "No Code Development preview 2" [ref=e109]
              - generic [ref=e110]:
                - paragraph [ref=e111]: We craft digital products and campaigns that help ambitious brands stand out and scale.
                - link "View Details" [ref=e112]:
                  - /url: /service/no-code-development
                  - generic [ref=e113]:
                    - generic [ref=e114]: View Details
                    - generic [aria-hidden] [ref=e115]: View Details
          - generic [ref=e118] [cursor=pointer]:
            - button "Custom Development (005)" [ref=e119]:
              - generic [ref=e120]: Custom Development
              - generic [ref=e121]: (005)
            - generic [ref=e122]:
              - generic [ref=e123]:
                - img "Custom Development preview 1" [ref=e125]
                - img "Custom Development preview 2" [ref=e127]
              - generic [ref=e128]:
                - paragraph [ref=e129]: We create digital experiences that inspire audiences and drive growth for ambitious brands.
                - link "View Details" [ref=e130]:
                  - /url: /service/custom-development
                  - generic [ref=e131]:
                    - generic [ref=e132]: View Details
                    - generic [aria-hidden] [ref=e133]: View Details
    - generic [ref=e137]:
      - generic [ref=e138]:
        - generic [ref=e139]:
          - generic [ref=e140]: "{"
          - generic [ref=e141]: Why Choose Us
          - generic [ref=e142]: "}"
        - heading "Why Brands Trust Us" [level=2] [ref=e143]
        - paragraph [ref=e145]: "Great design is about more than just visuals: it is about crafting meaningful experiences that lead to tangible results."
      - generic [ref=e147]:
        - generic [ref=e148]:
          - generic [ref=e149]:
            - img "HyperFrame" [ref=e151]
            - generic [ref=e152]:
              - generic [ref=e153]: "{"
              - generic [ref=e154]: "001"
              - generic [ref=e155]: "}"
          - generic [ref=e156]:
            - generic [ref=e157]: "We Improve Conversion Rate:"
            - generic [ref=e158]: Website Loading Speed +48%
            - generic [ref=e159]: Users Bounce Rate -23%
        - generic [ref=e160]:
          - generic [ref=e161]:
            - generic [ref=e162]:
              - generic [ref=e163]: "{"
              - generic [ref=e164]: "002"
              - generic [ref=e165]: "}"
            - generic [ref=e166]: Yearly Increase Users Conversion Rates
            - paragraph [ref=e167]: Our designs engage millions worldwide.
            - generic [ref=e168]:
              - generic [ref=e169]: /60
              - generic [ref=e170]: X
          - img "Conversion rate growth chart" [ref=e172]
    - generic [ref=e174]:
      - generic [ref=e175]:
        - generic [ref=e176]:
          - generic [ref=e177]: "{"
          - generic [ref=e178]: Testimonials
          - generic [ref=e179]: "}"
        - heading "What Our Client Say" [level=2] [ref=e180]
        - paragraph [ref=e182]: Our cross-functional teams work together to achieve outstanding portfolios across all the digital channels.
      - generic [ref=e184]:
        - generic [ref=e185]:
          - article [ref=e186]:
            - generic [ref=e187]:
              - generic [ref=e188]:
                - img "5 out of 5 stars" [ref=e190]
                - generic [ref=e191]:
                  - generic [ref=e192]: "{"
                  - generic [ref=e193]: "001"
                  - generic [ref=e194]: "}"
              - generic [ref=e195]:
                - paragraph [ref=e196]: “HyperFrame rebuilt our brand and website in twelve weeks. Pages now load in under two seconds and online orders are up 40%.”
                - generic [ref=e197]:
                  - img "Ethan Walker" [ref=e199]
                  - generic [ref=e200]:
                    - generic [ref=e201]: Ethan Walker
                    - generic [ref=e202]: Founder & CEO at ProFast
          - article [ref=e203]:
            - generic [ref=e204]:
              - generic [ref=e205]:
                - img "5 out of 5 stars" [ref=e207]
                - generic [ref=e208]:
                  - generic [ref=e209]: "{"
                  - generic [ref=e210]: "002"
                  - generic [ref=e211]: "}"
              - generic [ref=e212]:
                - paragraph [ref=e213]: “They turned our complex security product into a story customers understand. Demo requests doubled in the first month after launch.”
                - generic [ref=e214]:
                  - img "Noah Carter" [ref=e216]
                  - generic [ref=e217]:
                    - generic [ref=e218]: Noah Carter
                    - generic [ref=e219]: Head of Growth at SecureX
          - article [ref=e220]:
            - generic [ref=e221]:
              - generic [ref=e222]:
                - img "5 out of 5 stars" [ref=e224]
                - generic [ref=e225]:
                  - generic [ref=e226]: "{"
                  - generic [ref=e227]: "003"
                  - generic [ref=e228]: "}"
              - generic [ref=e229]:
                - paragraph [ref=e230]: “The team asked the right questions from day one. We finally have one clear message, and every page of the site supports it.”
                - generic [ref=e231]:
                  - img "James Whitfield" [ref=e233]
                  - generic [ref=e234]:
                    - generic [ref=e235]: James Whitfield
                    - generic [ref=e236]: Product Lead at Spinex Pro
          - article [ref=e237]:
            - generic [ref=e238]:
              - generic [ref=e239]:
                - img "5 out of 5 stars" [ref=e241]
                - generic [ref=e242]:
                  - generic [ref=e243]: "{"
                  - generic [ref=e244]: "004"
                  - generic [ref=e245]: "}"
              - generic [ref=e246]:
                - paragraph [ref=e247]: “Our old site felt flat. The new one shows what our VR product feels like, and visitors now stay twice as long as before.”
                - generic [ref=e248]:
                  - img "Marcus Bennett" [ref=e250]
                  - generic [ref=e251]:
                    - generic [ref=e252]: Marcus Bennett
                    - generic [ref=e253]: Founder at Virtualex
          - article [ref=e254]:
            - generic [ref=e255]:
              - generic [ref=e256]:
                - img "5 out of 5 stars" [ref=e258]
                - generic [ref=e259]:
                  - generic [ref=e260]: "{"
                  - generic [ref=e261]: "005"
                  - generic [ref=e262]: "}"
              - generic [ref=e263]:
                - paragraph [ref=e264]: “Mobile sales were our weak spot. After the redesign, more than half of our orders come from phones, and repeat orders keep growing.”
                - generic [ref=e265]:
                  - img "Daniel Reyes" [ref=e267]
                  - generic [ref=e268]:
                    - generic [ref=e269]: Daniel Reyes
                    - generic [ref=e270]: Co-Founder at Fashionable
        - button "Previous testimonial" [ref=e271] [cursor=pointer]
        - button "Next testimonial" [ref=e272] [cursor=pointer]
        - generic [ref=e273]:
          - generic [ref=e274]:
            - img "HyperFrame" [ref=e276]
            - generic [ref=e277]:
              - generic [ref=e278]:
                - img "Client portrait 1" [ref=e280]
                - img "Client portrait 2" [ref=e282]
                - img "Client portrait 3" [ref=e284]
                - img "Client portrait 4" [ref=e286]
                - img "Client portrait 5" [ref=e288]
              - generic [ref=e289]:
                - img "5 stars" [ref=e291]
                - generic [ref=e292]: Trusted by clients worldwide
          - link "Leave a Review" [ref=e293] [cursor=pointer]:
            - /url: /contact
            - generic [ref=e294]:
              - generic [ref=e295]: Leave a Review
              - generic [aria-hidden] [ref=e296]: Leave a Review
    - generic [ref=e300]:
      - generic [ref=e301]:
        - generic [ref=e302]:
          - generic [ref=e303]:
            - generic [ref=e304]: "{"
            - generic [ref=e305]: Featured Projects
            - generic [ref=e306]: "}"
          - heading "Our Recent Work" [level=2] [ref=e308]
          - paragraph [ref=e310]: Our cross-functional teams work together to achieve outstanding portfolios across all the digital channels.
        - link "View All Projects" [ref=e311] [cursor=pointer]:
          - /url: /project
          - generic [ref=e312]:
            - generic [ref=e313]: View All Projects
            - generic [aria-hidden] [ref=e314]: View All Projects
      - generic [ref=e317]:
        - generic [ref=e319]:
          - article [ref=e321]:
            - link "(001) ProFast We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects. ProFast project preview Year /2025 Role /Website Designer Services Branding Web Design Illustration Icon Design" [ref=e322] [cursor=pointer]:
              - /url: /project/profast
              - generic [ref=e325]:
                - generic [ref=e326]:
                  - generic [ref=e327]:
                    - generic [ref=e328]: (001)
                    - heading "ProFast" [level=3] [ref=e329]
                  - paragraph [ref=e330]: We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects.
                - img "ProFast project preview" [ref=e332]
                - generic [ref=e333]:
                  - generic [ref=e334]:
                    - generic [ref=e335]:
                      - generic [ref=e336]: Year
                      - generic [ref=e337]: /2025
                    - generic [ref=e338]:
                      - generic [ref=e339]: Role
                      - generic [ref=e340]: /Website Designer
                  - generic [ref=e341]:
                    - generic [ref=e342]: Services
                    - generic [ref=e343]:
                      - generic [ref=e344]: Branding
                      - generic [ref=e347]: Web Design
                      - generic [ref=e350]: Illustration
                      - generic [ref=e353]: Icon Design
          - article [ref=e357]:
            - link "(002) SecureX We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects. SecureX project preview Year /2025 Role /Website Designer Services Branding Web Design Illustration Icon Design" [ref=e358] [cursor=pointer]:
              - /url: /project/securex
              - generic [ref=e361]:
                - generic [ref=e362]:
                  - generic [ref=e363]:
                    - generic [ref=e364]: (002)
                    - heading "SecureX" [level=3] [ref=e365]
                  - paragraph [ref=e366]: We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects.
                - img "SecureX project preview" [ref=e368]
                - generic [ref=e369]:
                  - generic [ref=e370]:
                    - generic [ref=e371]:
                      - generic [ref=e372]: Year
                      - generic [ref=e373]: /2025
                    - generic [ref=e374]:
                      - generic [ref=e375]: Role
                      - generic [ref=e376]: /Website Designer
                  - generic [ref=e377]:
                    - generic [ref=e378]: Services
                    - generic [ref=e379]:
                      - generic [ref=e380]: Branding
                      - generic [ref=e383]: Web Design
                      - generic [ref=e386]: Illustration
                      - generic [ref=e389]: Icon Design
          - article [ref=e393]:
            - link "(003) Spinex Pro We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects. Spinex Pro project preview Year /2025 Role /Website Designer Services Branding Web Design Illustration Icon Design" [ref=e394] [cursor=pointer]:
              - /url: /project/spinex-pro
              - generic [ref=e397]:
                - generic [ref=e398]:
                  - generic [ref=e399]:
                    - generic [ref=e400]: (003)
                    - heading "Spinex Pro" [level=3] [ref=e401]
                  - paragraph [ref=e402]: We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects.
                - img "Spinex Pro project preview" [ref=e404]
                - generic [ref=e405]:
                  - generic [ref=e406]:
                    - generic [ref=e407]:
                      - generic [ref=e408]: Year
                      - generic [ref=e409]: /2025
                    - generic [ref=e410]:
                      - generic [ref=e411]: Role
                      - generic [ref=e412]: /Website Designer
                  - generic [ref=e413]:
                    - generic [ref=e414]: Services
                    - generic [ref=e415]:
                      - generic [ref=e416]: Branding
                      - generic [ref=e419]: Web Design
                      - generic [ref=e422]: Illustration
                      - generic [ref=e425]: Icon Design
          - article [ref=e429]:
            - link "(004) Virtualex We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects. Virtualex project preview Year /2025 Role /Website Designer Services Branding Web Design Illustration Icon Design" [ref=e430] [cursor=pointer]:
              - /url: /project/virtualex
              - generic [ref=e433]:
                - generic [ref=e434]:
                  - generic [ref=e435]:
                    - generic [ref=e436]: (004)
                    - heading "Virtualex" [level=3] [ref=e437]
                  - paragraph [ref=e438]: We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects.
                - img "Virtualex project preview" [ref=e440]
                - generic [ref=e441]:
                  - generic [ref=e442]:
                    - generic [ref=e443]:
                      - generic [ref=e444]: Year
                      - generic [ref=e445]: /2025
                    - generic [ref=e446]:
                      - generic [ref=e447]: Role
                      - generic [ref=e448]: /Website Designer
                  - generic [ref=e449]:
                    - generic [ref=e450]: Services
                    - generic [ref=e451]:
                      - generic [ref=e452]: Branding
                      - generic [ref=e455]: Web Design
                      - generic [ref=e458]: Illustration
                      - generic [ref=e461]: Icon Design
        - generic [ref=e464]:
          - button "Previous project" [ref=e465] [cursor=pointer]
          - button "Next project" [ref=e468] [cursor=pointer]
    - generic [ref=e472]:
      - generic [ref=e473]:
        - generic [ref=e474]:
          - generic [ref=e475]: "{"
          - generic [ref=e476]: Pricing Plans
          - generic [ref=e477]: "}"
        - heading "What Our Client Say" [level=2] [ref=e478]
        - paragraph [ref=e480]: "Great design is about more than just visuals: it is about crafting meaningful experiences that lead to tangible results."
      - generic [ref=e482]:
        - generic [ref=e484]:
          - generic [ref=e485]:
            - generic [ref=e486]:
              - heading "Essential" [level=3] [ref=e488]
              - paragraph [ref=e490]: Great for small teams or startups that need quick, clean designs for websites or branding materials.
            - generic [ref=e491]:
              - generic [ref=e492]:
                - 'switch "Essential: Add Development ($3,699)" [ref=e493] [cursor=pointer]'
                - generic [ref=e495]: Add Development ($3,699)
              - generic [ref=e496]:
                - generic [ref=e497]: "Delivery Time:"
                - generic [ref=e498]: 4-6 weeks
          - generic [ref=e499]:
            - generic [ref=e500]:
              - generic [ref=e502]:
                - generic [ref=e503]: $1,999
                - generic [ref=e504]: $5,499
              - generic [ref=e505]: /month
            - generic [ref=e507]:
              - generic [ref=e508]: "What’s included:"
              - generic [ref=e509]:
                - generic [ref=e510]: Single Landing Page Design
                - generic [ref=e513]: Custom UI/UX Design
                - generic [ref=e516]: Responsive (Mobile & Tablet)
                - generic [ref=e519]: 2 Rounds of Revisions
            - link "Start Your Project" [ref=e523] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e524]:
                - generic [ref=e525]: Start Your Project
                - generic [aria-hidden] [ref=e526]: Start Your Project
        - generic [ref=e530]:
          - generic [ref=e531]:
            - generic [ref=e532]:
              - heading "Enterprise" [level=3] [ref=e534]
              - paragraph [ref=e536]: A complete customized design solutions with strategy, visuals, and collaboration.
            - generic [ref=e537]:
              - generic [ref=e538]:
                - 'switch "Enterprise: Add Development ($7,599)" [ref=e539] [cursor=pointer]'
                - generic [ref=e541]: Add Development ($7,599)
              - generic [ref=e542]:
                - generic [ref=e543]: "Delivery Time:"
                - generic [ref=e544]: 6-8 weeks
          - generic [ref=e545]:
            - generic [ref=e546]:
              - generic [ref=e548]:
                - generic [ref=e549]: $4,999
                - generic [ref=e550]: $7,599
              - generic [ref=e551]: /month
            - generic [ref=e553]:
              - generic [ref=e554]: "What’s included:"
              - generic [ref=e555]:
                - generic [ref=e556]: Up to 10 Page Website
                - generic [ref=e559]: Brand Strategy & Identity
                - generic [ref=e562]: CMS Setup & Training
                - generic [ref=e565]: Priority Support
            - link "Start Your Project" [ref=e569] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e570]:
                - generic [ref=e571]: Start Your Project
                - generic [aria-hidden] [ref=e572]: Start Your Project
    - generic [ref=e576]:
      - generic [ref=e577]:
        - generic [ref=e578]:
          - generic [ref=e579]: "{"
          - generic [ref=e580]: FAQs
          - generic [ref=e581]: "}"
        - heading "Frequently Asked Questions" [level=2] [ref=e583]
        - paragraph [ref=e585]: Our cross-functional teams work together to achieve outstanding portfolios across all the digital channels.
      - generic [ref=e587]:
        - generic [ref=e588]:
          - generic [ref=e589]:
            - button "1. What services does your agency offer?" [ref=e590] [cursor=pointer]
            - paragraph [ref=e593]: We specialize in UI/UX design, website development, branding, and product design. Whether you need a landing page, a full website, we have got you covered.
          - generic [ref=e594]:
            - button "2. How do I get started with a project?" [ref=e595] [cursor=pointer]
            - paragraph [ref=e598]: Simply reach out to us through our contact form or email. We will schedule a quick discovery call to understand your needs, discuss the details, and guide you through the next steps.
          - generic [ref=e599]:
            - button "3. What is your typical project timeline?" [ref=e600] [cursor=pointer]
            - paragraph [ref=e603]: Timelines vary based on the project type and complexity. A simple website can take 2 to 4 weeks, while larger projects may take 6 to 12 weeks. We will share a clear timeline before we start.
        - generic [ref=e604]:
          - generic [ref=e605]:
            - button "4. How much do your services cost?" [ref=e606] [cursor=pointer]
            - paragraph [ref=e609]: Our pricing depends on the scope, timeline, and complexity of your project. We provide custom quotes after understanding your goals and requirements. Get in touch for a detailed proposal tailored to your needs.
          - generic [ref=e610]:
            - button "5. Will I be involved in the design process?" [ref=e611] [cursor=pointer]
            - paragraph [ref=e614]: Yes, absolutely. We keep you involved at every stage, from initial concepts to final delivery. You will receive regular updates, feedback rounds, and full transparency throughout the process.
          - generic [ref=e615]:
            - button "6. Development & Testing Platform" [ref=e616] [cursor=pointer]
            - paragraph [ref=e619]: Yes. We handle the full development process, including cross-browser testing, performance optimization, and bug fixes. Your site will be fast, responsive, and ready for launch.
  - generic [ref=e620]:
    - generic [ref=e622]:
      - generic [ref=e624]:
        - generic [ref=e625]: "{"
        - generic [ref=e626]: Contact Us
        - generic [ref=e627]: "}"
      - heading "Have Any Project Idea?" [level=2] [ref=e629]
      - paragraph [ref=e631]: "Great design is about more than just visuals: it is about crafting meaningful experiences that lead to tangible results."
    - link "Contact HyperFrame" [ref=e633] [cursor=pointer]:
      - /url: /contact
      - generic [ref=e634]:
        - generic [ref=e635]: hyperframe@gmail.com ⌝
        - generic [ref=e636]: Get In Touch⌝
        - generic [ref=e637]: hyperframe@gmail.com ⌝
        - generic [ref=e638]: Get In Touch⌝
      - generic [aria-hidden] [ref=e639]:
        - generic [ref=e640]: hyperframe@gmail.com ⌝
        - generic [ref=e641]: Get In Touch⌝
        - generic [ref=e642]: hyperframe@gmail.com ⌝
        - generic [ref=e643]: Get In Touch⌝
      - generic [aria-hidden] [ref=e644]:
        - generic [ref=e645]: hyperframe@gmail.com ⌝
        - generic [ref=e646]: Get In Touch⌝
        - generic [ref=e647]: hyperframe@gmail.com ⌝
        - generic [ref=e648]: Get In Touch⌝
  - contentinfo [ref=e649]:
    - generic [ref=e650]:
      - generic [ref=e651]:
        - generic [ref=e652]:
          - link "HyperFrame Home" [ref=e653] [cursor=pointer]:
            - /url: /
            - img "HyperFrame" [ref=e654]
          - generic [ref=e655]:
            - generic [ref=e656]: Stay Connected With Us
            - generic [ref=e657]:
              - textbox "Enter your email" [ref=e658]:
                - /placeholder: Enter your email...
              - button "Subscribe to newsletter" [ref=e659] [cursor=pointer]
        - generic [ref=e660]:
          - generic [ref=e661]:
            - link "About Us" [ref=e662] [cursor=pointer]:
              - /url: /about
              - generic [aria-hidden] [ref=e664]: About Us
            - link "Services" [ref=e665] [cursor=pointer]:
              - /url: /service
              - generic [aria-hidden] [ref=e667]: Services
            - link "Services Details" [ref=e668] [cursor=pointer]:
              - /url: /service/branding
              - generic [aria-hidden] [ref=e670]: Services Details
            - link "Project" [ref=e671] [cursor=pointer]:
              - /url: /project
              - generic [aria-hidden] [ref=e673]: Project
            - link "Project Details" [ref=e674] [cursor=pointer]:
              - /url: /project/spinex-pro
              - generic [aria-hidden] [ref=e676]: Project Details
            - link "Contact Us" [ref=e677] [cursor=pointer]:
              - /url: /contact
              - generic [aria-hidden] [ref=e679]: Contact Us
          - generic [ref=e680]:
            - link "Style Guide" [ref=e681] [cursor=pointer]:
              - /url: /style-guide
              - generic [aria-hidden] [ref=e683]: Style Guide
            - link "Licenses" [ref=e684] [cursor=pointer]:
              - /url: /licenses
              - generic [aria-hidden] [ref=e686]: Licenses
            - link "Changelog" [ref=e687] [cursor=pointer]:
              - /url: /changelog
              - generic [aria-hidden] [ref=e689]: Changelog
            - link "Privacy Policy" [ref=e690] [cursor=pointer]:
              - /url: /privacy
              - generic [aria-hidden] [ref=e692]: Privacy Policy
            - link "Instructions" [ref=e693] [cursor=pointer]:
              - /url: /instructions
              - generic [aria-hidden] [ref=e695]: Instructions
            - link "404" [ref=e696] [cursor=pointer]:
              - /url: /404
              - generic [aria-hidden] [ref=e698]: "404"
            - link "Password" [ref=e699] [cursor=pointer]:
              - /url: /401
              - generic [aria-hidden] [ref=e701]: Password
      - generic [ref=e702]:
        - generic [ref=e703]:
          - link "(239) 555-0108" [ref=e704] [cursor=pointer]:
            - /url: tel:(239)555-0108
          - link "hello@hyperframe.com" [ref=e705] [cursor=pointer]:
            - /url: mailto:hello@hyperframe.com?subject=Contact%20With%20Us
        - generic [ref=e706]:
          - link "Facebook" [ref=e707] [cursor=pointer]:
            - /url: https://www.facebook.com/
            - img "Facebook" [ref=e708]
          - link "Instagram" [ref=e709] [cursor=pointer]:
            - /url: https://www.instagram.com/
            - img "Instagram" [ref=e710]
          - link "X" [ref=e711] [cursor=pointer]:
            - /url: https://www.x.com/
            - img "X" [ref=e712]
          - link "LinkedIn" [ref=e713] [cursor=pointer]:
            - /url: https://www.linkedin.com/
            - img "LinkedIn" [ref=e714]
      - generic [ref=e715]:
        - generic [ref=e716]: Copyright (c) HyperFrame 2026
        - generic [ref=e717]: Independent React & GSAP Reconstruction
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