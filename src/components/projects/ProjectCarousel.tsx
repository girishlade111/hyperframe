import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../../data/projects';
import { SectionLabel } from '../common/SectionLabel';
import { PrimaryButton } from '../common/PrimaryButton';
import { ProjectCard } from './ProjectCard';

export function ProjectCarousel() {
  const featured = projects.slice(0, 4);
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i === 0 ? featured.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === featured.length - 1 ? 0 : i + 1));

  return (
    <section className="section feature">
      <div className="container">
        <div className="feature-top-wrap">
          <div className="feature-top-left-wrap">
            <SectionLabel variant="brace" label="Featured Projects" />
            <div className="feature-title-wrap">
              <h2 className="section-title is-h3-medium">Our Recent Work</h2>
            </div>
            <div className="feature-details-wrap">
              <p className="global-details is-large-body">
                Our cross-functional teams work together to achieve outstanding portfolios across all the digital channels.
              </p>
            </div>
          </div>
          <PrimaryButton to="/project" label="View All Projects" variant="grey" />
        </div>

        <div className="feature-wrap">
          <div className="feature-carousel-viewport">
            <div
              className="feature-carousel-track"
              style={{
                transform: `translateX(calc(-${activeIndex} * (85% + 24px)))`,
              }}
            >
              {featured.map((project) => (
                <div key={project.id} className="feature-single-slide">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
          <div className="feature-carousel-controls">
            <button
              type="button"
              className="carousel-btn"
              onClick={prev}
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="carousel-btn"
              onClick={next}
              aria-label="Next project"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
