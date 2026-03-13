import { Suspense } from "react";
import CheckoutPageClient from "@/components/checkout/CheckoutPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thanh toán | Ngáo Store",
  description: "Thanh toán đơn hàng sim ghép iPhone Lock - Ngáo Store",
};

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-white">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      }
    >
      <CheckoutPageClient />
    </Suspense>
  );
}
