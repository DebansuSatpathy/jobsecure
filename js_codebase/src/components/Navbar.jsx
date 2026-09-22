import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import { SITE, SCHEDULING_WHATSAPP_MESSAGE, whatsappHref } from "../config";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [shrink, setShrink] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <header
        className={`sticky top-0 z-50 bg-[#0f0f0f]/95 backdrop-blur-md shadow-md transition-all duration-300 ${
          shrink ? "py-2" : "py-3 md:py-4"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" onClick={() => setOpen(false)}>
            <img
              src={logo}
              alt="JobSecure"
              className={`transition-all duration-300 h-9 md:h-14 ${shrink ? "md:h-10" : ""}`}
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>
            <Link to="/#how-it-works" className={plainNav}>
              How it works
            </Link>
            <Link to="/#plans" className={plainNav}>
              Plans
            </Link>
            <NavLink to="/scheduling" className={navClass}>
              Scheduling
            </NavLink>
            <NavLink to="/reviews" className={navClass}>
              Reviews
            </NavLink>
            <Link to="/#faq" className={plainNav}>
              FAQ
            </Link>
            <a href={SITE.cashfree.scheduling} className="btn-primary !w-auto !py-2.5 !px-5 !text-base">
              Buy now
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-gray-100"
            aria-label="Open menu"
          >
            ☰
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-[75%] bg-[#0f0f0f] z-50 p-6 space-y-4"
          >
            <NavLink to="/" onClick={() => setOpen(false)} className={mobileNav}>
              Home
            </NavLink>
            <Link to="/#how-it-works" onClick={() => setOpen(false)} className={mobileNav}>
              How it works
            </Link>
            <Link to="/#plans" onClick={() => setOpen(false)} className={mobileNav}>
              Plans
            </Link>
            <NavLink to="/scheduling" onClick={() => setOpen(false)} className={mobileNav}>
              Scheduling
            </NavLink>
            <NavLink to="/reviews" onClick={() => setOpen(false)} className={mobileNav}>
              Reviews
            </NavLink>
            <Link to="/#faq" onClick={() => setOpen(false)} className={mobileNav}>
              FAQ
            </Link>
            <a href={SITE.cashfree.scheduling} onClick={() => setOpen(false)} className="btn-primary mt-4">
              Buy now — ₹1,999
            </a>
            <a
              href={whatsappHref(SCHEDULING_WHATSAPP_MESSAGE)}
              onClick={() => setOpen(false)}
              className="btn-secondary mt-2"
            >
              WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const navClass = ({ isActive }) =>
  `relative font-medium transition-colors duration-300 text-gray-100 hover:text-green-400 ${
    isActive ? "text-green-400" : ""
  }`;

const plainNav = "font-medium text-gray-100 hover:text-green-400 transition-colors";

const mobileNav = "block py-2 text-gray-100 hover:text-green-400";

export default Navbar;
