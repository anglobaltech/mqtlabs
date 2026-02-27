import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Soil Classification Test",
    description:
      "Determines soil type and classification based on grain size distribution and plasticity characteristics.",
  },
  {
    title: "Atterberg Limits Test",
    description:
      "Measures liquid limit, plastic limit, and shrinkage limit to evaluate soil consistency and behavior.",
  },
  {
    title: "Compaction Test (Proctor Test)",
    description:
      "Determines optimum moisture content and maximum dry density for construction suitability.",
  },
  {
    title: "California Bearing Ratio (CBR) Test",
    description:
      "Evaluates soil strength for road and pavement construction applications.",
  },
  {
    title: "Shear Strength Test",
    description:
      "Assesses soil resistance to shear stress to ensure foundation stability.",
  },
  {
    title: "Permeability Test",
    description:
      "Measures water flow through soil to evaluate drainage and seepage characteristics.",
  },
];

const page = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-[35vh] flex items-center justify-center">
        <Image
          src="/Soil Testing.jpg"
          alt="Soil Testing"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Soil Testing Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            Certified laboratory testing to ensure soil strength, stability,
            and suitability for construction and infrastructure projects.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Soil Testing Services
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
                Collection of soil samples from the project site for analysis.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">02</div>
              <h4 className="font-semibold mb-2">Laboratory Testing</h4>
              <p className="text-gray-600 text-sm">
                Conduct physical and mechanical property testing as per standards.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">03</div>
              <h4 className="font-semibold mb-2">Analysis & Evaluation</h4>
              <p className="text-gray-600 text-sm">
                Evaluate results to determine soil suitability for foundations.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">04</div>
              <h4 className="font-semibold mb-2">Certified Report</h4>
              <p className="text-gray-600 text-sm">
                Provide detailed and certified soil testing reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-400 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Need Professional Soil Testing?
        </h2>
        <p className="mb-6">
          Contact our experts today for reliable and certified soil testing services.
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