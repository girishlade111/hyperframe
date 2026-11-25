# HyperFrame Reference Audit & Intentional Fidelity Notes

## Primary Reference

- Live site: `https://hyperframe-template.webflow.io/`
- Template page: `https://webflow.com/templates/html/hyperframe-website-template`
- Designer documentation: `https://pentaclay.com/webflow/templates/hyperframe`

## Verified Reference Details & Anomalies Documented

1. **Hero Media Type**: The live homepage hero background uses an `.avif` raster image (`Hero-Image.avif`, `2400x1600`) with `mix-blend-mode: hard-light` layered over radial glow and `#000000`, rather than a `<video>` element. Video playback is reserved for the Showreel 2025 modal (`uRNlP2BC0EQ`) on `/about`.
2. **Pricing Switch Semantics**: The pricing toggle on `/`, `/service`, and `/service/:slug` is an **Add Development** option (`Add Development ($3,699)` on Essential switching `$1,999 <-> $5,499`; `Add Development ($7,599)` on Enterprise switching `$4,999 <-> $7,599`), not a monthly/annual billing toggle. Note that on live `/`, `/service`, and `/pricing`, the static `"Add Development ($3,699)"` label coexists with a `$5,499` toggle destination; preserved faithfully to match the reference copy.
3. **Sticky Project Cards Stacking**: On desktop (`>= 768px`), `.project-cl-wrap.is-sticky` uses `position: sticky; top: 160px` so ProFast, SecureX, and Spinex Pro overlap sequentially as the user scrolls (`z-index: 1..3`). Below `768px`, cards flow statically.
4. **Live Reference Quirks Observed**:
   - On live `/service`, the Pricing section carries `{ Pricing Plans }` with the heading `"What Our Client Say"`; preserved via `headingOverride` on `ServicesPage.tsx` for page fidelity.
   - On live `/style-guide`, swatch captions display `"#FF4C03"`/`"#FFFFFF"` mismatched against darker swatch backgrounds; fixed caption hex accuracy on `/style-guide` while matching the reference card colors (`#03020B`, `#FFFFFF`, `#676E80`, `#E1E2E5`, `#F5F5F5`, `#F1F1F1`, `#595959`).
   - On live `/privacy`, section 4 duplicated the heading `"Data Sharing"` and referenced `"StoryPixel"`; updated section 4 heading to `"4. Data Retention"` and brand name to `HyperFrame`.
   - On live `/404`, the heading ended with a unicode eye emoji; replaced with an inline accessible SVG eye pair to adhere to zero-emoji rules while matching the visual appearance.
