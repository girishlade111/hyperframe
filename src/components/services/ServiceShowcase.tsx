import { useState } from 'react';
import { services } from '../../data/services';
import { SectionLabel } from '../common/SectionLabel';
import { PrimaryButton } from '../common/PrimaryButton';

interface ServiceShowcaseProps {
  numberedLabel?: string;
}

export function ServiceShowcase({ numberedLabel }: ServiceShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pinnedId, setPinnedId] = useState<string | null>(null);

  return (
    <section className={numberedLabel ? 'section service-b' : ''}>
      <div className={numberedLabel ? 'service-b-bg' : 'service-bg-wrap'}>
        <div className="container">
          <div className="service-title-wrapper">
            {numberedLabel ? (
              <SectionLabel index={numberedLabel} label="Our Services" theme="dark" />
            ) : (
              <SectionLabel variant="brace" label="Our Services" theme="dark" />
            )}
            <h2 className={numberedLabel ? 'section-title is-h2-white' : 'section-title is-h3-white'}>
              Services We Provide
            </h2>
          </div>

          <div className="service-all-wrap">
            <div className="service-flex-wrap">
              {services.map((service) => {
                const isActive = pinnedId === service.id || hoveredId === service.id;
                return (
                  <div
                    key={service.id}
                    className={`service-card ${isActive ? 'is-active' : ''}`}
                    onMouseEnter={() => setHoveredId(service.id)}
                    onMouseLeave={() => setHoveredId((prev) => (prev === service.id ? null : prev))}
                  >
                    <button
                      type="button"
                      className="service-card-top-wrap"
                      aria-expanded={isActive}
                      onClick={() => {
                        if (pinnedId === service.id) {
                          setPinnedId(null);
                          setHoveredId(null);
                        } else {
                          setPinnedId(service.id);
                        }
                      }}
                    >
                      <span className="service-card-title">{service.title}</span>
                      <span className="service-card-number">{service.index}</span>
                    </button>

                    <div className="service-card-bottom-wrap">
                      <div className="service-card-bottom-inner">
                        <div className="service-card-flex-wrap">
                          <div className="service-image-grid-wrap">
                            {service.previewImages.map((imgSrc, i) => (
                              <div key={imgSrc} className="service-image-card">
                                <img
                                  width={732}
                                  height={560}
                                  alt={`${service.title} preview ${i + 1}`}
                                  src={imgSrc}
                                  loading="lazy"
                                  className="service-card-image"
                                />
                              </div>
                            ))}
                          </div>

                          <div className="service-card-right-wrap">
                            <p className="service-card-details">{service.summary}</p>
                            <PrimaryButton
                              to={`/service/${service.slug}`}
                              label="View Details"
                              tiltedArrow
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
