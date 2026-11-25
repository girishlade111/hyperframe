# Asset Licenses & Attribution

All `153` assets in `public/assets/**` are localized under `public/` and verified via `scripts/validate-assets.ts` against `docs/research/asset-manifest.json`. Zero runtime hotlinks to external template CDNs are used for local page imagery, icons, or fonts.

| Category | Source / License | Notes |
|---|---|---|
| Photography & Abstract 3D Visuals | Unsplash License & Lummi AI Free Commercial/Personal Terms | Covers hero ring visual (`Hero-Image.avif`), agency portraits, case study previews, service previews, blog thumbnails, and backgrounds. |
| Fonts (`Inter Display`, `Bebas Neue`) | SIL Open Font License 1.1 (`SIL OFL 1.1`) | `InterDisplay-Regular.ttf`, `InterDisplay-Medium.ttf`, `InterDisplay-SemiBold.ttf` served from `/assets/fonts/`; `Bebas Neue` stylesheet preconnected cleanly. |
| Icons & UI Vectors | Hugeicons (MIT) & custom HyperFrame SVGs | UI icons localized in `public/assets/icons/`; brand marks in `public/assets/brand/`. |
| Showreel Video Embed (`/about`) | Official Studio YouTube Embed (`uRNlP2BC0EQ`) | Rendered on demand inside `VideoModal.tsx` when user opens Showreel 2025. |
