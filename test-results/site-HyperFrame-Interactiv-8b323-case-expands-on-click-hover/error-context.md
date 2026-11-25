# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.ts >> HyperFrame Interactive States & Forms >> services showcase expands on click/hover
- Location: tests\site.spec.ts:118:3

# Error details

```
Test timeout of 45000ms exceeded.
```

```
Error: locator.scrollIntoViewIfNeeded: Test timeout of 45000ms exceeded.
Call log:
  - waiting for locator('.service-single-item button').first()

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e7]:
      - generic [ref=e8]: "NEW YORK, USA { 01:56 AM }"
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
        - generic [ref=e24]:
          - heading "We develop websites, apps, and campaigns that truly make a difference for expanding brands." [level=1] [ref=e26]
          - generic [ref=e27]:
            - generic [ref=e28]:
              - generic [ref=e29]: Design That
              - generic [ref=e30]: Drives Results
            - generic [ref=e31]: ©20-25
          - generic [ref=e32]:
            - generic [ref=e33]: As a digital agency, we specialize in
            - generic [ref=e36]:
              - generic [ref=e37]: Branding
              - generic [ref=e40]: Website Design
              - generic [ref=e43]: Web Application
              - generic [ref=e46]: Mobile App
              - generic [ref=e49]: Illustration
              - generic [ref=e52]: Icon Design
        - img "Abstract sculptural background"
      - generic "Featured client brands" [ref=e55]:
        - generic [ref=e57]:
          - img "Tessra / Rotashow" [ref=e59]
          - img "Norvane" [ref=e61]
          - img "Lumeq" [ref=e63]
          - img "Orbisto" [ref=e65]
          - img "Quillo" [ref=e67]
      - generic [ref=e81]:
        - generic [ref=e82]:
          - generic [ref=e83]:
            - generic [ref=e84]:
              - generic [ref=e85]: (
              - generic [ref=e86]: "01"
              - generic [ref=e87]: )
            - generic [ref=e88]: About HyperFrame
          - generic [ref=e89]:
            - generic [ref=e90]: We offer a full range of services website design, development, and digital marketing to boost your brand’s success.
            - paragraph [ref=e91]: Our cross-functional teams work together to achieve outstanding results across all digital channels.
        - generic [ref=e93]:
          - generic [ref=e94]:
            - generic [ref=e95]:
              - generic [ref=e96]: "24"
              - generic [ref=e97]: +
            - generic [ref=e99]:
              - generic [ref=e100]: Websites launched
              - generic [ref=e101]: Helping brands stand out online.
          - generic [ref=e102]:
            - generic [ref=e103]:
              - generic [ref=e104]: 3.7M
              - generic [ref=e105]: +
            - generic [ref=e107]:
              - generic [ref=e108]: Monthly visitors
              - generic [ref=e109]: Reached by the sites we built.
          - generic [ref=e110]:
            - generic [ref=e111]:
              - generic [ref=e112]: "94"
              - generic [ref=e113]: "%"
            - generic [ref=e115]:
              - generic [ref=e116]: Client retention
              - generic [ref=e117]: Clients who come back for more.
      - generic [ref=e119]:
        - generic [ref=e120]:
          - generic [ref=e121]:
            - generic [ref=e122]:
              - generic [ref=e123]: (
              - generic [ref=e124]: "02"
              - generic [ref=e125]: )
            - generic [ref=e126]: Featured Projects
          - heading "Our Recent Work" [level=2] [ref=e127]
          - paragraph [ref=e129]: Our cross-functional teams work together to achieve outstanding portfolios across all the digital channels.
        - generic [ref=e130]:
          - article [ref=e132]:
            - link "(001) ProFast We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects. ProFast project preview Year /2025 Role /Website Designer Services Branding Web Design Illustration Icon Design" [ref=e133] [cursor=pointer]:
              - /url: /project/profast
              - generic [ref=e136]:
                - generic [ref=e137]:
                  - generic [ref=e138]:
                    - generic [ref=e139]: (001)
                    - heading "ProFast" [level=3] [ref=e140]
                  - paragraph [ref=e141]: We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects.
                - img "ProFast project preview" [ref=e143]
                - generic [ref=e144]:
                  - generic [ref=e145]:
                    - generic [ref=e146]:
                      - generic [ref=e147]: Year
                      - generic [ref=e148]: /2025
                    - generic [ref=e149]:
                      - generic [ref=e150]: Role
                      - generic [ref=e151]: /Website Designer
                  - generic [ref=e152]:
                    - generic [ref=e153]: Services
                    - generic [ref=e154]:
                      - generic [ref=e155]: Branding
                      - generic [ref=e158]: Web Design
                      - generic [ref=e161]: Illustration
                      - generic [ref=e164]: Icon Design
          - article [ref=e168]:
            - link "(002) SecureX We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects. SecureX project preview Year /2025 Role /Website Designer Services Branding Web Design Illustration Icon Design" [ref=e169] [cursor=pointer]:
              - /url: /project/securex
              - generic [ref=e172]:
                - generic [ref=e173]:
                  - generic [ref=e174]:
                    - generic [ref=e175]: (002)
                    - heading "SecureX" [level=3] [ref=e176]
                  - paragraph [ref=e177]: We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects.
                - img "SecureX project preview" [ref=e179]
                - generic [ref=e180]:
                  - generic [ref=e181]:
                    - generic [ref=e182]:
                      - generic [ref=e183]: Year
                      - generic [ref=e184]: /2025
                    - generic [ref=e185]:
                      - generic [ref=e186]: Role
                      - generic [ref=e187]: /Website Designer
                  - generic [ref=e188]:
                    - generic [ref=e189]: Services
                    - generic [ref=e190]:
                      - generic [ref=e191]: Branding
                      - generic [ref=e194]: Web Design
                      - generic [ref=e197]: Illustration
                      - generic [ref=e200]: Icon Design
          - article [ref=e204]:
            - link "(003) Spinex Pro We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects. Spinex Pro project preview Year /2025 Role /Website Designer Services Branding Web Design Illustration Icon Design" [ref=e205] [cursor=pointer]:
              - /url: /project/spinex-pro
              - generic [ref=e208]:
                - generic [ref=e209]:
                  - generic [ref=e210]:
                    - generic [ref=e211]: (003)
                    - heading "Spinex Pro" [level=3] [ref=e212]
                  - paragraph [ref=e213]: We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects.
                - img "Spinex Pro project preview" [ref=e215]
                - generic [ref=e216]:
                  - generic [ref=e217]:
                    - generic [ref=e218]:
                      - generic [ref=e219]: Year
                      - generic [ref=e220]: /2025
                    - generic [ref=e221]:
                      - generic [ref=e222]: Role
                      - generic [ref=e223]: /Website Designer
                  - generic [ref=e224]:
                    - generic [ref=e225]: Services
                    - generic [ref=e226]:
                      - generic [ref=e227]: Branding
                      - generic [ref=e230]: Web Design
                      - generic [ref=e233]: Illustration
                      - generic [ref=e236]: Icon Design
        - link "View All Projects" [ref=e240] [cursor=pointer]:
          - /url: /project
          - generic [ref=e241]:
            - generic [ref=e242]: View All Projects
            - generic [aria-hidden] [ref=e243]: View All Projects
      - generic [ref=e248]:
        - generic [ref=e249]:
          - generic [ref=e250]:
            - generic [ref=e251]:
              - generic [ref=e252]: (
              - generic [ref=e253]: "03"
              - generic [ref=e254]: )
            - generic [ref=e255]: Our Services
          - heading "Services We Provide" [level=2] [ref=e256]
        - generic [ref=e258]:
          - generic [ref=e259] [cursor=pointer]:
            - button "Branding (001)" [ref=e260]:
              - generic [ref=e261]: Branding
              - generic [ref=e262]: (001)
            - generic [ref=e263]:
              - generic [ref=e264]:
                - img "Branding preview 1" [ref=e266]
                - img "Branding preview 2" [ref=e268]
              - generic [ref=e269]:
                - paragraph [ref=e270]: We develop websites, apps, and campaigns that truly make a difference for expanding brands.
                - link "View Details" [ref=e271]:
                  - /url: /service/branding
                  - generic [ref=e272]:
                    - generic [ref=e273]: View Details
                    - generic [aria-hidden] [ref=e274]: View Details
          - generic [ref=e277] [cursor=pointer]:
            - button "UI & UX Design (002)" [ref=e278]:
              - generic [ref=e279]: UI & UX Design
              - generic [ref=e280]: (002)
            - generic [ref=e281]:
              - generic [ref=e282]:
                - img "UI & UX Design preview 1" [ref=e284]
                - img "UI & UX Design preview 2" [ref=e286]
              - generic [ref=e287]:
                - paragraph [ref=e288]: We build digital experiences, websites, and campaigns that move growing brands forward.
                - link "View Details" [ref=e289]:
                  - /url: /service/ui-ux-design
                  - generic [ref=e290]:
                    - generic [ref=e291]: View Details
                    - generic [aria-hidden] [ref=e292]: View Details
          - generic [ref=e295] [cursor=pointer]:
            - button "Illustration Design (003)" [ref=e296]:
              - generic [ref=e297]: Illustration Design
              - generic [ref=e298]: (003)
            - generic [ref=e299]:
              - generic [ref=e300]:
                - img "Illustration Design preview 1" [ref=e302]
                - img "Illustration Design preview 2" [ref=e304]
              - generic [ref=e305]:
                - paragraph [ref=e306]: We design websites, apps, and campaigns that turn bold ideas into meaningful brand experiences.
                - link "View Details" [ref=e307]:
                  - /url: /service/illustration-design
                  - generic [ref=e308]:
                    - generic [ref=e309]: View Details
                    - generic [aria-hidden] [ref=e310]: View Details
          - generic [ref=e313] [cursor=pointer]:
            - button "No Code Development (004)" [ref=e314]:
              - generic [ref=e315]: No Code Development
              - generic [ref=e316]: (004)
            - generic [ref=e317]:
              - generic [ref=e318]:
                - img "No Code Development preview 1" [ref=e320]
                - img "No Code Development preview 2" [ref=e322]
              - generic [ref=e323]:
                - paragraph [ref=e324]: We craft digital products and campaigns that help ambitious brands stand out and scale.
                - link "View Details" [ref=e325]:
                  - /url: /service/no-code-development
                  - generic [ref=e326]:
                    - generic [ref=e327]: View Details
                    - generic [aria-hidden] [ref=e328]: View Details
          - generic [ref=e331] [cursor=pointer]:
            - button "Custom Development (005)" [ref=e332]:
              - generic [ref=e333]: Custom Development
              - generic [ref=e334]: (005)
            - generic [ref=e335]:
              - generic [ref=e336]:
                - img "Custom Development preview 1" [ref=e338]
                - img "Custom Development preview 2" [ref=e340]
              - generic [ref=e341]:
                - paragraph [ref=e342]: We create digital experiences that inspire audiences and drive growth for ambitious brands.
                - link "View Details" [ref=e343]:
                  - /url: /service/custom-development
                  - generic [ref=e344]:
                    - generic [ref=e345]: View Details
                    - generic [aria-hidden] [ref=e346]: View Details
      - generic [ref=e350]:
        - generic [ref=e351]:
          - generic [ref=e352]:
            - generic [ref=e353]:
              - generic [ref=e354]: (
              - generic [ref=e355]: "04"
              - generic [ref=e356]: )
            - generic [ref=e357]: Testimonials
          - heading "What Our Client Say" [level=2] [ref=e358]
          - paragraph [ref=e360]: Our cross-functional teams work together to achieve outstanding portfolios across all the digital channels.
        - generic [ref=e362]:
          - generic [ref=e363]:
            - article [ref=e364]:
              - generic [ref=e365]:
                - generic [ref=e366]:
                  - img "5 out of 5 stars" [ref=e368]
                  - generic [ref=e369]:
                    - generic [ref=e370]: "{"
                    - generic [ref=e371]: "001"
                    - generic [ref=e372]: "}"
                - generic [ref=e373]:
                  - paragraph [ref=e374]: “HyperFrame rebuilt our brand and website in twelve weeks. Pages now load in under two seconds and online orders are up 40%.”
                  - generic [ref=e375]:
                    - img "Ethan Walker" [ref=e377]
                    - generic [ref=e378]:
                      - generic [ref=e379]: Ethan Walker
                      - generic [ref=e380]: Founder & CEO at ProFast
            - article [ref=e381]:
              - generic [ref=e382]:
                - generic [ref=e383]:
                  - img "5 out of 5 stars" [ref=e385]
                  - generic [ref=e386]:
                    - generic [ref=e387]: "{"
                    - generic [ref=e388]: "002"
                    - generic [ref=e389]: "}"
                - generic [ref=e390]:
                  - paragraph [ref=e391]: “They turned our complex security product into a story customers understand. Demo requests doubled in the first month after launch.”
                  - generic [ref=e392]:
                    - img "Noah Carter" [ref=e394]
                    - generic [ref=e395]:
                      - generic [ref=e396]: Noah Carter
                      - generic [ref=e397]: Head of Growth at SecureX
            - article [ref=e398]:
              - generic [ref=e399]:
                - generic [ref=e400]:
                  - img "5 out of 5 stars" [ref=e402]
                  - generic [ref=e403]:
                    - generic [ref=e404]: "{"
                    - generic [ref=e405]: "003"
                    - generic [ref=e406]: "}"
                - generic [ref=e407]:
                  - paragraph [ref=e408]: “The team asked the right questions from day one. We finally have one clear message, and every page of the site supports it.”
                  - generic [ref=e409]:
                    - img "James Whitfield" [ref=e411]
                    - generic [ref=e412]:
                      - generic [ref=e413]: James Whitfield
                      - generic [ref=e414]: Product Lead at Spinex Pro
            - article [ref=e415]:
              - generic [ref=e416]:
                - generic [ref=e417]:
                  - img "5 out of 5 stars" [ref=e419]
                  - generic [ref=e420]:
                    - generic [ref=e421]: "{"
                    - generic [ref=e422]: "004"
                    - generic [ref=e423]: "}"
                - generic [ref=e424]:
                  - paragraph [ref=e425]: “Our old site felt flat. The new one shows what our VR product feels like, and visitors now stay twice as long as before.”
                  - generic [ref=e426]:
                    - img "Marcus Bennett" [ref=e428]
                    - generic [ref=e429]:
                      - generic [ref=e430]: Marcus Bennett
                      - generic [ref=e431]: Founder at Virtualex
            - article [ref=e432]:
              - generic [ref=e433]:
                - generic [ref=e434]:
                  - img "5 out of 5 stars" [ref=e436]
                  - generic [ref=e437]:
                    - generic [ref=e438]: "{"
                    - generic [ref=e439]: "005"
                    - generic [ref=e440]: "}"
                - generic [ref=e441]:
                  - paragraph [ref=e442]: “Mobile sales were our weak spot. After the redesign, more than half of our orders come from phones, and repeat orders keep growing.”
                  - generic [ref=e443]:
                    - img "Daniel Reyes" [ref=e445]
                    - generic [ref=e446]:
                      - generic [ref=e447]: Daniel Reyes
                      - generic [ref=e448]: Co-Founder at Fashionable
          - button "Previous testimonial" [ref=e449] [cursor=pointer]
          - button "Next testimonial" [ref=e450] [cursor=pointer]
          - generic [ref=e451]:
            - generic [ref=e452]:
              - img "HyperFrame" [ref=e454]
              - generic [ref=e455]:
                - generic [ref=e456]:
                  - img "Client portrait 1" [ref=e458]
                  - img "Client portrait 2" [ref=e460]
                  - img "Client portrait 3" [ref=e462]
                  - img "Client portrait 4" [ref=e464]
                  - img "Client portrait 5" [ref=e466]
                - generic [ref=e467]:
                  - img "5 stars" [ref=e469]
                  - generic [ref=e470]: Trusted by clients worldwide
            - link "Leave a Review" [ref=e471] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e472]:
                - generic [ref=e473]: Leave a Review
                - generic [aria-hidden] [ref=e474]: Leave a Review
      - generic [ref=e478]:
        - generic [ref=e479]:
          - generic [ref=e480]:
            - generic [ref=e481]:
              - generic [ref=e482]: (
              - generic [ref=e483]: "05"
              - generic [ref=e484]: )
            - generic [ref=e485]: Why Choose Us
          - heading "Why Brands Trust Us" [level=2] [ref=e486]
          - paragraph [ref=e488]: "Great design is about more than just visuals: it is about crafting meaningful experiences that lead to tangible results."
        - generic [ref=e490]:
          - generic [ref=e491]:
            - generic [ref=e492]:
              - img "HyperFrame" [ref=e494]
              - generic [ref=e495]:
                - generic [ref=e496]: "{"
                - generic [ref=e497]: "001"
                - generic [ref=e498]: "}"
            - generic [ref=e499]:
              - generic [ref=e500]: "We Improve Conversion Rate:"
              - generic [ref=e501]: Website Loading Speed +48%
              - generic [ref=e502]: Users Bounce Rate -23%
          - generic [ref=e503]:
            - generic [ref=e504]:
              - generic [ref=e505]:
                - generic [ref=e506]: "{"
                - generic [ref=e507]: "002"
                - generic [ref=e508]: "}"
              - generic [ref=e509]: Yearly Increase Users Conversion Rates
              - paragraph [ref=e510]: Our designs engage millions worldwide.
              - generic [ref=e511]:
                - generic [ref=e512]: /60
                - generic [ref=e513]: X
            - img "Conversion rate growth chart" [ref=e515]
      - generic [ref=e517]:
        - generic [ref=e518]:
          - generic [ref=e519]:
            - generic [ref=e520]:
              - generic [ref=e521]: (
              - generic [ref=e522]: "06"
              - generic [ref=e523]: )
            - generic [ref=e524]: Pricing Plans
          - heading "Explore Our Pricing" [level=2] [ref=e525]
          - paragraph [ref=e527]: "Great design is about more than just visuals: it is about crafting meaningful experiences that lead to tangible results."
        - generic [ref=e529]:
          - generic [ref=e531]:
            - generic [ref=e532]:
              - generic [ref=e533]:
                - heading "Essential" [level=3] [ref=e535]
                - paragraph [ref=e537]: Great for small teams or startups that need quick, clean designs for websites or branding materials.
              - generic [ref=e538]:
                - generic [ref=e539]:
                  - 'switch "Essential: Add Development ($3,699)" [ref=e540] [cursor=pointer]'
                  - generic [ref=e542]: Add Development ($3,699)
                - generic [ref=e543]:
                  - generic [ref=e544]: "Delivery Time:"
                  - generic [ref=e545]: 4-6 weeks
            - generic [ref=e546]:
              - generic [ref=e547]:
                - generic [ref=e549]:
                  - generic [ref=e550]: $1,999
                  - generic [ref=e551]: $5,499
                - generic [ref=e552]: /month
              - generic [ref=e554]:
                - generic [ref=e555]: "What’s included:"
                - generic [ref=e556]:
                  - generic [ref=e557]: Single Landing Page Design
                  - generic [ref=e560]: Custom UI/UX Design
                  - generic [ref=e563]: Responsive (Mobile & Tablet)
                  - generic [ref=e566]: 2 Rounds of Revisions
              - link "Start Your Project" [ref=e570] [cursor=pointer]:
                - /url: /contact
                - generic [ref=e571]:
                  - generic [ref=e572]: Start Your Project
                  - generic [aria-hidden] [ref=e573]: Start Your Project
          - generic [ref=e577]:
            - generic [ref=e578]:
              - generic [ref=e579]:
                - heading "Enterprise" [level=3] [ref=e581]
                - paragraph [ref=e583]: A complete customized design solutions with strategy, visuals, and collaboration.
              - generic [ref=e584]:
                - generic [ref=e585]:
                  - 'switch "Enterprise: Add Development ($7,599)" [ref=e586] [cursor=pointer]'
                  - generic [ref=e588]: Add Development ($7,599)
                - generic [ref=e589]:
                  - generic [ref=e590]: "Delivery Time:"
                  - generic [ref=e591]: 6-8 weeks
            - generic [ref=e592]:
              - generic [ref=e593]:
                - generic [ref=e595]:
                  - generic [ref=e596]: $4,999
                  - generic [ref=e597]: $7,599
                - generic [ref=e598]: /month
              - generic [ref=e600]:
                - generic [ref=e601]: "What’s included:"
                - generic [ref=e602]:
                  - generic [ref=e603]: Up to 10 Page Website
                  - generic [ref=e606]: Brand Strategy & Identity
                  - generic [ref=e609]: CMS Setup & Training
                  - generic [ref=e612]: Priority Support
              - link "Start Your Project" [ref=e616] [cursor=pointer]:
                - /url: /contact
                - generic [ref=e617]:
                  - generic [ref=e618]: Start Your Project
                  - generic [aria-hidden] [ref=e619]: Start Your Project
      - generic [ref=e623]:
        - generic [ref=e624]:
          - generic [ref=e625]:
            - generic [ref=e626]:
              - generic [ref=e627]: (
              - generic [ref=e628]: "07"
              - generic [ref=e629]: )
            - generic [ref=e630]: Our Process
          - heading "From Idea To Launch" [level=2] [ref=e631]
          - paragraph [ref=e633]: Here’s how we take your idea from concept to launch, making sure every step is smooth, transparent, and focused on results.
        - generic [ref=e635]:
          - generic [ref=e637]:
            - img "Discovery & Strategy" [ref=e639]
            - img "Wireframing & UX" [ref=e641]
            - img "User Interface Design" [ref=e643]
            - img "Development & Testing" [ref=e645]
            - img "Launch and Support" [ref=e647]
          - generic [ref=e652]:
            - generic [ref=e655]:
              - generic [ref=e656]:
                - generic [ref=e657]: "{"
                - generic [ref=e658]: "001"
                - generic [ref=e659]: "}"
              - heading "Discovery & Strategy" [level=3] [ref=e660]
              - paragraph [ref=e661]: We start by understanding your business, goals, and audience. Through discovery sessions, we align on objectives, competitors, and the message your website needs to deliver.
            - generic [ref=e664]:
              - generic [ref=e665]:
                - generic [ref=e666]: "{"
                - generic [ref=e667]: "002"
                - generic [ref=e668]: "}"
              - heading "Wireframing & UX" [level=3] [ref=e669]
              - paragraph [ref=e670]: Before visuals, we map out the structure. Wireframes help define content hierarchy, user flows, and page layouts, ensuring the site is intuitive and conversion-focused.
            - generic [ref=e673]:
              - generic [ref=e674]:
                - generic [ref=e675]: "{"
                - generic [ref=e676]: "003"
                - generic [ref=e677]: "}"
              - heading "User Interface Design" [level=3] [ref=e678]
              - paragraph [ref=e679]: This is where ideas come to life. We design modern, pixel-perfect interfaces with the right balance of creativity and usability, using your brand style to make the site stand out.
            - generic [ref=e682]:
              - generic [ref=e683]:
                - generic [ref=e684]: "{"
                - generic [ref=e685]: "004"
                - generic [ref=e686]: "}"
              - heading "Development & Testing" [level=3] [ref=e687]
              - paragraph [ref=e688]: We build the site with clean code, then test it on every screen size and browser. Speed, SEO and accessibility are checked and fine-tuned before anything goes live.
            - generic [ref=e691]:
              - generic [ref=e692]:
                - generic [ref=e693]: "{"
                - generic [ref=e694]: "005"
                - generic [ref=e695]: "}"
              - heading "Launch and Support" [level=3] [ref=e696]
              - paragraph [ref=e697]: We launch your new site and provide ongoing support (if needed) for updates, improvements, or scaling. Your website stays fast, secure, and reliable.
      - generic [ref=e699]:
        - generic [ref=e700]:
          - generic [ref=e701]:
            - generic [ref=e702]:
              - generic [ref=e703]: (
              - generic [ref=e704]: "08"
              - generic [ref=e705]: )
            - generic [ref=e706]: Team Members
          - heading "Meet Our Team" [level=2] [ref=e708]
          - paragraph [ref=e710]: "Great design is about more than just visuals: it is about crafting meaningful experiences that lead to tangible results."
        - generic [ref=e712]:
          - article [ref=e713]:
            - img "Robert Browny" [ref=e714]
            - generic [ref=e716]:
              - generic [ref=e717]:
                - generic [ref=e718]: (
                - generic [ref=e719]: "001"
                - generic [ref=e720]: )
              - heading "Robert Browny" [level=3] [ref=e721]
              - generic [ref=e722]: Founder & CEO at HyperFrame
            - link "Robert Browny on LinkedIn" [ref=e724] [cursor=pointer]:
              - /url: https://www.linkedin.com/
          - article [ref=e725]:
            - img "Jacob Jones" [ref=e726]
            - generic [ref=e728]:
              - generic [ref=e729]:
                - generic [ref=e730]: (
                - generic [ref=e731]: "002"
                - generic [ref=e732]: )
              - heading "Jacob Jones" [level=3] [ref=e733]
              - generic [ref=e734]: Web Developer at HyperFrame
            - link "Jacob Jones on LinkedIn" [ref=e736] [cursor=pointer]:
              - /url: https://www.linkedin.com/
          - article [ref=e737]:
            - img "Ronald Richards" [ref=e738]
            - generic [ref=e740]:
              - generic [ref=e741]:
                - generic [ref=e742]: (
                - generic [ref=e743]: "003"
                - generic [ref=e744]: )
              - heading "Ronald Richards" [level=3] [ref=e745]
              - generic [ref=e746]: Senior Sales VP at HyperFrame
            - link "Ronald Richards on LinkedIn" [ref=e748] [cursor=pointer]:
              - /url: https://www.linkedin.com/
      - generic [ref=e750]:
        - generic [ref=e751]:
          - generic [ref=e752]:
            - generic [ref=e753]:
              - generic [ref=e754]: (
              - generic [ref=e755]: "09"
              - generic [ref=e756]: )
            - generic [ref=e757]: Success Stories
          - heading "Stories That Speak For Themselves" [level=2] [ref=e759]
          - paragraph [ref=e761]: "Great design is about more than just visuals: it is about crafting meaningful experiences that lead to tangible results."
        - generic [ref=e762]:
          - generic [ref=e763]:
            - img "HyperFrame" [ref=e765]
            - generic [ref=e766]:
              - generic [ref=e767]:
                - img "Client portrait 1" [ref=e769]
                - img "Client portrait 2" [ref=e771]
                - img "Client portrait 3" [ref=e773]
                - img "Client portrait 4" [ref=e775]
                - img "Client portrait 5" [ref=e777]
              - generic [ref=e778]:
                - img "5 stars" [ref=e780]
                - generic [ref=e781]: Trusted by clients worldwide
          - paragraph [ref=e783]: We develop websites, apps, and campaigns that truly make a difference for expanding brands.
        - generic [ref=e785]:
          - article [ref=e786]:
            - generic [ref=e787]:
              - generic [ref=e788]:
                - generic [ref=e789]: (
                - generic [ref=e790]: "001"
                - generic [ref=e791]: )
              - img "5 stars" [ref=e793]
              - paragraph [ref=e794]: “Our team designed a sleek SaaS website with clear messaging, targeted CTAs, and trust-building visuals. Built from a Figma design for quick, scalable deployment.”
              - generic [ref=e795]:
                - img "Robert Browny" [ref=e797]
                - generic [ref=e798]:
                  - generic [ref=e799]: Robert Browny
                  - generic [ref=e800]: Founder & CEO at Story Pixel
            - generic [ref=e801]:
              - generic [ref=e802]:
                - generic [ref=e803]:
                  - generic [ref=e804]: /60
                  - generic [ref=e805]: "%"
                - generic [ref=e806]: Customer Retention
                - generic [ref=e807]: Our designs engage millions worldwide.
              - generic [ref=e808]:
                - generic [ref=e809]:
                  - generic [ref=e810]: /225
                  - generic [ref=e811]: "%"
                - generic [ref=e812]: Conversion Rate Increase
                - generic [ref=e813]: Our designs engage millions worldwide.
          - article [ref=e814]:
            - img "Client story featured portrait" [ref=e815]
            - generic [ref=e816]:
              - generic [ref=e817]:
                - generic [ref=e818]: (
                - generic [ref=e819]: "002"
                - generic [ref=e820]: )
              - generic [ref=e821]:
                - img "5 stars" [ref=e823]
                - paragraph [ref=e824]: “Our team designed a sleek SaaS website with clear messaging, targeted CTAs, and trust-building visuals. Built from a Figma design for quick, scalable deployment.”
      - generic [ref=e826]:
        - generic [ref=e827]:
          - generic [ref=e828]:
            - generic [ref=e829]:
              - generic [ref=e830]:
                - generic [ref=e831]: (
                - generic [ref=e832]: "10"
                - generic [ref=e833]: )
              - generic [ref=e834]: Blogs & Articles
            - heading "Our Latest Blogs" [level=2] [ref=e835]
          - link "View All Blogs" [ref=e836] [cursor=pointer]:
            - /url: /blog
            - generic [ref=e837]:
              - generic [ref=e838]: View All Blogs
              - generic [aria-hidden] [ref=e839]: View All Blogs
        - generic [ref=e843]:
          - article [ref=e844]:
            - link "5 Website Design Trends to Watch Learn More" [ref=e845] [cursor=pointer]:
              - /url: /blog/5-website-design-trends-to-watch
              - img "5 Website Design Trends to Watch" [ref=e846]
              - generic [ref=e847]: Learn More
            - generic [ref=e852]:
              - generic [ref=e853]:
                - generic [ref=e854]: (002)
                - generic [ref=e855]: September 22, 2026
              - link "5 Website Design Trends to Watch" [ref=e856] [cursor=pointer]:
                - /url: /blog/5-website-design-trends-to-watch
              - paragraph [ref=e857]: Discover the newest digital design trends shaping this year's landscape and see how they can help your brand stand out all over the world by great ui ux design.
          - article [ref=e858]:
            - link "How to Create a Design Systems Learn More" [ref=e859] [cursor=pointer]:
              - /url: /blog/how-to-create-a-design-systems
              - img "How to Create a Design Systems" [ref=e860]
              - generic [ref=e861]: Learn More
            - generic [ref=e866]:
              - generic [ref=e867]:
                - generic [ref=e868]: (003)
                - generic [ref=e869]: September 22, 2026
              - link "How to Create a Design Systems" [ref=e870] [cursor=pointer]:
                - /url: /blog/how-to-create-a-design-systems
              - paragraph [ref=e871]: Learn why design isn’t just about looks it’s about creating seamless user journeys that drive business results.
  - generic [ref=e872]:
    - generic [ref=e874]:
      - generic [ref=e876]:
        - generic [ref=e877]:
          - generic [ref=e878]: (
          - generic [ref=e879]: "11"
          - generic [ref=e880]: )
        - generic [ref=e881]: Contact Us
      - heading "Have Any Project Idea?" [level=2] [ref=e883]
      - paragraph [ref=e885]: "Great design is about more than just visuals: it is about crafting meaningful experiences that lead to tangible results."
    - link "Contact HyperFrame" [ref=e887] [cursor=pointer]:
      - /url: /contact
      - generic [ref=e888]:
        - generic [ref=e889]: hyperframe@gmail.com ⌝
        - generic [ref=e890]: Get In Touch⌝
        - generic [ref=e891]: hyperframe@gmail.com ⌝
        - generic [ref=e892]: Get In Touch⌝
      - generic [aria-hidden] [ref=e893]:
        - generic [ref=e894]: hyperframe@gmail.com ⌝
        - generic [ref=e895]: Get In Touch⌝
        - generic [ref=e896]: hyperframe@gmail.com ⌝
        - generic [ref=e897]: Get In Touch⌝
      - generic [aria-hidden] [ref=e898]:
        - generic [ref=e899]: hyperframe@gmail.com ⌝
        - generic [ref=e900]: Get In Touch⌝
        - generic [ref=e901]: hyperframe@gmail.com ⌝
        - generic [ref=e902]: Get In Touch⌝
  - contentinfo [ref=e903]:
    - generic [ref=e904]:
      - generic [ref=e905]:
        - generic [ref=e906]:
          - link "HyperFrame Home" [ref=e907] [cursor=pointer]:
            - /url: /
            - img "HyperFrame" [ref=e908]
          - generic [ref=e909]:
            - generic [ref=e910]: Stay Connected With Us
            - generic [ref=e911]:
              - textbox "Enter your email" [ref=e912]:
                - /placeholder: Enter your email...
              - button "Subscribe to newsletter" [ref=e913] [cursor=pointer]
        - generic [ref=e914]:
          - generic [ref=e915]:
            - link "About Us" [ref=e916] [cursor=pointer]:
              - /url: /about
              - generic [aria-hidden] [ref=e918]: About Us
            - link "Services" [ref=e919] [cursor=pointer]:
              - /url: /service
              - generic [aria-hidden] [ref=e921]: Services
            - link "Services Details" [ref=e922] [cursor=pointer]:
              - /url: /service/branding
              - generic [aria-hidden] [ref=e924]: Services Details
            - link "Project" [ref=e925] [cursor=pointer]:
              - /url: /project
              - generic [aria-hidden] [ref=e927]: Project
            - link "Project Details" [ref=e928] [cursor=pointer]:
              - /url: /project/spinex-pro
              - generic [aria-hidden] [ref=e930]: Project Details
            - link "Contact Us" [ref=e931] [cursor=pointer]:
              - /url: /contact
              - generic [aria-hidden] [ref=e933]: Contact Us
          - generic [ref=e934]:
            - link "Style Guide" [ref=e935] [cursor=pointer]:
              - /url: /style-guide
              - generic [aria-hidden] [ref=e937]: Style Guide
            - link "Licenses" [ref=e938] [cursor=pointer]:
              - /url: /licenses
              - generic [aria-hidden] [ref=e940]: Licenses
            - link "Changelog" [ref=e941] [cursor=pointer]:
              - /url: /changelog
              - generic [aria-hidden] [ref=e943]: Changelog
            - link "Privacy Policy" [ref=e944] [cursor=pointer]:
              - /url: /privacy
              - generic [aria-hidden] [ref=e946]: Privacy Policy
            - link "Instructions" [ref=e947] [cursor=pointer]:
              - /url: /instructions
              - generic [aria-hidden] [ref=e949]: Instructions
            - link "404" [ref=e950] [cursor=pointer]:
              - /url: /404
              - generic [aria-hidden] [ref=e952]: "404"
            - link "Password" [ref=e953] [cursor=pointer]:
              - /url: /401
              - generic [aria-hidden] [ref=e955]: Password
      - generic [ref=e956]:
        - generic [ref=e957]:
          - link "(239) 555-0108" [ref=e958] [cursor=pointer]:
            - /url: tel:(239)555-0108
          - link "hello@hyperframe.com" [ref=e959] [cursor=pointer]:
            - /url: mailto:hello@hyperframe.com?subject=Contact%20With%20Us
        - generic [ref=e960]:
          - link "Facebook" [ref=e961] [cursor=pointer]:
            - /url: https://www.facebook.com/
            - img "Facebook" [ref=e962]
          - link "Instagram" [ref=e963] [cursor=pointer]:
            - /url: https://www.instagram.com/
            - img "Instagram" [ref=e964]
          - link "X" [ref=e965] [cursor=pointer]:
            - /url: https://www.x.com/
            - img "X" [ref=e966]
          - link "LinkedIn" [ref=e967] [cursor=pointer]:
            - /url: https://www.linkedin.com/
            - img "LinkedIn" [ref=e968]
      - generic [ref=e969]:
        - generic [ref=e970]: Copyright (c) HyperFrame 2026
        - generic [ref=e971]: Independent React & GSAP Reconstruction
```

# Test source

```ts
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
> 123 |     await firstServiceToggle.scrollIntoViewIfNeeded();
      |                              ^ Error: locator.scrollIntoViewIfNeeded: Test timeout of 45000ms exceeded.
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
  212 |         );
  213 |         expect(overflow, `Overflow at ${route} (${vp.width}x${vp.height})`).toBe(false);
  214 |       }
  215 |     }
  216 |   });
  217 | });
  218 | 
```