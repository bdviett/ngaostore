"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { products, getProductSlug } from "@/data/mock";
import { parsePrice, formatPrice } from "@/lib/checkout";
import type { CartItem } from "@/lib/cartStorage";

interface CartItemRowProps {
  item: CartItem;
  onRemove: () => void;
  onUpdateQuantity: (qty: number) => void;
}

function findProductBySlug(slug: string) {
  return products.find((p) => getProductSlug(p) === slug);
}

export default function CartItemRow({ item, onRemove, onUpdateQuantity }: CartItemRowProps) {
  const product = findProductBySlug(item.productSlug);
  if (!product) return null;

  const price = parsePrice(product.price);
  const subtotal = price * item.quantity;

  return (
    <div className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-4">
      <Link href={`/products/${item.productSlug}`} className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="96px"
        />
      </Link>
      <div className="min-w-0 flex-1">
        <Link href={`/products/${item.productSlug}`} className="font-semibold text-secondary hover:text-primary line-clamp-2">
          {product.name}
        </Link>
        <p className="mt-1 text-primary font-bold">{product.price} VNĐ</p>
        <div className="mt-2 flex items-center gap-2">
          <select
            value={item.quantity}
            onChange={(e) => onUpdateQuantity(parseInt(e.target.value, 10))}
            className="rounded-lg border-2 border-primary bg-primary/5 px-3 py-1.5 text-sm font-semibold text-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={onRemove}
            className="flex items-center gap-1 rounded-lg px-2 py-1 text-sm text-red-600 hover:bg-red-50 transition-colors"
            aria-label="Xóa sản phẩm"
          >
            <Trash2 size={16} />
            Xóa
          </button>
        </div>
      </div>
      <div className="text-right">
        <p className="font-bold text-primary">{formatPrice(subtotal)}đ</p>
      </div>
    </div>
  );
}
