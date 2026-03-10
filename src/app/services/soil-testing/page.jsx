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
    title: "Soil Classification Test",
    description:
      "Determines soil type and classification based on grain size distribution and plasticity characteristics.",
    link: "#",
  },
  {
    title: "Atterberg Limits Test",
    description:
      "Measures liquid limit, plastic limit, and shrinkage limit to evaluate soil consistency and behavior.",
    link: "#",
  },
  {
    title: "Compaction Test (Proctor Test)",
    description:
      "Determines optimum moisture content and maximum dry density for construction suitability.",
    link: "#",
  },
  {
    title: "California Bearing Ratio (CBR) Test",
    description:
      "Evaluates soil strength for road and pavement construction applications.",
    link: "#",
  },
  {
    title: "Shear Strength Test",
    description:
      "Assesses soil resistance to shear stress to ensure foundation stability.",
    link: "#",
  },
  {
    title: "Permeability Test",
    description:
      "Measures water flow through soil to evaluate drainage and seepage characteristics.",
    link: "#",
  },
];

const page = () => {
  return (
    <main className="bg-gray-50">
      {/* HERO */}
      <section className="relative h-[35vh] flex items-center justify-center">
        <Image
          src="/Soil Testing.jpg"
          alt="Soil Testing"
          fill
          className="object-cover brightness-50"
          priority
        />

        <div className="relative text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Soil Testing Services
          </h1>

          <p className="text-lg text-gray-200">
            Certified laboratory testing to ensure soil strength, stability, and
            suitability for construction and infrastructure projects.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80">
            <Image
              src="/Soil Testing.jpg"
              alt="Soil Testing Laboratory"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Professional Soil Testing Laboratory
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Our laboratory provides professional soil testing services to
              evaluate soil strength, composition, and engineering properties
              required for construction and infrastructure development.
            </p>

            <p className="text-gray-600 leading-relaxed">
              These tests help engineers determine soil stability, load-bearing
              capacity, and drainage characteristics to ensure safe and durable
              construction projects.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Our Soil Testing Services
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 cursor-pointer">
          <h2 className="text-3xl font-bold text-center mb-14">
            Why Soil Testing is Important
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-8 rounded-xl bg-red-50 hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-red-500 mb-4" size={40} />
              <h3 className="font-semibold text-lg mb-2">
                Foundation Stability
              </h3>
              <p className="text-gray-600 text-sm">
                Soil testing helps engineers design strong foundations by
                determining soil strength and load-bearing capacity.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-blue-50 hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-blue-500 mb-4" size={40} />
              <h3 className="font-semibold text-lg mb-2">
                Construction Safety
              </h3>
              <p className="text-gray-600 text-sm">
                Proper soil analysis reduces the risk of structural failure,
                cracks, and settlement issues in buildings.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-green-50 hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-green-600 mb-4" size={40} />
              <h3 className="font-semibold text-lg mb-2">
                Long-Term Durability
              </h3>
              <p className="text-gray-600 text-sm">
                Soil testing ensures structures remain stable and durable over
                time under varying environmental conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTING PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Our Soil Testing Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <ClipboardCheck className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Sample Collection</h3>
              <p className="text-sm text-gray-600">
                Collection of soil samples from the project site for analysis.
              </p>
            </div>

            <div>
              <Beaker className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Laboratory Testing</h3>
              <p className="text-sm text-gray-600">
                Conduct physical and mechanical property testing as per
                standards.
              </p>
            </div>

            <div>
              <CheckCircle className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Result Evaluation</h3>
              <p className="text-sm text-gray-600">
                Evaluate results to determine soil suitability for foundations.
              </p>
            </div>

            <div>
              <ShieldCheck className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Certified Report</h3>
              <p className="text-sm text-gray-600">
                Provide detailed and certified soil testing reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-gray-900 to-blue-900 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Professional Soil Testing Services?
          </h2>

          <p className="text-gray-300 mb-8">
            Contact our laboratory experts to schedule soil testing and receive
            certified laboratory reports.
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
