"use client";

import { useState } from "react";
import {
  User,
  Phone,
  Mail,
  LayoutGrid,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

export default function ConsultationBanner() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [leadId, setLeadId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const servicesList = [
    "Wood & Timber Testing",
    "Plywood & Panel Board Testing",
    "Water & Effluent Testing",
    "Furniture & Chair Testing",
    "Cement & Concrete Testing",
    "Soil & Geotechnical Testing",
    "Hinges & Hardware Testing",
    "Aggregates & Granular Testing",
    "Concrete Paver Block Testing",
    "Other Material Testing & Certification",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const numeric = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, phone: numeric }));
      if (errors.phone) setErrors((prev) => ({ ...prev, phone: null }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10-digit number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.service) {
      newErrors.service = "Please select a testing service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          message: `Testing Consultation & Quote Request for ${formData.service}`,
          source: "Footer Consultation Form",
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setLeadId(data.leadId || "");
        setFormData({ name: "", phone: "", email: "", service: "" });
        setErrors({});
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Failed to submit request.");
      }
    } catch (err) {
      console.error("Consultation submit error:", err);
      setStatus("error");
      setErrorMsg("Network error. Please try again or call us directly.");
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#043447] via-[#05526e] to-[#0a6485] py-9 sm:py-11 lg:py-12 text-white border-t border-white/20 border-b border-black/40 shadow-2xl">
      {/* Decorative Atmospheric Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#ff4d5a]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#38bdf8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-7 lg:gap-9 items-center">
          
          {/* Left Column: Headline, Copy & Compact Call Visual */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Top Light Red Accent Line & Tag */}
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-8 h-0.5 bg-[#ff4d5a] rounded-full shadow-[0_0_8px_rgba(255,77,90,0.6)]" />
              <span className="text-[11px] sm:text-xs font-bold text-[#ff949f] tracking-widest uppercase">
                MATERIAL TESTING SERVICES
              </span>
            </div>

            {/* Main Heading with Glowing Light Red Accent */}
            <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-black text-white tracking-tight leading-[1.15] mb-3">
              Request a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6070] via-[#ff7d8b] to-[#ff6070] drop-shadow-[0_2px_14px_rgba(255,96,112,0.4)]">
                Testing Consultation
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-teal-50/90 text-xs sm:text-[13.5px] leading-relaxed mb-5 max-w-md">
              Submit your test specimens to our laboratory testing facility in Noida. Get accurate test parameters, verified digital quality reports, and prompt turnaround for timber, panels, and construction materials.
            </p>

            {/* Compact 3D Phone Sphere Badge */}
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#ff4d5a]/30 to-[#ff6b77]/15 p-0.5 border border-[#ff4d5a]/50 shadow-[0_0_20px_rgba(255,77,90,0.3)] flex items-center justify-center shrink-0">
                <div className="w-full h-full rounded-full bg-[#022433] flex items-center justify-center">
                  <PhoneCall className="w-5 h-5 text-[#ff6070] animate-pulse" />
                </div>
              </div>

              <div>
                <p className="text-[11px] text-[#ff949f] font-semibold uppercase tracking-wider">
                  Direct Testing Desk
                </p>
                <a
                  href="tel:+919971234474"
                  className="text-sm sm:text-base font-bold text-white hover:text-[#ff949f] transition-colors"
                >
                  +91 99712 34474
                </a>
              </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#ff4d5a] to-transparent rounded-full mt-5" />
          </div>

          {/* Right Column: Form Card with MQTL Deep Teal Glassmorphism */}
          <div className="lg:col-span-7">
            <div className="bg-[#022433]/85 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative">
              
              {/* Form Title with Light Red Accent Line */}
              <div className="flex items-center gap-2 mb-4 border-l-3 border-[#ff4d5a] pl-2.5">
                <h3 className="font-bold text-white text-sm sm:text-[15px] tracking-tight">
                  Submit Testing Requirement &amp; Request Callback
                </h3>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3.5">
                  
                  {/* 1. Name */}
                  <div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-teal-200/60">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name / Organization"
                        className={`w-full bg-[#04384d]/90 border rounded-lg pl-9 pr-3 py-2.5 text-white text-xs sm:text-sm placeholder-teal-100/60 focus:outline-none focus:ring-1 transition-all ${
                          errors.name
                            ? "border-[#ff4d5a] focus:ring-[#ff4d5a]"
                            : "border-white/20 focus:border-[#ff4d5a] focus:ring-[#ff4d5a]/40"
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-[#ff949f] text-[11px] mt-1 pl-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* 2. Mobile Number */}
                  <div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-teal-200/60">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={10}
                        placeholder="10 Digit Mobile No."
                        className={`w-full bg-[#04384d]/90 border rounded-lg pl-9 pr-3 py-2.5 text-white text-xs sm:text-sm placeholder-teal-100/60 focus:outline-none focus:ring-1 transition-all ${
                          errors.phone
                            ? "border-[#ff4d5a] focus:ring-[#ff4d5a]"
                            : "border-white/20 focus:border-[#ff4d5a] focus:ring-[#ff4d5a]/40"
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[#ff949f] text-[11px] mt-1 pl-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* 3. Email Address */}
                  <div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-teal-200/60">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email Address"
                        className={`w-full bg-[#04384d]/90 border rounded-lg pl-9 pr-3 py-2.5 text-white text-xs sm:text-sm placeholder-teal-100/60 focus:outline-none focus:ring-1 transition-all ${
                          errors.email
                            ? "border-[#ff4d5a] focus:ring-[#ff4d5a]"
                            : "border-white/20 focus:border-[#ff4d5a] focus:ring-[#ff4d5a]/40"
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[#ff949f] text-[11px] mt-1 pl-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* 4. Required Service */}
                  <div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-teal-200/60">
                        <LayoutGrid className="w-4 h-4" />
                      </div>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full bg-[#04384d]/90 border rounded-lg pl-9 pr-8 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-1 transition-all appearance-none cursor-pointer ${
                          formData.service ? "text-white" : "text-teal-100/60"
                        } ${
                          errors.service
                            ? "border-[#ff4d5a] focus:ring-[#ff4d5a]"
                            : "border-white/20 focus:border-[#ff4d5a] focus:ring-[#ff4d5a]/40"
                        }`}
                      >
                        <option value="" disabled className="bg-[#022433] text-teal-100/60">
                          Select Testing Service
                        </option>
                        {servicesList.map((svc) => (
                          <option key={svc} value={svc} className="bg-[#022433] text-white">
                            {svc}
                          </option>
                        ))}
                      </select>
                      {/* Select Chevron */}
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-teal-200/60">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {errors.service && (
                      <p className="text-[#ff949f] text-[11px] mt-1 pl-1">
                        {errors.service}
                      </p>
                    )}
                  </div>

                </div>

                {/* Submit Button in Luminous Premium Light Red Gradient */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-gradient-to-r from-[#ff3b4e] via-[#ff4d5a] to-[#ff606e] hover:from-[#e82f42] hover:via-[#ff3b4e] hover:to-[#ff4d5a] text-white font-bold py-2.5 sm:py-3 px-5 rounded-xl flex items-center justify-center gap-2 shadow-[0_8px_25px_rgba(255,77,90,0.35)] hover:shadow-[0_8px_30px_rgba(255,77,90,0.5)] hover:scale-[1.008] active:scale-[0.99] transition-all text-xs sm:text-sm tracking-wider uppercase cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed group border border-white/15"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>SUBMIT TESTING ENQUIRY</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              {/* Success Notification */}
              {status === "success" && (
                <div className="mt-3 p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-200 text-xs flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-xs sm:text-sm">
                      Enquiry Submitted Successfully!
                    </p>
                    <p className="text-[11px] text-emerald-200 mt-0.5">
                      Your registered Lead ID is{" "}
                      <span className="font-mono font-bold text-white bg-emerald-700/40 px-1.5 py-0.5 rounded border border-emerald-400/30">
                        {leadId}
                      </span>
                      . Our laboratory consultant will call you shortly.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Notification */}
              {status === "error" && (
                <div className="mt-3 p-3 rounded-xl bg-red-500/15 border border-red-500/30 text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{errorMsg || "Submission failed. Please try again or call us directly."}</span>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
