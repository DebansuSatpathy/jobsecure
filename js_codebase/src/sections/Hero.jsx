import React from "react";
import { CheckCircle } from "lucide-react";
import heroMan from "../assets/man-pic-hireright.jpg";
import { SITE, SCHEDULING_WHATSAPP_MESSAGE, whatsappHref } from "../config";

export default function Hero() {
  return (
    <section className="w-full bg-[#FAFAF8] py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold tracking-wide text-green-800 uppercase">
            Resume rewrite · Job search · Interview scheduling
          </p>

          <h1 className="text-4xl lg:text-[3.15rem] font-semibold leading-tight text-gray-900">
            Get interview calls — not another ignored application.
          </h1>

          <p className="text-lg text-gray-700 max-w-xl">
            Built for freshers, career-gap candidates, and early professionals
            who are tired of applying into silence. We fix the resume, then we
            help you get and schedule real interview calls.
          </p>

          <ul className="space-y-3 text-base md:text-lg text-gray-800">
            {[
              "ATS resume rewrite in 24–48 hours",
              "A clear job-search plan for your target roles",
              "Interview prep — and scheduling on the hands-on plan",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-700 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

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
              WhatsApp us
            </a>
          </div>
          <p className="text-sm text-gray-500">
            Interview Scheduling: we book 1–2 real interviews in 90 days.{" "}
            <a href="#plans" className="text-green-800 font-medium underline underline-offset-2">
              See plans
            </a>
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
  );
}
