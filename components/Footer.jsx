import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Top Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white">
                  Minu Quality Testing Laboratory Pvt. Ltd.
                </h3>
                <p className="text-xs text-gray-400">
                  Quality & Compliance Testing
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Providing reliable testing services for wood, plywood, furniture,
              and textile products with a focus on accuracy and compliance.
            </p>
          </div>

          {/* Quick Links (you can update later) */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-red-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-red-400 transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-red-400 transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-400 hover:text-red-400 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Wood Testing",
                "Plywood Testing",
                "Furniture Testing",
                "Textile Testing",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-red-400 transition"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-400 mt-0.5" />
                <span className="text-gray-400">
                Plot No. 79, 2nd Floor<br />
                Gautam Buddha Nagar<br />
                Noida Sector 155<br />
                UP – 201310
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-400" />
                <a
                  href="tel:+917782069184"
                  className="text-gray-400 hover:text-red-400 transition"
                >
                  +91 99712 34474
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-red-400" />
                <a
                  href="mailto:info@mqtlab.com"
                  className="text-gray-400 hover:text-red-400 transition"
                >
                  info@mqtlab.com
                </a>
              </li>

              {/* Social */}
              <li className="flex gap-4 pt-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-400 transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-400 transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Minu Quality Testing Laboratory. All
            rights reserved.
          </p>

          <p className="mt-2">
            Powered by{" "}
            <a
              href="https://www.anglobalservices.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition"
            >
              AN Global Services PVT. LTD.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
