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
  title: "pH Water Testing Services | Minu Quality Testing Laboratory",
  description:
    "Professional laboratory pH water testing services for drinking water, industrial water, and environmental monitoring using advanced testing methods.",
};

export default function PhTesting() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="bg-linear-to-r from-gray-900 to-blue-900 py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              pH Water Testing Services
            </h1>

            <p className="text-blue-100 text-lg mb-6">
              Our laboratory provides accurate pH testing to determine the
              acidity or alkalinity of water. Maintaining proper pH levels is
              essential for drinking water safety, industrial operations, and
              environmental protection.
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
              alt="Water pH testing laboratory"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* ABOUT PH */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14">

          <div className="relative h-87.5">
            <Image
              src="/waterTesting1.jpg"
              alt="Water laboratory testing"
              fill
              className="object-cover rounded-xl shadow"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What is pH Water Testing?
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              pH water testing measures the hydrogen ion concentration in water
              to determine whether it is acidic, neutral, or alkaline. The pH
              scale ranges from 0 to 14 where a value of 7 represents neutral
              water.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Monitoring pH levels helps prevent corrosion in pipelines,
              ensures drinking water safety, improves industrial process
              efficiency, and protects aquatic ecosystems.
            </p>
          </div>

        </div>
      </section>

      {/* IMPORTANCE */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Importance of pH Testing
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-blue-50 p-6 rounded-xl text-center shadow">
              <Droplets className="mx-auto text-blue-600 mb-3" size={40} />
              <h3 className="font-semibold mb-2">Water Safety</h3>
              <p className="text-gray-600 text-sm">
                Ensures safe drinking water quality.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl text-center shadow">
              <ShieldCheck className="mx-auto text-green-600 mb-3" size={40} />
              <h3 className="font-semibold mb-2">Equipment Protection</h3>
              <p className="text-gray-600 text-sm">
                Prevents corrosion and scaling in pipelines.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-xl text-center shadow">
              <Beaker className="mx-auto text-yellow-600 mb-3" size={40} />
              <h3 className="font-semibold mb-2">Industrial Efficiency</h3>
              <p className="text-gray-600 text-sm">
                Maintains proper chemical balance in processes.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl text-center shadow">
              <CheckCircle className="mx-auto text-purple-600 mb-3" size={40} />
              <h3 className="font-semibold mb-2">Environmental Safety</h3>
              <p className="text-gray-600 text-sm">
                Protects aquatic ecosystems and groundwater.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* PH SCALE */}
      <section className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Understanding pH Levels
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-red-50 border border-red-200 p-8 rounded-xl shadow">
              <h3 className="text-red-600 font-semibold mb-3">
                Acidic Water (pH 0-6)
              </h3>
              <p className="text-gray-600">
                Acidic water can corrode pipes, damage plumbing systems, and
                affect water taste.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 p-8 rounded-xl shadow">
              <h3 className="text-green-600 font-semibold mb-3">
                Neutral Water (pH 7)
              </h3>
              <p className="text-gray-600">
                Neutral water is considered balanced and ideal for most
                drinking water applications.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-8 rounded-xl shadow">
              <h3 className="text-blue-600 font-semibold mb-3">
                Alkaline Water (pH 8-14)
              </h3>
              <p className="text-gray-600">
                Alkaline water contains higher mineral levels and may cause
                scaling in pipes.
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
                Digital pH meters ensure accurate readings.
              </p>
            </div>

            <div>
              <CheckCircle className="mx-auto text-blue-600 mb-3" size={40} />
              <h3 className="font-semibold mb-2">Verification</h3>
              <p className="text-gray-600 text-sm">
                Results verified using calibrated equipment.
              </p>
            </div>

            <div>
              <FileText className="mx-auto text-blue-600 mb-3" size={40} />
              <h3 className="font-semibold mb-2">Report Delivery</h3>
              <p className="text-gray-600 text-sm">
                Clients receive a detailed testing report.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-gray-900 to-blue-900 py-20 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-white mb-4">
            Need Professional pH Water Testing?
          </h2>

          <p className="text-gray-300 mb-8">
            Contact our laboratory today to schedule testing and receive
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