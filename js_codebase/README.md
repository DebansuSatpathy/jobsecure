# HireReady Landing — Enrollment Email Setup

This project includes a small Express server that accepts enrollment form submissions and sends an email via SMTP.

Quick setup

1. Install frontend + server dependencies

```bash
npm install
npm install express nodemailer cors dotenv
npm install --save-dev nodemon
```

2. Copy environment example and fill values

```bash
cp .env.example .env
# Edit .env and provide real SMTP credentials and desired TO/FROM addresses
```

3. Run the server and frontend

```bash
# start the email server
npm run server

# or for development with auto-reload
npm run dev:server

# start the frontend (Vite)
npm run dev
```

4. Test

- Open the dev site in your browser and submit the enrollment form.
- The frontend posts to `http://localhost:4000/enroll` by default.

Files changed / created

- `src/sections/EnrollmentSection.jsx` — form posts JSON to the server endpoint.
- `server.js` — Express + Nodemailer endpoint: `POST /enroll`.
- `.env.example` — example SMTP vars.

Notes & production guidance

- Ensure `.env` is never committed with real credentials. Use secrets management for production.
- Use a transactional email provider (SendGrid, Mailgun, SES) for reliability and deliverability.
- Secure the endpoint before public use (rate-limit, CAPTCHA, authentication, input validation).
- When deploying, update the frontend POST URL from `http://localhost:4000/enroll` to your deployed server (or use a VITE_ env var to inject it at build time).

If you want, I can:
- add `VITE_API_URL` and read it from `EnrollmentSection.jsx`, or
- add basic rate-limiting and simple validation to `server.js`.
