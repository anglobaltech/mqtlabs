"use client";

import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

export default function GlobalPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const firstTimerRef = useRef(null);
  const repeatTimerRef = useRef(null);

  // Check if form was already submitted in this session
  useEffect(() => {
    const submitted = sessionStorage.getItem("popupSubmitted");
    if (submitted === "true") {
      setHasSubmitted(true);
    }
  }, []);

  // Show popup after 10 seconds
  useEffect(() => {
    if (hasSubmitted) return;

    firstTimerRef.current = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    repeatTimerRef.current = setInterval(() => {
      if (!hasSubmitted) {
        setIsOpen((prev) => (!prev ? true : prev));
      }
    }, 120000);

    return () => {
      if (firstTimerRef.current) clearTimeout(firstTimerRef.current);
      if (repeatTimerRef.current) clearInterval(repeatTimerRef.current);
    };
  }, [hasSubmitted]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "phone" ? value.replace(/\D/g, "") : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Phone must be 10 digits";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "Popup Enquiry Form",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setHasSubmitted(true);
        sessionStorage.setItem("popupSubmitted", "true");

        setTimeout(() => {
          setIsOpen(false);
          setStatus("");
          setFormData({ fullName: "", email: "", phone: "", message: "" });
        }, 1500);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  if (!isOpen || hasSubmitted) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget && status !== "loading") {
          setIsOpen(false);
        }
      }}
    >
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition p-1"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900">
          Get in Touch
        </h3>
        <p className="text-sm text-gray-500 mt-1 mb-5">
          Fill the form below and our testing team will contact you.
        </p>

        {/* Success Alert */}
        {status === "success" && (
          <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-lg mb-4 text-center font-medium">
            Enquiry sent successfully! We will connect soon.
          </div>
        )}

        {/* Error Alert */}
        {status === "error" && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg mb-4 text-center">
            Something went wrong. Please try again.
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name *"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3.5 py-2.5 text-sm outline-none transition ${
                errors.fullName
                  ? "border-red-400 focus:border-red-500"
                  : "border-gray-300 focus:border-[#05526e]"
              }`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3.5 py-2.5 text-sm outline-none transition ${
                errors.email
                  ? "border-red-400 focus:border-red-500"
                  : "border-gray-300 focus:border-[#05526e]"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="10-Digit Phone Number *"
              maxLength={10}
              value={formData.phone}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3.5 py-2.5 text-sm outline-none transition ${
                errors.phone
                  ? "border-red-400 focus:border-red-500"
                  : "border-gray-300 focus:border-[#05526e]"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Tell us which testing service you need... *"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3.5 py-2.5 text-sm outline-none transition resize-none ${
                errors.message
                  ? "border-red-400 focus:border-red-500"
                  : "border-gray-300 focus:border-[#05526e]"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className={`w-full py-2.5 rounded-lg font-medium text-sm text-white transition ${
              status === "loading"
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#05526e] hover:bg-[#043e53]"
            }`}
          >
            {status === "loading" ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}
