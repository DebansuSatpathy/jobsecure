// EnrollmentSectionWithSubmit.jsx
import React, { useState } from "react";

export default function EnrollmentSectionWithSubmit() {
  // Replace with your deployed Apps Script Web App URL
  const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwlagGJyQFyeu_DD0dnL8lyYWsVhB_rdEos2YZDbU_wJZOpD0YT1PIBbvOmB4RJGxPvaA/exec";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const validate = () => {
    if (!name.trim()) return "Please enter your name.";
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) return "Please enter a valid email.";
    if (!phone.trim()) return "Please enter your phone number.";
    return null;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = { name, email, phone };

  try {
    const response = await fetch("https://docs.google.com/spreadsheets/d/1qHa4yUdECipAZ4Ci2T5C5HR45_Be_gqsvt21hUIp6Ss/edit?gid=0#gid=0", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    // Since no-cors prevents checking response status,
    // assume SUCCESS if no error thrown
    alert("Thank you for enrolling with us!");

    // Optional: clear fields
    setName("");
    setEmail("");
    setPhone("");

  } catch (error) {
    alert("Submission failed. Please call us at 99999999");
  }
};


  return (
    <section className="relative overflow-hidden bg-[#f9f6ef] py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left text (kept minimal here) */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-gray-700 mb-6">
            Fill the form and we'll begin your resume analysis.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-xl p-8 w-full">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Full Name*</label>
            <input value={name} onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full h-11 border border-gray-300 rounded-md px-3" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email*</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full h-11 border border-gray-300 rounded-md px-3" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone*</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)}
              className="mt-2 w-full h-11 border border-gray-300 rounded-md px-3" />
          </div>

          <button type="submit" className="w-full py-3 bg-green-600 text-white rounded-md">
            ENROLL NOW
          </button>

          {/* Feedback */}
          {status && status.type === "sending" && (
            <p className="mt-4 text-sm text-gray-600">{status.message}</p>
          )}
          {status && status.type === "success" && (
            <p className="mt-4 text-sm text-green-700">{status.message}</p>
          )}
          {status && status.type === "error" && (
            <p className="mt-4 text-sm text-red-600">{status.message}</p>
          )}
        </form>
      </div>
    </section>
  );
}
