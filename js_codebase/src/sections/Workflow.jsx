import React from "react";
import { whatsappHref } from "../config";

export default function Workflow() {
  const steps = [
    {
      when: "Day 0",
      title: "Send your resume",
      desc: "Pay a plan or message us on WhatsApp. We start with your current CV and target role.",
    },
    {
      when: "Day 1–2",
      title: "Get the rewrite",
      desc: "ATS resume draft in 24–48 hours. Higher plans include LinkedIn and a second format.",
    },
    {
      when: "Week 1",
      title: "Aim the job search",
      desc: "On Interview Call and above: target titles, portals, and a focused apply list.",
    },
    {
      when: "Week 2+",
      title: "Prep and schedule",
      desc: "Question packs and mock practice. On the top plan, we follow up and book interview slots.",
    },
  ];

  return (
    <section id="how-it-works" className="scroll-mt-24 pt-8 pb-20 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
          What the first 14 days look like
        </h2>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl">
          No mystery onboarding. You know what happens after you pay or send the resume.
        </p>

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

        <a href={whatsappHref()} className="btn-primary mt-10 sm:w-auto">
          Send resume on WhatsApp
        </a>
      </div>
    </section>
  );
}
