import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  ClipboardCheck,
  Beaker,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    title: "Static & Bending Strength Test",
    description:
      "Measures plywood strength and durability under static load and wet conditions.",
    link: "#",
  },
  {
    title: "Moisture Content Testing",
    description:
      "Measures moisture levels in plywood to prevent swelling and dimensional instability.",
    link: "#",
  },
  {
    title: "Flexure & Edge Load Test",
    description:
      "Evaluates plywood flexural strength and resistance to edge loading stresses.",
    link: "#",
  },
  {
    title: "Water Resistance Test",
    description:
      "Assesses resistance against water penetration and delamination.",
    link: "#",
  },
  {
    title: "Timber & Adhesive Test",
    description:
      "Testing timber strength and adhesive bonding quality for durability.",
    link: "#",
  },
  {
    title: "Mycological Test",
    description:
      "Checks plywood resistance against fungal growth and biological decay.",
    link: "#",
  },
  {
    title: "Tensile Strength Test",
    description:
      "Measures material strength, elongation, and resistance under pulling force.",
    link: "#",
  },
  {
    title: "Shock & Buckling Resistance",
    description:
      "Evaluates plywood resistance to impact shocks and buckling deformation.",
    link: "#",
  },
  {
    title: "End Immersion Test",
    description:
      "Assesses plywood resistance to water absorption through end-grain immersion.",
    link: "#",
  },
];

const page = () => {
  return (
    <main className="bg-gray-50">
      {/* HERO */}
      <section className="relative h-[45vh] flex items-center justify-center">
        <Image
          src="/polywood-testing-service.jpeg"
          alt="Polywood Testing"
          fill
          className="object-cover brightness-50"
          priority
        />

        <div className="relative text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Polywood Testing Services
          </h1>

          <p className="text-lg text-gray-200">
            Certified laboratory testing ensuring durability, bonding strength,
            moisture resistance, and structural reliability of polywood
            products.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80">
            <Image
              src="/polywood-testing-service.jpeg"
              alt="Polywood Testing Laboratory"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Professional Polywood Testing Laboratory
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Our laboratory performs comprehensive polywood testing to evaluate
              mechanical strength, bonding quality, moisture resistance, and
              dimensional accuracy.
            </p>

            <p className="text-gray-600 leading-relaxed">
              These tests ensure that polywood materials meet required quality
              standards and perform reliably in construction, furniture
              manufacturing, and industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Our Polywood Testing Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link href={service.link} key={index}>
                <div className="group bg-white border border-gray-200 rounded-xl p-7 hover:shadow-xl hover:-translate-y-1 transition duration-300">
                  <ShieldCheck size={34} className="text-red-500 mb-4" />

                  <h3 className="text-lg font-semibold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>

                  <span className="flex items-center gap-2 text-black font-medium text-sm group-hover:text-red-500 transition">
                    Read More
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY POLYWOOD TESTING */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Why Polywood Testing is Important
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-8 rounded-xl bg-red-50 hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-red-500 mb-4" size={40} />
              <h3 className="font-semibold text-lg mb-2">
                Structural Strength
              </h3>
              <p className="text-gray-600 text-sm">
                Ensures polywood materials have sufficient strength and
                durability for construction and furniture applications.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-blue-50 hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-blue-500 mb-4" size={40} />
              <h3 className="font-semibold text-lg mb-2">Quality Assurance</h3>
              <p className="text-gray-600 text-sm">
                Verifies bonding quality, moisture resistance and dimensional
                stability according to testing standards.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-green-50 hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-green-600 mb-4" size={40} />
              <h3 className="font-semibold text-lg mb-2">
                Long-Term Durability
              </h3>
              <p className="text-gray-600 text-sm">
                Helps manufacturers and builders ensure polywood products
                perform reliably over long periods of use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POLYWOOD TESTING PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Our Polywood Testing Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <ClipboardCheck className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Sample Collection</h3>
              <p className="text-sm text-gray-600">
                Polywood samples are collected and registered according to
                standardized laboratory procedures.
              </p>
            </div>

            <div>
              <Beaker className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Laboratory Testing</h3>
              <p className="text-sm text-gray-600">
                Mechanical strength, bonding quality and moisture resistance
                tests are performed.
              </p>
            </div>

            <div>
              <CheckCircle className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Result Evaluation</h3>
              <p className="text-sm text-gray-600">
                Test data is carefully evaluated according to national and
                international quality standards.
              </p>
            </div>

            <div>
              <ShieldCheck className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Certified Report</h3>
              <p className="text-sm text-gray-600">
                Clients receive detailed laboratory reports with verified
                testing results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-gray-900 to-blue-900 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Professional Polywood Testing?
          </h2>

          <p className="text-gray-300 mb-8">
            Contact our laboratory experts to schedule polywood testing and
            receive certified laboratory reports.
          </p>

          <Link
            href="/contact-us"
            className="px-8 py-3 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition"
          >
            Contact Laboratory
          </Link>
        </div>
      </section>
    </main>
  );
};

export default page;
