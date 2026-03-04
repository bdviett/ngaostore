"use client";

import React from "react";
import {
  Wifi,
  Settings,
  Smartphone,
  Lock,
  RefreshCw,
  Zap,
  Globe,
  LifeBuoy
} from "lucide-react";
import Slideshow from "./Slideshow";

const features = [
  {
    title: "Sóng Khỏe & Ổn Định",
    desc: "Khả năng bắt sóng ở khu vực thành phố hay vùng nông thôn đều rất tốt, hỗ trợ 4G/5G ổn định như máy Quốc Tế.",
    icon: <Wifi className="w-8 h-8" />,
    color: "bg-blue-500"
  },
  {
    title: "Fix Full Lỗi Máy Lock",
    desc: "Fix full lỗi máy lock: Tiktok Shop, Google Map xe máy, Điểm Truy Cập, +84...",
    icon: <Settings className="w-8 h-8" />,
    color: "bg-primary"
  },
  {
    title: "Hỗ Trợ Mọi iOS",
    desc: "Từ iOS cũ đến iOS mới nhất đều có thể kích hoạt mượt mà. Bạn không cần lo lắng về vấn đề về phiên bản iOS.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "bg-purple-500"
  },
  {
    title: "Hỗ Trợ Miễn Phí",
    desc: "Sim ghép lắp đặt dễ dàng, hỗ trợ kích hoạt 24/7 online miễn phí nếu có vấn đề.",
    icon: <Zap className="w-8 h-8" />,
    color: "bg-yellow-500"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
            Tính Năng Vượt Trội
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-secondary mb-6 leading-tight">
            Tại Sao Nên Chọn Sim Ghép Tại Ngáo Store?
          </h3>
          <p className="text-gray-500 text-lg">
            Chúng tôi cung cấp giải pháp mở khóa iPhone Lock bằng Sim Ghép tiên tiến nhất, giúp bạn tiết kiệm chi phí mà vẫn có trải nghiệm tuyệt vời.
          </p>
        </div>

        <div className="block lg:hidden">
          <Slideshow
            items={features}
            renderItem={(feature) => (
              <div className="p-8 rounded-[32px] border border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all group">
                <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-secondary mb-3">{feature.title}</h4>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            )}
            keyExtractor={(f) => f.title}
            variant="light"
          />
        </div>
        <div className="hidden lg:grid lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-[32px] border border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all group"
            >
              <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-secondary mb-3">{feature.title}</h4>
              <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
