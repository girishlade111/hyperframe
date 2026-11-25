import { SiteLayout } from '../components/layout/SiteLayout';
import { usePageMeta } from '../components/common/usePageMeta';

const instructionSections = [
  {
    title: '1. Element Map (Which selectors the animation script looks for)',
    body: `Smooth Scroll (Lenis): targets the document scroller cleanly with inertia damping (lerp: 0.1, smoothWheel: true) and syncs with GSAP ScrollTrigger.
Counter Roll: targets [data-counter-target="true"] and animates numeric statistics from 0 to their target value (for example, 95% or $10M+) once entering the viewport.
Marquee Loop: targets .marquee_track inside .cta-marquee to drive continuous infinite horizontal scroll of agency calls to action.
Sticky Project Stacking: .project-cl-wrap uses sticky positioning at top: 160px on desktop and tablet viewports so ProFast, SecureX, and Spinex Pro cards layer during scroll.
Work Process Scroll Sync: tracks vertical scroll progress through .process-content-wrap and moves .process-image-wrap so each of the 5 stages highlights in lockstep.`,
  },
  {
    title: '2. What Each Animation Does',
    body: `Hero Intro & Section Reveals: subtle GPU-composited opacity and translateY motion triggers on scroll with ScrollTrigger, respecting prefers-reduced-motion.
Fullscreen Menu Drawer: expands from 0% to 100% height on toggle click, traps/restores keyboard focus, and closes cleanly on Escape or navigation.
Service Showcase Reveal: smoothly expands .service-hover-details height from 0px to auto on pointer hover and click/keyboard activation.
Pricing Add-Development Switch: switches Essential Plan ($1,999 <-> $5,499) and Enterprise Plan ($4,999 <-> $7,599) when toggled.`,
  },
  {
    title: '3. Key Values You Can Edit',
    body: `src/styles/tokens.css: Brand palette (--primary-color: #FF4C03, --balck-900: #03020B), spacing scale, border radii, and z-index layers.
src/styles/typography.css: Inter Display and Bebas Neue responsive clamps across desktop, 991px tablet, 767px mobile landscape, and 479px mobile portrait.
src/animations/gsapSetup.ts & scrollManager.ts: ScrollTrigger scrub smoothing, marquee speed, counter duration, and reduced-motion fallbacks.
src/data/*.ts: Typed CMS collections for all 6 projects, 5 services, 7 blog articles, pricing plans, testimonials, work process stages, FAQs, and team members.`,
  },
  {
    title: '4. How to Remove or Customize an Animation',
    body: `Because all GSAP animations register inside GSAP contexts tied to component lifecycles, you can disable or customize any motion block directly in src/animations/scrollManager.ts without affecting DOM structure or responsive CSS layouts. Users with OS-level prefers-reduced-motion automatically receive static, immediately visible layouts.`,
  },
];

export function InstructionsPage() {
  usePageMeta(
    'Instructions - HyperFrame',
    'Technical guide covering HyperFrame GSAP animations, Lenis smooth scroll, design tokens, and CMS collections.'
  );

  return (
    <SiteLayout headerTheme="light" showContactMarquee={true}>
      <section className="section instructions">
        <div className="container">
          <div className="inner-wrap">
            <div className="inner-title-wrap">
              <h1 className="global-heading is-black">Instructions</h1>
            </div>
            <div className="inner-details-wrap">
              <p className="inner-details is-license">
                Clear documentation for HyperFrame&apos;s interactive GSAP motion architecture, Lenis smooth scrolling,
                and tokenized styling system.
              </p>
            </div>
          </div>

          <div className="instructions-wrap">
            <div className="gsap-flex-wrap">
              {instructionSections.map((sec) => (
                <div key={sec.title} className="gsap-single-wrap">
                  <h2 className="gsap-titles">{sec.title}</h2>
                  <p className="gsap-details">{sec.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
