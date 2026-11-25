# HyperFrame Website Reconstruction

Independent React + TypeScript + Vite + GSAP + Lenis reconstruction of the HyperFrame creative digital agency website, built from live DOM/computed-style audits, reference screenshots, and localized media assets.

## Stack

- React 19 + TypeScript 7 + React Router DOM 7
- Vite 8
- GSAP 3 (`ScrollTrigger`) + Lenis smooth scrolling (with `prefers-reduced-motion` support)
- Zod + React Hook Form validation on contact and newsletter forms
- Playwright + Pixelmatch + Sharp for automated E2E, responsive, and visual verification

## Implemented Routes

- Core pages: `/`, `/about`, `/service`, `/project`, `/blog`, `/contact`
- Service details (`/service/:slug`): `branding`, `ui-ux-design`, `illustration-design`, `no-code-development`, `custom-development`
- Project case studies (`/project/:slug`): `profast`, `securex`, `spinex-pro`, `virtualex`, `fashionable`, `co-brand`
- Blog articles (`/blog/:slug`): all 7 discovered articles
- System & utility pages: `/style-guide`, `/licenses`, `/changelog`, `/instructions`, `/privacy`, `/401`, `/password`, `/404`, and `*` fallback

## Commands

```bash
npm install
npm run validate:assets
npm run typecheck
npm run build
npm run preview
npm run test:e2e
```

See [`docs/configuration.md`](docs/configuration.md) for optional runtime environment variables (`VITE_CONTACT_ENDPOINT`, `VITE_NEWSLETTER_ENDPOINT`, `VITE_PASSWORD_AUTH_ENDPOINT`).
