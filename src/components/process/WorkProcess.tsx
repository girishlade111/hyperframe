import { useEffect, useRef, useState } from 'react';
import { processSteps } from '../../data/process';
import { ScrollTrigger, gsap } from '../../animations/gsapSetup';
import { SectionLabel } from '../common/SectionLabel';

interface WorkProcessProps {
  numberedLabel?: string;
}

export function WorkProcess({ numberedLabel }: WorkProcessProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(20);
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stepRefs.current.forEach((el, idx) => {
        if (!el) return;
        ScrollTrigger.create({
          trigger: el,
          start: 'top 55%',
          end: 'bottom 45%',
          onEnter: () => {
            setActiveStep(idx);
            setProgress(((idx + 1) / processSteps.length) * 100);
          },
          onEnterBack: () => {
            setActiveStep(idx);
            setProgress(((idx + 1) / processSteps.length) * 100);
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section process">
      <div className="container">
        <div className="process-top-wrap">
          {numberedLabel ? (
            <SectionLabel index={numberedLabel} label="Our Process" />
          ) : (
            <SectionLabel variant="brace" label="Our Process" />
          )}
          <h2 className="section-title is-h2">From Idea To Launch</h2>
          <div className="testimonial-details-wrap">
            <p className="global-details is-large-body">
              Here’s how we take your idea from concept to launch, making sure every step is smooth, transparent, and focused on results.
            </p>
          </div>
        </div>

        <div className="process-wrap">
          <div className="process-flex-wrap">
            <div className="process-left-wrap">
              <div className="process-image-flex-wrap">
                {processSteps.map((step, idx) => (
                  <div
                    key={step.index}
                    className={`process-image-wrap ${activeStep === idx ? 'is-active' : ''}`}
                  >
                    <img
                      width={952}
                      height={840}
                      alt={step.title}
                      src={step.image}
                      loading="lazy"
                      className="process-image"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="process-right-wrap">
              <div className="process-line-wrapper" aria-hidden="true">
                <div className="process-line-wrap">
                  <div className="process-orange-line" style={{ height: `${progress}%` }} />
                </div>
              </div>

              <div className="process-card-flex-wrap">
                {processSteps.map((step, idx) => (
                  <div
                    key={step.index}
                    ref={(el) => {
                      stepRefs.current[idx] = el;
                    }}
                    className="process-single-wrap"
                    onMouseEnter={() => {
                      setActiveStep(idx);
                      setProgress(((idx + 1) / processSteps.length) * 100);
                    }}
                  >
                    <div className={`process-card-dot ${idx <= activeStep ? 'is-active' : ''}`} />
                    <div className="process-card-wrap">
                      <SectionLabel variant="brace" label={step.index} />
                      <h3 className="process-card-title">{step.title}</h3>
                      <p className="process-card-details">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
