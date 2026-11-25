# Interactive Element Inventory

All interactive controls verified via automated Playwright browser checks (`tests/site.spec.ts`):

1. **Fullscreen Navigation Overlay (`Header.tsx`, `FullscreenMenu.tsx`, `SiteLayout.tsx`)**:
   - Trigger: `button[aria-controls="fullscreen-nav-overlay"]` with `aria-expanded` state and accessible label toggling between open/close.
   - Behavior: Animated drawer (`height`/`translateY`), links navigate smoothly and reset scroll, `Escape` closes overlay and restores focus to toggle button, background scroll locked via Lenis/DOM overflow lock while open.
2. **Real-Time Location Clock (`LocationClock.tsx`)**:
   - Live `NEW YORK, USA` time formatted in `America/New_York` (`hh:mm AM/PM`) updated every 30s.
3. **Interactive Services Showcase (`ServiceShowcase.tsx`)**:
   - 5 service rows (`Branding`, `UI & UX Design`, `Illustration Design`, `No Code Development`, `Custom Development`).
   - Supports pointer hover expand, click-to-pin toggle, keyboard button activation, and `View Details` navigation to `/service/:slug`.
4. **Sticky Project Cards & Carousel (`HomePage.tsx`, `ProjectsPage.tsx`, `ProjectCarousel.tsx`)**:
   - Desktop (`>= 768px`) sticky card stacking (`top: 160px`) on homepage; multi-slide carousel (`Previous project` / `Next project` controls) on `/service` and `/service/:slug`.
5. **Testimonial Slider (`TestimonialSlider.tsx`)**:
   - Horizontal slide track driven by `Previous testimonial` and `Next testimonial` buttons.
6. **Pricing Add-Development Toggles (`PricingSection.tsx`)**:
   - Accessible `role="switch"` controls on both `Essential` (`$1,999 <-> $5,499`) and `Enterprise` (`$4,999 <-> $7,599`) cards.
7. **Work Process Scroll Sync (`WorkProcess.tsx`)**:
   - 5-stage process timeline (`01..05`) synchronized with vertical scroll progress.
8. **FAQ Accordion (`FAQSection.tsx`)**:
   - 6 collapsible items in 2-column grid with `aria-expanded`, `aria-controls`, and plus/minus state icons.
9. **About Showreel Modal (`AboutPage.tsx`, `VideoModal.tsx`)**:
   - Opens YouTube embed (`uRNlP2BC0EQ`) inside accessible `role="dialog"` with backdrop click and `Escape` close handlers.
10. **Contact Inquiry & Footer Newsletter Forms (`ContactForm.tsx`, `Footer.tsx`)**:
    - Validated via React Hook Form + Zod (`role="alert"` inline validation errors, `role="status"` live region submission feedback, optional `VITE_*_ENDPOINT` POST adapters).
