"use client";

import React from "react";
import { Search } from "lucide-react";

interface SearchSupportProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchSupport({
  value,
  onChange,
  placeholder = "Tìm loại sim ghép bạn cần hỗ trợ (ví dụ: Bison New, Heicard ...)",
}: SearchSupportProps) {
  return (
    <div className="relative max-w-xl mx-auto mb-8">
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
        aria-hidden
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-500"
        aria-label="Tìm kiếm loại sim hoặc lỗi"
      />
    </div>
  );
}
