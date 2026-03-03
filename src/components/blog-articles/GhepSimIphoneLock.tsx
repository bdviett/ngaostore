import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPinned from "@/components/ContactPinned";
import Link from "next/link";
import { Check, Phone, Shield, Zap, ArrowRight } from "lucide-react";

export default function GhepSimIphoneLock() {
  return (
    <main className="min-h-screen">
      <Navbar variant="dark" />

      <section className="relative pt-28 pb-20 overflow-hidden bg-secondary-dark">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
            <span className="text-white/80 text-sm font-medium uppercase tracking-wider">Dịch vụ chuyên nghiệp</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl">
            Ghép Sim iPhone Lock Chuyên Nghiệp – Hà Nội & Đà Nẵng
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
            Ngáo Store – Dịch vụ <strong>ghép sim iPhone Lock</strong> uy tín hàng đầu. Sim ghép Bison, Heicard chính hãng. <strong>Ghép sim iPhone Lock</strong> tận nơi tại Hà Nội và Đà Nẵng. Hỗ trợ iPhone 6 đến 16 Pro Max. Bảo hành 3 tháng, kích hoạt 10 giây.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="http://zalo.me/0988012895" target="_blank" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary/25">
              Đặt Lịch Ghép Sim Ngay
              <ArrowRight size={20} />
            </Link>
            <Link href="tel:0988012895" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all">
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
            Ghép Sim iPhone Lock Là Gì? Tại Sao Cần Ghép Sim?
          </h2>
          <div className="prose prose-lg max-w-none text-secondary/80 space-y-6">
            <p>
              <strong>Ghép sim iPhone Lock</strong> là giải pháp giúp iPhone Lock (máy khóa mạng) sử dụng được sim Việt Nam. Khi <strong>ghép sim iPhone Lock</strong>, kỹ thuật viên sẽ lắp sim ghép (Bison, Heicard, QPE…) vào máy để máy nhận diện và kích hoạt mạng. Sim ghép hoạt động ổn định với 4G/5G, không cần cấu hình phức tạp.
            </p>
            <p>
              Dịch vụ <strong>ghép sim iPhone Lock</strong> tại Ngáo Store sử dụng sim ghép chính hãng, thiết bị chuyên dụng. Quy trình ghép nhanh, an toàn, bảo hành 3 tháng. Khách hàng có thể đến trực tiếp hoặc đặt lịch ghép sim tận nơi tại Hà Nội và Đà Nẵng.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            Dịch Vụ Ghép Sim iPhone Lock Tại Ngáo Store
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">
                Ghép sim iPhone Lock hỗ trợ những dòng máy nào?
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Dịch vụ <strong>ghép sim iPhone Lock</strong> tại Ngáo Store hỗ trợ từ iPhone 6 đến iPhone 16 Pro Max. Sim ghép 1 mảnh, 2 mảnh, chế độ EID và TMSI. Hỗ trợ 4G/5G ổn định, tự động kích hoạt không cần cấu hình. Sim ghép Bison, Heicard chính hãng.
              </p>
              <h3 className="text-xl font-bold text-primary mb-4">
                Ghép sim iPhone Lock tận nơi
              </h3>
              <p className="text-white/70 leading-relaxed">
                Ngáo Store hỗ trợ <strong>ghép sim iPhone Lock</strong> tận nơi tại nội thành Hà Nội và TP Đà Nẵng. Thời gian hỏa tốc 30 phút – 1 giờ. Đội ngũ kỹ thuật chuyên nghiệp, thiết bị hiện đại.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Sim ghép Bison, Heicard chính hãng",
                "Hỗ trợ iPhone 6 – iPhone 16 Pro Max",
                "Ghép sim tận nơi Hà Nội, Đà Nẵng",
                "Bảo hành 3 tháng, lỗi đổi mới",
                "4G/5G ổn định, kích hoạt tự động",
                "Hỗ trợ 24/7",
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-10">
            Quy Trình Ghép Sim iPhone Lock
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-secondary-dark/5 rounded-2xl p-8 border border-secondary/10">
              <div className="text-4xl font-black text-primary mb-4">1</div>
              <h3 className="text-lg font-bold text-secondary mb-2">Liên hệ đặt lịch</h3>
              <p className="text-secondary/70 text-sm">Gọi Zalo 0988 012 895 hoặc đến trực tiếp cửa hàng để đặt lịch ghép sim.</p>
            </div>
            <div className="bg-secondary-dark/5 rounded-2xl p-8 border border-secondary/10">
              <div className="text-4xl font-black text-primary mb-4">2</div>
              <h3 className="text-lg font-bold text-secondary mb-2">Ghép sim & kích hoạt</h3>
              <p className="text-secondary/70 text-sm">Kỹ thuật viên ghép sim và kích hoạt. Thời gian khoảng 10-15 phút.</p>
            </div>
            <div className="bg-secondary-dark/5 rounded-2xl p-8 border border-secondary/10">
              <div className="text-4xl font-black text-primary mb-4">3</div>
              <h3 className="text-lg font-bold text-secondary mb-2">Bảo hành & hỗ trợ</h3>
              <p className="text-secondary/70 text-sm">Bảo hành 3 tháng. Hỗ trợ fix lỗi, đổi mới nếu có vấn đề.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Bảng Giá Ghép Sim iPhone Lock
          </h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Giá cạnh tranh, chất lượng đảm bảo. Liên hệ Zalo để được tư vấn chi tiết.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-2">Mua Sim Ghép</h3>
              <div className="text-3xl font-black text-primary mb-4">Từ 99.000đ</div>
              <p className="text-white/60 text-sm mb-6">Sim ghép 1 mảnh, 2 mảnh. Bảo hành 3 tháng.</p>
              <Link href="https://shopee.vn/ngaostore86" target="_blank" className="block w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-center transition-all">Mua Ngay</Link>
            </div>
            <div className="bg-white/10 border-2 border-primary rounded-2xl p-8 backdrop-blur-sm relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">Phổ biến</div>
              <h3 className="text-xl font-bold text-white mb-2">Ghép Sim Tận Nơi</h3>
              <div className="text-3xl font-black text-primary mb-4">Từ 200.000đ</div>
              <p className="text-white/60 text-sm mb-6">Ghép sim tận nơi Hà Nội, Đà Nẵng. Hỏa tốc 30p-1h.</p>
              <Link href="http://zalo.me/0988012895" target="_blank" className="block w-full py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-center transition-all">Đặt Lịch Ghép</Link>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-2">Mở Khóa Quốc Tế</h3>
              <div className="text-3xl font-black text-primary mb-4">Từ 200.000đ</div>
              <p className="text-white/60 text-sm mb-6">Mở khóa Lock thành Quốc Tế. Bảo hành vĩnh viễn.</p>
              <Link href="http://zalo.me/0988012895" target="_blank" className="block w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-center transition-all">Tư Vấn</Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/20 to-primary/5 border-2 border-primary rounded-3xl p-10 md:p-14 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Cần Ghép Sim iPhone Lock? Liên Hệ Ngay!
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Liên hệ Ngáo Store qua Zalo để được tư vấn miễn phí. Ghép sim tận nơi Hà Nội, Đà Nẵng. Hỗ trợ 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="http://zalo.me/0988012895" target="_blank" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-primary/30">
                Zalo: 0988 012 895
                <ArrowRight size={22} />
              </Link>
              <Link href="/products" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold text-lg transition-all">
                Xem Sản Phẩm Sim Ghép
              </Link>
            </div>
            <p className="text-white/50 text-sm mt-6">
              Hà Nội: Thanh Xuân, Cầu Giấy | Đà Nẵng: Ngũ Hành Sơn, Hải Châu
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <ContactPinned />
    </main>
  );
}
