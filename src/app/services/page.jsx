import Image from "next/image";
import Link from "next/link";


export const metadata = {
  title: "Testing Services | Minu Quality Testing Laboratory",
  description:
    "Professional testing services for wood, plywood, furniture, and textile products. Reliable laboratory testing aligned with industry standards.",
};

const services = [
  {
    title: "Wood Testing Services",
    description: "Comprehensive testing of solid wood...",
    image: "/wood-testing-service.jpeg",
    link: "/services/woodTesting",
  },
  {
    title: "Polywood Testing Services",
    description: "Testing solutions for plywood...",
    image: "/polywood-testing-service.jpeg",
    link: "/services/polyWoodTesting",
  },
  {
    title: "Water Testing Services",
    description: "Water Testing involves analyzing...",
    image: "/waterTesting.jpg",
    link: "/services/waterTesting",
  },
  {
    title: "Furniture Testing Services",
    description: "Furniture Testing ensures strength...",
    image: "/Furniture Testing.jpg",
    link: "/services/furnitureTesting",
  },
  {
    title: "Hinges Testing Services",
    description: "Hinges Testing evaluates strength...",
    image: "/Hinges Testing.jpg",
    link: "/services/hingesTesting",
  },
  {
    title: "Cement Testing Services",
    description: "Cement Testing evaluates strength...",
    image: "/Cement Testing.jpg",
    link: "/services/cementTesting",
  },
  {
    title: "Aggregates Testing Services",
    description: "Aggregates Testing checks strength...",
    image: "/Aggregates Testing.jpg",
    link: "/services/aggregatesTesting",
  },
  {
    title: "Soil Testing Services",
    description: "Soil Testing evaluates strength...",
    image: "/Soil Testing.jpg",
    link: "/services/soilTesting",
  },
  {
    title: "Concrete Paver Block Testing Services",
    description: "Concrete Paver Block Testing checks...",
    image: "/paverBlockTesting.jpg",
    link: "/services/concretePaverBlockTesting",
  },
];
export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
      <section className="bg-gray-900 py-15">
        <div className="max-w-7xl mx-auto px-2 text-center">
          <h1 className="text-2xl md:text-5xl font-bold text-white mb-5">
            Testing Services
          </h1>
          <p className="text-gray-300 max-w-6xl mx-auto text-xl md:text-xl">
           Testing is the process of examining and evaluating a product or material to ensure it meets required quality, safety, and performance standards.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
    
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-14">
            {services.map((service, index) => (
            <Link href={service.link} key={index}>
          <div
            className="bg-white rounded-2xl shadow-md hover:shadow-xl 
                       transition duration-300 overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 
                           ease-in-out hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                {service.title}
              </h2>

              <p className="text-gray-600 text-m mb-4">
                {service.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>

  </div>
</section>

      {/* ================= CTA ================= */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Need Testing Support
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-6">
            Contact our team to discuss your testing requirements or request a
            quotation.
          </p>
          <a
            href="/contact-us"
            className="inline-block px-6 py-3 bg-red-400 text-white text-sm font-semibold rounded-lg hover:bg-red-500 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
