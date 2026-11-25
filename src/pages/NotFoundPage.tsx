import { SiteLayout } from '../components/layout/SiteLayout';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { usePageMeta } from '../components/common/usePageMeta';

export function NotFoundPage() {
  usePageMeta('404 Not Found - HyperFrame', 'The page you are looking for could not be found.');

  return (
    <SiteLayout headerTheme="dark" showContactMarquee={false}>
      <section className="section inner _404">
        <div className="container">
          <div className="inner-wrap full">
            <div className="_404-image-wrap">
              <img width={150} height={150} alt="404 Page Not Found" src="/assets/images/errors/hf-404.svg" />
            </div>
            <div className="inner-title-wrap">
              <h1 className="global-heading _404-heading-row">
                <span>Page Not Found!</span>
                <svg
                  width="68"
                  height="42"
                  viewBox="0 0 68 42"
                  fill="none"
                  aria-hidden="true"
                  style={{ display: 'inline-block', verticalAlign: 'middle' }}
                >
                  <ellipse cx="18" cy="21" rx="14" ry="18" fill="#FFFFFF" stroke="#E1E2E5" strokeWidth="2" />
                  <ellipse cx="50" cy="21" rx="14" ry="18" fill="#FFFFFF" stroke="#E1E2E5" strokeWidth="2" />
                  <circle cx="14" cy="22" r="7" fill="#03020B" />
                  <circle cx="46" cy="22" r="7" fill="#03020B" />
                  <circle cx="12" cy="19" r="2.2" fill="#FFFFFF" />
                  <circle cx="44" cy="19" r="2.2" fill="#FFFFFF" />
                </svg>
              </h1>
            </div>
            <div className="inner-details-wrap">
              <p className="inner-details">
                Maybe it&apos;s hiding in another dimension or someone trained the model wrong.
              </p>
            </div>
            <div className="inner-btn-wrap">
              <PrimaryButton to="/" label="Back To Homepage" variant="primary" />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
