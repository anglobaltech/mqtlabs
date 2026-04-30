import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const services = [
  { name: "Wood Testing", link: "/services/wood-testing" },
  { name: "Plywood Testing", link: "/services/plywood-testing" },
  { name: "Furniture Testing", link: "/services/furniture-testing" },
  { name: "Water Testing", link: "/services/water-testing" },
  { name: "Hinges Testing", link: "/services/hinges-testing" },
  { name: "Cement Testing", link: "/services/cement-testing" },
  { name: "Soil Testing", link: "/services/soil-testing" },
  { name: "Aggregates Testing", link: "/services/aggregates-testing" },
  { name: "Concrete Paver Block Testing", link: "/services/concrete-paver-block-testing" },
];

  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Our Services", link: "/services" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_1.2fr_1fr] gap-x-8 gap-y-12">

          {/* Brand */}
          <div className="flex flex-col space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="MQT Laboratory Pvt. Ltd."
                width={60}
                height={40}
                className="object-contain"
              />

              <div>
                <h1 className="text-base font-bold text-white">
                  MQT Laboratory Pvt. Ltd.
                </h1>
                <p className="text-xs text-gray-400">Quality & Testing</p>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Providing reliable testing services for wood, plywood, furniture,
              and construction materials with accuracy and compliance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="font-semibold mb-5 text-white text-lg">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className="hover:text-red-400 transition duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col">
            <h4 className="font-semibold mb-5 text-white text-lg">
              Our Services
            </h4>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.link}
                  className="hover:text-red-400 transition duration-200"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <h4 className="font-semibold mb-5 text-white text-lg">
              Contact Info
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-400 mt-1 shrink-0" />
                <span className="leading-relaxed">
                 PLOT NO. 79, Sector 155, Noida, Gautam Buddha Nagar, Uttar Pradesh 201310, India
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-400 shrink-0" />
                <a
                  href="tel:+919971234474"
                  className="hover:text-red-400 transition duration-200"
                >
                  +91 99712 34474
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-400 shrink-0" />
                <a
                  href="mailto:info@mqtlab.com"
                  className="hover:text-red-400 transition duration-200"
                >
                  info@mqtlab.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-5 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Minu Quality Testing Laboratory Pvt. Ltd.
          All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;