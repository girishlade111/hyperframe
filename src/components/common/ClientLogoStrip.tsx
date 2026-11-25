import { siteConfig } from '../../data/siteConfig';

export function ClientLogoStrip() {
  const groups = [0, 1, 2];

  return (
    <div className="sponsor-tricker" aria-label="Featured client brands">
      <div className="sponsor-flex-wrap">
        {groups.map((groupIdx) => (
          <div key={groupIdx} className="sponsor-single-wrap" aria-hidden={groupIdx > 0}>
            {siteConfig.sponsors.map((logo) => (
              <div key={`${groupIdx}-${logo.name}`} className="sponsor-card">
                <img
                  width={124}
                  height={31}
                  alt={groupIdx === 0 ? logo.name : ''}
                  src={logo.src}
                  loading="lazy"
                  className="sponsor-logo"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
