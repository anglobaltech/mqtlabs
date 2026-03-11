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

export const metadata = {
  title:
    "Aggregates Testing Laboratory | Minu Quality Testing Laboratory Pvt. Ltd.",
  description:
    "Certified aggregates testing laboratory offering sieve analysis, aggregate crushing value test, impact value test, flakiness index, elongation index, and water absorption testing at Minu Quality Testing Laboratory Pvt. Ltd. serving Delhi NCR, Noida, and Greater Noida.",
  keywords:
    "Aggregates Testing Laboratory, Aggregate Crushing Value Test, Impact Value Test, Sieve Analysis, Construction Material Testing, Aggregate Testing Lab Delhi NCR, Minu Quality Testing Laboratory",
};

const services = [
  {
    title: "Sieve Analysis Test",
    description:
      "Determines particle size distribution of aggregates to ensure proper grading and mix design suitability.",
    link: "#",
  },
  {
    title: "Aggregate Crushing Value Test",
    description:
      "Evaluates the strength and resistance of aggregates under compressive loads.",
    link: "#",
  },
  {
    title: "Impact Value Test",
    description:
      "Measures aggregate toughness and resistance to sudden impact or shock.",
    link: "#",
  },
  {
    title: "Water Absorption Test",
    description:
      "Assesses the water absorption capacity to determine durability and quality.",
    link: "#",
  },
  {
    title: "Specific Gravity Test",
    description:
      "Determines density and strength characteristics of aggregates used in construction.",
    link: "#",
  },
  {
    title: "Flakiness & Elongation Index Test",
    description:
      "Identifies particle shape characteristics affecting workability and strength.",
    link: "#",
  },
];

const page = () => {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative h-[35vh] flex items-center justify-center">
        <Image
          src="/Aggregates Testing.jpg"
          alt="Aggregates Testing"
          fill
          className="object-cover brightness-50"
        />

        <div className="relative text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aggregates Testing Services
          </h1>

          <p className="text-lg text-gray-200">
            Professional laboratory testing for aggregates to evaluate grading,
            strength, durability, and suitability for construction projects.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="relative h-80 w-">
            <Image
              src="/Aggregates Testing.jpg"
              alt="Aggregates Testing Laboratory"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Professional Aggregates Testing Laboratory
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Our laboratory provides reliable aggregates testing services to
              evaluate particle size distribution, strength, and durability of
              aggregates used in construction.
            </p>

            <p className="text-gray-600 leading-relaxed">
              These tests ensure aggregates meet required construction standards
              and contribute to the strength, stability, and long-term
              performance of concrete structures.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-14">
            Our Aggregates Testing Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link href={service.link} key={index}>
                <div className="group bg-white border border-gray-200 rounded-xl p-7 hover:shadow-xl hover:-translate-y-1 transition duration-300">

                  <ShieldCheck
                    size={34}
                    className="text-red-500 mb-4 transition group-hover:scale-110"
                  />

                  <h3 className="text-lg font-semibold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>

                  {/* <span className="flex items-center gap-2 text-black font-medium text-sm group-hover:text-red-500 transition">
                    Read More
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition"
                    />
                  </span> */}

                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* WHY AGGREGATES TESTING */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 cursor-pointer">

          <h2 className="text-3xl font-bold text-center mb-14">
            Why Aggregates Testing is Important
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div className="p-8 rounded-xl bg-red-50 hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-red-500 mb-4" size={40} />
              <h3 className="font-semibold text-lg mb-2">Structural Strength</h3>
              <p className="text-gray-600 text-sm">
                Ensures aggregates provide the required strength for concrete
                structures and construction stability.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-blue-50 hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-blue-500 mb-4" size={40} />
              <h3 className="font-semibold text-lg mb-2">Proper Grading</h3>
              <p className="text-gray-600 text-sm">
                Verifies correct particle size distribution for effective mix
                design and workability.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-green-50 hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-green-600 mb-4" size={40} />
              <h3 className="font-semibold text-lg mb-2">Durability</h3>
              <p className="text-gray-600 text-sm">
                Ensures aggregates resist weathering, water absorption, and
                mechanical stress over time.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-14">
            Our Aggregates Testing Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <ClipboardCheck className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Sample Collection</h3>
              <p className="text-sm text-gray-600">
                Aggregate samples are collected and registered for laboratory testing.
              </p>
            </div>

            <div>
              <Beaker className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Laboratory Testing</h3>
              <p className="text-sm text-gray-600">
                Mechanical and physical tests are performed using modern equipment.
              </p>
            </div>

            <div>
              <CheckCircle className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Result Evaluation</h3>
              <p className="text-sm text-gray-600">
                Test data is analyzed according to construction standards.
              </p>
            </div>

            <div>
              <ShieldCheck className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Certified Report</h3>
              <p className="text-sm text-gray-600">
                Clients receive detailed certified laboratory test reports.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-gray-900 to-blue-900 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Professional Aggregates Testing Services?
          </h2>

          <p className="text-gray-300 mb-8">
            Contact our laboratory experts to schedule aggregates testing and
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