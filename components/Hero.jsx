"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Award,
  Clock,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Beaker,
  Factory,
  Globe,
  Target,
  Users,
  TrendingUp,
  Trees,
  Armchair,
  TreeDeciduous,
} from "lucide-react";

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const submitted = sessionStorage.getItem("popupSubmitted");
    if (submitted === "true") {
      setHasSubmitted(true);
      return; // agar already submit hua hai, popup show nahi hoga
    }

    const showPopup = () => {
      if (!hasSubmitted) setIsModalOpen(true);
    };

    // First popup after 10 sec
    const firstTimer = setTimeout(() => {
      showPopup();

      // Repeat every 2 min if popup is not submitted
      const repeatInterval = setInterval(() => {
        if (!hasSubmitted) showPopup();
        else clearInterval(repeatInterval); // agar submit ho gaya to interval stop
      }, 120000);

      // Clean interval on unmount
      return () => clearInterval(repeatInterval);
    }, 10000);

    // Clean timeout on unmount
    return () => clearTimeout(firstTimer);
  }, [hasSubmitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numericValue = value.replace(/\D/g, ""); // remove letters
      setFormData({ ...formData, phone: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName || formData.fullName.length < 1) {
      newErrors.fullName = "Write Your Full Name";
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    if (!formData.message || formData.message.length < 1) {
      newErrors.message = "Please write which services are you interested.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

      if (!res.ok) throw new Error("Server Error");

      setStatus("success");
      setHasSubmitted(true);
      sessionStorage.setItem("popupSubmitted", "true"); // ✅ permanently block future popups
      setIsModalOpen(false); // ✅ close popup

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });

      // 🔥 Close popup after 2 sec
      setTimeout(() => {
        setIsModalOpen(false);
        setStatus("");
      }, 2000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  //   try {
  //     setStatus("loading");

  //     const res = await fetch("/api/contact", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await res.json();

  //     if (data.success) {
  //       setStatus("success");
  //       setHasSubmitted(true); // stop future popups
  //       setIsModalOpen(false); // close popup

  //       setFormData({
  //         fullName: "",
  //         email: "",
  //         phone: "",
  //         message: "",
  //       });

  //       setTimeout(() => setStatus(""), 3000);
  //     } else {
  //       setStatus("error");
  //     }
  //   } catch {
  //     setStatus("error");
  //   }
  // };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/bg.jpg"
            alt="Testing Laboratory"
            className="w-full h-fit object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/60 to-black/50" />
        </div>

        {/* Decorative Blur Shapes */}
        <div className="absolute top-24 right-24 w-72 h-72 bg-red-500/20 rounded-full blur-3xl hidden md:block animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl hidden lg:block" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl">
            <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Precision Testing for
              <span className="block bg-linear-to-r from-red-500 to-orange-400 bg-clip-text text-transparent mt-2">
                Construction Materials
              </span>
            </h1>

            <p className="text-gray-200 text-base sm:text-lg mb-10 leading-relaxed max-w-2xl">
              Trusted laboratory for comprehensive quality testing of
              <span className="font-semibold text-white">
                {" "}
                Wood, Polywood, Water, Furniture, Hinges, Cement, Aggregates,
                Soil & Concrete Paver Blocks
              </span>
              . Ensuring safety, durability, and compliance with national and
              international standards.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <Link href="/contact-us">
                <button className="px-8 py-3 bg-red-500 hover:bg-red-800 text-white cursor-pointer font-semibold rounded-xl shadow-lg transition duration-300 w-full sm:w-auto">
                  Contact Us
                </button>
              </Link>

              <Link href="/services">
                <button className="px-8 py-3 border border-white text-white font-semibold cursor-pointer rounded-xl hover:bg-white hover:text-black transition duration-300 w-full sm:w-auto">
                  View Services
                </button>
              </Link>
            </div>

            <div className=" backdrop-blur-xs p-6  rounded-2xl border border-white/20 max-w-2xl shadow-xl">
              <h2 className="text-red-400 text-xl sm:text-2xl font-semibold mb-3">
                Minu Quality Testing Laboratory Pvt. Ltd.
              </h2>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                Delivering reliable and accurate testing services for wood,
                polywood, water, furniture, cement, and construction materials.
                We help manufacturers and builders meet quality, safety, and
                compliance standards with complete confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="pt-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About Us
              </h2>
              <p className="text-md text-gray-600 max-w-6xl mx-auto">
                <b>Minu Quality Testing Laboratory</b> is an independent testing
                lab in Noida, Uttar Pradesh, India, that provides quality
                testing and evaluation services for{" "}
                <b>
                  wooden products, plywood, furniture and other construction
                  materials.
                </b>
                . It helps manufacturers and suppliers verify{" "}
                <b>strength, durability, moisture content, bonding quality,</b>{" "}
                and other performance properties according to national and
                international standards such as <b>IS, ASTM, and ISO,</b>{" "}
                ensuring products meet regulatory and quality requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Mission */}
              <div className="bg-linear-to-br from-red-50 to-indigo-50 p-8 rounded-2xl">
                <Factory className="w-14 h-14 text-red-400 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our mission is to deliver accurate, dependable, and practical
                  testing solutions that help manufacturers meet quality,
                  safety, and regulatory requirements.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We support industries involved in wood, polywood, furniture,
                  water, soil, cement, hinges, aggregates and concrete paver
                  block with equipment and testing methods aligned to national
                  and international standards.
                </p>
              </div>

              {/* Values */}
              <div className="space-y-6">
                <div className="flex gap-4 items-start p-6 bg-gray-50 rounded-xl hover:shadow-md transition">
                  <Target className="w-10 h-10 text-red-400 shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Practical & Accurate Testing
                    </h4>
                    <p className="text-gray-600">
                      Test methods designed for real manufacturing conditions,
                      ensuring dependable and repeatable results.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-6 bg-gray-50 rounded-xl hover:shadow-md transition">
                  <Shield className="w-10 h-10 text-red-400 shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Quality & Compliance
                    </h4>
                    <p className="text-gray-600">
                      All testing procedures follow recognized quality systems
                      and compliance requirements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-6 bg-gray-50 rounded-xl hover:shadow-md transition">
                  <Globe className="w-10 h-10 text-red-400 shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Industry Standards
                    </h4>
                    <p className="text-gray-600">
                      Supporting compliance with IS, ASTM, ISO, and other
                      internationally accepted standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Equipdment */}
      <section id="products" className="pt-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Testing Equipment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced laboratory equipment for accurate testing of
              construction, structural, and industrial materials.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Wood Testing */}
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="w-14 h-14 bg-blue-200 rounded-full flex items-center justify-center mb-6">
                <Trees className="w-7 h-7 text-green-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Wood Testing Equipment
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Wood Testing Equipment</li>
                <li>Timber Analysis Equipmen</li>
                <li>Wood Strength Analyzer</li>
              </ul>
            </div>
            {/* Polywood Testing */}
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="w-14 h-14 bg-gray-600 rounded-full flex items-center justify-center mb-6">
                <TreeDeciduous className="w-7 h-7 text-green-100" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Polywood Testing Equipment
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Plywood Testing</li>
                <li>Quality Testing</li>
                <li>Durability Testing</li>
              </ul>
            </div>
            {/* Water Testing */}
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Beaker className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Water Testing Equipment
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>pH Measurement</li>
                <li>TDS Measurement</li>
              </ul>
            </div>

            {/* Soil Testing */}
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <Factory className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Soil Testing Equipment
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Compaction & Density Tests</li>
                <li>Atterberg Limits</li>
                <li>Shear Strength Analysis</li>
              </ul>
            </div>

            {/* Cement Testing */}
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Cement Testing Equipment
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Compressive Strength</li>
                <li>Initial & Final Setting Time</li>
                <li>Fineness & Soundness Tests</li>
              </ul>
            </div>

            {/* Aggregates Testing */}
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Aggregates Testing Equipment
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Impact & Crushing Value</li>
                <li>Sieve Analysis</li>
                <li>Specific Gravity Test</li>
              </ul>
            </div>

            {/* Concrete Paver Block */}
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Concrete Paver Block Testing
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Compressive Strength</li>
                <li>Water Absorption</li>
                <li>Abrasion Resistance</li>
              </ul>
            </div>

            {/* Hinges Testing */}
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-indigo-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hinges Testing Equipment
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Cycle Durability Test</li>
                <li>Corrosion Resistance</li>
                <li>Load Bearing Capacity</li>
              </ul>
            </div>

            {/* Furniture Testing */}
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Armchair className="w-7 h-7 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Furniture Testing Equipment
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Load & Stability Test</li>
                <li>Impact & Drop Test</li>
                <li>Durability Assessment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Testing Services
            </h2>
            <div className="w-20 h-1 bg-red-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Reliable laboratory testing services for wooden products, plywood,
              furniture, and textile materials.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              "Plywood Bonding & Strength Testing",
              "Wood Moisture & Density Analysis",
              "Furniture Load & Durability Tests",
              "Formaldehyde Emission Testing",
              "Water Chemical Analysis, Water Sample Testing",
              "Abrasion & Pilling Resistance",
              "Color Fastness Testing",
              "Compliance & Test Reports",
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-red-400 hover:shadow-md transition"
              >
                <CheckCircle className="w-7 h-7 text-red-400 mb-3" />
                <h3 className="text-base font-semibold text-gray-900">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-linear-to-r from-[#0f3c5f] via-[#154c79] to-[#1b5d8f]">
        <div className="max-w-7xl  mx-auto ">
          <div className="grid md:grid-cols-2 gap-15 items-start">
            {/* LEFT SIDE CTA CONTENT (UNCHANGED) */}
            <div className="text-white pt-2 pb-12 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Ready to Ensure Quality & Compliance?
              </h2>

              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Partner with us for world-class laboratory testing equipment,
                advanced inspection systems, and dedicated technical support. We
                help you maintain industry standards, improve product
                reliability, and build long-term customer trust.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="group bg-red-500 hover:bg-red-600 hover:scale-105 transition-all duration-300 text-white font-semibold px-6 py-3 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-xl">
                  Request Consultation
                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    ➤
                  </span>
                </button>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                Let's Connect With Us..
              </h2>
              <p className="text-gray-600 text-sm mb-2">
                Fill out the form and our team will contact you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* ROW 1 */}
                <div className="grid md:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
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
                </div>

                {/* ROW 2 */}
                <div className="grid md:grid-cols-2 gap-4">
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
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message..."
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-red-400 resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* BUTTON CENTERED */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={`px-10 py-2.5 text-white text-sm font-semibold cursor-pointer rounded-lg transition flex items-center gap-2
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

                {/* Success / Error */}
                {status === "success" && (
                  <div className="mt-3 bg-green-100 text-green-700 px-4 py-3 rounded-lg text-sm text-center">
                    ✅ Your Enquiry Send Successfully. We will connect you soon.
                  </div>
                )}

                {status === "error" && (
                  <div className="mt-3 bg-red-100 text-red-700 px-4 py-3 rounded-lg text-sm text-center">
                    ❌ Something went wrong.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto mb-6">
                Reach out to us for testing services, technical inquiries, or
                general information. Our team will be happy to assist you.
              </p>
              <div className="w-20 h-1 bg-red-400 mx-auto"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
             
              <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center">
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Phone
                </h3>
                <a
                  href="tel:+917782069184"
                  className="text-gray-600 hover:text-red-400 transition"
                >
                  +91 99712 34474
                </a>
              </div>

              {/* Email */}
      {/* <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center">
                <div className="w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Email
                </h3>
                <a
                  href="mailto:info@minulab.com"
                  className="text-gray-600 hover:text-indigo-400 transition"
                >
                  info@mqtlab.com
                </a>
              </div> */}

      {/* Location */}
      {/* <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Location
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Plot No. 79, 2nd Floor,
                  <br />
                  Gautam Buddha Nagar,
                  <br />
                  Noida Sector 155,
                  <br />
                  Uttar Pradesh – 201310
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>  */}
    </div>
  );
};

export default HomePage;
