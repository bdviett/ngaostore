"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function BackToTop() {
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

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-50",
        "w-14 h-14 rounded-full",
        "bg-primary hover:bg-primary-dark",
        "text-white",
        "flex items-center justify-center",
        "shadow-2xl shadow-primary/30",
        "backdrop-blur-sm",
        "transition-all duration-300 ease-in-out",
        "hover:scale-110 active:scale-95",
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
      aria-label="Lên đầu trang"
    >
      <ArrowUp size={24} />
    </button>
  );
}
