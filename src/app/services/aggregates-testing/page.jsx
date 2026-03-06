import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Sieve Analysis Test",
    description:
      "Determines particle size distribution of aggregates to ensure proper grading and mix design suitability.",
  },
  {
    title: "Aggregate Crushing Value Test",
    description:
      "Evaluates the strength and resistance of aggregates under compressive loads.",
  },
  {
    title: "Impact Value Test",
    description:
      "Measures aggregate toughness and resistance to sudden impact or shock.",
  },
  {
    title: "Water Absorption Test",
    description:
      "Assesses the water absorption capacity to determine durability and quality.",
  },
  {
    title: "Specific Gravity Test",
    description:
      "Determines density and strength characteristics of aggregates used in construction.",
  },
  {
    title: "Flakiness & Elongation Index Test",
    description:
      "Identifies particle shape characteristics affecting workability and strength.",
  },
];

const page = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-[35vh] flex items-center justify-center">
        <Image
          src="/Aggregates Testing.jpg"
          alt="Aggregates Testing"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aggregates Testing Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            Certified laboratory testing to ensure strength, durability,
            and quality of aggregates used in construction projects.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Aggregates Testing Services
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
                Collection and inspection of aggregate samples from site or supplier.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">02</div>
              <h4 className="font-semibold mb-2">Laboratory Testing</h4>
              <p className="text-gray-600 text-sm">
                Conduct mechanical and physical property testing as per standards.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">03</div>
              <h4 className="font-semibold mb-2">Quality Evaluation</h4>
              <p className="text-gray-600 text-sm">
                Analyze results to verify compliance with construction requirements.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">04</div>
              <h4 className="font-semibold mb-2">Certified Report</h4>
              <p className="text-gray-600 text-sm">
                Issue detailed laboratory-certified testing reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-400 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Need Professional Aggregates Testing?
        </h2>
        <p className="mb-6">
          Contact our experts today for reliable and certified aggregates testing services.
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