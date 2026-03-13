"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X, Phone } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface NavbarProps {
  /** Khi true: luôn dùng giao diện tối (cho trang nền sáng như product detail) */
  variant?: "default" | "dark";
}

export default function Navbar({ variant = "default" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { count: cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const useDarkStyle = variant === "dark" || !isScrolled;

  const navLinks = [
    { name: "Trang chủ", href: "/" },
    { name: "Sản phẩm", href: "/#products" },
    { name: "Bài viết", href: "/#blogs" },
    { name: "Dịch vụ", href: "/#services" },
    { name: "Đánh giá", href: "/#reviews" },
    { name: "Hỏi đáp", href: "/#faq" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        variant === "dark"
          ? "bg-secondary-dark py-4 shadow-lg"
          : isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* <div className="bg-primary p-2 rounded-lg">
            <span className="text-white font-bold text-xl">N</span>
          </div> */}
          <picture className="shrink-0">
            <source srcSet="/logo-64.webp 1x, /logo-128.webp 2x" type="image/webp" />
            <img src="/logo-64.webp" alt="Ngáo Store" width={64} height={64} className="h-16 w-16 object-contain" fetchPriority="high" />
          </picture>
          <span className={cn(
            "font-bold text-xl tracking-tight",
            useDarkStyle ? "text-white" : "text-secondary"
          )}>
            Ngáo <span className="text-primary">Store</span>
          </span>
        </Link>

        {/* Desktop Nav (lg+) */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                useDarkStyle ? "text-white/90" : "text-secondary"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/cart"
            className={cn(
              "relative flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border transition-all",
              useDarkStyle
                ? "border-white/20 text-white hover:bg-white/10"
                : "border-secondary/20 text-secondary hover:bg-secondary/5"
            )}
          >
            <ShoppingCart size={18} />
            Giỏ hàng
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>
          <Link
            href="/support"
            className={cn(
              "flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border transition-all",
              useDarkStyle
                ? "border-white/20 text-white hover:bg-white/10"
                : "border-secondary/20 text-secondary hover:bg-secondary/5"
            )}
          >
            <Phone size={16} />
            Hỗ trợ ghép sim
          </Link>
          <Link
            href="https://shopee.vn/ngaostore86"
            target="_blank"
            className={cn(
              "bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40",
              useDarkStyle
                ? "border-white/20 hover:bg-primary/90"
                : "border-secondary/20 hover:bg-primary"
            )}
          >
            Ghé thăm Shopee
          </Link>
        </div>

        {/* Mobile + Tablet: Cart + Menu */}
        <div className="flex lg:hidden items-center gap-1">
          <Link
            href="/cart"
            className={cn(
              "relative p-3 min-w-[44px] min-h-[44px] flex items-center justify-center",
              useDarkStyle ? "text-white" : "text-secondary"
            )}
            aria-label={`Giỏ hàng${cartCount > 0 ? ` (${cartCount})` : ""}`}
          >
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>
          <button
            type="button"
            className={cn(
              "p-3 min-w-[44px] min-h-[44px] flex items-center justify-center",
              useDarkStyle ? "text-white" : "text-secondary"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile + Tablet Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-6 px-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
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
              href="/cart"
              className="flex items-center justify-center gap-2 text-secondary font-semibold py-3 rounded-xl border border-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <ShoppingCart size={18} />
              Giỏ hàng {cartCount > 0 && `(${cartCount})`}
            </Link>
            <Link
              href="tel:0988012895"
              className="flex items-center justify-center gap-2 text-secondary font-semibold py-3 rounded-xl border border-gray-200"
            >
              <Phone size={18} />
              Hỗ trợ ghép sim
            </Link>
            <button className="bg-primary text-white py-3 rounded-xl font-bold">
              <a target="_blank" href="https://shopee.vn/ngaostore86">Mua hàng tại Shopee</a>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
