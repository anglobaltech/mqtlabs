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
} from "lucide-react";

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-lab.jpg"
            alt="Wood testing laboratory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-red-400/20 rounded-full blur-3xl animate-pulse hidden md:block" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl hidden lg:block" />

        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-3xl">
            {/* Hero Heading */}
            <h1
              className="font-display text-white text-[28px] sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-5 sm:mb-6 leading-snug sm:leading-tight animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Precision Testing for
              <span className="block text-red-400">Wood Products</span>
            </h1>
            {/* Hero Subtext */}
            <p
              className="text-[15px] sm:text-lg text-gray-200 mb-7 sm:mb-8 max-w-2xl animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Trusted laboratory for comprehensive quality testing of plywood,
              furniture, timber, and all wooden products. Ensuring safety and
              compliance with international standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Request Testing → Contact Page */}
              <Link href="/contact-us">
                <button className="group px-6 py-3 cursor-pointer text-black text-base md:text-lg font-semibold rounded-lg shadow-lg bg-red-400 hover:text-white transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
                  Request Testing
                </button>
              </Link>

              {/* View Services → Services Page */}
              <Link href="/services">
                <button className="px-6 py-3 bg-transparent border-2 cursor-pointer border-white text-white text-base md:text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all w-full sm:w-auto">
                  View Services
                </button>
              </Link>
            </div>
            {/* Company Name */}
            <div className="text-amber-50 text-center sm:text-left mt-6">
              <h2 className="text-lg sm:text-2xl font-semibold tracking-wide">
                Minu Quality Testing Laboratory
              </h2>

              <p className="text-gray-300 text-sm sm:text-base mt-3 max-w-5xl">
                Minu Quality Testing Laboratory provides testing services for
                wood, plywood, and textile products, helping manufacturers meet
                quality and compliance requirements with confidence.
              </p>
            </div>
            v
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="pt-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About Minu Quality Testing Laboratory
              </h2>
              <p className="text-md text-gray-600 max-w-3xl mx-auto">
                Established in India, Minu Quality Testing Laboratory
                specializes in testing solutions for wooden products, plywood,
                and textiles, supporting manufacturers with reliable quality
                assurance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Mission */}
              <div className="bg-gradient-to-br from-red-50 to-indigo-50 p-8 rounded-2xl">
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
                  We support industries involved in wooden products, plywood,
                  furniture, and textiles with equipment and testing methods
                  aligned to national and international standards.
                </p>
              </div>

              {/* Values */}
              <div className="space-y-6">
                <div className="flex gap-4 items-start p-6 bg-gray-50 rounded-xl hover:shadow-md transition">
                  <Target className="w-10 h-10 text-red-400 flex-shrink-0" />
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
                  <Shield className="w-10 h-10 text-red-400 flex-shrink-0" />
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
                  <Globe className="w-10 h-10 text-red-400 flex-shrink-0" />
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

      {/* ================= PRODUCTS SECTION ================= */}
      <section id="products" className="pt-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Testing Equipment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Laboratory equipment designed for precise testing of wooden
              products, plywood panels, furniture, and textiles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Wood & Plywood */}
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Beaker className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Wood & Plywood Testing Equipment
              </h3>
              <p className="text-gray-600 mb-5">
                Equipment for strength, bonding quality, moisture content, and
                dimensional stability testing of wooden and plywood products.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Compression & bending tests
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Glue shear & bonding tests
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Moisture & density analysis
                </li>
              </ul>
            </div>

            {/* Textile */}
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Textile Testing Instruments
              </h3>
              <p className="text-gray-600 mb-5">
                Instruments for evaluating strength, durability, and performance
                characteristics of textile materials and fabrics.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Tensile & tear strength
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Abrasion & pilling resistance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Color fastness testing
                </li>
              </ul>
            </div>

            {/* Quality Systems */}
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quality Control Systems
              </h3>
              <p className="text-gray-600 mb-5">
                Supporting tools and systems for laboratory quality control,
                reporting, and compliance verification.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Digital data recording
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Repeatable test procedures
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Standard-compliant reporting
                </li>
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
              "Textile Tensile & Tear Strength",
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
      <section className="py-20 bg-gradient-to-r from-[#0f3c5f] via-[#154c79] to-[#1b5d8f]">
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
              {/* Phone */}
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
                  +91 77820 69184
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
