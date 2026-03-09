import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  ClipboardCheck,
  Beaker,
  CheckCircle,
} from "lucide-react";

const chemicalTests = [
  {
    title: "LFS Test",
    description:
      "Determines Lime Saturation Factor (LFS) to evaluate cement composition balance.",
  },
  {
    title: "Alumina-Iron Ratio (AF Ratio)",
    description:
      "Measures the alumina to iron oxide ratio to ensure proper clinker composition.",
  },
  {
    title: "Insoluble Residue",
    description:
      "Determines non-reactive material present in cement affecting its performance.",
  },
  {
    title: "Magnesia Content",
    description:
      "Measures magnesium oxide content to prevent expansion and structural issues.",
  },
  {
    title: "Loss on Ignition",
    description:
      "Evaluates weight loss during heating to determine moisture and volatile content.",
  },
  {
    title: "Chloride & Alkali Content",
    description:
      "Checks chloride and alkali levels which may cause corrosion in reinforced concrete.",
  },
];

const physicalTests = [
  {
    title: "Fineness Test",
    description:
      "Determines particle size of cement which affects hydration rate and strength development.",
  },
  {
    title: "Soundness Test",
    description:
      "Evaluates the ability of cement to retain its volume after setting.",
  },
  {
    title: "Setting Time Test",
    description:
      "Measures initial and final setting time to ensure proper workability.",
  },
  {
    title: "Compressive Strength Test",
    description:
      "Determines cement strength under compression for structural reliability.",
  },
  {
    title: "Transverse Strength Test",
    description:
      "Evaluates bending strength of cement mortar specimens.",
  },
];

const page = () => {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative h-[45vh] flex items-center justify-center">
        <Image
          src="/Cement Testing.jpg"
          alt="Cement Testing"
          fill
          className="object-cover brightness-50"
        />

        <div className="relative text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cement Testing Services
          </h1>

          <p className="text-lg text-gray-200">
            Professional laboratory testing for cement to evaluate chemical
            composition, physical properties, strength, and durability according
            to industry standards.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <div className="relative h-80">
            <Image
              src="/Cement Testing.jpg"
              alt="Cement Testing Laboratory"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Professional Cement Testing Laboratory
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Our laboratory provides advanced cement testing services to
              evaluate chemical composition, strength properties, and
              durability.
            </p>

            <p className="text-gray-600 leading-relaxed">
              These tests ensure cement quality, compliance with construction
              standards, and reliable performance in structural and industrial
              applications.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Cement Testing Services
          </h2>

          {/* Chemical Tests */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Chemical Requirement Tests
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {chemicalTests.map((test, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-7 hover:shadow-xl transition"
                >
                  <ShieldCheck size={34} className="text-red-500 mb-4" />

                  <h4 className="text-lg font-semibold mb-3">
                    {test.title}
                  </h4>

                  <p className="text-gray-600 text-sm">
                    {test.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Physical Tests */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Physical Requirement Tests
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {physicalTests.map((test, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-7 hover:shadow-xl transition"
                >
                  <ShieldCheck size={34} className="text-red-500 mb-4" />

                  <h4 className="text-lg font-semibold mb-3">
                    {test.title}
                  </h4>

                  <p className="text-gray-600 text-sm">
                    {test.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* TESTING PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-14">
            Our Cement Testing Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <ClipboardCheck className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Sample Collection</h3>
              <p className="text-sm text-gray-600">
                Cement samples are collected and registered for laboratory testing.
              </p>
            </div>

            <div>
              <Beaker className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Laboratory Testing</h3>
              <p className="text-sm text-gray-600">
                Chemical and physical tests are conducted according to standards.
              </p>
            </div>

            <div>
              <CheckCircle className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Result Evaluation</h3>
              <p className="text-sm text-gray-600">
                Test data is analyzed to ensure compliance with quality standards.
              </p>
            </div>

            <div>
              <ShieldCheck className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Certified Report</h3>
              <p className="text-sm text-gray-600">
                Detailed certified laboratory reports are provided to clients.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-gray-900 to-blue-900 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Professional Cement Testing?
          </h2>

          <p className="text-gray-300 mb-8">
            Contact our laboratory experts to schedule cement testing and
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