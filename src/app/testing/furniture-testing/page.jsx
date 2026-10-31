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
  ArrowDownToLine,
  TrendingUp,
  Building2,
  Armchair,
  Box,
  Flame,
  FileCheck,
  RotateCcw,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Furniture Testing Services & Quality Evaluation Laboratory | MQTL",
  description:
    "Professional furniture testing laboratory in Noida, Delhi NCR. Quality-controlled testing for static load, stability, cyclic durability, impact, surface finish, joint strength, and safety compliance.",
  keywords: [
    "Furniture Testing Services",
    "Furniture Testing Laboratory",
    "Furniture Load Test",
    "Furniture Durability Testing",
    "Office Chair Testing Lab Noida",
    "Furniture Stability Test",
    "Table Load Bearing Test",
    "Storage Cabinet Cycle Test",
    "Wooden Furniture Testing Delhi NCR",
    "Modular Furniture Quality Testing",
    "Minu Quality Testing Laboratories Private Limited",
    "MQTL Lab",
  ],
  alternates: {
    canonical: "https://mqtlab.com/testing/furniture-testing",
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
    title: "Furniture Testing Services & Quality Evaluation Laboratory - MQTL",
    description:
      "Professional furniture testing laboratory providing load capacity, durability, stability, and safety testing for residential and commercial furniture.",
    url: "https://mqtlab.com/testing/furniture-testing",
    siteName: "MQTL - Minu Quality Testing Laboratories Private Limited",
    images: [
      {
        url: "/testing/furniture-testing.jpg",
        width: 1200,
        height: 630,
        alt: "MQTL Furniture Testing Laboratory Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Furniture Testing Services & Quality Evaluation Laboratory - MQTL",
    description:
      "Professional furniture testing laboratory offering mechanical load, stability, cyclic fatigue, and durability testing.",
    images: ["/testing/furniture-testing.jpg"],
  },
};

const testServices = [
  {
    title: "Static Load & Weight Capacity",
    description:
      "Evaluates maximum load-bearing resistance on chair seats, tabletops, bed frames, and sofa bases under sustained downward forces without permanent deformation.",
    icon: ArrowDownToLine,
  },
  {
    title: "Stability & Anti-Tipping Testing",
    description:
      "Determines resistance to front, rear, and lateral overturning under vertical and horizontal eccentric loading for high chairs, office chairs, and tall cabinets.",
    icon: Scale,
  },
  {
    title: "Cyclic Durability & Fatigue Test",
    description:
      "Pneumatically simulates years of daily repetitive usage on seating tilt mechanisms, backrests, armrests, and recliners across 50,000 to 100,000 mechanical cycles.",
    icon: RotateCcw,
  },
  {
    title: "Impact & Drop Resistance Testing",
    description:
      "Evaluates structural integrity under sudden impact shocks, including free-fall bag drops on seating pans and corner impact shocks on table edges.",
    icon: TrendingUp,
  },
  {
    title: "Surface Finish & Scratch Durability",
    description:
      "Analyzes coating adhesion, scratch resistance, abrasion, dry heat, and chemical resistance against liquids (tea, coffee, alcohol, cleaning agents).",
    icon: Sparkles,
  },
  {
    title: "Joint Strength & Fastener Retention",
    description:
      "Quantifies tensile pull-out, dowel shear, and mortise-and-tenon joint strength under directional forces to prevent structural detachment.",
    icon: ShieldCheck,
  },
  {
    title: "Drawer Runner & Cabinet Performance",
    description:
      "Validates drawer slide extension cycles, soft-close dampers, door hinge fatigue, shelf deflection, and slam open/shut resistance under full payload.",
    icon: Box,
  },
  {
    title: "Ergonomic & Dimensional Verification",
    description:
      "Measures critical physical dimensions, seating heights, backrest angles, lumbar curvature, and clearance tolerances against human ergonomic standards.",
    icon: Armchair,
  },
  {
    title: "Flammability & Fire Retardancy",
    description:
      "Evaluates smoldering cigarette and open-flame ignition resistance of foam cushions, fabric upholstery, leatherette, and composite filling materials.",
    icon: Flame,
  },
];

const applications = [
  {
    title: "Commercial & Office",
    subtitle: "Ergonomic Chairs & Workstations",
    icon: Building2,
  },
  {
    title: "Hospitality & Hotels",
    subtitle: "Dining, Banquets & Heavy-Use Beds",
    icon: Armchair,
  },
  {
    title: "Educational & Schools",
    subtitle: "Classroom Desks & Library Storage",
    icon: Layers,
  },
  {
    title: "Residential & Modular",
    subtitle: "Wardrobes, TV Units & Sofas",
    icon: Box,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Sample Acclimatization",
    description:
      "Conditioning furniture specimens in controlled laboratory humidity (65% RH) and temperature (27°C) for stable baseline testing.",
    badgeColor: "bg-red-600",
    icon: Clock,
  },
  {
    step: "02",
    title: "Rig Fixturing & Mounting",
    description:
      "Anchoring furniture securely onto servo-pneumatic multi-axis test beds with calibrated electronic load cells and displacement gauges.",
    badgeColor: "bg-sky-600",
    icon: Settings,
  },
  {
    step: "03",
    title: "Static & Cyclic Load Application",
    description:
      "Applying calibrated mechanical loads and thousands of automated pneumatic cycles to simulate heavy everyday human usage.",
    badgeColor: "bg-blue-600",
    icon: RotateCcw,
  },
  {
    step: "04",
    title: "Deflection & Joint Inspection",
    description:
      "Detailed post-test optical examination measuring permanent residual deflection, joint loosening, screw pull-out, or material fractures.",
    badgeColor: "bg-emerald-600",
    icon: Microscope,
  },
  {
    step: "05",
    title: "Laboratory Report Delivery",
    description:
      "Releasing QR-verified laboratory test reports with exact mechanical values, failure limits, and pass/fail compliance ratings.",
    badgeColor: "bg-amber-600",
    icon: FileCheck,
  },
];

const furnitureCategories = [
  {
    category: "Seating Products",
    description:
      "Evaluated for static seat load, cyclic backrest durability, armrest vertical fatigue, and caster swivel endurance.",
    items: [
      "Office Task & Executive Chairs",
      "Dining & Cafe Chairs",
      "Lounge Sofas & Recliners",
      "Auditorium & Public Seating",
      "Bar Stools & High Seating",
    ],
  },
  {
    category: "Tables & Desks",
    description:
      "Tested for vertical static load, horizontal sway stability, drop impact resistance, and surface stain durability.",
    items: [
      "Office Workstations & Desks",
      "Conference & Meeting Tables",
      "Dining Tables & Coffee Tables",
      "Height-Adjustable Standing Desks",
      "School Classroom Benches",
    ],
  },
  {
    category: "Storage & Cabinetry",
    description:
      "Assessed for shelf load deflection, drawer runner cycle life, anti-tipping interlocks, and door hinge endurance.",
    items: [
      "Modular Wardrobes & Closets",
      "Steel & Wooden Filing Cabinets",
      "Bookshelves & Display Racks",
      "Kitchen Overhead Storage Units",
      "Drawer Pedestals & Credenzas",
    ],
  },
];

const mechanicalBenchmarks = [
  {
    testType: "Seating Static Proof Load",
    appliedForce: "1,600 N – 2,000 N",
    testCycles: "10 applications (10s hold)",
    passCriteria: "Zero structural fracture, joint failure, or loss of serviceability",
  },
  {
    testType: "Backrest Cyclic Durability",
    appliedForce: "300 N – 450 N",
    testCycles: "100,000 continuous cycles",
    passCriteria: "No loosening of reclining mechanism, structural cracking, or spring failure",
  },
  {
    testType: "Table Top Deflection Under Load",
    appliedForce: "1,000 N – 1,500 N distributed",
    testCycles: "7 days continuous hold",
    passCriteria: "Deflection shall not exceed 1/200th of unsupported span distance",
  },
  {
    testType: "Drawer Slide Cyclic Endurance",
    appliedForce: "Full rated payload (20–45 kg)",
    testCycles: "50,000 extension cycles",
    passCriteria: "Smooth slide motion without ball-bearing displacement or drawer drop",
  },
  {
    testType: "Forward & Rear Stability",
    appliedForce: "20 N – 25 N overturning force",
    testCycles: "Front, rear & corner tilt",
    passCriteria: "Unit must remain self-standing without tipping over under specified load",
  },
  {
    testType: "Surface Scratch & Coating Resistance",
    appliedForce: "1 N – 5 N tungsten stylus",
    testCycles: "Standard scratch traverse",
    passCriteria: "No penetration of protective lacquer, veneer delamination, or bare wood exposure",
  },
];

const industriesServed = [
  {
    title: "Furniture Manufacturers",
    description:
      "Prototype validation and quality batch verification for domestic distribution and overseas exports.",
    icon: Building2,
  },
  {
    title: "Commercial Architects & Designers",
    description:
      "Specification compliance testing for corporate campus fit-outs, luxury hotels, and high-footfall venues.",
    icon: Armchair,
  },
  {
    title: "Institutional Buyers & PSUs",
    description:
      "Tender compliance evaluation for educational institutes, hospitals, defence campuses, and public libraries.",
    icon: Layers,
  },
  {
    title: "Retail & E-commerce Brands",
    description:
      "Transit packaging durability and consumer safety assurance to minimize returns and damage claims.",
    icon: Box,
  },
];

const faqs = [
  {
    q: "Why is professional furniture testing important for manufacturers?",
    a: "Furniture testing verifies that products can withstand real-world human loads, accidental drops, and prolonged cyclic usage without catastrophic structural failure. Laboratory test reports safeguard manufacturers against liability claims, reduce warranty return rates, and are mandatory for institutional, corporate, and government tender procurements.",
  },
  {
    q: "What is the difference between static load testing and cyclic durability testing?",
    a: "Static load testing applies a heavy, single downward or lateral proof load (e.g., 1,600N–2,000N) for a short duration to verify the ultimate strength of seats, table surfaces, or shelves. Cyclic durability testing repeatedly applies moderate working forces over 50,000 to 100,000 automated cycles to evaluate long-term mechanical wear, joint fatigue, spring relaxation, and screw loosening over years of simulated daily use.",
  },
  {
    q: "What types of furniture products can be tested at MQTL laboratory?",
    a: "Our laboratory tests an extensive variety of furniture including office task chairs, executive recliners, modular workstations, meeting tables, residential sofas, dining sets, educational school benches, modular wardrobes, storage credenzas, kitchen cabinetry, and metal bunk beds.",
  },
  {
    q: "How does the furniture stability and tipping test work?",
    a: "Stability testing evaluates a furniture unit's resistance to tipping over when an occupant sits on the edge or leans over, or when multiple drawers are pulled open simultaneously. Calibrated vertical and horizontal weights are applied to critical edge coordinates to ensure the unit does not tip or topple under standardized test conditions.",
  },
  {
    q: "What is the typical turnaround time for furniture testing reports?",
    a: "Standard mechanical testing is completed in our laboratory within scheduled operational timelines. Once tests are concluded, laboratory test reports complete with high-resolution test photos, measured deflection values, and QR codes for online verification are promptly delivered.",
  },
  {
    q: "Do you test surface finishes and coatings on wooden and metal furniture?",
    a: "Yes. We conduct comprehensive surface finish evaluations including scratch resistance (tungsten stylus), cross-hatch coating adhesion, abrasion resistance, and chemical stain resistance against liquids such as coffee, tea, alcohol, vinegar, and household detergents.",
  },
];

export default function FurnitureTestingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://mqtlab.com/#organization",
        name: "Minu Quality Testing Laboratories Private Limited (MQTL)",
        url: "https://mqtlab.com",
        logo: "https://mqtlab.com/logo.png",
        image: "https://mqtlab.com/testing/furniture-testing.jpg",
        telephone: "+91-9971234474",
        email: "info@mqtlab.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Site IV Industrial Area",
          addressLocality: "Greater Noida",
          addressRegion: "Uttar Pradesh",
          postalCode: "201310",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 28.4744,
          longitude: 77.4977,
        },
        areaServed: [
          { "@type": "City", name: "Noida" },
          { "@type": "City", name: "Greater Noida" },
          { "@type": "City", name: "Delhi NCR" },
          { "@type": "Country", name: "India" },
        ],
        description:
          "Professional furniture testing laboratory providing load capacity, durability, stability, and safety testing for residential and commercial furniture.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://mqtlab.com/testing/furniture-testing#breadcrumb",
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
            name: "Furniture Testing",
            item: "https://mqtlab.com/testing/furniture-testing",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://mqtlab.com/testing/furniture-testing#faq",
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
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-sky-600 to-[#05526e]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-200/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

            <div className="relative z-10 max-w-xl mx-auto sm:max-w-none">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-slate-200/90 shadow-2xs mb-3 animate-fade-in-up">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                <span className="text-red-700 font-bold tracking-wider text-[11px] uppercase">
                  FURNITURE &amp; ERGONOMIC TESTING
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-2.5 animate-fade-in-up animation-delay-100">
                Furniture Testing Services &amp; Quality Evaluation Laboratory
              </h1>

              <p className="text-slate-600 text-xs sm:text-[14px] leading-relaxed mb-5 animate-fade-in-up animation-delay-200">
                Comprehensive laboratory testing to evaluate static load capacity, cyclic durability,
                stability, impact resistance, joint strength, and safety compliance for residential,
                commercial, and institutional furniture.
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
                  href="/testing"
                  className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-300/90 font-semibold text-sm px-6 py-3.5 rounded-xl flex items-center justify-center shadow-2xs transition-all"
                >
                  Our Services
                </Link>
              </div>

              <div className="bg-white/90 backdrop-blur-xs rounded-xl p-3 sm:p-4 border border-slate-200/90 shadow-2xs animate-fade-in-up animation-delay-400">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                      <Shield className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-bold text-slate-800">
                      Reliable Methods
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                      <Settings className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-bold text-slate-800">
                      Modern Test Rigs
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-bold text-slate-800">
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
                src="/testing/furniture-testing-services.png"
                alt="Furniture testing laboratory machinery and mechanical load testing"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#051628]/95 via-[#051628]/85 via-35% to-transparent to-55% pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-8 lg:py-10 w-full">
              <div className="max-w-xl lg:max-w-[530px]">
                <p className="text-sky-400 font-bold tracking-widest text-xs sm:text-[13px] md:text-sm uppercase mb-2.5 animate-fade-in-up">
                  FURNITURE &amp; ERGONOMIC TESTING
                </p>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-white tracking-tight leading-[1.12] mb-3 drop-shadow-sm animate-fade-in-up animation-delay-100">
                  Furniture Testing Services &amp; Quality Evaluation Laboratory
                </h1>

                <p className="text-slate-100 font-normal text-sm sm:text-base md:text-[16px] leading-relaxed mb-5 animate-fade-in-up animation-delay-200">
                  Professional laboratory testing to evaluate static load capacity, cyclic durability,
                  stability, impact resistance, joint strength, and safety compliance for residential,
                  commercial, and institutional furniture.
                </p>

                <div className="flex flex-wrap items-center gap-3.5 mb-6 animate-fade-in-up animation-delay-300">
                  <Link
                    href="/contact-us"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-[15px] px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
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
                      Modern Test Rigs
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
        <section className="bg-[#081e35] border-y border-white/10 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="py-7 sm:py-8 px-4 text-center">
                <span className="block text-3xl sm:text-4xl lg:text-[40px] font-black text-red-500 mb-1.5 tracking-tight">
                  15+
                </span>
                <span className="block text-xs sm:text-[13px] font-bold text-gray-200 uppercase tracking-wider">
                  Testing Parameters
                </span>
              </div>
              <div className="py-7 sm:py-8 px-4 text-center">
                <span className="block text-3xl sm:text-4xl lg:text-[40px] font-black text-red-500 mb-1.5 tracking-tight">
                  500+
                </span>
                <span className="block text-xs sm:text-[13px] font-bold text-gray-200 uppercase tracking-wider">
                  Furniture Audits
                </span>
              </div>
              <div className="py-7 sm:py-8 px-4 text-center">
                <span className="block text-3xl sm:text-4xl lg:text-[40px] font-black text-red-500 mb-1.5 tracking-tight">
                  99%
                </span>
                <span className="block text-xs sm:text-[13px] font-bold text-gray-200 uppercase tracking-wider">
                  Accurate Reports
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

        {/* Laboratory Overview */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="relative h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-md border border-gray-100 group">
                <Image
                  src="/testing/furniture-testing-about-banner.png"
                  alt="Furniture specimen undergoing mechanical load and stability testing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                  Professional Furniture Mechanical &amp; Durability Testing Laboratory
                </h2>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-4">
                  Our laboratory provides comprehensive furniture testing services to evaluate
                  the structural integrity, load-bearing capacity, fatigue durability, and ergonomic safety
                  of commercial, residential, and institutional furniture.
                </p>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-8">
                  Using calibrated multi-axis pneumatic test rigs, impact pendulums, and automated
                  displacement sensors, we perform static load testing, cyclic durability analysis,
                  surface scratch checks, drawer cycle endurance, and stability assessments.
                  These tests ensure furniture products meet strict commercial procurement benchmarks,
                  prevent structural failures, and safeguard end-user safety.
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
                        Pneumatic Rigs
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
        <section className="py-16 sm:py-20 bg-[#f0f5fa] border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Our Comprehensive Furniture Testing Services
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Comprehensive mechanical, durability, and safety evaluations conducted on calibrated multi-axis test frames.
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
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="relative h-[300px] sm:h-[270px] md:col-span-5 rounded-2xl overflow-hidden shadow-md border border-gray-100 group">
                <Image
                  src="/testing/furniture-testing.jpg"
                  alt="Modular and commercial furniture applications testing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="md:col-span-7">
                <div className="border-l-4 border-red-500 pl-4 mb-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Furniture Testing for Commercial, Residential &amp; Institutional Projects
                  </h2>
                </div>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-7">
                  Our furniture testing services support manufacturers, interior contractors, corporate
                  purchasers, and educational institutions. From high-cyclic office task chairs to heavy
                  banquet tables and high-capacity storage cabinets, testing ensures all units withstand
                  daily wear and meet safety and performance specifications.
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
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#f8fafc] to-[#edf4f9] border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Our Furniture Testing Workflow
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                A systematic, calibrated methodology ensuring repeatable and tamper-proof test data.
              </p>
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

        {/* Categories Evaluated */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Furniture Categories &amp; Assemblies Evaluated
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Comprehensive testing across residential, commercial, and institutional furniture classifications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {furnitureCategories.map((group, idx) => (
                <div
                  key={idx}
                  className="card-interactive group bg-[#f8fafc] rounded-xl border border-gray-200/80 p-6 shadow-xs hover:shadow-md hover:bg-white hover:border-sky-300 transition-all duration-300 cursor-default"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#05526e]/10 flex items-center justify-center text-[#05526e] group-hover:bg-red-600 group-hover:text-white group-hover:scale-110 mb-4 transition-all duration-300">
                    <Armchair className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-red-600 transition-colors">
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

        {/* Benchmarks Table */}
        <section className="py-14 sm:py-20 bg-[#f8fafc] border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Key Mechanical Testing Benchmarks &amp; Load Criteria
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-2xl mx-auto mt-2">
                Standard mechanical test thresholds and failure criteria applied during laboratory performance audits.
              </p>
            </div>

            <div className="overflow-x-auto bg-white rounded-2xl shadow-xs border border-gray-200/80">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#05526e] text-white font-bold text-[13px]">
                    <th className="py-4 px-4 sm:px-6">Test Parameter</th>
                    <th className="py-4 px-4 sm:px-6">Applied Force / Load</th>
                    <th className="py-4 px-4 sm:px-6">Cycle / Duration</th>
                    <th className="py-4 px-4 sm:px-6">Performance &amp; Safety Criteria</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {mechanicalBenchmarks.map((row, idx) => (
                    <tr key={idx} className="hover:bg-sky-50/40 transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900">
                        {row.testType}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-red-600 whitespace-nowrap">
                        {row.appliedForce}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-700 whitespace-nowrap">
                        {row.testCycles}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-gray-500 leading-relaxed">
                        {row.passCriteria}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why Choose MQTL */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-[#06182b] via-[#09223e] to-[#0d2d50] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-red-400 bg-red-500/15 border border-red-500/30 px-3.5 py-1 rounded-full">
                Laboratory Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-3">
                Why Industry Leaders Choose MQTL
              </h2>
              <p className="text-sm text-slate-300 max-w-2xl mx-auto mt-2">
                Backed by precision pneumatic actuators, experienced structural engineers, and stringent quality protocols.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-interactive group p-6 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-red-500/50 transition-all duration-300 backdrop-blur-xs cursor-default">
                <Microscope className="w-8 h-8 text-red-400 group-hover:scale-110 mb-3 transition-transform duration-300" />
                <h3 className="font-bold text-white text-sm mb-1.5 group-hover:text-red-400 transition-colors">
                  Multi-Axis Test Frames
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Advanced servo-pneumatic actuators capable of applying combined vertical, lateral, and cyclic loads with digital displacement recording.
                </p>
              </div>

              <div className="card-interactive group p-6 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-sky-400/50 transition-all duration-300 backdrop-blur-xs cursor-default">
                <FileCheck className="w-8 h-8 text-sky-400 group-hover:scale-110 mb-3 transition-transform duration-300" />
                <h3 className="font-bold text-white text-sm mb-1.5 group-hover:text-sky-300 transition-colors">
                  QR-Verified Digital Reports
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Tamper-proof test certificates with unique QR codes for instant online verification by institutional auditors and clients.
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
                  Architect &amp; Buyer Trusted
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Test reports widely accepted across corporate office procurements, hotel chains, government tenders, and export compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-16 sm:py-20 bg-[#f8fafc] border-b border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Industries We Partner With
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Delivering verified test certificates to leading manufacturers, interior contractors, and institutional buyers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {industriesServed.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="card-interactive group bg-white rounded-xl border border-gray-200/80 hover:border-sky-300 p-5 shadow-xs transition-all duration-300 cursor-default"
                  >
                    <Icon className="w-7 h-7 text-[#05526e] group-hover:text-red-600 group-hover:scale-110 mb-3 transition-all duration-300" />
                    <h3 className="font-bold text-slate-900 text-sm mb-1.5 group-hover:text-red-600 transition-colors">
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
        <section className="relative overflow-hidden bg-gradient-to-r from-[#07192d] via-[#092544] to-[#0d345e] py-14 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                  Need Reliable Furniture Testing Services?
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Submit your furniture specimens to our testing laboratory in Greater Noida for verified mechanical load, cyclic durability, and quality laboratory test reports.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact-us"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm sm:text-[15px] px-8 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
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
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-3">
                Frequently Asked Questions About Furniture Testing
              </h2>
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Expert answers regarding sample submission, mechanical load protocols, stability criteria, and test certificates.
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
