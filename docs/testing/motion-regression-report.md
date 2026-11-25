# Motion & Interaction Regression Report

Executed automated interaction and motion checks in Playwright (`tests/site.spec.ts`) on `1440x900`, `768x1024`, and `390x844` after final build.

## Verified Motion & Interactive States

- **Fullscreen Navigation Drawer**: Verified `button[aria-controls="fullscreen-nav-overlay"]` opens `#fullscreen-nav-overlay.is-open`, updates `aria-expanded` to `true`, navigates cleanly, and closes on `Escape` with focus returned to the toggle button.
- **Services Showcase Expand**: Verified `.service-card-top-wrap` opens on pointer hover and stays pinned (`aria-expanded="true"`) on click/keyboard activation without premature collapse.
- **Testimonial Slider**: Verified `.testimonial-slider-track` transform updates on `Next testimonial` and returns cleanly on `Previous testimonial`.
- **Pricing Add-Development Switch**: Verified `Essential` (`$1,999 <-> $5,499`) and `Enterprise` (`$4,999 <-> $7,599`) toggles flip `aria-checked` and update displayed price tiers.
- **About Showreel Modal**: Verified clicking Showreel opens `role="dialog"` with embedded YouTube player and closes on `Escape`.
- **FAQ Accordion**: Verified question buttons toggle `aria-expanded` and reveal answer panels.
- **Reduced Motion Fallback**: `src/animations/gsapSetup.ts` (`prefersReducedMotion()`) and `@media (prefers-reduced-motion: reduce)` in `src/styles/global.css` bypass Lenis inertia, marquee keyframe loops, and entrance tweens when OS reduced motion is active.
