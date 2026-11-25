import { SiteLayout } from '../components/layout/SiteLayout';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { usePageMeta } from '../components/common/usePageMeta';

const colorGroups = [
  {
    groupTitle: 'Brand Color',
    swatches: [{ name: 'Primary Color', hex: '#FF4C03', bg: 'var(--primary-color)', border: false }],
  },
  {
    groupTitle: 'Text Colors',
    swatches: [
      { name: 'Title Dark', hex: '#03020B', bg: 'var(--balck-900)', border: false },
      { name: 'Title White', hex: '#FFFFFF', bg: 'var(--white)', border: true },
      { name: 'Paragraph Dark', hex: '#676E80', bg: 'var(--gray-500)', border: false },
      { name: 'Paragraph Grey', hex: '#E1E2E5', bg: 'var(--gray-400)', border: false },
    ],
  },
  {
    groupTitle: 'Background Colors',
    swatches: [
      { name: 'Background Dark', hex: '#03020B', bg: 'var(--balck-900)', border: false },
      { name: 'Background White', hex: '#FFFFFF', bg: 'var(--white)', border: true },
      { name: 'Background Grey', hex: '#F5F5F5', bg: 'var(--gray-100)', border: true },
      { name: 'BG Button Grey', hex: '#F1F1F1', bg: 'var(--gray-200)', border: true },
    ],
  },
  {
    groupTitle: 'Stroke Colors',
    swatches: [
      { name: 'Stroke Light', hex: '#E1E2E5', bg: 'var(--gray-400)', border: false },
      { name: 'Stroke Dark', hex: '#595959', bg: '#595959', border: false },
    ],
  },
];

const typographyRows = [
  { label: 'H1 Text', size: '140px', lh: '100%', fontSize: 'var(--text-h1)', lineHeight: 'var(--lh-s)', weight: 500, ls: 'var(--ls-3xl)' },
  { label: 'H2 Text', size: '88px', lh: '100%', fontSize: 'var(--text-h2)', lineHeight: 'var(--lh-s)', weight: 500, ls: 'var(--ls-2xl)' },
  { label: 'H3 Text', size: '60px', lh: '110%', fontSize: 'var(--text-h3)', lineHeight: 'var(--lh-m)', weight: 500, ls: 'var(--ls-xl)' },
  { label: 'H4 Text', size: '48px', lh: '120%', fontSize: 'var(--text-h4)', lineHeight: 'var(--lh-l)', weight: 500, ls: 'var(--ls-l)' },
  { label: 'H5 Text', size: '40px', lh: '120%', fontSize: 'var(--text-h5)', lineHeight: 'var(--lh-l)', weight: 500, ls: 'var(--ls-m)' },
  { label: 'H6 Text', size: '32px', lh: '120%', fontSize: 'var(--text-h6)', lineHeight: 'var(--lh-l)', weight: 500, ls: 'var(--ls-s)' },
  { label: 'Paragraph Large', size: '20px', lh: '150%', fontSize: 'var(--text-xl)', lineHeight: 'var(--lh-xl)', weight: 400 },
  { label: 'Paragraph Medium', size: '18px', lh: '150%', fontSize: 'var(--text-l)', lineHeight: 'var(--lh-xl)', weight: 400 },
  { label: 'Paragraph Small', size: '16px', lh: '150%', fontSize: 'var(--text-m)', lineHeight: 'var(--lh-xl)', weight: 400 },
  { label: 'Paragraph Extra Small', size: '14px', lh: '150%', fontSize: 'var(--text-s)', lineHeight: 'var(--lh-xl)', weight: 400 },
  { label: 'Button Text Small', size: '16px', lh: '150%', fontSize: 'var(--text-m)', lineHeight: 'var(--lh-xl)', weight: 500 },
];

export function StyleGuidePage() {
  usePageMeta(
    'Style Guide - HyperFrame',
    'HyperFrame visual design system: brand colors, Inter Display and Bebas Neue type scale, and button variants.'
  );

  return (
    <SiteLayout headerTheme="dark" showContactMarquee={false}>
      <section className="section inner changelog">
        <div className="container">
          <div className="inner-wrap">
            <div className="inner-title-wrap">
              <h1 className="global-heading">Style Guide</h1>
            </div>
            <div className="inner-details-wrap">
              <p className="inner-details">
                Your design backbone: colors, typography, and buttons kept clean and consistent across every screen.
              </p>
            </div>
            <div className="inner-btn-wrap">
              <PrimaryButton to="/" label="Back To Home" variant="primary" tiltedArrow />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="style-flex-wrap">
            <div className="style-single-wrap">
              <h2 className="section-title is-h3-medium">Colors Style</h2>
              <div className="color-flex-wrap">
                {colorGroups.map((group) => (
                  <div key={group.groupTitle} className="color-single-wrap">
                    <div className="color-title-wrap">
                      <span className="color-dot-wrap" aria-hidden="true">
                        <img
                          width={16}
                          height={16}
                          alt=""
                          src="/assets/icons/Blog-Star.svg"
                          className="color-star-icon"
                        />
                      </span>
                      <h3 className="color-title">{group.groupTitle}</h3>
                    </div>

                    <div className="color-grid-wrap">
                      {group.swatches.map((swatch) => (
                        <div key={swatch.name} className="color-card">
                          <div className="color-card-top-wrap">
                            <span className="color-name">{swatch.name}</span>
                            <span className="color-code">{swatch.hex}</span>
                          </div>
                          <div
                            className="color-swatch"
                            style={{
                              backgroundColor: swatch.bg,
                              border: swatch.border ? '1px solid var(--gray-400)' : 'none',
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="style-single-wrap">
              <h2 className="section-title is-h3-medium">Typography Style</h2>
              <div className="typography-top-wrap">
                <div className="color-title-wrap">
                  <span className="color-dot-wrap is-white" aria-hidden="true">
                    <img width={16} height={16} alt="" src="/assets/icons/Blog-Star.svg" className="color-star-icon" />
                  </span>
                  <span className="color-title">Text Scaling</span>
                </div>
                <div className="color-title-wrap">
                  <span className="color-title">Text Size and Line Height</span>
                  <span className="color-dot-wrap is-white" aria-hidden="true">
                    <img width={16} height={16} alt="" src="/assets/icons/Blog-Star.svg" className="color-star-icon" />
                  </span>
                </div>
              </div>

              <div>
                {typographyRows.map((row) => (
                  <div key={row.label} className="typo-single-wrap">
                    <div
                      style={{
                        color: 'var(--balck-900)',
                        fontSize: row.fontSize,
                        lineHeight: row.lineHeight,
                        fontWeight: row.weight,
                        letterSpacing: row.ls,
                        maxWidth: '72%',
                        overflowWrap: 'break-word',
                      }}
                    >
                      {row.label}
                    </div>
                    <div className="typo-right-wrap">
                      <span className="color-code">{row.size}</span>
                      <span className="color-code">{row.lh}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="style-single-wrap">
              <h2 className="section-title is-h3-medium">Buttons Style</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
                <PrimaryButton to="/contact" label="Primary Button" variant="primary" tiltedArrow />
                <PrimaryButton to="/service" label="Grey Button" variant="grey" />
                <PrimaryButton to="/" label="Back To Home" variant="back-dark" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
