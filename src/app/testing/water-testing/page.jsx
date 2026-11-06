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
} from "lucide-react";

export const metadata = {
  title: "Water Testing Services & Laboratory in India | MQTL",
  description:
    "Leading water testing laboratory in Noida, Delhi NCR. Quality-controlled testing for drinking water, construction water, TDS, pH, microbial, and chemical analysis.",
  keywords: [
    "Water Testing Services",
    "Water Testing Laboratory",
    "Drinking Water Testing Lab Noida",
    "Construction Water Testing Delhi NCR",
    "Water TDS Test",
    "Water pH Test",
    "Microbiological Water Testing",
    "Water Hardness Test",
    "Borewell Water Testing Lab",
    "Effluent Water Testing Laboratory",
    "Minu Quality Testing Laboratories Private Limited",
    "MQTL Lab",
  ],
  alternates: {
    canonical: "https://mqtlab.com/testing/water-testing",
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
    title: "Water Testing Services & Quality Lab - MQTL",
    description:
      "Professional water testing laboratory providing drinking water, construction water, chemical, and microbiological testing in Delhi NCR.",
    url: "https://mqtlab.com/testing/water-testing",
    siteName: "MQTL - Minu Quality Testing Laboratories Private Limited",
    images: [
      {
        url: "/waterTesting1.jpg",
        width: 1200,
        height: 630,
        alt: "MQTL Water Testing Laboratory Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Testing Services & Quality Lab - MQTL",
    description:
      "Professional water testing laboratory providing comprehensive chemical, physical, and microbiological water evaluations.",
    images: ["/waterTesting1.jpg"],
  },
};

const testServices = [
  {
    title: "Drinking Water Quality Testing",
    description:
      "Comprehensive analysis of potability, taste, odor, color, turbidity, and chemical safety to ensure water meets drinking standards.",
    icon: Droplet,
    link: null,
  },
  {
    title: "Construction Water Testing",
    description:
      "Testing water for concrete batching and curing to evaluate sulfates, chlorides, and organic impurities that can cause rebar corrosion.",
    icon: Building2,
    link: null,
  },
  {
    title: "pH Level & Acidity Analysis",
    description:
      "Precision measurement of hydrogen ion concentration to determine acidity or alkalinity for plumbing safety, processing, and consumption.",
    icon: Beaker,
    link: "/testing/water-testing/ph-testing",
  },
  {
    title: "Total Dissolved Solids (TDS)",
    description:
      "Quantitative measurement of inorganic salts, minerals, and dissolved metals to verify filtration performance and water purity.",
    icon: Waves,
    link: "/testing/water-testing/tds-testing",
  },
  {
    title: "Chemical & Heavy Metal Testing",
    description:
      "High-sensitivity elemental detection for toxic trace metals including Lead, Arsenic, Iron, Fluoride, Nitrate, and Chromium.",
    icon: FlaskConical,
    link: null,
  },
  {
    title: "Microbiological & Coliform Testing",
    description:
      "Pathogen screening including E. coli, total coliforms, and bacterial counts to detect biological contamination and prevent waterborne risks.",
    icon: Microscope,
    link: null,
  },
  {
    title: "Total Hardness & Alkalinity Test",
    description:
      "Titrimetric quantification of Calcium and Magnesium carbonates to prevent limescale buildup in boilers, pipelines, and domestic fittings.",
    icon: Scale,
    link: null,
  },
  {
    title: "Industrial Wastewater & Effluents",
    description:
      "Biochemical Oxygen Demand (BOD), Chemical Oxygen Demand (COD), Total Suspended Solids (TSS), and oil & grease testing for environmental compliance.",
    icon: Factory,
    link: null,
  },
  {
    title: "RO & Purified Water Verification",
    description:
      "Evaluation of commercial and residential RO purification efficiency, membrane rejection rates, and post-filtration mineral balance.",
    icon: ShieldCheck,
    link: null,
  },
];

const applications = [
  {
    title: "Residential & Domestic",
    subtitle: "Drinking, RO & Borewells",
    icon: Droplet,
  },
  {
    title: "Construction & Civil",
    subtitle: "Concrete Mixing & Curing",
    icon: Building2,
  },
  {
    title: "Industrial & Manufacturing",
    subtitle: "Boilers & Cooling Towers",
    icon: Factory,
  },
  {
    title: "Food & Beverage",
    subtitle: "Hygienic Process Water",
    icon: Utensils,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Sterile Sampling",
    description:
      "Water samples collected in sterilized containers adhering to designated preservation protocols.",
  },
  {
    step: "02",
    title: "Sample Logging",
    description:
      "Immediate sample registration, cold-chain verification, and physical inspection in the laboratory.",
  },
  {
    step: "03",
    title: "Analytical Testing",
    description:
      "Physical, wet-chemical, spectroscopic, and microbiological evaluations with calibrated instruments.",
  },
  {
    step: "04",
    title: "Laboratory Report",
    description:
      "Comprehensive test report review by quality managers with digital QR-verification.",
  },
];

const waterCategories = [
  {
    category: "Potable & Domestic Water",
    description:
      "Validation of water quality intended for drinking, cooking, food preparation, and residential use.",
    items: [
      "Municipal Tap Water Supply",
      "Packaged Drinking Water",
      "RO & Water Purifier Outputs",
      "Residential Overhead Tanks",
    ],
  },
  {
    category: "Groundwater & Natural Sources",
    description:
      "Chemical and microbiological characterization of untreated natural water sources across regions.",
    items: [
      "Deep Commercial Borewells",
      "Shallow Agricultural Wells",
      "Rainwater Harvesting Tanks",
      "Natural Surface Water Reservoirs",
    ],
  },
  {
    category: "Industrial & Construction Water",
    description:
      "Quality assurance for water utilized in construction, industrial processing, and environmental discharge.",
    items: [
      "Concrete Mixing & Curing Water",
      "Boiler & Cooling Tower Feed",
      "ETP / STP Treated Effluents",
      "Commercial Cleaning & Washing",
    ],
  },
];

const industries = [
  {
    title: "Real Estate & Construction",
    description:
      "Ensuring mixing and curing water meets concrete durability criteria without rebar corrosion risks.",
    icon: Building2,
  },
  {
    title: "Hospitality & Healthcare",
    description:
      "Safe, pathogen-free water testing for hotels, hospitals, food outlets, and community centers.",
    icon: Activity,
  },
  {
    title: "Food & Beverage Plants",
    description:
      "Verification of ingredient water quality, mineral balance, and microbiological hygiene compliance.",
    icon: Utensils,
  },
  {
    title: "Industrial & Manufacturing",
    description:
      "Testing process water, boiler feed, and wastewater effluents for environmental and operational safety.",
    icon: Factory,
  },
];

const faqs = [
  {
    q: "What parameters are tested in a standard drinking water test?",
    a: "Standard drinking water testing includes physical parameters (color, odor, pH, turbidity, TDS), chemical parameters (total hardness, alkalinity, chlorides, sulfates, nitrates, fluorides, iron), and microbiological parameters (total coliforms and E. coli).",
  },
  {
    q: "Why is water testing necessary for construction and concrete works?",
    a: "Water used in concrete mixing and curing directly affects setting time and compressive strength. Excess chlorides cause steel reinforcement corrosion, while excess sulfates and organic matter degrade cement hydration and cause structural cracking over time.",
  },
  {
    q: "How much water sample is needed for laboratory testing?",
    a: "For general physical and chemical analysis, a minimum of 2 liters of water in a clean, rinsed plastic container is recommended. For microbiological analysis, an additional 500 ml collected in a sterile glass or autoclaved plastic bottle is required.",
  },
  {
    q: "What is the difference between TDS and Water Hardness?",
    a: "Total Dissolved Solids (TDS) measures all inorganic minerals, salts, and dissolved substances present in water. Water Hardness specifically measures the concentration of dissolved Calcium and Magnesium ions responsible for limescale buildup.",
  },
  {
    q: "How frequently should borewell or groundwater be tested?",
    a: "Groundwater composition changes with seasonal water table variations, industrial runoff, and agricultural activity. It is strongly advised to test borewell water at least once every 6 to 12 months, especially before and after monsoon seasons.",
  },
  {
    q: "How can I submit water samples to MQTL Laboratory?",
    a: "You can deliver water samples directly to our facility at Plot No. 79, Sector 155, Noida, Gautam Buddha Nagar, Uttar Pradesh 201310, India, or send them via courier with a formal testing requisition slip. For microbiological testing, samples should be delivered within 24 hours of collection.",
  },
  {
    q: "Does MQTL provide laboratory test reports with digital verification?",
    a: "Yes. All test reports issued by MQTL Laboratory include measured values alongside reference quality benchmarks and an encrypted QR code for instant digital verification.",
  },
];

export default function WaterTestingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://mqtlab.com/testing/water-testing#service",
        name: "Water Testing Services & Quality Analysis Laboratory",
        serviceType: "Water & Environmental Quality Testing",
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
          "Professional water testing laboratory providing drinking water, construction water, chemical, and microbiological water analysis.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Water Testing Parameters",
          itemListElement: testServices.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.description,
            },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://mqtlab.com/testing/water-testing#breadcrumb",
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
            name: "Water Testing Services",
            item: "https://mqtlab.com/testing/water-testing",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://mqtlab.com/testing/water-testing#faq",
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
        <section className="relative w-full bg-[#07182b] overflow-hidden">
          {/* Mobile & Tablet */}
          <div className="lg:hidden relative px-4 py-8 sm:px-6 sm:py-10 bg-gradient-to-br from-[#07182b] via-[#0b2440] to-[#07182b] text-white border-b border-white/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-xl mx-auto sm:max-w-none">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 shadow-xs mb-3 backdrop-blur-md animate-fade-in-up">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                <span className="text-sky-300 font-bold tracking-wider text-[11px] uppercase">
                  WATER &amp; ENVIRONMENTAL QUALITY TESTING
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-2.5 animate-fade-in-up animation-delay-100">
                Water Testing Services &amp; Quality Analysis Laboratory
              </h1>

              <p className="text-slate-300 text-xs sm:text-[14px] leading-relaxed mb-5 animate-fade-in-up animation-delay-200">
                Reliable laboratory testing to evaluate chemical parameters, physical purity,
                microbiological safety, heavy metals, and potability of drinking water,
                construction water, and industrial wastewater.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-5 animate-fade-in-up animation-delay-300">
                <Link
                  href="/contact-us"
                  className="btn-shimmer bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-sm px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
                >
                  Request a Test
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/testing"
                  className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm px-6 py-3.5 rounded-xl flex items-center justify-center backdrop-blur-md transition-all"
                >
                  Our Services
                </Link>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/10 shadow-xs animate-fade-in-up animation-delay-400">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-400/20 flex items-center justify-center text-sky-400 shrink-0">
                      <Shield className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-bold text-white">
                      Reliable Methods
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-400/20 flex items-center justify-center text-sky-400 shrink-0">
                      <Settings className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-bold text-white">
                      Modern Equipment
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-400/20 flex items-center justify-center text-sky-400 shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-bold text-white">
                      Laboratory Reports
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden lg:flex relative w-full aspect-[2.75/1] min-h-[380px] items-center text-white">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/testing/water-testing-services.png"
                alt="Water testing laboratory equipment and analysis"
                fill
                priority
                className="object-cover object-[center_center] transition-transform duration-700 hover:scale-[1.01]"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#051628]/95 via-[#051628]/85 via-42% to-transparent to-62% pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-8 lg:py-10 w-full">
              <div className="max-w-2xl lg:max-w-[680px] xl:max-w-[740px]">
                <p className="text-sky-400 font-bold tracking-widest text-xs sm:text-[13px] md:text-sm uppercase mb-2.5 animate-fade-in-up">
                  WATER &amp; ENVIRONMENTAL QUALITY TESTING
                </p>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-white tracking-tight leading-[1.12] mb-3 drop-shadow-sm animate-fade-in-up animation-delay-100">
                  Water Testing Services &amp; Quality Analysis Laboratory
                </h1>

                <p className="text-slate-100 font-normal text-sm sm:text-base md:text-[16px] leading-relaxed mb-5 animate-fade-in-up animation-delay-200">
                  Reliable laboratory testing to evaluate chemical parameters, physical purity,
                  microbiological safety, heavy metals, and potability of drinking water,
                  construction water, and industrial wastewater.
                </p>

                <div className="flex flex-wrap items-center gap-3.5 mb-6 animate-fade-in-up animation-delay-300">
                  <Link
                    href="/contact-us"
                    className="btn-shimmer bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-[15px] px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
                  >
                    Request a Test
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/testing"
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/40 font-semibold text-sm sm:text-[15px] px-6 py-3 rounded-lg backdrop-blur-xs transition-all"
                  >
                    Our Services
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-2.5 pt-3.5 border-t border-white/20 animate-fade-in-up animation-delay-400">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="text-xs sm:text-[13px] font-semibold text-white whitespace-nowrap">
                      Reliable Methods
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Settings className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="text-xs sm:text-[13px] font-semibold text-white whitespace-nowrap">
                      Modern Equipment
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="text-xs sm:text-[13px] font-semibold text-white whitespace-nowrap">
                      Laboratory Reports
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="bg-[#081e35] border-y border-white/10 text-white reveal-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="py-6 sm:py-7 px-4 text-center">
                <span className="block text-2xl sm:text-3xl lg:text-[32px] font-bold text-red-500 mb-1 tracking-tight">
                  15+
                </span>
                <span className="block text-xs sm:text-[12.5px] font-medium text-gray-300 uppercase tracking-wider">
                  Testing Parameters
                </span>
              </div>

              <div className="py-6 sm:py-7 px-4 text-center">
                <span className="block text-2xl sm:text-3xl lg:text-[32px] font-bold text-red-500 mb-1 tracking-tight">
                  500+
                </span>
                <span className="block text-xs sm:text-[12.5px] font-medium text-gray-300 uppercase tracking-wider">
                  Clients Served
                </span>
              </div>

              <div className="py-6 sm:py-7 px-4 text-center">
                <span className="block text-2xl sm:text-3xl lg:text-[32px] font-bold text-red-500 mb-1 tracking-tight">
                  99%
                </span>
                <span className="block text-xs sm:text-[12.5px] font-medium text-gray-300 uppercase tracking-wider">
                  Accurate Reports
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
            </div>
          </div>
        </section>

        {/* Laboratory Overview */}
        <section className="py-14 sm:py-20 bg-white reveal-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="relative h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-md border border-gray-100 group">
                <Image
                  src="/testing/tds-ph-water-testing.png"
                  alt="Water quality sample titration and spectrophotometric analysis"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                  Professional Water Quality Testing &amp; Environmental Laboratory
                </h2>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-4">
                  Our laboratory provides comprehensive water quality testing services to
                  evaluate physical, chemical, and microbiological parameters of water
                  used in drinking, civil construction, food processing, and industrial applications.
                </p>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-8">
                  Using calibrated analytical instrumentation, we conduct rigorous assessments including
                  pH level, Total Dissolved Solids (TDS), total hardness, chloride, sulfate, heavy metal
                  detection, and coliform bacterial screening. These verified tests assist engineers,
                  facility managers, and regulatory compliance teams in ensuring safety, preventing
                  pipe corrosion or scale buildup, and verifying water purity and safety.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div className="card-interactive group flex items-center gap-3 p-3 rounded-xl bg-red-50/70 border border-red-100 hover:border-red-300">
                    <div className="w-10 h-10 rounded-lg bg-red-100/90 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white text-red-600 transition-all duration-300">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-red-600 transition-colors">
                        Reliable
                      </p>
                      <p className="text-[11px] text-gray-500">
                        Testing Services
                      </p>
                    </div>
                  </div>

                  <div className="card-interactive group flex items-center gap-3 p-3 rounded-xl bg-red-50/70 border border-red-100 hover:border-red-300">
                    <div className="w-10 h-10 rounded-lg bg-red-100/90 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white text-red-600 transition-all duration-300">
                      <FlaskConical className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-red-600 transition-colors">
                        Advanced
                      </p>
                      <p className="text-[11px] text-gray-500">
                        Testing Equipment
                      </p>
                    </div>
                  </div>

                  <div className="card-interactive group flex items-center gap-3 p-3 rounded-xl bg-red-50/70 border border-red-100 hover:border-red-300">
                    <div className="w-10 h-10 rounded-lg bg-red-100/90 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white text-red-600 transition-all duration-300">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-red-600 transition-colors">
                        Quality
                      </p>
                      <p className="text-[11px] text-gray-500">
                        Test Reports
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flagship Specializations: pH & TDS */}
        <section className="py-14 sm:py-16 bg-gradient-to-b from-white to-[#f4f8fb] border-t border-slate-100 reveal-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 shadow-2xs mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-600 animate-pulse" />
                <span className="text-sky-800 font-bold tracking-wider text-[11px] uppercase">
                  Flagship Water Analysis Specializations
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Specialized Water Quality Services: pH &amp; TDS Testing
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-600 max-w-2xl mx-auto mt-2">
                Our two most critical routine and diagnostic water evaluations, conducted with calibrated digital instrumentation and verified against national water quality benchmarks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <div className="card-interactive group bg-white rounded-2xl border-2 border-sky-200/90 hover:border-sky-400 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative overflow-hidden cursor-default">
                <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-sky-100/60 to-transparent rounded-bl-full pointer-events-none" />
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center group-hover:bg-[#05526e] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-xs">
                      <Beaker className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
                      Electrometric Method
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#05526e] transition-colors">
                    pH Level &amp; Acidity/Alkalinity Testing
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    Accurate electrometric determination of hydrogen ion concentration. Vital for assessing pipeline corrosion risks, chemical treatment efficiency, drinking water safety, and concrete batching quality.
                  </p>

                  <ul className="space-y-2.5 mb-6 text-xs sm:text-[13px] text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Drinking Water Benchmark:</strong> Recommended 6.5 – 8.5 pH for safe consumption</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Construction Mixing:</strong> Minimum 6.0 pH to safeguard concrete &amp; rebar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Digital ATC Electrode:</strong> Temperature-compensated readings at 25°C</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-500">Dedicated Service Page</span>
                  <Link
                    href="/testing/water-testing/ph-testing"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#05526e] hover:bg-[#033b50] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    View pH Testing Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="card-interactive group bg-white rounded-2xl border-2 border-cyan-200/90 hover:border-cyan-400 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative overflow-hidden cursor-default">
                <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-cyan-100/60 to-transparent rounded-bl-full pointer-events-none" />
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 text-cyan-600 flex items-center justify-center group-hover:bg-[#05526e] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-xs">
                      <Waves className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
                      180°C Gravimetric Method
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#05526e] transition-colors">
                    Total Dissolved Solids (TDS) Testing
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    Quantitative measurement of dissolved minerals, salts, and inorganic compounds. Crucial for verifying RO membrane filtration efficiency, drinking water palatability, boiler scaling risks, and borewell viability.
                  </p>

                  <ul className="space-y-2.5 mb-6 text-xs sm:text-[13px] text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Potability Threshold:</strong> &lt;500 mg/L recommended drinking limit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>RO Performance Audit:</strong> Membrane salt rejection rate quantification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Gravimetric &amp; EC:</strong> 180°C drying oven and calibrated conductivity cell</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-500">Dedicated Service Page</span>
                  <Link
                    href="/testing/water-testing/tds-testing"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#05526e] hover:bg-[#033b50] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    View TDS Testing Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testing Services */}
        <section className="py-16 sm:py-20 bg-[#f0f5fa] border-y border-slate-200/70 reveal-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Our Comprehensive Water Testing Services
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Chemical, physical, and biological water quality evaluations performed under controlled laboratory conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {testServices.map((service, index) => {
                const Icon = service.icon;
                const isFeatured = !!service.link;
                const cardContent = (
                  <div className={`card-interactive group rounded-xl border p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4 h-full ${
                    isFeatured
                      ? "bg-white border-sky-300 ring-2 ring-sky-500/10 hover:border-sky-500 hover:ring-sky-500/20"
                      : "bg-white border-gray-200/80 hover:border-red-300"
                  }`}>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110 shadow-xs ${
                      isFeatured 
                        ? "bg-sky-100 text-[#05526e] group-hover:bg-[#05526e] group-hover:text-white" 
                        : "bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className={`font-bold text-slate-900 text-sm sm:text-[15px] transition-colors ${
                          isFeatured ? "group-hover:text-[#05526e]" : "group-hover:text-red-600"
                        }`}>
                          {service.title}
                        </h3>
                        {isFeatured && (
                          <span className="shrink-0 px-2 py-0.5 rounded-full bg-sky-100 text-[#05526e] text-[10px] font-bold uppercase tracking-wider">
                            Specialized
                          </span>
                        )}
                      </div>
                      <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed">
                        {service.description}
                      </p>
                      {service.link && (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-[#05526e] mt-2 group-hover:underline">
                          View Dedicated Service Page <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </div>
                  </div>
                );

                return service.link ? (
                  <Link href={service.link} key={index} className="block group">
                    {cardContent}
                  </Link>
                ) : (
                  <div key={index}>{cardContent}</div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Real-World Applications */}
        <section className="py-14 sm:py-20 bg-white reveal-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="relative h-[250px] sm:h-[350px] md:col-span-5 rounded-2xl overflow-hidden shadow-md border border-gray-100">
                <Image
                  src="/testing/ph-water-testing.png"
                  alt="Industrial, commercial, and construction water quality sampling"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="md:col-span-7">
                <div className="border-l-4 border-red-500 pl-4 mb-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Water Testing for Construction, Commercial &amp; Industrial Applications
                  </h2>
                </div>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-7">
                  Water quality testing is essential across every sector of modern infrastructure.
                  From ensuring that construction batching water doesn't corrode structural reinforcement,
                  to confirming drinking water potability in corporate campuses and verifying
                  environmental discharge limits for industrial manufacturing plants, our laboratory
                  provides reliable, standards-compliant test results.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {applications.map((app, idx) => {
                    const AppIcon = app.icon;
                    return (
                      <div
                        key={idx}
                        className="card-interactive group bg-[#f0f7fc] border border-[#e0effa] rounded-xl p-3.5 text-center flex flex-col items-center justify-center hover:bg-[#e6f2fa] hover:border-sky-300 transition-all duration-300 cursor-default"
                      >
                        <AppIcon className="w-6 h-6 text-[#05526e] group-hover:text-red-600 group-hover:scale-110 mb-2 transition-all duration-300" />
                        <p className="font-bold text-slate-900 text-xs sm:text-[13px] leading-tight mb-1 group-hover:text-red-600 transition-colors">
                          {app.title}
                        </p>
                        <p className="text-[11px] text-gray-500 leading-tight">
                          {app.subtitle}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testing Process */}
        <section className="py-16 sm:py-20 bg-[#f8fafc] border-y border-slate-200/70 reveal-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Our Water Testing Procedure
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                A systematic, contamination-free methodology from sampling to documented test report issuance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, idx) => {
                return (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="card-interactive group bg-white rounded-xl border border-gray-200/80 hover:border-sky-300 p-6 shadow-xs flex-1 text-center transition-all duration-300 cursor-default">
                      <span className="inline-block text-xs font-black text-red-600 bg-red-50 group-hover:bg-red-600 group-hover:text-white px-2.5 py-1 rounded-full mb-3 tracking-wider group-hover:scale-105 transition-all duration-200">
                        STEP {step.step}
                      </span>

                      <h3 className="font-bold text-slate-900 text-sm mb-2 group-hover:text-[#05526e] transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-gray-500 text-xs leading-relaxed max-w-[200px] mx-auto">
                        {step.description}
                      </p>
                    </div>

                    {idx < processSteps.length - 1 && (
                      <div className="hidden lg:flex items-center justify-center px-2 text-gray-300">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Water Sources & Categories */}
        <section className="py-16 sm:py-20 bg-white reveal-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Water Sources &amp; Sample Categories Evaluated
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Comprehensive physical and chemical validation across municipal, groundwater, and industrial categories.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {waterCategories.map((group, idx) => (
                <div
                  key={idx}
                  className="card-interactive group bg-[#f8fafc] rounded-xl border border-gray-200/80 hover:border-sky-300 p-6 shadow-xs hover:bg-white transition-all duration-300 cursor-default"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#05526e]/10 flex items-center justify-center text-[#05526e] group-hover:bg-[#05526e] group-hover:text-white group-hover:scale-110 mb-4 transition-all duration-300">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-[#05526e] transition-colors">
                    {group.category}
                  </h3>
                  <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                    {group.description}
                  </p>
                  <ul className="space-y-2 border-t border-gray-100 pt-4">
                    {group.items.map((item, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose MQTL */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-[#06182b] via-[#09223e] to-[#0d2d50] text-white reveal-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-red-400 bg-red-500/15 border border-red-500/30 px-3.5 py-1 rounded-full">
                Laboratory Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-3">
                Why Industry Leaders Choose MQTL
              </h2>
              <p className="text-sm text-slate-300 max-w-2xl mx-auto mt-2">
                Backed by precision instruments, experienced chemists, and stringent quality assurance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-interactive group p-6 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-red-500/50 transition-all duration-300 backdrop-blur-xs cursor-default">
                <Microscope className="w-8 h-8 text-red-400 group-hover:scale-110 mb-3 transition-transform duration-300" />
                <h3 className="font-bold text-white text-sm mb-1.5 group-hover:text-red-400 transition-colors">
                  Calibrated Spectrophotometers
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Advanced analytical spectrophotometers, turbidity meters, and digital titrators calibrated for parts-per-million accuracy.
                </p>
              </div>

              <div className="card-interactive group p-6 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-sky-400/50 transition-all duration-300 backdrop-blur-xs cursor-default">
                <FileCheck className="w-8 h-8 text-sky-400 group-hover:scale-110 mb-3 transition-transform duration-300" />
                <h3 className="font-bold text-white text-sm mb-1.5 group-hover:text-sky-300 transition-colors">
                  QR-Verified Digital Reports
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Tamper-proof laboratory test reports with unique QR codes for instant online verification by auditors, authorities, and clients.
                </p>
              </div>

              <div className="card-interactive group p-6 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-emerald-400/50 transition-all duration-300 backdrop-blur-xs cursor-default">
                <Clock className="w-8 h-8 text-emerald-400 group-hover:scale-110 mb-3 transition-transform duration-300" />
                <h3 className="font-bold text-white text-sm mb-1.5 group-hover:text-emerald-300 transition-colors">
                  Standard Testing Protocols
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Systematic testing workflows following national &amp; international test standards with prompt, scheduled delivery of laboratory test reports.
                </p>
              </div>

              <div className="card-interactive group p-6 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-amber-400/50 transition-all duration-300 backdrop-blur-xs cursor-default">
                <Award className="w-8 h-8 text-amber-400 group-hover:scale-110 mb-3 transition-transform duration-300" />
                <h3 className="font-bold text-white text-sm mb-1.5 group-hover:text-amber-300 transition-colors">
                  Industry &amp; Builder Trusted
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Test reports trusted by leading real estate developers, structural engineers, commercial contractors, and industrial plants.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Industries &amp; Sectors We Serve
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Delivering verified water testing for compliance, quality control, and safety across major sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-gray-200/80 p-5 shadow-xs hover:border-[#05526e] transition-all"
                  >
                    <Icon className="w-7 h-7 text-[#05526e] mb-3" />
                    <h3 className="font-bold text-slate-900 text-sm mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#07192d] via-[#092544] to-[#0d345e] py-14 sm:py-16 reveal-scale">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                  Need Professional Water Quality Testing?
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Connect with our laboratory experts in Noida to schedule water sample testing, request parameter packages, or obtain verified digital test reports.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact-us"
                  className="btn-shimmer bg-red-600 hover:bg-red-700 text-white font-semibold text-sm sm:text-[15px] px-8 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all"
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
        <section className="py-16 sm:py-20 bg-white reveal-on-scroll" id="faqs">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-3">
                Frequently Asked Questions About Water Testing
              </h2>
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Expert answers regarding sample submission, parameters tested, container requirements, and test reports.
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
