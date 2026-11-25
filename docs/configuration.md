# Runtime & Environment Configuration

All client environment variables use Vite's `VITE_` prefix and are documented in [`.env.example`](../.env.example).

| Variable | Required | Behavior When Unset |
|---|---|---|
| `VITE_CONTACT_ENDPOINT` | Optional | Contact form validates inputs via Zod and shows an honest local preview confirmation without claiming external email delivery. When set, sends a JSON `POST` payload (`fullName`, `company`, `email`, `message`, `consent`). |
| `VITE_NEWSLETTER_ENDPOINT` | Optional | Footer newsletter validates email format via Zod and reports local dev preview validation. When set, sends a JSON `POST` payload (`{ email }`). |
| `VITE_PASSWORD_AUTH_ENDPOINT` | Optional | `/401` / `/password` displays a protected page form and reports that `VITE_PASSWORD_AUTH_ENDPOINT` is needed for server-side verification rather than faking client-side auth. |

No API keys, server secrets, or database credentials exist in client code or `dist/`.
