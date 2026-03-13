"use client";

import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";

interface AddToCartButtonProps {
  productSlug: string;
  inStock: boolean;
  className?: string;
}

export default function AddToCartButton({ productSlug, inStock, className = "" }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    if (!inStock) return;
    addToCart(productSlug, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={!inStock}
      className={`inline-flex flex-1 items-center justify-center gap-2 rounded-2xl px-10 py-4 font-bold text-lg transition-all ${
        inStock
          ? "border-2 border-primary text-primary hover:bg-primary hover:text-white"
          : "cursor-not-allowed border-2 border-gray-300 text-gray-500"
      } ${className}`}
    >
      <ShoppingCart size={20} />
      {added ? "Đã thêm!" : "Thêm vào giỏ hàng"}
    </button>
  );
}
