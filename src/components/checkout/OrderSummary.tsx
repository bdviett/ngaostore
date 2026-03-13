"use client";

import { formatPrice } from "@/lib/checkout";

export interface OrderItem {
  productName: string;
  quantity: number;
  price: number;
}

interface OrderSummaryProps {
  items: OrderItem[];
  totalAmount: number;
  orderId: string;
  name: string;
  phone: string;
  address: string;
  note?: string;
}

export default function OrderSummary({
  items,
  totalAmount,
  orderId,
  name,
  phone,
  address,
  note,
}: OrderSummaryProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-6">
        <h2 className="mb-4 text-xl font-bold text-primary">Đơn hàng: {orderId}</h2>
        <div className="space-y-2 text-gray-500">
          {items.map((item, i) => (
            <p key={i}>
              <span className="font-semibold text-secondary">{item.productName}</span> × {item.quantity} = {formatPrice(item.price * item.quantity)}đ
            </p>
          ))}
          <p className="mt-4 text-lg font-bold text-primary">
            Tổng tiền: {formatPrice(totalAmount)}đ
          </p>
          <p className="mt-2 text-xs font-bold italic text-primary/80">
            Miễn phí ship cho đơn từ 100.000đ
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="mb-4 text-lg font-bold text-secondary">Thông tin giao hàng</h3>
        <div className="space-y-1 text-gray-700">
          <p>{name}</p>
          <p>{phone}</p>
          <p>{address}</p>
          {note && <p className="text-gray-500">Ghi chú: {note}</p>}
        </div>
      </div>
    </div>
  );
}
