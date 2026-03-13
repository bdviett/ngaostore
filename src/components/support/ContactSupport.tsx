import React from "react";
import Link from "next/link";
import { MessageCircle, Phone, Video } from "lucide-react";

const ZALO_URL = "https://zalo.me/0988012895";
const HOTLINE_URL = "tel:+84988012895";

export default function ContactSupport() {
  return (
    <section className="py-12 border-t border-gray-100 mt-12">
      <h2 className="text-xl font-bold text-secondary mb-6 text-center">
        Cần hỗ trợ thêm?
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href={`${HOTLINE_URL}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 px-8 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
        >
          <Phone size={22} />
          0988 012 895
        </Link>
        <Link
          href={ZALO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 px-8 rounded-xl bg-[#0068FF] text-white font-semibold hover:bg-[#0052CC] transition-colors shadow-lg"
        >
          <MessageCircle size={22} />
          Chat Zalo
        </Link>
        <Link
          href={`${ZALO_URL}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 px-8 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
        >
          <Video size={22} />
          Video Call
        </Link>
      </div>
    </section>
  );
}
