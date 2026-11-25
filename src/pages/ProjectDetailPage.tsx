import { useParams } from 'react-router-dom';
import { SiteLayout } from '../components/layout/SiteLayout';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { SectionLabel } from '../components/common/SectionLabel';
import { TestimonialSlider } from '../components/testimonials/TestimonialSlider';
import { usePageMeta } from '../components/common/usePageMeta';
import { projects } from '../data/projects';
import { NotFoundPage } from './NotFoundPage';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  usePageMeta(
    project ? project.seo.title : 'Project Not Found - HyperFrame',
    project ? project.seo.description : 'Project case study.'
  );

  if (!project) return <NotFoundPage />;

  return (
    <SiteLayout headerTheme="light">
      <section className="section project-single">
        <div className="container">
          <div className="project-single-top-wrap">
            <PrimaryButton to="/project" label="Back to Projects" variant="back-dark" />
            <h1 className="global-heading is-black-medium">{project.title}</h1>
          </div>

          <div className="project-single-wrap">
            <div className="project-single-left-wrap">
              <div className="project-overview-wrapper">
                <SectionLabel variant="brace" label="Projects Overview" />
                <div className="projects-overview-wrap">
                  <div className="overvie-single-wrap">
                    <span className="overvie-single-title">Year</span>
                    <span className="overvie-single-details">{project.year.replace('/', '')}</span>
                  </div>
                  <div className="overvie-single-wrap">
                    <span className="overvie-single-title">Industry</span>
                    <span className="overvie-single-details">{project.industry}</span>
                  </div>
                  <div className="overvie-single-wrap">
                    <span className="overvie-single-title">Scope of work</span>
                    <span className="overvie-single-details">{project.scope}</span>
                  </div>
                  <div className="overvie-single-wrap">
                    <span className="overvie-single-title">Timeline</span>
                    <span className="overvie-single-details">{project.timeline}</span>
                  </div>
                </div>
              </div>

              <div className="advance-wrap">
                <div className="advance-star-wrapper">
                  <div className="advance-star-wrap">
                    <img width={80} height={16} alt="5 stars" src="/assets/icons/Stars.svg" />
                  </div>
                  <span className="advance-rating-number">{project.rating}</span>
                </div>
                <p className="advance-details">
                  Advanced tools and tactics to help your business thrive and boost your brand.
                </p>
              </div>
            </div>

            <div className="project-single-right-wrap">
              <img
                width={510}
                height={540}
                alt={`${project.title} showcase`}
                src={project.detailImage}
                className="project-single-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section challenge">
        <div className="container">
          <div className="challenge-top-wrap">
            <SectionLabel variant="brace" label="The Challenge" />
            <div className="challenge-title-wrap">
              <div className="challenge-title">{project.challengeStatement}</div>
            </div>
            <div className="challenge-deatils-wrap">
              <p className="global-details is-large-body">{project.challengeSubtext}</p>
            </div>
          </div>

          <div className="challenge-wrap">
            <img
              width={2280}
              height={1320}
              alt={`${project.title} challenge visual`}
              src={project.challengeImage}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section approach">
        <div className="container">
          <div className="testimonial-top-wrap">
            <SectionLabel variant="brace" label="Our Approach" />
            <div className="approach-title-wrap">
              <h2 className="section-title is-h3-medium">{project.approachHeading}</h2>
            </div>
            <div className="testimonial-details-wrap">
              <p className="global-details is-large-body">{project.approachIntro}</p>
            </div>
          </div>

          <div className="approach-wrap">
            <div className="approach-grid-wrap">
              <div className="approach-left-wrap">
                <img
                  width={810}
                  height={972}
                  alt={`${project.title} design approach`}
                  src={project.approachImage}
                  loading="lazy"
                  className="approach-image"
                />
              </div>

              <div className="approach-right-wrap">
                {project.phases.map((phase) => (
                  <div key={phase.phaseLabel}>
                    <div className="story-number-wrap">
                      <span className="story-number orange-color">(</span>
                      <span className="story-number">{phase.phaseLabel}</span>
                      <span className="story-number orange-color">)</span>
                    </div>
                    <div className="approach-card-title-wrap">
                      <h3 className="common-heading is-h6">{phase.title}</h3>
                    </div>
                    <div className="approach-card-details-wrap">
                      <p className="global-details is-small-body">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section final">
        <div className="container">
          <div className="final-top-wrap">
            <SectionLabel variant="brace" label="The Final Results" />
            <div className="final-title-wrap">
              <h2 className="section-title is-h3-medium">Numbers and Experience Drive Success</h2>
            </div>
            <p className="global-details is-large-body">
              The principles that guide our thinking, design, and delivery to ensure lasting impact.
            </p>
          </div>

          <div className="final-wrap">
            <div className="final-one-grid">
              {project.results.slice(0, 2).map((res) => (
                <article
                  key={res.index}
                  className={`final-card-wrap ${res.dark ? 'is-dark' : ''}`}
                >
                  <div className="final-card-top-wrap">
                    <div className="story-number-wrap">
                      <span className="story-number orange-color">(</span>
                      <span className={`story-number ${res.dark ? 'white' : ''}`}>{res.index}</span>
                      <span className="story-number orange-color">)</span>
                    </div>
                    <div className="story-counter-wrap">
                      <span className={`increase-number ${res.dark ? 'is-white' : ''}`}>
                        {res.metric}
                      </span>
                      <span className="increase-number-icon">{res.suffix}</span>
                    </div>
                  </div>
                  <div className="final-card-btm-wrap">
                    <h3 className={`final-card-title ${res.dark ? 'is-white' : ''}`}>
                      {res.title}
                    </h3>
                    <p className={`final-card-details ${res.dark ? 'is-white' : ''}`}>
                      {res.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="final-two-grid">
              {project.results.slice(2, 4).map((res) => (
                <article key={res.index} className="final-card-wrap">
                  <div className="final-card-top-wrap">
                    <div className="story-number-wrap">
                      <span className="story-number orange-color">(</span>
                      <span className="story-number">{res.index}</span>
                      <span className="story-number orange-color">)</span>
                    </div>
                    <div className="story-counter-wrap">
                      <span className="increase-number">{res.metric}</span>
                      <span className="increase-number-icon">{res.suffix}</span>
                    </div>
                  </div>
                  <div className="final-card-btm-wrap">
                    <h3 className="final-card-title">{res.title}</h3>
                    <p className="final-card-details">{res.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialSlider />
    </SiteLayout>
  );
}
