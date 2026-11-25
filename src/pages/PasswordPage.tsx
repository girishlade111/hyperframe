import { useState, type FormEvent } from 'react';
import { SiteLayout } from '../components/layout/SiteLayout';
import { usePageMeta } from '../components/common/usePageMeta';

export function PasswordPage() {
  usePageMeta('Protected Page - HyperFrame', 'Enter password to unlock protected HyperFrame resources.');

  const [password, setPassword] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);
  const [unlocked, setUnlocked] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!password.trim()) {
      setFeedback('Please enter a password.');
      return;
    }

    const endpoint = import.meta.env.VITE_PASSWORD_AUTH_ENDPOINT;
    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password }),
        });
        if (!res.ok) {
          setFeedback('Incorrect password. Please try again.');
          return;
        }
        setUnlocked(true);
        setFeedback('Access verified.');
      } catch {
        setFeedback('Authentication service unavailable.');
      }
      return;
    }

    // No hardcoded secret or fake client-side bypass: report server config needed.
    setFeedback(
      'Local preview mode: configure VITE_PASSWORD_AUTH_ENDPOINT for server-side verification of protected pages.'
    );
  }

  return (
    <SiteLayout headerTheme="dark" showContactMarquee={false}>
      <section className="password-form-block">
        <div className="password-wrap">
          <div className="password-icon-wrap">
            <img width={60} height={60} alt="Lock icon" src="/assets/images/errors/hf-lock-icon.png" />
          </div>
          <h1 className="password-title">Protected Page</h1>
          <p className="inner-details is-license">
            This page is protected. Please enter your access password to continue.
          </p>

          {!unlocked ? (
            <form onSubmit={handleSubmit} className="password-input-wrap" noValidate>
              <label htmlFor="hf-protected-password" className="visually-hidden">
                Password
              </label>
              <input
                id="hf-protected-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="password-input-field"
                autoComplete="current-password"
              />
              <button type="submit" className="password-submit-button">
                Submit Now
              </button>
              {feedback && (
                <p role="status" className="form-status-message" style={{ color: 'var(--gray-500)', fontSize: '14px' }}>
                  {feedback}
                </p>
              )}
            </form>
          ) : (
            <p role="status" style={{ marginTop: '24px', color: 'var(--balck-900)' }}>
              Protected view unlocked.
            </p>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
