import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/siteConfig';
import { LocationClock } from './LocationClock';

interface HeaderProps {
  theme: 'dark' | 'light';
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
}

export const Header = forwardRef<HTMLButtonElement, HeaderProps>(function Header(
  { theme, menuOpen, onToggleMenu, onCloseMenu },
  toggleBtnRef
) {
  const effectiveTheme = menuOpen ? 'dark' : theme;
  const logoSrc = effectiveTheme === 'light' ? siteConfig.logos.darkText : siteConfig.logos.lightText;

  return (
    <header className={`navbar ${menuOpen ? 'is-menu-open' : ''}`}>
      <div className="navbar-relative-wrap">
        <div className="container">
          <div className="navbar-top-wrap">
            <div className="navbar-left-wrap">
              <LocationClock theme={effectiveTheme} />
            </div>

            <div className="navbar-logo-wrap">
              <Link to="/" className="brand-logo-link" onClick={onCloseMenu} aria-label="HyperFrame Home">
                <img width={190} height={32} alt="HyperFrame" src={logoSrc} />
              </Link>
            </div>

            <button
              ref={toggleBtnRef}
              type="button"
              className={`navbar-button-wrap ${menuOpen ? 'is-open' : ''}`}
              onClick={onToggleMenu}
              aria-expanded={menuOpen}
              aria-controls="fullscreen-nav-overlay"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <span className={`navbar-line top ${effectiveTheme === 'light' ? 'is-light' : ''}`} />
              <span className={`navbar-line bottom ${effectiveTheme === 'light' ? 'is-light' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      <div className="available-wrap">
        <div className="available-text-wrap">
          <span className="available-dot" aria-hidden="true" />
          <span className="available-text">{siteConfig.availabilityText}</span>
        </div>
      </div>
    </header>
  );
});
