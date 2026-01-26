"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "Shop có hỗ trợ ghép sim không? Nếu có thì phí bao nhiêu?",
    a: "Tất cả sim ghép mua tại Ngáo Store bạn đều được hỗ trợ ghép sim miễn phí. Phí ghép sim chỉ phát sinh khi bạn mua sim ghép tại các cửa hàng khác."
  },
  {
    q: "iPhone Lock sau khi ghép sim có ổn định không?",
    a: "Tùy theo model iPhone và sim ghép mà có thể có sự khác biệt. Nhưng chúng tôi bảo đảm quá trình sử dụng bạn sẽ được hỗ trợ nếu có vấn đề phát sinh."
  },
  {
    q: "Tôi có thể tự lắp sim ghép tại nhà không?",
    a: "Có, quy trình lắp rất đơn giản. Chúng tôi sẽ gửi kèm hướng dẫn chi tiết hoặc hỗ trợ video call để bạn có thể tự kích hoạt chỉ trong vài phút."
  },
  {
    q: "Sim ghép có bị 'văng' active khi thay đổi khu vực không?",
    a: "Chúng tôi sử dụng sim ghép và phương pháp kích hoạt mới nhất giúp duy trì trạng thái active ổn định, hạn chế tối đa việc bị văng active khi di chuyển."
  },
  {
    q: "Sim ghép có làm hao pin iPhone không?",
    a: "Với công nghệ sim ghép thế hệ mới tại Ngáo Store, mức tiêu thụ điện năng cực thấp, gần như không gây hao pin đáng kể. Bạn có thể yên tâm sử dụng cả ngày."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
              Hỏi Đáp Thường Gặp
            </h2>
            <h3 className="text-4xl font-black text-secondary mb-6 leading-tight">
              Giải Đáp Thắc Mắc <br /> Của Khách Hàng
            </h3>
            <p className="text-gray-500 text-lg mb-8">
              Bạn có câu hỏi khác? Liên hệ ngay với đội ngũ hỗ trợ của chúng tôi để được tư vấn miễn phí.
            </p>
            <button className="bg-secondary text-white px-8 py-4 rounded-2xl font-bold transition-all hover:bg-secondary-dark">
              <a target="_blank" href="tel:0988012895">Liên Hệ Hỗ Trợ</a>
            </button>
          </div>

          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 transition-all hover:border-primary/20"
              >
                <button 
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                >
                  <span className="text-lg font-bold text-secondary">{faq.q}</span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIdx === idx ? "bg-primary text-white" : "bg-gray-100 text-secondary"}`}>
                    {openIdx === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>
                
                <div className={`px-6 transition-all duration-300 ease-in-out ${openIdx === idx ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                  <p className="text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
