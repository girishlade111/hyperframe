import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { siteConfig } from '../../data/siteConfig';

const contactSchema = z.object({
  fullName: z.string().trim().min(2, 'Please enter your full name.'),
  company: z.string().trim().optional(),
  email: z.string().trim().email('Please enter a valid email address.'),
  message: z.string().trim().min(5, 'Please share a brief overview of your project.'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'Please agree to our Privacy Policy before submitting.',
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      company: '',
      email: '',
      message: '',
      consent: false,
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setSubmitState('submitting');
    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error('Submission failed');
        setStatusMessage('Thank you! Your inquiry has been delivered to our team.');
      } else {
        await new Promise((r) => setTimeout(r, 400));
        setStatusMessage(
          `Local development preview: inquiry from ${data.fullName} validated locally (configure VITE_CONTACT_ENDPOINT for live delivery).`
        );
      }
      setSubmitState('success');
      reset();
    } catch {
      setSubmitState('error');
      setStatusMessage('Something went wrong while submitting your inquiry. Please try again.');
    }
  }

  return (
    <div className="contact-wrap">
      <div className="contact-grid-wrap">
        <div>
          <div className="contact-logo-wrap">
            <img
              width={117}
              height={20}
              alt="HyperFrame"
              src={siteConfig.logos.contact}
              loading="lazy"
            />
          </div>
          <div className="contact-title-wrap">
            <h2 className="common-heading is-h6">Have A Project In Mind?</h2>
          </div>
          <div className="contact-image-wrap">
            <img
              width={864}
              height={576}
              alt="Creative studio workspace"
              src="/assets/images/workspace/Contact-Image.avif"
              loading="lazy"
            />
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="contact-all-wrap">
              <div className="contact-single-wrapper">
                <div className="contact-single-wrap">
                  <label htmlFor="fullName" className="contact-input-label">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="First name"
                    className="contact-input-filed"
                    {...register('fullName')}
                  />
                  {errors.fullName && <div className="field-error">{errors.fullName.message}</div>}
                </div>

                <div className="contact-single-wrap">
                  <label htmlFor="company" className="contact-input-label">
                    Your Company Name
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Company name"
                    className="contact-input-filed"
                    {...register('company')}
                  />
                </div>
              </div>

              <div className="contact-single-wrap">
                <label htmlFor="email" className="contact-input-label">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="youremail@gmail.com"
                  className="contact-input-filed"
                  {...register('email')}
                />
                {errors.email && <div className="field-error">{errors.email.message}</div>}
              </div>

              <div className="contact-single-wrap">
                <label htmlFor="message" className="contact-input-label">
                  How Can We Help?
                </label>
                <textarea
                  id="message"
                  placeholder="Leave us a message..."
                  className="contact-text-area"
                  {...register('message')}
                />
                {errors.message && <div className="field-error">{errors.message.message}</div>}
              </div>

              <div>
                <label className="checkbox-field">
                  <input type="checkbox" className="checkbox-input" {...register('consent')} />
                  <span className="checkbox-label">
                    You agree to our friendly{' '}
                    <Link to="/privacy" style={{ textDecoration: 'underline', fontSize: 'inherit' }}>
                      Privacy policy
                    </Link>
                    .
                  </span>
                </label>
                {errors.consent && <div className="field-error">{errors.consent.message}</div>}
              </div>
            </div>

            <div className="contact-submit-button-wrap">
              <button
                type="submit"
                className="contact-submit-button"
                disabled={submitState === 'submitting'}
              >
                <span>{submitState === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                <img
                  width={20}
                  height={20}
                  alt=""
                  src="/assets/icons/Button-Icon.svg"
                  aria-hidden="true"
                />
              </button>
            </div>

            {submitState === 'success' && (
              <div role="status" className="success-message">
                {statusMessage}
              </div>
            )}
            {submitState === 'error' && (
              <div role="alert" className="error-message">
                {statusMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
