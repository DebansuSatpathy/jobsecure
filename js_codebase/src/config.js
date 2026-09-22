export const SITE = {
  name: "JobSecure",
  url: "https://www.jobsecure.co.in",
  phone: "9905530000",
  phoneDisplay: "+91 99055 30000",
  whatsapp: "919905530000",
  cashfree: {
    resumeFix: "https://payments.cashfree.com/forms/jobsecure-basic",
    basic: "https://payments.cashfree.com/forms/jobsecure-basic",
    interviewCalls: "https://payments.cashfree.com/forms/jobsecure-pro",
    scheduling: "https://payments.cashfree.com/forms/jobsecure-premium",
  },
  paths: {
    scheduling: "/scheduling",
    schedulingThankYou: "/scheduling/thank-you",
  },
};

/** Public URL to set as Cashfree Payment Form Redirect URL for jobsecure-premium. */
export const SCHEDULING_THANK_YOU_URL = `${SITE.url}${SITE.paths.schedulingThankYou}`;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi JobSecure, I want a quick verdict on my resume. I will send it here.";

export const SCHEDULING_WHATSAPP_MESSAGE =
  "Hi JobSecure, I want Interview Scheduling (₹1,999) — book 1–2 real interviews via your HR network in 90 days.";

export function whatsappHref(message = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function telHref() {
  return `tel:${SITE.phone}`;
}

export function schedulingIntakeMessage({
  name,
  whatsapp,
  email,
  role,
  city,
  resumeFileName,
  paymentRef,
}) {
  const lines = [
    "Hi JobSecure, here is my Interview Scheduling intake (₹1,999).",
    `Name: ${name}`,
    `WhatsApp: ${whatsapp}`,
    `Email: ${email}`,
    `Role: ${role}`,
    `City: ${city}`,
  ];
  if (paymentRef) lines.push(`Payment reference: ${paymentRef}`);
  if (resumeFileName) {
    lines.push(
      `Resume file on my phone/computer: ${resumeFileName} — I will attach it in this chat.`
    );
  } else {
    lines.push("Resume: I will attach the file in this chat (PDF or Word).");
  }
  return lines.join("\n");
}
