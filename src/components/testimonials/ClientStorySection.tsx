import { trustedAvatars } from '../../data/testimonials';
import { siteConfig } from '../../data/siteConfig';
import { SectionLabel } from '../common/SectionLabel';

interface ClientStorySectionProps {
  numberedLabel?: string;
}

export function ClientStorySection({ numberedLabel }: ClientStorySectionProps) {
  return (
    <section className={numberedLabel ? 'section stories-b' : 'section stories'}>
      <div className="container">
        <div className="stories-top">
          {numberedLabel ? (
            <SectionLabel index={numberedLabel} label="Success Stories" />
          ) : (
            <SectionLabel variant="brace" label="Success Stories" />
          )}
          <div className="stories-title-wrap">
            <h2 className="section-title is-h3-medium">Stories That Speak For Themselves</h2>
          </div>
          <div className="stories-details-wrap">
            <p className="global-details is-large-body">
              Great design is about more than just visuals: it is about crafting meaningful experiences that lead to tangible results.
            </p>
          </div>
        </div>

        <div className="stories-trusted-wrap">
          <div className="stories-left-wrap">
            <div className="review-brand-logo-wrap">
              <img
                width={190}
                height={32}
                alt="HyperFrame"
                src={siteConfig.logos.darkText}
                loading="lazy"
              />
            </div>
            <div className="review-wrap">
              <div className="review-author-wrap">
                {trustedAvatars.map((avatar, idx) => (
                  <div
                    key={avatar}
                    className={`review-author-img-wrap ${idx > 0 ? 'is-left' : ''}`}
                  >
                    <img
                      width={80}
                      height={80}
                      alt={`Client portrait ${idx + 1}`}
                      src={avatar}
                      loading="lazy"
                      className="review-author-image"
                    />
                  </div>
                ))}
              </div>
              <div className="client-wrap">
                <div className="review-rating-wrap">
                  <img width={80} height={16} alt="5 stars" src="/assets/icons/Stars.svg" loading="lazy" />
                </div>
                <div className="client-text">
                  <span className="black-color">Trusted by</span> clients worldwide
                </div>
              </div>
            </div>
          </div>

          <div className="stories-right-wrap">
            <p className="team-right-details">
              We develop websites, apps, and campaigns that truly make a difference for expanding brands.
            </p>
          </div>
        </div>

        <div className="stories-b-wrap">
          <div className="stories-grid-wrap">
            <article className="stories-left-card">
              <div className="stories-left-top-wrap">
                <div className="story-number-wrap">
                  <span className="story-number orange-color">(</span>
                  <span className="stories-card-number">001</span>
                  <span className="story-number orange-color">)</span>
                </div>
                <div className="story-star-wrap">
                  <img width={80} height={16} alt="5 stars" src="/assets/icons/Stars.svg" loading="lazy" />
                </div>
                <p className="story-review">
                  “Our team designed a sleek SaaS website with clear messaging, targeted CTAs, and trust-building visuals. Built from a Figma design for quick, scalable deployment.”
                </p>
                <div className="stories-author-wrapper">
                  <div className="stories-author-img-wrap">
                    <img
                      width={104}
                      height={104}
                      alt="Robert Browny"
                      src="/assets/images/testimonials/Story-Author-Image-01.avif"
                      loading="lazy"
                      className="stories-author-img"
                    />
                  </div>
                  <div className="stories-author-wrap">
                    <div className="stories-author-name">Robert Browny</div>
                    <div className="stories-author-pst">Founder &amp; CEO at Story Pixel</div>
                  </div>
                </div>
              </div>

              <div className="stories-left-btm-wrap">
                <div>
                  <div className="coustomer-number-wrap">
                    <span className="coustomer-number">/60</span>
                    <span className="coustomer-number orange-color">%</span>
                  </div>
                  <div className="coustomer-title">Customer Retention</div>
                  <div className="coustomer-details">Our designs engage millions worldwide.</div>
                </div>
                <div>
                  <div className="coustomer-number-wrap">
                    <span className="coustomer-number">/225</span>
                    <span className="coustomer-number orange-color">%</span>
                  </div>
                  <div className="coustomer-title">Conversion Rate Increase</div>
                  <div className="coustomer-details">Our designs engage millions worldwide.</div>
                </div>
              </div>
            </article>

            <article className="stories-right-card">
              <img
                width={972}
                height={1080}
                alt="Client story featured portrait"
                src="/assets/images/about/Story-Image-02-1.avif"
                loading="lazy"
                className="story-image-full"
              />
              <div className="stories-right-info-wrap">
                <div className="story-number-wrap">
                  <span className="story-number orange-color">(</span>
                  <span className="stories-card-number white">002</span>
                  <span className="story-number orange-color">)</span>
                </div>
                <div className="story-right-btm-wrap">
                  <div className="story-right-star-wrap">
                    <img width={80} height={16} alt="5 stars" src="/assets/icons/Stars.svg" loading="lazy" />
                  </div>
                  <p className="story-review white">
                    “Our team designed a sleek SaaS website with clear messaging, targeted CTAs, and trust-building visuals. Built from a Figma design for quick, scalable deployment.”
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
