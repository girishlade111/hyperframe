import { useParams } from 'react-router-dom';
import { SiteLayout } from '../components/layout/SiteLayout';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { SectionLabel } from '../components/common/SectionLabel';
import { ProjectCarousel } from '../components/projects/ProjectCarousel';
import { FAQSection } from '../components/faq/FAQSection';
import { usePageMeta } from '../components/common/usePageMeta';
import { services } from '../data/services';
import { NotFoundPage } from './NotFoundPage';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  usePageMeta(
    service ? service.seo.title : 'Service Not Found - HyperFrame',
    service ? service.seo.description : 'Service details page.'
  );

  if (!service) return <NotFoundPage />;

  return (
    <SiteLayout headerTheme="dark">
      <section className="section service-single">
        <img
          src={service.bannerImage}
          alt=""
          className="service-bg-image"
          aria-hidden="true"
        />
        <div className="service-image-overly" aria-hidden="true" />
        <div className="service-relative-wrap">
          <div className="container">
            <div className="service-single-wrap">
              <PrimaryButton to="/service" label="Back to Services" variant="back-light" />
              <div className="service-single-title-wrap">
                <h1 className="global-heading">{service.title}</h1>
              </div>
              <div className="service-single-details-wrap">
                <p className="inner-details">{service.heroDescription}</p>
              </div>
              <div className="service-single-button-wrap">
                <PrimaryButton to="/contact" label="Book a Free Consultation" tiltedArrow />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section offer">
        <div className="container">
          <div className="offer-top-wrap">
            <SectionLabel variant="brace" label="What We Offer" />
            <div className="offer-title-wrap">
              <h2 className="section-title is-h3-medium">What's Included in This Service</h2>
            </div>
            <p className="inner-details is-license">
              The principles that guide our thinking, design, and delivery to ensure lasting impact.
            </p>
          </div>

          <div className="offer-wrap">
            <div className="offer-grid-wrap">
              {service.deliverables.map((item) => (
                <article key={item.index} className="offer-card">
                  <div className="offer-card-top-wrap">
                    <div className="story-number-wrap">
                      <span className="story-number orange-color">(</span>
                      <span className="story-number">{item.index}</span>
                      <span className="story-number orange-color">)</span>
                    </div>
                    <div className="offer-card-dot" />
                  </div>
                  <div className="offer-card-btm-wrap">
                    <div className="offer-card-dot-wrap">
                      <div className="offer-card-dot" />
                      <div className="offer-card-dot" />
                    </div>
                    <div className="offer-card-info-wrap">
                      <h3 className="offer-card-title">{item.title}</h3>
                      <p className="global-details is-small-body">{item.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section process-b">
        <div className="container">
          <div className="process-b-top-wrap">
            <SectionLabel variant="brace" label="Work Process" />
            <div className="process-b-title-wrap">
              <h2 className="section-title is-h3-medium">A HyperFrame Project's Work Process</h2>
            </div>
            <div className="process-b-details-wrap">
              <p className="global-details is-large-body">
                Our cross-functional teams work together to achieve outstanding portfolios across all the digital channels.
              </p>
            </div>
          </div>

          <div className="process-b-wrap">
            <div className="process-b-grid-wrap">
              {service.processCards.map((card) => (
                <article key={card.index} className="process-b-card">
                  <div className="process-b-card-top-wrap">
                    <div className="story-number-wrap">
                      <span className="story-number orange-color">(</span>
                      <span className="story-number">{card.index}</span>
                      <span className="story-number orange-color">)</span>
                    </div>
                    <img width={48} height={48} alt="" src={card.icon} loading="lazy" />
                  </div>
                  <div className="process-b-card-btm-wrap">
                    <h3 className="process-b-card-title">{card.title}</h3>
                    <p className="process-b-card-details">{card.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProjectCarousel />
      <FAQSection />
    </SiteLayout>
  );
}
