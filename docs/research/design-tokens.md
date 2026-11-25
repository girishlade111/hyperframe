# Design Tokens

Extracted from `src/styles/tokens.css`, `src/styles/typography.css`, and computed style audits (`docs/research/computed-styles.json`).

## Palette

| Token Name | CSS Variable | Value | Role |
|---|---|---|---|
| Primary Brand Accent | `--color-primary` / `--primary-color` | `#ff4c03` | CTAs, braces, eyebrow brackets, active accents, stats highlights |
| Primary Hover | `--color-primary-hover` | `#e04200` | Darkened orange hover state |
| Dark Surface | `--color-background-dark` / `--balck-900` | `#03020b` | Dark sections, fullscreen nav overlay, primary dark ink |
| Pure Black | `--color-background-black` / `--black` | `#000000` | Hero canvas backdrop |
| White Surface | `--color-background-white` / `--white` | `#ffffff` | Light sections, cards, inverted text |
| Muted Light Surface | `--color-background-gray` / `--gray-100` | `#f5f5f5` | Footer background, license cards, light cards |
| Button Grey | `--color-button-gray` / `--gray-200` | `#f1f1f1` | Grey secondary button fill |
| Subtle Border | `--color-border-subtle` / `--gray-300` | `#ebedf0` | Card hairlines |
| Stroke Light | `--color-stroke-light` / `--gray-400` | `#e1e2e5` | Hairline borders, dashed dividers |
| Paragraph Ink | `--color-paragraph-dark` / `--gray-500` | `#676e80` | Body copy, subtitles, metadata |
| Stroke Dark | `--color-stroke-dark` / `--gray-600` | `#595959` | Dark-theme hairline divider |
| Status Dot | `--color-status-available` | `#61c554` | Availability indicator dot |

## Typography

- Primary Font: `InterDisplay` (local TTF weights `400`, `500`, `600` served from `/assets/fonts/`)
- Display Condensed Font: `Bebas Neue` (`400`, used for `footer-brand-logo` / large numeric/display markers)
- Desktop Scale (`>= 992px`):
  - `--text-big`: `186px`
  - `--text-h1`: `140px` (`--lh-s`: `100%`, `--ls-3xl`: `-5.6px`)
  - `--text-h2`: `88px` (`--lh-s`: `100%`, `--ls-2xl`: `-1.76px`)
  - `--text-h3`: `60px` (`--lh-m`: `110%`, `--ls-xl`: `-0.8px`)
  - `--text-h4`: `48px` (`--lh-l`: `120%`, `--ls-l`)
  - `--text-h5`: `40px` (`--lh-l`: `120%`, `--ls-m`: `-0.64px`)
  - `--text-h6`: `32px` (`--lh-l`: `120%`)
  - `--text-xl`: `20px`, `--text-l`: `18px`, `--text-m`: `16px`, `--text-s`: `14px`
