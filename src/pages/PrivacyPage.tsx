import { SiteLayout } from '../components/layout/SiteLayout';
import { usePageMeta } from '../components/common/usePageMeta';

export function PrivacyPage() {
  usePageMeta(
    'Privacy Policy - HyperFrame',
    'Read the HyperFrame Privacy Policy covering data collection, usage, cookies, retention, and security.'
  );

  return (
    <SiteLayout headerTheme="dark" showContactMarquee={false}>
      <section className="section inner changelog">
        <div className="container">
          <div className="inner-wrap">
            <div className="inner-title-wrap">
              <h1 className="global-heading">Privacy Policy</h1>
            </div>
            <div className="inner-details-wrap contact">
              <p className="inner-details">
                HyperFrame operates the agency portfolio website (the &ldquo;Service&rdquo;). This page informs you
                of our policies regarding the collection, use, and disclosure of Personal Information when you use our
                Service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="privacy-wrapper">
            <div className="privacy-flex-wrap">
              <div className="privacy-single-wrap">
                <h2 className="section-title is-h4">1. Information We Collect</h2>
                <div className="privacy-item-wrap">
                  <p className="privacy-item-title">We may collect:</p>
                  <ul className="privacy-list">
                    <li>Name, email address, and message details submitted via our contact form</li>
                    <li>Technical data such as IP address, browser type, and device information</li>
                  </ul>
                </div>
              </div>

              <div className="privacy-single-wrap">
                <h2 className="section-title is-h4">2. How We Use Your Information</h2>
                <div className="privacy-item-wrap">
                  <p className="privacy-item-title">We use your information to:</p>
                  <ul className="privacy-list">
                    <li>Respond to inquiries and provide our agency services</li>
                    <li>Improve website performance and user experience</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </div>

              <div className="privacy-single-wrap">
                <h2 className="section-title is-h4">3. Data Sharing</h2>
                <div className="privacy-details-wrap">
                  <p className="global-details">
                    We do not sell or rent your personal information. Data may be shared only with trusted service
                    providers necessary to operate our website or when required by law.
                  </p>
                </div>
              </div>

              <div className="privacy-single-wrap">
                <h2 className="section-title is-h4">4. Data Retention</h2>
                <div className="privacy-details-wrap">
                  <p className="global-details">
                    We store your information only as long as necessary to fulfill the purposes outlined in this policy.
                  </p>
                </div>
              </div>

              <div className="privacy-single-wrap">
                <h2 className="section-title is-h4">5. Cookies</h2>
                <div className="privacy-details-wrap">
                  <p className="global-details">
                    Our website may use essential cookies to ensure proper functionality and basic analytics. You can
                    disable cookies through your browser settings.
                  </p>
                </div>
              </div>

              <div className="privacy-single-wrap">
                <h2 className="section-title is-h4">6. Data Security</h2>
                <div className="privacy-details-wrap">
                  <p className="global-details">
                    We take reasonable measures to protect your personal information, but cannot guarantee 100% security
                    online.
                  </p>
                </div>
              </div>

              <div className="privacy-single-wrap">
                <h2 className="section-title is-h4">7. Third-Party Links</h2>
                <div className="privacy-details-wrap">
                  <p className="global-details">
                    Our site may include links to external websites. We are not responsible for their privacy practices.
                  </p>
                </div>
              </div>

              <div className="privacy-single-wrap">
                <h2 className="section-title is-h4">8. Policy Updates</h2>
                <div className="privacy-details-wrap">
                  <p className="global-details">
                    We may update this Privacy Policy from time to time. Changes will appear on this page with a revised
                    date.
                  </p>
                </div>
              </div>

              <div className="privacy-single-wrap">
                <h2 className="section-title is-h4">9. Contact Us</h2>
                <div className="privacy-details-wrap">
                  <p className="global-details">
                    If you have questions about this Privacy Policy, please reach us at{' '}
                    <a href="mailto:support@hyperframe.com" className="black-color">
                      support@hyperframe.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
