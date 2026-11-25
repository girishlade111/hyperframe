import { useState } from 'react';
import { pricingPlans } from '../../data/pricing';
import { SectionLabel } from '../common/SectionLabel';
import { PrimaryButton } from '../common/PrimaryButton';

interface PricingSectionProps {
  numberedLabel?: string;
  headingOverride?: string;
}

export function PricingSection({
  numberedLabel,
  headingOverride = 'Explore Our Pricing',
}: PricingSectionProps) {
  const [devIncluded, setDevIncluded] = useState<Record<string, boolean>>({});

  const togglePlan = (id: string) => {
    setDevIncluded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className={numberedLabel ? 'section testimonial-b' : 'section pricing'}>
      <div className="container">
        <div className="pricing-top-wrap">
          {numberedLabel ? (
            <SectionLabel index={numberedLabel} label="Pricing Plans" />
          ) : (
            <SectionLabel variant="brace" label="Pricing Plans" />
          )}
          <h2 className={numberedLabel ? 'section-title is-h2' : 'section-title is-h3-medium'}>
            {headingOverride}
          </h2>
          <div className="testimonial-details-wrap">
            <p className="global-details is-large-body">
              Great design is about more than just visuals: it is about crafting meaningful experiences that lead to tangible results.
            </p>
          </div>
        </div>

        <div className="pricing-wrap">
          <div className="pricing-flex-wrap">
            {pricingPlans.map((plan) => {
              const isActive = Boolean(devIncluded[plan.id]);
              return (
                <div key={plan.id} className={`pricing-card ${plan.dark ? 'two' : ''}`}>
                  <div className="pricing-grid-wrap">
                    <div className="pricing-left-wrap">
                      <div>
                        <div className={`pricing-cad-icon-wrap ${plan.dark ? 'two' : ''}`}>
                          <img
                            width={32}
                            height={32}
                            alt=""
                            src={plan.icon}
                            loading="lazy"
                            className="pricing-cad-icon"
                          />
                        </div>
                        <h3 className={`pricing-card-title ${plan.dark ? 'two' : ''}`}>
                          {plan.name}
                        </h3>
                        <div className="pricing-card-details-wrap">
                          <p className={`global-details ${plan.dark ? 'is-small-white' : 'is-small-body'}`}>
                            {plan.description}
                          </p>
                        </div>
                      </div>

                      <div className="pricing-left-btm-wrap">
                        <div className="pricing-toggle-wrapper">
                          <button
                            type="button"
                            role="switch"
                            aria-checked={isActive}
                            aria-label={`${plan.name}: ${plan.addDevLabel}`}
                            className={`pricing-toggle-btn ${isActive ? 'is-active' : ''}`}
                            onClick={() => togglePlan(plan.id)}
                          >
                            <span className="pricing-dot" />
                          </button>
                          <span className={`pricing-add-text ${plan.dark ? 'two' : ''}`}>
                            {plan.addDevLabel}
                          </span>
                        </div>

                        <div className="delivery-wrap">
                          <span className={`delivery-title ${plan.dark ? 'two' : ''}`}>
                            Delivery Time:
                          </span>
                          <span className={`delivery-time ${plan.dark ? 'two' : ''}`}>
                            {plan.deliveryTime}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="pricing-price-wrap">
                        <div className="pricing-price-text-wrap">
                          <div className={`pricing-price-slider ${isActive ? 'is-active' : ''}`}>
                            <div className={`pricing-price-val ${plan.dark ? 'two' : ''}`}>
                              {plan.basePrice}
                            </div>
                            <div className={`pricing-price-val ${plan.dark ? 'two' : ''}`}>
                              {plan.withDevPrice}
                            </div>
                          </div>
                        </div>
                        <span className={`pricing-month ${plan.dark ? 'two' : ''}`}>/month</span>
                      </div>

                      <div className="pricing-line-wrap" />

                      <div className="pricing-list-wrapper">
                        <div className={`pricing-list-title ${plan.dark ? 'two' : ''}`}>
                          What’s included:
                        </div>
                        <div className="pricing-list-flex-wrap">
                          {plan.features.map((feat) => (
                            <div key={feat} className="pricing-single-list">
                              <span className="pricing-list-icon-wrap">
                                <img
                                  width={24}
                                  height={24}
                                  alt=""
                                  src={
                                    plan.dark
                                      ? '/assets/icons/White-Check-Icon.svg'
                                      : '/assets/icons/Orange-Check-Icon.svg'
                                  }
                                  loading="lazy"
                                />
                              </span>
                              <span className={`pricing-list-text ${plan.dark ? 'two' : ''}`}>
                                {feat}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pricing-button-wrap">
                        <PrimaryButton
                          to="/contact"
                          label="Start Your Project"
                          variant={plan.dark ? 'orange-full' : 'grey-full'}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
