import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  ClipboardCheck,
  Beaker,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title:
    "Hinges Testing Laboratory | Minu Quality Testing Laboratory Pvt. Ltd.",
  description:
    "Certified hinges testing laboratory offering durability tests, load capacity testing, corrosion resistance testing, and performance evaluation of door and furniture hinges at Minu Quality Testing Laboratory Pvt. Ltd. serving Delhi NCR, Noida, and Greater Noida.",
  keywords:
    "Hinges Testing Laboratory, Door Hinges Testing, Furniture Hinges Testing, Hardware Fittings Testing, Hinges Durability Test, Hinges Load Test, Hinges Testing Lab Delhi NCR, Minu Quality Testing Laboratory",
};

const services = [
  {
    title: "Material Testing",
    description:
      "Analyzes the material composition of hinges to verify metal quality, strength, and compliance with manufacturing standards.",
    link: "#",
  },
  {
    title: "Dimensions Testing",
    description:
      "Measures hinge dimensions including length, width, thickness, and hole placement to ensure accurate manufacturing.",
    link: "#",
  },
  {
    title: "Tolerance Testing",
    description:
      "Checks manufacturing tolerances to confirm hinges meet specified dimensional accuracy and fitting standards.",
    link: "#",
  },
  {
    title: "Manufacture Testing",
    description:
      "Evaluates manufacturing quality including assembly accuracy, joint alignment, and structural integrity.",
    link: "#",
  },
  {
    title: "Finish Testing",
    description:
      "Examines hinge surface finish, coating quality, and resistance to corrosion, scratches, and environmental exposure.",
    link: "#",
  },
];

const page = () => {
  return (
    <main className="bg-gray-50">
      {/* HERO */}
      <section className="relative h-[35vh] flex items-center justify-center">
        <Image
          src="/Hinges Testing.jpg"
          alt="Hinges Testing"
          fill
          className="object-cover brightness-50"
          priority
        />

        <div className="relative text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hinges Testing Services
          </h1>

          <p className="text-lg text-gray-200">
            Certified laboratory testing to evaluate hinge material quality,
            dimensional accuracy, manufacturing standards, and surface finish.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80">
            <Image
              src="/Hinges Testing.jpg"
              alt="Hinges Testing Laboratory"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Professional Hinges Testing Laboratory
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Our laboratory provides professional hinges testing to evaluate
              material strength, dimensional accuracy, manufacturing quality,
              and finishing standards.
            </p>

            <p className="text-gray-600 leading-relaxed">
              These tests help manufacturers ensure that hinges meet required
              industry standards for durability, precision, and long-term
              performance in furniture, doors, and industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Our Hinges Testing Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link href={service.link} key={index}>
                <div className="group bg-white border border-gray-200 rounded-xl p-7 hover:shadow-xl hover:-translate-y-1 transition duration-300">
                  <ShieldCheck size={34} className="text-red-500 mb-4" />

                  <h3 className="text-lg font-semibold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>

                  {/* <span className="flex items-center gap-2 text-black font-medium text-sm group-hover:text-red-500 transition">
                    Read More
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition"
                    />
                  </span> */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TESTING */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 cursor-pointer">
          <h2 className="text-3xl font-bold text-center mb-14">
            Why Hinges Testing is Important
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-8 rounded-xl bg-red-50 hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-red-500 mb-4" size={40} />
              <h3 className="font-semibold text-lg mb-2">
                Material Reliability
              </h3>
              <p className="text-gray-600 text-sm">
                Ensures hinge materials have the required strength and quality
                for reliable performance.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-blue-50 hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-blue-500 mb-4" size={40} />
              <h3 className="font-semibold text-lg mb-2">
                Manufacturing Accuracy
              </h3>
              <p className="text-gray-600 text-sm">
                Confirms hinges are manufactured with correct dimensions and
                tolerances.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-green-50 hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-green-600 mb-4" size={40} />
              <h3 className="font-semibold text-lg mb-2">
                Long-Term Durability
              </h3>
              <p className="text-gray-600 text-sm">
                Evaluates finishing quality and resistance to corrosion and
                wear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTING PROCESS */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Our Hinges Testing Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <ClipboardCheck className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Sample Collection</h3>
              <p className="text-sm text-gray-600">
                Hinges samples are collected and registered according to
                laboratory testing procedures.
              </p>
            </div>

            <div>
              <Beaker className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Laboratory Testing</h3>
              <p className="text-sm text-gray-600">
                Material, dimensions, tolerance, and manufacturing quality
                tests are performed.
              </p>
            </div>

            <div>
              <CheckCircle className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Result Evaluation</h3>
              <p className="text-sm text-gray-600">
                Test data is analyzed according to industry standards and
                quality requirements.
              </p>
            </div>

            <div>
              <ShieldCheck className="mx-auto text-red-500 mb-4" size={36} />
              <h3 className="font-semibold mb-2">Certified Report</h3>
              <p className="text-sm text-gray-600">
                Clients receive detailed laboratory reports with verified test
                results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-gray-900 to-blue-900 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Professional Hinges Testing Services?
          </h2>

          <p className="text-gray-300 mb-8">
            Contact our laboratory experts to schedule hinges testing and
            receive certified laboratory reports.
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
};

export default page;