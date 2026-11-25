import { aboutData } from '../../data/about';
import { SectionLabel } from '../common/SectionLabel';

interface TeamSectionProps {
  numberedLabel?: string;
}

export function TeamSection({ numberedLabel }: TeamSectionProps) {
  return (
    <section className={numberedLabel ? 'section team-b' : 'section team'}>
      <div className="container">
        <div className="team-top-wrap">
          {numberedLabel ? (
            <SectionLabel index={numberedLabel} label="Team Members" />
          ) : (
            <SectionLabel variant="brace" label="Team Members" />
          )}
          <div className="team-title-wrap">
            <h2 className={numberedLabel ? 'section-title is-h2' : 'section-title is-h3-medium'}>
              Meet Our Team
            </h2>
          </div>
          <div className="team-details-wrap two">
            <p className="global-details is-large-body">
              Great design is about more than just visuals: it is about crafting meaningful experiences that lead to tangible results.
            </p>
          </div>
        </div>

        <div className="team-wrap">
          <div className="team-grid-wrap">
            {aboutData.team.map((member) => (
              <article key={member.index} className="team-card-wrap">
                <img
                  width={744}
                  height={920}
                  alt={member.name}
                  src={member.image}
                  loading="lazy"
                  className="team-image"
                />
                <div className="team-card-gradient" aria-hidden="true" />
                <div className="team-info-wrapper">
                  <div>
                    <div className="story-number-wrap">
                      <span className="story-number orange-color">(</span>
                      <span className="team-number">{member.index}</span>
                      <span className="story-number orange-color">)</span>
                    </div>
                    <h3 className="member-name">{member.name}</h3>
                    <div className="member-pst">{member.role}</div>
                  </div>
                </div>
                <div className="team-social-link-wrap">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="team-social-link"
                  >
                    <img
                      width={20}
                      height={20}
                      alt=""
                      src="/assets/icons/Linkeding-Icon.svg"
                      loading="lazy"
                      className="team-social-icon"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
