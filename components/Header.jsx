"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight, Phone } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const testingServices = [
  { title: "Wood Testing",         href: "/testing/wood-testing" },
  { title: "Plywood Testing",      href: "/testing/plywood-testing" },
  {
    title: "Water Testing",
    href: "/testing/water-testing",
    children: [
      { title: "pH Testing",       href: "/testing/water-testing/ph-testing" },
      { title: "TDS Testing",      href: "/testing/water-testing/tds-testing" },
    ],
  },
  { title: "Furniture Testing",    href: "/testing/furniture-testing" },
  { title: "Hinges Testing",       href: "/testing/hinges-testing" },
  { title: "Cement Testing",       href: "/testing/cement-testing" },
  { title: "Aggregates Testing",   href: "/testing/aggregates-testing" },
  { title: "Soil Testing",         href: "/testing/soil-testing" },
  { title: "Concrete Paver Block", href: "/testing/concrete-paver-block-testing" },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileWaterOpen, setMobileWaterOpen] = useState(true);
  const dropdownTimeout = useRef(null);

  const onMouseEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setServicesDropdownOpen(true);
  };
  const onMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setServicesDropdownOpen(false), 150);
  };

  useEffect(() => () => clearTimeout(dropdownTimeout.current), []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-[72px] sm:h-[78px] md:h-[82px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-1 sm:gap-1 shrink-0 group" onClick={closeDrawer}>
              <div className="relative w-12 h-12 sm:w-[54px] sm:h-[54px] flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="MQTL Laboratory"
                  width={140}
                  height={140}
                  className="w-full h-full object-contain"
                  priority
                  unoptimized
                />
              </div>
              <div className="leading-tight">
                <p className="text-[16px] sm:text-[18px] font-bold text-[#05526e] tracking-tight leading-none">
                  MQT Laboratory
                </p>
                <p className="text-[11px] sm:text-[12px] text-[#05526e] font-medium mt-1">
                  Precision &amp; Integrity
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              <Link href="/" className="px-4 py-2 rounded-lg text-[14.5px] font-semibold text-slate-800 hover:text-[#05526e] hover:bg-[#05526e]/5 transition-all">
                Home
              </Link>
              <Link href="/about" className="px-4 py-2 rounded-lg text-[14.5px] font-semibold text-slate-800 hover:text-[#05526e] hover:bg-[#05526e]/5 transition-all">
                About Us
              </Link>

              {/* Services Dropdown */}
              <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <button className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-[14.5px] font-semibold transition-all ${servicesDropdownOpen ? "text-[#05526e] bg-[#05526e]/8" : "text-slate-800 hover:text-[#05526e] hover:bg-[#05526e]/5"}`}>
                  Our Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180 text-[#05526e]" : "text-slate-500"}`} />
                </button>

                {servicesDropdownOpen && (
                  <div
                    className="absolute top-[calc(100%+6px)] left-1/2 -translate-x-1/2 w-60 bg-white rounded-xl border border-gray-100 shadow-xl py-1.5 z-50"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  >
                    {testingServices.map((s) => {
                      if (s.children) {
                        return (
                          <div key={s.href} className="relative group/water">
                            <div className="flex items-center justify-between px-4 py-2 text-[13.5px] font-medium text-slate-800 hover:bg-[#05526e]/5 hover:text-[#05526e] transition-colors cursor-pointer">
                              <Link
                                href={s.href}
                                onClick={() => setServicesDropdownOpen(false)}
                                className="flex-1"
                              >
                                {s.title}
                              </Link>
                              <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover/water:text-[#05526e] group-hover/water:translate-x-0.5 transition-all" />
                            </div>

                            {/* Flyout Submenu for Water Testing */}
                            <div className="hidden group-hover/water:block absolute top-0 left-full ml-1 w-56 bg-white rounded-xl border border-gray-100 shadow-xl py-1.5 z-50 before:absolute before:-left-3 before:top-0 before:w-3 before:h-full">
                              <div className="px-3.5 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-gray-100 mb-1">
                                Water Services
                              </div>
                              <Link
                                href={s.href}
                                onClick={() => setServicesDropdownOpen(false)}
                                className="block px-4 py-2 text-[13px] font-semibold text-[#05526e] hover:bg-[#05526e]/5 transition-colors"
                              >
                                Water Testing Overview
                              </Link>
                              {s.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setServicesDropdownOpen(false)}
                                  className="block px-4 py-2 text-[13px] font-medium text-slate-700 hover:bg-[#05526e]/5 hover:text-[#05526e] transition-colors"
                                >
                                  {child.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      }

                      return (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="block px-4 py-2 text-[13.5px] font-medium text-slate-800 hover:bg-[#05526e]/5 hover:text-[#05526e] transition-colors"
                        >
                          {s.title}
                        </Link>
                      );
                    })}
                    <div className="mx-3 mt-1 pt-1.5 border-t border-gray-100">
                      <Link
                        href="/testing"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="block px-1 py-2 text-[13px] font-semibold text-[#05526e] hover:underline"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/contact-us" className="px-4 py-2 rounded-lg text-[14.5px] font-semibold text-slate-800 hover:text-[#05526e] hover:bg-[#05526e]/5 transition-all">
                Contact Us
              </Link>
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <a href="tel:+919971234474" className="flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-[#05526e] transition group">
                <div className="w-8 h-8 rounded-full border border-[#05526e]/20 bg-[#05526e]/5 text-[#05526e] flex items-center justify-center group-hover:bg-[#05526e] group-hover:text-white transition-all duration-200">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="hidden xl:inline">+91 99712 34474</span>
              </a>
              <Link href="/contact-us" className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all">
                Request a Test
              </Link>
            </div>

            {/* Mobile: Hamburger */}
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-gray-700 hover:text-[#05526e] hover:bg-gray-50 transition"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Slide-in Drawer ── */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 md:hidden ${drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={closeDrawer}
      />

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] z-[70] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-[#05526e]">
          <span className="text-white font-bold text-[15px] uppercase tracking-widest">Menu</span>
          <button
            onClick={closeDrawer}
            className="text-white/70 hover:text-white transition"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Drawer Nav Links */}
        <nav className="flex-1 overflow-y-auto">

          <Link
            href="/"
            onClick={closeDrawer}
            className="flex items-center px-6 py-4 text-[14px] font-semibold text-slate-900 uppercase tracking-wide border-b border-gray-100 hover:bg-[#05526e]/5 hover:text-[#05526e] transition"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={closeDrawer}
            className="flex items-center px-6 py-4 text-[14px] font-semibold text-slate-900 uppercase tracking-wide border-b border-gray-100 hover:bg-[#05526e]/5 hover:text-[#05526e] transition"
          >
            About Us
          </Link>

          {/* Services Accordion */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between px-6 py-4 text-[14px] font-semibold text-slate-900 uppercase tracking-wide hover:bg-[#05526e]/5 hover:text-[#05526e] transition"
            >
              Our Services
              <ChevronDown
                className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-[#05526e]" : ""}`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="bg-gray-50 border-t border-gray-100">
                {testingServices.map((s) => {
                  if (s.children) {
                    return (
                      <div key={s.href} className="border-b border-gray-100">
                        <div className="flex items-center justify-between px-8 py-2 hover:bg-white transition">
                          <Link
                            href={s.href}
                            onClick={closeDrawer}
                            className="text-[13px] text-slate-800 font-semibold hover:text-[#05526e]"
                          >
                            {s.title}
                          </Link>
                          <button
                            type="button"
                            onClick={() => setMobileWaterOpen(!mobileWaterOpen)}
                            className="p-1 text-slate-500 hover:text-[#05526e]"
                            aria-label="Toggle Water Testing sub-services"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                mobileWaterOpen ? "rotate-180 text-[#05526e]" : ""
                              }`}
                            />
                          </button>
                        </div>
                        {mobileWaterOpen && (
                          <div className="bg-gray-100/70 pl-11 pr-6 py-1.5 space-y-1 border-t border-gray-200/40">
                            <Link
                              href={s.href}
                              onClick={closeDrawer}
                              className="block py-1 text-[12.5px] text-[#05526e] font-semibold hover:underline"
                            >
                              • Water Testing Overview
                            </Link>
                            {s.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={closeDrawer}
                                className="block py-1 text-[12.5px] text-slate-700 hover:text-[#05526e]"
                              >
                                • {child.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={closeDrawer}
                      className="block px-8 py-1.5 text-[13px] text-slate-700 font-medium border-b border-gray-100 last:border-0 hover:text-[#05526e] hover:bg-white transition"
                    >
                      {s.title}
                    </Link>
                  );
                })}
                <Link
                  href="/testing"
                  onClick={closeDrawer}
                  className="block px-8 py-1.5 text-[13px] font-bold text-[#05526e] hover:underline border-t border-gray-200"
                >
                  View All Services →
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact-us"
            onClick={closeDrawer}
            className="flex items-center px-6 py-4 text-[14px] font-semibold text-slate-900 uppercase tracking-wide border-b border-gray-100 hover:bg-[#05526e]/5 hover:text-[#05526e] transition"
          >
            Contact Us
          </Link>
        </nav>

        {/* Drawer Footer CTA */}
        <div className="p-4 border-t border-gray-100 flex flex-col gap-3">
          <a
            href="tel:+919971234474"
            className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition"
          >
            <Phone className="w-4 h-4 text-[#05526e]" />
            +91 99712 34474
          </a>
          <Link
            href="/contact-us"
            onClick={closeDrawer}
            className="block text-center bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-3 rounded-xl shadow-sm transition"
          >
            Request a Test
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
