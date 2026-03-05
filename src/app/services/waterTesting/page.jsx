import Image from "next/image";
import Link from "next/link";
import {
  Droplet,
  Beaker,
  ShieldCheck,
  Factory,
  CheckCircle,
  ClipboardCheck,
} from "lucide-react";

export const metadata = {
  title: "Water Testing Services | Minu Quality Testing Laboratory",
  description:
    "Professional water testing services including pH, TDS, hardness and chemical analysis ensuring water quality, safety and regulatory compliance.",
};

const waterServices = [
  {
    title: "pH Water Testing",
    description:
      "Measurement of acidity and alkalinity level of water to ensure safe usage.",
    image: "/phTesting.png",
    link: "/services/waterTesting/phTesting",
  },
  {
    title: "TDS Water Testing",
    description:
      "Testing total dissolved solids present in water for quality evaluation.",
    image: "/tdsTesting.jpg",
    link: "/services/waterTesting/tdsTesting",
  },
];

export default function WaterTesting() {
  return (
    <main className="bg-white">

      {/* HERO SECTION */}
      <section className="bg-linear-to-r from-gray-900 to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Water Testing Services
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Water testing is essential to ensure the safety, purity, and
            compliance of water for drinking, industrial usage, construction,
            and environmental applications. Our laboratory provides accurate
            and certified testing services using modern instruments and
            scientific analysis methods.
          </p>

        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-14">
            Our Water Testing Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {waterServices.map((service, index) => (
              <Link href={service.link} key={index}>

                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">

                  <div className="relative h-52">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover hover:scale-110 transition duration-500"
                    />
                  </div>

                  <div className="p-6">

                    <h3 className="text-xl font-bold mb-2">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>

                  </div>

                </div>

              </Link>
            ))}

          </div>

        </div>

      </section>

      {/* WHY WATER TESTING */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-14">
            Why Water Testing is Important
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div className="p-8 rounded-xl bg-blue-50">
              <Droplet className="mx-auto text-blue-600 mb-4" size={40}/>
              <h3 className="font-semibold text-lg mb-2">
                Safe Drinking Water
              </h3>
              <p className="text-gray-600 text-sm">
                Testing ensures water is free from harmful contaminants,
                chemicals, and microorganisms that may affect human health.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-green-50">
              <ShieldCheck className="mx-auto text-green-600 mb-4" size={40}/>
              <h3 className="font-semibold text-lg mb-2">
                Regulatory Compliance
              </h3>
              <p className="text-gray-600 text-sm">
                Industries and laboratories must comply with national and
                international water quality standards.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-yellow-50">
              <Factory className="mx-auto text-yellow-600 mb-4" size={40}/>
              <h3 className="font-semibold text-lg mb-2">
                Industrial Applications
              </h3>
              <p className="text-gray-600 text-sm">
                Water testing ensures water quality for manufacturing,
                construction, cooling systems, and industrial processes.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* TESTING PROCESS */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-14">
            Our Water Testing Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div className="p-6">
              <ClipboardCheck className="mx-auto text-blue-600 mb-4" size={36}/>
              <h3 className="font-semibold mb-2">Sample Collection</h3>
              <p className="text-sm text-gray-600">
                Water samples are collected carefully following proper
                laboratory sampling procedures.
              </p>
            </div>

            <div className="p-6">
              <Beaker className="mx-auto text-blue-600 mb-4" size={36}/>
              <h3 className="font-semibold mb-2">Laboratory Analysis</h3>
              <p className="text-sm text-gray-600">
                Samples are tested using advanced laboratory equipment and
                standardized testing methods.
              </p>
            </div>

            <div className="p-6">
              <CheckCircle className="mx-auto text-blue-600 mb-4" size={36}/>
              <h3 className="font-semibold mb-2">Quality Verification</h3>
              <p className="text-sm text-gray-600">
                Test results are verified by experienced laboratory experts
                ensuring accuracy.
              </p>
            </div>

            <div className="p-6">
              <ShieldCheck className="mx-auto text-blue-600 mb-4" size={36}/>
              <h3 className="font-semibold mb-2">Report Delivery</h3>
              <p className="text-sm text-gray-600">
                Detailed laboratory reports are delivered to clients with
                quality assessment results.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* INDUSTRIES */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-14">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div className="bg-gray-50 p-8 rounded-xl">
              Construction & Infrastructure
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              Food & Beverage Industry
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              Pharmaceutical Industry
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              Environmental Monitoring
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              Manufacturing Plants
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              Municipal Water Supply
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-gray-900 to-blue-900 py-20 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-white mb-4">
            Need Professional Water Testing?
          </h2>

          <p className="text-gray-300 mb-8">
            Contact our laboratory experts to schedule water testing and
            receive accurate laboratory reports for your project or industry.
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