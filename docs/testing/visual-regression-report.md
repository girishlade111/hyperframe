# Visual Regression Report

Full-page Playwright + Pixelmatch (`threshold: 0.15`) comparisons executed against live reference screenshots cached under `docs/testing/screenshots/`.

| Route | Desktop (1440px) Diff | Ref/Local H (1440) | Tablet (768px) Diff | Ref/Local H (768) | Mobile (390px) Diff | Ref/Local H (390) |
|---|---|---|---|---|---|---|
| `/` | `12.49%` | `15384` / `15441` | `5.26%` | `14393` / `14421` | `36.83%` | `15842` / `16582` |
| `/about` | `3.06%` | `8209` / `8217` | `13.96%` | `7481` / `7579` | `59.26%` | `11192` / `12339` |
| `/service` | `9.49%` | `8569` / `8641` | `10.88%` | `7557` / `7617` | `33.92%` | `7971` / `8364` |
| `/project` | `4.89%` | `5409` / `5408` | `4.77%` | `5046` / `5046` | `20.76%` | `5602` / `5585` |
| `/blog` | `18.64%` | `4662` / `4701` | `23.69%` | `4123` / `4158` | `22.77%` | `5595` / `5521` |
| `/contact` | `2.59%` | `2521` / `2519` | `6.21%` | `2240` / `2248` | `14.52%` | `2872` / `2974` |
| `/style-guide` | `8.67%` | `4736` / `4949` | `12.70%` | `4658` / `4798` | `11.84%` | `5739` / `5899` |
| `/privacy` | `4.25%` | `3116` / `3138` | `6.89%` | `2843` / `2796` | `9.96%` | `3054` / `2946` |
| `/404` | `2.06%` | `1509` / `1508` | `2.35%` | `1571` / `1571` | `5.39%` | `1593` / `1608` |

## Notes on Remaining Pixel Diff Sources

- Dynamic live clock (`NEW YORK, USA`) and scrolling sponsor/CTA marquees shift between independent captures even when layout geometry matches closely (`heightDelta <= 1%` on desktop for `/`, `/about`, `/project`, `/contact`, `/privacy`, `/404`).
- On `/about` (`390px`), mobile award thumbnails (`180px`) and card internal alignment contribute to cumulative vertical offset below mid-page compared against the reference capture, though every section renders cleanly without overflow or clipping.
