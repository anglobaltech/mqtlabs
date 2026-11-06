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
  title: "Concrete Paver Block Testing Services & Laboratory | MQTL",
  description:
    "Professional concrete paver block testing services by MQTL laboratory in Noida, Delhi NCR. Accurate testing for compressive strength, water absorption, abrasion resistance, tensile splitting, and dimensions as per standard engineering specifications.",
  keywords: [
    "Concrete Paver Block Testing Services",
    "Paver Block Testing Laboratory",
    "Paver Block Testing Lab Noida",
    "Compressive Strength Paver Blocks Delhi NCR",
    "Water Absorption Test Paver Blocks",
    "Abrasion Resistance Paver Block Test",
    "Tensile Splitting Strength Pavers",
    "Standard Paver Block Testing Specifications",
    "Interlocking Concrete Paver Testing",
    "Minu Quality Testing Laboratories Private Limited",
    "MQTL Lab",
  ],
  alternates: {
    canonical: "https://mqtlab.com/testing/concrete-paver-block-testing",
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
    title: "Concrete Paver Block Testing Services & Quality Lab - MQTL",
    description:
      "Professional precast concrete paver block testing laboratory providing compressive strength, water absorption, abrasion resistance, and dimension testing in Delhi NCR.",
    url: "https://mqtlab.com/testing/concrete-paver-block-testing",
    siteName: "MQTL - Minu Quality Testing Laboratories Private Limited",
    images: [
      {
        url: "/paverBlockTesting.jpg",
        width: 1200,
        height: 630,
        alt: "MQTL Concrete Paver Block Testing Laboratory Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Concrete Paver Block Testing Services & Quality Lab - MQTL",
    description:
      "Professional concrete paver block testing laboratory providing comprehensive physical, mechanical, and durability testing.",
    images: ["/paverBlockTesting.jpg"],
  },
};

const testServices = [
  {
    title: "Compressive Strength (Corrected)",
    description:
      "Determines failure crushing load on calibrated compression testing machines with thickness correction factors applied to verify design strength grades (M-30 to M-55) under standard mechanical testing protocols.",
    icon: Scale,
  },
  {
    title: "Water Absorption Test",
    description:
      "Measures 24-hour immersion water intake to assess porosity and durability under wet weather (limit ≤ 6.0% average mass gain; ≤ 7.0% individual) under standard laboratory methods.",
    icon: FlaskConical,
  },
  {
    title: "Abrasion Resistance Test",
    description:
      "Evaluates surface loss under abrasive friction on rotating disk test apparatus to guarantee long service life on high-traffic roads, terminals, and footpaths under standard abrasion procedures.",
    icon: RotateCcw,
  },
  {
    title: "Tensile Splitting Strength",
    description:
      "Measures indirect tensile strength along specimen contact lines to prevent brittle block cracking under heavy rolling truck axle loads under standard tensile splitting methods.",
    icon: Activity,
  },
  {
    title: "Flexural Strength & Breaking Load",
    description:
      "Evaluates bending strength and total transverse breaking load across supporting roller spans to verify load distribution on granular bedding layers under standard transverse flexural protocols.",
    icon: Gauge,
  },
  {
    title: "Dimension & Plan Aspect Ratio",
    description:
      "Verifies length, width, thickness (60 mm, 80 mm, 100 mm, 120 mm), and aspect ratio tolerances (± 2 to 3 mm) using precision digital calipers under standard dimensional tolerance guidelines.",
    icon: Sliders,
  },
  {
    title: "Thickness of Wearing Layer",
    description:
      "Measures face-mix layer thickness on two-layer paver specimens to confirm compliance with minimum 6.0 mm wear thickness requirements across cross-sections under standard quality guidelines.",
    icon: Layers,
  },
  {
    title: "Visual Appearance & Edge Arrises",
    description:
      "Inspects surface texture uniformity, color pigment stability, edge arrises, chamfer geometry, and freedom from honeycombing, spalling, or micro-cracks under standard visual inspection methods.",
    icon: ShieldCheck,
  },
  {
    title: "Freeze-Thaw & Weathering Durability",
    description:
      "Evaluates resistance to cyclic thermal shocks and moisture deterioration to prevent surface scaling and aggregate pop-outs in demanding outdoor environments under standard durability procedures.",
    icon: Shield,
  },
];

const applications = [
  {
    title: "Pedestrian Walkways",
    subtitle: "M-30 / M-35 Grades",
    icon: Building2,
  },
  {
    title: "City Roads & Streets",
    subtitle: "M-40 Medium Traffic",
    icon: HardHat,
  },
  {
    title: "Industrial & Ports",
    subtitle: "M-50 / M-55 Heavy Duty",
    icon: Boxes,
  },
  {
    title: "Commercial Parking",
    subtitle: "Interlocking Pavers",
    icon: Layers,
  },
];

const processSteps = [
  {
    step: "1",
    title: "Intake & Visual Inspection",
    description: "Inspection of received paver blocks, batch logging, and verification of surface arrises.",
    icon: PackageCheck,
    badgeColor: "bg-red-500",
  },
  {
    step: "2",
    title: "Dimensions & Tolerances",
    description: "Precision caliper measurements of length, width, thickness, and wearing layer depth.",
    icon: Sliders,
    badgeColor: "bg-blue-600",
  },
  {
    step: "3",
    title: "Water Conditioning",
    description: "24-hour water immersion at controlled room temperature to determine water absorption %.",
    icon: FlaskConical,
    badgeColor: "bg-emerald-600",
  },
  {
    step: "4",
    title: "Compressive & Splitting",
    description: "Controlled loading on calibrated UTM with aspect ratio correction factors applied.",
    icon: Scale,
    badgeColor: "bg-purple-600",
  },
  {
    step: "5",
    title: "Report Issuance",
    description: "Verification of parameters against standard quality limits and verified laboratory reports issued.",
    icon: FileText,
    badgeColor: "bg-slate-800",
  },
];

const sampleGuidelines = [
  {
    title: "Sample Quantity",
    description: "Submit a minimum of 8 to 16 full, undamaged paver blocks per production lot as per standard sampling guidelines to cover compressive strength, absorption, and abrasion tests.",
  },
  {
    title: "Curing Milestone",
    description: "Ensure paver blocks have attained at least 28 days of standard curing (or verified steam-cured equivalent) prior to final mechanical strength evaluation.",
  },
  {
    title: "Edge & Surface Protection",
    description: "Pack specimens with corrugated separators in heavy-duty cardboard cartons or strapped bundles to prevent edge chipping and arris damage during transit.",
  },
  {
    title: "Intake & Delivery",
    description: "Deliver directly to our laboratory facility at Plot No. 79, Sector 155, Noida (201310), accompanied by a test requisition form indicating paver thickness and design grade.",
  },
];

const whyChooseFeatures = [
  {
    title: "Calibrated Equipment",
    description: "Testing executed on automated compression rigs with digital pace rate controllers, abrasion disks, and precision calipers calibrated to national standards.",
    icon: Settings,
  },
  {
    title: "Documented SOPs",
    description: "Every test method references recognized published standard engineering procedures for precast concrete paving blocks.",
    icon: FileSpreadsheet,
  },
  {
    title: "Verified Test Certificates",
    description: "Standard dimensional, absorption, and compressive strength certificates issued upon test completion.",
    icon: CheckCircle2,
  },
  {
    title: "Engineering Expertise",
    description: "Direct consultation with qualified civil materials engineers to interpret aspect ratio correction factors and traffic suitability.",
    icon: Users,
  },
];

const faqs = [
  {
    q: "What are the standard compressive strength grades for concrete paver blocks?",
    a: "Under standard engineering specifications, precast concrete paver blocks are classified into strength grades including M-30 (pedestrian footpaths and garden walkways), M-35 (residential driveways and light vehicle parking), M-40 (city streets and medium-traffic commercial plazas), and M-50 / M-55 (bus terminals, industrial yards, ports, and heavy container depots).",
  },
  {
    q: "Why is an aspect ratio correction factor applied to paver compressive strength?",
    a: "Paver blocks have low thickness-to-width ratios compared to standard test cubes, which causes significant platen restraint during compression testing. Standard testing procedures specify correction multiplying factors based on the block's thickness (e.g., 50 mm, 60 mm, 80 mm, 100 mm, 120 mm) to convert raw test crushing values into standardized equivalent compressive strength.",
  },
  {
    q: "What is the acceptable limit for water absorption in concrete paver blocks?",
    a: "Under standard precast testing specifications, the average water absorption of paver blocks after 24 hours of total immersion in water must not exceed 6.0% by mass, and no individual specimen should exceed 7.0%. Low water absorption prevents moisture ingress, freeze-thaw degradation, and aggregate spalling.",
  },
  {
    q: "What is the minimum thickness required for the wearing layer of paver blocks?",
    a: "For two-layer (two-stage cast) paver blocks featuring a decorative or colored top surface, standard guidelines mandate a minimum wearing layer thickness of 6.0 mm. This layer must be dense, homogenous, and mechanically bonded to the base concrete matrix to prevent delamination under traffic shear forces.",
  },
  {
    q: "How many paver block samples are needed for complete laboratory testing?",
    a: "We recommend submitting a minimum of 8 to 16 matching paver blocks from the same production lot. This provides adequate specimens for compressive strength testing (8 specimens), water absorption testing (3 specimens), abrasion resistance (3 specimens), and dimensional tolerance verification.",
  },
  {
    q: "How are paver block test results reported to clients?",
    a: "Test results—including dimensional verification, water absorption percentage, and equivalent compressive strength values—are documented in official verified laboratory test certificates.",
  },
];

export default function ConcretePaverBlockTestingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://mqtlab.com/testing/concrete-paver-block-testing#service",
        name: "Concrete Paver Block Testing Services in Noida",
        serviceType: "Precast Concrete Testing",
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
        "@id": "https://mqtlab.com/testing/concrete-paver-block-testing#faq",
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
                  PRECAST CONCRETE &amp; PAVING MATERIAL TESTING
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-2.5 animate-fade-in-up animation-delay-100">
                Concrete Paver Block Testing Services &amp; Laboratory
              </h1>

              <p className="text-slate-300 text-xs sm:text-[14px] leading-relaxed mb-5 animate-fade-in-up animation-delay-200">
                Professional laboratory testing to evaluate compressive strength, water absorption,
                abrasion resistance, tensile splitting, dimensions, and wearing layer thickness for precast
                interlocking paver blocks.
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
                src="/testing/concrete-block-testing-services.png"
                alt="Concrete paver block testing laboratory equipment and paving stones"
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
                  PRECAST CONCRETE &amp; PAVING MATERIAL TESTING
                </p>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-white tracking-tight leading-[1.12] mb-3 drop-shadow-sm animate-fade-in-up animation-delay-100">
                  Concrete Paver Block Testing Services &amp; Laboratory
                </h1>

                <p className="text-slate-100 font-normal text-sm sm:text-base md:text-[16px] leading-relaxed mb-5 animate-fade-in-up animation-delay-200">
                  Professional laboratory testing to evaluate compressive strength, water absorption,
                  abrasion resistance, tensile splitting, dimensions, and wearing layer thickness for precast
                  interlocking paver blocks.
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
                  M-30 to M-55
                </span>
                <span className="block text-xs sm:text-[12.5px] font-medium text-gray-300 uppercase tracking-wider">
                  Design Grades
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
                  src="/testing/concrete-testing-services.png"
                  alt="Concrete paver block undergoing mechanical compressive strength testing"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                  Professional Paver Block Quality Evaluation Laboratory
                </h2>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-4">
                  Our laboratory provides reliable testing services for precast concrete interlocking
                  paver blocks used across pedestrian footpaths, city thoroughfares, petrol pump forecourts,
                  and heavy-duty container freight stations.
                </p>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-8">
                  Paver performance depends on high density, low water absorption, and superior abrasion resistance.
                  We perform standardized tests including corrected compressive strength, 24-hour water absorption,
                  abrasion loss, tensile splitting strength, and dimensional tolerances as per published standard
                  methods, verifying durability before site installation.
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
                Our Comprehensive Paver Block Testing Services
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Standardized physical, mechanical, and dimensional evaluations performed under controlled laboratory conditions.
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
                  src="/paverBlockTesting.jpg"
                  alt="Interlocking concrete paver blocks application in commercial and municipal paving"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="md:col-span-7">
                <div className="border-l-4 border-red-500 pl-4 mb-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Paver Block Testing for Urban, Commercial &amp; Industrial Pavements
                  </h2>
                </div>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-7">
                  Our testing services support municipal urban beautification projects, industrial logistics parks,
                  commercial retail plazas, and fuel station driveways. Independent testing verifies that each batch
                  possesses proper compressive capacity, arris integrity, and abrasion life for lasting pavement performance.
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
                Our Paver Block Testing Process
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
                Sample Submission Guidelines for Paver Block Testing
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-slate-300 text-sm max-w-xl mx-auto mt-2">
                Follow these technical guidelines when preparing and dispatching paver block samples to our laboratory facility in Noida.
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
                Why Choose MQTL for Paver Block Testing?
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
                  Need Reliable Paver Block Quality Testing?
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Connect with our testing experts in Noida to schedule specimen evaluation, request customized batch testing, or obtain verified laboratory test reports.
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
                Frequently Asked Questions About Paver Block Testing
              </h2>
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Technical guidance on compressive strength grades, water absorption limits, aspect ratio correction, and sample handling.
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
