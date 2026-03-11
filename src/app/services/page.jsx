import Image from "next/image";
import Link from "next/link";
import { Beaker, Trees, Sofa, Wrench, Building2, Layers, Mountain, Box } from "lucide-react";

export const metadata = {
  title:
    "Construction Materials Testing Laboratory Services | Minu Quality Testing Laboratory Pvt. Ltd.",
  description:
    "Minu Quality Testing Laboratory Pvt. Ltd. offers certified construction material testing services including water, wood, plywood, soil, aggregates, cement, furniture, hinges, and concrete paver block testing.",
  keywords:
    "Material Testing Laboratory, Water Testing, Wood Testing, Plywood Testing, Soil Testing, Aggregates Testing, Cement Testing, Furniture Testing, Hinges Testing, Concrete Paver Block Testing, Testing Lab Delhi NCR, Minu Quality Testing Laboratory",
};

const services = [
  {
    title: "Wood Testing Services",
    description:
      "Comprehensive testing of solid wood to evaluate strength, durability, moisture content and performance according to industry standards.",
    image: "/wood-testing-service.jpeg",
    link: "/services/wood-testing",
    icon: Trees,
  },
  {
    title: "Plywood Testing Services",
    description:
      "Professional plywood testing including bonding strength, water resistance and durability evaluation.",
    image: "/plywood-testing-service.jpeg",
    link: "/services/plywood-testing",
    icon: Layers,
  },
  {
    title: "Water Testing Services",
    description:
      "Laboratory analysis of water quality including pH, TDS and chemical parameters to ensure safe industrial and domestic usage.",
    image: "/waterTesting.jpg",
    link: "/services/water-testing",
    icon: Beaker,
  },
  {
    title: "Furniture Testing Services",
    description:
      "Furniture durability and load testing to ensure safety, stability and structural strength.",
    image: "/Furniture Testing.jpg",
    link: "/services/furniture-testing",
    icon: Sofa,
  },
  {
    title: "Hinges Testing Services",
    description:
      "Evaluation of hinge durability, corrosion resistance and load capacity for long-term performance.",
    image: "/Hinges Testing.jpg",
    link: "/services/hinges-testing",
    icon: Wrench,
  },
  {
    title: "Cement Testing Services",
    description:
      "Cement testing including compressive strength, setting time and consistency for construction quality assurance.",
    image: "/Cement Testing.jpg",
    link: "/services/cement-testing",
    icon: Building2,
  },
  {
    title: "Aggregates Testing Services",
    description:
      "Testing aggregates for size distribution, strength and durability to ensure construction reliability.",
    image: "/Aggregates Testing.jpg",
    link: "/services/aggregates-testing",
    icon: Mountain,
  },
  {
    title: "Soil Testing Services",
    description:
      "Soil analysis for construction suitability including bearing capacity and composition testing.",
    image: "/Soil Testing.jpg",
    link: "/services/soil-testing",
    icon: Box,
  },
  {
    title: "Concrete Paver Block Testing",
    description:
      "Testing compressive strength, durability and water absorption of concrete paver blocks.",
    image: "/paverBlockTesting.jpg",
    link: "/services/concrete-paver-block-testing",
    icon: Building2,
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">

      {/* HERO SECTION */}
      <section className="bg-linear-to-r from-gray-900 to-blue-900 py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Professional Laboratory Testing Services
          </h1>

          <p className="text-gray-300 text-md leading-relaxed max-w-4xl mx-auto">
            Minu Quality Testing Laboratory provides reliable and accurate
            testing services for various materials used in construction,
            manufacturing and industrial applications. Our laboratory follows
            certified testing standards and modern analytical techniques to
            ensure safety, durability and compliance with national and
            international quality standards.
          </p>

        </div>
      </section>


      {/* SERVICES GRID */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Link href={service.link} key={index}>

                  <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden group cursor-pointer">

                    {/* IMAGE */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition duration-500"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-6">

                      <div className="flex items-center gap-3 mb-3">

                        <Icon className="text-blue-600" size={26} />

                        <h2 className="text-lg font-bold text-gray-900">
                          {service.title}
                        </h2>

                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>

                    </div>

                  </div>

                </Link>
              );
            })}

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-linear-to-r from-gray-900 to-blue-900 py-20 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-white mb-4">
            Need Professional Testing Services?
          </h2>

          <p className="text-gray-300 mb-8">
            Contact our laboratory to schedule professional testing and receive
            accurate analysis reports for your materials and products.
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