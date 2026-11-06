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
  CheckCircle2,
  Award,
  Clock,
  Scale,
  Microscope,
  HardHat,
  PackageCheck,
  HelpCircle,
  FileSpreadsheet,
  TreePine,
  Check,
} from "lucide-react";

export const metadata = {
  title: "Wood & Timber Testing Services & Laboratory | MQTL",
  description:
    "Professional wood & timber testing services by MQTL laboratory in Noida, Delhi NCR. Accurate testing for moisture, compressive strength, bending, density & hardness.",
  keywords: [
    "Wood Testing Services",
    "Timber Testing Laboratory",
    "Wood Testing Lab Noida",
    "Timber Quality Testing Delhi NCR",
    "Compressive Strength of Timber",
    "Moisture Content Test Timber",
    "Static Bending Test Wood MOR MOE",
    "Wood Density Specific Gravity Test",
    "Timber Hardness Test",
    "Structural Timber Testing",
    "Wood Material Testing Laboratory",
    "Minu Quality Testing Laboratories Private Limited",
    "MQTL Lab",
  ],
  alternates: {
    canonical: "https://mqtlab.com/testing/wood-testing",
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
    title: "Wood & Timber Testing Services & Quality Lab - MQTL",
    description:
      "Professional wood and timber testing laboratory providing moisture, compressive strength, static bending, density, and durability testing in Delhi NCR.",
    url: "https://mqtlab.com/testing/wood-testing",
    siteName: "MQTL - Minu Quality Testing Laboratories Private Limited",
    images: [
      {
        url: "/testing/wood-testing.jpeg",
        width: 1200,
        height: 630,
        alt: "MQTL Wood Testing Laboratory Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wood & Timber Testing Services & Quality Lab - MQTL",
    description:
      "Professional wood and timber testing laboratory providing comprehensive mechanical, physical, and durability testing.",
    images: ["/testing/wood-testing.jpeg"],
  },
};

const testServices = [
  {
    title: "Moisture Content Test",
    description:
      "Determines the percentage of moisture present in timber using oven-drying and electrical meter methods to prevent shrinkage, warpage, and biological decay.",
    icon: Droplet,
  },
  {
    title: "Density & Specific Gravity",
    description:
      "Measures the mass per unit volume and specific gravity of oven-dry and air-dry specimens to determine structural grade and load-bearing performance.",
    icon: Scale,
  },
  {
    title: "Compressive Strength Test",
    description:
      "Evaluates timber maximum crush resistance both parallel and perpendicular to grain fibers using high-precision calibrated Universal Testing Machines (UTM).",
    icon: ArrowDownToLine,
  },
  {
    title: "Bending Strength (MOR & MOE)",
    description:
      "Measures Modulus of Rupture (MOR) and Modulus of Elasticity (MOE) under 3-point static bending loads to verify structural beam integrity.",
    icon: TrendingUp,
  },
  {
    title: "Shear Strength Parallel to Grain",
    description:
      "Determines the maximum shear stress wood can sustain before sliding or cleaving along grain planes, crucial for timber joinery and glued assemblies.",
    icon: Split,
  },
  {
    title: "Termite & Borer Resistance",
    description:
      "Accelerated biological exposure and bio-assay testing to evaluate heartwood resistance and chemical preservative penetration against subterranean termites.",
    icon: Bug,
  },
  {
    title: "Water Absorption & Swelling",
    description:
      "Assesses water uptake rate, volumetric expansion, and thickness swelling percentage after prolonged cold and hot water immersion cycles.",
    icon: Droplets,
  },
  {
    title: "Fungal Decay Resistance",
    description:
      "Evaluates wood natural durability and preservative efficacy against white rot, brown rot, and soft rot fungi under controlled incubation conditions.",
    icon: ShieldAlert,
  },
  {
    title: "Fire Resistance & Flammability",
    description:
      "Measures flame spread index, rate of charring, and ignition temperature of timber treated with fire-retardant chemicals for building safety compliance.",
    icon: Flame,
  },
];

const applications = [
  {
    title: "Construction Timber",
    subtitle: "Structural strength and stability",
    icon: Building2,
  },
  {
    title: "Furniture Components",
    subtitle: "Durability and mechanical properties",
    icon: Armchair,
  },
  {
    title: "Plywood & Panels",
    subtitle: "Performance and quality evaluation",
    icon: Layers,
  },
  {
    title: "Doors & Wood Products",
    subtitle: "Safety and long-term reliability",
    icon: DoorClosed,
  },
];

const processSteps = [
  {
    step: "01",
    badgeColor: "bg-red-500",
    title: "Sample Collection",
    description: "Wood samples are collected, cataloged, and conditioned under controlled laboratory protocols.",
    icon: ClipboardList,
  },
  {
    step: "02",
    badgeColor: "bg-[#0f2942]",
    title: "Laboratory Testing",
    description: "Mechanical, physical, and durability tests are conducted using calibrated UTM machinery.",
    icon: FlaskConical,
  },
  {
    step: "03",
    badgeColor: "bg-red-500",
    title: "Result Evaluation",
    description: "Test results are analyzed by experienced material engineers against rigorous quality specifications.",
    icon: TrendingUp,
  },
  {
    step: "04",
    badgeColor: "bg-[#0f2942]",
    title: "Laboratory Report",
    description: "A tamper-proof, QR-coded laboratory test report is issued for compliance and project verification.",
    icon: FileCheck,
  },
];


const timberSpecies = [
  {
    category: "Commercial Hardwoods",
    description: "Dense, durable timbers tested for heavy civil construction, joinery, and premium furniture.",
    species: ["Teak (Tectona grandis)", "Sal (Shorea robusta)", "Sheesham (Dalbergia sissoo)", "Oak & Walnut", "Mahogany", "Acacia / Babul"],
  },
  {
    category: "Structural Softwoods",
    description: "Lightweight and versatile woods analyzed for roof trusses, purlins, and internal framework.",
    species: ["Pine (Pinus roxburghii)", "Deodar (Cedrus deodara)", "Spruce & Fir", "Kail / Blue Pine", "Cypress", "Poplar"],
  },
  {
    category: "Engineered Wood Products",
    description: "Composite and treated structural products tested for mechanical bonding and environmental stability.",
    species: ["Cross-Laminated Timber (CLT)", "Glued Laminated Timber (Glulam)", "Laminated Veneer Lumber (LVL)", "Chemically Treated Timber", "Fire-Retardant Impregnated Wood", "Finger-Jointed Lumber"],
  },
];

const industriesServed = [
  {
    title: "Civil & Infrastructure Projects",
    description: "Verification of structural timber for residential and commercial framing, load-bearing columns, and formwork props.",
    icon: HardHat,
  },
  {
    title: "Modular & Contract Furniture",
    description: "Testing solid wood components for moisture equilibrium, joinery strength, and finishing durability.",
    icon: Armchair,
  },
  {
    title: "Wooden Packaging & Pallets",
    description: "Quality evaluation for export pallets, logistics crating, and treated wooden packaging materials.",
    icon: PackageCheck,
  },
  {
    title: "Architectural Doors & Windows",
    description: "Physical testing for resistance to swelling, warp, hinge pullout, and weather exposure.",
    icon: DoorClosed,
  },
];

const faqs = [
  {
    q: "What types of wood and timber can be tested at MQTL?",
    a: "Our laboratory tests all major varieties of commercial hardwoods (Teak, Sal, Sheesham, Oak, Walnut), structural softwoods (Pine, Deodar, Blue Pine), and engineered timber products (CLT, Glulam, LVL, treated wood). We evaluate both raw timber logs/sawn timber and finished wood products.",
  },
  {
    q: "Why is moisture content testing critical for structural timber?",
    a: "Timber is hygroscopic and expands or contracts with changes in atmospheric humidity. High moisture content drastically reduces compressive and bending strength, causes dimensional distortion (warping, cupping, bowing), and creates ideal conditions for wood-rotting fungi and termite attacks. Laboratory testing verifies whether timber has been seasoned to the equilibrium moisture content required for its end-use environment.",
  },
  {
    q: "How are wood and timber test results certified and reported?",
    a: "Official test certificates detailing moisture percentage, density, modulus of rupture (MOR), compressive strength, and compliance ratings are issued upon completion of testing cycles with full sample traceability.",
  },
  {
    q: "What sample sizes are required for static bending and compression tests?",
    a: "Standard static bending tests require clear, defect-free timber specimens measuring 50 mm × 50 mm × 750 mm. Compressive strength parallel to grain requires specimens of 50 mm × 50 mm × 200 mm. For full-size lumber pieces and custom structural components, our laboratory can accommodate tailored test spans. Contact our lab team for detailed sampling guidance.",
  },
  {
    q: "Are MQTL test certificates accepted for commercial construction and industry projects?",
    a: "Yes. Minu Quality Testing Laboratories Private Limited (MQTL) operates strictly under recognized quality management systems and standard test protocols. Our laboratory test reports are widely accepted by builders, developers, private EPC contractors, architects, furniture manufacturers, and quality compliance auditors across Delhi NCR, Noida, Greater Noida, and nationwide.",
  },
  {
    q: "How does the Janka Ball Hardness test work?",
    a: "The Janka hardness test measures the resistance of wood to denting and wear. It determines the load required to embed an 11.28 mm (0.444 in) diameter steel ball to half its diameter into the timber specimen. This value is essential for selecting appropriate timber species for heavy-traffic wooden flooring, deck planks, and furniture surfaces.",
  },
  {
    q: "Can you test fire-retardant treated wood (FRTW)?",
    a: "Yes, we evaluate fire-retardant treated wood for flammability, rate of burning, flame penetration, and charring rate to verify fire safety performance.",
  },
  {
    q: "How can I submit timber samples to MQTL Laboratory?",
    a: "You can deliver samples directly to our facility at Plot No. 79, Sector 155, Noida, Gautam Buddha Nagar, Uttar Pradesh 201310, India, or send them via courier with a formal testing requisition slip. Our technical team can also provide sampling guidance to ensure your specimens represent the timber batch accurately.",
  },
];

export default function WoodTestingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://mqtlab.com/testing/wood-testing#service",
        name: "Wood & Timber Testing Services & Laboratory",
        serviceType: "Wood & Timber Material Testing",
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
          "Professional wood and timber testing laboratory providing moisture, bending, compression, density, and durability testing.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Wood Testing Parameters",
          itemListElement: testServices.map((s, idx) => ({
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
        "@id": "https://mqtlab.com/testing/wood-testing#breadcrumb",
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
            name: "Wood Testing Services",
            item: "https://mqtlab.com/testing/wood-testing",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://mqtlab.com/testing/wood-testing#faq",
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
                  WOOD &amp; TIMBER MATERIAL TESTING
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-2.5 animate-fade-in-up animation-delay-100">
                Wood &amp; Timber Testing Services &amp; Laboratory
              </h1>

              <p className="text-slate-300 text-xs sm:text-[14px] leading-relaxed mb-5 animate-fade-in-up animation-delay-200">
                Professional laboratory testing to evaluate compressive strength, static bending
                (MOR &amp; MOE), moisture content, wood density, hardness, and durability of solid wood
                and timber materials for construction, furniture, and structural applications.
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
                src="/testing/wood-testing.jpeg"
                alt="Wood testing laboratory machinery"
                fill
                priority
                className="object-cover object-[center_bottom] transition-transform duration-700 hover:scale-[1.01]"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#051628]/95 via-[#051628]/85 via-42% to-transparent to-62% pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-8 lg:py-10 w-full">
              <div className="max-w-2xl lg:max-w-[680px] xl:max-w-[740px]">
                <p className="text-sky-400 font-bold tracking-widest text-xs sm:text-[13px] md:text-sm uppercase mb-2.5 animate-fade-in-up">
                  WOOD &amp; WOOD-BASED MATERIAL TESTING
                </p>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-white tracking-tight leading-[1.12] mb-3 drop-shadow-sm animate-fade-in-up animation-delay-100">
                  Wood &amp; Timber Testing Services &amp; Laboratory
                </h1>

                <p className="text-slate-100 font-normal text-sm sm:text-base md:text-[16px] leading-relaxed mb-5 animate-fade-in-up animation-delay-200">
                  Professional laboratory testing to evaluate compressive strength, static bending
                  (MOR &amp; MOE), moisture content, wood density, hardness, and durability of solid wood
                  and timber materials for construction, furniture, and structural applications.
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
                  10+
                </span>
                <span className="block text-xs sm:text-[12.5px] font-medium text-gray-300 uppercase tracking-wider">
                  Testing Services
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
              <div className="relative h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-md border border-gray-100">
                <Image
                  src="/wood-testing-lab.jpg"
                  alt="Wood sample undergoing mechanical compression testing"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                  Professional Wood &amp; Timber Material Testing Laboratory
                </h2>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-4">
                  Our laboratory provides reliable wood testing services to
                  evaluate the physical and mechanical properties of timber and
                  wood-based materials used in construction, furniture
                  manufacturing, and industrial applications.
                </p>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-8">
                  We conduct various tests including moisture content analysis,
                  bending strength testing, density measurement, and durability
                  assessment to determine the quality and performance of wood
                  products. These tests help manufacturers and builders ensure
                  wood materials meet required quality standards and provide
                  long-term strength, stability, and reliability.
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
                Our Comprehensive Wood &amp; Timber Testing Services
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Reliable physical, mechanical, and biological evaluations carried out under calibrated laboratory conditions.
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
                  src="/wood-applications.jpg"
                  alt="Plywood, MDF, and engineered wood applications"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="md:col-span-7">
                <div className="border-l-4 border-red-500 pl-4 mb-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Timber Testing for Structural, Architectural &amp; Industrial Applications
                  </h2>
                </div>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed mb-7">
                  Our wood testing services support a wide range of
                  applications, including construction timber, furniture
                  components, plywood, particle boards, MDF, wooden doors, and
                  other wood-based products. Testing helps ensure that wood
                  materials meet the required performance, safety, and quality
                  standards for their intended use.
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
                Our Wood Testing Process
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


        {/* Timber Species */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Timber Species &amp; Products Evaluated
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 rounded-full" />
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                We handle comprehensive botanical identification and mechanical validation across commercial wood classifications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {timberSpecies.map((group, idx) => (
                <div
                  key={idx}
                  className="card-interactive group bg-[#f8fafc] rounded-xl border border-gray-200/80 p-6 shadow-xs hover:shadow-md hover:bg-white hover:border-sky-300 transition-all duration-300 cursor-default"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#05526e]/10 flex items-center justify-center text-[#05526e] group-hover:bg-red-600 group-hover:text-white group-hover:scale-110 mb-4 transition-all duration-300">
                    <TreePine className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-red-600 transition-colors">
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
              <div className="card-interactive group p-6 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-red-500/50 transition-all duration-300 backdrop-blur-xs cursor-default">
                <Microscope className="w-8 h-8 text-red-400 group-hover:scale-110 mb-3 transition-transform duration-300" />
                <h3 className="font-bold text-white text-sm mb-1.5 group-hover:text-red-400 transition-colors">
                  Calibrated UTM Machinery
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  State-of-the-art servo-controlled Universal Testing Machines calibrated regularly to maintain maximum testing precision and accuracy.
                </p>
              </div>

              <div className="card-interactive group p-6 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-sky-400/50 transition-all duration-300 backdrop-blur-xs cursor-default">
                <FileCheck className="w-8 h-8 text-sky-400 group-hover:scale-110 mb-3 transition-transform duration-300" />
                <h3 className="font-bold text-white text-sm mb-1.5 group-hover:text-sky-300 transition-colors">
                  QR-Verified Digital Reports
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Tamper-proof test certificates with unique QR codes for instant online verification by auditors and clients.
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
                  Test reports trusted by leading architects, furniture manufacturers, structural engineers, and tier-1 builders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-16 sm:py-20 bg-[#f8fafc] border-b border-slate-200/70 reveal-on-scroll">
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
                  Need Reliable Wood &amp; Timber Testing?
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
                Frequently Asked Questions About Wood Testing
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
