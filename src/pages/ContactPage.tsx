import { SiteLayout } from '../components/layout/SiteLayout';
import { ContactForm } from '../components/contact/ContactForm';
import { FAQSection } from '../components/faq/FAQSection';
import { usePageMeta } from '../components/common/usePageMeta';

export function ContactPage() {
  usePageMeta(
    'Contact - HyperFrame',
    'Get in touch with HyperFrame to discuss your next branding, design, or web development project.'
  );

  return (
    <SiteLayout headerTheme="dark" showContactMarquee={false}>
      <section className="section inner contact">
        <div className="container">
          <div className="inner-wrap">
            <div className="inner-title-wrap">
              <h1 className="global-heading">Let&apos;s Work Together!</h1>
            </div>
            <div className="inner-details-wrap contact">
              <p className="inner-details">
                Let us help you become even greater at what you do.
                <br />
                Fill out the following form and we will get back to you in the next 24 hours.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <FAQSection />
    </SiteLayout>
  );
}
