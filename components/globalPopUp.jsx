"use client";
import { useState, useEffect } from "react";

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

  // check sessionStorage on mount
  useEffect(() => {
    // Dev testing: reset sessionStorage
    sessionStorage.removeItem("popupSubmitted"); 
    const submitted = sessionStorage.getItem("popupSubmitted");
    if (submitted === "true") {
      setHasSubmitted(true);
    }
  }, []);

  useEffect(() => {
    if (hasSubmitted) return;

    const firstTimer = setTimeout(() => {
      setIsOpen(true);
    }, 10000); // 10 sec

    const repeatTimer = setInterval(() => {
      setIsOpen(true);
    }, 120000); // 2 min

    return () => {
      clearTimeout(firstTimer);
      clearInterval(repeatTimer);
    };
  }, [hasSubmitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === "phone" ? value.replace(/\D/g, "") : value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit clicked!"); // ✅ Dev debug
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length !== 0) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Response:", data); // ✅ Dev debug

      if (data.success) {
        setStatus("success");
        setHasSubmitted(true);
        sessionStorage.setItem("popupSubmitted", "true"); 
        setFormData({ fullName: "", email: "", phone: "", message: "" });

        // Close popup after 2 sec
        setTimeout(() => setIsOpen(false), 2000);
        setTimeout(() => setStatus(""), 2000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error); // ✅ Dev debug
      setStatus("error");
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl">✕</button>

            <div className="text-center mb-3">
              <h1 className="text-2xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-blue-900 via-blue-500 to-indigo-600">
                Minu Quality Testing Lab
              </h1>
              <h2 className="text-lg font-bold text-gray-600 tracking-widest uppercase mt-1">Pvt. Ltd.</h2>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Get In Touch</h2>
            <p className="text-gray-600 mb-6 text-sm">Fill the form and our team will contact you shortly.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="fullName" placeholder="Full Name *" value={formData.fullName} onChange={handleChange} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none"/>
              {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}

              <input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none"/>
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

              <input type="tel" name="phone" placeholder="Phone Number *" maxLength={10} value={formData.phone} onChange={handleChange} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none"/>
              {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}

              <textarea name="message" placeholder="Your Message" rows="3" value={formData.message} onChange={handleChange} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none"/>
              {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}

              {status === "success" && <div className="bg-green-100 text-green-700 px-4 py-2 rounded text-sm text-center">✅ Your Enquiry Send Successfully. We will connect you soon.</div>}
              {status === "error" && <div className="bg-red-100 text-red-700 px-4 py-2 rounded text-sm text-center">❌ Something went wrong.</div>}

              <button type="submit" disabled={status === "loading"} className={`w-full py-3 rounded-lg font-semibold text-white transition ${status === "loading" ? "bg-red-300 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"}`}>{status === "loading" ? "Sending..." : "Submit Enquiry"}</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}