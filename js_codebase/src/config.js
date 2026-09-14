export const SITE = {
  name: "JobSecure",
  url: "https://www.jobsecure.co.in",
  phone: "9905530000",
  phoneDisplay: "+91 99055 30000",
  whatsapp: "919905530000",
  cashfree: {
    resumeFix: "https://payments.cashfree.com/forms/jobsecure",
    interviewCalls: "https://payments.cashfree.com/forms/jobsecure-pro",
    scheduling: "https://payments.cashfree.com/forms/jobsecure-premium",
  },
};

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi JobSecure, I want a quick verdict on my resume. I will send it here.";

export function whatsappHref(message = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function telHref() {
  return `tel:${SITE.phone}`;
}
