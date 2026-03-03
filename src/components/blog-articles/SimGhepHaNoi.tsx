import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPinned from "@/components/ContactPinned";
import Link from "next/link";
import { Check, MapPin, Phone, Shield, Zap, ArrowRight } from "lucide-react";

export default function SimGhepHaNoi() {
  return (
    <main className="min-h-screen">
      <Navbar variant="dark" />

      {/* Hero - H1 duy nhất */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-secondary-dark">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
            <MapPin className="text-primary" size={18} />
            <span className="text-white/80 text-sm font-medium uppercase tracking-wider">
              Dịch vụ tại Hà Nội
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl">
            Sim Ghép Hà Nội & Mở Khóa iPhone Lock Chuyên Nghiệp
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
            Ngáo Store – Địa chỉ <strong>sim ghép hà nội</strong> uy tín. Chuyên <strong>ghép sim iPhone Lock hà nội</strong> và <strong>mở khóa iPhone Lock hà nội</strong> tận nơi. Thanh Xuân, Cầu Giấy, Hoàng Mai, Long Biên. Bảo hành 3 tháng, hỗ trợ 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="http://zalo.me/0988012895"
              target="_blank"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary/25"
            >
              Liên Hệ Ghép Sim Ngay
              <ArrowRight size={20} />
            </Link>
            <Link
              href="tel:0988012895"
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all"
            >
              <Phone size={20} />
              0988 012 895
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 mt-10">
            {[
              { icon: <Zap className="text-yellow-400" size={20} />, text: "Kích hoạt 10 giây" },
              { icon: <Shield className="text-green-400" size={20} />, text: "Bảo hành 3 tháng" },
              { icon: <Check className="text-primary" size={20} />, text: "Ghép tận nơi 24/7" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/80 font-medium">
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H2: Giới thiệu dịch vụ sim ghép hà nội */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
            Sim Ghép Hà Nội – Dịch Vụ Uy Tín Tại Ngáo Store
          </h2>
          <div className="prose prose-lg max-w-none text-secondary/80 space-y-6">
            <p>
              <strong>Sim ghép hà nội</strong> là nhu cầu phổ biến của người dùng iPhone Lock. Tại Ngáo Store, chúng tôi cung cấp dịch vụ <strong>ghép sim iPhone Lock hà nội</strong> chuyên nghiệp với sim ghép Bison, Heicard chính hãng. Khách hàng tại các quận Thanh Xuân, Cầu Giấy, Hoàng Mai, Long Biên, Đống Đa có thể đến trực tiếp hoặc đặt lịch ghép sim tận nơi.
            </p>
            <p>
              Ngoài dịch vụ sim ghép, Ngáo Store còn là địa chỉ <strong>mở khóa iPhone Lock hà nội</strong> uy tín. Mở khóa quốc tế giúp máy dùng được mọi sim Việt Nam mà không cần sim ghép. Bảo hành vĩnh viễn, hỗ trợ 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* H2: Ghép sim iPhone Lock hà nội */}
      <section className="py-20 bg-secondary-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            Ghép Sim iPhone Lock Hà Nội – Nhanh Chóng, Ổn Định
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">
                Sim ghép hà nội hỗ trợ những dòng máy nào?
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Dịch vụ <strong>ghép sim iPhone Lock hà nội</strong> tại Ngáo Store hỗ trợ từ iPhone 6 đến iPhone 16 Pro Max. Sim ghép 1 mảnh, 2 mảnh, chế độ EID và TMSI. Hỗ trợ 4G/5G ổn định, tự động kích hoạt không cần cấu hình.
              </p>
              <h3 className="text-xl font-bold text-primary mb-4">
                Ghép sim tận nơi tại Hà Nội
              </h3>
              <p className="text-white/70 leading-relaxed">
                Khách ở nội thành Hà Nội có thể đặt lịch ghép sim tận nơi. Thời gian hỏa tốc 30 phút – 1 giờ. Đội ngũ kỹ thuật chuyên nghiệp, thiết bị hiện đại đảm bảo chất lượng.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Sim ghép Bison, Heicard chính hãng",
                "Hỗ trợ iPhone 6 – iPhone 16 Pro Max",
                "Ghép tận nơi nội thành Hà Nội",
                "Bảo hành 3 tháng, lỗi đổi mới",
                "4G/5G ổn định, kích hoạt tự động",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <Check className="text-primary shrink-0" size={22} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* H2: Mở khóa iPhone Lock hà nội */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-10">
            Mở Khóa iPhone Lock Hà Nội – Giải Pháp Dài Hạn
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">
                Tại sao nên mở khóa thay vì dùng sim ghép?
              </h3>
              <p className="text-secondary/80 leading-relaxed mb-6">
                <strong>Mở khóa iPhone Lock hà nội</strong> giúp máy trở thành iPhone Quốc Tế. Bạn dùng được mọi sim Việt Nam, không cần sim ghép, không lo mất sóng hay lỗi danh bạ. Đây là giải pháp dài hạn, tiết kiệm chi phí so với thay sim ghép định kỳ.
              </p>
              <h3 className="text-xl font-bold text-primary mb-4">
                Mở khóa iPhone Lock tại Hà Nội ở đâu uy tín?
              </h3>
              <p className="text-secondary/80 leading-relaxed">
                Ngáo Store là địa chỉ <strong>mở khóa iphone lock hà nội</strong> được nhiều khách hàng tin tưởng. Quy trình chuyên nghiệp, bảo hành vĩnh viễn, hỗ trợ 24/7. Cơ sở tại Thanh Xuân và Duy Tân, thuận tiện di chuyển.
              </p>
            </div>
            <div className="bg-secondary-dark/5 rounded-3xl p-8 border border-secondary/10">
              <h4 className="font-bold text-secondary mb-4">Lợi ích mở khóa:</h4>
              <ul className="space-y-3 text-secondary/80">
                <li className="flex gap-2">
                  <Check className="text-primary shrink-0 mt-0.5" size={18} />
                  Dùng mọi sim Việt Nam, không cần sim ghép
                </li>
                <li className="flex gap-2">
                  <Check className="text-primary shrink-0 mt-0.5" size={18} />
                  Bảo hành vĩnh viễn
                </li>
                <li className="flex gap-2">
                  <Check className="text-primary shrink-0 mt-0.5" size={18} />
                  Hỗ trợ mọi nhà mạng
                </li>
                <li className="flex gap-2">
                  <Check className="text-primary shrink-0 mt-0.5" size={18} />
                  Không lo lỗi danh bạ, mất sóng
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* H2: Bảng giá & CTA */}
      <section className="py-20 bg-secondary-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Bảng Giá Sim Ghép Hà Nội & Mở Khóa iPhone Lock
          </h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Giá cạnh tranh, chất lượng đảm bảo. Liên hệ Zalo để được tư vấn chi tiết.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-2">Sim Ghép</h3>
              <div className="text-3xl font-black text-primary mb-4">Từ 99.000đ</div>
              <p className="text-white/60 text-sm mb-6">Sim ghép 1 mảnh, 2 mảnh. Bảo hành 3 tháng.</p>
              <Link href="https://shopee.vn/ngaostore86" target="_blank" className="block w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-center transition-all">
                Mua Sim Ghép
              </Link>
            </div>
            <div className="bg-white/10 border-2 border-primary rounded-2xl p-8 backdrop-blur-sm relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                Phổ biến
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Ghép Sim Tận Nơi</h3>
              <div className="text-3xl font-black text-primary mb-4">Từ 200.000đ</div>
              <p className="text-white/60 text-sm mb-6">Ghép sim tận nơi nội thành Hà Nội. Hỏa tốc 30p-1h.</p>
              <Link href="http://zalo.me/0988012895" target="_blank" className="block w-full py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-center transition-all">
                Đặt Lịch Ghép
              </Link>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-2">Mở Khóa Quốc Tế</h3>
              <div className="text-3xl font-black text-primary mb-4">Từ 200.000đ</div>
              <p className="text-white/60 text-sm mb-6">Mở khóa Lock thành Quốc Tế. Bảo hành vĩnh viễn.</p>
              <Link href="http://zalo.me/0988012895" target="_blank" className="block w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-center transition-all">
                Tư Vấn Mở Khóa
              </Link>
            </div>
          </div>

          {/* CTA mạnh */}
          <div className="bg-gradient-to-r from-primary/20 to-primary/5 border-2 border-primary rounded-3xl p-10 md:p-14 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Cần Sim Ghép Hà Nội Hoặc Mở Khóa iPhone Lock?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Liên hệ Ngáo Store ngay qua Zalo để được tư vấn miễn phí. Ghép sim tận nơi, mở khóa chuyên nghiệp. Hỗ trợ 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="http://zalo.me/0988012895"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-primary/30"
              >
                Zalo: 0988 012 895
                <ArrowRight size={22} />
              </Link>
              <Link
                href="https://maps.app.goo.gl/PrvGM2vGQftcbCMb8"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold text-lg transition-all"
              >
                <MapPin size={22} />
                Xem Địa Chỉ
              </Link>
            </div>
            <p className="text-white/50 text-sm mt-6">
              CS1: Số 10 ngõ 28B Hạ Đình, Thanh Xuân | CS2: 82 Duy Tân, Cầu Giấy
            </p>
          </div>
        </div>
      </section>

      {/* H2: Khu vực phục vụ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-8">
            Sim Ghép Hà Nội – Khu Vực Phục Vụ
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Thanh Xuân", "Cầu Giấy", "Hoàng Mai", "Long Biên", "Đống Đa",
              "Bắc Từ Liêm", "Nam Từ Liêm", "Hai Bà Trưng", "Ba Đình", "Tây Hồ",
            ].map((area) => (
              <span key={area} className="px-4 py-2 bg-secondary/5 rounded-xl text-secondary font-medium">
                Sim ghép {area}
              </span>
            ))}
          </div>
          <p className="text-secondary/70 mt-6">
            Ngáo Store hỗ trợ <strong>ghép sim iPhone Lock hà nội</strong> và <strong>mở khóa iphone lock hà nội</strong> tại tất cả các quận nội thành. Khách ở xa có thể gửi máy hoặc đặt sim ghép qua Shopee.
          </p>
        </div>
      </section>

      <Footer />
      <ContactPinned />
    </main>
  );
}
