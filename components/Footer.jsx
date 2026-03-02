import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="MQT Laboratory"
                width={60}
                height={40}
                className="object-contain"
              />
              <div>
                <h1 className="text-lg font-bold text-white">MQT Laboratory</h1>
                <p className="text-xs text-gray-400">Quality & Testing</p>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed">
              Providing reliable testing services for wood, plywood, furniture,
              and construction materials with accuracy and compliance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/about" },
                { name: "Our Services", link: "/services" },
                { name: "Contact Us", link: "/contact-us" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className="hover:text-red-400 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-lg">
              Our Services
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {[
                "Wood Testing",
                "Polywood Testing",
                "Furniture Testing",
                "Water Testing",
                "Hinges Testing",
                "Cement Testing",
                "Soil Testing",
                "Concrete Paver Block Testing",
              ].map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="hover:text-red-400 transition"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-lg">Contact Info</h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-400 mt-1" />
                <span>
                  Plot No. 79, 2nd Floor Gautam Buddha Nagar, Sector 155, Noida,
                  UP – 201310
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-400" />
                <a
                  href="tel:+919971234474"
                  className="hover:text-red-400 transition"
                >
                  +91 99712 34474
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-400" />
                <a
                  href="mailto:info@mqtlab.com"
                  className="hover:text-red-400 transition"
                >
                  info@mqtlab.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Minu Quality Testing Laboratory Pvt. Ltd.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
