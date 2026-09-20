import React from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE } from "../config";

export default function PricingSection() {
  const plans = [
    {
      title: "Resume Fix",
      price: "₹499",
      duration: "one-time",
      button: "Start Resume Fix — ₹499",
      link: SITE.cashfree.resumeFix,
      intro: "For when the resume is the problem.",
      features: [
        {
          label: "ATS resume rewrite for 1 target role",
          hint: "We rewrite your resume for one job title so software and recruiters can read it.",
        },
        {
          label: "PDF + Word files",
          hint: "Both formats, ready to upload on Naukri, LinkedIn, or email.",
        },
        {
          label: "LinkedIn headline rewrite",
          hint: "The one-line title under your name — rewritten so recruiters can find you.",
        },
        {
          label: "Delivery in 24–48 hours",
          hint: "First draft within two days of receiving your current resume.",
        },
        {
          label: "7-day WhatsApp for the resume",
          hint: "One week of chat only about the resume — not job search or interviews.",
        },
        {
          label: "One job title, one rewrite",
          hint: "If you later want a second role (for example IT and support), that is a new resume.",
        },
      ],
      highlighted: false,
    },
    {
      title: "Interview Call Plan",
      price: "₹999",
      duration: "/60 days",
      button: "Get interview support — ₹999",
      link: SITE.cashfree.interviewCalls,
      bestSeller: true,
      intro: "For when you have a resume and still get no calls.",
      features: [
        {
          label: "Everything in Resume Fix, plus a second format",
          hint: "Same rewrite, plus a second file layout you can use on different portals.",
        },
        {
          label: "Full LinkedIn rewrite",
          hint: "About section, skills, and keywords — not only the headline.",
        },
        {
          label: "Gap or switch story",
          hint: "A short written answer for when HR asks about a break or a career change.",
        },
        {
          label: "Weekly WhatsApp check-in for 60 days",
          hint: "We message you each week on what to apply to and how the week went.",
        },
        {
          label: "HR + basic technical question pack",
          hint: "Common interview questions and suggested answers for your role.",
        },
        {
          label: "Help with applications and follow-ups",
          hint: "You apply. We tell you what to send, where, and when to follow up.",
        },
      ],
      highlighted: true,
    },
    {
      title: "Interview Scheduling",
      price: "₹1,999",
      duration: "/90 days",
      button: "We schedule interviews — ₹1,999",
      link: SITE.cashfree.scheduling,
      mostValued: true,
      intro: "For when you want someone to push the process.",
      features: [
        {
          label: "Everything in Interview Call Plan",
          hint: "Resume, LinkedIn, gap story, question pack, and 60-day search help — then we go further.",
        },
        {
          label: "We apply and follow up for you",
          hint: "We send applications and chase recruiters instead of leaving it only to you.",
        },
        {
          label: "1–2 guaranteed scheduled interviews",
          hint: "We book 1–2 real interview slots through our HR network within 90 days.",
        },
        {
          label: "1 live mock interview (20–30 min)",
          hint: "A practice call with us before you sit a real one.",
        },
        {
          label: "Priority WhatsApp and phone",
          hint: "Faster replies, including phone, when a recruiter is waiting.",
        },
        {
          label: "90 days of scheduling support",
          hint: "We keep coordinating dates for three months, not a one-week burst.",
        },
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="plans" className="py-20 bg-[#eef2ff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
            Plans with a real step-up
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            ₹499 fixes the document. ₹999 aims the job search. ₹1,999 is us
            running scheduling with you — including 1–2 booked interviews.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative flex flex-col rounded-xl border p-7 bg-white h-full ${
                plan.highlighted
                  ? "border-green-700 shadow-lg"
                  : "border-gray-200"
              }`}
            >
              {plan.bestSeller && (
                <div className="absolute -top-3 right-5 bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most people start here
                </div>
              )}
              {plan.mostValued && (
                <div className="absolute -top-3 left-5 bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most hands-on
                </div>
              )}

              <h3 className="text-xl font-semibold text-gray-900">{plan.title}</h3>
              <p className="mt-2 text-sm text-gray-600 min-h-[40px]">{plan.intro}</p>

              <div className="mt-5">
                <p className="text-3xl font-bold text-gray-900">{plan.price}</p>
                <p className="text-gray-600 text-sm">{plan.duration}</p>
              </div>

              <a href={plan.link} className="btn-primary mt-6 min-h-[3.5rem] text-center leading-snug">
                {plan.title === "Interview Scheduling" ? "Buy now — ₹1,999" : plan.button}
              </a>
              {plan.title === "Interview Scheduling" && (
                <Link
                  to="/scheduling"
                  className="mt-2 block text-sm text-center text-green-800 font-medium underline underline-offset-2"
                >
                  What you get on this plan
                </Link>
              )}

              <p className="text-sm font-semibold mt-6 text-gray-900">What’s included</p>
              <ul className="mt-3 space-y-4 text-gray-700 text-sm flex-1">
                {plan.features.map((feature) => (
                  <li key={feature.label} className="flex gap-3">
                    <Check className="w-4 h-4 text-green-700 mt-0.5 shrink-0" strokeWidth={2.5} />
                    <span>
                      <span className="block text-gray-900">{feature.label}</span>
                      <span className="block mt-0.5 text-gray-500 leading-relaxed">
                        {feature.hint}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
