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
  Armchair,
  TreeDeciduous,
  Trees,
  Layers,
  Droplet,
  Mountain,
  Building2,
  Settings,
  Blocks,
  Sofa,
  HelpCircle,
  ChevronDown,
  PhoneCall,
  FileText,
  Check,
} from "lucide-react";

// Homepage FAQ Dataset (100% verified, technically accurate, zero copyright infringement)
const homeFaqs = [
  {
    id: 1,
    category: "Services & Scope",
    q: "What materials and industrial products does MQTL test?",
    a: "Minu Quality Testing Laboratories (MQTL) provides comprehensive physical, mechanical, and chemical testing services across key manufacturing and construction sectors:\n\n• Wood & Timber: Moisture content, density, compressive strength, static bending, and shear resistance (as per IS 1708).\n• Plywood & Panel Boards: Boiling water resistance, adhesive bond shear, moisture resistance, and flexural modulus (IS 303, IS 710, IS 2202).\n• Water Quality: Potability analysis for drinking water (IS 10500:2012), concrete mixing and curing water (IS 456:2000), pH, TDS, hardness, and chemical assays.\n• Furniture & Architectural Hardware: Durability, cyclic fatigue, and load-bearing capacity for tables, office chairs, and hinges (IS 363).\n• Civil Construction Materials: Cement physical tests (IS 4031), concrete paver blocks (IS 15658), aggregates (IS 2386, IS 383), and geotechnical soil testing (IS 2720).",
  },
  {
    id: 2,
    category: "Sample Submission",
    q: "Where is MQTL located and how can clients submit their samples?",
    a: "Our testing facility is conveniently located at Plot No. 79, Sector 155, Noida, Gautam Buddha Nagar, Uttar Pradesh – 201310. Clients across Delhi NCR, Greater Noida, and all Indian states can submit samples directly at our laboratory intake desk or send them via reliable courier and cargo services. We recommend contacting our laboratory team prior to dispatch to ensure proper sample sizing, protective packaging, and submission paperwork.",
  },
  {
    id: 3,
    category: "Standards & Turnaround",
    q: "What is the standard turnaround time for laboratory test reports?",
    a: "Standard turnaround time for routine physical, chemical, and dimensional analyses—such as water testing, wood moisture content, and hardware cycle testing—is typically 2 to 5 working days following sample receipt and verification. Tests with mandatory technical curing schedules (such as 7-day or 28-day concrete cube compressive strength tests) are concluded on their exact milestone dates. Expedited testing is available for critical project schedules upon prior request.",
  },
  {
    id: 4,
    category: "Standards & Turnaround",
    q: "Are testing procedures aligned with applicable Indian Standards (IS)?",
    a: "Yes. Testing at MQTL follows standard testing methods referencing published Indian Standards (IS), including IS 10500:2012 for drinking water, IS 456:2000 for concrete mixing water, IS 303 and IS 710 for plywood, IS 1708 for timber, and IS 4031 for cement. Every verified laboratory test report clearly cites the applicable test standard, observed parameters, and standard reference values.",
  },
  {
    id: 5,
    category: "Sample Submission",
    q: "What are the recommended guidelines for sample collection and packaging?",
    a: "To ensure reliable, representative test outcomes, follow these material-specific sampling guidelines:\n\n• Water Samples: Collect 1 to 2 liters in clean, sealed polyethylene or glass containers, filled with minimal air headspace to prevent carbon dioxide absorption, and dispatch promptly.\n• Wood & Plywood: Prepare test specimens to dimensions required by the applicable standard, ensuring test sections are free from shipping cracks or defect knots.\n• Cement & Aggregates: Secure samples in heavy-duty, airtight moisture-proof polythene bags to prevent premature hydration or environmental contamination.\n• Hardware & Furniture: Submit complete, unaltered production units along with standard fastening accessories.",
  },
  {
    id: 6,
    category: "Water Testing",
    q: "How does drinking water testing differ from concrete mixing water testing?",
    a: "The two tests serve entirely distinct technical and regulatory purposes:\n\n• Drinking Water (IS 10500:2012): Focuses on human health and potability. The acceptable pH range is strictly 6.5 to 8.5 (with no relaxation permitted), evaluated alongside thresholds for Total Dissolved Solids (TDS), total hardness, alkalinity, toxic heavy metals, and microbiological indicators.\n• Concrete Mixing Water (IS 456:2000): Focuses on cement hydration and concrete structural durability. It mandates a minimum pH of 6.0 and enforces limits on suspended solids, organic matter, inorganic solids, sulfates, and chlorides to prevent delayed setting times, reduced compressive strength, and corrosion of reinforcement steel.",
  },
  {
    id: 7,
    category: "Reports & Quotes",
    q: "How are verified test reports delivered, and can they be authenticated?",
    a: "Once analysis is completed and verified by our laboratory in-charge, test reports are generated and promptly shared as secure digital PDF documents via email. Stamped and signed hard copies from our laboratory are also available for collection or dispatch upon request for internal quality assurance, client documentation, and project records.",
  },
  {
    id: 8,
    category: "Reports & Quotes",
    q: "Does MQTL offer corporate agreements or bulk testing contracts for contractors?",
    a: "Yes. MQTL regularly partners with real estate developers, EPC contractors, modular furniture manufacturers, plywood mills, and commercial infrastructure projects for recurring third-party quality control. Corporate partnerships benefit from preferential volume pricing, scheduled batch testing, dedicated account coordination, and priority reporting.",
  },
  {
    id: 9,
    category: "Services & Scope",
    q: "Can MQTL conduct customized performance or non-standard endurance testing?",
    a: "In addition to standard testing as per Indian Standards (IS), we perform custom mechanical load evaluations, cyclic durability testing, structural stability assessments, and tailored quality checks based on client engineering drawings or proprietary quality standards. Our technical team can review your project's technical specifications and design an appropriate testing matrix.",
  },
  {
    id: 10,
    category: "Reports & Quotes",
    q: "How can I obtain a price quotation or technical consultation for my project?",
    a: "You can request an itemized quotation by filling out the consultation inquiry form on this page, emailing info@mqtlab.com, or calling our technical helpline at +91 99712 34474. Please specify the material, the required test parameters or standards, and the number of sample batches for an immediate, transparent quotation.",
  },
];

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
            <h1 className="text-white text-3xl sm:text-4xl pt-5 lg:text-5xl font-extrabold leading-tight mb-6">
              Precision Testing for
              <span className="block bg-linear-to-r from-red-500 to-orange-400 bg-clip-text text-transparent mt-2">
                Construction Materials
              </span>
            </h1>

            <p className="text-gray-200 text-base sm:text-lg mb-10 leading-relaxed max-w-2xl">
              Trusted laboratory for comprehensive quality testing of
              <span className="font-semibold text-white">
                {" "}
                Wood, Plywood, Water, Furniture, Hinges, Cement, Aggregates,
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

              <Link href="/testing">
                <button className="px-8 py-3 border border-white text-white font-semibold cursor-pointer rounded-xl hover:bg-white hover:text-black transition duration-300 w-full sm:w-auto">
                  View Services
                </button>
              </Link>
            </div>

            <div className=" backdrop-blur-xs p-5  rounded-2xl border border-white/20 max-w-2xl shadow-xl">
              <h2 className="text-red-400 text-xl font-semibold mb-3">
                Minu Quality Testing Laboratories Private Limited
              </h2>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                Delivering reliable and accurate testing services for wood,
                plywood, water, furniture, cement, and construction materials.
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
                <b>Minu Quality Testing Laboratories Private Limited</b> is an independent testing
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
                  We support industries involved in wood, plywood, furniture,
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

      {/* Testing Equipment */}
      

      {/* ================= SERVICES SECTION ================= */}
      <section id="services" className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Testing Services
      </h2>
      <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Reliable laboratory testing services for wooden products, plywood,
        furniture, and construction materials ensuring quality and safety.
      </p>
    </div>

    {/* Grid */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {[
        { name: "Wood Testing", link: "/testing/wood-testing", icon: Trees },
        { name: "Plywood Testing", link: "/testing/plywood-testing", icon: Layers },
        { name: "Water Testing", link: "/testing/water-testing", icon: Droplet },
        { name: "Soil Testing", link: "/testing/soil-testing", icon: Mountain },
        { name: "Cement Testing", link: "/testing/cement-testing", icon: Building2 },
        { name: "Hinges Testing", link: "/testing/hinges-testing", icon: Settings },
        {
          name: "Concrete Paver Block Testing",
          link: "/testing/concrete-paver-block-testing",
          icon: Blocks,
        },
        {
          name: "Furniture Testing",
          link: "/testing/furniture-testing",
          icon: Sofa,
        },
      ].map((service, idx) => {
        const Icon = service.icon;

        return (
          <Link key={idx} href={service.link}>
            <div className="group relative h-40 flex items-center justify-center bg-white/70 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1">

              {/* Default Content */}
              <div className="relative z-10 flex flex-col items-center text-center px-4">
                <Icon className="w-8 h-8 text-red-500 mb-3 transition group-hover:scale-110" />
                <h3 className="text-sm font-semibold text-gray-900">
                  {service.name}
                </h3>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-end justify-end p-4 backdrop-blur-3xl bg-gray-200/70 opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="flex items-center gap-1 text-sm font-semibold text-red-500">
                  Read More →
                </span>
              </div>

            </div>
          </Link>
        );
      })}
    </div>

  </div>
</section>
      <section className="py-12 bg-linear-to-r from-[#0f3c5f] via-[#154c79] to-[#1b5d8f]">
        <div className="max-w-7xl  mx-auto ">
          <div className="grid md:grid-cols-2 gap-15 items-start">
            {/* LEFT SIDE CTA CONTENT (UNCHANGED) */}
            <div className="text-white pt-2 pb-12 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
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
                <button
                  type="button"
                  onClick={() => document.getElementById("home-enquiry-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="group bg-red-500 hover:bg-red-600 hover:scale-105 transition-all duration-300 text-white font-semibold px-6 py-3 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-xl cursor-pointer"
                >
                  Request Consultation
                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    ➤
                  </span>
                </button>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div id="home-enquiry-form" className="bg-white p-8 rounded-2xl shadow-2xl scroll-mt-24">
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
                      placeholder="Tell us which service you are interested in..."
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

                  {/* ── Frequently Asked Questions (FAQ) Section ── */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9] border-t border-slate-200" id="faqs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 mb-3 shadow-xs">
              <HelpCircle className="w-3.5 h-3.5 text-red-600" />
              <span className="text-[11px] font-bold text-red-700 tracking-wider uppercase">
                Frequently Asked Questions
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#05526e] tracking-tight">
              Got Questions? We Have Answers.
            </h2>
            <p className="mt-2 text-sm sm:text-[15px] text-slate-500 leading-relaxed">
              Find technical answers about material testing standards, turnaround times, sample submission, and verified laboratory reports at MQTL.
            </p>
          </div>

          {/* Accordion List (2xl wider: max-w-6xl) */}
          <div className="space-y-3.5 max-w-6xl mx-auto">
            {homeFaqs.map((faq) => (
              <details
                key={faq.id}
                className="group bg-white border border-slate-200/90 rounded-xl overflow-hidden transition-all duration-200 shadow-2xs hover:shadow-sm open:border-[#05526e]/60 open:shadow-sm"
              >
                <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer list-none font-semibold text-slate-800 text-sm sm:text-[15px] select-none hover:text-[#05526e] transition-colors">
                  <span className="flex items-start sm:items-center gap-3 pr-2">
                    <span className="w-6 h-6 rounded-md bg-red-50 text-red-600 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 group-open:bg-[#05526e] group-open:text-white transition-colors">
                      Q{faq.id}
                    </span>
                    <span className="leading-snug">{faq.q}</span>
                  </span>
                  <ChevronDown className="w-4 h-4 text-slate-400 group-open:text-[#05526e] transition-transform duration-300 group-open:rotate-180 shrink-0 ml-3" />
                </summary>

                <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  <div className="flex items-center gap-2 mb-2 pt-1.5">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#05526e] bg-sky-100/70 px-2 py-0.5 rounded border border-sky-200/60">
                      {faq.category}
                    </span>
                  </div>
                  <div className="whitespace-pre-line text-slate-600">
                    {faq.a}
                  </div>
                </div>
              </details>
            ))}
          </div>

          {/* Still Have Questions CTA Card (2xl wider: max-w-6xl) */}
          <div className="mt-12 max-w-6xl mx-auto bg-gradient-to-br from-[#05526e] via-[#0a455c] to-[#0f3c5f] rounded-2xl p-5 sm:p-7 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                Have a project or testing requirement not listed here?
              </h3>
              <p className="text-xs sm:text-sm text-white/80 max-w-xl">
                Our testing engineers are ready to assist you with customized test matrices, bulk testing quotations, or sampling guidance.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <a
                href="tel:+919971234474"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 hover:scale-102"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                +91 99712 34474
              </a>
              <button
                type="button"
                onClick={() => document.getElementById("home-enquiry-form")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:scale-102 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                Submit Sample Inquiry
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default HomePage;
