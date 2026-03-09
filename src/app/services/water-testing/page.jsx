import Image from "next/image";
import Link from "next/link";
import {
  Droplet,
  Beaker,
  ShieldCheck,
  Factory,
  CheckCircle,
  ClipboardCheck,
  Waves,
  FlaskConical,
} from "lucide-react";

export const metadata = {
  title: "Water Testing Services | Minu Quality Testing Laboratory",
  description:
    "Professional water testing services including pH, TDS, hardness and chemical analysis ensuring water quality and safety.",
};

const waterServices = [
  {
    title: "pH Water Testing",
    description:
      "Measurement of acidity and alkalinity level of water to ensure safe usage.",
    icon: Droplet,
    link: "/services/water-testing/ph-testing",
  },
  {
    title: "TDS Water Testing",
    description:
      "Testing total dissolved solids present in water for quality evaluation.",
    icon: Waves,
    link: "/services/water-testing/tds-testing",
  },
];

export default function WaterTesting() {
  return (
    <main className="bg-gray-50">
      {/* HERO SECTION */}
      <section className="relative h-[35vh] flex items-center justify-center">
        <Image
          src="/waterTesting1.jpg"
          alt="Water Testing Laboratory"
          fill
          className="object-cover brightness-50"
          priority
        />

        <div className="relative text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Water Testing Services
          </h1>

          <p className="text-lg text-gray-200">
            Certified laboratory testing for drinking water, industrial water,
            and environmental monitoring ensuring safety, purity and regulatory
            compliance.
          </p>
        </div>
      </section>

      {/* ABOUT WATER TESTING */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80">
            <Image
              src="/waterTesting1.jpg"
              alt="Water laboratory testing"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Professional Water Quality Testing
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Water quality testing is essential for maintaining safety, health,
              and compliance with environmental standards. Our laboratory
              performs advanced testing to detect chemical, physical, and
              biological contaminants.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We provide certified reports for industries, construction
              companies, environmental agencies, and water treatment plants. Our
              modern laboratory equipment ensures accurate and reliable results.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Our Water Testing Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {waterServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <Link href={service.link} key={index}>
                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition duration-300 group">
                    {/* ICON */}
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50 mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
                      <Icon size={26} />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-xl font-semibold mb-3">
                      {service.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                      {service.description}
                    </p>

                    {/* READ MORE */}
                    <span className="text-sm font-semibold text-black group-hover:text-red-600 transition">
                      Read More →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY WATER TESTING */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 cursor-pointer">
          <h2 className="text-3xl font-bold text-center mb-14">
            Why Water Testing is Important
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-8 rounded-xl bg-blue-50 hover:shadow-lg transition">
              <Droplet className="mx-auto text-blue-600 mb-4" size={40} />
              <h3 className="font-semibold text-lg mb-2">
                Safe Drinking Water
              </h3>
              <p className="text-gray-600 text-sm">
                Detects harmful contaminants and ensures safe drinking water.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-green-50 hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-green-600 mb-4" size={40} />
              <h3 className="font-semibold text-lg mb-2">
                Regulatory Compliance
              </h3>
              <p className="text-gray-600 text-sm">
                Helps industries comply with national and international
                standards.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-yellow-50 hover:shadow-lg transition">
              <Factory className="mx-auto text-yellow-600 mb-4" size={40} />
              <h3 className="font-semibold text-lg mb-2">
                Industrial Applications
              </h3>
              <p className="text-gray-600 text-sm">
                Ensures water quality for manufacturing and industrial
                processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTING PROCESS */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Our Water Testing Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <ClipboardCheck
                className="mx-auto text-blue-600 mb-4"
                size={36}
              />
              <h3 className="font-semibold mb-2">Sample Collection</h3>
              <p className="text-sm text-gray-600">
                Water samples are collected following proper procedures.
              </p>
            </div>

            <div>
              <Beaker className="mx-auto text-blue-600 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Laboratory Analysis</h3>
              <p className="text-sm text-gray-600">
                Samples tested using modern laboratory instruments.
              </p>
            </div>

            <div>
              <CheckCircle className="mx-auto text-blue-600 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Result Verification</h3>
              <p className="text-sm text-gray-600">
                Test results verified by experienced laboratory experts.
              </p>
            </div>

            <div>
              <ShieldCheck className="mx-auto text-blue-600 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Report Delivery</h3>
              <p className="text-sm text-gray-600">
                Clients receive certified testing reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-gray-900 to-blue-900 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Professional Water Testing Services?
          </h2>

          <p className="text-gray-300 mb-8">
            Contact our laboratory experts to schedule water testing and receive
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
}
