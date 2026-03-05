import Image from "next/image";
import Link from "next/link";
import {
  Beaker,
  Droplets,
  CheckCircle,
  FlaskConical,
  ShieldCheck,
  FileText,
} from "lucide-react";

export const metadata = {
  title: "TDS Water Testing Services | Minu Quality Testing Laboratory",
  description:
    "Professional laboratory TDS water testing services to measure total dissolved solids in water ensuring quality and safety standards.",
};

export default function TdsTesting() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="bg-linear-to-r from-blue-700 to-cyan-500 py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              TDS Water Testing Services
            </h1>

            <p className="text-blue-100 text-lg mb-6">
              Our laboratory provides accurate TDS testing to measure the
              concentration of dissolved substances in water. Monitoring TDS
              levels helps ensure safe drinking water and proper industrial
              water quality.
            </p>

            <Link
              href="/contact-us"
              className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
            >
              Request Testing
            </Link>
          </div>

          <div className="relative h-80">
            <Image
              src="/tdsTesting.jpg"
              alt="TDS Water Testing Laboratory"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* ABOUT TDS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14">

          <div className="relative h-87.5">
            <Image
              src="/tdsTesting.jpg"
              alt="Water laboratory testing"
              fill
              className="object-cover rounded-xl shadow"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What is TDS Water Testing?
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Total Dissolved Solids (TDS) testing measures the combined
              concentration of dissolved substances such as minerals, salts,
              metals, and organic matter present in water.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Monitoring TDS levels helps evaluate water purity and determine
              whether the water is suitable for drinking, industrial use,
              agriculture, and environmental safety.
            </p>
          </div>

        </div>
      </section>

      {/* IMPORTANCE */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Importance of TDS Testing
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-blue-50 p-6 rounded-xl text-center shadow">
              <Droplets className="mx-auto text-blue-600 mb-3" size={40} />
              <h3 className="font-semibold mb-2">Water Purity</h3>
              <p className="text-gray-600 text-sm">
                Determines overall water quality and purity.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl text-center shadow">
              <ShieldCheck className="mx-auto text-green-600 mb-3" size={40} />
              <h3 className="font-semibold mb-2">Health Safety</h3>
              <p className="text-gray-600 text-sm">
                Ensures drinking water is safe for consumption.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-xl text-center shadow">
              <Beaker className="mx-auto text-yellow-600 mb-3" size={40} />
              <h3 className="font-semibold mb-2">Industrial Use</h3>
              <p className="text-gray-600 text-sm">
                Maintains proper water quality for industrial processes.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl text-center shadow">
              <CheckCircle className="mx-auto text-purple-600 mb-3" size={40} />
              <h3 className="font-semibold mb-2">Environmental Safety</h3>
              <p className="text-gray-600 text-sm">
                Protects aquatic ecosystems and groundwater quality.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* TDS LEVELS */}
      <section className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Understanding TDS Levels
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-green-50 border border-green-200 p-8 rounded-xl shadow">
              <h3 className="text-green-600 font-semibold mb-3">
                Low TDS (0–150 mg/L)
              </h3>
              <p className="text-gray-600">
                Indicates highly purified water often used in laboratories and
                industrial applications.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-8 rounded-xl shadow">
              <h3 className="text-blue-600 font-semibold mb-3">
                Moderate TDS (150–500 mg/L)
              </h3>
              <p className="text-gray-600">
                Considered acceptable for drinking water according to many
                water quality standards.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 p-8 rounded-xl shadow">
              <h3 className="text-red-600 font-semibold mb-3">
                High TDS (500+ mg/L)
              </h3>
              <p className="text-gray-600">
                High mineral content may affect taste and could require water
                treatment before consumption.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Our Testing Process
          </h2>

          <div className="grid md:grid-cols-4 gap-10 text-center">

            <div>
              <FlaskConical className="mx-auto text-blue-600 mb-3" size={40} />
              <h3 className="font-semibold mb-2">Sample Collection</h3>
              <p className="text-gray-600 text-sm">
                Proper water sampling to avoid contamination.
              </p>
            </div>

            <div>
              <Beaker className="mx-auto text-blue-600 mb-3" size={40} />
              <h3 className="font-semibold mb-2">Laboratory Analysis</h3>
              <p className="text-gray-600 text-sm">
                Digital TDS meters ensure precise measurement.
              </p>
            </div>

            <div>
              <CheckCircle className="mx-auto text-blue-600 mb-3" size={40} />
              <h3 className="font-semibold mb-2">Verification</h3>
              <p className="text-gray-600 text-sm">
                Results verified using calibrated instruments.
              </p>
            </div>

            <div>
              <FileText className="mx-auto text-blue-600 mb-3" size={40} />
              <h3 className="font-semibold mb-2">Report Delivery</h3>
              <p className="text-gray-600 text-sm">
                Clients receive detailed laboratory testing reports.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-gray-900 to-blue-900 py-20 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-white mb-4">
            Need Professional TDS Water Testing?
          </h2>

          <p className="text-gray-300 mb-8">
            Contact our laboratory today to schedule water testing and receive
            reliable laboratory analysis reports.
          </p>

          <Link
            href="/contact-us"
            className="px-8 py-3 bg-red-400 text-white font-semibold rounded-lg shadow hover:bg-red-500 transition"
          >
            Contact Laboratory
          </Link>

        </div>

      </section>

    </main>
  );
}