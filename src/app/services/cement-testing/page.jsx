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
    title: "LFS Test",
    description:
      "Determines Lime Saturation Factor (LFS) to evaluate cement composition balance.",
    link: "#",
  },
  {
    title: "Alumina-Iron Ratio Test",
    description:
      "Measures the alumina to iron oxide ratio to ensure proper clinker composition.",
    link: "#",
  },
  {
    title: "Insoluble Residue Test",
    description:
      "Determines non-reactive material present in cement affecting its performance.",
    link: "#",
  },
  {
    title: "Magnesia Content Test",
    description:
      "Measures magnesium oxide content to prevent expansion and structural issues.",
    link: "#",
  },
  {
    title: "Loss on Ignition Test",
    description:
      "Evaluates weight loss during heating to determine moisture and volatile content.",
    link: "#",
  },
  {
    title: "Chloride & Alkali Content Test",
    description:
      "Checks chloride and alkali levels which may cause corrosion in reinforced concrete.",
    link: "#",
  },
  {
    title: "Fineness Test",
    description:
      "Determines particle size of cement which affects hydration rate and strength development.",
    link: "#",
  },
  {
    title: "Soundness Test",
    description:
      "Evaluates the ability of cement to retain its volume after setting.",
    link: "#",
  },
  {
    title: "Setting Time Test",
    description:
      "Measures initial and final setting time to ensure proper workability.",
    link: "#",
  },
  {
    title: "Compressive Strength Test",
    description:
      "Determines cement strength under compression for structural reliability.",
    link: "#",
  },
  {
    title: "Transverse Strength Test",
    description:
      "Evaluates bending strength of cement mortar specimens.",
    link: "#",
  },
];

const page = () => {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative h-[35vh] flex items-center justify-center">
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
            composition, physical properties, strength, and durability.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

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
              evaluate chemical composition, strength properties, and durability.
            </p>

            <p className="text-gray-600 leading-relaxed">
              These tests ensure cement quality, compliance with construction
              standards, and reliable performance in structural applications.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-14">
            Our Cement Testing Services
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

      {/* WHY CEMENT TESTING */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 cursor-pointer">

          <h2 className="text-3xl font-bold text-center mb-14">
            Why Cement Testing is Important
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div className="p-8 rounded-xl bg-red-50 hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-red-500 mb-4" size={40} />
              <h3 className="font-semibold text-lg mb-2">Structural Strength</h3>
              <p className="text-gray-600 text-sm">
                Ensures cement provides the required compressive strength for
                safe and reliable construction.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-blue-50 hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-blue-500 mb-4" size={40} />
              <h3 className="font-semibold text-lg mb-2">Quality Control</h3>
              <p className="text-gray-600 text-sm">
                Verifies chemical composition and manufacturing quality of cement.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-green-50 hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-green-600 mb-4" size={40} />
              <h3 className="font-semibold text-lg mb-2">Durability</h3>
              <p className="text-gray-600 text-sm">
                Ensures cement performs well against environmental conditions
                and long-term structural loads.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-10 bg-white">
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
            Need Professional Cement Testing Services?
          </h2>

          <p className="text-gray-300 mb-8">
            Contact our laboratory experts to schedule cement testing and receive certified reports.
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