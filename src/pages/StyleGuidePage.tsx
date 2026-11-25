import { SiteLayout } from '../components/layout/SiteLayout';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { usePageMeta } from '../components/common/usePageMeta';

const colorGroups = [
  {
    groupTitle: 'Primary Color',
    isWhiteStar: false,
    swatches: [{ name: 'Primary Color', hex: '#FF4C03', bg: 'var(--primary-color)', border: false }],
  },
  {
    groupTitle: 'Title Color',
    isWhiteStar: false,
    swatches: [
      { name: 'Title Dark', hex: '#03020B', bg: 'var(--balck-900)', border: false },
      { name: 'Title White', hex: '#FFFFFF', bg: 'var(--white)', border: true },
    ],
  },
  {
    groupTitle: 'Paragraph Color',
    isWhiteStar: false,
    swatches: [
      { name: 'Paragraph Dark', hex: '#676E80', bg: 'var(--gray-500)', border: false },
      { name: 'Paragraph Grey', hex: '#E1E2E5', bg: 'var(--gray-400)', border: false },
    ],
  },
  {
    groupTitle: 'Background Color',
    isWhiteStar: false,
    swatches: [
      { name: 'Background Dark', hex: '#03020B', bg: 'var(--balck-900)', border: false },
      { name: 'Background White', hex: '#FFFFFF', bg: 'var(--white)', border: true },
      { name: 'Background Grey', hex: '#F5F5F5', bg: 'var(--gray-100)', border: true },
      { name: 'BG Button Grey', hex: '#F1F1F1', bg: 'var(--gray-200)', border: true },
    ],
  },
  {
    groupTitle: 'Stroke Color',
    isWhiteStar: false,
    swatches: [
      { name: 'Stroke Light', hex: '#E1E2E5', bg: 'var(--gray-400)', border: false },
      { name: 'Stroke Dark', hex: '#595959', bg: 'var(--stroke-dark)', border: false },
    ],
  },
];

const typographyRows = [
  { label: 'Display Hero H1', tag: 'h1', className: 'hero-heading', spec: 'Size 140px / LH 100%', sample: 'Beyond The Pixel.' },
  { label: 'Heading 1', tag: 'p', className: 'section-title is-h2', spec: 'Size 96px / LH 110%', sample: 'Heading 1' },
  { label: 'Heading 2', tag: 'p', className: 'section-title', spec: 'Size 72px / LH 115%', sample: 'Heading 2' },
  { label: 'Heading 3', tag: 'p', className: 'section-title is-h3-medium', spec: 'Size 72px / LH 115%', sample: 'Heading 3' },
  { label: 'Heading 4', tag: 'p', className: 'section-title is-h4', spec: 'Size 56px / LH 115%', sample: 'Heading 4' },
  { label: 'Heading 5', tag: 'p', className: 'section-title is-h5', spec: 'Size 48px / LH 120%', sample: 'Heading 5' },
  { label: 'Heading 6', tag: 'p', className: 'section-title is-h6', spec: 'Size 40px / LH 120%', sample: 'Heading 6' },
  { label: 'Body Copy Large', tag: 'p', className: 'global-details is-large-body', spec: 'Size 24px / LH 145%', sample: 'Body Copy Large' },
  { label: 'Body Copy Base', tag: 'p', className: 'global-details', spec: 'Size 18px / LH 150%', sample: 'Body Copy Base' },
  { label: 'Button Text Small', tag: 'p', className: 'menu-label', spec: 'Size 16px / LH 150%', sample: 'Button Text Small' },
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
              <PrimaryButton to="/" label="Back To Home" variant="back-light" />
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
                      <span className={`color-dot-wrap ${group.isWhiteStar ? 'is-white' : ''}`} aria-hidden="true">
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
                  <span className="color-title">Typography Scale</span>
                </div>
                <span className="color-title">Specs</span>
              </div>

              <div>
                {typographyRows.map((row) => (
                  <div key={row.label} className="typo-single-wrap">
                    <div
                      className={row.className}
                      style={{
                        color: 'var(--balck-900)',
                        maxWidth: '72%',
                        overflowWrap: 'break-word',
                      }}
                    >
                      {row.sample}
                    </div>
                    <div className="typo-right-wrap">
                      <span className="color-code">{row.spec}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="style-single-wrap">
              <h2 className="section-title is-h3-medium">Buttons Style</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
                <PrimaryButton to="/contact" label="Primary Button" variant="primary" />
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
