import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Load Bearing Test",
    description:
      "Evaluates the load capacity of hinges to ensure strength and durability under operational stress.",
  },
  {
    title: "Cycle Testing",
    description:
      "Measures hinge performance through repeated opening and closing cycles to determine lifespan.",
  },
  {
    title: "Corrosion Resistance Test",
    description:
      "Analyzes resistance to rust and environmental exposure for long-term reliability.",
  },
  {
    title: "Salt Spray Test",
    description:
      "Tests hinge resistance against corrosion in high-humidity and saline conditions.",
  },
  {
    title: "Material Composition Analysis",
    description:
      "Verifies the quality and composition of metal alloys used in hinge manufacturing.",
  },
  {
    title: "Torque & Alignment Testing",
    description:
      "Ensures proper movement, alignment, and torque performance of hinge mechanisms.",
  },
];

const page = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-[35vh] flex items-center justify-center">
        <Image
          src="/Hinges Testing.jpg"
          alt="Hinges Testing"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hinges Testing Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            Certified laboratory testing to ensure durability, corrosion resistance,
            and performance of hinge components.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Hinges Testing Services
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
              <h4 className="font-semibold mb-2">Sample Inspection</h4>
              <p className="text-gray-600 text-sm">
                Receive and inspect hinge samples for testing.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">02</div>
              <h4 className="font-semibold mb-2">Mechanical Testing</h4>
              <p className="text-gray-600 text-sm">
                Conduct load, torque, and cycle performance testing.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">03</div>
              <h4 className="font-semibold mb-2">Environmental Testing</h4>
              <p className="text-gray-600 text-sm">
                Perform corrosion and salt spray resistance analysis.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">04</div>
              <h4 className="font-semibold mb-2">Certified Report</h4>
              <p className="text-gray-600 text-sm">
                Deliver detailed laboratory-certified testing reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-400 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Need Professional Hinges Testing?
        </h2>
        <p className="mb-6">
          Contact our experts today for certified hinges testing services.
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