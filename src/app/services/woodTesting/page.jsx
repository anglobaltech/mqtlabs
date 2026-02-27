import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Moisture Content Testing",
    description:
      "Determines the moisture percentage in wood to ensure durability and prevent warping or cracking.",
  },
  {
    title: "Density & Strength Testing",
    description:
      "Measures density, bending strength, and compression resistance of wood samples.",
  },
  {
    title: "Adhesive Bond Testing",
    description:
      "Evaluates bonding strength in plywood, laminates, and engineered wood products.",
  },
  {
    title: "Termite & Decay Resistance",
    description:
      "Tests wood resistance against biological damage and pest attacks.",
  },
  {
    title: "Fire Resistance Testing",
    description:
      "Analyzes flame spread and fire performance of wood materials.",
  },
  {
    title: "Water Absorption Test",
    description:
      "Measures water absorption and swelling properties for durability analysis.",
  },
];

const page = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-[35vh] flex items-center justify-center">
        <Image
          src="/wood-testing-service.jpeg"
          alt="Wood Testing"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Wood Testing Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            Certified laboratory testing to ensure durability, strength,
            and industry compliance of wood and timber products.
          </p>
        </div>
      </section>

      {/* About Section
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-6">
          About Our Laboratory
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
          We provide advanced wood testing services following industry standards.
          Our laboratory ensures accurate analysis of structural integrity,
          moisture levels, density, bonding strength, and durability performance.
          Our goal is to support manufacturers, suppliers, and construction
          professionals in delivering high-quality wood products.
        </p>
      </section> */}

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-center m-15">
          Our Testing Services
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

      {/* Process Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Testing Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">01</div>
              <h4 className="font-semibold mb-2">Sample Collection</h4>
              <p className="text-gray-600 text-sm">
                Receive and document wood samples for evaluation.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">02</div>
              <h4 className="font-semibold mb-2">Laboratory Testing</h4>
              <p className="text-gray-600 text-sm">
                Perform mechanical and physical testing procedures.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">03</div>
              <h4 className="font-semibold mb-2">Quality Analysis</h4>
              <p className="text-gray-600 text-sm">
                Analyze results according to standard guidelines.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">04</div>
              <h4 className="font-semibold mb-2">Certified Report</h4>
              <p className="text-gray-600 text-sm">
                Deliver detailed and reliable testing reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-400 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Need Professional Wood Testing?
        </h2>
        <p className="mb-6">
          Contact our laboratory team for accurate and certified testing services.
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