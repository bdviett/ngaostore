import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  variant?: "light" | "dark";
}

const lightButton =
  "border border-gray-200 bg-white text-secondary hover:border-primary/30 hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed";
const darkButton =
  "border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 disabled:opacity-50 disabled:cursor-not-allowed";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  variant = "light",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const isDark = variant === "dark";

  return (
    <nav
      className="flex items-center justify-center gap-2 mt-10"
      aria-label="Phân trang"
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className={`flex items-center gap-1 px-4 py-3 rounded-2xl font-bold text-sm transition-all ${isDark ? darkButton : lightButton}`}
        aria-label="Trang trước"
      >
        <ChevronLeft className="w-5 h-5" />
        Trước
      </button>
      <div className="flex items-center gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`min-w-[2.75rem] py-3 px-3 rounded-2xl font-bold text-sm transition-all ${
              currentPage === page
                ? "bg-primary text-white shadow-lg shadow-primary/25"
                : isDark
                  ? "border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30"
                  : "border border-gray-200 bg-white text-secondary hover:border-primary/30 hover:text-primary"
            }`}
            aria-label={`Trang ${page}`}
            aria-current={currentPage === page ? "page" : undefined}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className={`flex items-center gap-1 px-4 py-3 rounded-2xl font-bold text-sm transition-all ${isDark ? darkButton : lightButton}`}
        aria-label="Trang sau"
      >
        Sau
        <ChevronRight className="w-5 h-5" />
      </button>
    </nav>
  );
}
