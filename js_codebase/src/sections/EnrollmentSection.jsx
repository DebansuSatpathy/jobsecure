import React, { useRef, useState } from "react";
import { IndianRupee } from "lucide-react";

export default function EnrollmentSection() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const fd = new FormData(formRef.current);
    const full_name = fd.get("full_name")?.trim() || "";
    const email = fd.get("email")?.trim() || "";
    const phone = fd.get("phone")?.trim() || "";

    if (!full_name) newErrors.full_name = "Full name is required";
    else if (full_name.length < 3) newErrors.full_name = "Name must be at least 3 characters";
    else if (full_name.length > 100) newErrors.full_name = "Name must not exceed 100 characters";

    if (!email) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Please enter a valid email";

    if (!phone) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(phone)) newErrors.phone = "Phone must be 10 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1000));
      setErrors({});
      alert("Enrollment submitted — we'll contact you shortly.");
      formRef.current.reset();
    } catch {
      alert("Failed to send. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#f9f6ef] dark:bg-gray-900 py-20 transition-colors">
      
      {/* Background Shape */}
      <div className="absolute right-0 top-0 h-full w-[55%] bg-[#f6f2e7] dark:bg-gray-800 rounded-l-[200px] transition-colors"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold leading-tight text-gray-900 dark:text-gray-100">
            Ready to Transform Your Career?
            <br /> Start Your JobSecure Journey
            <br /> Today.
          </h2>

          <div className="w-14 h-[3px] bg-green-500 mt-4 mb-6"></div>

          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Get a professionally rewritten resume, job search strategy, and
            interview support — all in one place.
          </p>

          <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
            We’ll reach out immediately after your enrollment and begin your
            resume analysis. This feels like professional onboarding, not a
            loan form.
          </p>
        </div>

        {/* FORM CARD */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 w-full transition-colors"
        >
          {/* Full Name */}
          <div className="mb-5">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Full Name*
            </label>
            <input
              name="full_name"
              type="text"
              className={`mt-2 w-full h-11 rounded-md px-3 bg-white dark:bg-gray-900 
              text-gray-900 dark:text-gray-100 border focus:outline-none
              ${errors.full_name ? "border-red-500" : "border-gray-300 dark:border-gray-700"}`}
            />
            {errors.full_name && (
              <p className="text-red-500 text-xs mt-1">{errors.full_name}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Email*
            </label>
            <input
              name="email"
              type="email"
              className={`mt-2 w-full h-11 rounded-md px-3 bg-white dark:bg-gray-900
              text-gray-900 dark:text-gray-100 border focus:outline-none
              ${errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-700"}`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Phone*
            </label>

            <div className="flex items-center mt-2 border border-gray-300 dark:border-gray-700 rounded-md overflow-hidden bg-white dark:bg-gray-900">
              <div className="px-2 border-r border-gray-300 dark:border-gray-700">
                <img src="https://flagcdn.com/w20/in.png" alt="India" className="h-4" />
              </div>

              <div className="px-3 py-[10px] text-gray-600 dark:text-gray-400 border-r border-gray-300 dark:border-gray-700 text-sm">
                +91
              </div>

              <input
                name="phone"
                type="tel"
                placeholder="1234567890"
                className="w-full h-11 px-3 bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none"
              />
            </div>

            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#25c684] hover:bg-[#1fad70] text-white font-semibold rounded-md disabled:opacity-60 transition"
          >
            {loading ? "SENDING..." : "ENROLL NOW"}
          </button>
        </form>
      </div>
    </section>
  );
}
