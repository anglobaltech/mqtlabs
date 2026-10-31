import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Settings,
  FileText,
  Users,
  FlaskConical,
  ShieldCheck,
  Droplet,
  Layers,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Award,
  Clock,
  Scale,
  Microscope,
  HelpCircle,
  Check,
  CheckCircle,
  Beaker,
  Factory,
  Waves,
  Building2,
  Utensils,
  Activity,
  FileCheck,
  Sparkles,
  ClipboardList,
  BookOpen,
  Thermometer,
} from "lucide-react";

export const metadata = {
  title: "pH Water Testing in Noida | Acidity & Alkalinity Testing – MQTL",
  description:
    "Get professional pH water testing in Noida with electrometric analysis, calibrated digital pH meters and verified laboratory reports. Contact MQTL for water quality testing.",
  keywords: [
    "pH Water Testing in Noida",
    "pH Water Testing Services",
    "Water pH Testing Laboratory",
    "Acidity & Alkalinity Testing",
    "Drinking Water pH Testing",
    "Construction Water pH Testing",
    "Electrometric Water Testing",
    "Water Testing Lab Noida",
    "Water Testing Lab Delhi NCR",
    "Minu Quality Testing Laboratories Private Limited",
    "MQTL Lab",
  ],
  alternates: {
    canonical: "https://mqtlab.com/testing/water-testing/ph-testing",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "pH Water Testing in Noida | Acidity & Alkalinity Testing – MQTL",
    description:
      "Professional pH water testing laboratory in Noida providing electrometric acidity and alkalinity analysis, calibrated instrumentation, and verified laboratory test reports.",
    url: "https://mqtlab.com/testing/water-testing/ph-testing",
    siteName: "MQTL - Minu Quality Testing Laboratories Private Limited",
    images: [
      {
        url: "/waterTesting1.jpg",
        width: 1200,
        height: 630,
        alt: "MQTL pH Water Testing Laboratory Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "pH Water Testing in Noida | Acidity & Alkalinity Testing – MQTL",
    description:
      "Professional pH water testing in Noida with electrometric analysis, calibrated digital pH meters and verified laboratory test reports.",
    images: ["/waterTesting1.jpg"],
  },
};

const standardsData = [
  {
    application: "Potable Drinking Water (IS 10500:2012)",
    acceptable: "6.5 – 8.5",
    operational: "Acceptable limit (no relaxation permitted)",
    impact: "Values below 6.5 can increase corrosivity to plumbing and metal fixtures; values above 8.5 may promote mineral encrustation and reduce chlorine disinfection efficiency.",
  },
  {
    application: "Concrete Mixing & Curing Water (IS 456:2000)",
    acceptable: "Min 6.0",
    operational: "Not less than 6.0",
    impact: "Water with pH below 6.0 can interfere with cement hydration, retard setting times, and increase the risk of reinforcement steel corrosion.",
  },
  {
    application: "Industrial Boiler Feedwater",
    acceptable: "Programme-Specific",
    operational: "Governed by boiler design, pressure & treatment programme",
    impact: "Controlled alkaline conditions help maintain a passive protective oxide layer on boiler tubes to prevent acidic pitting.",
  },
  {
    application: "Cooling Tower Recirculating Water",
    acceptable: "System-Specific",
    operational: "Determined by water chemistry, cycles & chemical treatment",
    impact: "Target operational range balances calcium carbonate scale mitigation with corrosion control across system metallurgy.",
  },
  {
    application: "Swimming Pool & Recreational Water",
    acceptable: "7.2 – 7.8",
    operational: "Commonly used operational target (not a statutory limit)",
    impact: "Maintains bather skin and eye comfort while supporting effective residual sanitizer and chlorine action.",
  },
  {
    application: "Agricultural Irrigation Water",
    acceptable: "Site & Crop-Dependent",
    operational: "Typically 6.5 – 8.4 depending on soil buffering capacity",
    impact: "Extreme pH levels can alter soil chemistry and restrict the root uptake of essential plant micronutrients.",
  },
  {
    application: "Treated Industrial Process Effluent",
    acceptable: "5.5 – 9.0",
    operational: "General discharge standard (consent conditions may be stricter)",
    impact: "Protects municipal drainage systems and natural receiving water bodies from acute chemical disturbance.",
  },
];

const phApplications = [
  {
    title: "Drinking & Potable Water",
    desc: "Verification of municipal tap supply, residential borewells, and packaged water against national drinking water quality benchmarks.",
    icon: Droplet,
  },
  {
    title: "Civil Construction & Concrete",
    desc: "Testing water intended for concrete mixing and curing to safeguard cement hydration chemistry and reinforcement durability.",
    icon: Building2,
  },
  {
    title: "Boilers & Steam Systems",
    desc: "Routine pH monitoring of boiler feed and condensate water to protect metal surfaces from acid corrosion and scaling.",
    icon: Factory,
  },
  {
    title: "Commercial RO & Filtration",
    desc: "Pre-filtration and post-treatment pH verification to evaluate mineral balance and filtration membrane performance.",
    icon: ShieldCheck,
  },
  {
    title: "Food & Beverage Processing",
    desc: "Ingredient and utility water testing to maintain product consistency, microbial stability, and processing hygiene.",
    icon: Utensils,
  },
  {
    title: "Treated Effluents & Compliance",
    desc: "Discharge assessment of treated wastewater effluents to ensure alignment with applicable environmental consent conditions.",
    icon: Waves,
  },
];

const phSteps = [
  {
    step: "01",
    title: "Sample Receipt & Logging",
    desc: "Samples are logged, checked for proper sealing and container integrity, and assigned a laboratory tracking code.",
  },
  {
    step: "02",
    title: "Temperature Monitoring",
    desc: "Sample temperature is measured and recorded during analysis to account for temperature-dependent electrode response.",
  },
  {
    step: "03",
    title: "Certified Buffer Calibration",
    desc: "Two-point or three-point calibration using certified standard buffer solutions covering the expected pH range.",
  },
  {
    step: "04",
    title: "Electrometric Reading",
    desc: "Measurement using a clean combination glass electrode with gentle agitation until a stable reading is established.",
  },
  {
    step: "05",
    title: "Laboratory-Verified Test Report",
    desc: "Results are reviewed against applicable reference standards and issued as a verified laboratory test report with a QR code.",
  },
];

const faqs = [
  {
    q: "What is the acceptable pH range for drinking water in India?",
    a: "Under BIS IS 10500:2012, the acceptable pH range for drinking water is 6.5 to 8.5, with no relaxation permitted. Water with a pH below 6.5 is acidic and can increase plumbing corrosivity, while water above 8.5 is alkaline and may cause scaling or a bitter taste.",
  },
  {
    q: "Why is water pH testing important for concrete mixing and construction?",
    a: "IS 456:2000 specifies that water used for mixing and curing concrete must have a pH value not less than 6.0. Acidic water can impede cement hydration, delay setting time, reduce compressive strength, and accelerate the corrosion of steel reinforcement.",
  },
  {
    q: "What does Automatic Temperature Compensation (ATC) actually do?",
    a: "Automatic Temperature Compensation compensates for the temperature-dependent response of the pH electrode itself. It improves measurement consistency by adjusting the electrode slope according to temperature, but it does not automatically convert the sample's actual pH to its value at 25°C.",
  },
  {
    q: "How should water samples be collected and submitted for pH testing?",
    a: "Water samples should be collected in clean, suitable polyethylene or glass containers, securely sealed, and protected from contamination. Exposure to atmospheric carbon dioxide can alter sample pH over time, so samples should be transported promptly to the laboratory and analyzed as soon as practicable.",
  },
  {
    q: "Is pH 7.0 always the exact neutral point for water?",
    a: "Neutrality is temperature-dependent. At 25°C, neutral pH is approximately 7.0. Because the ionization constant of water changes with temperature, the exact neutral point shifts slightly at other temperatures.",
  },
  {
    q: "Can pH testing be combined with Total Dissolved Solids (TDS) and other water tests?",
    a: "Yes. Many clients combine pH testing with Total Dissolved Solids (TDS), total hardness, alkalinity, chloride, sulfate, and microbiological screening for a comprehensive water quality assessment.",
  },
];

export default function PhTestingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://mqtlab.com/testing/water-testing/ph-testing#service",
        name: "pH Water Testing Services in Noida – Acidity & Alkalinity Analysis",
        serviceType: "Water Quality Testing",
        provider: {
          "@type": "LocalBusiness",
          "@id": "https://mqtlab.com/#laboratory",
          name: "Minu Quality Testing Laboratories Private Limited",
          url: "https://mqtlab.com",
          telephone: "+91-9971234474",
          email: "info@mqtlab.com",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Plot No. 79, Sector 155",
            addressLocality: "Noida",
            addressRegion: "Uttar Pradesh",
            postalCode: "201310",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 28.4552,
            longitude: 77.4977,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "09:00",
              closes: "18:30",
            },
          ],
        },
        areaServed: [
          { "@type": "City", name: "Noida" },
          { "@type": "City", name: "Greater Noida" },
          { "@type": "City", name: "Delhi NCR" },
          { "@type": "Country", name: "India" },
        ],
        description:
          "Professional pH water testing services in Noida offering electrometric analysis, calibrated digital instrumentation, and verified laboratory test reports.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://mqtlab.com/testing/water-testing/ph-testing#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://mqtlab.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Testing Services",
            item: "https://mqtlab.com/testing",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Water Testing",
            item: "https://mqtlab.com/testing/water-testing",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "pH Water Testing",
            item: "https://mqtlab.com/testing/water-testing/ph-testing",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://mqtlab.com/testing/water-testing/ph-testing#faq",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-white text-slate-800">
        {/* Hero Section */}
        <section className="relative w-full bg-[#eef4f9] lg:bg-[#06182b] overflow-hidden">
          {/* Mobile & Tablet */}
          <div className="lg:hidden relative px-4 py-8 sm:px-6 sm:py-10 bg-gradient-to-b from-[#f3f7fa] via-[#e9f1f6] to-[#dfebf3] border-b border-slate-300/80">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-500" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-200/40 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

            <div className="relative z-10 max-w-xl mx-auto sm:max-w-none">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-sky-200/80 shadow-2xs mb-3 animate-fade-in-up">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-600 animate-pulse" />
                <span className="text-sky-800 font-bold tracking-wider text-[11px] uppercase">
                  WATER TESTING SPECIALIZATION
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-2.5 animate-fade-in-up animation-delay-100">
                pH Water Testing Services in Noida – Acidity &amp; Alkalinity Analysis
              </h1>

              <p className="text-slate-600 text-xs sm:text-[14px] leading-relaxed mb-5 animate-fade-in-up animation-delay-200">
                Professional electrometric pH analysis using calibrated digital pH meters with temperature compensation. Essential for drinking water quality, concrete batching, and industrial water systems.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-5 animate-fade-in-up animation-delay-300">
                <Link
                  href="/contact-us"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-sm px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  Request a Test
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/testing/water-testing"
                  className="bg-white/85 hover:bg-white text-slate-700 hover:text-slate-900 border border-slate-300/80 font-bold text-sm px-6 py-3.5 rounded-xl flex items-center justify-center shadow-2xs transition-all"
                >
                  All Water Services
                </Link>
              </div>

              <div className="p-3.5 rounded-xl bg-white/80 backdrop-blur-xs border border-white/90 shadow-2xs animate-fade-in-up animation-delay-400">
                <div className="grid grid-cols-3 gap-2 text-center divide-x divide-slate-200">
                  <div className="px-1">
                    <p className="text-[10px] uppercase font-bold text-slate-400">Method</p>
                    <p className="text-xs font-bold text-slate-800">Electrometric</p>
                  </div>
                  <div className="px-1">
                    <p className="text-[10px] uppercase font-bold text-slate-400">Resolution</p>
                    <p className="text-xs font-bold text-slate-800">0.01 pH</p>
                  </div>
                  <div className="px-1">
                    <p className="text-[10px] uppercase font-bold text-slate-400">Reports</p>
                    <p className="text-xs font-bold text-slate-800">Verified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden lg:block relative w-full aspect-[2.75/1] min-h-[380px] max-h-[500px] overflow-hidden">
            <Image
              src="/testing/ph-testing-services.png"
              alt="pH Water Testing Services Laboratory"
              fill
              priority
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent z-10" />

            <div className="relative z-20 h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
              <div className="max-w-2xl py-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-xs mb-3 animate-fade-in-up">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  <span className="text-sky-300 font-bold tracking-wider text-[11px] uppercase">
                    WATER QUALITY TESTING SPECIALIZATION
                  </span>
                </div>

                <h1 className="text-3xl xl:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3 animate-fade-in-up animation-delay-100">
                  pH Water Testing Services in Noida – Acidity &amp; Alkalinity Analysis
                </h1>

                <p className="text-slate-200 text-sm xl:text-[15px] leading-relaxed mb-6 max-w-xl animate-fade-in-up animation-delay-200">
                  Professional electrometric pH testing utilizing calibrated digital meters and combination glass electrodes. Verify acidity and alkalinity balance for drinking water safety, concrete mixing durability, and industrial system protection.
                </p>

                <div className="flex items-center gap-3.5 mb-6 animate-fade-in-up animation-delay-300">
                  <Link
                    href="/contact-us"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    Request a Test
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/testing/water-testing"
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold text-sm px-6 py-3 rounded-lg backdrop-blur-xs transition-all"
                  >
                    Water Testing Overview
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/20 max-w-lg animate-fade-in-up animation-delay-400">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="text-xs font-semibold text-white">Electrometric Method</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Settings className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="text-xs font-semibold text-white">Digital ATC Electrode</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="text-xs font-semibold text-white">Verified Reports</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="bg-[#081e35] border-y border-white/10 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="py-7 sm:py-8 px-4 text-center">
                <span className="block text-3xl sm:text-4xl lg:text-[40px] font-black text-red-500 mb-1.5 tracking-tight">
                  0 – 14
                </span>
                <span className="block text-xs sm:text-[13px] font-bold text-gray-200 uppercase tracking-wider">
                  Conventional pH Scale
                </span>
              </div>
              <div className="py-7 sm:py-8 px-4 text-center">
                <span className="block text-3xl sm:text-4xl lg:text-[40px] font-black text-red-500 mb-1.5 tracking-tight">
                  0.01
                </span>
                <span className="block text-xs sm:text-[13px] font-bold text-gray-200 uppercase tracking-wider">
                  Measurement Resolution
                </span>
              </div>
              <div className="py-7 sm:py-8 px-4 text-center">
                <span className="block text-3xl sm:text-4xl lg:text-[40px] font-black text-red-500 mb-1.5 tracking-tight">
                  IS 3025
                </span>
                <span className="block text-xs sm:text-[13px] font-bold text-gray-200 uppercase tracking-wider">
                  Standardized Method
                </span>
              </div>
              <div className="py-7 sm:py-8 px-4 text-center">
                <span className="block text-3xl sm:text-4xl lg:text-[40px] font-black text-red-500 mb-1.5 tracking-tight">
                  Quality
                </span>
                <span className="block text-xs sm:text-[13px] font-bold text-gray-200 uppercase tracking-wider">
                  Controlled Testing
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding pH Testing */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="md:col-span-5 relative h-[320px] sm:h-[320px] rounded-2xl overflow-hidden shadow-md border border-gray-100 group">
                <Image
                  src="/testing/ph-testing-about-banner.png"
                  alt="Laboratory chemist performing electrometric pH testing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="md:col-span-7">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
                  Technical Foundation
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                  Understanding pH Water Testing &amp; Ionic Equilibrium
                </h2>
                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-4">
                  The pH parameter is defined as the negative base-10 logarithm of hydrogen ion activity: 
                  <code className="bg-slate-100 px-2 py-0.5 rounded text-slate-800 font-mono text-xs mx-1">pH = -log₁₀[a_H⁺]</code>.
                  It indicates whether a water sample is acidic, neutral, or alkaline on the conventional 0 to 14 scale.
                </p>
                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-4">
                  Because the pH scale is logarithmic, each whole unit represents a ten-fold difference in hydrogen ion activity. 
                  Water at pH 5 has ten times the hydrogen ion activity of water at pH 6. Neutrality is temperature-dependent; at 25°C, pure neutral water has a pH of approximately 7.0.
                </p>
                <div className="p-3.5 rounded-xl bg-sky-50/80 border border-sky-200/70 mb-6">
                  <p className="text-xs text-sky-900 font-medium leading-relaxed">
                    <strong>Drinking Water Benchmark:</strong> India&apos;s drinking water standard BIS IS 10500:2012 specifies an acceptable pH range of <strong>6.5 to 8.5</strong>, with no relaxation permitted.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="card-interactive group p-4 rounded-xl bg-rose-50 border border-rose-200/70 hover:border-rose-400 transition-all duration-300 cursor-default">
                    <span className="text-xs font-bold text-rose-700 uppercase tracking-wide block mb-1 group-hover:text-rose-800 transition-colors">
                      Acidic (Below 7.0 at 25°C)
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Characterized by excess hydrogen ions. Can increase the corrosivity of water toward metal plumbing and fixtures.
                    </p>
                  </div>

                  <div className="card-interactive group p-4 rounded-xl bg-emerald-50 border border-emerald-200/70 hover:border-emerald-400 transition-all duration-300 cursor-default">
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide block mb-1 group-hover:text-emerald-800 transition-colors">
                      Neutral (Approx. 7.0 at 25°C)
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Represents balanced hydronium and hydroxide ion activities at the standard reference temperature.
                    </p>
                  </div>

                  <div className="card-interactive group p-4 rounded-xl bg-sky-50 border border-sky-200/70 hover:border-sky-400 transition-all duration-300 cursor-default">
                    <span className="text-xs font-bold text-sky-700 uppercase tracking-wide block mb-1 group-hover:text-sky-800 transition-colors">
                      Alkaline (Above 7.0 at 25°C)
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Characterized by excess hydroxide ions. May contribute to mineral precipitation, scale formation, or an alkaline taste.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benchmarks Table */}
        <section className="py-14 sm:py-20 bg-[#f8fafc] border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                pH Standards &amp; Benchmarks for Different Water Applications
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-2xl mx-auto mt-2">
                Comparative benchmarks and operational considerations across municipal, construction, and industrial water categories.
              </p>
            </div>

            <div className="overflow-x-auto bg-white rounded-2xl shadow-xs border border-gray-200/80">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#05526e] text-white font-bold text-[13px]">
                    <th className="py-4 px-4 sm:px-6">Water Application / Reference</th>
                    <th className="py-4 px-4 sm:px-6">Acceptable Range</th>
                    <th className="py-4 px-4 sm:px-6">Basis &amp; Operational Limits</th>
                    <th className="py-4 px-4 sm:px-6">Primary Operational Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {standardsData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-sky-50/40 transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900">
                        {row.application}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-emerald-700">
                        {row.acceptable}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-600">
                        {row.operational}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-gray-500 leading-relaxed">
                        {row.impact}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Testing Methodology */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Our Electrometric Testing Method
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Conducted in accordance with IS 3025 (Part 11) and APHA 4500-H⁺ B using calibrated digital instruments.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-interactive group bg-[#f9fbfe] border border-sky-100 hover:border-sky-300 p-6 rounded-2xl shadow-xs transition-all duration-300 cursor-default">
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-[#05526e] group-hover:bg-[#05526e] group-hover:text-white group-hover:scale-110 flex items-center justify-center mb-4 transition-all duration-300 shadow-xs">
                  <Beaker className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-[#05526e] transition-colors">
                  Combination Glass Electrode
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  Measures the potential difference developed across a hydrogen-ion-sensitive glass membrane relative to an internal silver/silver chloride (Ag/AgCl) reference cell.
                </p>
                <div className="text-[11px] font-bold text-sky-800 bg-sky-50 px-2.5 py-1 rounded inline-block">
                  High Electrical Sensitivity
                </div>
              </div>

              <div className="card-interactive group bg-[#f9fbfe] border border-sky-100 hover:border-sky-300 p-6 rounded-2xl shadow-xs transition-all duration-300 cursor-default">
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-[#05526e] group-hover:bg-[#05526e] group-hover:text-white group-hover:scale-110 flex items-center justify-center mb-4 transition-all duration-300 shadow-xs">
                  <Scale className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-[#05526e] transition-colors">
                  Calibration Using Certified Buffer Solutions
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  Calibration is performed using suitable certified buffer solutions covering the expected pH range of the sample. Two-point or three-point calibration is carried out as required by the applicable testing method.
                </p>
                <div className="text-[11px] font-bold text-sky-800 bg-sky-50 px-2.5 py-1 rounded inline-block">
                  Routine Instrument Calibration
                </div>
              </div>

              <div className="card-interactive group bg-[#f9fbfe] border border-sky-100 hover:border-sky-300 p-6 rounded-2xl shadow-xs transition-all duration-300 cursor-default">
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-[#05526e] group-hover:bg-[#05526e] group-hover:text-white group-hover:scale-110 flex items-center justify-center mb-4 transition-all duration-300 shadow-xs">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-[#05526e] transition-colors">
                  Automatic Temperature Compensation
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  The laboratory uses digital pH meters equipped with temperature sensors to compensate for the temperature-dependent response of the pH electrode. Sample temperature is monitored and recorded during analysis. ATC improves measurement consistency but does not automatically convert the sample&apos;s actual pH to its value at 25°C.
                </p>
                <div className="text-[11px] font-bold text-sky-800 bg-sky-50 px-2.5 py-1 rounded inline-block">
                  Temperature-Compensated Measurement
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-14 sm:py-20 bg-[#f0f5fa] border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Applications of pH Water Testing
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Why industries, infrastructure projects, and commercial facilities require verified pH testing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {phApplications.map((app, idx) => {
                const Icon = app.icon;
                return (
                  <div key={idx} className="card-interactive group bg-white rounded-xl border border-gray-200/80 hover:border-red-300 p-6 shadow-xs transition-all duration-300 cursor-default">
                    <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:scale-110 flex items-center justify-center mb-4 transition-all duration-300 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-red-600 transition-colors">
                      {app.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {app.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sample Collection Requirements (New Dedicated Section) */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100 border border-sky-200 px-3.5 py-1 rounded-full">
                Laboratory Best Practice
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-3">
                Sample Collection Requirements for pH Testing
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-2xl mx-auto mt-2">
                Proper collection, containment, and prompt transport protect the sample from atmospheric carbon dioxide exposure and condition changes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-interactive group p-6 rounded-2xl bg-[#f8fafc] border border-gray-200/80 hover:border-sky-300 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#05526e] flex items-center justify-center mb-4">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2 group-hover:text-[#05526e] transition-colors">
                  Container Selection
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Water samples should be collected in clean, suitable polyethylene or borosilicate glass containers, securely sealed and protected from external contamination.
                </p>
              </div>

              <div className="card-interactive group p-6 rounded-2xl bg-[#f8fafc] border border-gray-200/80 hover:border-sky-300 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#05526e] flex items-center justify-center mb-4">
                  <Droplet className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2 group-hover:text-[#05526e] transition-colors">
                  Recommended Quantity
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  A minimum sample volume of 250 mL to 500 mL is recommended for routine pH analysis. For broader multi-parameter packages, larger composite volumes may be required.
                </p>
              </div>

              <div className="card-interactive group p-6 rounded-2xl bg-[#f8fafc] border border-gray-200/80 hover:border-sky-300 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#05526e] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2 group-hover:text-[#05526e] transition-colors">
                  Minimizing Air Exposure
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Fill containers appropriately and seal tightly to minimize atmospheric exposure. Dissolved atmospheric carbon dioxide (CO₂) forms carbonic acid, which can depress sample pH over time.
                </p>
              </div>

              <div className="card-interactive group p-6 rounded-2xl bg-[#f8fafc] border border-gray-200/80 hover:border-sky-300 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#05526e] flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2 group-hover:text-[#05526e] transition-colors">
                  Prompt Laboratory Dispatch
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Samples should be transported promptly and analyzed as soon as practicable after collection because temperature changes and dissolved gas equilibria can alter measured pH.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testing Standards & Analytical References (New Dedicated Section) */}
        <section className="py-14 sm:py-20 bg-[#f8fafc] border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#05526e] bg-sky-100 border border-sky-200 px-3.5 py-1 rounded-full">
                Analytical Framework
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-3">
                Testing Standards &amp; Analytical References
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-2xl mx-auto mt-2">
                Analytical protocols and quality benchmarks referenced by our laboratory for water and wastewater testing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#05526e] flex items-center justify-center font-bold text-xs">
                    01
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    IS 3025 (Part 11) &amp; APHA 4500-H⁺ B
                  </h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Methods of Sampling and Test (Physical and Chemical) for Water and Wastewater – Electrometric Determination of pH Value, detailing electrode preparation, buffer standardization, and reading stability criteria.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#05526e] flex items-center justify-center font-bold text-xs">
                    02
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    BIS IS 10500:2012 (Drinking Water)
                  </h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Indian Standard Drinking Water Specification, prescribing an acceptable limit of pH 6.5 to 8.5 with no relaxation permitted across public, municipal, and packaged potable water sources.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#05526e] flex items-center justify-center font-bold text-xs">
                    03
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    IS 456:2000 &amp; Environment Rules
                  </h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  IS 456 specification for concrete mixing water requiring pH not less than 6.0, alongside Environment (Protection) Rules general effluent discharge guidelines of pH 5.5 to 9.0.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testing Procedure */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Laboratory Testing Procedure
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Documented workflow ensuring reproducible measurements and chain of custody.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {phSteps.map((step, idx) => (
                <div key={idx} className="card-interactive group bg-[#f9fbfe] border border-gray-200/70 hover:border-sky-300 p-5 rounded-xl text-center flex flex-col justify-between transition-all duration-300 cursor-default">
                  <div>
                    <span className="inline-block text-xs font-black text-red-600 bg-red-50 group-hover:bg-red-600 group-hover:text-white px-2.5 py-1 rounded-full mb-3 group-hover:scale-105 transition-all duration-200">
                      STEP {step.step}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm mb-2 group-hover:text-[#05526e] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose MQTL */}
        <section className="py-14 sm:py-20 bg-gradient-to-br from-[#06182b] via-[#09223e] to-[#0d2d50] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-red-400 bg-red-500/15 border border-red-500/30 px-3.5 py-1 rounded-full">
                Laboratory Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-3">
                Why Choose MQTL for Water Testing
              </h2>
              <p className="text-sm text-slate-300 max-w-2xl mx-auto mt-2">
                Reliable testing workflows supported by experienced analysts, documented procedures, and quality-controlled sample handling.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-sky-400/50 transition-all backdrop-blur-xs">
                <Users className="w-8 h-8 text-sky-400 mb-3" />
                <h3 className="font-bold text-white text-sm mb-1.5">Experienced Chemists</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Testing is supervised by experienced analytical chemists proficient in wet chemical and electrometric water analysis.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-sky-400/50 transition-all backdrop-blur-xs">
                <Settings className="w-8 h-8 text-sky-400 mb-3" />
                <h3 className="font-bold text-white text-sm mb-1.5">Calibrated Instruments</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Digital pH meters equipped with combination electrodes and temperature sensors calibrated with certified buffer solutions.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-sky-400/50 transition-all backdrop-blur-xs">
                <BookOpen className="w-8 h-8 text-sky-400 mb-3" />
                <h3 className="font-bold text-white text-sm mb-1.5">Documented Procedures</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Standard operating procedures aligned with IS 3025 and APHA methods ensure reliable, reproducible test results.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-emerald-400/50 transition-all backdrop-blur-xs">
                <ShieldCheck className="w-8 h-8 text-emerald-400 mb-3" />
                <h3 className="font-bold text-white text-sm mb-1.5">Quality-Controlled Handling</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Structured sample registration, environmental monitoring, and prompt analysis minimize potential condition changes.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-emerald-400/50 transition-all backdrop-blur-xs">
                <FileCheck className="w-8 h-8 text-emerald-400 mb-3" />
                <h3 className="font-bold text-white text-sm mb-1.5">Verified Test Reports</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Comprehensive test reports detailing sample temperature, observed pH, and reference limits with QR codes for verification.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-emerald-400/50 transition-all backdrop-blur-xs">
                <HelpCircle className="w-8 h-8 text-emerald-400 mb-3" />
                <h3 className="font-bold text-white text-sm mb-1.5">Technical Guidance</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Consultation on sampling requirements, test package selection, and interpretation of parameters relative to project specifications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Water Testing Services */}
        <section className="py-12 bg-gradient-to-r from-sky-50 to-blue-50 border-y border-sky-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card-interactive group bg-white rounded-2xl border border-sky-200 hover:border-sky-400 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs hover:shadow-md transition-all duration-300 cursor-default">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-[11px] font-bold uppercase tracking-wider mb-2">
                  COMPANION WATER SERVICE
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#05526e] transition-colors">
                  Need Total Dissolved Solids (TDS) Testing Too?
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  While pH measures the acidity or alkalinity of water, Total Dissolved Solids (TDS) quantifies the concentration of dissolved inorganic minerals and salts. Combining both provides a more complete profile of water quality.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <Link
                  href="/testing/water-testing/tds-testing"
                  className="bg-[#05526e] hover:bg-[#033b50] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl flex items-center gap-2 shadow-xs hover:shadow hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Explore TDS Testing
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/testing/water-testing"
                  className="bg-gray-100 hover:bg-gray-200 text-slate-700 text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-all"
                >
                  View All Water Tests
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#07192d] via-[#092544] to-[#0d345e] py-14 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                  Schedule Your pH Water Test Today
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Submit your water samples to our laboratory in Noida for professional testing and laboratory reports.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact-us"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm sm:text-[15px] px-8 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                  Request a Test
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+919971234474"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm sm:text-[15px] px-6 py-3.5 rounded-full flex items-center justify-center transition-all"
                >
                  Call: +91 99712 34474
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 sm:py-20 bg-white" id="faqs">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Frequently Asked Questions About pH Water Testing
              </h2>
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Technical guidance on sample collection, recommended thresholds, and standard testing protocols.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-[#f9fbfe] border border-gray-200/80 rounded-xl overflow-hidden transition-all duration-200 open:bg-white open:shadow-sm open:border-[#05526e]/30"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-slate-900 text-sm sm:text-[15px] select-none hover:text-[#05526e]">
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-red-600 shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-400 transition-transform duration-200 group-open:rotate-180 shrink-0 ml-2" />
                  </summary>
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 mt-1">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
