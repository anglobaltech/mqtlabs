"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  // Handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone: only numbers allowed
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      setFormData({ ...formData, phone: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Validation Function
  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });

        setErrors({});

        setTimeout(() => {
          setStatus(null);
        }, 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Contact Us
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            Reach out to us for testing services, technical queries, or general
            information.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">

            {/* LEFT SIDE FORM */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Let's Connect
              </h2>
              <p className="text-gray-600 text-md mb-5">
                Fill out the form and our team will contact you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    minLength={4}
                    placeholder="Full Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-red-400"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-red-400"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={10}
                    placeholder="Phone Number"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-red-400"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-red-400"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full px-6 py-2.5 text-white text-sm font-semibold rounded-lg transition flex items-center justify-center gap-2
                    ${status === "loading"
                      ? "bg-red-300 cursor-not-allowed"
                      : "bg-red-400 hover:bg-red-500 cursor-pointer"
                    }`}
                >
                  {status === "loading" && (
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  )}
                  {status === "loading" ? "Sending..." : "Submit Enquiry"}
                </button>

                {/* Success / Error Message */}
                {status === "success" && (
                  <div className="mt-3 bg-green-100 text-green-700 px-4 py-3 rounded-lg text-sm">
                    ✅ Message sent successfully. Our team will contact you within 24 hours.
                  </div>
                )}

                {status === "error" && (
                  <div className="mt-3 bg-red-100 text-red-700 px-4 py-3 rounded-lg text-sm">
                    ❌ Sorry, something went wrong. Please try again.
                  </div>
                )}

              </form>
            </div>

            {/* RIGHT SIDE */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                How We Can Help
              </h3>
              <p className="text-gray-600 text-md leading-relaxed mb-3">
                We assist manufacturers and suppliers with testing, compliance,
                and quality-related queries.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Responses are provided during business hours...
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}