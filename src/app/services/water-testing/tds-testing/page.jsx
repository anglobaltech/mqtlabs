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
    "Professional laboratory TDS water testing services to measure Total Dissolved Solids in drinking water, industrial water, and environmental monitoring.",
};

export default function TDSTesting() {
  return (
    <main className="bg-gray-50">
      {/* HERO */}
      <section className="bg-linear-to-r from-gray-900 to-blue-900 py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              TDS Water Testing Services
            </h1>

            <p className="text-blue-100 text-lg mb-6">
              Our laboratory provides accurate TDS testing to measure the
              concentration of dissolved minerals, salts, and substances in
              water. Monitoring TDS levels ensures water safety, taste quality,
              and suitability for industrial and domestic use.
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
              src="/waterTesting1.jpg"
              alt="TDS water testing laboratory"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ABOUT TDS */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-11 gap-12 items-center">
          {/* Image - 45% */}
          <div className="relative h-80 md:col-span-5">
            <Image
              src="/waterTesting1.jpg"
              alt="Water TDS laboratory testing"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Content - 55% */}
          <div className="md:col-span-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What is TDS Water Testing?
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Total Dissolved Solids (TDS) represents the combined concentration
              of inorganic salts, minerals, metals, and organic substances
              dissolved in water. These substances may include calcium,
              magnesium, sodium, potassium, chlorides, and sulfates.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Measuring TDS levels helps determine overall water quality and
              indicates whether water is suitable for drinking, industrial
              processes, or agricultural use.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Regular monitoring of TDS helps improve taste, prevent scaling and
              corrosion in pipelines and equipment, and ensures compliance with
              water quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* IMPORTANCE */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Importance of TDS Testing
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl text-center shadow">
              <Droplets className="mx-auto text-blue-600 mb-3" size={40} />
              <h3 className="font-semibold mb-2">Water Quality</h3>
              <p className="text-gray-600 text-sm">
                Ensures drinking water purity and taste.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl text-center shadow">
              <ShieldCheck className="mx-auto text-green-600 mb-3" size={40} />
              <h3 className="font-semibold mb-2">Health Safety</h3>
              <p className="text-gray-600 text-sm">
                Prevents harmful mineral concentrations.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-xl text-center shadow">
              <Beaker className="mx-auto text-yellow-600 mb-3" size={40} />
              <h3 className="font-semibold mb-2">Industrial Use</h3>
              <p className="text-gray-600 text-sm">
                Maintains proper water quality for processes.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl text-center shadow">
              <CheckCircle className="mx-auto text-purple-600 mb-3" size={40} />
              <h3 className="font-semibold mb-2">Equipment Protection</h3>
              <p className="text-gray-600 text-sm">
                Prevents scaling and damage in machinery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TDS LEVELS */}
      <section className="py-10 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Understanding TDS Levels
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 border border-green-200 p-8 rounded-xl shadow">
              <h3 className="text-green-600 font-semibold mb-3">
                Low TDS (50–150 ppm)
              </h3>
              <p className="text-gray-600">
                Considered excellent drinking water with balanced mineral
                content.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-xl shadow">
              <h3 className="text-yellow-600 font-semibold mb-3">
                Moderate TDS (150–300 ppm)
              </h3>
              <p className="text-gray-600">
                Acceptable for drinking and most household uses.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 p-8 rounded-xl shadow">
              <h3 className="text-red-600 font-semibold mb-3">
                High TDS (Above 500 ppm)
              </h3>
              <p className="text-gray-600">
                May affect taste and may require water treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Testing Process
          </h2>

          <div className="grid md:grid-cols-4 gap-10 text-center">
            <div>
              <FlaskConical className="mx-auto text-blue-600 mb-3" size={40} />
              <h3 className="font-semibold mb-2">Sample Collection</h3>
              <p className="text-gray-600 text-sm">
                Water samples collected using sterile containers.
              </p>
            </div>

            <div>
              <Beaker className="mx-auto text-blue-600 mb-3" size={40} />
              <h3 className="font-semibold mb-2">Laboratory Analysis</h3>
              <p className="text-gray-600 text-sm">
                Digital TDS meters provide precise readings.
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
                Detailed laboratory report provided to clients.
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
            Contact our laboratory today to schedule TDS testing and receive
            accurate laboratory analysis reports.
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
