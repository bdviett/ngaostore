"use client";

import React from "react";
import { useRouter } from "next/navigation";
import type { SimGuide } from "@/types/sim";
import { Video } from "lucide-react";

interface SimCardProps {
  sim: SimGuide;
}

export default function SimCard({ sim }: SimCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/support?sim=${sim.slug}`);
  };

  return (
    <div className="group h-full flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
      <div className="flex flex-col flex-1 p-4 md:p-5">
        <h3 className="font-bold text-base md:text-lg text-secondary mb-3 line-clamp-2 flex-1 min-h-[2.5em]">
          {sim.name}
        </h3>
        <button
          type="button"
          onClick={handleClick}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark active:scale-[0.98] transition-all duration-200 text-sm md:text-base"
        >
          <Video size={18} className="shrink-0" />
          Hướng dẫn
        </button>
      </div>
    </div>
  );
}
