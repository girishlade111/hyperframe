import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/siteConfig';
import { SectionLabel } from '../common/SectionLabel';

interface ContactMarqueeProps {
  index?: string;
}

export function ContactMarquee({ index }: ContactMarqueeProps) {
  const groups = [0, 1, 2];

  return (
    <section className="section cta">
      <div className="container">
        <div className="cta-top-wrap">
          <div className="cta-b-sub-title-wrap">
            {index ? (
              <SectionLabel index={index} label="Contact Us" theme="dark" />
            ) : (
              <SectionLabel variant="brace" label="Contact Us" theme="dark" />
            )}
          </div>
          <div className="cta-title-wrap">
            <h2 className="section-title is-h2-white">Have Any Project Idea?</h2>
          </div>
          <div className="cta-details-wrap">
            <p className="inner-details">
              Great design is about more than just visuals: it is about crafting meaningful experiences that lead to tangible results.
            </p>
          </div>
        </div>
      </div>

      <div className="cta-wrap">
        <Link to="/contact" className="cta-flex-wrap" aria-label="Contact HyperFrame">
          {groups.map((groupIdx) => (
            <div key={groupIdx} className="cta-single-wrap" aria-hidden={groupIdx > 0}>
              <div className="cta-text">
                {siteConfig.ctaEmail} <span className="orange-color">⌝</span>
              </div>
              <div className="cta-text">
                Get In Touch<span className="orange-color">⌝</span>
              </div>
              <div className="cta-text">
                {siteConfig.ctaEmail} <span className="orange-color">⌝</span>
              </div>
              <div className="cta-text">
                Get In Touch<span className="orange-color">⌝</span>
              </div>
            </div>
          ))}
        </Link>
      </div>
    </section>
  );
}
