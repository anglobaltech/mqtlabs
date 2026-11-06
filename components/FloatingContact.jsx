"use client";

import { Phone } from "lucide-react";

function WhatsAppIcon({ className = "w-full h-full" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
    >
      {/* WhatsApp Green Speech Bubble with Tail */}
      <path
        fill="#25D366"
        d="M16 2C8.268 2 2 8.268 2 16c0 2.617.714 5.068 1.957 7.165L2 30l7.026-1.843A13.923 13.923 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2z"
      />
      {/* WhatsApp White Telephone Receiver */}
      <path
        fill="#FFFFFF"
        d="M23.18 19.34c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-1.93-.97-3.2-1.74-4.47-3.92-.19-.33.19-.31.55-1.02.12-.23.06-.44-.03-.62-.09-.18-.72-1.73-.99-2.37-.26-.64-.53-.55-.72-.56h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.67 0 1.57 1.15 3.09 1.31 3.3.16.21 2.26 3.46 5.48 4.85 1.92.83 2.64.91 3.57.77.56-.08 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z"
      />
    </svg>
  );
}

export default function FloatingContact() {
  const phoneNumber = "+919971234474";
  const whatsappNumber = "919971234474";
  const whatsappMessage = encodeURIComponent(
    "Hello MQTL Laboratory, I would like to inquire about your testing services."
  );

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3.5 pointer-events-auto select-none">
      {/* Phone Call Floating Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-[52px] sm:h-[52px] rounded-full bg-[#05526e] hover:bg-[#033b50] text-white shadow-lg shadow-[#05526e]/30 hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 animate-float"
        aria-label="Call MQTL Laboratory"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 fill-white stroke-none" />

        {/* Desktop Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap shadow-md opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none hidden sm:block">
          Call: +91 99712 34474
        </span>
      </a>

      {/* WhatsApp Floating Button */}
      {/* <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 hover:scale-110 active:scale-95 transition-all duration-300 drop-shadow-lg hover:drop-shadow-xl"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-full h-full object-contain filter drop-shadow-md" /> */}

        {/* Desktop Tooltip */}
        {/* <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap shadow-md opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none hidden sm:block">
          Chat on WhatsApp
        </span> */}
      {/* </a> */}
    </div>
  );
}
