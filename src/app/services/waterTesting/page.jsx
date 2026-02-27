import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "pH Level Testing",
    description:
      "Measurement of water acidity or alkalinity to determine suitability for drinking, construction, and industrial applications as per standard guidelines.",
  },
  {
    title: "Total Dissolved Solids (TDS) Testing",
    description:
      "Quantification of dissolved salts, minerals, and inorganic substances to assess overall water purity and quality compliance.",
  },
];

const page = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-[35vh] flex items-center justify-center">
        <Image
          src="/waterTesting.jpg"
          alt="Water Testing"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Water Testing Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            Certified laboratory water testing to ensure safety, purity,
            and regulatory compliance for domestic and industrial use.
          </p>
        </div>
      </section>

      {/* About Section
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-6">
          About Our Water Testing Laboratory
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
          Our advanced laboratory provides comprehensive water testing
          services following national and international standards. We
          analyze physical, chemical, and microbiological parameters to
          ensure water safety and quality. Our testing solutions support
          residential, commercial, and industrial clients in maintaining
          safe and compliant water systems.
        </p>
      </section> */}

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-center m-12">
          Our Water Testing Services
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
              <h4 className="font-semibold mb-2">Sample Collection</h4>
              <p className="text-gray-600 text-sm">
                Collect water samples following proper procedures.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">02</div>
              <h4 className="font-semibold mb-2">Laboratory Analysis</h4>
              <p className="text-gray-600 text-sm">
                Perform chemical and microbiological testing.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">03</div>
              <h4 className="font-semibold mb-2">Quality Evaluation</h4>
              <p className="text-gray-600 text-sm">
                Compare results with standard safety guidelines.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">04</div>
              <h4 className="font-semibold mb-2">Certified Report</h4>
              <p className="text-gray-600 text-sm">
                Provide detailed and certified laboratory reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-400 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Need Professional Water Testing?
        </h2>
        <p className="mb-6">
          Contact our laboratory experts for accurate and certified water testing services.
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