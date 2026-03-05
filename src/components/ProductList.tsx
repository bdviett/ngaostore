"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import Slideshow from "./Slideshow";
import { products } from "@/data/mock";
import type { ProductCategory } from "@/data/mock";

const CATEGORIES: { value: ProductCategory; label: string }[] = [
  { value: "all", label: "Tất cả" },
  { value: "sim-ghep", label: "Sim Ghép" },
  { value: "sac-cap", label: "Sạc Cáp" },
  { value: "cuong-luc", label: "Cường Lực" },
  { value: "op-lung", label: "Ốp Lưng" },
  { value: "phu-kien-khac", label: "Phụ Kiện Khác" },
];

interface ProductListProps {
  showViewAll?: boolean;
  useSlideshow?: boolean;
  /** Dùng H2 thay vì H1 khi component nằm trong trang có H1 riêng (tránh nhiều H1 trên 1 trang) */
  headingLevel?: "h1" | "h2";
}

export default function ProductList({ showViewAll = false, useSlideshow = true, headingLevel = "h1" }: ProductListProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<ProductCategory>("all");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCategory =
        category === "all" || p.category === category;
      const matchSearch =
        !search.trim() ||
        p.name.toLowerCase().includes(search.toLowerCase().trim()) ||
        p.shortDescription.toLowerCase().includes(search.toLowerCase().trim());
      return matchCategory && matchSearch;
    });
  }, [search, category]);

  return (
    <section id="products" className="py-24 bg-secondary-dark">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-red-400 font-bold tracking-widest uppercase text-sm mb-4">
            Sản phẩm
          </p>
          {headingLevel === "h2" ? (
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Danh Sách Sim Ghép & Sản Phẩm Bán Chạy
            </h2>
          ) : (
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Danh Sách Sản Phẩm Bán Chạy Tại Ngáo Store
            </h1>
          )}
          {showViewAll && (
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-white/80 hover:text-primary font-semibold transition-colors"
            >
              Xem tất cả sản phẩm
              <ArrowRight className="w-5 h-5" />
            </Link>
          )}
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-10">
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
            <input
              type="search"
              placeholder="Tìm sản phẩm..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-white/20 bg-white/5 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setCategory(cat.value)}
                className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all ${
                  category === cat.value
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-white/5 text-white/80 border border-white/20 hover:bg-white/10 hover:border-white/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {useSlideshow ? (
          <Slideshow
            items={filtered}
            renderItem={(product) => <ProductCard product={product} />}
            keyExtractor={(p) => p.id}
            variant="dark"
            emptyMessage="Không tìm thấy sản phẩm phù hợp."
          />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="text-center text-white/60 py-12">
                Không tìm thấy sản phẩm phù hợp.
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
}
