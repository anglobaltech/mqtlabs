"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <header className="top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4">
        {/* Main Row */}
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="/" className="flex items-center ">
            <div className="">
              <Image
                src="/mqtl-logo1.png"
                alt="MQTL Laboratory"
                width={150}
                height={40}
                className="object-contain"
              />
            </div>
            {/* <div className="leading-tight">
              <h1 className="text-base font-bold text-gray-900">
                MQTL Laboratory
              </h1>
              <p className="text-xs text-gray-800">
                Quality & Testing
              </p>
            </div> */}
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-lg font-medium text-gray-900 hover:text-black transition group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-900 font-medium py-2 hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
