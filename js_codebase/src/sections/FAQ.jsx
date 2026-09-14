import React, { useState } from "react";

const faqs = [
  {
    q: "Will I get a job if I pay?",
    a: "No plan sells a job offer. We sell a better resume, a focused search, interview prep, and — on the top plan — scheduling support. Offers still come from employers.",
  },
  {
    q: "What happens in the first 48 hours?",
    a: "You send your current resume and target role. We rewrite the resume and send PDF + Word. Higher plans continue into LinkedIn and the apply list in week 1.",
  },
  {
    q: "Is this Naukri or a job portal?",
    a: "No. We are a career-support studio. We do not list jobs or replace Naukri/LinkedIn. We make you easier to shortlist and help you run the search.",
  },
  {
    q: "I have a career gap. Can you still help?",
    a: "Yes. Interview Call Plan and above include a written gap or switch story and how to say it in HR rounds.",
  },
  {
    q: "I’m a fresher / non-IT switcher. Is this only for IT?",
    a: "Most clients are 0–4 years, including freshers and non-IT to IT. Resume Fix works for any role you name. Say the role on WhatsApp so we don’t guess.",
  },
  {
    q: "What do you need from me?",
    a: "A current resume (even a rough one), target role, and replies on WhatsApp. Scheduling only works if you confirm slots and attend.",
  },
  {
    q: "Can I get a refund?",
    a: "Resume work that is already delivered is not refunded. If we miss the 24–48 hour rewrite window without cause, we finish the work at no extra charge. See the Refund page for the full note.",
  },
  {
    q: "Why isn’t everything in ₹499?",
    a: "₹499 is the document. Job-search coaching and scheduling take ongoing time. Putting them in the cheapest plan made the other plans look fake — so we split the outcomes.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-20 bg-[#FAFAF8]">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">Questions people ask before paying</h2>
        <div className="mt-10 divide-y divide-gray-200 border border-gray-200 rounded-xl bg-white">
          {faqs.map((item, index) => (
            <div key={item.q}>
              <button
                type="button"
                className="w-full text-left px-5 py-4 font-medium text-gray-900 flex justify-between gap-4"
                onClick={() => setOpen(open === index ? -1 : index)}
                aria-expanded={open === index}
              >
                {item.q}
                <span className="text-gray-400">{open === index ? "–" : "+"}</span>
              </button>
              {open === index && (
                <p className="px-5 pb-4 text-gray-600 leading-relaxed">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
