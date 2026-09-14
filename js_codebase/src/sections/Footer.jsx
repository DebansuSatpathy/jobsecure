import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-center py-6 bg-gray-900 text-white text-sm">
      <p>© {new Date().getFullYear()} JobSecure. All rights reserved.</p>
      <div className="mt-2 flex justify-center gap-4 text-gray-300">
        <Link to="/privacy" className="hover:text-white">
          Privacy
        </Link>
        <Link to="/terms" className="hover:text-white">
          Terms
        </Link>
        <Link to="/refund" className="hover:text-white">
          Refunds
        </Link>
      </div>
    </footer>
  );
}
