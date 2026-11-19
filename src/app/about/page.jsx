import Link from "next/link";
import {
  Factory,
  Target,
  ShieldCheck,
  Scale,
  FlaskConical,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  MapPin,
  Clock,
  Layers,
  Trees,
  Droplet,
  Building2,
  Mountain,
  Boxes,
  Blocks,
  Settings,
  Sofa,
  Microscope,
  Cpu,
  PackageCheck,
  FileCheck,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title:
    "About Us | Minu Quality Testing Laboratories Private Limited",
  description:
    "Learn about Minu Quality Testing Laboratories Private Limited (MQTL) — a dedicated material testing laboratory located at Plot No. 79, Sector 155, Noida. We deliver reliable, verified testing services for wood, plywood, water, furniture, cement, soil, aggregates, hinges, and paver blocks across Delhi NCR and nationwide.",
  keywords:
    "About Minu Quality Testing Laboratories Private Limited, Material Testing Laboratory Noida, Water Testing Lab Delhi NCR, Wood Testing Lab, Plywood Testing Lab, Soil Testing Laboratory, Construction Materials Testing, MQTL Noida",
};

export default function AboutPage() {
  const testingDisciplines = [
    {
      title: "Wood & Timber Testing",
      href: "/testing/wood-testing",
      icon: Trees,
      tag: "Physical & Mechanical",
      description:
        "Moisture equilibrium, oven-dry density, compressive strength parallel/perpendicular to grain, and static bending (MOR & MOE).",
    },
    {
      title: "Plywood & Panel Boards",
      href: "/testing/plywood-testing",
      icon: Layers,
      tag: "Bonding & Durability",
      description:
        "Boiling water resistance (BWR), dry glue shear strength, moisture absorption, and flexural modulus across commercial and marine grades.",
    },
    {
      title: "Water Quality Testing",
      href: "/testing/water-testing",
      icon: Droplet,
      tag: "Potability & Concrete",
      description:
        "Potable drinking water compliance, concrete mixing and curing suitability, pH, total dissolved solids (TDS), alkalinity, and hardness assays.",
    },
    {
      title: "Furniture & Seating Testing",
      href: "/testing/furniture-testing",
      icon: Sofa,
      tag: "Structural & Durability",
      description:
        "Static load capacity, cyclic seat and backrest fatigue endurance, drop impact resistance, and structural stability for ergonomic furniture.",
    },
    {
      title: "Cement & Mortar Testing",
      href: "/testing/cement-testing",
      icon: Building2,
      tag: "Binding Strength",
      description:
        "Compressive strength of mortar cubes at 3, 7, and 28 days, Vicat setting time, Le Chatelier soundness, and Blaine fineness analysis.",
    },
    {
      title: "Geotechnical Soil Testing",
      href: "/testing/soil-testing",
      icon: Mountain,
      tag: "Civil & Subgrade",
      description:
        "Particle size distribution, Atterberg limits, standard proctor compaction (OMC & MDD), direct shear parameters, and California Bearing Ratio (CBR).",
    },
    {
      title: "Architectural Hinges Testing",
      href: "/testing/hinges-testing",
      icon: Settings,
      tag: "Hardware & Fittings",
      description:
        "Endurance cycling up to 50,000+ continuous cycles, static load bearing, lateral/vertical deflection, and neutral salt spray corrosion.",
    },
    {
      title: "Aggregates Testing",
      href: "/testing/aggregates-testing",
      icon: Boxes,
      tag: "Coarse & Fine Aggregates",
      description:
        "Aggregate crushing value (ACV), 10% fines value, aggregate impact value (AIV), Los Angeles abrasion, and flakiness & elongation indices.",
    },
    {
      title: "Concrete Paver Block Testing",
      href: "/testing/concrete-paver-block-testing",
      icon: Blocks,
      tag: "Precast & Paving",
      description:
        "Compressive load capacity, splitting tensile strength, 24-hour water absorption, and dimensional tolerance for heavy-traffic paving units.",
    },
  ];

  const corePillars = [
    {
      title: "Testing Accuracy & Precision",
      description:
        "Calibrated instruments and strict procedural compliance to ensure repeatable, uncompromised test outcomes across every sample batch.",
      icon: Target,
    },
    {
      title: "Technical Traceability",
      description:
        "Rigorous chain-of-custody protocols, tamper-evident specimen logging, and transparent documentation from sample intake to report dispatch.",
      icon: ShieldCheck,
    },
    {
      title: "Standards Compliance",
      description:
        "All test methodologies are executed according to established national and industrial protocols to support regulatory and commercial requirements.",
      icon: Scale,
    },
    {
      title: "Engineering Expertise",
      description:
        "Qualified materials engineers, technicians, and chemists provide dependable technical insights and detailed test evaluations.",
      icon: Microscope,
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Sample Ingestion & Logging",
      desc: "Incoming specimens are inspected for physical condition, verified for seal integrity, and logged into our lab tracking system with a unique identification number.",
      icon: PackageCheck,
    },
    {
      step: "02",
      title: "Conditioning & Preparation",
      desc: "Specimens are cut to standard dimensions and conditioned in controlled environmental chambers or curing tanks to achieve moisture and thermal equilibrium.",
      icon: Factory,
    },
    {
      step: "03",
      title: "Rigorous Instrument Testing",
      desc: "Testing is performed using calibrated automated load frames, cyclic actuators, analytical chemical benches, and digital measurement systems.",
      icon: Cpu,
    },
    {
      step: "04",
      title: "Dual-Tier Verification",
      desc: "Observed test data and calculations undergo multi-tier technical review by experienced quality engineers to guarantee validity and repeatability.",
      icon: Award,
    },
    {
      step: "05",
      title: "Verified Report Issuance",
      desc: "Tamper-evident, verified digital PDF test reports are promptly dispatched to the client, with signed physical laboratory certificates available upon request.",
      icon: FileCheck,
    },
  ];

  return (
    <main className="bg-white text-slate-800">
      {/* ── 1. MODERN HERO SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#06182c] via-[#09223c] to-[#0c2b4c] text-white py-14 sm:py-20">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-300 mb-5 animate-fade-in-up">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-red-400 font-semibold">About Us</span>
          </nav>

          {/* Pre-Heading Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[#fe1f24] animate-pulse" />
            <span>Minu Quality Testing Laboratories Private Limited</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-5xl mb-4 animate-fade-in-up">
            Engineering Precision &amp; Material Assurance for{" "}
            <span className="text-[#fe1f24]">Reliable Industry Solutions</span>
          </h1>

          {/* Red Engineered Accent Underline */}
          <div className="flex items-center gap-1.5 mb-6 animate-fade-in-up">
            <div className="w-14 h-1.5 bg-gradient-to-r from-[#fe1f24] to-red-500 rounded-full" />
            <div className="w-3 h-1.5 bg-[#fe1f24]/50 rounded-full" />
            <div className="w-1.5 h-1.5 bg-[#fe1f24]/30 rounded-full" />
          </div>

          {/* Subtitle */}
          <p className="text-slate-200 text-base sm:text-lg max-w-5xl leading-relaxed mb-8 animate-fade-in-up">
            Minu Quality Testing Laboratories Private Limited (MQTL) operates an
            independent, modern testing facility in Sector 155, Noida. We provide
            dependable physical, mechanical, and chemical material evaluations for
            manufacturers, builders, civil contractors, and industrial suppliers
            to verify safety, durability, and standard compliance.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 animate-fade-in-up">
            <Link
              href="/contact-us"
              className="px-6 py-3 rounded-xl bg-[#fe1f24] hover:bg-red-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-red-600/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>Request Testing Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:+919971234474"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-red-400" />
              <span>+91 99712 34474</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. KEY STATS BAR ── */}
      <section className="bg-slate-50 border-y border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs text-center transition hover:border-red-300">
              <FlaskConical className="w-8 h-8 mx-auto text-[#fe1f24] mb-2" />
              <div className="text-3xl font-black text-slate-900">9+</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                Testing Disciplines
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs text-center transition hover:border-red-300">
              <Award className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <div className="text-3xl font-black text-slate-900">100%</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                Verified Test Reports
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs text-center transition hover:border-red-300">
              <Cpu className="w-8 h-8 mx-auto text-emerald-600 mb-2" />
              <div className="text-3xl font-black text-slate-900">Modern</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                Calibrated Testing Rigs
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs text-center transition hover:border-red-300">
              <ShieldCheck className="w-8 h-8 mx-auto text-indigo-600 mb-2" />
              <div className="text-3xl font-black text-slate-900">Standard</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                Recognized Testing SOPs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHO WE ARE & PURPOSE ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#fe1f24]" />
                <span>About Our Organization</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                An Independent Laboratory Delivering{" "}
                <span className="text-[#fe1f24]">Reliable Testing</span> &amp; Quality Confidence
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Minu Quality Testing Laboratories Private Limited (MQTL) was established
                with a steadfast commitment to elevating manufacturing quality and
                construction safety. Operating from our central facility at Plot No. 79,
                Sector 155, Noida, our laboratory delivers professional testing services
                for timber, engineered plywood, potable and construction water,
                furniture, cement mortar, granular aggregates, geotechnical soil,
                architectural hinges, and concrete paver blocks.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We bridge the gap between production and regulatory requirements by
                providing builders, architects, product manufacturers, and project
                consultants with verifiable, uncompromised test data. With qualified
                engineers, calibrated testing machinery, and standard operating
                procedures, we ensure that every test result is accurate, transparent,
                and technically sound.
              </p>

              {/* Highlights checklist */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Dual-tier technical verification for all reports",
                  "Calibrated load frames & automated cyclic rigs",
                  "Strict sample logging & traceability protocols",
                  "Fast digital report dispatch with verified data",
                  "Comprehensive physical, mechanical & chemical testing",
                  "Convenient sample drop-off & courier intake in Noida",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Facility Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-gradient-to-br from-[#0c233c] to-[#06182c] p-7 sm:p-9 text-white shadow-xl border border-slate-700/50">
                <div className="w-12 h-12 rounded-2xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-[#fe1f24] mb-5">
                  <Factory className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  Our Laboratory Purpose
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  To provide dependable, accessible, and high-accuracy material testing
                  solutions that empower manufacturers to meet industry specifications,
                  assist engineers in maintaining structural integrity, and ensure public
                  safety across infrastructure and consumer products.
                </p>

                <div className="border-t border-slate-700/80 pt-5 space-y-3">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <MapPin className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Plot No. 79, Sector 155, Noida, UP – 201310</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Mon – Sat: 9:30 AM – 6:30 PM (Sunday: Closed)</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <Users className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Serving Delhi NCR, Uttar Pradesh &amp; Pan-India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. CORE VALUES & GUIDING PILLARS ── */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-[#fe1f24] text-xs font-semibold uppercase tracking-wider mb-3">
              <span>Our Principles</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Mission &amp; Guiding Pillars
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Every sample tested at Minu Quality Testing Laboratories Private Limited is
              governed by strict commitments to engineering precision, scientific
              honesty, and transparent reporting.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#fe1f24] mb-4 group-hover:bg-[#fe1f24] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. FIVE-STAGE TESTING WORKFLOW ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>Standard Operating Procedures</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our 5-Stage Quality Assurance Workflow
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              From sample receipt to verified test certificate issuance, our structured
              protocol ensures uncompromised data integrity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {workflowSteps.map((ws, idx) => {
              const Icon = ws.icon;
              return (
                <div
                  key={idx}
                  className="relative bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200 hover:border-red-300 transition-all group"
                >
                  <div className="text-xs font-black text-red-500 font-mono tracking-widest mb-3">
                    STEP {ws.step}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-3 group-hover:text-[#fe1f24] group-hover:border-red-200 transition">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                    {ws.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {ws.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. MATERIALS & DISCIPLINES WE TEST (INTERACTIVE GRID) ── */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-[#fe1f24] text-xs font-semibold uppercase tracking-wider mb-3">
              <span>Testing Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Materials &amp; Disciplines We Test
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Our laboratory is equipped for multidisciplinary physical, mechanical,
              and chemical evaluation across 9 primary material divisions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testingDisciplines.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 group flex flex-col justify-between hover:border-red-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-slate-100 group-hover:bg-red-50 border border-slate-200 group-hover:border-red-200 flex items-center justify-center text-slate-700 group-hover:text-[#fe1f24] transition">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#fe1f24] transition mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-[#fe1f24] group-hover:translate-x-1 transition-transform">
                    <span>View Testing Details</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. LABORATORY FACILITY & LOCATION SNAPSHOT ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Central Testing Facility</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Visit Our Facility or Send Samples for Testing
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Located at{" "}
                  <strong className="text-white">
                    Plot No. 79, Sector 155, Noida, Uttar Pradesh 201310
                  </strong>
                  , our laboratory is readily accessible via the Noida-Greater Noida
                  Expressway and Yamuna Expressway. We offer streamlined sample intake,
                  whether delivered in person or dispatched via courier and cargo services.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700">
                    Direct Courier Desk
                  </span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700">
                    Secure Sample Storage
                  </span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700">
                    Convenient Expressway Access
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link
                  href="/contact-us"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#fe1f24] hover:bg-red-600 text-white font-bold text-center text-sm shadow-lg shadow-red-600/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Contact Our Laboratory</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="tel:+919971234474"
                  className="w-full py-3.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-center text-sm border border-slate-700 transition flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-red-400" />
                  <span>Call +91 99712 34474</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}