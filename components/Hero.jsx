"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Award,
  Clock,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Beaker,
  Factory,
  Globe,
  Target,
  Users,
  TrendingUp,
  Trees,
  Armchair,
  TreeDeciduous,
} from "lucide-react";

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src="/bg.jpg"
      alt="Testing Laboratory"
      className="w-full h-fit object-cover"
    />
    <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/60 to-black/50" />
  </div>

  {/* Decorative Blur Shapes */}
  <div className="absolute top-24 right-24 w-72 h-72 bg-red-500/20 rounded-full blur-3xl hidden md:block animate-pulse" />
  <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl hidden lg:block" />

  {/* Content */}
  <div className="relative z-10 mx-auto w-full px-6 md:px-12 lg:px-20">
    <div className="max-w-5xl">

      <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
        Precision Testing for
        <span className="block bg-linear-to-r from-red-500 to-orange-400 bg-clip-text text-transparent mt-2">
          Construction Materials
        </span>
      </h1>

      <p className="text-gray-200 text-base sm:text-lg mb-10 leading-relaxed max-w-2xl">
        Trusted laboratory for comprehensive quality testing of
        <span className="font-semibold text-white">
          {" "}Wood, Polywood, Water, Furniture, Hinges,
          Cement, Aggregates, Soil & Concrete Paver Blocks
        </span>.
        Ensuring safety, durability, and compliance with national and international standards.
      </p>

      <div className="flex flex-col sm:flex-row gap-5 mb-12">
        <Link href="/contact-us">
          <button className="px-8 py-3 bg-red-500 hover:bg-red-800 text-white cursor-pointer font-semibold rounded-xl shadow-lg transition duration-300 w-full sm:w-auto">
            Contact Us
          </button>
        </Link>

        <Link href="/services">
          <button className="px-8 py-3 border border-white text-white font-semibold cursor-pointer rounded-xl hover:bg-white hover:text-black transition duration-300 w-full sm:w-auto">
            View Services
          </button>
        </Link>
      </div>

      <div className=" backdrop-blur-xs p-6  rounded-2xl border border-white/20 max-w-2xl shadow-xl">
        <h2 className="text-red-400 text-xl sm:text-2xl font-semibold mb-3">
          Minu Quality Testing Laboratory Pvt. Ltd.
        </h2>
        <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
          Delivering reliable and accurate testing services for wood,
          polywood, water, furniture, cement, and construction materials.
          We help manufacturers and builders meet quality, safety,
          and compliance standards with complete confidence.
        </p>
      </div>

    </div>
  </div>

</section>

            {/* ================= TRUST & STATS SECTION ================= */}
{/* <section className="bg-transparent">
  <div className="max-w-15xl px-2">

    <div className="text-center ">
      <h2 className="text-3xl md:text-5xl  font-bold text-red-400 mb-4">
        Trusted by Industry Leaders
      </h2>
      <p className="text-white max-w-4xl mx-auto">
        Delivering reliable and certified testing solutions with accuracy,
        transparency, and industry compliance.
      </p>
      <div className="w-20 h-1 bg-red-400 mx-auto mt-4"></div>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

      {/* Clients */}
      {/* <div>
        <Users className="w-10 h-10 text-red-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white">500+</h3>
        <p className="text-white mt-2 font-semibold">Satisfied Clients</p>
      </div>

      {/* Projects */}
      {/* <div>
        <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white">5000+</h3>
        <p className="text-white mt-2 font-semibold">Tests Conducted</p>
      </div> */}

      {/* Experience */}
      {/* <div>
        <Clock className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white">5+</h3>
        <p className="text-white mt-2 font-semibold">Years Experience</p>
      </div> */}

      {/* Certifications */}
      {/* <div>
        <Award className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white">100%</h3>
        <p className="text-white mt-2 font-semibold">Standards Compliance</p>
      </div>

    </div>
  </div>
</section>  */}

           {/* </div>
        </div>
      </section> */}

      <section id="about" className="pt-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About Us
              </h2>
              <p className="text-md text-gray-600 max-w-6xl mx-auto">
                <b>Minu Quality Testing Laboratory</b> is an independent testing lab in
                Noida, Uttar Pradesh, India, that provides quality testing
                and evaluation services for <b>wooden products, plywood, furniture and other construction materials.</b>.
                It helps manufacturers and suppliers verify <b>strength, durability, moisture content, bonding
                quality,</b> and other performance properties according to national and international standards
                such as <b>IS, ASTM, and ISO,</b> ensuring products meet regulatory and quality requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Mission */}
              <div className="bg-linear-to-br from-red-50 to-indigo-50 p-8 rounded-2xl">
                <Factory className="w-14 h-14 text-red-400 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our mission is to deliver accurate, dependable, and practical
                  testing solutions that help manufacturers meet quality,
                  safety, and regulatory requirements.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We support industries involved in wood, polywood,
                  furniture, water, soil, cement, hinges, aggregates and concrete paver block  with equipment and testing methods
                  aligned to national and international standards.
                </p>
              </div>

              {/* Values */}
              <div className="space-y-6">
                <div className="flex gap-4 items-start p-6 bg-gray-50 rounded-xl hover:shadow-md transition">
                  <Target className="w-10 h-10 text-red-400 shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Practical & Accurate Testing
                    </h4>
                    <p className="text-gray-600">
                      Test methods designed for real manufacturing conditions,
                      ensuring dependable and repeatable results.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-6 bg-gray-50 rounded-xl hover:shadow-md transition">
                  <Shield className="w-10 h-10 text-red-400 shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Quality & Compliance
                    </h4>
                    <p className="text-gray-600">
                      All testing procedures follow recognized quality systems
                      and compliance requirements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-6 bg-gray-50 rounded-xl hover:shadow-md transition">
                  <Globe className="w-10 h-10 text-red-400 shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Industry Standards
                    </h4>
                    <p className="text-gray-600">
                      Supporting compliance with IS, ASTM, ISO, and other
                      internationally accepted standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Equipdment */}
<section id="products" className="pt-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Testing Equipment
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Advanced laboratory equipment for accurate testing of construction,
        structural, and industrial materials.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

      {/* Wood Testing */}
      <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
        <div className="w-14 h-14 bg-blue-200 rounded-full flex items-center justify-center mb-6">
          <Trees className="w-7 h-7 text-green-900" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Wood Testing Equipment
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>Wood Testing Equipment</li>
          <li>Timber Analysis Equipmen</li>
          <li>Wood Strength Analyzer</li>
        </ul>
      </div>
      {/* Polywood Testing */}
      <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
        <div className="w-14 h-14 bg-gray-600 rounded-full flex items-center justify-center mb-6">
          <TreeDeciduous className="w-7 h-7 text-green-100" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Polywood Testing Equipment
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>Plywood Testing</li>
          <li>Quality Testing</li>
          <li>Durability Testing</li>
        </ul>
      </div>
      {/* Water Testing */}
      <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
        <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
          <Beaker className="w-7 h-7 text-blue-500" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Water Testing Equipment
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>pH Measurement</li>
          <li>TDS Measurement</li>
        </ul>
      </div>

      {/* Soil Testing */}
      <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
        <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
          <Factory className="w-7 h-7 text-yellow-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Soil Testing Equipment
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>Compaction & Density Tests</li>
          <li>Atterberg Limits</li>
          <li>Shear Strength Analysis</li>
        </ul>
      </div>

      {/* Cement Testing */}
      <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
        <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center mb-6">
          <Shield className="w-7 h-7 text-gray-700" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Cement Testing Equipment
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>Compressive Strength</li>
          <li>Initial & Final Setting Time</li>
          <li>Fineness & Soundness Tests</li>
        </ul>
      </div>

      {/* Aggregates Testing */}
      <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
        <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6">
          <Target className="w-7 h-7 text-orange-500" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Aggregates Testing Equipment
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>Impact & Crushing Value</li>
          <li>Sieve Analysis</li>
          <li>Specific Gravity Test</li>
        </ul>
      </div>

      {/* Concrete Paver Block */}
      <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
        <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-6">
          <TrendingUp className="w-7 h-7 text-red-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Concrete Paver Block Testing
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>Compressive Strength</li>
          <li>Water Absorption</li>
          <li>Abrasion Resistance</li>
        </ul>
      </div>

      {/* Hinges Testing */}
      <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
        <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
          <Award className="w-7 h-7 text-indigo-500" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Hinges Testing Equipment
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>Cycle Durability Test</li>
          <li>Corrosion Resistance</li>
          <li>Load Bearing Capacity</li>
        </ul>
      </div>

      {/* Furniture Testing */}
      <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <Armchair className="w-7 h-7 text-green-500" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Furniture Testing Equipment
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>Load & Stability Test</li>
          <li>Impact & Drop Test</li>
          <li>Durability Assessment</li>
        </ul>
      </div>

    </div>
  </div>
</section>

      {/* ================= SERVICES SECTION ================= */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Testing Services
            </h2>
            <div className="w-20 h-1 bg-red-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Reliable laboratory testing services for wooden products, plywood,
              furniture, and textile materials.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              "Plywood Bonding & Strength Testing",
              "Wood Moisture & Density Analysis",
              "Furniture Load & Durability Tests",
              "Formaldehyde Emission Testing",
              "Water Chemical Analysis, Water Sample Testing",
              "Abrasion & Pilling Resistance",
              "Color Fastness Testing",
              "Compliance & Test Reports",
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-red-400 hover:shadow-md transition"
              >
                <CheckCircle className="w-7 h-7 text-red-400 mb-3" />
                <h3 className="text-base font-semibold text-gray-900">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-[#0f3c5f] via-[#154c79] to-[#1b5d8f]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Ensure Quality & Compliance?
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Partner with us for world-class laboratory testing equipment,
            inspection systems and technical support.
          </p>

          <div className=" justify-center">
            <Link
              href="/contact-us"
              className="px-8 py-4 w-70 bg-white text-[#0f3c5f] cursor-pointer text-md font-semibold rounded-lg hover:bg-gray-100 transition shadow-lg inline-flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto mb-6">
                Reach out to us for testing services, technical inquiries, or
                general information. Our team will be happy to assist you.
              </p>
              <div className="w-20 h-1 bg-red-400 mx-auto"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
             
              <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center">
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Phone
                </h3>
                <a
                  href="tel:+917782069184"
                  className="text-gray-600 hover:text-red-400 transition"
                >
                  +91 99712 34474
                </a>
              </div>

              {/* Email */}
              <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center">
                <div className="w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Email
                </h3>
                <a
                  href="mailto:info@minulab.com"
                  className="text-gray-600 hover:text-indigo-400 transition"
                >
                  info@mqtlab.com
                </a>
              </div>

              {/* Location */}
              <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Location
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Plot No. 79, 2nd Floor,
                  <br />
                  Gautam Buddha Nagar,
                  <br />
                  Noida Sector 155,
                  <br />
                  Uttar Pradesh – 201310
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
