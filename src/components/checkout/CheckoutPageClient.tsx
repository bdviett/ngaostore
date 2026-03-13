"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPinned from "@/components/ContactPinned";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";
import QRPayment from "./QRPayment";
import { products, getProductSlug } from "@/data/mock";
import { generateOrderId } from "@/lib/generateOrderId";
import { generateOrderHash, generateOrderHashMulti } from "@/lib/orderHash";
import { saveOrder, deleteOrder } from "@/lib/orderStorage";
import { parsePrice, ZALO_URL } from "@/lib/checkout";
import { notifyOrderToSeller, formatOrderForShare } from "@/lib/orderWebhook";
import type { CheckoutForm as CheckoutFormData } from "@/lib/checkoutValidator";
import { useCart } from "@/contexts/CartContext";

function findProductBySlug(slug: string) {
  return products.find((p) => getProductSlug(p) === slug);
}

export interface CheckoutItem {
  productSlug: string;
  productName: string;
  price: number;
  quantity: number;
}

function buildCheckoutItems(slug: string | null, cartItems: { productSlug: string; quantity: number }[]): CheckoutItem[] {
  if (slug) {
    const product = findProductBySlug(slug);
    if (!product) return [];
    return [{ productSlug: slug, productName: product.name, price: parsePrice(product.price), quantity: 1 }];
  }
  return cartItems
    .map((ci) => {
      const product = findProductBySlug(ci.productSlug);
      return product ? { productSlug: ci.productSlug, productName: product.name, price: parsePrice(product.price), quantity: ci.quantity } : null;
    })
    .filter(Boolean) as CheckoutItem[];
}

export default function CheckoutPageClient() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  const { items: cartItems, clearCart } = useCart();

  const checkoutItems = useMemo(
    () => buildCheckoutItems(slug, cartItems),
    [slug, cartItems]
  );

  const totalAmount = useMemo(
    () => checkoutItems.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [checkoutItems]
  );

  const [copied, setCopied] = useState(false);
  const [orderComplete, setOrderComplete] = useState<{
    orderId: string;
    name: string;
    phone: string;
    address: string;
    note?: string;
    items: CheckoutItem[];
    totalAmount: number;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (form: CheckoutFormData) => {
    if (checkoutItems.length === 0) return;
    setIsSubmitting(true);

    const orderId = generateOrderId();
    const orderItems = checkoutItems.map((i) => ({ product: i.productName, price: i.price, quantity: i.quantity }));

    const hash =
      orderItems.length === 1
        ? generateOrderHash({ id: orderId, product: orderItems[0].product, price: orderItems[0].price, quantity: orderItems[0].quantity })
        : generateOrderHashMulti({ id: orderId, items: orderItems });

    const orderPayload = {
      id: orderId,
      name: form.name,
      phone: form.phone,
      address: form.address,
      note: form.note,
      items: checkoutItems.map((i) => ({
        product: i.productName,
        productSlug: i.productSlug,
        price: i.price,
        quantity: i.quantity,
      })),
      totalAmount,
      status: "pending" as const,
      createdAt: Date.now(),
    };

    saveOrder({
      ...orderPayload,
      hash,
    });

    notifyOrderToSeller(orderPayload);

    clearCart();
    setOrderComplete({
      orderId,
      name: form.name,
      phone: form.phone,
      address: form.address,
      note: form.note,
      items: checkoutItems,
      totalAmount,
    });
    setIsSubmitting(false);
  };

  if (checkoutItems.length === 0 && !orderComplete) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar variant="dark" />
        <div className="container mx-auto px-4 pt-32 pb-24">
          <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-8 text-center">
            <h1 className="mb-4 text-2xl font-bold text-amber-800">Chưa chọn sản phẩm</h1>
            <p className="mb-6 text-gray-600">
              Vui lòng chọn sản phẩm từ trang sản phẩm hoặc thêm vào giỏ hàng để thanh toán.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/products"
                className="inline-flex rounded-2xl bg-primary px-8 py-3 font-bold text-white hover:bg-primary-dark"
              >
                Xem sản phẩm
              </Link>
              <Link
                href="/cart"
                className="inline-flex rounded-2xl border-2 border-primary px-8 py-3 font-bold text-primary hover:bg-primary/5"
              >
                Xem giỏ hàng
              </Link>
            </div>
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
        <div className="container mx-auto px-4 pt-4">
          <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary transition-colors">
              Trang chủ
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary transition-colors">
              Sản phẩm
            </Link>
            <span>/</span>
            <span className="font-medium text-secondary">Thanh toán</span>
          </nav>

          <h1 className="mb-8 text-3xl font-bold text-secondary">Thanh toán đơn hàng</h1>

          {orderComplete ? (
            <div className="mx-auto max-w-2xl space-y-6">
              <OrderSummary
                items={orderComplete.items.map((i) => ({ productName: i.productName, quantity: i.quantity, price: i.price }))}
                totalAmount={orderComplete.totalAmount}
                orderId={orderComplete.orderId}
                name={orderComplete.name}
                phone={orderComplete.phone}
                address={orderComplete.address}
                note={orderComplete.note}
              />
              <QRPayment amount={orderComplete.totalAmount} orderId={orderComplete.orderId} />
              <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-6 text-center">
                <p className="mb-4 font-semibold text-secondary">
                  Sau khi chuyển khoản vui lòng gửi thông tin đơn hàng qua Zalo
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <button
                    type="button"
                    onClick={async () => {
                      const text = formatOrderForShare({
                        id: orderComplete.orderId,
                        name: orderComplete.name,
                        phone: orderComplete.phone,
                        address: orderComplete.address,
                        note: orderComplete.note,
                        items: orderComplete.items.map((i) => ({
                          product: i.productName,
                          productSlug: i.productSlug,
                          price: i.price,
                          quantity: i.quantity,
                        })),
                        totalAmount: orderComplete.totalAmount,
                        status: "pending",
                        createdAt: Date.now(),
                      });
                      await navigator.clipboard.writeText(text);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-primary px-6 py-3 font-bold text-primary hover:bg-primary/5 transition-colors"
                  >
                    {copied ? "Đã copy!" : "Copy thông tin đơn hàng"}
                  </button>
                  <a
                    href={ZALO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 font-bold text-white shadow-lg hover:bg-primary-dark"
                  >
                    Gửi Zalo xác nhận
                  </a>
                </div>
                <p className="mt-3 text-sm text-gray-500">
                  Copy thông tin → Mở Zalo → Dán và gửi cho shop
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Sau khi xác nhận, đơn hàng sẽ được vận chuyển qua SPX hoặc Viettel Post. <br />
                  Mã vận đơn sẽ được gửi đến Zalo của bạn để theo dõi đơn hàng. Cảm ơn bạn đã mua hàng.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    deleteOrder(orderComplete.orderId);
                    setOrderComplete(null);
                  }}
                  className="rounded-xl border-2 border-red-200 px-6 py-2 font-semibold text-red-600 hover:bg-red-50 transition-colors"
                >
                  Xóa đơn
                </button>
                <Link
                  href="/products"
                  className="text-primary hover:underline font-semibold"
                >
                  ← Tiếp tục mua sắm
                </Link>
              </div>
            </div>
          ) : (
            <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h2 className="mb-4 text-xl font-bold text-secondary">Thông tin giao hàng</h2>
                <CheckoutForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
              </div>
              <div>
                <div className="sticky top-28 rounded-2xl border-2 border-primary/20 bg-primary/5 p-6">
                  <h2 className="mb-4 text-xl font-bold text-primary">Đơn hàng</h2>
                  <div className="space-y-2">
                    {checkoutItems.map((i) => (
                      <p key={i.productSlug} className="text-secondary">
                        {i.productName} × {i.quantity} = {(i.price * i.quantity).toLocaleString("vi-VN")}đ
                      </p>
                    ))}
                  </div>
                  <p className="mt-4 text-lg font-bold text-primary">
                    Tổng: {totalAmount.toLocaleString("vi-VN")}đ
                  </p>
                  <p className="mt-2 text-xs font-bold italic text-primary/80">
                    Miễn phí giao hàng cho đơn từ 100.000đ
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <ContactPinned />
    </main>
  );
}
