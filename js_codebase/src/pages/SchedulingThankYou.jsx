import React, { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  SITE,
  SCHEDULING_WHATSAPP_MESSAGE,
  schedulingIntakeMessage,
  whatsappHref,
} from "../config";

const initial = {
  name: "",
  whatsapp: "",
  email: "",
  role: "",
  city: "",
};

function paymentRefFromParams(params) {
  return (
    params.get("order_id") ||
    params.get("orderId") ||
    params.get("cf_order_id") ||
    params.get("transaction_id") ||
    params.get("payment_id") ||
    ""
  );
}

export default function SchedulingThankYou() {
  const [params] = useSearchParams();
  const paymentRef = useMemo(() => paymentRefFromParams(params), [params]);
  const [form, setForm] = useState(initial);
  const [resumeFile, setResumeFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const field = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const validate = () => {
    const next = {};
    const name = form.name.trim();
    const whatsapp = form.whatsapp.replace(/\s+/g, "");
    const email = form.email.trim();
    const role = form.role.trim();
    const city = form.city.trim();

    if (!name) next.name = "Name is required";
    else if (name.length < 2) next.name = "Enter your full name";

    const digits = whatsapp.replace(/\D/g, "");
    if (!digits) next.whatsapp = "WhatsApp number is required";
    else if (digits.length < 10 || digits.length > 12)
      next.whatsapp = "Enter a 10-digit Indian mobile number";

    if (!email) next.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email";

    if (!role) next.role = "Target role is required";
    if (!city) next.city = "City is required";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const message = schedulingIntakeMessage({
      name: form.name.trim(),
      whatsapp: form.whatsapp.trim(),
      email: form.email.trim(),
      role: form.role.trim(),
      city: form.city.trim(),
      resumeFileName: resumeFile?.name,
      paymentRef,
    });

    // Static hosting cannot store files. Prefer sharing the resume from the
    // device; otherwise WhatsApp opens with details so the file can be attached.
    try {
      if (resumeFile && navigator.canShare?.({ files: [resumeFile] })) {
        await navigator.share({
          title: "JobSecure Interview Scheduling intake",
          text: message,
          files: [resumeFile],
        });
        setSent(true);
        return;
      }
    } catch (err) {
      if (err?.name === "AbortError") return;
    }

    window.location.href = whatsappHref(message);
    setSent(true);
  };

  return (
    <main className="bg-[#FAFAF8] py-14 md:py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-semibold tracking-wide text-green-800 uppercase">
          Interview Scheduling · intake
        </p>
        <h1 className="mt-3 text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
          Thanks — tell us who to book interviews for.
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          If you just paid ₹1,999, send these details so we can start. This
          page does not charge you again. Resumes cannot be stored on this
          static site — after you submit, WhatsApp opens so you can attach the
          file.
        </p>
        {paymentRef ? (
          <p className="mt-3 text-sm text-gray-600">
            Payment reference:{" "}
            <span className="font-medium text-gray-900">{paymentRef}</span>
          </p>
        ) : (
          <p className="mt-3 text-sm text-gray-600">
            Haven’t paid yet?{" "}
            <a href={SITE.cashfree.scheduling} className="text-green-800 font-medium underline underline-offset-2">
              Buy Interview Scheduling — ₹1,999
            </a>
          </p>
        )}

        {sent ? (
          <div className="mt-10 rounded-xl border border-green-200 bg-white p-8">
            <h2 className="text-xl font-semibold text-gray-900">Details ready to send</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              WhatsApp should open with your intake. Attach your resume in that
              chat if you have not already. If nothing opened, use the button
              below.
            </p>
            <a
              href={whatsappHref(
                schedulingIntakeMessage({
                  ...form,
                  resumeFileName: resumeFile?.name,
                  paymentRef,
                })
              )}
              className="btn-primary mt-6 sm:w-auto"
            >
              Open WhatsApp again
            </a>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 bg-white rounded-xl border border-gray-200 p-6 md:p-8 space-y-5"
          >
            <Field
              label="Name*"
              error={errors.name}
              value={form.name}
              onChange={field("name")}
              autoComplete="name"
            />
            <Field
              label="WhatsApp*"
              error={errors.whatsapp}
              value={form.whatsapp}
              onChange={field("whatsapp")}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="10-digit mobile"
            />
            <Field
              label="Email*"
              error={errors.email}
              value={form.email}
              onChange={field("email")}
              type="email"
              autoComplete="email"
            />
            <Field
              label="Target role*"
              error={errors.role}
              value={form.role}
              onChange={field("role")}
              placeholder="e.g. Java developer, HR executive"
            />
            <Field
              label="City*"
              error={errors.city}
              value={form.city}
              onChange={field("city")}
              autoComplete="address-level2"
            />

            <div>
              <label className="text-sm font-medium text-gray-700">
                Resume (PDF or Word)
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                className="mt-2 block w-full text-sm text-gray-700 file:mr-4 file:rounded-lg file:border-0 file:bg-green-700 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-green-800"
              />
              <p className="mt-2 text-sm text-gray-500">
                Upload is optional. If the file cannot be shared from this page,
                attach it in WhatsApp after submit — that is the fallback we use
                on static hosting.
              </p>
              {resumeFile && (
                <p className="mt-1 text-sm text-gray-800">
                  Selected: {resumeFile.name}
                </p>
              )}
            </div>

            <button type="submit" className="btn-primary">
              Send details on WhatsApp
            </button>
            <p className="text-sm text-gray-500 text-center">
              Prefer chat only?{" "}
              <a
                href={whatsappHref(SCHEDULING_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-800 font-medium underline underline-offset-2"
              >
                Message us without the form
              </a>
            </p>
          </form>
        )}

        <p className="mt-8 text-sm text-gray-500">
          <Link to={SITE.paths.scheduling} className="text-green-800 font-medium underline underline-offset-2">
            Back to Interview Scheduling
          </Link>
        </p>
      </div>
    </main>
  );
}

function Field({ label, error, ...inputProps }) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        {...inputProps}
        className={`mt-2 w-full h-11 rounded-md px-3 bg-white text-gray-900 border focus:outline-none focus:ring-2 focus:ring-green-700/30 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
