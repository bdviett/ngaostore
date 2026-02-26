import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/mock";

const ZALO_URL = "https://zalo.me/0988012895";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group p-6 rounded-[32px] border border-gray-100 bg-white hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
      <div className="aspect-square relative rounded-2xl overflow-hidden mb-4 bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <h3 className="text-xl font-bold text-secondary mb-2">{product.name}</h3>
      <p className="text-primary font-bold text-lg mb-2">{product.price} VNĐ</p>
      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
        {product.description}
      </p>
      <Link
        href={ZALO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full py-4 rounded-2xl font-bold text-lg text-center bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/25 transition-all"
      >
        Tư vấn, hỗ trợ
      </Link>
    </div>
  );
}
