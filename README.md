# JobSecure

React + Vite site in `js_codebase/`. Live: https://www.jobsecure.co.in  
Deploy: GitHub Actions → GoDaddy cPanel FTP (`.github/workflows/deploy.yml`).

## First-sale product (interviews, not placements)

Primary sell is **₹1,999 Interview Scheduling** — hope, plus 1–2 real interviews via our HR network. ₹999 and ₹499 are secondary. Primary CTA is **Buy now → Cashfree premium**. WhatsApp is secondary.

| What | URL |
| --- | --- |
| Interview Scheduling landing | https://www.jobsecure.co.in/scheduling |
| Post-pay thank-you / intake | https://www.jobsecure.co.in/scheduling/thank-you |
| Buy now (Cashfree premium) | https://payments.cashfree.com/forms/jobsecure-premium |
| Homepage | https://www.jobsecure.co.in |

Checkout links live in `js_codebase/src/config.js`:

- Resume Fix / basic: `SITE.cashfree.resumeFix` (alias `SITE.cashfree.basic`) → `/forms/jobsecure-basic` (₹499)
- Interview Call Plan: `SITE.cashfree.interviewCalls` → `/forms/jobsecure-pro` (₹999)
- Interview Scheduling: `SITE.cashfree.scheduling` → `/forms/jobsecure-premium` (₹1,999)

The site is static. The thank-you form cannot store resumes on the server; submit opens WhatsApp with the intake fields so the candidate can attach the file.

## Cashfree redirect URL (merchant dashboard)

Forms are Active (`jobsecure-basic`, `jobsecure-pro`, `jobsecure-premium`). Cashfree hosted Payment Forms still do **not** read a return URL from this website.

Set **Redirect URL** on the `jobsecure-premium` form so payers land on intake:

1. Log in to the [Cashfree Merchant Dashboard](https://merchant.cashfree.com/).
2. **Payment Gateway → Payment Forms → All** → open `jobsecure-premium`.
3. Set **Redirect URL** to:

   `https://www.jobsecure.co.in/scheduling/thank-you`

4. Save.

Docs: [Payment Forms overview](https://www.cashfree.com/docs/payments/no-code/payment-forms/overview).

If Redirect URL is not available on that form, `/scheduling/thank-you` is still live — share it after payment (or from the scheduling page “Open intake” link). Optional: Cashfree may append `order_id`; the intake page shows a payment reference when those query params are present.

## Local build

```bash
cd js_codebase
npm ci
npm run dev
npm run build
```

SPA deep links (`/scheduling`, `/scheduling/thank-you`) are rewritten to `index.html` by `js_codebase/public/.htaccess` (copied into `dist/` on build).
