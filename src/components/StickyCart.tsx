"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function StickyCart() {
  const pathname = usePathname();
  const { count } = useCart();

  if (pathname === "/cart" || pathname === "/checkout") return null;

  return (
    <Link
      href="/cart"
      className="fixed bottom-6 left-4 z-[55] flex lg:hidden items-center gap-3 rounded-2xl bg-primary px-5 py-3.5 font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary-dark active:scale-[0.98]"
      aria-label={`Giỏ hàng${count > 0 ? ` (${count} sản phẩm)` : ""}`}
    >
      <span className="relative">
        <ShoppingCart size={24} strokeWidth={2.5} />
        {count > 0 && (
          <span className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-primary">
            {count > 99 ? "99+" : count}
          </span>
        )}
      </span>
      <span>
        Giỏ hàng{count > 0 ? ` (${count})` : ""}
      </span>
    </Link>
  );
}
