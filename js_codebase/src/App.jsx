import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";

import Hero from "./sections/Hero";
import Trusted from "./sections/Trusted";
import Features from "./sections/Features";
import Workflow from "./sections/Workflow";
import Testimonials from "./sections/Testimonials";
import PricingSection from "./sections/PricingSection";
import Guarantee from "./sections/Guarantee";
import FAQ from "./sections/FAQ";
import FinalCTA from "./sections/FinalCTA";
import CompanySection from "./sections/Companysection";
import StickyContactBar from "./sections/StickyContactBar";
import WhatsAppSection from "./sections/WhatsAppSection";
import ScrollToTop from "./sections/ScrollToTop";

import Reviews from "./pages/Reviews";
import OurStory from "./pages/OurStory";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Refund from "./pages/Refund";
import Scheduling from "./pages/Scheduling";
import SchedulingThankYou from "./pages/SchedulingThankYou";

function Landing() {
  return (
    <div className="w-full pb-16 md:pb-0">
      <Hero />
      <Trusted />
      <Features />
      <Workflow />
      <Testimonials />
      <PricingSection />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <StickyContactBar />
      <WhatsAppSection />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/scheduling" element={<Scheduling />} />
          <Route path="/scheduling/thank-you" element={<SchedulingThankYou />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/awards" element={<Navigate to="/" replace />} />
          <Route path="/team" element={<Navigate to="/our-story" replace />} />
          <Route path="/careers" element={<Navigate to="/" replace />} />
          <Route path="/careers/:id" element={<Navigate to="/" replace />} />
          <Route path="/meet-the-experts" element={<Navigate to="/our-story" replace />} />
          <Route path="/join-us" element={<Navigate to="/" replace />} />
        </Routes>
        <CompanySection />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
