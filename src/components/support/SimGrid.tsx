"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { SIM_GUIDES } from "@/data/sim-guides";
import SearchSupport from "./SearchSupport";
import SimCard from "./SimCard";
import { Search, Wrench, Scissors } from "lucide-react";

export default function SimGrid() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const filteredSims = useMemo(() => {
    if (!search.trim()) return SIM_GUIDES;
    const q = search.toLowerCase().trim();
    return SIM_GUIDES.filter(
      (sim) =>
        sim.name.toLowerCase().includes(q) ||
        sim.slug.toLowerCase().includes(q.toLowerCase().replace(/\s+/g, "-"))
    );
  }, [search]);

  return (
    <section className="py-6">
      <SearchSupport value={search} onChange={setSearch} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {filteredSims.map((sim) => (
          <SimCard key={sim.slug} sim={sim} />
        ))}
      </div>
      {filteredSims.length === 0 && (
        <p className="text-center text-gray-500 py-12">
          Không tìm thấy loại SIM phù hợp. Thử từ khóa khác.
        </p>
      )}
      <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
        <button
          type="button"
          onClick={() => router.push("/support?tool=carrier-check")}
          className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl border-2 border-gray-200 hover:border-primary/30 hover:bg-primary/5 transition-all font-medium text-secondary"
        >
          <Search size={20} />
          Kiểm tra nhà mạng lock
        </button>
        <button
          type="button"
          onClick={() => router.push("/support?tool=troubleshoot")}
          className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl border-2 border-gray-200 hover:border-primary/30 hover:bg-primary/5 transition-all font-medium text-secondary"
        >
          <Wrench size={20} />
          Khắc phục sự cố
        </button>
        <button
          type="button"
          onClick={() => router.push("/support?tool=mai-sim")}
          className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl border-2 border-gray-200 hover:border-primary/30 hover:bg-primary/5 transition-all font-medium text-secondary"
        >
          <Scissors size={20} />
          Hướng dẫn mài mỏng SIM
        </button>
      </div>
    </section>
  );
}
