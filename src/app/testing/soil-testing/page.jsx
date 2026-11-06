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
  Activity,
  Building2,
  PackageCheck,
  FileSpreadsheet,
  Gauge,
  Boxes,
  Grid,
} from "lucide-react";

export const metadata = {
  title: "Soil Testing Services & Geotechnical Laboratory | MQTL",
  description:
    "Professional soil testing services by MQTL laboratory in Noida, Delhi NCR. Accurate testing for bearing capacity, CBR, Atterberg limits, compaction (Proctor), moisture, direct shear, and permeability as per recognized standard geotechnical specifications.",
  keywords: [
    "Soil Testing Services",
    "Soil Testing Laboratory",
    "Soil Testing Lab Noida",
    "Geotechnical Soil Testing Delhi NCR",
    "Bearing Capacity Test Soil",
    "California Bearing Ratio CBR Test",
    "Proctor Compaction Test Soil",
    "Atterberg Limits Test Liquid Plastic Limit",
    "Direct Shear Test Soil Noida",
    "Standard Geotechnical Testing Protocols",
    "Minu Quality Testing Laboratories Private Limited",
    "MQTL Lab",
  ],
  alternates: {
    canonical: "https://mqtlab.com/testing/soil-testing",
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
    title: "Soil Testing Services & Geotechnical Lab - MQTL",
    description:
      "Professional soil testing laboratory providing bearing capacity, CBR, compaction, Atterberg limits, and shear strength analysis in Delhi NCR.",
    url: "https://mqtlab.com/testing/soil-testing",
    siteName: "MQTL - Minu Quality Testing Laboratories Private Limited",
    images: [
      {
        url: "/Soil Testing.jpg",
        width: 1200,
        height: 630,
        alt: "MQTL Soil Testing Laboratory Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soil Testing Services & Geotechnical Lab - MQTL",
    description:
      "Professional soil testing laboratory providing comprehensive geotechnical, physical, and subgrade strength evaluation.",
    images: ["/Soil Testing.jpg"],
  },
};

const testServices = [
  {
    title: "Grain Size Analysis & Hydrometer",
    description:
      "Determines particle size distribution from coarse gravel down to fine silt and clay fractions using mechanical sieves and sedimentation hydrometer tests as per standard sedimentation and sieve analysis procedures.",
    icon: Grid,
  },
  {
    title: "Atterberg Limits (LL & PL)",
    description:
      "Measures liquid limit via Casagrande apparatus, plastic limit, and plasticity index (PI) to classify fine-grained soils and forecast swelling or shrinkage as per standard Atterberg limit procedures.",
    icon: Sliders,
  },
  {
    title: "Standard & Modified Proctor Test",
    description:
      "Evaluates compaction characteristics to establish Optimum Moisture Content (OMC) and Maximum Dry Density (MDD) for structural earth fills as per standard laboratory compaction procedures.",
    icon: Gauge,
  },
  {
    title: "California Bearing Ratio (CBR)",
    description:
      "Measures subgrade penetration resistance under soaked (4-day immersion) and unsoaked conditions to design flexible highway pavement thicknesses under standard soaked and unsoaked penetration protocols.",
    icon: Scale,
  },
  {
    title: "Direct Shear & Shear Strength",
    description:
      "Evaluates cohesion (c) and angle of internal friction (φ) on consolidated drained specimens under varying normal stresses for foundation stability under standard direct shear testing procedures.",
    icon: Activity,
  },
  {
    title: "Unconfined Compressive Strength (UCS)",
    description:
      "Measures axial compressive strength of cohesive soil cylinders to estimate undrained shear strength and safe bearing capacity rapidly under standard unconfined compression methods.",
    icon: HardHat,
  },
  {
    title: "Permeability (Constant / Falling Head)",
    description:
      "Measures hydraulic conductivity to evaluate drainage efficiency, seepage velocity, and dewatering requirements in foundation excavations under standard falling and constant head permeability protocols.",
    icon: FlaskConical,
  },
  {
    title: "Consolidation & Settlement Properties",
    description:
      "Measures compression index (Cc) and coefficient of consolidation (Cv) on oedometer cells to predict magnitude and rate of structural building settlement under standard one-dimensional oedometer test methods.",
    icon: Layers,
  },
  {
    title: "Specific Gravity & Moisture Content",
    description:
      "Determines true soil grain density using calibrated pycnometers alongside rapid oven-dry moisture determination essential for all geotechnical calculations under standard pycnometer and oven-drying methods.",
    icon: RotateCcw,
  },
];

const applications = [
  {
    title: "Building Footings",
    subtitle: "Safe Bearing Capacity",
    icon: Building2,
  },
  {
    title: "Highway Subgrades",
    subtitle: "CBR & Embankments",
    icon: HardHat,
  },
  {
    title: "Retaining Walls",
    subtitle: "Active Earth Pressure",
    icon: Layers,
  },
  {
    title: "Deep Piles & Rafts",
    subtitle: "Skin Friction & Settlement",
    icon: Boxes,
  },
];

const processSteps = [
  {
    step: "1",
    title: "Sampling & Intake",
    description: "Inspection of sealed disturbed bags or undisturbed core tubes, logging borehole and depth stratum.",
    icon: PackageCheck,
    badgeColor: "bg-red-500",
  },
  {
    step: "2",
    title: "Index Preparation",
    description: "Natural moisture determination, air drying, pulverizing, and specimen splitting across standard sieves.",
    icon: Sliders,
    badgeColor: "bg-blue-600",
  },
  {
    step: "3",
    title: "Compaction & CBR",
    description: "Proctor energy compaction to determine OMC/MDD followed by soaked or unsoaked CBR penetration test.",
    icon: Gauge,
    badgeColor: "bg-emerald-600",
  },
  {
    step: "4",
    title: "Shear & Consolidation",
    description: "Direct shear, unconfined compression, and oedometer testing to evaluate strength and settlement.",
    icon: Scale,
    badgeColor: "bg-purple-600",
  },
  {
    step: "5",
    title: "Report Issuance",
    description: "Compilation of geotechnical curves, classification according to standard soil engineering systems, and verified laboratory test reports.",
    icon: FileText,
    badgeColor: "bg-slate-800",
  },
];

const sampleGuidelines = [
  {
    title: "Disturbed Bulk Samples",
    description: "Submit 20 kg to 30 kg of representative soil per stratum for standard classification, Atterberg limits, Proctor compaction, and CBR testing.",
  },
  {
    title: "Undisturbed Core Samples",
    description: "Extract undisturbed specimens using thin-walled Shelby tubes (UDS). Wax-seal both ends immediately on-site to preserve natural moisture and in-situ density.",
  },
  {
    title: "Stratum Documentation",
    description: "Label each sample container clearly with project site, borehole number (BH-ID), depth interval (e.g., 1.5 m to 3.0 m), and sampling date.",
  },
  {
    title: "Intake & Delivery",
    description: "Deliver directly to our laboratory facility at Plot No. 79, Sector 155, Noida (201310), protected against rough transit shocks and moisture loss.",
  },
];

const whyChooseFeatures = [
  {
    title: "Calibrated Equipment",
    description: "Testing executed on automated Proctor rammers, digital CBR machines, multi-speed direct shear rigs, and triaxial cells calibrated to national standards.",
    icon: Settings,
  },
  {
    title: "Documented SOPs",
    description: "Every test method references recognized published standard geotechnical engineering procedures.",
    icon: FileSpreadsheet,
  },
  {
    title: "Verified Test Certificates",
    description: "Index properties, moisture, and compaction results issued in certified technical reports for engineering use.",
    icon: CheckCircle2,
  },
  {
    title: "Engineering Expertise",
    description: "Direct consultation with qualified geotechnical engineers to interpret soil strata profiles and foundation design parameters.",
    icon: Users,
  },
];

const faqs = [
  {
    q: "Why is soil testing essential before starting building foundation construction?",
    a: "Soil testing determines the Safe Bearing Capacity (SBC) and settlement characteristics of the underlying soil strata. Without prior geotechnical analysis, structural loads can exceed the soil's shear capacity, leading to differential settlement, foundation tilting, structural wall cracking, or catastrophic foundation failure.",
  },
  {
    q: "What is the difference between disturbed and undisturbed soil samples?",
    a: "Disturbed soil samples have their natural structural arrangement altered during extraction and are suitable for index properties such as sieve analysis, Atterberg limits, specific gravity, and laboratory compaction. Undisturbed samples (extracted in thin-walled tubes with sealed ends) preserve in-situ soil fabric, moisture, and density, which is mandatory for shear strength, consolidation, and permeability testing.",
  },
  {
    q: "What is California Bearing Ratio (CBR) and why is soaked CBR required?",
    a: "The California Bearing Ratio (CBR) measures the mechanical penetration resistance of compacted subgrade soil relative to standard crushed stone. In soaked CBR testing, specimens are submerged in water for 96 hours before penetration to simulate the worst-case monsoon saturation condition, ensuring pavement crust thickness is designed for long-term road durability.",
  },
  {
    q: "What do the Liquid Limit (LL) and Plasticity Index (PI) indicate?",
    a: "The Liquid Limit (LL) is the moisture content at which soil transitions from plastic to liquid behavior. The Plasticity Index (PI = LL - PL) indicates the range of moisture over which the soil exhibits plasticity. High plasticity soils (such as black cotton soil or expansive clays) undergo massive volumetric swelling when wet and shrinking when dry, necessitating specialized foundation solutions.",
  },
  {
    q: "How is Safe Bearing Capacity (SBC) calculated from laboratory test data?",
    a: "Safe Bearing Capacity is determined using standard geotechnical calculation formulas by combining shear parameters (cohesion 'c' and internal friction angle 'φ') derived from direct shear or triaxial tests with foundation dimensions (width and embedment depth). A factor of safety (typically 2.5 to 3.0) is applied against ultimate shear failure, verified against permissible settlement limits.",
  },
  {
    q: "How are soil test results reported for geotechnical engineering?",
    a: "Laboratory test results—including moisture-density relationships, grain size distribution curves, Atterberg limits, and shear strength parameters—are compiled into certified geotechnical test reports.",
  },
];

export default function SoilTestingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://mqtlab.com/testing/soil-testing#service",
        name: "Soil Testing Services in Noida",
        serviceType: "Geotechnical Material Testing",
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
        "@id": "https://mqtlab.com/testing/soil-testing#faq",
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
          <div className="lg:hidden relative px-4 py-8 sm:px-6 bg-gradient-to-br from-[#07182b] via-[#0b2440] to-[#07182b] text-white border-b border-white/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-xl mx-auto sm:max-w-none">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 shadow-xs mb-3 backdrop-blur-md animate-fade-in-up">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                <span className="text-sky-300 font-bold tracking-wider text-[11px] uppercase">
                  GEOTECHNICAL &amp; FOUNDATION SOIL TESTING
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-2.5 animate-fade-in-up animation-delay-100">
                Soil Testing Services &amp; Laboratory
              </h1>

              <p className="text-slate-300 text-xs sm:text-[14px] leading-relaxed mb-5 animate-fade-in-up animation-delay-200">
                Professional laboratory testing to evaluate soil bearing capacity, California Bearing
                Ratio (CBR), Proctor compaction, Atterberg limits, direct shear strength, and permeability
                for structural foundations and road infrastructure.
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
                src="/testing/soil-testing-services.png"
                alt="Soil testing laboratory equipment and geotechnical core specimens"
                fill
                priority
                className="object-cover object-[center_center] transition-transform duration-700 hover:scale-[1.01]"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#051628]/95 via-[#051628]/85 via-42% to-transparent to-62% pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-8  w-full">
              <div className="max-w-2xl lg:max-w-[680px] xl:max-w-[740px]">
                <p className="text-sky-400 font-bold tracking-widest text-xs sm:text-[13px] md:text-sm uppercase mb-2.5 animate-fade-in-up">
                  GEOTECHNICAL &amp; FOUNDATION SOIL TESTING
                </p>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-white tracking-tight leading-[1.12] mb-3 drop-shadow-sm animate-fade-in-up animation-delay-100">
                  Soil Testing Services &amp; Laboratory
                </h1>

                <p className="text-slate-100 font-normal text-sm sm:text-base md:text-[16px] leading-relaxed mb-5 animate-fade-in-up animation-delay-200">
                  Professional laboratory testing to evaluate soil bearing capacity, California Bearing
                  Ratio (CBR), Proctor compaction, Atterberg limits, direct shear strength, and permeability
                  for structural foundations and road infrastructure.
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
                  Standard
                </span>
                <span className="block text-xs sm:text-[12.5px] font-medium text-gray-300 uppercase tracking-wider">
                  Test Methods
                </span>
              </div>

              <div className="py-6 sm:py-7 px-4 text-center">
                <span className="block text-2xl sm:text-3xl lg:text-[32px] font-bold text-red-500 mb-1 tracking-tight">
                  CBR &amp; Shear
                </span>
                <span className="block text-xs sm:text-[12.5px] font-medium text-gray-300 uppercase tracking-wider">
                  Subgrade Evaluation
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
                  src="/testing/soil-services.png"
                  alt="Geotechnical soil sample undergoing shear and compaction laboratory analysis"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                  Professional Geotechnical Soil Evaluation Laboratory
                </h2>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-4">
                  Our laboratory provides reliable soil testing services to analyze the physical,
                  mechanical, and hydraulic properties of subsoil strata required for building foundations,
                  highway alignments, bridges, and infrastructure earthworks.
                </p>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-8">
                  Subsoil conditions govern foundation stability and settlement risks. We conduct standardized
                  evaluations including California Bearing Ratio (CBR), Proctor compaction, Atterberg plasticity
                  limits, direct shear, consolidation, and permeability as per published standard geotechnical methods,
                  enabling structural engineers to design safe, cost-efficient foundations.
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
                Our Comprehensive Soil Testing Services
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Standardized physical, mechanical, and geotechnical evaluations performed under controlled laboratory conditions.
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
                  src="/Soil Testing.jpg"
                  alt="Geotechnical soil testing application in building foundations and road construction"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="md:col-span-7">
                <div className="border-l-4 border-red-500 pl-4 mb-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Soil Testing for Structural Foundations, Highways &amp; Earthworks
                  </h2>
                </div>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-7">
                  Our geotechnical testing services support residential high-rises, expressway embankments,
                  industrial plants, and foundation slope stability. Laboratory evaluation provides the exact
                  bearing capacity, settlement rates, and subgrade CBR required for secure engineering designs.
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
                Our Soil Testing Process
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
                Sample Submission Guidelines for Soil Testing
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-slate-300 text-sm max-w-xl mx-auto mt-2">
                Follow these technical guidelines when collecting and dispatching soil samples to our laboratory facility in Noida.
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
                Why Choose MQTL for Soil Testing?
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Accurate, standard-referenced geotechnical evaluations backed by experienced materials testing engineers.
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
                  Need Reliable Geotechnical Soil Testing?
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Connect with our testing experts in Noida to schedule subsoil borehole evaluations, request customized testing suites, or obtain verified laboratory test reports.
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
                Frequently Asked Questions About Soil Testing
              </h2>
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Technical guidance on bearing capacity, CBR subgrades, Atterberg plasticity, and sample preservation.
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
