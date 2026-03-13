"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Search } from "lucide-react";

export default function CarrierCheck() {
  const router = useRouter();
  const [imei, setImei] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const sanitizeImei = (value: string) =>
    value.replace(/\s/g, "").replace(/\D/g, "").slice(0, 15);

  const handleImeiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImei(sanitizeImei(e.target.value));
  };

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanImei = sanitizeImei(imei);
    if (!cleanImei || cleanImei.length !== 15) return;
    setLoading(true);
    setResult(null);
    // Mock: simulate API call
    await new Promise((r) => setTimeout(r, 800));
    setResult("AT&T");
    setLoading(false);
  };

  const handleBack = () => {
    router.push("/support");
  };

  return (
    <section className="py-6 max-w-md mx-auto">
      <button
        type="button"
        onClick={handleBack}
        className="flex items-center gap-2 text-gray-600 hover:text-primary mb-6 transition-colors"
      >
        <ArrowLeft size={20} />
        Quay lại
      </button>

      <h2 className="text-2xl font-bold text-secondary mb-2">
        Kiểm tra nhà mạng lock
      </h2>
      <p className="text-gray-500 text-sm mb-8">
        Vào trang dưới đây để xem nhà mạng lock của bạn. <br />
        <a href="https://sickw.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          https://sickw.com
        </a>
      </p>
      <p className="text-gray-500 text-sm mb-8">
        Hoặc nhập IMEI để xem máy bị lock nhà mạng nào.
        <span className="text-red-500"> (Chức năng demo, đang phát triển)</span>
      </p>

      <form onSubmit={handleCheck} className="space-y-4">
        <div>
          <label htmlFor="imei" className="block text-sm font-medium text-secondary mb-2">
            Số IMEI
          </label>
          <input
            id="imei"
            type="text"
            value={imei}
            onChange={handleImeiChange}
            placeholder="15 chữ số"
            inputMode="numeric"
            autoComplete="off"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-500"
          />
        </div>
        <button
          type="submit"
          disabled={loading || sanitizeImei(imei).length !== 15}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Search size={18} />
          {loading ? "Đang kiểm tra..." : "Kiểm tra"}
        </button>
      </form>

      {result && (
        <div className="mt-6 p-4 rounded-xl bg-green-50 border border-green-200">
          <p className="text-green-800 font-medium">
            <strong>Carrier:</strong> {result}
          </p>
          <p className="text-green-600 text-sm mt-2">
            Kết quả demo. Tích hợp API IMEI sẽ có trong tương lai.
          </p>
        </div>
      )}
    </section>
  );
}
