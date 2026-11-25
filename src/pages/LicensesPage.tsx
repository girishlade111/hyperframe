import { SiteLayout } from '../components/layout/SiteLayout';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { usePageMeta } from '../components/common/usePageMeta';

const photographySamples = [
  {
    src: '/assets/images/licenses/License-01.avif',
    alt: 'Editorial agency work sample licensed for HyperFrame',
    label: 'Unsplash Source',
    href: 'https://unsplash.com/license',
  },
  {
    src: '/assets/images/licenses/License-02.avif',
    alt: 'Modern interior workspace photography licensed for HyperFrame',
    label: 'Lummi AI Source',
    href: 'https://www.lummi.ai/terms',
  },
  {
    src: '/assets/images/about/Story-Video-BG-Image.avif',
    alt: 'Showreel preview frame photography licensed for HyperFrame',
    label: 'Story Showreel Visual',
    href: 'https://unsplash.com/license',
  },
  {
    src: '/assets/images/hero/Hero-Image.avif',
    alt: 'Futuristic iridescent glass ring hero artwork',
    label: 'Lummi Studio Visual',
    href: 'https://www.lummi.ai/terms',
  },
];

const systemSamples = [
  {
    src: '/assets/images/licenses/License-Font-Image.avif',
    alt: 'Inter Display and Bebas Neue font specimen',
    label: 'Fonts: SIL OFL 1.1',
    href: 'https://scripts.sil.org/OFL',
  },
  {
    src: '/assets/images/licenses/License-Icons-Image.webp',
    alt: 'Hugeicons MIT icon library specimen',
    label: 'Icons: Hugeicons (MIT)',
    href: 'https://hugeicons.com/',
  },
];

export function LicensesPage() {
  usePageMeta(
    'Licenses - HyperFrame',
    'Licensing details for photography, typography, iconography, and motion assets used across HyperFrame.'
  );

  return (
    <SiteLayout headerTheme="dark" showContactMarquee={false}>
      <section className="section inner changelog">
        <div className="container">
          <div className="inner-wrap">
            <div className="inner-title-wrap">
              <h1 className="global-heading">Licenses</h1>
            </div>
            <div className="inner-details-wrap">
              <p className="inner-details">
                All graphical assets in this website are licensed for personal and commercial use. If you would like to
                verify individual sources, review the license links listed below.
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
          <div className="license-flex-wrap">
            <div className="license-card">
              <h2 className="section-title is-h4">Photography</h2>
              <div className="license-deatils-wrap">
                <p className="inner-details is-license">
                  Photography and 3D renders showcased in HyperFrame come from Unsplash and Lummi under free commercial
                  and personal licenses. Showreel 2025 video playback embeds our authorized studio reel via YouTube.
                </p>
              </div>
              <div className="license-sub-wrap">
                <div className="license-image-grid">
                  {photographySamples.map((item) => (
                    <div key={item.label} className="license-image-card">
                      <div className="licens-image-wrap">
                        <img src={item.src} alt={item.alt} loading="lazy" />
                      </div>
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="license-link">
                        {item.label}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="license-card">
              <h2 className="section-title is-h4">Fonts &amp; Icons</h2>
              <div className="license-deatils-wrap">
                <p className="inner-details is-license">
                  Typography uses Inter Display and Bebas Neue under the SIL Open Font License 1.1. Interface icons are
                  sourced from Hugeicons and custom vector marks drawn specifically for HyperFrame.
                </p>
              </div>
              <div className="license-sub-wrap">
                <div className="license-image-grid">
                  {systemSamples.map((item) => (
                    <div key={item.label} className="license-image-card">
                      <div className="licens-image-wrap">
                        <img src={item.src} alt={item.alt} loading="lazy" />
                      </div>
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="license-link">
                        {item.label}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
