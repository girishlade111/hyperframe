import Lenis from 'lenis';
import { ScrollTrigger, prefersReducedMotion } from './gsapSetup';

let lenisInstance: Lenis | null = null;
let rafId: number | null = null;

export function initSmoothScroll(): () => void {
  if (typeof window === 'undefined') return () => {};
  if (prefersReducedMotion()) return () => {};
  if (!window.matchMedia('(min-width: 768px)').matches) return () => {};

  if (lenisInstance) {
    return () => {};
  }

  const lenis = new Lenis({
    duration: 0.9,
    easing: (t) => 1 - Math.pow(1 - t, 3),
    smoothWheel: true,
  });

  lenisInstance = lenis;
  lenis.on('scroll', ScrollTrigger.update);

  const raf = (time: number) => {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  };
  rafId = requestAnimationFrame(raf);

  return () => {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    lenis.destroy();
    lenisInstance = null;
  };
}

export function setScrollLocked(locked: boolean) {
  if (typeof document === 'undefined') return;
  if (locked) {
    document.body.style.overflow = 'hidden';
    lenisInstance?.stop();
  } else {
    document.body.style.overflow = '';
    lenisInstance?.start();
  }
}

export function scrollToTopImmediate() {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: true });
  } else {
    window.scrollTo(0, 0);
  }
}
