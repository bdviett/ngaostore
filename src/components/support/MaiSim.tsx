"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { getVideoEmbedUrl } from "@/lib/video-embed";
import { MAI_SIM_GUIDE } from "@/data/mai-sim-guide";

const VideoEmbed = dynamic(() => import("./VideoEmbed"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center text-gray-400">
      Đang tải video...
    </div>
  ),
});

export default function MaiSim() {
  const router = useRouter();
  const embedUrl = getVideoEmbedUrl(MAI_SIM_GUIDE.videoUrl);

  const handleBack = () => {
    router.push("/support");
  };

  return (
    <section className="py-6 max-w-2xl mx-auto space-y-8">
      <button
        type="button"
        onClick={handleBack}
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary transition-colors duration-200"
      >
        <ArrowLeft size={18} />
        Quay lại
      </button>

      <h2 className="text-xl md:text-2xl font-bold text-secondary leading-tight">
        Hướng dẫn mài mỏng SIM
      </h2>

      <p className="text-gray-600">
        Mài mỏng SIM giúp bạn dễ dàng tháo lắp, tránh kẹt hư hỏng sim ghép. Xem video hướng dẫn chi tiết bên dưới.
      </p>

      {embedUrl && (
        <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-100 w-full aspect-video">
          <VideoEmbed url={embedUrl} />
        </div>
      )}

      <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
        <h3 className="font-semibold text-secondary mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-primary rounded-full" />
          Các bước thực hiện
        </h3>
        <ol className="space-y-3">
          {MAI_SIM_GUIDE.steps.map((step, i) => (
            <li key={i} className="flex gap-3 pl-1">
              <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <span className="text-gray-700 leading-relaxed pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="rounded-2xl bg-amber-50/80 border border-amber-200/80 p-5">
        <p className="text-amber-800 text-sm leading-relaxed">
          <strong className="font-semibold">Lưu ý:</strong> {MAI_SIM_GUIDE.note}
        </p>
      </div>
    </section>
  );
}
