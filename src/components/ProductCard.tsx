import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/mock";
import { getProductSlug } from "@/data/mock";

const ZALO_URL = "https://zalo.me/0988012895";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const slug = getProductSlug(product);
  const inStock = product.inStock !== false;

  return (
    <div className="group p-6 rounded-[32px] border border-gray-100 bg-white hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
      <Link href={`/products/${slug}`} className="block">
        <div className="aspect-square relative rounded-2xl overflow-hidden mb-4 bg-gray-100">
          <span
            className={`absolute top-2 right-2 z-10 px-3 py-1 rounded-full text-xs font-bold ${
              inStock ? "bg-green-500/90 text-white" : "bg-gray-500/90 text-white"
            }`}
          >
            {inStock ? "Sẵn hàng" : "Hết hàng"}
          </span>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
        <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
      </Link>
      <p className="text-primary font-bold text-lg mb-2">{product.price} VNĐ</p>
      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
        {product.shortDescription}
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <Link
          href={`/products/${slug}`}
          className="flex-1 py-4 rounded-2xl font-bold text-sm sm:text-lg text-center border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
        >
          Chi tiết
        </Link>
        <Link
          href={ZALO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-1 py-4 rounded-2xl font-bold text-sm sm:text-lg text-center transition-all ${
            inStock
              ? "bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/25"
              : "border-2 border-gray-400 text-gray-600 hover:bg-gray-100"
          }`}
        >
          {inStock ? "Tư vấn" : "Đặt trước"}
        </Link>
      </div>
    </div>
  );
}
