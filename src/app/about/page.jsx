import {
  Factory,
  Target,
  ShieldCheck,
  Globe,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "About Us | Minu Quality Testing Laboratory",
  description:
    "Learn more about Minu Quality Testing Laboratory, providing reliable testing services for wood, plywood, and textile products with a focus on quality, accuracy, and compliance.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            About Minu Quality Testing Laboratory
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Reliable testing services for wood, plywood, furniture, and textile
            products — focused on accuracy, compliance, and practical results.
          </p>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Who We Are
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Minu Quality Testing Laboratory is an independent testing
                laboratory based in India, providing testing and evaluation
                services for wooden products, plywood, furniture, and textile
                materials.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We work closely with manufacturers, suppliers, and exporters to
                help them verify product quality, improve consistency, and meet
                regulatory and customer requirements.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <Factory className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Our Purpose
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To support industry with reliable testing solutions that are
                practical, accurate, and aligned with recognized standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VALUES ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our work is guided by clear principles focused on quality,
              responsibility, and technical integrity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <Target className="w-10 h-10 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Accuracy & Reliability
              </h3>
              <p className="text-gray-600">
                We focus on precise testing methods that deliver repeatable and
                dependable results for real-world manufacturing needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <ShieldCheck className="w-10 h-10 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quality & Compliance
              </h3>
              <p className="text-gray-600">
                Our testing processes follow recognized quality systems and
                applicable national and international standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <Globe className="w-10 h-10 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Industry Responsibility
              </h3>
              <p className="text-gray-600">
                We support responsible manufacturing by helping clients verify
                product performance, safety, and consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE TEST ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Test
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our laboratory supports a wide range of testing requirements
              across multiple product categories.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              "Wood & Timber Products",
              "Plywood & Panel Boards",
              "Furniture Components",
              "Textile Fabrics",
              "Finished Textile Products",
              "Raw Materials & Samples",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-6 bg-gray-50 rounded-xl"
              >
                <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STANDARDS ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Standards & Compliance
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our testing activities are aligned with commonly accepted
                standards to ensure reliability and regulatory acceptance.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Depending on the product and requirement, testing may be carried
                out as per IS, ASTM, ISO, or other relevant specifications.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <ul className="space-y-3 text-gray-700">
                <li>• Indian Standards (IS)</li>
                <li>• ASTM Test Methods</li>
                <li>• ISO Testing Procedures</li>
                <li>• Customer-specific specifications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CLOSING SECTION ================= */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            A Trusted Partner in Quality Testing
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Minu Quality Testing Laboratory is committed to supporting your
            quality goals through accurate testing, clear reporting, and
            dependable technical support.
          </p>
        </div>
      </section>
    </main>
  );
}
