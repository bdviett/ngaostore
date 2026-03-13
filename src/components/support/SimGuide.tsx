"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { getVideoEmbedUrl } from "@/lib/video-embed";
import type { SimGuide as SimGuideType } from "@/types/sim";

const VideoEmbed = dynamic(() => import("./VideoEmbed"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center text-gray-400">
      Đang tải video...
    </div>
  ),
});

interface SimGuideProps {
  sim: SimGuideType;
}

export default function SimGuide({ sim }: SimGuideProps) {
  const router = useRouter();
  const embedUrl = sim.video ? getVideoEmbedUrl(sim.video) : null;

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
        Quay lại chọn SIM
      </button>

      <h2 className="text-xl md:text-2xl font-bold text-secondary leading-tight">
        Hướng dẫn ghép sim {sim.name} chi tiết
      </h2>

      <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
        <h3 className="font-semibold text-secondary mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-primary rounded-full" />
          Các bước thực hiện
        </h3>
        <ol className="space-y-3">
          {sim.steps.map((step, i) => (
            <li key={i} className="flex gap-3 pl-1">
              <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <span className="text-gray-700 leading-relaxed pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
        <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-100 w-full aspect-video">
          <VideoEmbed url={embedUrl} />
        </div>
      </div>

      {sim.note && (
        <div className="rounded-2xl bg-amber-50/80 border border-amber-200/80 p-5">
          <p className="text-amber-800 text-sm leading-relaxed">
            <strong className="font-semibold">Lưu ý:</strong> {sim.note}
            <br />
            <a href="https://sickw.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              https://sickw.com
            </a>
          </p>
        </div>
      )}

      <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
        <h3 className="font-semibold text-secondary mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-primary rounded-full" />
          Công cụ hỗ trợ
        </h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/support?tool=carrier-check"
            className="flex items-center justify-between gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-primary/5 hover:border-primary/20 text-secondary hover:text-primary transition-all duration-200 group"
          >
            <span className="font-medium">Kiểm tra nhà mạng lock</span>
            <ChevronRight size={20} className="text-gray-400 group-hover:text-primary shrink-0 transition-colors" />
          </Link>
          <Link
            href="/support?tool=troubleshoot"
            className="flex items-center justify-between gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-primary/5 hover:border-primary/20 text-secondary hover:text-primary transition-all duration-200 group"
          >
            <span className="font-medium">Khắc phục sự cố</span>
            <ChevronRight size={20} className="text-gray-400 group-hover:text-primary shrink-0 transition-colors" />
          </Link>
          <Link
            href="/support?tool=mai-sim"
            className="flex items-center justify-between gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-primary/5 hover:border-primary/20 text-secondary hover:text-primary transition-all duration-200 group"
          >
            <span className="font-medium">Hướng dẫn mài mỏng SIM</span>
            <ChevronRight size={20} className="text-gray-400 group-hover:text-primary shrink-0 transition-colors" />
          </Link>
        </div>
      </div>
    </section>
  );
}
