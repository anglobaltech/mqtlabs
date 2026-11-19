"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  LayoutGrid,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  ChevronDown,
  PhoneCall,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [submittedLeadId, setSubmittedLeadId] = useState("");

  const testingDisciplines = [
    "Wood & Timber Testing",
    "Plywood & Panel Board Testing",
    "Water Quality Testing (Drinking / Concrete)",
    "Furniture & Seating Testing",
    "Cement & Mortar Testing",
    "Geotechnical Soil Testing",
    "Architectural Hinges & Hardware Testing",
    "Aggregates & Granular Testing",
    "Concrete Paver Block Testing",
    "Other / Multiple Testing Disciplines",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, phone: numericValue }));
      if (errors.phone) setErrors((prev) => ({ ...prev, phone: null }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};

    // 1. Name validation (Mandatory)
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter a valid name";
    }

    // 2. Phone validation (Mandatory + Exactly 10 digits)
    const phoneClean = formData.phone.trim().replace(/\D/g, "");
    if (!phoneClean) {
      newErrors.phone = "Phone Number is required";
    } else if (phoneClean.length !== 10 || !/^[0-9]{10}$/.test(phoneClean)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    // 3. Testing Discipline / Service validation (Mandatory)
    if (!formData.service) {
      newErrors.service = "Please select a testing discipline";
    }

    // 4. Email validation (Optional, but if entered must contain @ and valid domain format)
    const emailTrimmed = formData.email.trim();
    if (emailTrimmed && (!emailTrimmed.includes("@") || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed))) {
      newErrors.email = "Please enter a valid email address with '@' (e.g. name@domain.com)";
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
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          service: formData.service || "General Material Testing & Inquiry",
          message:
            formData.message.trim() ||
            (formData.service
              ? `Testing inquiry for ${formData.service}`
              : "Testing consultation and quote request"),
          source: "Contact Page Form",
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setSubmittedLeadId(data.leadId || "");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="bg-white text-slate-800">
      {/* ── 1. MODERN HERO SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#06182c] via-[#09223c] to-[#0c2b4c] text-white py-14 sm:py-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-300 mb-5 animate-fade-in-up">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-red-400 font-semibold">Contact Us</span>
          </nav>

          {/* Pre-Heading Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[#fe1f24] animate-pulse" />
            <span>Connect With Our Technical Team</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-5xl mb-4 animate-fade-in-up">
            Get in Touch with Our{" "}
            <span className="text-[#fe1f24]">Testing Laboratory</span>
          </h1>

          {/* Red Engineered Accent Underline */}
          <div className="flex items-center gap-1.5 mb-6 animate-fade-in-up">
            <div className="w-14 h-1.5 bg-gradient-to-r from-[#fe1f24] to-red-500 rounded-full" />
            <div className="w-3 h-1.5 bg-[#fe1f24]/50 rounded-full" />
            <div className="w-1.5 h-1.5 bg-[#fe1f24]/30 rounded-full" />
          </div>

          <p className="text-slate-200 text-base sm:text-lg max-w-5xl leading-relaxed animate-fade-in-up">
            Reach out to Minu Quality Testing Laboratories Private Limited for sample testing
            inquiries, customized quotation estimates, or guidance on standard test
            protocols. Our technical team is here to assist your project.
          </p>
        </div>
      </section>

      {/* ── 2. MAIN CONTACT & FORM SECTION ── */}
      <section className="py-14 sm:py-20 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* ── LEFT COLUMN: ENQUIRY FORM ── */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-9 md:p-10 shadow-xl shadow-slate-200/50 relative overflow-hidden">
                {/* Decorative Accent Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#fe1f24] via-red-500 to-amber-500" />

                <div className="mb-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-[#fe1f24] text-xs font-bold uppercase tracking-wider mb-2.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Direct Laboratory Inquiry</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Send an Enquiry or Request a Quote
                  </h2>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    Provide your requirements below. Our testing coordinators will
                    review your details and respond promptly during operating hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#fe1f24] transition-colors">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name or company name"
                        className={`w-full pl-10 pr-4 py-3 bg-slate-50/60 hover:bg-slate-50 focus:bg-white border rounded-xl text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none transition-all ${
                          errors.fullName
                            ? "border-red-400 focus:border-red-500 ring-2 ring-red-100"
                            : "border-slate-200 hover:border-slate-300 focus:border-[#fe1f24] focus:ring-4 focus:ring-red-500/10"
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1.5 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-slate-400 font-normal normal-case">(Optional)</span>
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#fe1f24] transition-colors">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email address"
                          className={`w-full pl-10 pr-4 py-3 bg-slate-50/60 hover:bg-slate-50 focus:bg-white border rounded-xl text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none transition-all ${
                            errors.email
                              ? "border-red-400 focus:border-red-500 ring-2 ring-red-100"
                              : "border-slate-200 hover:border-slate-300 focus:border-[#fe1f24] focus:ring-4 focus:ring-red-500/10"
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1.5 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#fe1f24] transition-colors">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          maxLength={10}
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter 10-digit mobile number"
                          className={`w-full pl-10 pr-4 py-3 bg-slate-50/60 hover:bg-slate-50 focus:bg-white border rounded-xl text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none transition-all ${
                            errors.phone
                              ? "border-red-400 focus:border-red-500 ring-2 ring-red-100"
                              : "border-slate-200 hover:border-slate-300 focus:border-[#fe1f24] focus:ring-4 focus:ring-red-500/10"
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1.5 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Testing Discipline Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Testing Discipline <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#fe1f24] transition-colors">
                        <LayoutGrid className="w-4 h-4" />
                      </div>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-10 py-3 bg-slate-50/60 hover:bg-slate-50 focus:bg-white border rounded-xl text-sm font-medium ${
                          !formData.service ? "text-slate-400" : "text-slate-800"
                        } focus:outline-none transition-all appearance-none cursor-pointer ${
                          errors.service
                            ? "border-red-400 focus:border-red-500 ring-2 ring-red-100"
                            : "border-slate-200 hover:border-slate-300 focus:border-[#fe1f24] focus:ring-4 focus:ring-red-500/10"
                        }`}
                      >
                        <option value="">Select Testing Discipline...</option>
                        {testingDisciplines.map((item, idx) => (
                          <option key={idx} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                    {errors.service && (
                      <p className="text-red-500 text-xs mt-1.5 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.service}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Sample Details &amp; Testing Scope{" "}
                      <span className="text-slate-400 font-normal normal-case">(Optional)</span>
                    </label>
                    <div className="relative group">
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Provide details on sample type, test parameters, quantity, or specific project requirements..."
                        className="w-full p-3.5 bg-slate-50/60 hover:bg-slate-50 focus:bg-white border rounded-xl text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none transition-all border-slate-200 hover:border-slate-300 focus:border-[#fe1f24] focus:ring-4 focus:ring-red-500/10"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm tracking-wide text-white transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer ${
                        status === "loading"
                          ? "bg-slate-400 cursor-not-allowed shadow-none"
                          : "bg-gradient-to-r from-[#fe1f24] via-red-600 to-red-500 hover:from-red-600 hover:to-[#fe1f24] shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/35 hover:scale-[1.01] active:scale-[0.99]"
                      }`}
                    >
                      {status === "loading" ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Testing Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Success State */}
                  {status === "success" && (
                    <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 animate-fade-in-up">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                        <div>
                          <h4 className="font-bold text-sm text-emerald-900">
                            Enquiry Submitted Successfully!
                          </h4>
                          <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
                            Thank you for reaching out. Your enquiry has been
                            registered under Lead ID:{" "}
                            <span className="font-mono font-bold bg-emerald-200/70 text-emerald-950 px-2 py-0.5 rounded border border-emerald-300">
                              {submittedLeadId || "Generated"}
                            </span>
                            . Our laboratory technical coordinator will contact
                            you shortly.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Error State */}
                  {status === "error" && (
                    <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-900 animate-fade-in-up">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                        <div>
                          <h4 className="font-bold text-sm text-red-900">
                            Submission Unsuccessful
                          </h4>
                          <p className="text-xs text-red-700 mt-1">
                            An issue occurred while submitting your enquiry. Please
                            try again or contact us directly at{" "}
                            <a
                              href="tel:+919971234474"
                              className="font-bold underline"
                            >
                              +91 99712 34474
                            </a>
                            .
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* ── RIGHT COLUMN: CONTACT DETAILS & GUIDELINES ── */}
            <div className="lg:col-span-5 space-y-5">
              {/* Card 1: Facility Location */}
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-md shadow-slate-100 hover:shadow-lg hover:border-red-200 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-[#fe1f24] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-600">
                      Testing Laboratory
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Facility Location
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium mb-3">
                  Minu Quality Testing Laboratories Private Limited<br />
                  Plot No. 79, Sector 155, Noida,<br />
                  Gautam Buddha Nagar, Uttar Pradesh 201310, India
                </p>

                <p className="text-xs text-slate-500 mb-4">
                  Near Sector 148 / 150 Metro Corridor, Noida-Greater Noida Expressway.
                </p>

                <a
                  href="https://maps.google.com/?q=Plot+No+79+Sector+155+Noida+Uttar+Pradesh+201310"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#fe1f24] hover:text-red-700 transition group"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Card 2: Phone & Hours */}
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-md shadow-slate-100 hover:shadow-lg hover:border-emerald-200 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                      Direct Support
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Phone &amp; Working Hours
                    </h3>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-slate-500">Helpline / Consultation:</div>
                    <a
                      href="tel:+919971234474"
                      className="text-base sm:text-lg font-bold text-slate-900 hover:text-[#fe1f24] transition inline-block mt-0.5"
                    >
                      +91 99712 34474
                    </a>
                  </div>

                  <div className="pt-2.5 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>
                        <strong className="text-slate-800">Mon – Sat:</strong> 9:30 AM – 6:30 PM
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 ml-5.5 mt-0.5">
                      Sunday: Closed
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Official Email */}
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-md shadow-slate-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                      Email Inquiries
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Official Correspondence
                    </h3>
                  </div>
                </div>

                <div className="text-xs text-slate-500 mb-1">
                  Quotations, Technical Queries &amp; Verification:
                </div>
                <a
                  href="mailto:info@mqtlab.com"
                  className="text-sm sm:text-base font-bold text-slate-900 hover:text-blue-600 transition"
                >
                  info@mqtlab.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}