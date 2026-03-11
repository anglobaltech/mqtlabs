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
    "Furniture Testing Laboratory | Minu Quality Testing Laboratory Pvt. Ltd.",
  description:
    "Certified furniture testing laboratory offering load testing, durability testing, stability testing, and quality inspection of wooden and metal furniture at Minu Quality Testing Laboratory Pvt. Ltd. serving Delhi NCR, Noida, and Greater Noida.",
  keywords:
    "Furniture Testing Laboratory, Furniture Load Test, Furniture Durability Testing, Wooden Furniture Testing, Furniture Stability Test, Furniture Testing Lab Delhi NCR, Minu Quality Testing Laboratory",
};

const services = [
  {
    title: "Load Bearing Test",
    description:
      "Evaluates the strength and load capacity of furniture structures to ensure durability and safety.",
    link: "#",
  },
  {
    title: "Stability Test",
    description:
      "Checks furniture balance and resistance to tipping under various conditions.",
    link: "#",
  },
  {
    title: "Impact Resistance Test",
    description:
      "Measures the ability of furniture to withstand sudden impacts and shocks.",
    link: "#",
  },
  {
    title: "Surface Finish Testing",
    description:
      "Analyzes coating quality, scratch resistance, and finish durability.",
    link: "#",
  },
  {
    title: "Joint Strength Testing",
    description:
      "Assesses the strength of joints and connections in furniture products.",
    link: "#",
  },
  {
    title: "Material Quality Inspection",
    description:
      "Verifies the quality of wood, metal, or composite materials used in furniture manufacturing.",
    link: "#",
  },
];

const page = () => {
  return (
    <main className="bg-gray-50">
      {/* HERO */}
      <section className="relative h-[35vh] flex items-center justify-center">
        <Image
          src="/Furniture Testing.jpg"
          alt="Furniture Testing"
          fill
          className="object-cover brightness-50"
          priority
        />

        <div className="relative text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Furniture Testing Services
          </h1>

          <p className="text-lg text-gray-200">
            Certified laboratory testing to ensure durability, strength, safety,
            and performance of furniture products.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80">
            <Image
              src="/Furniture Testing.jpg"
              alt="Furniture Testing Laboratory"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Professional Furniture Testing Laboratory
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Our laboratory provides professional furniture testing services to
              evaluate durability, structural strength, and safety performance
              of furniture products.
            </p>

            <p className="text-gray-600 leading-relaxed">
              These tests help manufacturers ensure furniture meets industry
              standards for load capacity, stability, and long-term durability
              in residential, commercial, and industrial environments.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Our Furniture Testing Services
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

      {/* WHY TESTING */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 cursor-pointer">
          <h2 className="text-3xl font-bold text-center mb-14">
            Why Furniture Testing is Important
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-8 rounded-xl bg-red-50 hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-red-500 mb-4" size={40} />
              <h3 className="font-semibold text-lg mb-2">
                Structural Strength
              </h3>
              <p className="text-gray-600 text-sm">
                Ensures furniture structures can safely withstand loads and
                daily usage without failure.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-blue-50 hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-blue-500 mb-4" size={40} />
              <h3 className="font-semibold text-lg mb-2">Safety & Stability</h3>
              <p className="text-gray-600 text-sm">
                Testing ensures furniture remains stable and prevents tipping or
                structural damage.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-green-50 hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-green-600 mb-4" size={40} />
              <h3 className="font-semibold text-lg mb-2">
                Long-Term Durability
              </h3>
              <p className="text-gray-600 text-sm">
                Evaluates materials, joints, and surface finishes to ensure
                long-lasting performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTING PROCESS */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Our Furniture Testing Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <ClipboardCheck className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Sample Inspection</h3>
              <p className="text-sm text-gray-600">
                Receive and inspect furniture samples for evaluation.
              </p>
            </div>

            <div>
              <Beaker className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Mechanical Testing</h3>
              <p className="text-sm text-gray-600">
                Conduct load, impact, and structural strength testing.
              </p>
            </div>

            <div>
              <CheckCircle className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Quality Evaluation</h3>
              <p className="text-sm text-gray-600">
                Analyze durability and safety compliance standards.
              </p>
            </div>

            <div>
              <ShieldCheck className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Certified Report</h3>
              <p className="text-sm text-gray-600">
                Deliver detailed laboratory-certified test reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-gray-900 to-blue-900 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Professional Furniture Testing Services?
          </h2>

          <p className="text-gray-300 mb-8">
            Contact our laboratory experts to schedule furniture testing and
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
