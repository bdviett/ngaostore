import { Suspense } from "react";
import CartPageClient from "@/components/cart/CartPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giỏ hàng | Ngáo Store",
  description: "Giỏ hàng sim ghép iPhone Lock - Ngáo Store",
};

export default function CartPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-white">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      }
    >
      <CartPageClient />
    </Suspense>
  );
}
