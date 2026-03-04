"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPinned from "@/components/ContactPinned";
import Link from "next/link";
import Image from "next/image";
import { Check, Phone, Shield, Wrench, ArrowRight, Play } from "lucide-react";
import { getVideoEmbedUrl } from "@/lib/video-embed";

const VIDEO_URL = "https://youtube.com/shorts/5n392_a9Yss?feature=share";

export default function ThayOSimIphoneLock() {
  const embedUrl = getVideoEmbedUrl(VIDEO_URL);

  return (
    <main className="min-h-screen">
      <Navbar variant="dark" />

      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-secondary-dark">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
                <Wrench className="text-primary" size={18} />
                <span className="text-white/80 text-sm font-medium uppercase tracking-wider">
                  Dịch vụ chuyên nghiệp
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl">
                Dịch Vụ Độ Ổ Sim Cho iPhone Lock – Chuyên Nghiệp Tại Ngáo Store
              </h1>
              <p className="text-white/70 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
                <strong>Độ ổ sim EID cho iPhone Lock</strong> giúp máy dùng được 2 sim vật lý mà không cần sim ghép, tối ưu cho sim ghép EID/SED. Ngáo Store – Dịch vụ <strong>thay ổ sim EID cho iPhone Lock</strong> uy tín tại Hà Nội & Đà Nẵng. Hỗ trợ iPhone 12 đến 16 Pro Max. Bảo hành 6 tháng, làm nhanh 30–60 phút.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="http://zalo.me/0988012895"
                  target="_blank"
                  className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary/25"
                >
                  Đặt Lịch Độ Ổ Sim
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
                  { icon: <Wrench className="text-primary" size={20} />, text: "Làm nhanh 30–60 phút" },
                  { icon: <Shield className="text-green-400" size={20} />, text: "Bảo hành 6 tháng" },
                  { icon: <Check className="text-primary" size={20} />, text: "Hỗ trợ 24/7" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/80 font-medium">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative order-2 lg:order-none">
              <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 p-4 rounded-[30px] border border-white/10 backdrop-blur-sm">
                <Image
                  src="/images/do-o-sim-eid.png"
                  alt="Độ ổ sim iPhone Lock - Ngáo Store"
                  width={500}
                  height={500}
                  className="rounded-[20px] shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H2: Giới thiệu sản phẩm */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
            Độ Ổ Sim iPhone Lock Là Gì? Tại Sao Cần Độ Ổ?
          </h2>
          <div className="prose prose-lg max-w-none text-secondary/80 space-y-6">
            <p>
              <strong>Độ ổ sim EID cho iPhone Lock</strong> là dịch vụ thay thế ổ sim gốc bằng ổ sim 2 sim vật lý (tích hợp sẵn IC EID). Sau khi <strong>độ ổ sim EID cho iPhone Lock</strong>, máy có thể lắp 2 sim vật lý mà không cần ghép sim truyền thống.
            </p>
            <p>
              <strong>Ổ sim EID</strong> tích hợp IC EID bên trong, lắp vào là dùng ngay. Phù hợp iPhone 12 đến 17 Pro Max. Mode EID ổn định hơn TMSI, 4G/5G, sóng sánh hay tất cả các lỗi vặt của máy lock đều được fix triệt để. Ngáo Store cung cấp dịch vụ <strong>độ ổ sim EID cho iPhone Lock</strong> chuyên nghiệp tại Hà Nội và Đà Nẵng, thiết bị hiện đại, kỹ thuật viên giàu kinh nghiệm.
            </p>
          </div>
        </div>
      </section>

      {/* H2: Quy trình thay ổ sim */}
      <section className="py-20 bg-secondary-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            Quy Trình Thay Ổ Sim Tại Ngáo Store
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">
                Các bước độ ổ sim chuyên nghiệp
              </h3>
              <ol className="space-y-4 text-white/80 list-decimal list-inside">
                <li><strong>Kiểm tra máy:</strong> Xác định dòng máy, tình trạng máy hiện tại.</li>
                <li><strong>Tháo máy:</strong> Mở máy an toàn, tháo ổ sim gốc.</li>
                <li><strong>Lắp ổ sim mới:</strong> Thay bằng ổ sim EID tương thích với máy.</li>
                <li><strong>Đóng máy:</strong> Đóng máy an toàn, kiểm tra lại tất cả các chức năng của máy.</li>
                <li><strong>Test & bàn giao:</strong> Kiểm tra sóng, gọi điện, 4G/5G và tất cả các chức năng của máy. Bảo hành 6 tháng ổ SIM.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* H2: Bảng giá */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
            Bảng Giá Độ Ổ Sim & Ổ Sim EID
          </h2>
          <p className="text-secondary/70 text-center mb-12 max-w-2xl mx-auto">
            Giá cạnh tranh, chất lượng đảm bảo. Liên hệ Zalo để được tư vấn chi tiết theo dòng máy.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-secondary-dark/5 rounded-2xl p-8 border border-secondary/10">
              <h3 className="text-xl font-bold text-secondary mb-4">Dịch vụ thay ổ sim (công)</h3>
              <div className="space-y-3 text-secondary/80">
                <div className="flex justify-between">
                  <span>iPhone 12 – 13 series</span>
                  <span className="font-bold text-primary">50.000đ</span>
                </div>
                <div className="flex justify-between">
                  <span>iPhone 14 series</span>
                  <span className="font-bold text-primary">100.000đ</span>
                </div>
                <div className="flex justify-between">
                  <span>iPhone 15 – 16 series</span>
                  <span className="font-bold text-primary">150.000đ</span>
                </div>
                <p className="text-sm text-secondary/60 pt-2">Giá công thay ổ, chưa bao gồm ổ sim.</p>
              </div>
            </div>
            <div className="bg-primary/5 rounded-2xl p-8 border-2 border-primary/30">
              <h3 className="text-xl font-bold text-secondary mb-4">Ổ sim EID sẵn sim ghép</h3>
              <div className="text-2xl font-black text-primary mb-2">250.000đ</div>
              <p className="text-secondary/70 text-sm mb-4">
                Ổ sim EID tích hợp sẵn sim ghép, lắp vào là dùng ngay. Hỗ trợ iPhone 12 series – 17 Pro Max.
              </p>
              <Link href="/products/o-sim-eid" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                Xem sản phẩm
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <p className="text-center text-secondary/60 text-sm mt-8">
            * Giá có thể thay đổi. Liên hệ Zalo 0988 012 895 để được báo giá chính xác.
          </p>
        </div>
      </section>

      {/* H2: Video hướng dẫn thay thế tại nhà */}
      <section className="py-20 bg-secondary-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Video Hướng Dẫn Thay Ổ Sim Tại Nhà
          </h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Xem video hướng dẫn độ ổ sim EID cho iPhone Lock từng bước. Có thể tự thực hiện nếu có kinh nghiệm, hoặc mang máy đến Ngáo Store để được hỗ trợ chuyên nghiệp.
          </p>
          <div className="max-w-2xl mx-auto flex flex-col items-center justify-center">
            <div className="aspect-[9/16] max-h-[600px] rounded-2xl overflow-hidden bg-black/50 border border-white/10">
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  title="Hướng dẫn độ ổ sim EID cho iPhone Lock"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <a
                  href={VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center group"
                >
                  <div className="flex flex-col items-center gap-4 text-white">
                    <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={40} className="text-white ml-1" fill="white" />
                    </div>
                    <span className="font-bold">Xem video trên TikTok</span>
                  </div>
                </a>
              )}
            </div>
            <p className="text-white/50 text-sm text-center mt-4">
              Video: Hướng dẫn độ ổ sim DB EID cho iPhone Lock – Ngáo Store
            </p>
          </div>
        </div>
      </section>

      {/* H2: Liên hệ */}
      <section className="py-20 bg-secondary-dark">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/20 to-primary/5 border-2 border-primary rounded-3xl p-10 md:p-14 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Cần Độ Ổ Sim EID Cho iPhone Lock? Liên Hệ Ngay!
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Liên hệ Ngáo Store qua Zalo để đặt lịch độ ổ sim EID. Hà Nội & Đà Nẵng. Làm nhanh 30–60 phút, Bảo hành 6 tháng.
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
                Xem Địa Chỉ
              </Link>
            </div>
            <p className="text-white/50 text-sm mt-6">
              CS1: Số 10 ngõ 28B Hạ Đình, Thanh Xuân, Hà Nội | CS2: 82 Duy Tân, Cầu Giấy | CS3: 206 Phan Huỳnh Điểu, Đà Nẵng
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <ContactPinned />
    </main>
  );
}
