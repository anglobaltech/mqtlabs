"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  ShieldCheck,
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
  Scale,
  Microscope,
  Cpu,
  Sparkles,
  ClipboardCheck,
  BadgeCheck,
  CheckCircle2,
  Boxes,
  Truck,
  PackageCheck,
  Flame,
  Activity,
  Zap,
} from "lucide-react";

// Homepage FAQ Dataset (Verified, technically accurate, zero copyright infringement, zero IS code clutter)
const homeFaqs = [
  {
    id: 1,
    category: "Services & Scope",
    q: "What materials and industrial products does MQTL test?",
    a: "Minu Quality Testing Laboratories (MQTL) provides comprehensive physical, mechanical, and chemical testing services across key manufacturing and construction sectors:\n\n• Wood & Timber: Moisture content, density, compressive strength parallel and perpendicular to grain, static bending, and shear resistance.\n• Plywood & Panel Boards: Boiling water resistance, adhesive bond shear strength, moisture absorption, and flexural modulus across commercial, moisture-resistant, and marine grades.\n• Water Quality: Potability analysis for drinking water, suitability for concrete mixing and curing, pH, TDS, hardness, alkalinity, and chemical assays.\n• Furniture & Architectural Hardware: Durability, cyclic fatigue endurance, and load-bearing capacity for tables, office seating, drawer slides, and architectural hinges.\n• Civil Construction Materials: Compressive strength of cement mortar cubes, setting time, soundness, concrete paver blocks, construction aggregates, and geotechnical soil testing.",
  },
  {
    id: 2,
    category: "Sample Submission",
    q: "Where is MQTL located and how can clients submit their samples?",
    a: "Our testing facility is conveniently located at Plot No. 79, Sector 155, Noida, Gautam Buddha Nagar, Uttar Pradesh – 201310. Clients across Delhi NCR, Greater Noida, and all Indian states can submit samples directly at our laboratory or send them via reliable courier and cargo services. We recommend contacting our laboratory team prior to dispatch to ensure proper sample sizing, protective packaging, and submission paperwork.",
  },
  {
    id: 3,
    category: "Reporting & Certificates",
    q: "How are laboratory test reports verified and delivered to clients?",
    a: "Every laboratory test report undergoes rigorous multi-tier verification by qualified quality technicians before release. Reports are issued in tamper-evident digital formats featuring verified parameters and complete sample traceability, with physical certified copies available upon request.",
  },
  {
    id: 4,
    category: "Quality Standards",
    q: "Are testing procedures aligned with national and industrial quality standards?",
    a: "Yes. Testing at MQTL follows standard testing methods referencing established national and industrial specifications for drinking water, concrete mixing water, plywood, timber, cement, and aggregates. Every verified laboratory test report clearly cites the applicable test method, observed parameters, and technical reference benchmarks.",
  },
  {
    id: 5,
    category: "Sample Submission",
    q: "What are the recommended guidelines for sample collection and packaging?",
    a: "To ensure reliable, representative test outcomes, follow these material-specific sampling guidelines:\n\n• Water Samples: Collect 1 to 2 liters in clean, sealed polyethylene or glass containers, filled with minimal air headspace to prevent carbon dioxide absorption, and dispatch promptly.\n• Wood & Plywood: Prepare test specimens to dimensions required by the applicable test procedure, ensuring test sections are free from shipping cracks or defect knots.\n• Cement & Aggregates: Secure samples in heavy-duty, airtight moisture-proof bags to prevent premature hydration or environmental contamination.\n• Hardware & Furniture: Submit complete, unaltered production units along with standard fastening accessories.",
  },
  {
    id: 6,
    category: "Water Testing",
    q: "How does drinking water testing differ from concrete mixing water testing?",
    a: "The two tests serve entirely distinct technical and regulatory purposes:\n\n• Drinking Water: Focuses on human health and potability. The acceptable pH range is strictly 6.5 to 8.5 (with no relaxation permitted), evaluated alongside thresholds for Total Dissolved Solids (TDS), total hardness, alkalinity, toxic heavy metals, and microbiological indicators.\n• Concrete Mixing Water: Focuses on cement hydration and concrete structural durability. It mandates a minimum pH of 6.0 and enforces limits on suspended solids, organic matter, inorganic solids, sulfates, and chlorides to prevent delayed setting times, reduced compressive strength, and corrosion of reinforcement steel.",
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
    a: "In addition to routine quality testing, we perform custom mechanical load evaluations, cyclic durability testing, structural stability assessments, and tailored quality checks based on client engineering drawings or proprietary quality standards. Our technical team can review your project's technical specifications and design an appropriate testing matrix.",
  },
  {
    id: 10,
    category: "Reports & Quotes",
    q: "How can I obtain a price quotation or technical consultation for my project?",
    a: "You can request an itemized quotation by filling out the consultation inquiry form on this page, emailing info@mqtlab.com, or calling our technical helpline at +91 99712 34474. Please specify the material, the required test parameters, and the number of sample batches for an immediate, transparent quotation.",
  },
];

// All 9 Testing Disciplines
const testingDisciplines = [
  {
    name: "Wood & Timber Testing",
    link: "/testing/wood-testing",
    icon: Trees,
    tag: "Physical & Mechanical",
    description:
      "Moisture content, oven-dry density, compressive strength parallel/perpendicular to grain, and static bending (MOR & MOE).",
    highlights: ["Moisture Equilibrium", "Static Bending MOR/MOE", "Shear Strength"],
  },
  {
    name: "Plywood & Panel Board Testing",
    link: "/testing/plywood-testing",
    icon: Layers,
    tag: "Bonding & Durability",
    description:
      "Glue shear strength in dry state, resistance to boiling water (BWR), moisture resistance, and flexural stiffness across commercial and marine grades.",
    highlights: ["Boiling Water Proof", "Glue Line Shear", "Tensile Cleavage"],
  },
  {
    name: "Water Quality Testing",
    link: "/testing/water-testing",
    icon: Droplet,
    tag: "Potability & Concrete",
    description:
      "Potable drinking water compliance, concrete mixing and curing water suitability, total dissolved solids (TDS), pH, and chemical assays.",
    highlights: ["Drinking Water Potability", "Concrete Curing Water", "TDS & Hardness"],
  },
  {
    name: "Geotechnical Soil Testing",
    link: "/testing/soil-testing",
    icon: Mountain,
    tag: "Civil & Foundation",
    description:
      "Particle size distribution, Atterberg limits, standard proctor compaction (OMC & MDD), direct shear, and California Bearing Ratio (CBR).",
    highlights: ["CBR & Subgrade Rating", "Direct Shear Test", "Compaction OMC/MDD"],
  },
  {
    name: "Cement Testing",
    link: "/testing/cement-testing",
    icon: Building2,
    tag: "Binding Materials",
    description:
      "Mortar cube compressive strength at 3, 7, and 28 days, Vicat setting time, Le Chatelier soundness, and Blaine fineness for OPC and PPC cements.",
    highlights: ["3, 7, 28-Day Strength", "Vicat Setting Time", "Soundness & Blaine"],
  },
  {
    name: "Aggregates Testing",
    link: "/testing/aggregates-testing",
    icon: Boxes,
    tag: "Coarse & Fine Aggregates",
    description:
      "Aggregate crushing value (ACV), 10% fines value, aggregate impact value (AIV), Los Angeles abrasion, and flakiness & elongation indices.",
    highlights: ["Crushing & Impact Value", "Los Angeles Abrasion", "Gradation & Sieve"],
  },
  {
    name: "Architectural Hinges Testing",
    link: "/testing/hinges-testing",
    icon: Settings,
    tag: "Hardware & Fittings",
    description:
      "Endurance cycling (up to 50,000+ continuous cycles), static load bearing, lateral/vertical deflection, and neutral salt spray corrosion.",
    highlights: ["50,000+ Cycles", "Static Load Rating", "Salt Spray Resistance"],
  },
  {
    name: "Concrete Paver Block Testing",
    link: "/testing/concrete-paver-block-testing",
    icon: Blocks,
    tag: "Precast & Paving",
    description:
      "Compressive strength, splitting tensile strength, 24-hour water absorption, and thickness/planeness verification for heavy-traffic paving units.",
    highlights: ["Compressive Load Capacity", "Water Absorption %", "Tensile Splitting"],
  },
  {
    name: "Furniture & Seating Testing",
    link: "/testing/furniture-testing",
    icon: Sofa,
    tag: "Structural & Ergonomics",
    description:
      "Static weight testing, cyclic seat and backrest durability, drop impact resistance, and structural stability for office and residential furniture.",
    highlights: ["Static Overload Test", "Cyclic Backrest Fatigue", "Stability & Drop Test"],
  },
];

// Modern Laboratory Equipment
const labEquipment = [
  {
    title: "Universal Testing Machines (UTM)",
    subtitle: "Mechanical Strength Testing",
    description:
      "Calibrated digital servo-hydraulic load frames capable of high-precision tension, compression, flexural bending, and shear evaluation.",
    icon: Scale,
    tag: "Calibrated Load Cells",
  },
  {
    title: "Environmental Conditioning Chambers",
    subtitle: "Temperature & Humidity Control",
    description:
      "Dedicated curing tanks and climate chambers maintaining constant temperature and relative humidity for cement curing and wood stabilization.",
    icon: Factory,
    tag: "Controlled Ambient",
  },
  {
    title: "Analytical Water & Chemistry Bench",
    subtitle: "Purity & Chemical Assays",
    description:
      "High-readability analytical balances (0.0001 g), benchtop digital pH meters, electrical conductivity meters, and precision drying ovens.",
    icon: Beaker,
    tag: "0.0001 g Readability",
  },
  {
    title: "Multi-Axis Cyclic Hardware Rigs",
    subtitle: "Fatigue & Durability Systems",
    description:
      "Automated pneumatic and motorized cycling actuators designed for thousands of continuous opening, closing, and load cycles on fittings.",
    icon: Cpu,
    tag: "Continuous Cycling",
  },
  {
    title: "Geotechnical Soil Mechanics Unit",
    subtitle: "Foundation & Subgrade Testing",
    description:
      "Motorized direct shear boxes, standard proctor compaction molds, CBR load frames, and liquid/plastic limit testing devices.",
    icon: Mountain,
    tag: "CBR & Direct Shear",
  },
  {
    title: "Aggregate Impact & Sieve Shakers",
    subtitle: "Granular Material Evaluation",
    description:
      "Motorized vibratory sieve shakers, Los Angeles abrasion drums, aggregate crushing cylinders, and impact drop testers.",
    icon: Flame,
    tag: "Abrasion & Impact",
  },
];

// 4-Step Testing Workflow
const processSteps = [
  {
    step: "01",
    title: "Sample Registration & Logging",
    description:
      "Test specimens are verified for seal integrity, inspected for condition, and registered into our lab tracking system with a unique identification number.",
    icon: PackageCheck,
  },
  {
    step: "02",
    title: "Conditioning & Preparation",
    description:
      "Samples are cut to standard coupon geometry, dried or cured as required, and stabilized under controlled temperature and relative humidity.",
    icon: Settings,
  },
  {
    step: "03",
    title: "Calibrated Testing Execution",
    description:
      "Multi-parameter physical, mechanical, and chemical evaluations are executed by trained laboratory analysts using calibrated instrumentation.",
    icon: Activity,
  },
  {
    step: "04",
    title: "Engineering Review & Verified Report",
    description:
      "All test metrics undergo rigorous multi-tier engineering verification, culminating in the immediate issuance of authorized, tamper-proof digital PDF reports.",
    icon: FileText,
  },
];

// Industries & Applications Served
const industriesServed = [
  {
    title: "Civil Infrastructure & EPC",
    subtitle: "Highways, Bridges & Foundations",
    description:
      "Independent verification for subgrade soil, aggregates, concrete paver blocks, and cement used in large-scale infrastructure projects.",
    icon: Building2,
  },
  {
    title: "Real Estate & Builders",
    subtitle: "Residential & Commercial Framing",
    description:
      "Quality assurance for structural concrete, construction batching water, reinforcement fittings, and building materials.",
    icon: Factory,
  },
  {
    title: "Plywood Mills & Woodworking",
    subtitle: "Commercial & Marine Panels",
    description:
      "Comprehensive bond quality testing, boiling water resistance, moisture verification, and flexural strength benchmarking for timber mills.",
    icon: Layers,
  },
  {
    title: "Ready-Mix Concrete & Precast",
    subtitle: "Batch-to-Batch Uniformity",
    description:
      "Aggregate gradation, impact values, cement strength milestones, and paver block durability testing for concrete plants.",
    icon: Blocks,
  },
  {
    title: "Modular Furniture & Hardware",
    subtitle: "Fittings, Seating & Workstations",
    description:
      "Endurance cycling for architectural hinges, static weight capacity, and fatigue testing for commercial office and home furniture.",
    icon: Sofa,
  },
  {
    title: "Water Utilities & Environmental",
    subtitle: "Potability & Industrial Water",
    description:
      "Accurate physical and chemical analysis ensuring drinking water safety, effluent assessment, and concrete mixing suitability.",
    icon: Droplet,
  },
];

// Quality Assurance Principles
const qualityPillars = [
  {
    title: "Traceable Calibration",
    description:
      "All load cells, balances, gauges, and sensors are periodically calibrated against national reference standards to guarantee absolute measurement precision.",
    icon: Target,
  },
  {
    title: "Validated Operating Procedures",
    description:
      "Strict testing SOPs aligned with recognized engineering protocols ensure every test cycle is transparent, consistent, and fully repeatable.",
    icon: Shield,
  },
  {
    title: "Dual-Tier Engineering Validation",
    description:
      "Every test outcome is reviewed and authorized by experienced materials engineers and chemists before final report dispatch.",
    icon: Award,
  },
  {
    title: "Data Confidentiality & Fast Dispatch",
    description:
      "Secure, tamper-proof digital PDF certificates delivered within 2 to 5 working days, protected by strict commercial confidentiality.",
    icon: Clock,
  },
];

// Sample Submission Guidelines
const submissionGuides = [
  {
    category: "Wood & Timber Panels",
    guideline:
      "Prepare test coupons to specified test dimensions along the grain. Ensure specimens are representative and free from transport cracks or large knots.",
    icon: Trees,
  },
  {
    category: "Water & Liquid Samples",
    guideline:
      "Collect 1 to 2 liters in clean, sealed polyethylene containers filled with minimal air headspace to prevent atmospheric gas exchange, and dispatch promptly.",
    icon: Droplet,
  },
  {
    category: "Cement, Aggregates & Soil",
    guideline:
      "Seal samples in heavy-duty, double-layered airtight polythene bags to prevent moisture absorption, premature hydration, or loss of fine particles.",
    icon: Mountain,
  },
  {
    category: "Hardware & Furniture",
    guideline:
      "Submit complete, unaltered production units along with standard factory mounting screws and fasteners to ensure accurate real-world testing.",
    icon: Settings,
  },
];

const HomePage = () => {
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
      return;
    }

    const showPopup = () => {
      if (!hasSubmitted) setIsModalOpen(true);
    };

    const firstTimer = setTimeout(() => {
      showPopup();

      const repeatInterval = setInterval(() => {
        if (!hasSubmitted) showPopup();
        else clearInterval(repeatInterval);
      }, 120000);

      return () => clearInterval(repeatInterval);
    }, 10000);

    return () => clearTimeout(firstTimer);
  }, [hasSubmitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
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
      sessionStorage.setItem("popupSubmitted", "true");
      setIsModalOpen(false);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        setIsModalOpen(false);
        setStatus("");
      }, 2000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ── 1. HERO SECTION (MODERN LABORATORY HERO) ── */}
      <section className="relative w-full min-h-[520px] lg:min-h-[580px] xl:min-h-[620px] flex items-center overflow-hidden bg-[#142332]">
        {/* Background Laboratory Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/testing/laboratory-banner.png"
            alt="Modern Material Testing Laboratory"
            className="w-full h-full object-cover object-right"
          />
          {/* Solid Slate-Navy Overlay for Mobile (ensures 100% readability & zero clutter) + Desktop Left-to-Right Gradient */}
          <div className="absolute inset-0 bg-[#142332]/92 sm:bg-[#142332]/88 lg:bg-transparent lg:bg-gradient-to-r lg:from-[#142332] lg:via-[#142332] lg:via-48% lg:to-transparent lg:to-72% pointer-events-none" />
        </div>

        {/* Decorative Ambient Subtle Glow Shapes */}
        <div className="absolute top-16 left-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Hero Content Container - Premium balanced layout */}
        <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 lg:pl-20 lg:pr-8 xl:pl-24 2xl:pl-28 pt-4 pb-12 sm:pt-7 sm:pb-11 lg:pt-8 lg:pb-12">
          <div className="max-w-2xl lg:max-w-2xl">
            {/* Pre-Heading Quality Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-md animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-[#fe1f24] animate-pulse" />
              <span>Material Testing &amp; Quality Laboratory</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[24px] xs:text-[27px] sm:text-3xl md:text-4xl lg:text-[45px] font-black text-white tracking-tight leading-[1.18] sm:leading-[1.14] mb-2 animate-fade-in-up">
              Material Testing for{' '}
              <span className="block mt-0.5 sm:mt-1">
                <span className="text-[#fe1f24] font-black">Stronger</span> Quality &amp; Durability
              </span>
            </h1>

            {/* Red Engineered Accent Underline */}
            <div className="flex items-center gap-1.5 mt-2 mb-5 sm:mb-6 animate-fade-in-up animation-delay-100">
              <div className="w-14 h-1.5 bg-gradient-to-r from-[#fe1f24] to-red-500 rounded-full" />
              <div className="w-3 h-1.5 bg-[#fe1f24]/50 rounded-full" />
              <div className="w-1.5 h-1.5 bg-[#fe1f24]/30 rounded-full" />
            </div>

            {/* Row of 4 Feature Icons (Sleek Frosted Capability Cards) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-xl mb-5 animate-fade-in-up animation-delay-150">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center p-2.5 sm:p-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-300 group shadow-xs">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-2 group-hover:scale-110 group-hover:border-[#fe1f24] group-hover:bg-[#fe1f24]/20 transition-all duration-300 shadow-sm shrink-0">
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <span className="text-white text-[11px] sm:text-xs font-semibold leading-tight">
                  Wood &amp; Plywood<br className="hidden sm:block" /> Testing
                </span>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center p-2.5 sm:p-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-300 group shadow-xs">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-2 group-hover:scale-110 group-hover:border-[#fe1f24] group-hover:bg-[#fe1f24]/20 transition-all duration-300 shadow-sm shrink-0">
                  <Droplet className="w-5 h-5 text-white" />
                </div>
                <span className="text-white text-[11px] sm:text-xs font-semibold leading-tight">
                  Water &amp; Moisture<br className="hidden sm:block" /> Analysis
                </span>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center p-2.5 sm:p-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-300 group shadow-xs">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-2 group-hover:scale-110 group-hover:border-[#fe1f24] group-hover:bg-[#fe1f24]/20 transition-all duration-300 shadow-sm shrink-0">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <span className="text-white text-[11px] sm:text-xs font-semibold leading-tight">
                  Mechanical Property<br className="hidden sm:block" /> Testing
                </span>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center text-center p-2.5 sm:p-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-300 group shadow-xs">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-2 group-hover:scale-110 group-hover:border-[#fe1f24] group-hover:bg-[#fe1f24]/20 transition-all duration-300 shadow-sm shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <span className="text-white text-[11px] sm:text-xs font-semibold leading-tight">
                  Quality &amp; Compliance<br className="hidden sm:block" /> Support
                </span>
              </div>
            </div>

            {/* 4 Bottom Visual Material Cards (Modern Interactive Glass Cards) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-xl mb-5 animate-fade-in-up animation-delay-200">
              {/* Card 1: Timber & Wood */}
              <Link
                href="/testing/wood-testing"
                className="group relative rounded-2xl overflow-hidden border border-white/20 bg-slate-900/70 shadow-lg hover:shadow-2xl hover:border-[#fe1f24] hover:-translate-y-1 transition-all duration-300 backdrop-blur-xs flex flex-col justify-between"
              >
                <div className="relative h-20 sm:h-22 w-full overflow-hidden bg-slate-800">
                  <img
                    src="/testing/wood-card.png"
                    alt="Timber & Wood Testing"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                </div>
                <div className="bg-slate-950/90 border-t border-white/10 text-white text-[11px] sm:text-xs font-bold text-center py-2.5 px-1.5 group-hover:text-red-400 transition-colors leading-tight">
                  Timber &amp; Wood
                </div>
              </Link>

              {/* Card 2: Plywood */}
              <Link
                href="/testing/plywood-testing"
                className="group relative rounded-2xl overflow-hidden border border-white/20 bg-slate-900/70 shadow-lg hover:shadow-2xl hover:border-[#fe1f24] hover:-translate-y-1 transition-all duration-300 backdrop-blur-xs flex flex-col justify-between"
              >
                <div className="relative h-20 sm:h-22 w-full overflow-hidden bg-slate-800">
                  <img
                    src="/testing/plywood-card.png"
                    alt="Plywood Testing"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                </div>
                <div className="bg-slate-950/90 border-t border-white/10 text-white text-[11px] sm:text-xs font-bold text-center py-2.5 px-1.5 group-hover:text-red-400 transition-colors leading-tight">
                  Plywood
                </div>
              </Link>

              {/* Card 3: Cement & Aggregates */}
              <Link
                href="/testing/cement-testing"
                className="group relative rounded-2xl overflow-hidden border border-white/20 bg-slate-900/70 shadow-lg hover:shadow-2xl hover:border-[#fe1f24] hover:-translate-y-1 transition-all duration-300 backdrop-blur-xs flex flex-col justify-between"
              >
                <div className="relative h-20 sm:h-22 w-full overflow-hidden bg-slate-800">
                  <img
                    src="/testing/cement-card.png"
                    alt="Cement & Aggregates Testing"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                </div>
                <div className="bg-slate-950/90 border-t border-white/10 text-white text-[11px] sm:text-xs font-bold text-center py-2.5 px-1.5 group-hover:text-red-400 transition-colors leading-tight">
                  Cement &amp; Aggregates
                </div>
              </Link>

              {/* Card 4: Soil & Paver Blocks */}
              <Link
                href="/testing/soil-testing"
                className="group relative rounded-2xl overflow-hidden border border-white/20 bg-slate-900/70 shadow-lg hover:shadow-2xl hover:border-[#fe1f24] hover:-translate-y-1 transition-all duration-300 backdrop-blur-xs flex flex-col justify-between"
              >
                <div className="relative h-20 sm:h-22 w-full overflow-hidden bg-slate-800">
                  <img
                    src="/testing/soil-pavor-card.png"
                    alt="Soil & Paver Blocks Testing"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                </div>
                <div className="bg-slate-950/90 border-t border-white/10 text-white text-[11px] sm:text-xs font-bold text-center py-2.5 px-1.5 group-hover:text-red-400 transition-colors leading-tight">
                  Soil &amp; Paver Blocks
                </div>
              </Link>
            </div>

            {/* Company Overview Glass Card (Positioned at Very Bottom of Left Section) */}
            <div className="p-4 sm:p-4.5 rounded-2xl border border-white/15 border-l-4 border-l-[#fe1f24] bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40 backdrop-blur-md max-w-xl shadow-xl animate-fade-in-up animation-delay-250 mb-2 sm:mb-0">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/15 border border-red-500/30 text-red-500 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <div className="flex-1">
                  <h2 className="text-white font-bold text-sm sm:text-[14.5px] mb-1 tracking-wide flex flex-wrap items-center gap-2">
                    <span>Minu Quality Testing Laboratories</span>
                    <span className="text-[10px] font-semibold text-red-400 bg-red-500/15 px-2 py-0.5 rounded-full border border-red-500/25">
                      Pvt. Ltd.
                    </span>
                  </h2>
                  <p className="text-slate-300 text-[11.5px] sm:text-[12px] leading-relaxed font-normal">
                    Delivering reliable and accurate testing services for wood, plywood, water, furniture, cement, and industrial materials. Helping manufacturers and builders meet quality, safety, and compliance standards with complete confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Left Decorative Brand Swoosh (matching Image 2) */}
        <div className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-80 h-8 sm:h-10 pointer-events-none z-0 overflow-hidden">
          <svg viewBox="0 0 320 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 40H300C220 40 180 18 130 10C85 2 40 15 0 24V40Z" fill="#ffffff" />
            <path d="M0 40H270C205 40 170 22 122 13C80 5 36 17 0 26V40Z" fill="#ef4444" />
            <path d="M0 40H240C190 40 158 24 114 16C74 8 32 20 0 29V40Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── 2. TRUST STATS BAR (COMMENTED OUT) ──
      <section className="bg-[#081e35] border-y border-white/10 text-white reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-white/10">
            <div className="py-6 sm:py-7 px-4 text-center">
              <span className="block text-2xl sm:text-3xl lg:text-[32px] font-bold text-red-500 mb-1 tracking-tight">
                9 Core
              </span>
              <span className="block text-xs sm:text-[12.5px] font-medium text-gray-300 uppercase tracking-wider">
                Testing Disciplines
              </span>
            </div>
            <div className="py-6 sm:py-7 px-4 text-center">
              <span className="block text-2xl sm:text-3xl lg:text-[32px] font-bold text-red-500 mb-1 tracking-tight">
                Calibrated
              </span>
              <span className="block text-xs sm:text-[12.5px] font-medium text-gray-300 uppercase tracking-wider">
                Automated Test Rigs
              </span>
            </div>
            <div className="py-6 sm:py-7 px-4 text-center">
              <span className="block text-2xl sm:text-3xl lg:text-[32px] font-bold text-red-500 mb-1 tracking-tight">
                Quality
              </span>
              <span className="block text-xs sm:text-[12.5px] font-medium text-gray-300 uppercase tracking-wider">
                Controlled Testing
              </span>
            </div>
            <div className="py-6 sm:py-7 px-4 text-center">
              <span className="block text-2xl sm:text-3xl lg:text-[32px] font-bold text-red-500 mb-1 tracking-tight">
                100%
              </span>
              <span className="block text-xs sm:text-[12.5px] font-medium text-gray-300 uppercase tracking-wider">
                Verified Lab Reports
              </span>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* ── 3. ABOUT US SECTION ── */}
      <section id="about" className="py-20 bg-gradient-to-b from-[#f2f7fb] via-[#e9f2f8] to-[#f0f6fb] border-b border-slate-200/80 reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 mb-3 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
                <span className="text-[11px] font-bold text-red-700 tracking-wider uppercase">
                  Quality Evaluation Laboratory
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About Minu Quality Testing Laboratories
              </h2>
              <div className="w-16 h-1 bg-red-500 mx-auto mb-6 rounded-full" />
              <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                <b>Minu Quality Testing Laboratories Private Limited</b> is an independent commercial testing
                laboratory in Noida, Uttar Pradesh, India, providing professional testing and evaluation services for{" "}
                <b>wooden products, plywood, furniture, water, soil, cement, aggregates, and construction materials</b>.
                We assist manufacturers, builders, and contractors in verifying strength, durability, moisture stability, and chemical composition according to recognized technical benchmarks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Mission */}
              <div className="bg-gradient-to-br from-white via-white to-red-50/60 p-8 rounded-2xl border border-red-200/80 shadow-sm reveal-from-left">
                <Factory className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Our Mission &amp; Purpose
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                  Our mission is to deliver accurate, dependable, and practical testing solutions that empower manufacturers and project engineers to achieve compliance, product durability, and structural reliability.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  We maintain rigorous testing protocols and modern calibrated equipment across civil materials, structural timber, engineered panels, and hardware systems.
                </p>
              </div>

              {/* Values */}
              <div className="space-y-4 reveal-from-right">
                <div className="flex gap-4 items-start p-5 bg-white rounded-xl hover:shadow-md transition border border-slate-200/80 shadow-2xs">
                  <Target className="w-9 h-9 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-gray-900 mb-1">
                      Practical &amp; Accurate Testing
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Methods designed for real manufacturing conditions, ensuring dependable, repeatable, and actionable results.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 bg-white rounded-xl hover:shadow-md transition border border-slate-200/80 shadow-2xs">
                  <Shield className="w-9 h-9 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-gray-900 mb-1">
                      Quality &amp; Standards Compliance
                    </h4>
                    <p className="text-gray-600 text-sm">
                      All testing procedures strictly follow recognized quality systems, standard operating protocols, and verified calibration schedules.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 bg-white rounded-xl hover:shadow-md transition border border-slate-200/80 shadow-2xs">
                  <Globe className="w-9 h-9 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-gray-900 mb-1">
                      Industry-Standard Alignment
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Supporting compliance across established national, regional, and internationally accepted testing standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. ALL 9 TESTING DISCIPLINES SECTION ── */}
      <section id="services" className="py-20 sm:py-24 bg-gradient-to-b from-[#eaf2f8] via-[#e2edf6] to-[#e8f1f8] border-b border-slate-300/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 reveal-on-scroll">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 mb-3 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-red-600" />
              <span className="text-[11px] font-bold text-red-700 tracking-wider uppercase">
                Laboratory Scopes
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Certified Materials Testing Disciplines
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-4 rounded-full" />
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Professional physical, mechanical, and chemical evaluations performed under controlled laboratory conditions for construction and industrial materials.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testingDisciplines.map((service, idx) => {
              const Icon = service.icon;

              return (
                <div
                  key={idx}
                  className="card-interactive group bg-white/95 backdrop-blur-xs rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl hover:border-red-400 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-2xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {service.name}
                    </h3>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {service.highlights.map((item, hIdx) => (
                        <span
                          key={hIdx}
                          className="text-[10.5px] font-medium bg-red-50/70 text-red-700 border border-red-100 px-2 py-0.5 rounded-md"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-600 hover:text-red-700 group-hover:translate-x-1 transition-all pt-3 border-t border-gray-100"
                  >
                    View Testing Scope &amp; Parameters
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. LABORATORY INFRASTRUCTURE & EQUIPMENT SECTION ── */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-[#06182b] via-[#09223e] to-[#0b2b4d] text-white border-y border-white/10 reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-3 shadow-2xs backdrop-blur-md">
              <Cpu className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-[11px] font-bold text-sky-300 tracking-wider uppercase">
                Laboratory Capabilities
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Modern Laboratory Testing Infrastructure
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-4 rounded-full" />
            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
              Equipped with calibrated servo-controlled load frames, environmental conditioning chambers, and high-readability analytical instruments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {labEquipment.map((eq, idx) => {
              const EqIcon = eq.icon;
              return (
                <div
                  key={idx}
                  className="card-interactive bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-xl transition-all duration-300 backdrop-blur-md"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/15 border border-cyan-400/20 text-cyan-300 flex items-center justify-center shadow-xs">
                      <EqIcon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-cyan-300 bg-cyan-950/70 border border-cyan-800/80 px-2.5 py-0.5 rounded-full">
                      {eq.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1">
                    {eq.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wide mb-2.5">
                    {eq.subtitle}
                  </p>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {eq.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. 4-STEP TESTING WORKFLOW SECTION ── */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-[#f3f7fb] via-[#eaf1f7] to-[#e2ebf4] border-b border-slate-300/80 reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 mb-3 shadow-2xs">
              <ClipboardCheck className="w-3.5 h-3.5 text-red-600" />
              <span className="text-[11px] font-bold text-red-700 tracking-wider uppercase">
                Standard Operating Procedure
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our 4-Step Testing &amp; Reporting Lifecycle
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-4 rounded-full" />
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              A transparent, milestone-driven testing process engineered to deliver verified accuracy with dependable reporting.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {processSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={idx}
                  className="card-interactive group bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl hover:border-red-400 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-red-500 tracking-tight">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                        <StepIcon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-red-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. INDUSTRIES & APPLICATIONS SECTION ── */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-[#edf4f9] via-[#e5eef6] to-[#edf4f9] border-b border-slate-300/80 reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 mb-3 shadow-2xs">
              <Building2 className="w-3.5 h-3.5 text-red-600" />
              <span className="text-[11px] font-bold text-red-700 tracking-wider uppercase">
                Cross-Sector Solutions
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Industries &amp; Engineering Projects We Support
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-4 rounded-full" />
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Delivering independent material verification for civil infrastructure, commercial construction, industrial manufacturing, and architectural fittings.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {industriesServed.map((ind, idx) => {
              const IndIcon = ind.icon;
              return (
                <div
                  key={idx}
                  className="card-interactive group bg-white border border-slate-200/90 rounded-2xl p-6 hover:border-red-400 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 mb-4 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <IndIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2.5">
                    {ind.subtitle}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {ind.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 8. QUALITY PRINCIPLES SECTION ── */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-[#07182b] via-[#0d2a4a] to-[#091f36] text-white border-y border-white/10 reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-3 shadow-2xs backdrop-blur-md">
              <Award className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-[11px] font-bold text-sky-300 tracking-wider uppercase">
                Quality Assurance
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Why Engineers &amp; Builders Choose MQTL
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-4 rounded-full" />
            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
              Our testing operations adhere strictly to rigorous quality control, periodic calibration, and dual-tier technical review.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {qualityPillars.map((q, idx) => {
              const QIcon = q.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 hover:border-red-400/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 mb-4">
                    <QIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {q.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed">
                    {q.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 9. SAMPLE SUBMISSION GUIDELINES SECTION ── */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-[#f1f6fa] via-[#e8f1f8] to-[#dfebf4] border-b border-slate-300/80 reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 mb-3 shadow-2xs">
              <Boxes className="w-3.5 h-3.5 text-red-600" />
              <span className="text-[11px] font-bold text-red-700 tracking-wider uppercase">
                Technical Guidance
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Sample Submission &amp; Preparation Guidelines
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-4 rounded-full" />
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Follow these simple preparation tips to ensure your test specimens arrive in prime condition for evaluation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {submissionGuides.map((guide, idx) => {
              const GuideIcon = guide.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-red-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                      <GuideIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-base mb-2">
                      {guide.category}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed">
                      {guide.guideline}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-r from-white via-white to-sky-50/50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-bold text-gray-900 mb-1">
                Need Guidance on Specific Sizing or Quantities?
              </h4>
              <p className="text-sm text-gray-600">
                Our laboratory engineers can advise you on exact sample quantities and preparation details.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href="tel:+919971234474"
                className="btn-shimmer px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold text-xs sm:text-sm rounded-xl flex items-center gap-2 shadow-sm"
              >
                <PhoneCall className="w-4 h-4" />
                Call: +91 99712 34474
              </a>
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("home-enquiry-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm rounded-xl transition cursor-pointer"
              >
                Request Callback
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. CTA BANNER + CONSULTATION FORM SECTION ── */}
      <section className="py-16 bg-gradient-to-r from-[#07182b] via-[#0b2440] to-[#0f3c5f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side Content */}
            <div className="text-white pt-2 pb-6 reveal-from-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-4 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                <span className="text-xs font-bold text-white tracking-wider uppercase">
                  Technical Assistance
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-5">
                Ready to Ensure Quality, Durability &amp; Compliance?
              </h2>

              <p className="text-base sm:text-lg text-slate-200 mb-8 leading-relaxed">
                Partner with Minu Quality Testing Laboratories for dependable material testing, calibrated equipment, and verified test certificates. We help you verify standards, strengthen customer confidence, and prevent costly structural defects.
              </p>

              <div className="space-y-3.5 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm sm:text-base text-slate-200">
                    Transparent, itemized pricing for single samples and recurring batches
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm sm:text-base text-slate-200">
                    Standard testing reports delivered in 2 to 5 working days
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm sm:text-base text-slate-200">
                    Direct access to qualified civil and materials testing engineers
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href="tel:+919971234474"
                  className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-red-400 transition"
                >
                  <PhoneCall className="w-4 h-4 text-red-400" />
                  Helpline: +91 99712 34474
                </a>
                <span className="text-white/30">•</span>
                <span className="text-xs sm:text-sm text-slate-300">
                  Noida, Sector 155
                </span>
              </div>
            </div>

            {/* Right Side Form */}
            <div
              id="home-enquiry-form"
              className="bg-white p-7 sm:p-9 rounded-2xl shadow-2xl scroll-mt-24 reveal-from-right"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                Submit Testing Requirement
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Fill out the form and our technical team will contact you promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name / Organization"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={10}
                      placeholder="10-Digit Mobile No."
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your material testing requirements, sample counts, or target parameters..."
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`btn-shimmer w-full py-3.5 text-white text-sm font-bold cursor-pointer rounded-xl transition flex items-center justify-center gap-2 shadow-md
                ${
                  status === "loading"
                    ? "bg-red-400 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700 hover:shadow-lg active:scale-[0.99]"
                }`}
                >
                  {status === "loading" && (
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  )}
                  {status === "loading"
                    ? "Submitting Requirement..."
                    : "Submit Testing Enquiry →"}
                </button>

                {status === "success" && (
                  <div className="mt-3 bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-xl text-xs sm:text-sm text-center font-medium">
                    ✅ Your enquiry was submitted successfully. Our laboratory team will connect with you shortly.
                  </div>
                )}

                {status === "error" && (
                  <div className="mt-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-xs sm:text-sm text-center font-medium">
                    ❌ Something went wrong while submitting. Please call us directly at +91 99712 34474.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. FREQUENTLY ASKED QUESTIONS (FAQ) SECTION ── */}
      <section
        className="py-16 sm:py-24 bg-gradient-to-b from-[#f0f5fa] via-[#e6f0f7] to-[#dceaf3] border-t border-slate-300"
        id="faqs"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal-on-scroll">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 mb-3 shadow-2xs">
              <HelpCircle className="w-3.5 h-3.5 text-red-600" />
              <span className="text-[11px] font-bold text-red-700 tracking-wider uppercase">
                Frequently Asked Questions
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#05526e] tracking-tight">
              Got Questions? We Have Answers.
            </h2>
            <p className="mt-2 text-sm sm:text-[15px] text-slate-500 leading-relaxed">
              Find technical answers about material testing standards, sample submission, and verified laboratory reports at MQTL.
            </p>
          </div>

          <div className="space-y-3.5 max-w-5xl mx-auto reveal-on-scroll">
            {homeFaqs.map((faq) => (
              <details
                key={faq.id}
                className="group bg-white border border-slate-300/80 rounded-xl overflow-hidden transition-all duration-200 shadow-2xs hover:shadow-sm open:border-[#05526e]/60 open:shadow-sm"
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

          {/* Bottom Card */}
          <div className="reveal-scale mt-12 max-w-5xl mx-auto bg-gradient-to-br from-[#05526e] via-[#0a455c] to-[#0f3c5f] rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                Have a testing requirement not listed here?
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
                onClick={() =>
                  document
                    .getElementById("home-enquiry-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-shimmer w-full sm:w-auto px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:scale-102 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                Submit Enquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
