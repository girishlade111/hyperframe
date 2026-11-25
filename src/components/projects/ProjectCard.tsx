import { Link } from 'react-router-dom';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <Link to={`/project/${project.slug}`} className="project-card-link">
        <img
          width={1296}
          height={660}
          alt=""
          src={project.backgroundMedia}
          loading="lazy"
          className="project-card-banne-image"
          aria-hidden="true"
        />
        <div className="project-card-overly" aria-hidden="true" />
        <div className="project-card-top">
          <div className="project-card-left-wrap">
            <div className="project-left-top-wrap">
              <div className="project-card-number">{project.index}</div>
              <h3 className="project-card-title">{project.title}</h3>
            </div>
            <p className="project-card-details">{project.summary}</p>
          </div>

          <div className="project-card-image-wrap">
            <img
              width={680}
              height={780}
              alt={`${project.title} project preview`}
              src={project.thumbnail}
              loading="lazy"
              className="project-card-image"
            />
          </div>

          <div className="project-card-right-wrap">
            <div className="project-right-top-wrap">
              <div className="project-author-wrap">
                <div className="project-author-title">Year</div>
                <div className="project-author-name">{project.year}</div>
              </div>
              <div className="project-author-wrap">
                <div className="project-author-title">Role</div>
                <div className="project-author-name">{project.role}</div>
              </div>
            </div>

            <div className="project-card-btm-wrap">
              <div className="project-ctg-title">Services</div>
              <div className="project-ctg-flex-wrap">
                {project.services.map((tag) => (
                  <div key={tag.label} className="project-single-ctg">
                    <span className="project-ctg-icon-wrap">
                      <img width={20} height={20} alt="" src={tag.icon} loading="lazy" />
                    </span>
                    <span className="project-ctg-text">{tag.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
