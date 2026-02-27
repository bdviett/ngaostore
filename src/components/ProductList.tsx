"use client";

import React, { useMemo, useState } from "react";
import { Search } from "lucide-react";
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

export default function ProductList() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<ProductCategory>("all");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCategory =
        category === "all" || p.category === category;
      const matchSearch =
        !search.trim() ||
        p.name.toLowerCase().includes(search.toLowerCase().trim()) ||
        p.description.toLowerCase().includes(search.toLowerCase().trim());
      return matchCategory && matchSearch;
    });
  }, [search, category]);

  return (
    <section id="products" className="py-24 bg-secondary-dark">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
            Sản phẩm
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Sản phẩm nổi bật
          </h3>
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

        <Slideshow
          items={filtered}
          renderItem={(product) => <ProductCard product={product} />}
          keyExtractor={(p) => p.id}
          variant="dark"
          emptyMessage="Không tìm thấy sản phẩm phù hợp."
        />
      </div>
    </section>
  );
}
