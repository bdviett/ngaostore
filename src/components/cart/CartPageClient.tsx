"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPinned from "@/components/ContactPinned";
import CartItemRow from "./CartItemRow";
import { useCart } from "@/contexts/CartContext";
import { products, getProductSlug } from "@/data/mock";
import { parsePrice, formatPrice } from "@/lib/checkout";

function findProductBySlug(slug: string) {
  return products.find((p) => getProductSlug(p) === slug);
}

export default function CartPageClient() {
  const { items, removeFromCart, updateQuantity } = useCart();

  const cartWithProducts = items
    .map((item) => {
      const product = findProductBySlug(item.productSlug);
      return product ? { item, product } : null;
    })
    .filter(Boolean) as { item: (typeof items)[0]; product: NonNullable<ReturnType<typeof findProductBySlug>> }[];

  const totalAmount = cartWithProducts.reduce(
    (sum, { item, product }) => sum + parsePrice(product.price) * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar variant="dark" />
        <div className="container mx-auto px-4 pt-32 pb-24">
          <div className="rounded-2xl border-2 border-gray-200 bg-gray-50 p-12 text-center">
            <h1 className="mb-4 text-2xl font-bold text-secondary">Giỏ hàng trống</h1>
            <p className="mb-6 text-gray-600">
              Chưa có sản phẩm nào trong giỏ. Hãy thêm sản phẩm để thanh toán.
            </p>
            <Link
              href="/products"
              className="inline-flex rounded-2xl bg-primary px-8 py-3 font-bold text-white hover:bg-primary-dark"
            >
              Xem sản phẩm
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar variant="dark" />
      <div className="pt-24 pb-24">
        <div className="container mx-auto px-4">
          <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary transition-colors">
              Trang chủ
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary transition-colors">
              Sản phẩm
            </Link>
            <span>/</span>
            <span className="font-medium text-secondary">Giỏ hàng</span>
          </nav>

          <h1 className="mb-8 text-3xl font-bold text-secondary">Giỏ hàng ({items.length} sản phẩm)</h1>

          <div className="mx-auto max-w-4xl space-y-6">
            <div className="space-y-4">
              {cartWithProducts.map(({ item, product }) => (
                <CartItemRow
                  key={item.productSlug}
                  item={item}
                  onRemove={() => removeFromCart(item.productSlug)}
                  onUpdateQuantity={(qty) => updateQuantity(item.productSlug, qty)}
                />
              ))}
            </div>

            <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xl font-bold text-primary">
                  Tổng cộng: {formatPrice(totalAmount)}đ
                </p>
                <Link
                  href="/checkout"
                  className="inline-flex justify-center rounded-2xl bg-primary px-10 py-4 font-bold text-white shadow-lg hover:bg-primary-dark"
                >
                  Thanh toán
                </Link>
              </div>
            </div>

            <div className="text-center">
              <Link href="/products" className="text-primary hover:underline font-semibold">
                ← Tiếp tục mua sắm
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ContactPinned />
    </main>
  );
}
