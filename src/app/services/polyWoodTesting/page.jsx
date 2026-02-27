import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Bonding Strength Test",
    description:
      "Evaluates glue bond performance between layers to ensure durability and structural stability of polywood materials.",
  },
  {
    title: "Moisture Content Testing",
    description:
      "Measures moisture levels in polywood to prevent swelling, warping, and dimensional instability.",
  },
  {
    title: "Bending & Load Test",
    description:
      "Determines flexural strength and load-bearing capacity of polywood sheets.",
  },
  {
    title: "Water Resistance Test",
    description:
      "Assesses resistance against water penetration and delamination under wet conditions.",
  },
  {
    title: "Thickness & Dimensional Accuracy",
    description:
      "Ensures uniform thickness and compliance with manufacturing standards.",
  },
  {
    title: "Termite & Borer Resistance",
    description:
      "Tests polywood resistance against termites and wood-boring insects.",
  },
];

const page = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-[35vh] flex items-center justify-center">
        <Image
          src="/polywood-testing-service.jpeg"
          alt="Polywood Testing"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Polywood Testing Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            Certified laboratory testing to ensure strength, bonding quality,
            durability, and industry compliance of polywood products.
          </p>
        </div>
      </section>

      {/* About Section
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-6">
          About Our Polywood Testing Laboratory
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
          Our advanced laboratory provides comprehensive polywood testing
          services following national and international standards. We evaluate
          bonding strength, moisture resistance, structural integrity, and
          dimensional accuracy to ensure high product performance. Our services
          support manufacturers, suppliers, and construction professionals in
          delivering safe and reliable polywood materials.
        </p>
      </section> */}

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-center m-12">
          Our Polywood Testing Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testing Process */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Testing Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">01</div>
              <h4 className="font-semibold mb-2">Sample Submission</h4>
              <p className="text-gray-600 text-sm">
                Receive polywood samples for laboratory evaluation.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">02</div>
              <h4 className="font-semibold mb-2">Mechanical Testing</h4>
              <p className="text-gray-600 text-sm">
                Perform strength, bonding, and durability analysis.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">03</div>
              <h4 className="font-semibold mb-2">Quality Evaluation</h4>
              <p className="text-gray-600 text-sm">
                Analyze results as per standard specifications.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">04</div>
              <h4 className="font-semibold mb-2">Certified Report</h4>
              <p className="text-gray-600 text-sm">
                Deliver detailed and authenticated testing reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-400 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Need Professional Polywood Testing?
        </h2>
        <p className="mb-6">
          Contact our experts today for certified polywood testing services.
        </p>
        <Link
          href="/contact-us"
          className="bg-white text-red-400 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Contact Us
        </Link>
      </section>

    </div>
  );
};

export default page;