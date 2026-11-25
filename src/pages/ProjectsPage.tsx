import { SiteLayout } from '../components/layout/SiteLayout';
import { ProjectCard } from '../components/projects/ProjectCard';
import { usePageMeta } from '../components/common/usePageMeta';
import { projects } from '../data/projects';

export function ProjectsPage() {
  usePageMeta(
    'Project - HyperFrame',
    'The HyperFrame project page showcases creative work across branding, web design, illustration, app design, and digital experiences for modern brands today.'
  );

  return (
    <SiteLayout headerTheme="light">
      <section className="section project-b">
        <div className="container">
          <div className="project-top-wrap">
            <div className="project-title-wrap">
              <h1 className="global-heading is-black-medium">
                Our Work, Your Vision
                <br />
                Realized
              </h1>
            </div>
            <div className="project-details-wrap">
              <p className="global-details">
                Take a look at our latest creative projects for brands with big ideas.
              </p>
            </div>
          </div>

          <div className="project-wrap">
            <div className="project-flex-wrap">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
