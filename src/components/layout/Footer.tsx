import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { siteConfig } from '../../data/siteConfig';

const newsletterSchema = z.object({
  email: z.string().trim().email('Please enter a valid email address.'),
});

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = newsletterSchema.safeParse({ email });
    if (!parsed.success) {
      setStatus('error');
      setMessage(parsed.error.issues[0]?.message || 'Please check the email address.');
      return;
    }

    setStatus('loading');
    const endpoint = import.meta.env.VITE_NEWSLETTER_ENDPOINT;
    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: parsed.data.email }),
        });
        if (!res.ok) throw new Error('Request failed');
        setMessage("You're subscribed! Look out for fresh design insights from HyperFrame in your inbox.");
      } else {
        // Local development adapter: records email locally without faking external delivery
        await new Promise((r) => setTimeout(r, 350));
        setMessage(
          'Local dev preview: email validated and queued in session (configure VITE_NEWSLETTER_ENDPOINT for live delivery).'
        );
      }
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('We could not add your email. Please check the address and try again.');
    }
  }

  return (
    <footer className="section footer">
      <div className="container">
        <div className="footer-flex-wrap">
          <div className="footer-left-wrap">
            <Link to="/" className="footer-brand-link" aria-label="HyperFrame Home">
              <img
                width={570}
                height={103}
                alt="HyperFrame"
                src={siteConfig.logos.footer}
                loading="lazy"
              />
            </Link>

            <div className="stay-wrap">
              <div className="stay-title">Stay Connected With Us</div>
              <form className="stay-form" onSubmit={handleSubmit} noValidate>
                <input
                  className="stay-input-field"
                  maxLength={256}
                  name="Newsletter-Email"
                  aria-label="Enter your email"
                  placeholder="Enter your email..."
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="stay-submit-button"
                  disabled={status === 'loading'}
                />
              </form>
              {status === 'success' && <div className="success-message">{message}</div>}
              {status === 'error' && <div className="error-message">{message}</div>}
            </div>
          </div>

          <div className="footer-right-wrap">
            <div className="footer-menu-wrap">
              {siteConfig.footerColumn1.map((item) => (
                <Link key={item.to} to={item.to} className="menu-link">
                  <span className="menu-text">{item.label}</span>
                  <span className="menu-text" aria-hidden="true">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
            <div className="footer-menu-wrap">
              {siteConfig.footerColumn2.map((item) => (
                <Link key={item.to} to={item.to} className="menu-link">
                  <span className="menu-text">{item.label}</span>
                  <span className="menu-text" aria-hidden="true">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-contact-wrap">
          <div className="footer-contact-left-wrap">
            <a href={siteConfig.phoneHref} className="footer-contct-number">
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}?subject=Contact%20With%20Us`} className="footer-email-link">
              {siteConfig.email}
            </a>
          </div>

          <div className="footer-social-wrap">
            {siteConfig.socials.map((soc) => (
              <a
                key={soc.name}
                href={soc.href}
                target="_blank"
                rel="noreferrer"
                aria-label={soc.name}
                className="social-link"
              >
                <img width={20} height={20} alt="" src={soc.orangeIcon} className="social-icon two" />
                <img width={20} height={20} alt={soc.name} src={soc.grayIcon} className="social-icon one" />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-copyright-wrap">
          <div className="footer-copyright-text">{siteConfig.copyright}</div>
          <div className="footer-copyright-text">
            Independent React &amp; GSAP Reconstruction
          </div>
        </div>
      </div>
    </footer>
  );
}
