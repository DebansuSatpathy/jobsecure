# JobSecure

React + Vite site in `js_codebase/`. Live: https://www.jobsecure.co.in  
Deploy: GitHub Actions → GoDaddy cPanel FTP (`.github/workflows/deploy.yml`).

## First-sale product (interviews, not placements)

| What | URL |
| --- | --- |
| Interview Scheduling landing | https://www.jobsecure.co.in/scheduling |
| Post-pay thank-you / intake | https://www.jobsecure.co.in/scheduling/thank-you |
| Buy now (Cashfree premium) | https://payments.cashfree.com/forms/jobsecure-premium |
| Homepage | https://www.jobsecure.co.in |

Primary CTA everywhere for this product is **Buy now → Cashfree premium**. WhatsApp is secondary.

Checkout links live in `js_codebase/src/config.js`:

- Resume Fix: `SITE.cashfree.resumeFix` → `/forms/jobsecure`
- Interview Call Plan: `SITE.cashfree.interviewCalls` → `/forms/jobsecure-pro`
- Interview Scheduling: `SITE.cashfree.scheduling` → `/forms/jobsecure-premium`

The site is static. The thank-you form cannot store resumes on the server; submit opens WhatsApp with the intake fields so the candidate can attach the file.

## Cashfree merchant dashboard (required)

The site Buy now button already points at `https://payments.cashfree.com/forms/jobsecure-premium`. Cashfree hosted Payment Forms do **not** read a return URL from this website.

### 1. Publish the premium form

The personalised URL slug must exist. If Cashfree shows “No request found with code jobsecure-premium”, create or publish a Payment Form:

1. Log in to the [Cashfree Merchant Dashboard](https://merchant.cashfree.com/).
2. **Payment Gateway → Payment Forms → All → Create a Payment Form** (or open the existing premium form).
3. Amount **₹1999**, payment for **Interview Scheduling**.
4. Set **Personalised URL** to `jobsecure-premium`.
5. Save so `https://payments.cashfree.com/forms/jobsecure-premium` loads the live form.

(The existing `jobsecure` and `jobsecure-pro` forms can stay as they are.)

### 2. Redirect URL after pay

Set this so payers land on intake automatically:

1. Open the `jobsecure-premium` form.
2. In form details, set **Redirect URL** to:

   `https://www.jobsecure.co.in/scheduling/thank-you`

3. Save / update the form.

Docs: [Payment Forms overview](https://www.cashfree.com/docs/payments/no-code/payment-forms/overview) (Redirect URL is optional on create/edit).

If the dashboard form has no Redirect URL field, the thank-you page is still live at `/scheduling/thank-you` — share that link after payment (or from the scheduling page “Open intake” link).

Optional: Cashfree may append `order_id` (or similar) to the redirect. The intake page displays a payment reference when those query params are present.

## Local build

```bash
cd js_codebase
npm ci
npm run dev
npm run build
```

SPA deep links (`/scheduling`, `/scheduling/thank-you`) are rewritten to `index.html` by `js_codebase/public/.htaccess` (copied into `dist/` on build).
