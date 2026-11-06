import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Settings,
  FileText,
  Users,
  FlaskConical,
  ShieldCheck,
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
  CheckCircle2,
  HardHat,
  RotateCcw,
  Sliders,
  Flame,
  Activity,
  Building2,
  PackageCheck,
  FileSpreadsheet,
  Gauge,
  Boxes,
  FileCheck,
} from "lucide-react";

export const metadata = {
  title: "Cement Testing Services & Quality Evaluation Laboratory | MQTL",
  description:
    "Professional cement testing services by MQTL laboratory in Noida, Delhi NCR. Accurate testing for 3, 7, 28-day compressive strength, setting time, soundness, fineness, consistency & chemical composition.",
  keywords: [
    "Cement Testing Services",
    "Cement Testing Laboratory",
    "Cement Testing Lab Noida",
    "Cement Compressive Strength Test Delhi NCR",
    "Vicat Setting Time Test Cement",
    "Le Chatelier Soundness Test",
    "Blaine Fineness Test Cement",
    "OPC 43 53 Cement Testing",
    "PPC Cement Quality Analysis",
    "Cement Quality Standards",
    "Minu Quality Testing Laboratories Private Limited",
    "MQTL Lab",
  ],
  alternates: {
    canonical: "https://mqtlab.com/testing/cement-testing",
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
    title: "Cement Testing Services & Quality Lab - MQTL",
    description:
      "Professional cement testing laboratory providing compressive strength, setting time, soundness, fineness, and chemical analysis in Delhi NCR.",
    url: "https://mqtlab.com/testing/cement-testing",
    siteName: "MQTL - Minu Quality Testing Laboratories Private Limited",
    images: [
      {
        url: "/Cement Testing.jpg",
        width: 1200,
        height: 630,
        alt: "MQTL Cement Testing Laboratory Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cement Testing Services & Quality Lab - MQTL",
    description:
      "Professional cement testing laboratory providing comprehensive physical, mechanical, and chemical testing.",
    images: ["/Cement Testing.jpg"],
  },
};

const testServices = [
  {
    title: "Compressive Strength (3, 7, 28 Days)",
    description:
      "Evaluates mortar crushing strength on standard 70.6 mm cubes prepared with standard reference sand at 3, 7, and 28-day curing milestones using calibrated compression testing machines.",
    icon: Scale,
  },
  {
    title: "Initial & Final Setting Time",
    description:
      "Measures paste stiffening time using the Vicat needle apparatus to confirm adequate placement time (initial set ≥ 30 min) and complete hardening without delay (final set ≤ 600 min).",
    icon: Clock,
  },
  {
    title: "Soundness Test (Free Lime & Magnesia)",
    description:
      "Determines volume stability and delayed expansion using the Le Chatelier split-ring boiling method (limit ≤ 10 mm) and autoclave expansion test (limit ≤ 0.8%) to prevent destructive cracking.",
    icon: Flame,
  },
  {
    title: "Fineness by Blaine Air Permeability",
    description:
      "Measures the specific surface area per unit mass of cement using Blaine apparatus (≥ 225 m²/kg for OPC; ≥ 300 m²/kg for PPC) alongside standard 90-micron dry sieve residue checks.",
    icon: Gauge,
  },
  {
    title: "Normal Consistency Determination",
    description:
      "Finds the precise water-to-cement ratio (P%) required for a standard paste enabling the 10 mm Vicat plunger to penetrate 5–7 mm from the bottom, essential for all physical tests.",
    icon: Sliders,
  },
  {
    title: "Chemical Composition & LOI Analysis",
    description:
      "Analyzes critical chemical markers including Loss on Ignition (LOI ≤ 5.0%), Insoluble Residue (IR ≤ 5.0%), Magnesia (MgO ≤ 6.0%), and Lime Saturation Factor (LSF) using laboratory chemical analysis.",
    icon: FlaskConical,
  },
  {
    title: "Density & Specific Gravity Test",
    description:
      "Measures true particle density using calibrated Le Chatelier flasks and non-reactive kerosene (typically 3.10–3.15 g/cm³ for OPC) for concrete mix design yield calculations.",
    icon: Activity,
  },
  {
    title: "Heat of Hydration Evaluation",
    description:
      "Evaluates the exothermic heat released during cement hydration using solution calorimetry methods to prevent thermal cracking in massive raft foundations and dams.",
    icon: RotateCcw,
  },
  {
    title: "Drying Shrinkage of Mortar",
    description:
      "Evaluates length changes in prismatic mortar specimens exposed to cyclic drying to predict and minimize shrinkage cracking in structural floor slabs and bridge decks.",
    icon: Layers,
  },
];

const applications = [
  {
    title: "High-Rise Framing",
    subtitle: "OPC 53 Grade Concrete",
    icon: Building2,
  },
  {
    title: "Marine & Foundations",
    subtitle: "PPC & Slag Durability",
    icon: Shield,
  },
  {
    title: "Ready-Mix Concrete",
    subtitle: "Batch-to-Batch Quality",
    icon: HardHat,
  },
  {
    title: "Precast & Pavers",
    subtitle: "Early Compressive Gain",
    icon: Boxes,
  },
];

const processSteps = [
  {
    step: "1",
    title: "Intake & Check",
    description: "Inspection of sealed packages, moisture exclusion check, and laboratory batch logging.",
    icon: PackageCheck,
    badgeColor: "bg-red-500",
  },
  {
    step: "2",
    title: "Consistency (P%)",
    description: "Vicat plunger penetration test to establish standard water percentage for all test pastes.",
    icon: Sliders,
    badgeColor: "bg-blue-600",
  },
  {
    step: "3",
    title: "Setting & Soundness",
    description: "Vicat needle penetration for set times and boiling Le Chatelier split-cylinder soundness.",
    icon: Clock,
    badgeColor: "bg-emerald-600",
  },
  {
    step: "4",
    title: "Cube Casting & Curing",
    description: "70.6 mm mortar cubes cast on standard vibrating tables and cured in controlled water tanks.",
    icon: Scale,
    badgeColor: "bg-purple-600",
  },
  {
    step: "5",
    title: "Crushing & Report",
    description: "Crushing at 3, 7, and 28 days on calibrated UTM with verified test reports issued.",
    icon: FileCheck,
    badgeColor: "bg-slate-800",
  },
];

const sampleGuidelines = [
  {
    title: "Sample Quantity",
    description: "Submit 8 kg to 10 kg of representative cement for complete physical and chemical testing. For mortar compressive strength alone, submit at least 5 kg.",
  },
  {
    title: "Airtight Packaging",
    description: "Seal immediately in double-layered, heavy-duty polythene bags tightly tied to exclude atmospheric moisture and prevent pre-hydration lumps.",
  },
  {
    title: "Traceability Details",
    description: "Label clearly with manufacturer name, brand, cement type/grade (e.g., OPC 53, PPC), week and year of manufacture, and site batch reference.",
  },
  {
    title: "Safe Transport",
    description: "Ensure sample packages are securely sealed and protected from rain, dampness, and moisture during transport to our laboratory.",
  },
];

const whyChooseFeatures = [
  {
    title: "Calibrated Equipment",
    description: "Testing executed on automated compression machines, Vicat apparatus, and Blaine permeability meters calibrated to national standards.",
    icon: Settings,
  },
  {
    title: "Documented Protocols",
    description: "Every test method follows validated laboratory standard operating procedures and technical quality protocols.",
    icon: FileSpreadsheet,
  },
  {
    title: "Milestone Reporting",
    description: "Interim reports for consistency, setting time, and 3/7-day strength, followed by final 28-day verified laboratory reports.",
    icon: Clock,
  },
  {
    title: "Engineering Expertise",
    description: "Direct consultation with qualified civil materials engineers to interpret test results and mix design parameters.",
    icon: Users,
  },
];

const faqs = [
  {
    q: "Why is 28-day compressive strength the decisive benchmark for cement quality?",
    a: "While 3-day and 7-day tests provide early indicators of hydration and initial setting behavior, 28-day compressive strength represents the standardized milestone where cement hydration achieves long-term structural load capacity. Standard quality classifications categorize OPC grades (such as 43 and 53) strictly based on their 28-day mortar strength.",
  },
  {
    q: "How much cement sample is required for full physical and chemical testing?",
    a: "For a complete suite of physical tests (consistency, setting time, soundness, fineness, and 3/7/28-day compressive strength) along with chemical analysis, we recommend submitting a minimum of 8 kg to 10 kg of representative cement. If only setting time, soundness, and fineness are required, 3 kg to 5 kg is sufficient.",
  },
  {
    q: "How should cement samples be packed to prevent moisture damage during transit?",
    a: "Cement readily absorbs moisture and reacts with atmospheric humidity. Samples must be sealed immediately in completely dry, double-layered heavy-duty bags, placed inside an airtight container, and clearly labeled with sampling date, manufacturer, and grade.",
  },
  {
    q: "What causes cement soundness failure and what are the structural consequences?",
    a: "Soundness failure is primarily caused by excessive unburnt free lime (CaO) or hard-burned magnesia (MgO) in the cement clinker. These compounds hydrate and expand very slowly after the cement has already hardened, causing delayed expansion. This expansion creates internal stresses, resulting in cracking, spalling, and compromised structural integrity.",
  },
  {
    q: "What is the difference between Ordinary Portland Cement (OPC) and Portland Pozzolana Cement (PPC)?",
    a: "OPC consists primarily of clinker and gypsum, providing rapid early strength development suitable for fast-track structural casting and high-rise framing. PPC incorporates pozzolanic materials (such as fly ash), which react with free calcium hydroxide released during hydration. PPC achieves lower initial heat of hydration, superior long-term impermeability, and enhanced resistance to chemical attack.",
  },
  {
    q: "How are cement test results reported for compressive strength milestones?",
    a: "Preliminary parameters—including normal consistency, initial/final setting time, Le Chatelier soundness, and Blaine fineness—are evaluated initially. Compressive strength evaluations follow standard curing schedules, with interim updates for 3-day and 7-day milestones and comprehensive final verified laboratory reports.",
  },
];

export default function CementTestingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://mqtlab.com/testing/cement-testing#service",
        name: "Cement Testing Services in Noida",
        serviceType: "Construction Material Testing",
        provider: {
          "@type": "LocalBusiness",
          "@id": "https://mqtlab.com/#laboratory",
          name: "Minu Quality Testing Laboratories Private Limited",
          url: "https://mqtlab.com",
          telephone: "+91-9971234474",
          email: "info@mqtlab.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Plot No. 79, Sector 155",
            addressLocality: "Noida",
            addressRegion: "Uttar Pradesh",
            postalCode: "201310",
            addressCountry: "IN",
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://mqtlab.com/testing/cement-testing#faq",
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
                  CIVIL &amp; BINDING MATERIAL TESTING
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-2.5 animate-fade-in-up animation-delay-100">
                Cement Testing Services &amp; Laboratory
              </h1>

              <p className="text-slate-300 text-xs sm:text-[14px] leading-relaxed mb-5 animate-fade-in-up animation-delay-200">
                Professional laboratory testing to evaluate 3, 7, and 28-day compressive strength,
                Vicat initial and final setting times, Le Chatelier soundness, Blaine fineness, and chemical
                composition for OPC, PPC, and blended cements.
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
                src="/testing/cement-testing-services.png"
                alt="Cement testing laboratory equipment and mortar cubes"
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
                  CIVIL &amp; BINDING MATERIAL TESTING
                </p>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-white tracking-tight leading-[1.12] mb-3 drop-shadow-sm animate-fade-in-up animation-delay-100">
                  Cement Testing Services &amp; Laboratory
                </h1>

                <p className="text-slate-100 font-normal text-sm sm:text-base md:text-[16px] leading-relaxed mb-5 animate-fade-in-up animation-delay-200">
                  Professional laboratory testing to evaluate 3, 7, and 28-day compressive strength,
                  Vicat initial and final setting times, Le Chatelier soundness, Blaine fineness, and chemical
                  composition for OPC, PPC, and blended cements.
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
                    <span className="text-xs sm:text-[13px] font-bold text-white">
                      Reliable Methods
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Settings className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="text-xs sm:text-[13px] font-bold text-white">
                      Modern Equipment
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="text-xs sm:text-[13px] font-bold text-white">
                      Laboratory Reports
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats Bar */}
        <section className="bg-[#081e35] border-y border-white/10 text-white reveal-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-white/10">
              <div className="py-6 sm:py-7 px-4 text-center">
                <span className="block text-2xl sm:text-3xl lg:text-[32px] font-bold text-red-500 mb-1 tracking-tight">
                  3, 7, 28 D
                </span>
                <span className="block text-xs sm:text-[12.5px] font-medium text-gray-300 uppercase tracking-wider">
                  Strength Milestones
                </span>
              </div>

              <div className="py-6 sm:py-7 px-4 text-center">
                <span className="block text-2xl sm:text-3xl lg:text-[32px] font-bold text-red-500 mb-1 tracking-tight">
                  70.6 mm
                </span>
                <span className="block text-xs sm:text-[12.5px] font-medium text-gray-300 uppercase tracking-wider">
                  Standard Mortar Cubes
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
              <div className="relative h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-md border border-gray-100">
                <Image
                  src="/testing/cement-testing-about-banner.png"
                  alt="Cement sample undergoing mechanical compressive strength testing"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                  Professional Cement Quality Evaluation Laboratory
                </h2>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-4">
                  Our laboratory provides reliable cement testing services to evaluate the physical,
                  mechanical, and chemical properties of hydraulic cements used in civil infrastructure,
                  commercial construction, and ready-mix concrete production.
                </p>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-8">
                  We conduct standardized tests including compressive strength of standard mortar cubes,
                  Vicat setting time, Le Chatelier soundness, Blaine fineness, and loss on ignition.
                  These tests help contractors, developers, and cement manufacturers ensure quality compliance,
                  preventing delayed expansion, setting failures, and structural strength deficits.
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

        {/* Testing Services */}
        <section className="py-16 sm:py-20 bg-[#f0f5fa] border-y border-slate-200/70 reveal-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Our Comprehensive Cement Testing Services
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Standardized physical, mechanical, and chemical evaluations performed under controlled laboratory conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {testServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="card-interactive group bg-white rounded-xl border border-gray-200/80 p-5 sm:p-6 shadow-xs hover:border-red-300 transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0 mt-0.5 text-red-600 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="font-bold text-slate-900 text-sm sm:text-[15px] group-hover:text-red-600 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Real-World Applications */}
        <section className="py-14 sm:py-20 bg-white reveal-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="relative h-[300px] sm:h-[350px] md:col-span-5 rounded-2xl overflow-hidden shadow-md border border-gray-100">
                <Image
                  src="/Cement Testing.jpg"
                  alt="Cement and concrete structural applications"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="md:col-span-7">
                <div className="border-l-4 border-red-500 pl-4 mb-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Cement Testing for Structural, Infrastructure &amp; Commercial Works
                  </h2>
                </div>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-7">
                  Our cement testing services support high-rise residential construction, highway bridges,
                  ready-mix concrete batching plants, and precast manufacturing. Independent testing ensures
                  that every batch possesses the proper setting window, volume stability, and load-bearing
                  capacity necessary for enduring concrete structures.
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
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#f8fafc] to-[#edf4f9] border-y border-slate-200/70 reveal-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Our Cement Testing Process
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
              {processSteps.map((step, idx) => {
                const StepIcon = step.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col lg:flex-row items-center flex-1 w-full"
                  >
                    <div className="text-center flex flex-col items-center flex-1 group">
                      <span
                        className={`w-6 h-6 rounded-full text-white font-bold text-xs flex items-center justify-center mb-2.5 shadow-xs ${step.badgeColor} group-hover:scale-110 transition-transform duration-200`}
                      >
                        {step.step}
                      </span>

                      <StepIcon className="w-8 h-8 text-slate-700 group-hover:text-red-600 group-hover:scale-110 mb-2.5 transition-all duration-300" />

                      <h3 className="font-bold text-slate-900 text-sm sm:text-[15px] mb-1 group-hover:text-red-600 transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">
                        {step.description}
                      </p>
                    </div>

                    {idx < processSteps.length - 1 && (
                      <div className="hidden lg:block w-8 h-0.5 bg-gray-300 shrink-0 mx-2" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sample Submission Requirements */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-[#06182b] via-[#09223e] to-[#0d2d50] text-white reveal-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Sample Submission Guidelines for Cement Testing
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-slate-300 text-sm max-w-xl mx-auto mt-2">
                Follow these technical guidelines when preparing and dispatching cement samples to our laboratory facility in Noida.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {sampleGuidelines.map((guide, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 backdrop-blur-xs flex flex-col justify-between hover:bg-white/10 transition-all duration-200"
                >
                  <div>
                    <span className="w-7 h-7 rounded-lg bg-red-500/20 text-red-400 font-bold text-xs flex items-center justify-center mb-3 border border-red-500/30">
                      0{idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-white mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed">
                      {guide.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose MQTL */}
        <section className="py-16 sm:py-20 bg-[#f8fafc] border-b border-slate-200/70 reveal-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Why Choose MQTL for Cement Testing?
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Accurate physical, mechanical, and chemical evaluations backed by experienced materials testing engineers.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {whyChooseFeatures.map((feat, idx) => {
                const FeatIcon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="card-interactive group bg-white rounded-xl border border-gray-200/80 p-5 sm:p-6 shadow-xs hover:border-red-300 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 mb-4 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-xs">
                      <FeatIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-red-600 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#07192d] via-[#092544] to-[#0d345e] py-14 sm:py-16 reveal-scale">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                  Need Reliable Cement Quality Testing?
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Connect with our testing experts in Noida to schedule specimen testing, request customized quote batches, or obtain verified laboratory test reports.
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
                Frequently Asked Questions About Cement Testing
              </h2>
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Technical answers regarding compressive strength milestones, setting times, soundness, and sample handling.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-[#f9fbfe] border border-gray-200/80 rounded-xl overflow-hidden transition-all duration-200 open:bg-white open:shadow-xs open:border-[#05526e]/30"
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
