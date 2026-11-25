# Responsive Breakpoint Audit

Tested across `1440x900` (desktop), `768x1024` (tablet), and `390x844` (mobile) via Playwright (`tests/site.spec.ts` and `scripts/compare-screenshots.ts`).

## Breakpoint Hierarchy (Matched to Reference Stylesheet)

- **Desktop (`>= 992px`)**: Full typography scale (`140px` H1, `88px` H2), sticky project stacking (`position: sticky; top: 160px`), 2-column blog hero/grid, 3-column team grid, horizontal carousel slides, Lenis smooth scroll enabled.
- **Tablet (`<= 991px`)**: 2-column team & color grids, 1-column stories stat pairs, compact testimonial slider controls positioned at bottom-left, scaled hero offset (`padding-top: 160px`), Lenis disabled below `768px`.
- **Mobile Landscape / Narrow Tablet (`<= 767px`)**: Header hides desktop clock, brand logo aligns left (`140px`), single-column contact/FAQ/pricing/blog grids, vertical hero stacking with `©20-25` right-aligned below `Results`, `.project-cl-wrap.is-sticky` switches to `position: static`, `WorkProcess` switches from scroll-linked image tracking to single stacked cards, `.about-b-grid-wrap` maintains `1fr 1fr` (two-column KPI layout matching reference).
- **Mobile Portrait (`<= 479px`)**: Logo `120px`, 1-column story/team grids, `about-top-wrap` left-aligned, `.about-b-grid-wrap` preserves 2-column KPI grid, `.awwards-img-wrap` renders inline rounded thumbnails (`height: 180px`) inside each achievement card, single-column footer copyright row.

## Overflow Verification

`document.documentElement.scrollWidth <= document.documentElement.clientWidth` verified across desktop (`1440px`), tablet (`768px`), and mobile (`390px`) with zero horizontal overflow.
