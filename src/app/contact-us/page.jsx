"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      setFormData({ ...formData, phone: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

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
      newErrors.message = "Please Explain which services are you interested.";
    } else if (formData.message.length < 1) {
      newErrors.message = "Please Explain which services are you interested.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-linear-to-r from-gray-900 to-blue-900 py-15">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Contact Us
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base">
            Reach out to us for testing services, technical queries, or general
            information.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* HOW WE CAN HELP - TOP */}
          <div className="mb-10 max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-center text-gray-900 mb-3 mt-1">
              How We Can Help
            </h3>
            <p className="text-gray-900 text-lg leading-relaxed mb-2">
              We assist manufacturers and suppliers with testing, compliance,
              and quality-related queries. Responses are provided during
              business hours.
            </p>
            <p className="text-gray-600 text-md leading-relaxed"></p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* LEFT - FORM */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Let's Connect
              </h2>
              <p className="text-gray-600 text-sm mb-5">
                Fill out the form and our team will contact you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-red-400"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-red-400"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={10}
                    placeholder="Phone Number"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-red-400"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us which service you are interested in..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-red-400"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-center mt-4">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={`w-fit px-6 py-2 text-white text-sm font-semibold cursor-pointer rounded-lg transition flex items-center justify-center gap-2
                ${
                    status === "loading"
                    ? "bg-red-300 cursor-not-allowed"
                    : "bg-red-400 hover:bg-red-500"
                }`}
                  >
                    {status === "loading" && (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    )}
                    {status === "loading" ? "Sending..." : "Submit Enquiry"}
                  </button>
                </div>

                {status === "success" && (
                  <div className="mt-3 bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm">
                    ✅ Your Enquiry Send Successfully. We will connect you soon.
                  </div>
                )}

                {status === "error" && (
                  <div className="mt-3 bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm">
                    ❌ Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>

            {/* RIGHT - CONTACT INFO */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Get In Touch
                </h2>
                <p className="text-gray-600 text-sm">
                  Reach out to us for testing services or technical inquiries.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-400" />
                  <a href="tel:+919971234474" className="text-gray-700 text-sm">
                    +91 99712 34474
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-indigo-400" />
                  <a
                    href="mailto:info@mqtlab.com"
                    className="text-gray-700 text-sm"
                  >
                    info@mqtlab.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <p className="text-gray-700 text-sm">
                   PLOT NO. 79, Sector 155, Noida, Gautam Buddha Nagar, Uttar Pradesh 201310, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
