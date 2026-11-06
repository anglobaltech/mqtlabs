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
  title: "Aggregates Testing Services & Quality Evaluation Laboratory | MQTL",
  description:
    "Professional aggregates testing services by MQTL laboratory in Noida, Delhi NCR. Accurate testing for sieve analysis, crushing value (ACV), impact value (AIV), Los Angeles abrasion, flakiness, elongation, and water absorption.",
  keywords: [
    "Aggregates Testing Services",
    "Aggregates Testing Laboratory",
    "Aggregates Testing Lab Noida",
    "Coarse Aggregate Crushing Value Test Delhi NCR",
    "Aggregate Impact Value Test Noida",
    "Sieve Analysis Sand and Gravel",
    "Flakiness and Elongation Index Test",
    "Los Angeles Abrasion Test Aggregates",
    "Specific Gravity Water Absorption Aggregates",
    "National Aggregates Testing Standards",
    "Standard Concrete Aggregates Specification",
    "Minu Quality Testing Laboratories Private Limited",
    "MQTL Lab",
  ],
  alternates: {
    canonical: "https://mqtlab.com/testing/aggregates-testing",
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
    title: "Aggregates Testing Services & Quality Lab - MQTL",
    description:
      "Professional aggregates testing laboratory providing sieve analysis, crushing value, impact value, abrasion, flakiness, and water absorption in Delhi NCR.",
    url: "https://mqtlab.com/testing/aggregates-testing",
    siteName: "MQTL - Minu Quality Testing Laboratories Private Limited",
    images: [
      {
        url: "/Aggregates Testing.jpg",
        width: 1200,
        height: 630,
        alt: "MQTL Aggregates Testing Laboratory Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aggregates Testing Services & Quality Lab - MQTL",
    description:
      "Professional aggregates testing laboratory providing comprehensive physical, mechanical, and grading analysis.",
    images: ["/Aggregates Testing.jpg"],
  },
};

const testServices = [
  {
    title: "Sieve Analysis & Particle Grading",
    description:
      "Determines particle size distribution for coarse and fine aggregates using calibrated mechanical sieve shakers. Identifies sand grading zones (Zones I to IV) and coarse aggregate gradation as per standard sieve analysis procedures.",
    icon: Grid,
  },
  {
    title: "Aggregate Crushing Value (ACV)",
    description:
      "Evaluates mechanical resistance to crushing under a progressively applied compressive load of 400 kN over 10 minutes (limit ≤ 30% for wearing courses; ≤ 45% for other structures) under standard mechanical crushing procedures.",
    icon: Scale,
  },
  {
    title: "Aggregate Impact Value (AIV)",
    description:
      "Measures aggregate toughness and resistance to sudden shock using a standard 13.5–14.0 kg hammer falling through 380 mm for 15 blows. Crucial for highway wearing courses and pavements under standard aggregate impact test protocols.",
    icon: Activity,
  },
  {
    title: "Los Angeles Abrasion Value (LAA)",
    description:
      "Assesses resistance to surface friction, rolling wear, and mechanical attrition in a rotating drum with specified steel charge balls. Essential quality control for road surfacing under standard rotating drum abrasion methods.",
    icon: RotateCcw,
  },
  {
    title: "Flakiness & Elongation Indices",
    description:
      "Quantifies flaky (thickness < 0.6 mean size) and elongated (length > 1.8 mean size) particles using standard gauges to prevent honeycombed, weak concrete matrices using standard thickness and length gauges.",
    icon: Sliders,
  },
  {
    title: "Specific Gravity & Water Absorption",
    description:
      "Measures apparent specific gravity and 24-hour water absorption using wire basket immersion methods. Crucial for accurate batch water adjustments in concrete mix design using wire basket immersion test methods.",
    icon: FlaskConical,
  },
  {
    title: "Soundness Test (Sulfate Durability)",
    description:
      "Evaluates weathering resistance through 5 cycles of immersion in saturated sodium sulfate (Na₂SO₄) or magnesium sulfate (MgSO₄) followed by oven drying under standard accelerated chemical soundness procedures.",
    icon: Shield,
  },
  {
    title: "Silt, Clay & Decantation Test",
    description:
      "Measures clay lumps, organic matter, and fine particles passing 75 microns by the decantation method to ensure optimal cement-paste bond strength under standard decantation and silt content procedures.",
    icon: Microscope,
  },
  {
    title: "10% Fines Value (TFV)",
    description:
      "Determines the load required to produce 10% fines from aggregate fractions, providing a reliable measure of crushing resistance for weaker or porous stone varieties using calibrated compressive loading procedures.",
    icon: Gauge,
  },
];

const applications = [
  {
    title: "Structural Concrete",
    subtitle: "Foundations & Slabs",
    icon: Building2,
  },
  {
    title: "Highway Pavements",
    subtitle: "Asphalt & Base Courses",
    icon: HardHat,
  },
  {
    title: "Ready-Mix Concrete",
    subtitle: "Grading Zone Control",
    icon: Boxes,
  },
  {
    title: "Precast & Pavers",
    subtitle: "High Density Blocks",
    icon: Layers,
  },
];

const processSteps = [
  {
    step: "1",
    title: "Sampling & Intake",
    description: "Inspection of sealed sample bags, batch identification, and laboratory intake logging.",
    icon: PackageCheck,
    badgeColor: "bg-red-500",
  },
  {
    step: "2",
    title: "Quartering & Drying",
    description: "Sample reduction using riffle splitters and oven drying to constant mass for consistent specimens.",
    icon: Sliders,
    badgeColor: "bg-blue-600",
  },
  {
    step: "3",
    title: "Sieve & Particle Sizing",
    description: "Grading curves generated through calibrated mechanical sieve shaker analysis across standard nests.",
    icon: Grid,
    badgeColor: "bg-emerald-600",
  },
  {
    step: "4",
    title: "Mechanical Crushing & Impact",
    description: "Crushing under 400 kN load, dynamic impact blows, and Los Angeles drum abrasion tests.",
    icon: Scale,
    badgeColor: "bg-purple-600",
  },
  {
    step: "5",
    title: "Report Issuance",
    description: "Verification of parameters against standard technical acceptance limits with verified test reports issued.",
    icon: FileText,
    badgeColor: "bg-slate-800",
  },
];

const sampleGuidelines = [
  {
    title: "Sample Quantity",
    description: "Submit 30 kg to 50 kg for coarse aggregates (10 mm, 20 mm, 40 mm) and 15 kg to 20 kg for fine aggregates (river sand or M-sand) to perform complete physical and mechanical testing.",
  },
  {
    title: "Representative Sampling",
    description: "Sample increments should be gathered from multiple stockpile points (top, middle, base) to avoid segregated zones, and mixed thoroughly before bagging.",
  },
  {
    title: "Durable Packaging",
    description: "Pack in clean, heavy-duty woven polypropylene bags with secure ties. Clearly label each bag with source quarry, nominal size fraction, and project lot number.",
  },
  {
    title: "Intake & Delivery",
    description: "Deliver directly to our laboratory facility at Plot No. 79, Sector 155, Noida (201310), accompanied by a test requisition form detailing required standard parameters.",
  },
];

const whyChooseFeatures = [
  {
    title: "Calibrated Equipment",
    description: "Testing executed on automated compression rigs, standard impact testers, mechanical sieve shakers, and Los Angeles abrasion machines calibrated to national standards.",
    icon: Settings,
  },
  {
    title: "Documented SOPs",
    description: "Every test method references recognized published standard engineering procedures and specifications.",
    icon: FileSpreadsheet,
  },
  {
    title: "Verified Test Certificates",
    description: "Standard mechanical and physical test certificates issued promptly following laboratory evaluation.",
    icon: CheckCircle2,
  },
  {
    title: "Engineering Expertise",
    description: "Direct consultation with qualified civil materials engineers to interpret grading curves and mix design parameters.",
    icon: Users,
  },
];

const faqs = [
  {
    q: "Why is particle grading (sieve analysis) essential for concrete mix design?",
    a: "Sieve analysis determines the particle size distribution of sand and coarse aggregates. Well-graded aggregates pack closely together with minimal voids between particles, reducing the amount of cement paste required to coat them. Poorly graded or gap-graded aggregates require higher water and cement content, increasing shrinkage, bleeding, and cost while reducing compressive strength.",
  },
  {
    q: "What is the acceptable limit for Aggregate Crushing Value (ACV) and Impact Value (AIV)?",
    a: "Under standard technical specifications, for concrete wearing surfaces (such as highway pavements, bridge decks, and industrial floors subject to heavy traffic), the Aggregate Crushing Value (ACV) and Aggregate Impact Value (AIV) must not exceed 30%. For other structural concrete applications, the maximum permissible limit is 45%.",
  },
  {
    q: "How do flaky and elongated aggregates negatively affect concrete?",
    a: "Flaky and elongated stones have high surface-to-volume ratios and tend to orient themselves in horizontal planes during compaction. They break easily under load, entrap water and air pockets underneath their flat surfaces, increase the concrete's water demand, and reduce workability, resulting in honeycombed, weak concrete.",
  },
  {
    q: "How much aggregate sample is required for laboratory testing?",
    a: "For complete coarse aggregate testing (sieve analysis, crushing value, impact value, abrasion, flakiness, and specific gravity), we recommend submitting 30 kg to 50 kg of representative material. For fine aggregate (sand or M-sand), 15 kg to 20 kg is sufficient. Samples should be collected from multiple stockpile locations to ensure true representation.",
  },
  {
    q: "What is the difference between natural sand and Manufactured Sand (M-sand)?",
    a: "Natural river sand consists of weathered, naturally rounded quartz particles mined from riverbeds. M-sand is produced by crushing hard granite, basalt, or limestone rocks in specialized VSI (Vertical Shaft Impactor) crushers. M-sand has angular particles, zero organic silt, and consistent grading when properly washed, making it a sustainable and reliable alternative under standard engineering specifications.",
  },
  {
    q: "How are aggregate test certificates delivered to clients?",
    a: "Official test certificates featuring detailed sieve curves, mechanical crushing/impact values, and compliance status are delivered digitally via email and through verified hard copies upon request.",
  },
];

export default function AggregatesTestingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://mqtlab.com/testing/aggregates-testing#service",
        name: "Aggregates Testing Services in Noida",
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
        "@id": "https://mqtlab.com/testing/aggregates-testing#faq",
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
                  CIVIL &amp; GRANULAR MATERIAL TESTING
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-2.5 animate-fade-in-up animation-delay-100">
                Aggregates Testing Services &amp; Laboratory
              </h1>

              <p className="text-slate-300 text-xs sm:text-[14px] leading-relaxed mb-5 animate-fade-in-up animation-delay-200">
                Professional laboratory testing to evaluate coarse and fine concrete aggregates, river sand, M-sand,
                and road base gravel. Accurate testing for sieve analysis, crushing value (ACV), impact value (AIV),
                abrasion, flakiness, and water absorption.
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
          <div className="hidden lg:flex relative w-full aspect-[2.75/1] min-h-[420px] items-center text-white">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/testing/aggregate-testing-services.png"
                alt="Aggregates testing laboratory equipment and stone specimens"
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
                  CIVIL &amp; GRANULAR MATERIAL TESTING
                </p>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-white tracking-tight leading-[1.12] mb-3 drop-shadow-sm animate-fade-in-up animation-delay-100">
                  Aggregates Testing Services &amp; Laboratory
                </h1>

                <p className="text-slate-100 font-normal text-sm sm:text-base md:text-[16px] leading-relaxed mb-5 animate-fade-in-up animation-delay-200">
                  Professional laboratory testing to evaluate coarse and fine concrete aggregates, river sand, M-sand,
                  and road base gravel. Accurate testing for sieve analysis, crushing value (ACV), impact value (AIV),
                  abrasion, flakiness, and water absorption.
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
                  400 kN
                </span>
                <span className="block text-xs sm:text-[12.5px] font-medium text-gray-300 uppercase tracking-wider">
                  Crushing Rig
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
                  src="/testing/aggregate-testing.png"
                  alt="Coarse and fine aggregates undergoing physical laboratory evaluation"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                  Professional Aggregates Quality Evaluation Laboratory
                </h2>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-4">
                  Our laboratory provides reliable aggregates testing services to evaluate the physical,
                  mechanical, and geological characteristics of natural gravel, crushed stone, manufactured sand (M-sand),
                  and road base materials used across infrastructure and building projects.
                </p>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-8">
                  Aggregates make up over 70% of concrete volume, making their mechanical strength, gradation, and shape
                  critical to structural durability. We conduct standardized tests including sieve analysis, crushing value,
                  impact value, Los Angeles abrasion, flakiness index, and sulfate soundness as per published standard methods,
                  helping contractors and quarry operators verify compliance before batching.
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
                Our Comprehensive Aggregates Testing Services
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Standardized physical, mechanical, and grading evaluations performed under controlled laboratory conditions.
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
                  src="/Aggregates Testing.jpg"
                  alt="Aggregates application in concrete and highway road construction"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="md:col-span-7">
                <div className="border-l-4 border-red-500 pl-4 mb-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Aggregates Testing for Concrete, Highways &amp; Infrastructure
                  </h2>
                </div>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-7">
                  Our aggregate testing services support high-rise residential casting, expressway asphalt wearing courses,
                  ready-mix concrete batching plants, and precast manufacturing. Independent testing ensures that granular
                  materials possess proper gradation, impact toughness, and volume stability for long-lasting structural performance.
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
                Our Aggregates Testing Process
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
                Sample Submission Guidelines for Aggregates Testing
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-slate-300 text-sm max-w-xl mx-auto mt-2">
                Follow these technical guidelines when preparing and dispatching aggregate samples to our laboratory facility in Noida.
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
                Why Choose MQTL for Aggregates Testing?
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Accurate, standard-referenced physical and mechanical evaluations backed by experienced materials testing engineers.
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
                  Need Reliable Aggregates Quality Testing?
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Connect with our testing experts in Noida to schedule aggregate evaluation, request customized batch testing, or obtain verified laboratory test reports.
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
                Frequently Asked Questions About Aggregates Testing
              </h2>
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Technical guidance on crushing value limits, sieve analysis, flakiness indices, and sample handling.
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

