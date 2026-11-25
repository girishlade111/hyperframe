import { ReactNode, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { FullscreenMenu } from './FullscreenMenu';
import { Footer } from './Footer';
import { ContactMarquee } from '../contact/ContactMarquee';
import { initSmoothScroll, scrollToTopImmediate, setScrollLocked } from '../../animations/scrollManager';
import { ScrollTrigger } from '../../animations/gsapSetup';

interface SiteLayoutProps {
  children: ReactNode;
  headerTheme?: 'dark' | 'light';
  showContactMarquee?: boolean;
  marqueeIndex?: string;
}

export function SiteLayout({
  children,
  headerTheme = 'dark',
  showContactMarquee = true,
  marqueeIndex,
}: SiteLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    const cleanup = initSmoothScroll();
    return cleanup;
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setScrollLocked(false);
    scrollToTopImmediate();
    const t = window.setTimeout(() => ScrollTrigger.refresh(), 120);
    return () => window.clearTimeout(t);
  }, [location.pathname]);

  useEffect(() => {
    setScrollLocked(menuOpen);
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        toggleBtnRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  function handleClose() {
    setMenuOpen(false);
    toggleBtnRef.current?.focus();
  }

  return (
    <div className="pages-wrapper">
      <Header
        ref={toggleBtnRef}
        theme={headerTheme}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((prev) => !prev)}
        onCloseMenu={() => setMenuOpen(false)}
      />
      <FullscreenMenu isOpen={menuOpen} onClose={handleClose} />
      <main id="main-content">{children}</main>
      {showContactMarquee && <ContactMarquee index={marqueeIndex} />}
      <Footer />
    </div>
  );
}
