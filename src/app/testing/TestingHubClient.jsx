"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Trees,
  Layers,
  Droplet,
  Sofa,
  Wrench,
  Building2,
  Mountain,
  Box,
  Blocks,
  Shield,
  FileText,
  Clock,
  ChevronRight,
  HelpCircle,
  ChevronDown,
  PhoneCall,
  Check,
  Microscope,
  Award,
  ArrowRight,
  MapPin,
  ExternalLink,
  Compass,
} from "lucide-react";

const ALL_SERVICES = [
  {
    id: "wood-testing",
    title: "Wood Testing Services",
    category: "Timber & Wood",
    description:
      "Physical and mechanical evaluation of structural timber, hardwood, and softwood species for seasoning, density, and load capacity.",
    image: "/wood-testing-service.jpeg",
    link: "/testing/wood-testing",
    icon: Trees,
    standard: "Structural & Seasoning",
    sampleReq: "50x50 mm clear coupons or timber logs",
    parameters: [
      "Moisture Content (Oven-Dry)",
      "Specific Gravity & Density",
      "Static Bending (MOR & MOE)",
      "Parallel Compression Strength",
    ],
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
  },
  {
    id: "plywood-testing",
    title: "Plywood Testing Services",
    category: "Timber & Wood",
    description:
      "Standardized testing of commercial (MR), marine (BWP), boiling water resistant (BWR), and shuttering plywood panels for glue bond integrity.",
    image: "/plywood-testing-service.jpeg",
    link: "/testing/plywood-testing",
    icon: Layers,
    standard: "Bond Integrity & Water Resistance",
    sampleReq: "Full panel or 300x300 mm cut specimens",
    parameters: [
      "72-hr Boiling Water Resistance",
      "Glue Shear Bond Strength",
      "Modulus of Rupture (MOR)",
      "Modulus of Elasticity (MOE)",
    ],
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
  },
  {
    id: "water-testing",
    title: "Water Testing Services",
    category: "Water & Environmental",
    description:
      "Chemical, physical, and potability analysis for drinking water, construction batching water, effluent discharge, and industrial applications.",
    image: "/waterTesting.jpg",
    link: "/testing/water-testing",
    icon: Droplet,
    standard: "Potability & Construction Batching",
    sampleReq: "1–2 Liters in airtight sealed bottle",
    parameters: [
      "Drinking Water Potability Assays",
      "Concrete Mixing & Batching Water",
      "pH & Total Dissolved Solids (TDS)",
      "Total Hardness & Chloride Content",
    ],
    badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
  },
  {
    id: "cement-testing",
    title: "Cement Testing Services",
    category: "Civil & Construction",
    description:
      "Physical and compressive strength testing of Ordinary Portland Cement (OPC), Pozzolana Portland Cement (PPC), and masonry cements.",
    image: "/Cement Testing.jpg",
    link: "/testing/cement-testing",
    icon: Building2,
    standard: "Compressive Strength & Fineness",
    sampleReq: "5–10 kg sealed in moisture-proof polybag",
    parameters: [
      "Compressive Strength at 3, 7 & 28 Days",
      "Initial & Final Setting Times (Vicat)",
      "Standard Consistency Assays",
      "Le Chatelier Soundness & Fineness",
    ],
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
  },
  {
    id: "paver-block-testing",
    title: "Concrete Paver Block Testing",
    category: "Civil & Construction",
    description:
      "Quality verification for interlocking precast concrete paver blocks across pedestrian, vehicular, and heavy-duty traffic pavement grades.",
    image: "/paverBlockTesting.jpg",
    link: "/testing/concrete-paver-block-testing",
    icon: Blocks,
    standard: "Precast Paving Block Strength",
    sampleReq: "8–16 representative blocks per lot",
    parameters: [
      "Compressive Strength (M-30 to M-55)",
      "Water Absorption Evaluation (<6%)",
      "Dimensional Tolerances & Aspect Ratio",
      "Abrasion & Splitting Tensile Strength",
    ],
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
  },
  {
    id: "aggregates-testing",
    title: "Aggregates Testing Services",
    category: "Civil & Construction",
    description:
      "Mechanical and geological quality testing of coarse and fine aggregates for road subbase, concrete mix designs, and railway ballast.",
    image: "/Aggregates Testing.jpg",
    link: "/testing/aggregates-testing",
    icon: Mountain,
    standard: "Gradation & Crushing Toughness",
    sampleReq: "20–30 kg representative bag",
    parameters: [
      "Aggregate Crushing Value (ACV)",
      "Aggregate Impact Value (AIV)",
      "Flakiness & Elongation Indices",
      "Sieve Analysis & Fineness Modulus",
    ],
    badgeColor: "bg-slate-100 text-slate-800 border-slate-200",
  },
  {
    id: "soil-testing",
    title: "Soil Testing Services",
    category: "Civil & Construction",
    description:
      "Comprehensive geotechnical soil investigation for building foundations, highway subgrade stability, pavement design, and embankments.",
    image: "/Soil Testing.jpg",
    link: "/testing/soil-testing",
    icon: Box,
    standard: "Subgrade CBR & Compaction",
    sampleReq: "10–20 kg disturbed or undisturbed core",
    parameters: [
      "California Bearing Ratio (CBR Value)",
      "Direct Shear & Compaction Tests",
      "Atterberg Limits (Liquid & Plastic)",
      "Grain Size Distribution & OMC",
    ],
    badgeColor: "bg-stone-100 text-stone-800 border-stone-200",
  },
  {
    id: "furniture-testing",
    title: "Furniture Testing Services",
    category: "Mechanical & Hardware",
    description:
      "Static load-bearing, cyclic durability, impact resistance, and structural stability testing for chairs, desks, cabinets, and institutional fittings.",
    image: "/Furniture Testing.jpg",
    link: "/testing/furniture-testing",
    icon: Sofa,
    standard: "Structural Load & Cyclic Durability",
    sampleReq: "1 complete production assembly",
    parameters: [
      "Static Proof Load & Deflection Capacity",
      "Cyclic Fatigue & Joint Rigidity",
      "Drop Impact & Overturn Stability",
      "Armrest & Backrest Cyclic Loading",
    ],
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
  },
  {
    id: "hinges-testing",
    title: "Hinges Testing Services",
    category: "Mechanical & Hardware",
    description:
      "Operational endurance cycle testing, knuckle play tolerance measurement, and accelerated salt spray corrosion resistance for architectural hardware.",
    image: "/Hinges Testing.jpg",
    link: "/testing/hinges-testing",
    icon: Wrench,
    standard: "Endurance Cycles & Salt Spray Fog",
    sampleReq: "3–6 hinge specimens with screws",
    parameters: [
      "100,000+ Cycles Operational Endurance",
      "Neutral Salt Spray (NSS) Corrosion Fog",
      "Knuckle Play & Lateral Clearance",
      "Static Proof Load Rigidity",
    ],
    badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
  },
];

const testingFaqs = [
  {
    q: "How can I submit material samples for laboratory testing?",
    a: "You can submit material samples by contacting our technical team via phone or email, or by scheduling a dispatch with our coordinators. We recommend reaching out prior to dispatch to confirm required sample quantities, dimensions, and protective packaging requirements.",
  },
  {
    q: "How are laboratory test certificates issued and delivered?",
    a: "Following the completion of physical, mechanical, and chemical evaluations, verified laboratory test certificates are issued with full sample traceability and delivered securely in digital format or certified hard copy.",
  },
  {
    q: "Are MQTL test reports acceptable for government and commercial tenders?",
    a: "Yes. Our testing protocols strictly follow rigorous quality assurance standards. Every test certificate contains complete sample traceability, test conditions, observed readings, and standard reference tolerance limits required by consultants and procurement authorities.",
  },
  {
    q: "Can you provide bulk testing contracts or recurring QC agreements for projects?",
    a: "Yes. We offer long-term quality control testing partnerships for builders, EPC contractors, plywood mills, and industrial manufacturers. Corporate contracts include priority queueing, dedicated laboratory coordination, and volume-discounted rates.",
  },
];

export default function TestingHubClient() {
  return (
    <div className="bg-[#f8fafc]">
      {/* ── HERO SECTION: Materials Testing Directory & Hub ── */}
      <section className="relative bg-gradient-to-br from-[#07182b] via-[#0b2440] to-[#07182b] text-white overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-white/10">
        {/* Subtle decorative glow elements */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Breadcrumb & Status */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
            <nav className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-red-400 font-semibold">Testing Catalog</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/90 text-[11px] font-semibold tracking-wide backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Certified Testing Facility</span>
            </div>
          </div>

          {/* Main 2-Column Hero Grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Description & CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
                <Compass className="w-3.5 h-3.5" />
                <span>TESTING SERVICES DIRECTORY</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-[1.18] mb-4">
                Explore Certified Materials <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-white">Testing Disciplines</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
                Minu Quality Testing Laboratories provides professional physical, mechanical, and chemical evaluation across civil construction, timber, water, and architectural hardware. Select a discipline below to view test scopes, sample requirements, and testing parameters.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#directory"
                  className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-red-600/30 transition-all hover:scale-[1.02]"
                >
                  <span>Explore Disciplines</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="tel:+919971234474"
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 backdrop-blur-md transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Call Lab Desk: +91 99712 34474</span>
                </a>
              </div>
            </div>

            {/* Right Column: 4 Laboratory Credentials & Capability Cards */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center mb-2.5">
                    <Microscope className="w-4 h-4" />
                  </div>
                  <h4 className="text-white font-bold text-xs sm:text-sm mb-1">
                    Calibrated Test Rigs
                  </h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Digital UTMs, compression testers, and cyclic hardware endurance setups.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center mb-2.5">
                    <FileText className="w-4 h-4" />
                  </div>
                  <h4 className="text-white font-bold text-xs sm:text-sm mb-1">
                    Certified Lab Reports
                  </h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Complete digital documentation with verified testing observations.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <h4 className="text-white font-bold text-xs sm:text-sm mb-1">
                    Verified Certificates
                  </h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Verified third-party quality test certificates accepted by tenders.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-2.5">
                    <Shield className="w-4 h-4" />
                  </div>
                  <h4 className="text-white font-bold text-xs sm:text-sm mb-1">
                    Quality Controlled
                  </h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Strict adherence to quality assurance and test repeatability protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE DIRECTORY ── */}
      <section id="directory" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
              LABORATORY DISCIPLINES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              Materials Testing Services Directory
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-semibold">
            {ALL_SERVICES.length} Testing Disciplines
          </span>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {ALL_SERVICES.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                  {/* Image Header with Floating Badges */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                    {/* Standard Badge */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="bg-red-600 text-white text-[11px] font-black px-2.5 py-1 rounded-md shadow-sm">
                        {service.standard}
                      </span>
                    </div>

                    {/* Certified Report Badge */}
                    <div className="absolute top-3.5 right-3.5">
                      <span className="bg-slate-900/80 backdrop-blur-md text-slate-100 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/15 flex items-center gap-1">
                        <FileText className="w-3 h-3 text-emerald-400" />
                        Certified Report
                      </span>
                    </div>

                    {/* Category Label at bottom of image */}
                    <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-200 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Information */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Title & Icon */}
                      <div className="flex items-center gap-3 mb-2.5">
                        <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 border border-red-100 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-200">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                          {service.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Key Tested Parameters */}
                      <div className="mb-4">
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Evaluated Parameters
                        </p>
                        <ul className="space-y-1.5">
                          {service.parameters.map((param, pIdx) => (
                            <li
                              key={pIdx}
                              className="flex items-center gap-2 text-xs text-slate-700"
                            >
                              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span className="truncate">{param}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Card Footer: Action Button */}
                    <div className="pt-4 border-t border-slate-100 mt-2">
                      <Link
                        href={service.link}
                        className="btn-shimmer w-full bg-slate-900 hover:bg-red-600 text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 shadow-xs"
                      >
                        <span>View Full Testing Scope</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
      </section>

      {/* ── TESTING MATRIX COMPARISON TABLE ── */}
      <section className="py-14 sm:py-18 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
              QUICK REFERENCE MATRIX
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              Material Testing Specifications at a Glance
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
              Review published test standards, recommended sample submission sizes, and certified scopes across our laboratory services.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
            <table className="w-full text-left text-xs sm:text-[13px]">
              <thead className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-4">Testing Service</th>
                  <th className="py-3.5 px-4">Discipline</th>
                  <th className="py-3.5 px-4">Testing Scope</th>
                  <th className="py-3.5 px-4">Sample Requirement</th>
                  <th className="py-3.5 px-4">Reporting</th>
                  <th className="py-3.5 px-4 text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {ALL_SERVICES.map((s, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      {s.title}
                    </td>
                    <td className="py-3 px-4 text-slate-600">{s.category}</td>
                    <td className="py-3 px-4">
                      <span className="font-semibold text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        {s.standard}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-500">{s.sampleReq}</td>
                    <td className="py-3 px-4 font-semibold text-slate-800">Certified Report</td>
                    <td className="py-3 px-4 text-right">
                      <Link
                        href={s.link}
                        className="font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1"
                      >
                        Scope <ExternalLink className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ── */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Questions About Laboratory Testing Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto mt-2">
              Technical answers regarding testing procedures, report validity, sample evaluation, and test parameters.
            </p>
          </div>

          <div className="space-y-3.5">
            {testingFaqs.map((faq, fIdx) => (
              <details
                key={fIdx}
                className="group bg-slate-50/70 border border-slate-200/90 rounded-xl overflow-hidden transition-all duration-200 open:bg-white open:shadow-xs"
              >
                <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer list-none font-semibold text-slate-900 text-xs sm:text-sm select-none hover:text-red-600 transition-colors">
                  <span className="flex items-center gap-3 pr-2">
                    <span className="w-6 h-6 rounded-md bg-red-50 text-red-600 font-bold text-xs flex items-center justify-center shrink-0 group-open:bg-red-600 group-open:text-white transition-colors">
                      Q{fIdx + 1}
                    </span>
                    <span className="leading-snug">{faq.q}</span>
                  </span>
                  <ChevronDown className="w-4 h-4 text-slate-400 group-open:text-red-600 transition-transform duration-300 group-open:rotate-180 shrink-0 ml-2" />
                </summary>

                <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-white">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-[#081e35] text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="font-bold text-white text-sm sm:text-base">
                Need a customized testing matrix or bulk quote?
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Our materials testing engineers in Noida are on call to assist.
              </p>
            </div>
            <a
              href="tel:+919971234474"
              className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm shrink-0 transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call: +91 99712 34474</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

