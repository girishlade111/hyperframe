import { useState } from 'react';
import { testimonials, trustedAvatars } from '../../data/testimonials';
import { siteConfig } from '../../data/siteConfig';
import { SectionLabel } from '../common/SectionLabel';
import { PrimaryButton } from '../common/PrimaryButton';

interface TestimonialSliderProps {
  numberedLabel?: string;
}

export function TestimonialSlider({ numberedLabel }: TestimonialSliderProps) {
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, testimonials.length - 1);

  const prev = () => setIndex((i) => (i === 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  return (
    <section className={numberedLabel ? 'section testimonial-b' : 'section testimonial'}>
      <div className="container">
        <div className="testimonial-top-wrap">
          {numberedLabel ? (
            <SectionLabel index={numberedLabel} label="Testimonials" />
          ) : (
            <SectionLabel variant="brace" label="Testimonials" />
          )}
          <h2 className={numberedLabel ? 'section-title is-h2' : 'section-title is-h3-medium'}>
            What Our Client Say
          </h2>
          <div className="testimonial-details-wrap">
            <p className="global-details is-large-body">
              Our cross-functional teams work together to achieve outstanding portfolios across all the digital channels.
            </p>
          </div>
        </div>

        <div className="testimonial-wrap">
          <div className="testimonial-slider">
            <div
              className="testimonial-slider-track"
              style={{
                transform: `translateX(calc(-${index} * (365px + 20px)))`,
              }}
            >
              {testimonials.map((t) => (
                <article key={t.index} className="testimonial-slide">
                  <div className="testimonial-card">
                    <div className="testimonial-card-top-wrap">
                      <div className="review-rating-wrap">
                        <img
                          width={80}
                          height={16}
                          alt="5 out of 5 stars"
                          src="/assets/icons/Stars.svg"
                        />
                      </div>
                      <SectionLabel variant="brace" label={t.index} />
                    </div>

                    <div className="testimonial-card-btm-wrap">
                      <p className="testimonial-details">
                        <span className="orange-color">“</span>
                        {t.quote}
                        <span className="orange-color">”</span>
                      </p>
                      <div className="testimonial-author-wrap">
                        <div className="testimonial-author-img-wrap">
                          <img
                            width={112}
                            height={112}
                            alt={t.author}
                            src={t.avatar}
                            className="testimonial-author-image"
                          />
                        </div>
                        <div className="testimonial-author-info-wrap">
                          <div className="testimonial-author-name">{t.author}</div>
                          <div className="testimonial-author-pst">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <button
              type="button"
              className="testimonial-arrow-btn prev"
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <img width={24} height={24} alt="" src="/assets/icons/Arrow-Icon-01.svg" />
            </button>
            <button
              type="button"
              className="testimonial-arrow-btn next"
              onClick={next}
              aria-label="Next testimonial"
            >
              <img width={24} height={24} alt="" src="/assets/icons/Arrow-Icon-01.svg" />
            </button>

            <div className="review-btm-wrap">
              <div className="review-btm-left-wrap">
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
                    {trustedAvatars.map((avatar, i) => (
                      <div
                        key={avatar}
                        className={`review-author-img-wrap ${i > 0 ? 'is-left' : ''}`}
                      >
                        <img
                          width={80}
                          height={80}
                          alt={`Client portrait ${i + 1}`}
                          src={avatar}
                          loading="lazy"
                          className="review-author-image"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="client-wrap">
                    <div className="review-rating-wrap">
                      <img
                        width={80}
                        height={16}
                        alt="5 stars"
                        src="/assets/icons/Stars.svg"
                        loading="lazy"
                      />
                    </div>
                    <div className="client-text">
                      <span className="black-color">Trusted by</span> clients worldwide
                    </div>
                  </div>
                </div>
              </div>
              <PrimaryButton to="/contact" label="Leave a Review" variant="review" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
