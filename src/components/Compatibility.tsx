import React from "react";
import { Check } from "lucide-react";

const models = [
  { group: "iPhone 17 Series", items: ["iPhone 17 Pro Max", "iPhone 17 Pro", "iPhone 17 Plus", "iPhone 17"] },
  { group: "iPhone 16 Series", items: ["iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16"] },
  { group: "iPhone 15 Series", items: ["iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15"] },
  { group: "iPhone 14 Series", items: ["iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14"] },
  { group: "iPhone 13 Series", items: ["iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13 Mini", "iPhone 13"] },
  { group: "Các đời cũ hơn", items: ["iPhone 12 Series", "iPhone 11 Series", "iPhone XS/XR", "iPhone X/8/7/6s"] }
];

export default function Compatibility() {
  return (
    <section id="compatibility" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-secondary-dark rounded-[48px] overflow-hidden p-8 md:p-16 relative">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-white text-4xl md:text-5xl font-black mb-8 leading-tight">
                Tương Thích Với <br />
                <span className="text-primary">Mọi Model iPhone</span>
              </h2>
              <p className="text-white/60 text-lg mb-10">
                Sim ghép của chúng tôi hỗ trợ tất cả các dòng iPhone Lock từ các nhà mạng Mỹ (AT&T, T-Mobile, Verizon, Xfinity...), Nhật Bản (Docomo, Softbank, Au KDDI...), Canada, Châu Âu...
              </p>
              
              <div className="space-y-4">
                {[
                  "Hỗ trợ iOS 12 đến iOS 26 mới nhất",
                  "Mọi nhà mạng trên toàn thế giới",
                  "Fix full lỗi iMessage, Facetime",
                  "Sóng 4G/5G ổn định như máy quốc tế"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white">
                    <div className="bg-primary/20 p-1 rounded-full">
                      <Check className="text-primary" size={18} />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {models.map((group, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                  <h4 className="text-primary font-bold mb-4">{group.group}</h4>
                  <ul className="space-y-2">
                    {group.items.map((item, i) => (
                      <li key={i} className="text-white/70 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
