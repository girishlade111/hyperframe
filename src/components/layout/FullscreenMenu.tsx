import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap, prefersReducedMotion } from '../../animations/gsapSetup';
import { siteConfig } from '../../data/siteConfig';

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set(el, {
        yPercent: isOpen ? 0 : -100,
        opacity: isOpen ? 1 : 0,
      });
      if (isOpen) firstLinkRef.current?.focus();
      return;
    }

    gsap.killTweensOf(el);
    const links = el.querySelectorAll('.nav-desk-link');
    const bottom = el.querySelector('.nav-desktop-btm-wrap');

    if (isOpen) {
      gsap.set(el, { opacity: 1 });
      gsap.fromTo(
        el,
        { yPercent: -100 },
        {
          yPercent: 0,
          duration: 0.62,
          ease: 'power3.out',
          onComplete: () => {
            firstLinkRef.current?.focus();
          },
        }
      );
      gsap.fromTo(
        links,
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.06, delay: 0.18, ease: 'power3.out' }
      );
      if (bottom) {
        gsap.fromTo(
          bottom,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, delay: 0.35, ease: 'power2.out' }
        );
      }
    } else {
      gsap.to(el, {
        yPercent: -100,
        opacity: 0,
        duration: 0.48,
        ease: 'power3.inOut',
      });
    }
  }, [isOpen]);

  return (
    <nav
      ref={overlayRef}
      id="fullscreen-nav-overlay"
      className={`nav-desktop ${isOpen ? 'is-open' : ''}`}
      aria-label="Primary navigation"
      aria-hidden={!isOpen}
    >
      <div className="nav-desktop-wrapper">
        <div className="container full">
          <div className="nav-desktop-wrap">
            <div className="nav-desk-top-wrap">
              {siteConfig.navLinks.map((item, idx) => (
                <NavLink
                  key={item.to}
                  ref={idx === 0 ? firstLinkRef : undefined}
                  to={item.to}
                  end={item.to === '/'}
                  tabIndex={isOpen ? 0 : -1}
                  onClick={onClose}
                  className={({ isActive }) => `nav-desk-link ${isActive ? 'is-active' : ''}`}
                >
                  <span className="nav-desk-text-wrap">
                    <span className="nav-menu-clone">{'{'}</span>
                    <span className="nav-menu-text">{item.label}</span>
                    <span className="nav-menu-clone">{'}'}</span>
                  </span>
                </NavLink>
              ))}
            </div>

            <div className="nav-desktop-btm-wrap">
              <div className="footer-contact-left-wrap is-dark">
                <a href={siteConfig.phoneHref} className="nav-contact-number" tabIndex={isOpen ? 0 : -1}>
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}?subject=Contact%20With%20Us`}
                  className="nav-contact-email"
                  tabIndex={isOpen ? 0 : -1}
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="nav-social-wrap">
                {siteConfig.socials.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={soc.name}
                    tabIndex={isOpen ? 0 : -1}
                    className="social-link"
                  >
                    <img width={20} height={20} alt="" src={soc.orangeIcon} className="social-icon two" />
                    <img width={20} height={20} alt={soc.name} src={soc.grayIcon} className="social-icon one" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
