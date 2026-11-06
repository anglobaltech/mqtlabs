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
} from "lucide-react";

export const metadata = {
  title: "TDS Water Testing Services & Total Dissolved Solids Lab | MQTL",
  description:
    "Quality-controlled Total Dissolved Solids (TDS) water testing laboratory in Greater Noida, Delhi NCR. Gravimetric drying at 180°C and conductivity analysis for drinking, RO, and utility water.",
  keywords: [
    "TDS Water Testing Services",
    "Total Dissolved Solids Laboratory",
    "Water TDS Test Noida",
    "TDS Testing for Drinking Water",
    "Construction Water TDS Testing",
    "RO Water TDS Verification",
    "Gravimetric Water Testing",
    "Borewell Water TDS Testing",
    "Water Testing Laboratory Delhi NCR",
    "Minu Quality Testing Laboratories Private Limited",
    "MQTL Lab",
  ],
  alternates: {
    canonical: "https://mqtlab.com/testing/water-testing/tds-testing",
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
    title: "TDS Water Testing Services & Laboratory - MQTL",
    description:
      "Professional Total Dissolved Solids (TDS) water testing laboratory providing gravimetric and conductivity analysis in Greater Noida, Delhi NCR.",
    url: "https://mqtlab.com/testing/water-testing/tds-testing",
    siteName: "MQTL - Minu Quality Testing Laboratories Private Limited",
    images: [
      {
        url: "/waterTesting1.jpg",
        width: 1200,
        height: 630,
        alt: "MQTL TDS Water Testing Laboratory Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TDS Water Testing Services & Laboratory - MQTL",
    description:
      "Laboratory TDS water testing providing gravimetric and electrical conductivity analysis for drinking, RO, and utility water.",
    images: ["/waterTesting1.jpg"],
  },
};

const tdsLevels = [
  {
    range: "< 50 mg/L",
    rating: "Very Low Mineral Water",
    suitability: "Demineralized water, laboratory rinse, condensate, and specialized industrial processes.",
    flavor: "Often described as flat or bland in taste; minimal dissolved mineral presence.",
  },
  {
    range: "50 – 150 mg/L",
    rating: "Low Mineral Water",
    suitability: "Commonly observed in reverse osmosis (RO) permeate and low-mineral tap supplies.",
    flavor: "Light taste profile; low residue upon evaporation.",
  },
  {
    range: "150 – 300 mg/L",
    rating: "Moderate Mineral Water",
    suitability: "Common range for natural freshwater sources and municipal supplies.",
    flavor: "TDS between 150 and 300 mg/L may be acceptable from a taste perspective for some waters; actual taste varies with mineral composition and individual preference.",
  },
  {
    range: "300 – 500 mg/L",
    rating: "Upper Drinking Water Baseline",
    suitability: "Within generally accepted drinking water baselines (acceptable threshold of 500 mg/L).",
    flavor: "Noticeable mineral presence; taste profile depends on dominant dissolved ions.",
  },
  {
    range: "500 – 2,000 mg/L",
    rating: "Elevated Dissolved Solids",
    suitability: "Exceeds standard 500 mg/L acceptable baseline; recognized as permissible up to 2,000 mg/L where alternate sources are unavailable.",
    flavor: "Elevated mineral taste; may contribute to scaling or altered flavor depending on dissolved constituents.",
  },
  {
    range: "> 2,000 mg/L",
    rating: "High TDS / Brackish",
    suitability: "Exceeds recognized permissible limits for drinking water; typically requires desalination or membrane treatment before use.",
    flavor: "Distinct salty, bitter, or mineral taste; unsuitable for domestic consumption without comprehensive chemical characterization and treatment.",
  },
  {
    range: "Project-Specific Criteria",
    rating: "Construction & Concrete Mixing",
    suitability: "Subject to engineering specifications and construction standards (often assessed for solids, sulfates, and chlorides).",
    flavor: "Excessive dissolved solids and reactive ions may impact setting times, concrete durability, or cause surface efflorescence.",
  },
];

const tdsApplications = [
  {
    title: "Drinking Water Evaluation",
    desc: "Assessing dissolved solids concentration in municipal tap supply, packaged drinking water, and borewell sources.",
    icon: Droplet,
  },
  {
    title: "RO Membrane Efficiency Audit",
    desc: "Comparing feed water versus permeate water to estimate dissolved solids rejection and evaluate membrane performance.",
    icon: ShieldCheck,
  },
  {
    title: "Civil Construction & Concrete",
    desc: "Testing batching and curing water against project specifications to evaluate dissolved salts and potential impact on concrete.",
    icon: Building2,
  },
  {
    title: "Boilers & Cooling Towers",
    desc: "Monitoring dissolved solids concentration in utility water to support blowdown scheduling and control scale buildup.",
    icon: Factory,
  },
  {
    title: "Borewell & Groundwater Sourcing",
    desc: "Groundwater characterization to determine dissolved mineral levels and assist in selecting appropriate filtration technologies.",
    icon: Waves,
  },
  {
    title: "Food & Beverage Processing",
    desc: "Evaluating water mineral consistency for commercial food preparation, beverages, and industrial processing.",
    icon: Utensils,
  },
];

const tdsSteps = [
  {
    step: "01",
    title: "Sample Collection",
    desc: "Collection in clean, rinsed polyethylene or glass containers to prevent external residue or contamination.",
  },
  {
    step: "02",
    title: "Filtration",
    desc: "Filtration through a fine glass fiber filter to isolate filterable dissolved solids from suspended particulate matter (TSS).",
  },
  {
    step: "03",
    title: "Gravimetric Evaporation",
    desc: "Evaporation of a measured filtrate volume in a tared evaporating dish using a controlled heating bath.",
  },
  {
    step: "04",
    title: "180°C Drying to Constant Mass",
    desc: "The residue is dried at 180°C in an analytical oven and weighed according to the applicable method until the constant-mass criterion is met.",
  },
  {
    step: "05",
    title: "Laboratory Test Report",
    desc: "Desiccation in a controlled desiccator, precision weighing on an analytical balance, and delivery of a documented test report.",
  },
];

const faqs = [
  {
    q: "What is Total Dissolved Solids (TDS) in water?",
    a: "Total Dissolved Solids (TDS) refers to the concentration of dissolved inorganic minerals, salts, and small amounts of organic matter that remain as residue after filtering and drying a water sample. Major dissolved constituents typically include cations (calcium, magnesium, sodium, potassium) and anions (carbonate, bicarbonate, chloride, sulfate, nitrate). TDS is measured in milligrams per liter (mg/L), which is approximately equivalent to parts per million (ppm) in dilute water samples.",
  },
  {
    q: "What is the acceptable TDS limit for drinking water?",
    a: "Standard drinking water specifications recognize an acceptable baseline of 500 mg/L for dissolved solids, with a permissible ceiling of 2,000 mg/L where no alternate water source is available. Water with TDS between 150 and 300 mg/L may be acceptable from a taste perspective for some consumers, though actual taste depends on mineral composition and individual preference. Water exceeding 2,000 mg/L generally requires treatment before use.",
  },
  {
    q: "How does the laboratory gravimetric method differ from handheld digital TDS meters?",
    a: "Handheld TDS meters do not weigh physical solids; they measure Electrical Conductivity (EC) and apply an assumed conversion multiplier (commonly 0.5 to 0.7). Because actual conversion factors depend on the specific dissolved ions present, proxy readings can deviate noticeably. The laboratory gravimetric method filters the sample, evaporates the filtrate, and dries the residue at 180°C to constant mass on an analytical balance (0.0001 g readability) to determine actual mass.",
  },
  {
    q: "Why is TDS testing relevant for construction and concrete mixing water?",
    a: "Dissolved solids in batching and curing water can influence cement hydration, setting characteristics, and long-term concrete durability. Certain dissolved ions, such as chlorides and sulfates, can also increase the risk of reinforcement steel corrosion or surface efflorescence. Testing helps verify whether water meets the specific quality criteria established for the construction project.",
  },
  {
    q: "How does TDS testing help evaluate RO water purifier performance?",
    a: "By measuring TDS in both the untreated feed water and the treated permeate, the dissolved solids rejection rate can be estimated: [1 - (Permeate TDS / Feed TDS)] × 100%. Commercial and domestic RO systems typically achieve 90% to 98% rejection under normal operating conditions. A significant decline may indicate membrane scaling, fouling, or seal failure. Electrical conductivity is also widely used for routine ongoing monitoring.",
  },
  {
    q: "How much water sample is required for laboratory TDS testing?",
    a: "A sample volume of approximately 500 mL to 1 liter collected in a clean, rinsed plastic or glass container is recommended. The container should be filled with minimal headspace, securely capped, and submitted promptly to our laboratory for analysis.",
  },
];

export default function TdsTestingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://mqtlab.com/testing/water-testing/tds-testing#service",
        name: "TDS Water Testing Services & Total Dissolved Solids Analysis",
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
          "Total Dissolved Solids (TDS) water testing laboratory utilizing gravimetric oven drying at 180°C and electrical conductivity for drinking, RO, and utility water.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://mqtlab.com/testing/water-testing/tds-testing#breadcrumb",
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
            name: "TDS Water Testing",
            item: "https://mqtlab.com/testing/water-testing/tds-testing",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://mqtlab.com/testing/water-testing/tds-testing#faq",
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
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-xl mx-auto sm:max-w-none">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 shadow-2xs mb-3 backdrop-blur-md animate-fade-in-up">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-cyan-300 font-bold tracking-wider text-[11px] uppercase">
                  WATER TESTING SPECIALIZATION
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-2.5 animate-fade-in-up animation-delay-100">
                TDS Water Testing Services &amp; Total Dissolved Solids Analysis
              </h1>

              <p className="text-slate-300 text-xs sm:text-[14px] leading-relaxed mb-5 animate-fade-in-up animation-delay-200">
                MQTL provides laboratory testing to determine the total dissolved solids (TDS) concentration in water samples. Gravimetric analysis measures the mass of residue remaining after a filtered sample is evaporated and dried under specified conditions.
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
                  href="/testing/water-testing"
                  className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm px-6 py-3.5 rounded-xl flex items-center justify-center backdrop-blur-md transition-all"
                >
                  View All Water Testing Services
                </Link>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xs animate-fade-in-up animation-delay-400">
                <div className="grid grid-cols-3 gap-2 text-center divide-x divide-white/10">
                  <div className="px-1">
                    <p className="text-[10px] uppercase font-bold text-slate-400">Method</p>
                    <p className="text-xs font-bold text-white">180°C Gravimetric</p>
                  </div>
                  <div className="px-1">
                    <p className="text-[10px] uppercase font-bold text-slate-400">Readability</p>
                    <p className="text-xs font-bold text-white">0.0001 g</p>
                  </div>
                  <div className="px-1">
                    <p className="text-[10px] uppercase font-bold text-slate-400">Documentation</p>
                    <p className="text-xs font-bold text-white">Test Reports</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden lg:block relative w-full aspect-[2.75/1] min-h-[400px] max-h-[480px] overflow-hidden">
            <Image
              src="/testing/tds-water-testing-banner.png"
              alt="TDS Water Testing Services Laboratory"
              fill
              priority
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#051628]/95 via-[#051628]/85 via-42% to-transparent to-62% z-10" />

            <div className="relative z-20 h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
              <div className="max-w-2xl lg:max-w-[680px] xl:max-w-[740px] py-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-xs mb-3 animate-fade-in-up">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-cyan-300 font-bold tracking-wider text-[11px] uppercase">
                    WATER QUALITY TESTING SPECIALIZATION
                  </span>
                </div>

                <h1 className="text-3xl xl:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3 animate-fade-in-up animation-delay-100">
                  TDS Water Testing Services &amp; Total Dissolved Solids Analysis
                </h1>

                <p className="text-slate-200 text-sm xl:text-[15px] leading-relaxed mb-6 animate-fade-in-up animation-delay-200">
                  Quality-controlled laboratory testing to assess dissolved mineral content, compare water sources, monitor RO treatment performance, and support residential and industrial water quality monitoring.
                </p>

                <div className="flex items-center gap-3.5 mb-6 animate-fade-in-up animation-delay-300">
                  <Link
                    href="/contact-us"
                    className="btn-shimmer bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
                  >
                    Request a Test
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/testing/water-testing"
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold text-sm px-6 py-3 rounded-lg backdrop-blur-xs transition-all"
                  >
                    View All Water Testing Services
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/20 max-w-lg animate-fade-in-up animation-delay-400">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-xs font-semibold text-white">Gravimetric Method</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Settings className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-xs font-semibold text-white">180°C Drying Oven</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-xs font-semibold text-white">Laboratory Reports</span>
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
                <span className="block text-xl sm:text-2xl lg:text-[28px] font-bold text-red-500 mb-1 tracking-tight">
                  Up to 10k
                </span>
                <span className="block text-xs sm:text-[12.5px] font-medium text-gray-300 uppercase tracking-wider">
                  mg/L Testing Range
                </span>
              </div>
              <div className="py-6 sm:py-7 px-4 text-center">
                <span className="block text-xl sm:text-2xl lg:text-[28px] font-bold text-red-500 mb-1 tracking-tight">
                  0.0001 g
                </span>
                <span className="block text-xs sm:text-[12.5px] font-medium text-gray-300 uppercase tracking-wider">
                  Balance Readability
                </span>
              </div>
              <div className="py-6 sm:py-7 px-4 text-center">
                <span className="block text-xl sm:text-2xl lg:text-[28px] font-bold text-red-500 mb-1 tracking-tight">
                  180°C
                </span>
                <span className="block text-xs sm:text-[12.5px] font-medium text-gray-300 uppercase tracking-wider">
                  Constant Mass Drying
                </span>
              </div>
              <div className="py-6 sm:py-7 px-4 text-center">
                <span className="block text-xl sm:text-2xl lg:text-[28px] font-bold text-red-500 mb-1 tracking-tight">
                  Quality
                </span>
                <span className="block text-xs sm:text-[12.5px] font-medium text-gray-300 uppercase tracking-wider">
                  Controlled Testing
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Scientific Overview */}
        <section className="py-14 sm:py-20 bg-white reveal-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="md:col-span-5 relative h-[220px] sm:h-[300px] rounded-2xl overflow-hidden shadow-md border border-gray-100 group">
                <Image
                  src="/testing/tds-ph-water-testing.png"
                  alt="Laboratory chemist performing filtration for TDS testing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="md:col-span-7">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
                  Technical Foundation
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                  What is Total Dissolved Solids (TDS) Testing?
                </h2>
                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-4">
                  Total Dissolved Solids (TDS) represents the concentration of dissolved minerals, salts, and small amounts of organic matter that pass through a standard filter. Gravimetric analysis measures the mass of dried residue remaining after evaporating a filtered sample at 180°C.
                </p>
                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-6">
                  TDS results help evaluate mineral content, track reverse osmosis (RO) performance, compare different water sources, and support water-quality monitoring. Note that TDS is one parameter among many; a TDS measurement alone does not determine whether water is safe to drink or free from harmful microbiological or chemical contaminants.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="card-interactive group p-4 rounded-xl bg-emerald-50 border border-emerald-200/70 hover:border-emerald-400 transition-all duration-300 cursor-default">
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide block mb-1 group-hover:text-emerald-800 transition-colors">
                      Taste Profile (150–300 mg/L)
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      TDS between 150 and 300 mg/L may be acceptable from a taste perspective for some waters; actual taste varies with mineral composition and individual preference.
                    </p>
                  </div>

                  <div className="card-interactive group p-4 rounded-xl bg-amber-50 border border-amber-200/70 hover:border-amber-400 transition-all duration-300 cursor-default">
                    <span className="text-xs font-bold text-amber-700 uppercase tracking-wide block mb-1 group-hover:text-amber-800 transition-colors">
                      Standard Guidelines (500 mg/L)
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Standard specifications recognize an acceptable TDS baseline of 500 mg/L and a permissible ceiling of 2,000 mg/L where alternate sources are unavailable.
                    </p>
                  </div>

                  <div className="card-interactive group p-4 rounded-xl bg-rose-50 border border-rose-200/70 hover:border-rose-400 transition-all duration-300 cursor-default">
                    <span className="text-xs font-bold text-rose-700 uppercase tracking-wide block mb-1 group-hover:text-rose-800 transition-colors">
                      Elevated TDS (&gt;1,000 mg/L)
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Elevated TDS may indicate increased dissolved mineral content and can affect taste or contribute to scaling, depending on the water&apos;s chemical composition and intended use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benchmarks Table */}
        <section className="py-14 sm:py-20 bg-[#f8fafc] border-y border-slate-200/70 reveal-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                TDS Levels, Ratings &amp; Application Benchmarks
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-2xl mx-auto mt-2">
                Standard classification of water quality based on Total Dissolved Solids for drinking, residential, and industrial use.
              </p>
            </div>

            <div className="overflow-x-auto bg-white rounded-2xl shadow-xs border border-gray-200/80">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#05526e] text-white font-bold text-[13px]">
                    <th className="py-4 px-4 sm:px-6">TDS Concentration</th>
                    <th className="py-4 px-4 sm:px-6">Water Rating</th>
                    <th className="py-4 px-4 sm:px-6">Suitability &amp; Application</th>
                    <th className="py-4 px-4 sm:px-6">Flavor &amp; Impact Profile</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {tdsLevels.map((row, idx) => (
                    <tr key={idx} className="hover:bg-cyan-50/40 transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-cyan-800 whitespace-nowrap">
                        {row.range}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900">
                        {row.rating}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-700 leading-relaxed">
                        {row.suitability}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-gray-500 leading-relaxed">
                        {row.flavor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Testing Methodology */}
        <section className="py-14 sm:py-20 bg-white reveal-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Laboratory Gravimetric TDS Analysis
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Conducted using vacuum filtration, analytical laboratory ovens, and calibrated 0.0001 g balances.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-interactive group bg-[#f9fbfe] border border-cyan-100 hover:border-cyan-300 p-6 rounded-2xl shadow-xs transition-all duration-300 cursor-default">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 text-[#05526e] group-hover:bg-[#05526e] group-hover:text-white group-hover:scale-110 flex items-center justify-center mb-4 transition-all duration-300 shadow-xs">
                  <Scale className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-[#05526e] transition-colors">
                  Gravimetric Mass Determination
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  Unlike handheld conductivity meters that estimate TDS using proxy conversion multipliers, laboratory gravimetric testing measures the actual physical mass of dry residue on a 4-decimal analytical balance with 0.0001 g readability.
                </p>
                <div className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded inline-block">
                  Gravimetric Measurement
                </div>
              </div>

              <div className="card-interactive group bg-[#f9fbfe] border border-cyan-100 hover:border-cyan-300 p-6 rounded-2xl shadow-xs transition-all duration-300 cursor-default">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 text-[#05526e] group-hover:bg-[#05526e] group-hover:text-white group-hover:scale-110 flex items-center justify-center mb-4 transition-all duration-300 shadow-xs">
                  <Factory className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-[#05526e] transition-colors">
                  180°C Drying to Constant Mass
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  The filtered sample is evaporated and dried at 180°C to constant mass in accordance with applicable analytical methods. This standard thermal treatment removes mechanically held water to deliver reproducible filterable residue results.
                </p>
                <div className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded inline-block">
                  Constant Mass Drying
                </div>
              </div>

              <div className="card-interactive group bg-[#f9fbfe] border border-cyan-100 hover:border-cyan-300 p-6 rounded-2xl shadow-xs transition-all duration-300 cursor-default">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 text-[#05526e] group-hover:bg-[#05526e] group-hover:text-white group-hover:scale-110 flex items-center justify-center mb-4 transition-all duration-300 shadow-xs">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-[#05526e] transition-colors">
                  Conductivity Correlation
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  Gravimetric results can be compared alongside temperature-compensated Electrical Conductivity (EC) measurements for sample screening and ongoing internal quality verification.
                </p>
                <div className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded inline-block">
                  Quality Verification
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="py-14 sm:py-20 bg-[#f0f5fa] border-y border-slate-200/70 reveal-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Crucial Applications of TDS Water Testing
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Why builders, manufacturing plants, facility managers, and homeowners rely on verified TDS data.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tdsApplications.map((app, idx) => {
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

        {/* Testing Process */}
        <section className="py-14 sm:py-20 bg-white reveal-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Our 5-Step Laboratory Testing Workflow
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Systematic procedure from sample filtration to 0.0001 g analytical balance weighing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {tdsSteps.map((step, idx) => (
                <div key={idx} className="card-interactive group bg-[#f9fbfe] border border-gray-200/70 hover:border-cyan-300 p-5 rounded-xl text-center flex flex-col justify-between transition-all duration-300 cursor-default">
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

        {/* Companion Service: pH */}
        <section className="py-12 bg-gradient-to-r from-cyan-50 to-sky-50 border-y border-cyan-100 reveal-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card-interactive group bg-white rounded-2xl border border-cyan-200 hover:border-cyan-400 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs hover:shadow-md transition-all duration-300 cursor-default">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-[11px] font-bold uppercase tracking-wider mb-2">
                  COMPANION WATER SERVICE
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#05526e] transition-colors">
                  Need pH Water Testing (Acidity &amp; Alkalinity) Too?
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  TDS measures total dissolved solids concentration, while pH measures acidity and alkalinity balance. Evaluating both parameters together supports a broader assessment of water quality.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <Link
                  href="/testing/water-testing/ph-testing"
                  className="bg-[#05526e] hover:bg-[#033b50] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl flex items-center gap-2 shadow-xs hover:shadow hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Explore pH Testing
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/testing/water-testing"
                  className="bg-gray-100 hover:bg-gray-200 text-slate-700 text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-all"
                >
                  View All Water Testing Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#07192d] via-[#092544] to-[#0d345e] py-14 sm:py-16 reveal-scale">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                  Schedule Your TDS Water Test Today
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Submit your water samples to our laboratory in Greater Noida for quality-controlled gravimetric analysis and detailed laboratory test reports.
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
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Frequently Asked Questions About TDS Water Testing
              </h2>
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Technical answers on test procedures, RO membrane performance, drinking water baselines, and laboratory methods.
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
