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
    "Wood Testing Laboratory | Minu Quality Testing Laboratory Pvt. Ltd.",
  description:
    "Certified wood testing laboratory offering timber testing, moisture content analysis, strength testing, durability testing, and quality inspection of wood products at Minu Quality Testing Laboratory Pvt. Ltd. serving Delhi NCR, Noida, and Greater Noida.",
  keywords:
    "Wood Testing Laboratory, Timber Testing, Moisture Content Test, Wood Strength Test, Timber Quality Testing, Wood Testing Lab Delhi NCR, Minu Quality Testing Laboratory",
};

const services = [
  {
    title: "Moisture Content Test",
    description:
      "Determines the amount of moisture present in wood which affects strength, durability, and dimensional stability.",
    link: "#",
  },
  {
    title: "Density Test",
    description:
      "Measures the density of wood which influences mechanical strength and load bearing capacity.",
    link: "#",
  },
  {
    title: "Compressive Strength Test",
    description:
      "Evaluates the ability of wood to resist compressive loads without failure.",
    link: "#",
  },
  {
    title: "Bending Strength Test",
    description:
      "Measures the resistance of wood against bending forces during structural use.",
    link: "#",
  },
  {
    title: "Shear Strength Test",
    description:
      "Determines the resistance of wood to shear forces acting parallel to the grain.",
    link: "#",
  },
  {
    title: "Termite Resistance Test",
    description:
      "Evaluates the resistance of wood against termite attacks and biological deterioration.",
    link: "#",
  },
  {
    title: "Water Absorption Test",
    description:
      "Determines the water absorption characteristics of wood affecting durability.",
    link: "#",
  },
  {
    title: "Decay Resistance Test",
    description:
      "Assesses wood resistance against fungal decay and environmental degradation.",
    link: "#",
  },
  {
    title: "Fire Resistance Test",
    description:
      "Evaluates the behavior of wood when exposed to fire or high temperature.",
    link: "#",
  },
];

const page = () => {
  return (
    <main className="bg-gray-50">
      {/* HERO */}
      <section className="relative h-[35vh] flex items-center justify-center">
        <Image
          src="/wood-testing-service.jpeg"
          alt="Wood Testing"
          fill
          className="object-cover brightness-50"
        />

        <div className="relative text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Wood Testing Services
          </h1>

          <p className="text-lg text-gray-200">
            Professional laboratory testing for wood materials to evaluate
            strength, durability, moisture content, and resistance properties.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80">
            <Image
              src="/wood-testing-service.jpeg"
              alt="Wood Testing Laboratory"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Professional Wood Testing Laboratory
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Our laboratory provides advanced wood testing services to evaluate
              mechanical properties, durability, and moisture content of timber
              and wood-based materials.
            </p>

            <p className="text-gray-600 leading-relaxed">
              These tests ensure quality, safety, and compliance with
              construction and industrial standards for wood products.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Our Wood Testing Services
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

      {/* WHY WOOD TESTING */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 cursor-pointer">
          <h2 className="text-3xl font-bold text-center mb-14">
            Why Wood Testing is Important
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-8 rounded-xl bg-red-50 hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-red-500 mb-4" size={40} />

              <h3 className="font-semibold text-lg mb-2">
                Structural Strength
              </h3>

              <p className="text-gray-600 text-sm">
                Wood testing ensures timber has the required strength for
                structural applications in buildings, furniture, and
                construction.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-blue-50 hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-blue-500 mb-4" size={40} />

              <h3 className="font-semibold text-lg mb-2">Moisture Control</h3>

              <p className="text-gray-600 text-sm">
                Evaluates moisture content to prevent shrinkage, swelling, and
                structural damage in wood products.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-green-50 hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-green-600 mb-4" size={40} />

              <h3 className="font-semibold text-lg mb-2">
                Durability & Safety
              </h3>

              <p className="text-gray-600 text-sm">
                Helps identify resistance against termites, decay, and
                environmental damage to ensure long-term durability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Our Wood Testing Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <ClipboardCheck className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Sample Collection</h3>
              <p className="text-sm text-gray-600">
                Wood samples are collected and documented before testing.
              </p>
            </div>

            <div>
              <Beaker className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Laboratory Testing</h3>
              <p className="text-sm text-gray-600">
                Mechanical and durability tests are conducted using modern
                equipment.
              </p>
            </div>

            <div>
              <CheckCircle className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Result Evaluation</h3>
              <p className="text-sm text-gray-600">
                Test results are analyzed to ensure compliance with standards.
              </p>
            </div>

            <div>
              <ShieldCheck className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Certified Report</h3>
              <p className="text-sm text-gray-600">
                A detailed certified laboratory report is provided to clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-gray-900 to-blue-900 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Professional Wood Testing Services?
          </h2>

          <p className="text-gray-300 mb-8">
            Contact our laboratory experts to schedule wood testing and receive
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
