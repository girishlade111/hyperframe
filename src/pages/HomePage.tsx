import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap, prefersReducedMotion } from '../animations/gsapSetup';
import { SiteLayout } from '../components/layout/SiteLayout';
import { ClientLogoStrip } from '../components/common/ClientLogoStrip';
import { SectionLabel } from '../components/common/SectionLabel';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ServiceShowcase } from '../components/services/ServiceShowcase';
import { TestimonialSlider } from '../components/testimonials/TestimonialSlider';
import { TrustSection } from '../components/trust/TrustSection';
import { PricingSection } from '../components/pricing/PricingSection';
import { WorkProcess } from '../components/process/WorkProcess';
import { TeamSection } from '../components/team/TeamSection';
import { ClientStorySection } from '../components/testimonials/ClientStorySection';
import { usePageMeta } from '../components/common/usePageMeta';
import { projects } from '../data/projects';
import { articles } from '../data/articles';

const HERO_PILLS = [
  { label: 'Branding', icon: '/assets/icons/Hero-Icon-01.svg' },
  { label: 'Website Design', icon: '/assets/icons/Service-Icon-02.svg' },
  { label: 'Web Application', icon: '/assets/icons/Hero-Icon-03.svg' },
  { label: 'Mobile App', icon: '/assets/icons/Hero-Icon-04.svg' },
  { label: 'Illustration', icon: '/assets/icons/Service-Icon-03.svg' },
  { label: 'Icon Design', icon: '/assets/icons/Service-Icon-04.svg' },
];

export function HomePage() {
  usePageMeta(
    'HyperFrame - Creative Digital Agency',
    'HyperFrame is a digital agency for creative teams offering branding, website design, apps, and digital solutions for growing brands online.'
  );

  const pageRef = useRef<HTMLDivElement>(null);
  const featuredProjects = projects.slice(0, 3);
  const latestArticles = articles.slice(1, 3);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim', {
        y: 36,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power3.out',
      });

      document.querySelectorAll<HTMLElement>('.js-counter').forEach((el) => {
        const raw = el.dataset.target || '0';
        const isFloat = raw.includes('.');
        const suffix = raw.replace(/[0-9.]/g, '');
        const num = parseFloat(raw);
        const state = { val: 0 };

        gsap.to(state, {
          val: num,
          duration: 1.8,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
          onUpdate: () => {
            el.textContent = isFloat
              ? `${state.val.toFixed(1)}${suffix}`
              : `${Math.round(state.val)}${suffix}`;
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <SiteLayout headerTheme="dark" marqueeIndex="11">
      <div ref={pageRef}>
        {/* 01. Full-screen Cinematic Hero */}
        <section className="section hero">
          <div className="hero-relative-wrap">
            <div className="container">
              <div className="hero-details-wrap hero-anim">
                <h1 className="hero-details">
                  We develop websites, apps, and campaigns that truly make a difference for expanding brands.
                </h1>
              </div>

              <div className="hero-title-wrap hero-anim">
                <div className="hero-title-text-wrap">
                  <div className="hero-title">Design That</div>
                  <div className="hero-title two">Drives Results</div>
                </div>
                <div className="hero-year">©20-25</div>
              </div>

              <div className="hero-right-wrap hero-anim">
                <div className="agency-title-wrap">
                  <div className="agency-title">As a digital agency, we specialize in</div>
                  <img
                    src="/assets/icons/Agency-Arrow.svg"
                    width={24}
                    height={24}
                    alt=""
                    aria-hidden="true"
                    className="agency-arrow"
                  />
                </div>
                <div className="hero-ctg-wrap">
                  {HERO_PILLS.map((pill) => (
                    <div key={pill.label} className="hero-ctg-card">
                      <span className="hero-ctg-icon-wrap">
                        <img width={20} height={20} alt="" src={pill.icon} />
                      </span>
                      <span className="hero-ctg-text">{pill.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <img
              src="/assets/images/hero/Hero-Image.avif"
              width={2400}
              height={1600}
              alt="Abstract sculptural background"
              className="hero-bg-image"
            />
          </div>
        </section>

        {/* 02. Client Logo Strip */}
        <ClientLogoStrip />

        {/* 03 & 04. Agency Intro + Three Key Statistics */}
        <section className="section about-b">
          <div className="container">
            <div className="about-b-top-wrap">
              <SectionLabel index="01" label="About HyperFrame" />
              <div className="about-b-top-right-wrap">
                <div className="about-b-title">
                  We offer a full range of services website design, development, and digital marketing to boost your brand’s success.
                </div>
                <p className="global-details">
                  Our cross-functional teams work together to achieve outstanding results across all digital channels.
                </p>
              </div>
            </div>

            <div className="about-b-wrap">
              <div className="about-b-grid-wrap">
                <div className="about-b-card">
                  <div className="about-b-number-wrap">
                    <div className="about-b-number js-counter" data-target="24">
                      24
                    </div>
                    <div className="about-b-number-icon">+</div>
                  </div>
                  <div className="about-b-line" />
                  <div className="about-b-info-wrap">
                    <div className="about-b-card-title">Websites launched</div>
                    <div className="about-b-card-details">Helping brands stand out online.</div>
                  </div>
                </div>

                <div className="about-b-card">
                  <div className="about-b-number-wrap">
                    <div className="about-b-number js-counter" data-target="3.7M">
                      3.7M
                    </div>
                    <div className="about-b-number-icon">+</div>
                  </div>
                  <div className="about-b-line" />
                  <div className="about-b-info-wrap">
                    <div className="about-b-card-title">Monthly visitors</div>
                    <div className="about-b-card-details">Reached by the sites we built.</div>
                  </div>
                </div>

                <div className="about-b-card">
                  <div className="about-b-number-wrap">
                    <div className="about-b-number js-counter" data-target="94">
                      94
                    </div>
                    <div className="about-b-number-icon">%</div>
                  </div>
                  <div className="about-b-line" />
                  <div className="about-b-info-wrap">
                    <div className="about-b-card-title">Client retention</div>
                    <div className="about-b-card-details">Clients who come back for more.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05. Recent Work Showcase (Sticky Scroll Stacking) */}
        <section className="section project-a">
          <div className="container">
            <div className="project-b-top-wrap">
              <SectionLabel index="02" label="Featured Projects" />
              <h2 className="section-title is-h2">Our Recent Work</h2>
              <div className="project-b-details-wrap">
                <p className="global-details is-large-body">
                  Our cross-functional teams work together to achieve outstanding portfolios across all the digital channels.
                </p>
              </div>
            </div>

            <div className="project-b-wrap">
              {featuredProjects.map((project, idx) => (
                <div
                  key={project.id}
                  className="project-cl-wrap is-sticky"
                  style={{ zIndex: idx + 1 }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>

            <div className="project-b-button-wrap">
              <PrimaryButton to="/project" label="View All Projects" variant="grey" />
            </div>
          </div>
        </section>

        {/* 06. Dark Interactive Services Showcase */}
        <ServiceShowcase numberedLabel="03" />

        {/* 07. Testimonial Slider */}
        <TestimonialSlider numberedLabel="04" />

        {/* 08. Why Brands Trust Us */}
        <TrustSection numberedLabel="05" />

        {/* 09. Pricing Plans */}
        <PricingSection numberedLabel="06" />

        {/* 10. Work Process */}
        <WorkProcess numberedLabel="07" />

        {/* 11. Team Section */}
        <TeamSection numberedLabel="08" />

        {/* 12. Client Stories */}
        <ClientStorySection numberedLabel="09" />

        {/* 13. Latest Blogs */}
        <section className="section blog-b">
          <div className="container">
            <div className="blog-b-top-wrap">
              <div className="blog-b-top-left-wrap">
                <SectionLabel index="10" label="Blogs & Articles" />
                <h2 className="section-title is-h2">Our Latest Blogs</h2>
              </div>
              <PrimaryButton to="/blog" label="View All Blogs" variant="grey" />
            </div>

            <div className="blog-b-wrap">
              <div className="blog-b-grid-wrap">
                {latestArticles.map((article, idx) => (
                  <article key={article.id} className="blog-card">
                    <Link
                      to={`/blog/${article.slug}`}
                      className={`blog-card-image-link ${idx === 1 ? 'is-compact' : ''}`}
                    >
                      <img
                        width={831}
                        height={720}
                        alt={article.title}
                        src={article.coverImage}
                        loading="lazy"
                        className="blog-card-image"
                      />
                      <div className="blog-image-overly">
                        <span className="primary-button">
                          <span className="primary-btn-text-wrap">
                            <span className="primary-btn-text one">Learn More</span>
                          </span>
                          <span className="primary-btn-icon-wrap is-tilted">
                            <img width={22} height={22} alt="" src="/assets/icons/Whtie-Arrow.svg" />
                          </span>
                        </span>
                      </div>
                    </Link>

                    <div>
                      <div className="blog-top-number-wrap">
                        <span className="blog-top-number">{article.index}</span>
                        <span className="blog-top-number">{article.publicationDate}</span>
                      </div>
                      <Link to={`/blog/${article.slug}`} className="blog-card-title">
                        {article.title}
                      </Link>
                      <p className="blog-top-details">{article.excerpt}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
