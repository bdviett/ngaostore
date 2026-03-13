import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SupportPageClient from "@/components/support/SupportPageClient";

export const metadata: Metadata = {
  title: "Hướng dẫn ghép SIM iPhone Lock | Ngao Store",
  description: "Trang hỗ trợ ghép SIM cho iPhone Lock. Xem hướng dẫn video, kiểm tra nhà mạng, khắc phục sự cố.",
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar variant="dark" />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Suspense fallback={<div className="py-12 text-center text-gray-500">Đang tải...</div>}>
            <SupportPageClient />
          </Suspense>
        </div>
      </div>
      <Footer />
    </main>
  );
}
