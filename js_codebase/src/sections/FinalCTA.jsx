import React from "react";
import { whatsappHref } from "../config";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-[#f9f6ef]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
          Send your current resume. We’ll tell you what’s blocking calls.
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          A short WhatsApp verdict — not a long form, and not a fake “enroll” button.
          If Resume Fix is enough, we’ll say so. If you need search or scheduling, we’ll say that too.
        </p>
        <a href={whatsappHref()} className="btn-primary mt-8 sm:w-auto mx-auto">
          Send resume on WhatsApp
        </a>
        <p className="mt-4">
          <a href="#plans" className="text-green-800 font-medium underline underline-offset-2">
            Or pick a plan and pay
          </a>
        </p>
      </div>
    </section>
  );
}
