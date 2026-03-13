import React from "react";
import Link from "next/link";

export default function SupportHeader() {
  return (
    <header className="text-center py-12 px-4">
      <Link href="/" className="inline-block mb-8">
        <span className="font-bold text-2xl tracking-tight text-secondary">
          Ngáo <span className="text-primary">Store</span>
        </span>
      </Link>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
        Hỗ trợ ghép SIM iPhone Lock
      </h1>
      <p className="text-gray-500 text-sm md:text-base">
        Chọn loại SIM của bạn để xem hướng dẫn chi tiết
      </p>
    </header>
  );
}
