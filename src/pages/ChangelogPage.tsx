import { SiteLayout } from '../components/layout/SiteLayout';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { usePageMeta } from '../components/common/usePageMeta';

export function ChangelogPage() {
  usePageMeta('Changelog - HyperFrame', 'Version history and release notes for HyperFrame.');

  return (
    <SiteLayout headerTheme="dark" showContactMarquee={false}>
      <section className="section inner changelog">
        <div className="container">
          <div className="inner-wrap">
            <div className="inner-title-wrap">
              <h1 className="global-heading">Changelog</h1>
            </div>
            <div className="inner-details-wrap">
              <p className="inner-details">
                Stay updated on every tweak, fix, and fresh update: all the latest changes in one clean timeline.
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
          <div className="changelog-wrap">
            <div className="changelog-card">
              <h2 className="section-title is-h4">Version 1.0</h2>
              <div className="changelog-single-wrap">
                <span className="changelog-icon-wrap" aria-hidden="true">
                  <img width={18} height={18} alt="" src="/assets/icons/Changelog-Icon.svg" />
                </span>
                <p className="changelog-single-text">
                  1.0 Initial Version Released With HyperFrame Agency Website Reconstruction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
