"use client";

import React, { useState, useEffect } from "react";
import { Phone, MapPin, ArrowUp } from "lucide-react";

const ZaloIcon = () => (
  /* eslint-disable-next-line @next/next/no-img-element */
  <img
    src="/zalo-48.webp"
    alt=""
    width={20}
    height={20}
    className="rounded-full w-5 h-5 md:w-6 md:h-6"
    loading="lazy"
  />
);

export default function ContactPinned() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const contactLinks = [
    {
      name: "Gọi điện",
          icon: <Phone className="w-5 h-5 md:w-6 md:h-6" size={20} />,
      href: "tel:+84988012895",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      name: "Bản đồ",
          icon: <MapPin className="w-5 h-5 md:w-6 md:h-6" size={20} />,
      href: "https://maps.app.goo.gl/PrvGM2vGQftcbCMb8",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      name: "Zalo",
          icon: <ZaloIcon />,
      href: "http://zalo.me/0988012895",
      color: "bg-[#0068ff]",
      hoverColor: "hover:bg-[#0052cc]",
    },
  ];

  return (
    <div className="fixed right-3 bottom-6 md:right-6 md:bottom-8 z-[60] flex flex-col gap-2 md:gap-4">
      {contactLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          {...(link.href.startsWith("tel:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
          className={`group relative flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full text-white shadow-lg transition-all duration-300 ${link.color} ${link.hoverColor} hover:scale-110 active:scale-95`}
          aria-label={link.name}
        >
          {/* Ripple/Glow effect */}
          <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:animate-ping group-hover:opacity-20 transition-all duration-500"></span>

          {link.icon}

          {/* Tooltip */}
          <span className="absolute right-full mr-2 md:mr-4 px-2 py-1 md:px-3 md:py-1.5 bg-secondary-dark text-white text-xs md:text-sm font-medium rounded-lg opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-xl">
            {link.name}
            {/* Arrow */}
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-secondary-dark rotate-45 rounded-sm"></span>
          </span>
        </a>
      ))}

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`group relative flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full bg-primary text-white shadow-lg transition-all duration-500 hover:bg-primary-dark hover:scale-110 active:scale-95 ${isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-10 pointer-events-none"
          }`}
        aria-label="Lên đầu trang"
      >
        <ArrowUp size={20} className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-y-1 transition-transform duration-300" />

        {/* Tooltip */}
        <span className="absolute right-full mr-2 md:mr-4 px-2 py-1 md:px-3 md:py-1.5 bg-secondary-dark text-white text-xs md:text-sm font-medium rounded-lg opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-xl">
          Lên đầu trang
          {/* Arrow */}
          <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-secondary-dark rotate-45 rounded-sm"></span>
        </span>
      </button>
    </div>
  );
}
