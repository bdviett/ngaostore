"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X, Phone } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Trang chủ", href: "#" },
    { name: "Tính năng", href: "#features" },
    { name: "Tương thích", href: "#compatibility" },
    { name: "Bảng giá", href: "#pricing" },
    { name: "Hỏi đáp", href: "#faq" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-lg">
            <span className="text-white font-bold text-xl">N</span>
          </div>
          <span className={cn(
            "font-bold text-xl tracking-tight",
            isScrolled ? "text-secondary" : "text-white"
          )}>
            Ngáo <span className="text-primary">Store</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isScrolled ? "text-secondary" : "text-white/90"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="tel:0988012895"
            className={cn(
              "flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border transition-all",
              isScrolled
                ? "border-secondary/20 text-secondary hover:bg-secondary/5"
                : "border-white/20 text-white hover:bg-white/10"
            )}
          >
            <Phone size={16} />
            0988 012 895
          </Link>
          <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg shadow-primary/20">
            <a target="_blank" href="https://shopee.vn/ngaostore86">Mua Ngay</a>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2",
            isScrolled ? "text-secondary" : "text-white"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-6 px-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-secondary text-lg font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <Link
              href="tel:0123456789"
              className="flex items-center justify-center gap-2 text-secondary font-semibold py-3 rounded-xl border border-gray-200"
            >
              <Phone size={18} />
              0988 012 895
            </Link>
            <button className="bg-primary text-white py-3 rounded-xl font-bold">
              <a target="_blank" href="https://shopee.vn/ngaostore86">Mua Ngay</a>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
