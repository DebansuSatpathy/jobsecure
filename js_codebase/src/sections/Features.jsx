import React from "react";
import { FileSearch, Search, Mic, CalendarCheck } from "lucide-react";

export default function Features() {
  const pillars = [
    {
      icon: FileSearch,
      title: "Resume",
      desc: "We rewrite your resume so ATS software and recruiters can actually read your experience.",
    },
    {
      icon: Search,
      title: "Job search",
      desc: "We tell you which roles to target, where to apply, and how to follow up — instead of spraying every listing.",
    },
    {
      icon: Mic,
      title: "Interview prep",
      desc: "HR questions, gap or switch stories, and basic technical prompts so you walk in with a script, not panic.",
    },
    {
      icon: CalendarCheck,
      title: "Interview scheduling",
      desc: "On the hands-on plan, we chase and coordinate interview slots so you show up — we handle the back and forth.",
    },
  ];

  return (
    <section id="services" className="pt-20 pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
            What we actually do
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Four things. Not a vague “career transformation.”
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-7 rounded-xl border border-gray-200 bg-white"
            >
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                <Icon className="w-6 h-6 text-green-800" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
