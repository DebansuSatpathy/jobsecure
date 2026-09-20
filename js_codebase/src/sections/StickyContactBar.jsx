import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { SITE, SCHEDULING_WHATSAPP_MESSAGE, whatsappHref } from "../config";

export default function StickyContactBar() {
  return (
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
        className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white px-4 py-2.5 rounded-full w-[48%] text-sm font-semibold"
      >
        <FaWhatsapp size={18} />
        WhatsApp
      </a>
    </div>
  );
}
