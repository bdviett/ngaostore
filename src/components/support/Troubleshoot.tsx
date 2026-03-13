"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";

const TROUBLESHOOT_ITEMS = [
  {
    id: "no-signal",
    title: "Không có sóng",
    solutions: [
      "Kiểm tra xem báo không có dịch vụ hay không có sim",
      "SIM có data chưa?",
      "Thử kích lại sóng trong ứng dụng sim",
      "Thử đặt lại cài đặt mạng: Cài đặt > Đặt lại > Đặt lại cài đặt mạng",
    ],
  },
  {
    id: "no-4g",
    title: "Không có 4G",
    solutions: ["Bật roaming", "Reset network"],
  },
  {
    id: "no-activate",
    title: "Không kích hoạt được",
    solutions: ["Check lại nhà mạng lock của bạn", "Kiểm tra xem SIM có data chưa", "Tiến hành kích hoạt sim"],
  },
];

export default function Troubleshoot() {
  const router = useRouter();
  const [openId, setOpenId] = useState<string | null>(TROUBLESHOOT_ITEMS[0]?.id ?? null);

  const handleBack = () => {
    router.push("/support");
  };

  return (
    <section className="py-6 max-w-2xl mx-auto">
      <button
        type="button"
        onClick={handleBack}
        className="flex items-center gap-2 text-gray-600 hover:text-primary mb-6 transition-colors"
      >
        <ArrowLeft size={20} />
        Quay lại
      </button>

      <h2 className="text-2xl font-bold text-secondary mb-2">
        Khắc phục sự cố
      </h2>
      <p className="text-gray-500 text-sm mb-8">
        Chọn vấn đề bạn gặp phải để xem hướng xử lý
      </p>

      <div className="space-y-2">
        {TROUBLESHOOT_ITEMS.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="w-full flex items-center justify-between p-4 text-left font-semibold text-secondary hover:bg-gray-50 transition-colors"
              >
                {item.title}
                {isOpen ? (
                  <ChevronUp size={20} className="text-gray-400 shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-gray-400 shrink-0" />
                )}
              </button>
              {isOpen && (
                <div className="px-4 pb-4 pt-0">
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {item.solutions.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
