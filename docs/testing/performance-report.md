# Performance & Core Web Vitals Report

Measured against local production `vite preview` server (`http://127.0.0.1:4173`) using Chromium PerformanceObservers (`scripts/measure-vitals.ts`, saved to `docs/testing/vitals-metrics.json`).

## Production Bundle (`npm run build`)

- Modules transformed: `2312`
- `dist/index.html`: `1.64 kB` (`0.64 kB` gzip)
- `dist/assets/index-DP39MliJ.css`: `79.87 kB` (`12.19 kB` gzip)
- `dist/assets/index-dVXGi8eC.js`: `653.21 kB` (`199.95 kB` gzip; Vite notes chunk > 500 kB raw — optional dynamic route `React.lazy` split remains an easy post-build refinement)

## Route Telemetry (`1440x900`)

| Route | FCP | LCP | CLS | Transfer Size | External Requests |
|---|---|---|---|---|---|
| `/` | `948 ms` | `948 ms` | `0.0002` | `1684.3 KB` | `fonts.googleapis.com` (`Bebas Neue`) |
| `/about` | `108 ms` | `108 ms` | `0.0190` | `157.5 KB` | `fonts.googleapis.com` / `fonts.gstatic.com` |
| `/service` | `116 ms` | `132 ms` | `0.0118` | `142.4 KB` | `fonts.googleapis.com` / `fonts.gstatic.com` |
| `/project` | `120 ms` | `136 ms` | `0.0153` | `51.1 KB` | `fonts.googleapis.com` / `fonts.gstatic.com` |
| `/blog` | `120 ms` | `120 ms` | `0.0309` | `232.3 KB` | `fonts.googleapis.com` / `fonts.gstatic.com` |
| `/contact` | `128 ms` | `144 ms` | `0.0000` | `25.2 KB` | `fonts.googleapis.com` / `fonts.gstatic.com` |

All images (`avif`/`webp`), brand marks (`svg`), and primary `InterDisplay` fonts (`ttf`) load strictly from local `public/assets/**`.
