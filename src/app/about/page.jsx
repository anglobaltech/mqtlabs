import {
  Factory,
  Target,
  ShieldCheck,
  Globe,
  CheckCircle,
  Award,
  Users,
  FlaskConical,
} from "lucide-react";

export const metadata = {
  title: "About Us | Minu Quality Testing Laboratory",
  description:
    "Learn about Minu Quality Testing Laboratory providing reliable testing services for construction and industrial materials with accuracy and certified testing procedures.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-linear-to-r from-gray-900 to-blue-900 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-6 mb-6">
            About Minu Quality Testing Laboratory Pvt. Ltd.
          </h1>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            We provide reliable and accurate testing solutions for construction,
            industrial, and manufacturing materials to ensure quality,
            durability, and compliance with industry standards.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Minu Quality Testing Laboratory is an independent material testing
              laboratory offering professional testing services for construction
              and industrial materials. Our goal is to help manufacturers,
              builders, and suppliers maintain product quality and ensure
              compliance with national and international standards.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our laboratory is equipped with modern testing equipment and
              experienced professionals who ensure accurate testing, transparent
              reporting, and dependable technical support for our clients.
            </p>
          </div>

          <div className="bg-gray-50 p-10 rounded-2xl shadow">
            <Factory className="w-12 h-12 text-red-500 mb-4" />

            <h3 className="text-xl font-semibold mb-3">Our Purpose</h3>

            <p className="text-gray-600 leading-relaxed">
              To provide reliable laboratory testing services that support
              industries in maintaining product quality, improving manufacturing
              consistency, and ensuring compliance with regulatory standards.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow">
            <FlaskConical className="mx-auto text-blue-600 mb-3" size={36} />
            <h3 className="text-3xl font-bold text-gray-900">9+</h3>
            <p className="text-gray-600">Testing Services</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <Users className="mx-auto text-blue-600 mb-3" size={36} />
            <h3 className="text-3xl font-bold text-gray-900">500+</h3>
            <p className="text-gray-600">Clients Served</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <Award className="mx-auto text-blue-600 mb-3" size={36} />
            <h3 className="text-3xl font-bold text-gray-900">100%</h3>
            <p className="text-gray-600">Accurate Reports</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <ShieldCheck className="mx-auto text-blue-600 mb-3" size={36} />
            <h3 className="text-3xl font-bold text-gray-900">ISO</h3>
            <p className="text-gray-600">Standard Procedures</p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our laboratory operates with strong principles of accuracy,
              quality assurance, and professional responsibility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <Target className="text-red-500 mb-4" size={40} />

              <h3 className="text-xl font-semibold mb-2">
                Accuracy & Reliability
              </h3>

              <p className="text-gray-600">
                Our testing procedures ensure precise and dependable laboratory
                results to support real-world industrial requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <ShieldCheck className="text-red-500 mb-4" size={40} />

              <h3 className="text-xl font-semibold mb-2">
                Quality & Compliance
              </h3>

              <p className="text-gray-600">
                We follow recognized quality systems and testing standards to
                ensure regulatory compliance and product reliability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <Globe className="text-red-500 mb-4" size={40} />

              <h3 className="text-xl font-semibold mb-2">
                Industry Responsibility
              </h3>

              <p className="text-gray-600">
                Our work supports responsible manufacturing by helping
                industries validate performance, safety, and durability of
                materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE TEST */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Materials We Test</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our laboratory provides testing services across multiple product
              categories used in construction and manufacturing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              "Wood Testing",
              "Plywood Testing",
              "Furniture Testing",
              "Water Testing",
              "Hinges Testing",
              "Cement Testing",
              "Soil Testing",
              "Aggregate Testing",
              "Concrete Paver Block Testing",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-6 bg-white rounded-xl shadow hover:shadow-md transition"
              >
                <CheckCircle className="text-green-500" />
                <p className="font-medium text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-gray-900 to-blue-900 py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Professional Testing Services?
          </h2>

          <p className="text-gray-300 mb-8">
            Contact our laboratory today to schedule testing and receive
            accurate laboratory analysis reports.
          </p>

          <a
            href="/contact-us"
            className="px-8 py-3 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition"
          >
            Contact Laboratory
          </a>
        </div>
      </section>
    </main>
  );
}
