"use client";

import React, { useState, useEffect } from "react";
import { Phone, MapPin, ArrowUp } from "lucide-react";

import Image from "next/image";

const ZaloIcon = ({ size = 24 }: { size?: number }) => (
  <Image
    src="/zalo.png"
    alt="Zalo"
    width={size}
    height={size}
    className="rounded-full"
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
      icon: <Phone size={24} />,
      href: "tel:0988012895",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      name: "Bản đồ",
      icon: <MapPin size={24} />,
      href: "https://maps.app.goo.gl/PrvGM2vGQftcbCMb8",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      name: "Zalo",
      icon: <ZaloIcon size={24} />,
      href: "http://zalo.me/0988012895",
      color: "bg-[#0068ff]",
      hoverColor: "hover:bg-[#0052cc]",
    },
  ];

  return (
    <div className="fixed right-6 bottom-8 z-[60] flex flex-col gap-4">
      {contactLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative flex items-center justify-center w-14 h-14 rounded-full text-white shadow-lg transition-all duration-300 ${link.color} ${link.hoverColor} hover:scale-110 active:scale-95`}
          aria-label={link.name}
        >
          {/* Ripple/Glow effect */}
          <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:animate-ping group-hover:opacity-20 transition-all duration-500"></span>

          {link.icon}

          {/* Tooltip */}
          <span className="absolute right-full mr-4 px-3 py-1.5 bg-secondary-dark text-white text-sm font-medium rounded-lg opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-xl">
            {link.name}
            {/* Arrow */}
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-secondary-dark rotate-45 rounded-sm"></span>
          </span>
        </a>
      ))}

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`group relative flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg transition-all duration-500 hover:bg-primary-dark hover:scale-110 active:scale-95 ${isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-10 pointer-events-none"
          }`}
        aria-label="Lên đầu trang"
      >
        <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />

        {/* Tooltip */}
        <span className="absolute right-full mr-4 px-3 py-1.5 bg-secondary-dark text-white text-sm font-medium rounded-lg opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-xl">
          Lên đầu trang
          {/* Arrow */}
          <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-secondary-dark rotate-45 rounded-sm"></span>
        </span>
      </button>
    </div>
  );
}
