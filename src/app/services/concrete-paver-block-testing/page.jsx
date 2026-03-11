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
    "Concrete Paver Block Testing Labaratory | Minu Quality Testing Laboratory",
  description:
    "Certified Concrete Paver Block Testing laboratory offering cement testing, aggregate testing, pigment testing, compressive strength, abrasion resistance, flexural strength, and water absorption tests for construction materials in Delhi NCR, Noida, and Greater Noida.",
};

const services = [
  {
    title: "Cement Testing",
    description:
      "Evaluates cement quality used in concrete paver blocks to ensure proper bonding strength and durability.",
    link: "#",
  },
  {
    title: "Mineral & Chemical Admixture Testing",
    description:
      "Analyzes admixtures used in concrete paver block production to verify performance and compatibility.",
    link: "#",
  },
  {
    title: "Coarse and Fine Aggregate Testing",
    description:
      "Tests aggregates used in concrete paver blocks for grading, strength, and quality compliance.",
    link: "#",
  },
  {
    title: "Pigment Testing",
    description:
      "Evaluates pigments used for coloring concrete paver blocks to ensure durability and color stability.",
    link: "#",
  },
  {
    title: "General Quality Testing",
    description:
      "Assesses overall manufacturing quality and compliance with construction standards.",
    link: "#",
  },
  {
    title: "Visual Inspection",
    description:
      "Checks surface defects such as cracks, chips, irregular shapes, and surface imperfections.",
    link: "#",
  },
  {
    title: "Colour and Texture Testing",
    description:
      "Evaluates surface colour consistency and texture quality of concrete paver blocks.",
    link: "#",
  },
  {
    title: "Dimension and Tolerance Testing",
    description:
      "Ensures accurate size, shape, and dimensional tolerances as per standard specifications.",
    link: "#",
  },
  {
    title: "Thickness of Wearing Layer",
    description:
      "Measures the thickness of the wearing layer to ensure durability under traffic loads.",
    link: "#",
  },
  {
    title: "Water Absorption Test",
    description:
      "Determines the water absorption rate which affects durability and resistance to weathering.",
    link: "#",
  },
  {
    title: "Compressive & Tensile Splitting Strength",
    description:
      "Measures compressive and tensile splitting strength to determine structural performance.",
    link: "#",
  },
  {
    title: "Abrasion Resistance Test",
    description:
      "Evaluates resistance to wear caused by traffic, friction, and environmental conditions.",
    link: "#",
  },
  {
    title: "Flexural Strength / Breaking Load",
    description:
      "Measures bending strength and breaking load capacity of concrete paver blocks.",
    link: "#",
  },
  {
    title: "Freeze-Thaw Durability Test",
    description:
      "Assesses resistance to freeze-thaw cycles which can cause cracking and structural damage.",
    link: "#",
  },
];

const page = () => {
  return (
    <main className="bg-gray-50">
      {/* HERO */}
      <section className="relative h-[35vh] flex items-center justify-center">
        <Image
          src="/paverBlockTesting.jpg"
          alt="Concrete Paver Block Testing"
          fill
          className="object-cover brightness-50"
          priority
        />

        <div className="relative text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Concrete Paver Block Testing Services
          </h1>

          <p className="text-lg text-gray-200">
            Certified laboratory testing to evaluate strength, durability,
            dimensional accuracy, and quality of concrete paver blocks used in
            infrastructure and construction projects.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-11 gap-12 items-center">
          {/* Image - 45% */}
          <div className="relative h-80 md:col-span-5">
            <Image
              src="/paverBlockTesting.jpg"
              alt="Concrete Paver Block Testing Laboratory"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Content - 55% */}
          <div className="md:col-span-6">
            <h2 className="text-3xl font-bold mb-6">
              Professional Concrete Paver Block Testing Laboratory
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Our laboratory provides reliable concrete paver block testing
              services to evaluate the strength, durability, and performance of
              paver blocks used in construction and infrastructure projects.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              We conduct various tests including compressive strength testing,
              water absorption testing, abrasion resistance testing, and
              dimensional accuracy checks to ensure paver blocks meet required
              quality standards.
            </p>

            <p className="text-gray-600 leading-relaxed">
              These tests help ensure that concrete paver blocks are suitable
              for use in roads, pavements, parking areas, industrial flooring,
              and landscaping applications while maintaining long-term
              durability and structural stability.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Our Concrete Paver Block Testing Services
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
            Why Concrete Paver Block Testing is Important
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-8 rounded-xl bg-red-50 hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-red-500 mb-4" size={40} />
              <h3 className="font-semibold text-lg mb-2">
                Structural Strength
              </h3>
              <p className="text-gray-600 text-sm">
                Ensures concrete paver blocks have sufficient strength to
                withstand heavy loads and traffic conditions.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-blue-50 hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-blue-500 mb-4" size={40} />
              <h3 className="font-semibold text-lg mb-2">
                Durability & Wear Resistance
              </h3>
              <p className="text-gray-600 text-sm">
                Evaluates abrasion resistance and environmental durability for
                long-term performance.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-green-50 hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-green-600 mb-4" size={40} />
              <h3 className="font-semibold text-lg mb-2">Quality Assurance</h3>
              <p className="text-gray-600 text-sm">
                Verifies manufacturing quality, dimensional accuracy, and
                compliance with construction standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTING PROCESS */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Our Concrete Paver Block Testing Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <ClipboardCheck className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Sample Collection</h3>
              <p className="text-sm text-gray-600">
                Concrete Paver block samples are collected and registered
                according to laboratory procedures.
              </p>
            </div>

            <div>
              <Beaker className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Laboratory Testing</h3>
              <p className="text-sm text-gray-600">
                Strength, water absorption, abrasion resistance, and dimensional
                tests are conducted.
              </p>
            </div>

            <div>
              <CheckCircle className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Result Evaluation</h3>
              <p className="text-sm text-gray-600">
                Test results are analyzed according to standard specifications.
              </p>
            </div>

            <div>
              <ShieldCheck className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Certified Report</h3>
              <p className="text-sm text-gray-600">
                Detailed laboratory test reports are provided to clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-gray-900 to-blue-900 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Professional Concrete Paver Block Testing Services?
          </h2>

          <p className="text-gray-300 mb-8">
            Contact our laboratory experts to schedule concrete paver block
            testing and receive certified laboratory reports.
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
