import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const services = [
    { name: "Wood Testing", link: "/testing/wood-testing" },
    { name: "Plywood Testing", link: "/testing/plywood-testing" },
    { name: "Furniture Testing", link: "/testing/furniture-testing" },
    { name: "Water Testing", link: "/testing/water-testing" },
    { name: "Hinges Testing", link: "/testing/hinges-testing" },
    { name: "Cement Testing", link: "/testing/cement-testing" },
    { name: "Soil Testing", link: "/testing/soil-testing" },
    { name: "Aggregates Testing", link: "/testing/aggregates-testing" },
    { name: "Concrete Paver Block Testing", link: "/testing/concrete-paver-block-testing" },
  ];

  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Our Services", link: "/testing" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#051424] via-[#04101d] to-[#020a13] text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_1.2fr_1fr] gap-x-8 gap-y-12">

          {/* Brand */}
          <div className="flex flex-col space-y-5">
            <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group">
              <div className="w-12 h-12 flex items-center justify-center bg-white/5 p-1.5 rounded-xl border border-white/10 group-hover:border-red-500/40 transition duration-300">
                <Image
                  src="/logo.png"
                  alt="MQTL Laboratory"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              </div>

              <div className="leading-tight">
                <h1 className="text-xl font-bold text-white tracking-tight">
                  MQT Laboratory
                </h1>
                <p className="text-xs text-sky-400 font-semibold tracking-wide mt-0.5">
                  Precision &amp; Integrity
                </p>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Providing reliable testing services for wood, plywood, furniture,
              and construction materials with accuracy and compliance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="font-semibold mb-5 text-white text-base tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className="text-slate-300 hover:text-red-400 hover:translate-x-1 transition duration-200 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col">
            <h4 className="font-semibold mb-5 text-white text-base tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
              Our Services
            </h4>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.link}
                  className="text-slate-300 hover:text-red-400 transition duration-200"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <h4 className="font-semibold mb-5 text-white text-base tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
              Contact Info
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                <span className="text-slate-300 leading-relaxed">
                  Plot No. 79, Sector 155, Noida, Gautam Buddha Nagar, Uttar Pradesh 201310, India
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500 shrink-0" />
                <a
                  href="tel:+919971234474"
                  className="text-slate-300 hover:text-red-400 transition duration-200"
                >
                  +91 99712 34474
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500 shrink-0" />
                <a
                  href="mailto:info@mqtlab.com"
                  className="text-slate-300 hover:text-red-400 transition duration-200"
                >
                  info@mqtlab.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} Minu Quality Testing Laboratories Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <span>Material Testing Laboratory</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;