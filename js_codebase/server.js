require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

/* =========================
   BASIC HEALTH CHECK
========================= */
app.get('/', (req, res) => {
  res.send('Enrollment & Payment server running');
});

/* =========================
   EXISTING ENROLL ENDPOINT
   (UNCHANGED)
========================= */
app.post('/enroll', async (req, res) => {
  const { full_name, email, phone } = req.body || {};

  const validateName = (name) => {
    if (!name) return "Full name is required";
    if (name.length < 3) return "Name must be at least 3 characters";
    if (name.length > 100) return "Name must not exceed 100 characters";
    return null;
  };

  const validateEmail = (em) => {
    if (!em) return "Email is required";
    if (!/^\S+@\S+\.\S+$/.test(em)) return "Invalid email format";
    return null;
  };

  const validatePhone = (ph) => {
    if (!ph) return "Phone is required";
    if (!/^\d{10}$/.test(ph)) return "Phone must be exactly 10 digits";
    return null;
  };

  const nameErr = validateName(full_name?.trim());
  const emailErr = validateEmail(email?.trim());
  const phoneErr = validatePhone(phone?.trim());

  if (nameErr || emailErr || phoneErr) {
    return res.status(400).json({
      error: nameErr || emailErr || phoneErr,
      details: { nameErr, emailErr, phoneErr },
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toEmail = process.env.TO_EMAIL || process.env.SMTP_USER;
    const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER;

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      subject: `New enrollment: ${full_name}`,
      text: `Name: ${full_name}\nEmail: ${email}\nPhone: ${phone}`,
    });

    await transporter.sendMail({
      from: fromEmail,
      to: email,
      subject: 'Enrollment Confirmation - JobSecure',
      text: `Hi ${full_name}, thank you for enrolling with JobSecure!`,
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error('Email error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
});

/* =========================
   CASHFREE: CREATE ORDER
========================= */
app.post('/create-payment-order', async (req, res) => {
  const { amount, name, email, phone } = req.body || {};

  if (!amount || !name || !email || !phone) {
    return res.status(400).json({ error: 'Missing payment details' });
  }

  try {
    const response = await axios.post(
      'https://sandbox.cashfree.com/pg/orders',
      {
        order_id: `order_${Date.now()}`,
        order_amount: amount,
        order_currency: 'INR',
        customer_details: {
          customer_id: `cust_${Date.now()}`,
          customer_name: name,
          customer_email: email,
          customer_phone: phone,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-version': '2022-09-01',
          'x-client-id': process.env.CASHFREE_APP_ID,
          'x-client-secret': process.env.CASHFREE_SECRET_KEY,
        },
      }
    );

    return res.json({
      paymentSessionId: response.data.payment_session_id,
      orderId: response.data.order_id,
    });
  } catch (err) {
    console.error('Cashfree error:', err.response?.data || err.message);
    return res.status(500).json({ error: 'Payment order creation failed' });
  }
});

/* =========================
   SERVER START
========================= */
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
