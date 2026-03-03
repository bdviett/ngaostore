import React from "react";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Ghép Sim Tận Nơi",
    price: "Từ 150.000",
    desc: "Hỗ trợ ghép sim tận nơi nội thành Hà Nội và TP Đà Nẵng. Nhanh chóng, tiện lợi, an toàn.",
    features: [
      "Sim ghép 1 mảnh, 2 mảnh",
      "Hỏa tốc 30p-1h",
      "Bảo hành 3 tháng, lỗi đổi mới",
      "Tự động kích hoạt, không cần cấu hình",
      "Hỗ trợ 4G/5G ổn định"
    ],
    highlight: false,
    link: "http://zalo.me/0988012895"
  },
  {
    name: "Mua Sim Ghép",
    price: "Từ 99.000",
    desc: "Hỗ trợ máy từ 6-16ProMax, ghép sim sử dụng ổn định, bảo hành 3 tháng.",
    features: [
      "Sim ghép 1 mảnh, 2 mảnh",
      "Ghép chế độ EID, TMSI",
      "Hỗ trợ 4G/5G ổn định",
      "Bảo hành 3 tháng",
      "Tự động kích hoạt"
    ],
    highlight: true,
    link: "https://shopee.vn/ngaostore86"
  },
  {
    name: "Mở khóa quốc tế",
    price: "Từ 200.000",
    desc: "Mở khóa iPhone Lock thành máy Quốc Tế, chuyên nghiệp, an toàn, nhanh chóng. Bảo hành vĩnh viễn, hỗ trợ 24/7.",
    features: [
      "Mở khóa Lock thành iPhone Quốc Tế",
      "Hoạt động ổn định, không phải dùng sim ghép",
      "Bảo hành vĩnh viễn, hỗ trợ 24/7",
      "Hỗ trợ mọi nhà mạng tại Việt Nam",
      "Nhanh chóng, uy tín"
    ],
    highlight: false,
    link: "http://zalo.me/0988012895"
  }
];

export default function Service() {
  return (
    <section id="services" className="py-24 bg-secondary-dark">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Bảng Giá Dịch Vụ</h2>
          <p className="text-white/60 text-lg">
            Chúng tôi cam kết mang đến chất lượng tốt nhất với mức giá cạnh tranh nhất. Dịch vụ hỗ trợ ghép sim tận nơi trong nội thành Hà Nội và TP Đà Nẵng.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative p-10 rounded-[40px] border-2 transition-all duration-300 ${plan.highlight
                ? "bg-white/10 border-primary shadow-2xl shadow-primary/20 scale-105 z-10 backdrop-blur-sm"
                : "bg-white/5 border-white/10 hover:border-primary/30 backdrop-blur-sm"
                }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-black uppercase px-6 py-2 rounded-full tracking-widest">
                  Khuyên dùng
                </div>
              )}

              <div className="mb-8">
                <h4 className={`text-xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-white"}`}>
                  {plan.name}
                </h4>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-black ${plan.highlight ? "text-white" : "text-white"}`}>
                    {plan.price}
                  </span>
                  <span className={`font-bold ${plan.highlight ? "text-white/60" : "text-white/60"}`}>
                    VNĐ
                  </span>
                </div>
                <p className={`mt-4 text-sm leading-relaxed ${plan.highlight ? "text-white/60" : "text-white/60"}`}>
                  {plan.desc}
                </p>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className={`shrink-0 ${plan.highlight ? "text-primary" : "text-primary"}`} size={18} />
                    <span className={`text-sm font-medium ${plan.highlight ? "text-white/80" : "text-white/70"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${plan.highlight
                ? "bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/30"
                : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                }`} href={plan.link} target="_blank">
                Chọn Gói Này
                <ArrowRight size={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
