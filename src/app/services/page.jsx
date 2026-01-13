import Image from "next/image";

export const metadata = {
  title: "Testing Services | Minu Quality Testing Laboratory",
  description:
    "Professional testing services for wood, plywood, furniture, and textile products. Reliable laboratory testing aligned with industry standards.",
};

const services = [
  {
    title: "Wood Testing Services",
    description:
      "Comprehensive testing of solid wood and timber products to evaluate strength, durability, moisture content, and overall performance.",
    points: [
      "Moisture content & density testing",
      "Compression & bending strength",
      "Dimensional stability analysis",
      "Durability & performance evaluation",
    ],
    image: "/wood-testing-service.jpeg",
  },
  {
    title: "Plywood Testing Services",
    description:
      "Testing solutions for plywood and panel boards to verify bonding quality, strength, and compliance with applicable standards.",
    points: [
      "Bonding & glue shear strength",
      "Bending & load-bearing tests",
      "Moisture resistance testing",
      "Thickness & dimensional checks",
    ],
    image: "/plywood-testing-service.jpeg",
  },
  {
    title: "Textile Testing Services",
    description:
      "Laboratory testing of textile materials and fabrics to assess physical performance, durability, and appearance retention.",
    points: [
      "Tensile & tear strength testing",
      "Abrasion & pilling resistance",
      "Color fastness testing",
      "Fabric performance analysis",
    ],
    image: "/textile-testing-service.jpeg",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Testing Services
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            Reliable laboratory testing services for wood, plywood, furniture,
            and textile products.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-10 items-start"
              >
                <div
                  className={`relative h-64 rounded-xl overflow-hidden bg-white shadow ${
                    index % 2 !== 0 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>

                {/* Content */}
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700 text-sm"
                      >
                        <span className="text-green-500 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
