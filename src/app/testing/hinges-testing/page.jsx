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
  Wrench,
  Activity,
  DoorClosed,
  Armchair,
  Building2,
  PackageCheck,
  FileSpreadsheet,
  Boxes,
  Gauge,
  FileCheck,
} from "lucide-react";

export const metadata = {
  title: "Hinges & Hardware Testing Services & Laboratory | MQTL",
  description:
    "Professional hinges testing services by MQTL laboratory in Noida, Delhi NCR. Accurate testing for cyclic endurance, static proof load, play clearance, dimensions & salt spray corrosion.",
  keywords: [
    "Hinges Testing Services",
    "Hardware Testing Laboratory",
    "Hinges Testing Lab Noida",
    "Door Hinges Quality Testing Delhi NCR",
    "Hinges Cyclic Endurance Test",
    "Hinges Proof Load Test",
    "Salt Spray Corrosion Test for Hinges",
    "Steel Butt Hinges Testing",
    "Stainless Steel Hinges Testing",
    "Furniture Hinges Quality Test",
    "Minu Quality Testing Laboratories Private Limited",
    "MQTL Lab",
  ],
  alternates: {
    canonical: "https://mqtlab.com/testing/hinges-testing",
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
    title: "Hinges & Hardware Testing Services & Quality Lab - MQTL",
    description:
      "Professional hinges and architectural hardware testing laboratory providing cycle fatigue, load capacity, play tolerance, and corrosion testing in Delhi NCR.",
    url: "https://mqtlab.com/testing/hinges-testing",
    siteName: "MQTL - Minu Quality Testing Laboratories Private Limited",
    images: [
      {
        url: "/Hinges Testing.jpg",
        width: 1200,
        height: 630,
        alt: "MQTL Hinges Testing Laboratory Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hinges & Hardware Testing Services & Quality Lab - MQTL",
    description:
      "Professional hinges and architectural hardware testing laboratory providing comprehensive mechanical, physical, and durability testing.",
    images: ["/Hinges Testing.jpg"],
  },
};

const testServices = [
  {
    title: "Cyclic Endurance & Fatigue Test",
    description:
      "Simulates repetitive opening and closing cycles under full operational door load (up to 50,000 to 100,000 cycles) to evaluate knuckle wear, pin play, and fatigue resistance.",
    icon: RotateCcw,
  },
  {
    title: "Static & Proof Load Test",
    description:
      "Measures vertical and horizontal proof load resistance on calibrated test fixtures to evaluate deflection, yield strength, and permanent residual deformation after unloading.",
    icon: Scale,
  },
  {
    title: "Dimensional & Tolerance Inspection",
    description:
      "Precision metrological measurement of leaf length, width, thickness, knuckle alignment, hole pitch center distance, and countersink angle using digital verniers.",
    icon: Sliders,
  },
  {
    title: "Vertical & Lateral Play Measurement",
    description:
      "Measures axial and radial clearances between knuckles and hinge pins both before and after mechanical cycling to prevent door sagging and alignment loss over time.",
    icon: Activity,
  },
  {
    title: "Salt Spray Corrosion Resistance",
    description:
      "Accelerated neutral salt spray (NSS) chamber testing as per ASTM B117 / standard salt spray methods for 24 to 240+ hours to assess electroplating, passivation, and finish durability.",
    icon: FlaskConical,
  },
  {
    title: "Fastener Pull-Out & Torque Test",
    description:
      "Evaluates screw holding torque and axial pull-out resistance when mounted to wooden door frames, particle boards, or MDF substrates to prevent mounting failures.",
    icon: Wrench,
  },
  {
    title: "Concealed Cup Hinge Fatigue Test",
    description:
      "Specialized cycle and slam testing for furniture auto-close and soft-close concealed cup hinges (standard cycle endurance protocols / EN 15570) on modular kitchen and wardrobe doors.",
    icon: Boxes,
  },
  {
    title: "Hardness & Material Grade Analysis",
    description:
      "Verifies base metal alloy composition and surface hardness (Rockwell / Vickers) for mild steel, brass, and stainless steel (Grade 201, 304, 316) architectural hinges.",
    icon: Microscope,
  },
  {
    title: "Wear Resistance & Friction Test",
    description:
      "Measures friction torque, squeak propensity, and self-lubricating nylon/brass washer wear under continuous rotational pivot movements under load.",
    icon: Gauge,
  },
];

const applications = [
  {
    title: "Architectural Doors",
    subtitle: "Steel & Stainless Steel",
    icon: DoorClosed,
  },
  {
    title: "Modular Furniture",
    subtitle: "Concealed Box Hinges",
    icon: Armchair,
  },
  {
    title: "Fire Exit & Commercial",
    subtitle: "Heavy-Duty Proof Load",
    icon: Building2,
  },
  {
    title: "Window Casements",
    subtitle: "Friction & Pivot Hinges",
    icon: Layers,
  },
];

const processSteps = [
  {
    step: "1",
    title: "Sample Intake",
    description: "Registration, unique batch coding, and visual inspection of hinge specimens.",
    icon: PackageCheck,
    badgeColor: "bg-red-500",
  },
  {
    step: "2",
    title: "Dimensional Check",
    description: "High-precision measurement of leaf thickness, hole pitch, and knuckle alignment.",
    icon: Sliders,
    badgeColor: "bg-blue-600",
  },
  {
    step: "3",
    title: "Endurance & Load",
    description: "Automated cyclic opening/closing rigs and universal proof load testing.",
    icon: RotateCcw,
    badgeColor: "bg-emerald-600",
  },
  {
    step: "4",
    title: "Corrosion Chamber",
    description: "Accelerated neutral salt spray fog exposure to verify plating and finish life.",
    icon: FlaskConical,
    badgeColor: "bg-purple-600",
  },
  {
    step: "5",
    title: "Verified Report",
    description: "Detailed laboratory test report issued with standard reference thresholds.",
    icon: FileCheck,
    badgeColor: "bg-slate-800",
  },
];

const sampleGuidelines = [
  {
    title: "Specimen Quantity",
    description: "Submit a minimum of 3 to 5 matching pairs of complete, unaltered hinges per production batch. For 100,000+ cycle fatigue or extended salt spray, provide 6 to 8 pairs.",
  },
  {
    title: "Fasteners & Accessories",
    description: "Include standard manufacturer-recommended mounting screws or fixings to allow realistic fastener pull-out and torque tests on frame substrates.",
  },
  {
    title: "Packaging & Protection",
    description: "Wrap each hinge pair individually in protective bubble wrap to prevent surface scratching or transit abrasion that could affect corrosion evaluation.",
  },
  {
    title: "Intake & Traceability",
    description: "Deliver directly to our laboratory at Plot No. 79, Sector 155, Noida (201310), labeled with brand, grade, finish type, and test requirements.",
  },
];

const whyChooseFeatures = [
  {
    title: "Calibrated Equipment",
    description: "Testing executed on automated cyclic endurance rigs and universal testing machines calibrated with traceable standards.",
    icon: Settings,
  },
  {
    title: "Documented SOPs",
    description: "Every test method references recognized published hardware engineering and quality standards.",
    icon: FileSpreadsheet,
  },
  {
    title: "Verified Test Certificates",
    description: "Standard dimensional and static load test certificates issued with complete observed parameter traceability.",
    icon: CheckCircle2,
  },
  {
    title: "Technical Support",
    description: "Direct consultation with qualified hardware testing engineers to interpret failure modes and verify specifications.",
    icon: Users,
  },
];

const faqs = [
  {
    q: "What types of hinges can be tested at MQTL's laboratory?",
    a: "Our laboratory tests an extensive variety of architectural, industrial, and modular furniture hinges. This includes mild steel butt hinges, stainless steel architectural hinges, non-projecting and parliament hinges, continuous piano hinges, auto-closing concealed kitchen cabinet cup hinges, pivot hinges, and heavy-duty industrial gate hinges.",
  },
  {
    q: "How many sample pieces are required for comprehensive hinges testing?",
    a: "For standard dimensional inspection and mechanical load testing, we recommend submitting 3 to 5 matching pairs of complete, unaltered hinges. If accelerated salt spray corrosion testing or extended 100,000-cycle durability testing is required, an additional 2 to 3 intact specimens from the same production lot should be provided along with recommended mounting screws.",
  },
  {
    q: "What is cyclic endurance testing and why is it important for furniture and doors?",
    a: "Cyclic endurance testing mounts the hinge assembly onto an automated test rig that mechanically opens and closes the hinge through its designated angular range (typically 0° to 90° or 180°) under simulated door weight. Completing 25,000 to 100,000 cycles confirms that the hinge will not suffer knuckle shearing, pin deformation, or excessive vertical sag during years of real-world use.",
  },
  {
    q: "How is corrosion resistance evaluated on stainless steel and coated hinges?",
    a: "Corrosion resistance is evaluated inside an automated salt spray chamber operating under ASTM B117 or standard salt spray specifications. Specimens are continuously atomized with a 5% neutral sodium chloride (NaCl) solution at 35°C for durations ranging from 24 to 240+ hours depending on the specified coating grade, and inspected periodically for red rust or pitting.",
  },
  {
    q: "How are hinges test results certified and reported?",
    a: "Test results—including dimensional verification, operational knuckle play, cyclic durability observations, and corrosion resistance findings—are documented in official verified laboratory test certificates.",
  },
  {
    q: "Are MQTL test reports compliant with recognized hardware testing standards?",
    a: "Yes. Testing methodologies strictly reference applicable published national and international testing standards. Every verified laboratory test report clearly specifies the referenced testing method, observed measurements, and applicable standard benchmark limits.",
  },
];

export default function HingesTestingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://mqtlab.com/testing/hinges-testing#service",
        name: "Hinges & Hardware Testing Services in Noida",
        serviceType: "Hardware & Fittings Testing",
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
        "@id": "https://mqtlab.com/testing/hinges-testing#faq",
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
                  HARDWARE &amp; FITTINGS MATERIAL TESTING
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-2.5 animate-fade-in-up animation-delay-100">
                Hinges Testing Services &amp; Laboratory
              </h1>

              <p className="text-slate-300 text-xs sm:text-[14px] leading-relaxed mb-5 animate-fade-in-up animation-delay-200">
                Professional laboratory testing to evaluate cyclic endurance, static proof load capacity,
                knuckle play clearance, dimensional accuracy, and salt spray corrosion resistance of door, window,
                and furniture hinges.
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
                src="/testing/hinges-testing.png"
                alt="Hinges and hardware testing machinery"
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
                  HARDWARE &amp; FITTINGS TESTING
                </p>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-white tracking-tight leading-[1.12] mb-3 drop-shadow-sm animate-fade-in-up animation-delay-100">
                  Hinges Testing Services &amp; Laboratory
                </h1>

                <p className="text-slate-100 font-normal text-sm sm:text-base md:text-[16px] leading-relaxed mb-5 animate-fade-in-up animation-delay-200">
                  Professional laboratory testing to evaluate cyclic endurance, static proof load capacity,
                  knuckle play clearance, dimensional accuracy, and salt spray corrosion resistance of door, window,
                  and furniture hinges.
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
                  100k+
                </span>
                <span className="block text-xs sm:text-[12.5px] font-medium text-gray-300 uppercase tracking-wider">
                  Cycles Endurance
                </span>
              </div>

              <div className="py-6 sm:py-7 px-4 text-center">
                <span className="block text-2xl sm:text-3xl lg:text-[32px] font-bold text-red-500 mb-1 tracking-tight">
                  ±0.05 mm
                </span>
                <span className="block text-xs sm:text-[12.5px] font-medium text-gray-300 uppercase tracking-wider">
                  Metrology Precision
                </span>
              </div>

              <div className="py-6 sm:py-7 px-4 text-center">
                <span className="block text-2xl sm:text-3xl lg:text-[32px] font-bold text-red-500 mb-1 tracking-tight">
                  ASTM B117
                </span>
                <span className="block text-xs sm:text-[12.5px] font-medium text-gray-300 uppercase tracking-wider">
                  Salt Spray Fog
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
                  src="/testing/hinges-testing-banner.png"
                  alt="Hinges sample undergoing mechanical endurance testing"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                  Professional Hinges &amp; Hardware Testing Laboratory
                </h2>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-4">
                  Our laboratory provides reliable hinges testing services to evaluate the mechanical
                  strength, dimensional accuracy, fatigue durability, and corrosion resistance of hinges
                  used in residential doors, commercial building exits, and modular furniture.
                </p>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-8">
                  We conduct rigorous evaluations including cyclic endurance testing up to 100,000 operations,
                  proof load capacity, knuckle play clearance, and salt spray exposure. These tests help
                  manufacturers, builders, and hardware importers verify that hinges meet required standards,
                  preventing door sagging, binding, and premature mechanical failure.
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
                Our Comprehensive Hinges Testing Services
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Mechanical endurance, metrological inspection, and coating durability evaluations carried out under calibrated laboratory conditions.
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
                  src="/Hinges Testing.jpg"
                  alt="Architectural and furniture hardware fittings"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="md:col-span-7">
                <div className="border-l-4 border-red-500 pl-4 mb-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Hinges Testing for Architectural, Furniture &amp; Industrial Applications
                  </h2>
                </div>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-7">
                  Our hardware testing services support builders, manufacturers, and specifiers across
                  architectural door fittings, modular cabinetry, industrial equipment enclosures, and
                  commercial entry systems. Testing verifies that hinges sustain specified loads and provide
                  smooth, silent operation throughout their service lifespan.
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
                Our Hinges Testing Process
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
                Sample Submission Guidelines for Hinges Testing
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-slate-300 text-sm max-w-xl mx-auto mt-2">
                Follow these technical guidelines when preparing and dispatching hardware specimens to our laboratory facility in Noida.
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
                Why Choose MQTL for Hinges Testing?
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Accurate, standard-referenced evaluations backed by dedicated engineering support.
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
                  Need Reliable Hinges &amp; Hardware Testing?
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
                Frequently Asked Questions About Hinges Testing
              </h2>
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Technical guidance on cycle endurance, proof load, salt spray parameters, and sample handling.
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
