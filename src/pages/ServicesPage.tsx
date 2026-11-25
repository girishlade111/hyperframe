import { SiteLayout } from '../components/layout/SiteLayout';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { ServiceShowcase } from '../components/services/ServiceShowcase';
import { TrustSection } from '../components/trust/TrustSection';
import { TestimonialSlider } from '../components/testimonials/TestimonialSlider';
import { ProjectCarousel } from '../components/projects/ProjectCarousel';
import { PricingSection } from '../components/pricing/PricingSection';
import { FAQSection } from '../components/faq/FAQSection';
import { usePageMeta } from '../components/common/usePageMeta';

export function ServicesPage() {
  usePageMeta(
    'Service - HyperFrame',
    'Discover HyperFrame’s creative services, including branding, website design, web apps, mobile apps, illustration, and icon design for ambitious brands.'
  );

  return (
    <SiteLayout headerTheme="light">
      <section className="section project">
        <div className="container">
          <div className="service-top-wrap">
            <div className="service-title-wrap">
              <h1 className="global-heading is-black-medium">
                Grow Your Business
                <br />
                with Our Services
              </h1>
            </div>
            <div className="service-details-wrap">
              <p className="global-details">
                At HyperFrame, our UI/UX design turns ideas into engaging, user-friendly digital products that inspire and boost conversions, whether launching or redesigning platforms.
              </p>
            </div>
            <div className="service-button-wrap">
              <PrimaryButton to="/contact" label="Book a Free Consultation" tiltedArrow />
            </div>
          </div>
        </div>

        <ServiceShowcase />
      </section>

      <TrustSection />
      <TestimonialSlider />
      <ProjectCarousel />
      <PricingSection headingOverride="What Our Client Say" />
      <FAQSection />
    </SiteLayout>
  );
}
