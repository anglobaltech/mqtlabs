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
  ArrowDownToLine,
  TrendingUp,
  Split,
  Bug,
  Droplets,
  ShieldAlert,
  Flame,
  Building2,
  Armchair,
  DoorClosed,
  ClipboardList,
  FileCheck,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Award,
  Clock,
  Scale,
  Microscope,
  HardHat,
  PackageCheck,
  HelpCircle,
  Check,
} from "lucide-react";

export const metadata = {
  title: "Plywood Testing Services & Laboratory in India | MQTL",
  description:
    "Leading plywood testing laboratory in Noida, Delhi NCR. Quality testing for glue shear strength, moisture content, static bending (MOR/MOE), density & water resistance.",
  keywords: [
    "Plywood Testing Services",
    "Plywood Testing Laboratory",
    "Plywood Testing Lab Noida",
    "Plywood Testing Delhi NCR",
    "Glue Shear Strength Test Plywood",
    "Plywood Moisture Content Test",
    "Static Bending Test Plywood MOR MOE",
    "Water Resistance Test Plywood",
    "Commercial Plywood Testing Lab",
    "Marine Plywood Testing Lab",
    "Plywood Quality Evaluation Laboratory",
    "Minu Quality Testing Laboratories Private Limited",
    "MQTL Lab",
  ],
  alternates: {
    canonical: "https://mqtlab.com/testing/plywood-testing",
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
    title: "Plywood Testing Services & Quality Testing Lab - MQTL",
    description:
      "Professional plywood testing laboratory providing glue shear strength, moisture content, flexural bending, water resistance, and panel durability evaluations in Delhi NCR.",
    url: "https://mqtlab.com/testing/plywood-testing",
    siteName: "MQTL - Minu Quality Testing Laboratories Private Limited",
    images: [
      {
        url: "/plywood-testing-service.jpeg",
        width: 1200,
        height: 630,
        alt: "MQTL Plywood Testing Laboratory Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plywood Testing Services & Quality Testing Lab - MQTL",
    description:
      "Professional plywood testing laboratory providing comprehensive mechanical, adhesive, and durability testing in Delhi NCR.",
    images: ["/plywood-testing-service.jpeg"],
  },
};

const testServices = [
  {
    title: "Glue Shear & Bonding Strength",
    description:
      "Evaluates the adhesion strength between veneer plies under dry, wet, and accelerated boiling conditions to prevent panel delamination.",
    icon: Layers,
  },
  {
    title: "Static Bending (MOR & MOE)",
    description:
      "Measures the Modulus of Rupture (MOR) and Modulus of Elasticity (MOE) across both grain directions to verify load-bearing flexural capacity.",
    icon: TrendingUp,
  },
  {
    title: "Moisture Content Test",
    description:
      "Measures internal moisture percentage using precision oven-dry methods to ensure dimensional stability and prevent warping.",
    icon: Droplet,
  },
  {
    title: "Water Resistance & Immersion",
    description:
      "Assesses veneer bond integrity and swelling resistance after cold water immersion and boiling water cycles.",
    icon: Droplets,
  },
  {
    title: "Tensile Strength Test",
    description:
      "Evaluates ultimate tensile strength both parallel and perpendicular to the face grain under controlled tensile loading.",
    icon: Split,
  },
  {
    title: "Density & Specific Gravity",
    description:
      "Determines overall panel mass density and uniformity across cross-sections to verify grade classification and structural weight.",
    icon: Scale,
  },
  {
    title: "End Immersion & Edge Swelling",
    description:
      "Tests water absorption and thickness swelling when panel edges are exposed to standing moisture and wet environments.",
    icon: ArrowDownToLine,
  },
  {
    title: "Mycological & Fungal Resistance",
    description:
      "Assesses resistance to fungal decay, micro-organism growth, and biological breakdown under controlled incubation.",
    icon: Bug,
  },
  {
    title: "Fire Resistance & Flammability",
    description:
      "Evaluates flame penetration, surface spread of flame, and rate of burning for fire-retardant treated plywood panels.",
    icon: Flame,
  },
];

const applications = [
  {
    title: "Modular Furniture & Cabinets",
    subtitle: "Bonding and screw-holding stability",
    icon: Armchair,
  },
  {
    title: "Construction & Formwork Props",
    subtitle: "High reuse flexural durability",
    icon: Building2,
  },
  {
    title: "Architectural Wall Paneling",
    subtitle: "Flatness and dimensional accuracy",
    icon: DoorClosed,
  },
  {
    title: "Logistics, Crating & Transport",
    subtitle: "Impact resistance and load bearing",
    icon: PackageCheck,
  },
];

const processSteps = [
  {
    step: "01",
    badgeColor: "bg-red-500",
    title: "Sample Intake & Conditioning",
    description:
      "Specimens are cataloged, checked for thickness uniformity, and conditioned under controlled relative humidity.",
    icon: ClipboardList,
  },
  {
    step: "02",
    badgeColor: "bg-[#05526e]",
    title: "Multi-Parameter Lab Testing",
    description:
      "Specimens undergo glue shear, static bending, water immersion, and tensile tests on calibrated machines.",
    icon: FlaskConical,
  },
  {
    step: "03",
    badgeColor: "bg-emerald-600",
    title: "Precision Analysis & Evaluation",
    description:
      "Delamination percentage, failure modes, flexural modulus, and moisture levels are computed by experts.",
    icon: Microscope,
  },
  {
    step: "04",
    badgeColor: "bg-[#0f2942]",
    title: "Laboratory Report",
    description:
      "A tamper-proof, QR-coded laboratory test report is issued with verified quantitative results.",
    icon: FileCheck,
  },
];

const plywoodGrades = [
  {
    category: "Commercial & Moisture Resistant",
    description:
      "General-purpose interior and semi-exterior panels evaluated for furniture joinery and interior fit-outs.",
    species: [
      "Moisture Resistant (MR Grade) Plywood",
      "Commercial Grade Plywood",
      "Interior Decorative Veneered Panels",
      "Solid Wood Core Blockboards",
      "Calibrated Core Flush Doors",
      "Particle & Medium Density Fibreboard (MDF)",
    ],
  },
  {
    category: "Boiling Water Resistant & Marine",
    description:
      "High-bonding waterproof panels formulated for wet environments, kitchen carcasses, and outdoor exposure.",
    species: [
      "Boiling Water Resistant (BWR Grade) Plywood",
      "Boiling Water Proof (BWP Grade) Marine Plywood",
      "Structural Grade Plywood Panels",
      "Heavy-Duty Hardwood Veneer Plywood",
      "Preservative-Treated Exterior Plywood",
      "Waterproof Decorative Marine Laminates",
    ],
  },
  {
    category: "Specialized & Industrial Panels",
    description:
      "Engineered panels built for heavy civil formwork, fire safety installations, and transport flooring.",
    species: [
      "Film-Faced Concrete Shuttering Plywood",
      "Fire-Retardant Treated (FRT) Plywood",
      "High-Density Chequered Transport Flooring",
      "Flexible Plywood (Flexi-Ply)",
      "Bamboo Mat Composite Plywood",
      "Sound-Insulating Acoustic Wood Panels",
    ],
  },
];

const industriesServed = [
  {
    title: "Furniture & Modular Kitchens",
    description:
      "Verification of core density, screw-holding capacity, and moisture resistance for residential and office furniture.",
    icon: Armchair,
  },
  {
    title: "Civil Construction & Formwork",
    description:
      "Testing load capacity and repeat cycle durability for concrete shuttering panels and scaffolding decks.",
    icon: HardHat,
  },
  {
    title: "Interior Contractors & Fit-Outs",
    description:
      "Quality assurance of decorative veneers, acoustic panels, and partition boards for commercial spaces.",
    icon: Building2,
  },
  {
    title: "Logistics, Packaging & Transport",
    description:
      "Evaluating impact shock resistance and load distribution for export crates, pallets, and bus flooring.",
    icon: PackageCheck,
  },
];

const faqs = [
  {
    q: "What types and grades of plywood are tested at MQTL?",
    a: "Our laboratory tests all commercial and industrial plywood grades including Moisture Resistant (MR Grade), Boiling Water Resistant (BWR Grade), Marine Plywood (BWP Grade), Film-Faced Shuttering Plywood, Fire-Retardant Plywood, Blockboards, and Flush Doors.",
  },
  {
    q: "Why is glue shear strength testing critical for plywood?",
    a: "Glue shear strength evaluates the bond quality between adjacent wood veneer layers. If the adhesive bond is weak, the plywood can delaminate under mechanical stress, moisture exposure, or temperature variations, leading to structural or furniture failure.",
  },
  {
    q: "How do you test moisture resistance between BWR and MR grades?",
    a: "Moisture resistance is evaluated by subjecting test specimens to water immersion cycles. MR grade specimens are tested in warm water, while BWR grade specimens undergo accelerated boiling water cycles followed by shear strength testing to verify that veneers remain firmly bonded without separation.",
  },
  {
    q: "How are plywood test results reported and certified?",
    a: "Upon completion of mechanical, moisture, and adhesive evaluations, verified laboratory test certificates are issued documenting glue shear strength, modulus of rupture, and observed failure modes with complete sample traceability.",
  },
  {
    q: "What specimen sizes are required for plywood testing?",
    a: "Standard testing requires representative cut sections from the plywood sheet. For glue shear and bending tests, specimens typically range between 150 mm to 300 mm in length depending on panel thickness. Our technical team provides tailored cutting and sampling guidance prior to dispatch.",
  },
  {
    q: "Are MQTL test certificates recognized by builders and architects?",
    a: "Yes. Minu Quality Testing Laboratories Private Limited (MQTL) operates strictly under recognized quality management systems and calibrated test procedures. Our laboratory test reports are trusted by leading builders, architectural studios, interior contractors, and furniture manufacturers across Delhi NCR, Noida, Greater Noida, and nationwide.",
  },
  {
    q: "Can you test concrete shuttering and film-faced plywood?",
    a: "Yes. We conduct cyclic water immersion tests, surface abrasion tests, cross-breaking flexural strength tests, and glue adhesion tests on film-faced shuttering plywood to evaluate durability across multiple concrete pouring cycles.",
  },
  {
    q: "How can I submit plywood samples to MQTL Laboratory?",
    a: "You can deliver test specimens directly to our laboratory at Plot No. 79, Sector 155, Noida, Gautam Buddha Nagar, Uttar Pradesh 201310, India, or send them via courier with a formal testing requisition slip. Our technical team can guide you on the exact sample quantity needed.",
  },
];

export default function PlywoodTestingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://mqtlab.com/testing/plywood-testing#service",
        name: "Plywood Testing Services & Quality Evaluation Laboratory",
        serviceType: "Plywood & Engineered Panel Testing",
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
          "Professional plywood and wood panel testing laboratory providing moisture, bending, glue shear, density, and durability testing.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Plywood Testing Parameters",
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
        "@id": "https://mqtlab.com/testing/plywood-testing#breadcrumb",
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
            name: "Plywood Testing Services",
            item: "https://mqtlab.com/testing/plywood-testing",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://mqtlab.com/testing/plywood-testing#faq",
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
                  PLYWOOD &amp; ENGINEERED PANEL TESTING
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-2.5 animate-fade-in-up animation-delay-100">
                Plywood Testing Services &amp; Quality Evaluation Laboratory
              </h1>

              <p className="text-slate-300 text-xs sm:text-[14px] leading-relaxed mb-5 animate-fade-in-up animation-delay-200">
                Professional laboratory testing to evaluate glue shear bonding strength,
                moisture resistance, static bending flexural stiffness (MOR &amp; MOE), density,
                and structural durability of commercial, marine, and engineered plywood panels.
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
                src="/testing/plywood-testing-hero-banner.png"
                alt="Plywood testing laboratory machinery and sample evaluation"
                fill
                priority
                className="object-cover object-[right_center] transition-transform duration-700 hover:scale-[1.01]"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#051628]/95 via-[#051628]/85 via-42% to-transparent to-62% pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-8 lg:py-10 w-full">
              <div className="max-w-2xl lg:max-w-[680px] xl:max-w-[740px]">
                <p className="text-sky-400 font-bold tracking-widest text-xs sm:text-[13px] md:text-sm uppercase mb-2.5 animate-fade-in-up">
                  PLYWOOD &amp; ENGINEERED PANEL TESTING
                </p>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-white tracking-tight leading-[1.12] mb-3 drop-shadow-sm animate-fade-in-up animation-delay-100">
                  Plywood Testing Services &amp; Quality Evaluation Laboratory
                </h1>

                <p className="text-slate-100 font-normal text-sm sm:text-base md:text-[16px] leading-relaxed mb-5 animate-fade-in-up animation-delay-200">
                  Professional laboratory testing to evaluate glue shear bonding strength,
                  moisture resistance, static bending flexural stiffness (MOR &amp; MOE), density,
                  and structural durability of commercial, marine, and engineered plywood panels.
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

        {/* Quick Stats Bar */}
        <section className="bg-[#081e35] border-y border-white/10 text-white reveal-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-white/10">
              <div className="py-6 sm:py-7 px-4 text-center">
                <span className="block text-2xl sm:text-3xl lg:text-[32px] font-bold text-red-500 mb-1 tracking-tight">
                  Standard
                </span>
                <span className="block text-xs sm:text-[12.5px] font-medium text-gray-300 uppercase tracking-wider">
                  Specifications
                </span>
              </div>

              <div className="py-6 sm:py-7 px-4 text-center">
                <span className="block text-2xl sm:text-3xl lg:text-[32px] font-bold text-red-500 mb-1 tracking-tight">
                  100%
                </span>
                <span className="block text-xs sm:text-[12.5px] font-medium text-gray-300 uppercase tracking-wider">
                  Bond Integrity
                </span>
              </div>

              <div className="py-6 sm:py-7 px-4 text-center">
                <span className="block text-2xl sm:text-3xl lg:text-[32px] font-bold text-red-500 mb-1 tracking-tight">
                  MOR &amp; MOE
                </span>
                <span className="block text-xs sm:text-[12.5px] font-medium text-gray-300 uppercase tracking-wider">
                  Bending Rigidity
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
                  src="/plywood-testing-service.jpeg"
                  alt="Plywood veneer bonding and strength evaluation in laboratory"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                  Professional Plywood Testing &amp; Quality Verification Laboratory
                </h2>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-4">
                  Our laboratory provides reliable plywood testing services to
                  evaluate the physical, mechanical, and adhesive properties of
                  plywood sheets, blockboards, and flush doors used in modern
                  construction, interior architecture, and furniture
                  manufacturing.
                </p>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-8">
                  We conduct precision tests including glue shear bonding
                  analysis, static bending strength, moisture content
                  determination, and cyclic water immersion testing. These
                  assessments help manufacturers maintain uniform product
                  quality and verify that panels deliver structural integrity,
                  flatness, and long-term durability.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div className="card-interactive group flex items-center gap-3 p-3 rounded-xl bg-red-50/70 border border-red-100 hover:border-red-300">
                    <div className="w-10 h-10 rounded-lg bg-red-100/90 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                      <Users className="w-5 h-5 text-red-600 group-hover:text-white transition-colors" />
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
                    <div className="w-10 h-10 rounded-lg bg-red-100/90 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                      <FlaskConical className="w-5 h-5 text-red-600 group-hover:text-white transition-colors" />
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
                    <div className="w-10 h-10 rounded-lg bg-red-100/90 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                      <ShieldCheck className="w-5 h-5 text-red-600 group-hover:text-white transition-colors" />
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
                Plywood Testing Services &amp; Parameters
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Comprehensive mechanical, adhesive, and durability evaluations carried out under calibrated laboratory conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {testServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="card-interactive group bg-white rounded-xl border border-gray-200/80 p-5 sm:p-6 shadow-xs hover:border-red-300 transition-all duration-200 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0 mt-0.5 text-red-600 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5 transition-transform" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="font-bold text-slate-900 text-sm sm:text-[15px] group-hover:text-[#05526e] transition-colors">
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
                  src="/plywood-testing-service.jpeg"
                  alt="Commercial plywood panels in furniture and construction"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="md:col-span-7">
                <div className="border-l-4 border-red-500 pl-4 mb-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Plywood Testing for Construction, Interior &amp; Industrial Applications
                  </h2>
                </div>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-7">
                  Our plywood testing services support manufacturers, architects,
                  and builders across diverse applications. From high-end modular
                  cabinetry and wet-area marine installations to heavy-duty
                  concrete shuttering panels and transport packaging, our testing
                  verifies that panels resist delamination, maintain dimensional
                  accuracy, and support expected loads.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {applications.map((app, idx) => {
                    const AppIcon = app.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-[#f0f7fc] border border-[#e0effa] rounded-xl p-3.5 text-center flex flex-col items-center justify-center hover:bg-[#e6f2fa] transition-colors"
                      >
                        <AppIcon className="w-6 h-6 text-[#05526e] mb-2" />
                        <p className="font-bold text-slate-900 text-xs sm:text-[13px] leading-tight mb-1">
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
                Our Plywood Testing Process
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
                    <div className="text-center flex flex-col items-center flex-1">
                      <span
                        className={`w-6 h-6 rounded-full text-white font-bold text-xs flex items-center justify-center mb-2.5 shadow-xs ${step.badgeColor}`}
                      >
                        {step.step}
                      </span>

                      <StepIcon className="w-8 h-8 text-slate-700 mb-2.5" />

                      <h3 className="font-bold text-slate-900 text-sm sm:text-[15px] mb-1">
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

        {/* Plywood Grades */}
        <section className="py-16 sm:py-20 bg-white reveal-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Plywood Grades &amp; Panel Types Evaluated
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                We handle comprehensive mechanical validation across commercial, moisture resistant, and industrial panel categories.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plywoodGrades.map((group, idx) => (
                <div
                  key={idx}
                  className="bg-[#f8fafc] rounded-xl border border-gray-200/80 p-6 shadow-xs hover:shadow-md hover:bg-white transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#05526e]/10 flex items-center justify-center text-[#05526e] mb-4">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {group.category}
                  </h3>
                  <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                    {group.description}
                  </p>
                  <ul className="space-y-2 border-t border-gray-100 pt-4">
                    {group.species.map((sp, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{sp}</span>
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
                Backed by precision instruments, experienced material scientists, and stringent quality assurance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-red-500/40 transition-all backdrop-blur-xs">
                <Microscope className="w-8 h-8 text-red-400 mb-3" />
                <h3 className="font-bold text-white text-sm mb-1.5">
                  Calibrated UTM Machinery
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  State-of-the-art servo-controlled Universal Testing Machines calibrated regularly to maintain maximum testing precision and accuracy.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-sky-400/40 transition-all backdrop-blur-xs">
                <FileCheck className="w-8 h-8 text-sky-400 mb-3" />
                <h3 className="font-bold text-white text-sm mb-1.5">
                  QR-Verified Digital Reports
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Tamper-proof test certificates with unique QR codes for instant online verification by auditors and clients.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-emerald-400/40 transition-all backdrop-blur-xs">
                <Clock className="w-8 h-8 text-emerald-400 mb-3" />
                <h3 className="font-bold text-white text-sm mb-1.5">
                  Standard Testing Protocols
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Systematic testing workflows following national &amp; international test standards with prompt, scheduled delivery of laboratory test reports.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-amber-400/40 transition-all backdrop-blur-xs">
                <Award className="w-8 h-8 text-amber-400 mb-3" />
                <h3 className="font-bold text-white text-sm mb-1.5">
                  Industry &amp; Builder Trusted
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Test reports trusted by leading architects, furniture manufacturers, structural engineers, and tier-1 builders.
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
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {industriesServed.map((item, idx) => {
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
                  Need Reliable Plywood &amp; Panel Testing?
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
                Frequently Asked Questions About Plywood Testing
              </h2>
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Expert answers regarding sample submission, testing procedures, quality protocols, and certified test reports.
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
