"use client";

import { useState } from "react";
import { validateCheckoutForm, type CheckoutForm as CheckoutFormData } from "@/lib/checkoutValidator";

interface CheckoutFormProps {
  onSubmit: (data: CheckoutFormData) => void;
  isSubmitting?: boolean;
}

export default function CheckoutForm({ onSubmit, isSubmitting }: CheckoutFormProps) {
  const [errors, setErrors] = useState<string[]>([]);
  const [form, setForm] = useState<CheckoutFormData>({
    name: "",
    phone: "",
    address: "",
    note: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateCheckoutForm(form);
    if (!result.valid) {
      setErrors(result.errors);
      return;
    }
    setErrors([]);
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errors.length > 0 && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700">
          <ul className="list-inside list-disc space-y-1">
            {errors.map((err, i) => (
              <li key={i}>{err}</li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-semibold text-secondary">
          Họ tên *
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:border-primary focus:outline-none text-gray-500"
          placeholder="Nguyễn Văn A"
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-secondary">
          Số điện thoại *
        </label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:border-primary focus:outline-none text-gray-500"
          placeholder="0901234567"
          required
        />
      </div>
      <div>
        <label htmlFor="address" className="mb-1 block text-sm font-semibold text-secondary">
          Địa chỉ nhận hàng *
        </label>
        <textarea
          id="address"
          value={form.address}
          onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))}
          className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:border-primary focus:outline-none text-gray-500"
          placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành"
          rows={3}
          required
        />
      </div>
      <div>
        <label htmlFor="note" className="mb-1 block text-sm font-semibold text-secondary">
          Ghi chú (tùy chọn)
        </label>
        <textarea
          id="note"
          value={form.note || ""}
          onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
          className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:border-primary focus:outline-none text-gray-500"
          placeholder="Ghi chú cho đơn hàng (Ví dụ: Nhà mạng lock, số IMEI, máy muốn sử dụng ...)"
          rows={2}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-2xl bg-primary py-4 font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-primary/40 disabled:opacity-70"
      >
        {isSubmitting ? "Đang xử lý..." : "Xác nhận & Thanh toán"}
      </button>
    </form>
  );
}
