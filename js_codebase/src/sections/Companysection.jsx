import React from "react";
import { Link } from "react-router-dom";
import { SITE, whatsappHref } from "../config";

export default function CompanySection() {
  return (
    <footer className="bg-[#f4f4f2] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-12 md:grid-cols-3 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold text-gray-900">JobSecure</h3>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-sm mx-auto md:mx-0">
            Resume rewrite, job-search support, and interview scheduling for
            job seekers who want calls — not another ignored application.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900 mb-4">
            Site
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/#plans" className="footer-link">
                Plans
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="footer-link">
                Reviews
              </Link>
            </li>
            <li>
              <Link to="/our-story" className="footer-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="footer-link">
                Guides
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900 mb-4">
            Talk to us
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href={whatsappHref()} className="footer-link">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`tel:${SITE.phone}`} className="footer-link">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <Link to="/refund" className="footer-link">
                Refund policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
