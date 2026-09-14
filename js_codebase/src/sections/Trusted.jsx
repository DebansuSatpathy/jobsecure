import React from "react";
import { Check } from "lucide-react";

export default function Trusted() {
  const proofs = [
    { value: "24–48 hrs", label: "Resume rewrite delivery" },
    { value: "WhatsApp", label: "Human support, not a ticket queue" },
    { value: "0–4 years", label: "Freshers, gaps, and early switchers" },
  ];

  const audiences = [
    "Freshers who apply everywhere and still get no calls.",
    "Job seekers with a career gap who need a story HR will accept.",
    "Working professionals (0–4 years) updating resume and LinkedIn to switch.",
    "Non-IT to IT switchers who need the right roles, not every posting.",
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-4">
          {proofs.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-gray-200 bg-[#FAFAF8] py-6 px-4 text-center"
            >
              <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
              <p className="text-gray-600 mt-1 text-sm md:text-base">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl">
          <h2 className="text-3xl font-semibold text-gray-900">Who this is for</h2>
          <ul className="mt-6 space-y-4 text-gray-700">
            {audiences.map((item) => (
              <li key={item} className="flex gap-3">
                <Check className="text-green-700 w-5 h-5 mt-1 shrink-0" strokeWidth={2.5} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
