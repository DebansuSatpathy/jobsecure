import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappHref } from "../config";

export default function WhatsAppSection() {
  return (
    <section className="hidden md:block w-full bg-[#e8fff0] py-14">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Prefer to talk before you pay?
          </h2>
          <p className="text-gray-600 mt-2">
            Send the resume. We’ll say which plan fits — or if Resume Fix is enough.
          </p>
        </div>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2"
        >
          <FaWhatsapp className="text-xl" />
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}
