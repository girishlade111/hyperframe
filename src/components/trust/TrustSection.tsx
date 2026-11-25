import { siteConfig } from '../../data/siteConfig';
import { SectionLabel } from '../common/SectionLabel';

interface TrustSectionProps {
  numberedLabel?: string;
}

export function TrustSection({ numberedLabel }: TrustSectionProps) {
  return (
    <section className={numberedLabel ? 'section choose-b' : 'section choose'}>
      <div className="container">
        <div className="choose-top-wrap">
          {numberedLabel ? (
            <SectionLabel index={numberedLabel} label="Why Choose Us" />
          ) : (
            <SectionLabel variant="brace" label="Why Choose Us" />
          )}
          <h2 className={numberedLabel ? 'section-title is-h2' : 'section-title is-h3-medium'}>
            Why Brands Trust Us
          </h2>
          <div className="choose-details-wrap">
            <p className="global-details is-large-body">
              Great design is about more than just visuals: it is about crafting meaningful experiences that lead to tangible results.
            </p>
          </div>
        </div>

        <div className="choose-wrap">
          <div className="choose-grid-wrap">
            <div className="choose-left-wrap">
              <div className="improve-top-wrap">
                <div className="improve-brand-logo-wrap">
                  <img
                    width={190}
                    height={32}
                    alt="HyperFrame"
                    src={siteConfig.logos.lightText}
                    loading="lazy"
                  />
                </div>
                <SectionLabel variant="brace" label="001" theme="dark" />
              </div>

              <div className="improve-wrap">
                <div className="improve-title">We Improve Conversion Rate:</div>
                <div className="improve-single-title">
                  Website Loading Speed +48<span className="orange-color">%</span>
                </div>
                <div className="improve-single-title">
                  Users Bounce Rate -23<span className="orange-color">%</span>
                </div>
              </div>
            </div>

            <div className="choose-right-wrap">
              <div className="increase-top-wrap">
                <SectionLabel variant="brace" label="002" />
                <div className="increase-title">Yearly Increase Users Conversion Rates</div>
                <p className="increase-details">Our designs engage millions worldwide.</p>
                <div className="increase-number-wrap">
                  <span className="increase-number">/60</span>
                  <span className="increase-number-icon">X</span>
                </div>
              </div>

              <div className="increase-wrap">
                <img
                  width={532}
                  height={282}
                  alt="Conversion rate growth chart"
                  src="/assets/icons/hf-content-block.svg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
