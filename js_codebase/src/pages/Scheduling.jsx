import React from "react";
import { CheckCircle, CalendarCheck } from "lucide-react";
import { Link } from "react-router-dom";
import heroMan from "../assets/man-pic-hireright.jpg";
import {
  SITE,
  SCHEDULING_WHATSAPP_MESSAGE,
  whatsappHref,
} from "../config";

const included = [
  "We book 1–2 real interview slots through our HR network within 90 days",
  "We apply and follow up with recruiters for you",
  "ATS resume rewrite + LinkedIn, gap/switch story, and question pack",
  "1 live mock interview (20–30 min) before a real round",
  "Priority WhatsApp and phone when a recruiter is waiting",
];

const steps = [
  {
    when: "Today",
    title: "Pay ₹1,999",
    desc: "Buy Interview Scheduling. This is interviews — not a placement package.",
  },
  {
    when: "Right after pay",
    title: "Send your details",
    desc: "Name, WhatsApp, email, role, city, and resume so we can start booking.",
  },
  {
    when: "Days 1–14",
    title: "Rewrite and aim",
    desc: "Resume, LinkedIn, and a focused apply list while we tap the HR network.",
  },
  {
    when: "Within 90 days",
    title: "1–2 interviews booked",
    desc: "We coordinate slots. You confirm the date and attend. Offers still come from employers.",
  },
];

export default function Scheduling() {
  return (
    <div className="w-full pb-16 md:pb-0">
      <section className="w-full bg-[#FAFAF8] py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold tracking-wide text-green-800 uppercase">
              Interview Scheduling · ₹1,999 · 90 days
            </p>

            <h1 className="text-4xl lg:text-[3.15rem] font-semibold leading-tight text-gray-900">
              We book 1–2 real interviews via our HR network in 90 days.
            </h1>

            <p className="text-lg text-gray-700 max-w-xl">
              You pay for scheduled interviews — not a job offer, not a
              placement. We chase recruiters, lock 1–2 real slots, and get you
              to the call.
            </p>

            <div className="rounded-xl border border-gray-200 bg-white p-5 max-w-md">
              <p className="text-sm text-gray-600">Interview Scheduling</p>
              <p className="mt-1 text-4xl font-bold text-gray-900">₹1,999</p>
              <p className="text-sm text-gray-600">one-time · 90 days of scheduling support</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href={SITE.cashfree.scheduling} className="btn-primary sm:w-auto">
                Buy now — ₹1,999
              </a>
              <a
                href={whatsappHref(SCHEDULING_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary sm:w-auto"
              >
                WhatsApp us first
              </a>
            </div>
            <p className="text-sm text-gray-500">
              After you pay, fill the short intake so we can start.{" "}
              <Link
                to={SITE.paths.schedulingThankYou}
                className="text-green-800 font-medium underline underline-offset-2"
              >
                Open intake
              </Link>
            </p>
          </div>

          <div className="relative hidden md:flex justify-center">
            <div className="absolute inset-0 -z-10 w-[90%] h-[90%] bg-[#EDE5D4] rounded-[60px] rotate-6" />
            <img
              src={heroMan}
              alt="Job seeker preparing for interviews with JobSecure"
              width={720}
              height={900}
              className="w-[85%] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-start gap-4 max-w-2xl mb-10">
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
              <CalendarCheck className="w-6 h-6 text-green-800" />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
                What’s included
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Interviews we book. Not a guaranteed offer.
              </p>
            </div>
          </div>

          <ul className="grid sm:grid-cols-2 gap-4 max-w-4xl">
            {included.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-[#FAFAF8] p-5 text-gray-800"
              >
                <CheckCircle className="w-6 h-6 text-green-700 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
            How the 90 days work
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <p className="text-sm font-semibold text-green-800">
                  {index + 1}. {step.when}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Interviews, not placements
          </h2>
          <div className="mt-8 space-y-5 text-gray-700 leading-relaxed">
            <p>
              <strong className="text-gray-900">We book 1–2 interview slots</strong>{" "}
              through our HR network within 90 days. You need to reply, confirm
              the date, and attend.
            </p>
            <p>
              <strong className="text-gray-900">We do not sell a job.</strong> An
              offer, salary hike, or “placement in 90 days” is not part of this
              product.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f9f6ef]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
            Ready to get interviews on the calendar?
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            ₹1,999. We book 1–2 real interviews via our HR network in 90 days.
          </p>
          <a href={SITE.cashfree.scheduling} className="btn-primary mt-8 sm:w-auto mx-auto">
            Buy now — ₹1,999
          </a>
          <p className="mt-4">
            <a
              href={whatsappHref(SCHEDULING_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-800 font-medium underline underline-offset-2"
            >
              Or message us on WhatsApp
            </a>
          </p>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 w-full bg-white shadow-2xl border-t border-gray-200 flex justify-between px-4 py-3 md:hidden z-50">
        <a
          href={SITE.cashfree.scheduling}
          className="flex items-center justify-center bg-green-700 hover:bg-green-800 text-white px-4 py-2.5 rounded-full w-[48%] text-sm font-semibold"
        >
          Buy now
        </a>
        <a
          href={whatsappHref(SCHEDULING_WHATSAPP_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-gray-900 hover:bg-black text-white px-4 py-2.5 rounded-full w-[48%] text-sm font-semibold"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
