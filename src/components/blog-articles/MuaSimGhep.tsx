"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPinned from "@/components/ContactPinned";
import ProductList from "@/components/ProductList";
import Link from "next/link";
import Image from "next/image";
import { Check, Phone, Shield, ShoppingBag, ArrowRight } from "lucide-react";

export default function MuaSimGhep() {
  return (
    <main className="min-h-screen">
      <Navbar variant="dark" />

      <section className="relative pt-28 pb-20 overflow-hidden bg-secondary-dark">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
            <ShoppingBag className="text-primary" size={18} />
            <span className="text-white/80 text-sm font-medium uppercase tracking-wider">Sản phẩm chính hãng</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl">
            Mua Sim Ghép iPhone Lock Chính Hãng – Giá Tốt, Bảo Hành 3 Tháng
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
            <strong>Mua sim ghép</strong> tại Ngáo Store – Sim ghép Bison, Heicard chính hãng. Giá từ 99.000đ. <strong>Mua sim ghép</strong> iPhone Lock hỗ trợ iPhone 6 đến 16 Pro Max. Bảo hành 3 tháng, giao hàng toàn quốc. Mua trực tiếp tại Shopee hoặc liên hệ Zalo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="https://shopee.vn/ngaostore86" target="_blank" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary/25">
              Mua Sim Ghép Tại Shopee
              <ArrowRight size={20} />
            </Link>
            <Link href="http://zalo.me/0988012895" target="_blank" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all">
              <Phone size={20} />
              Zalo: 0988 012 895
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 mt-10">
            {[
              { icon: <Shield className="text-green-400" size={20} />, text: "Bảo hành 3 tháng" },
              { icon: <Check className="text-primary" size={20} />, text: "Chính hãng Bison, Heicard" },
              { icon: <ShoppingBag className="text-yellow-400" size={20} />, text: "Giao hàng toàn quốc" },
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
                  src="/images/mua-sim-ghep.png"
                  alt="Mua sim ghép chính hãng - Ngáo Store"
                  width={500}
                  height={500}
                  className="rounded-[20px] shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
            Mua Sim Ghép Ở Đâu Uy Tín? Tại Sao Chọn Ngáo Store?
          </h2>
          <div className="prose prose-lg max-w-none text-secondary/80 space-y-6">
            <p>
              <strong>Mua sim ghép</strong> cần chọn địa chỉ uy tín để đảm bảo chất lượng. Ngáo Store cung cấp sim ghép Bison, Heicard chính hãng – các thương hiệu sim ghép hàng đầu cho iPhone Lock. Khi <strong>mua sim ghép</strong> tại đây, khách hàng được bảo hành 3 tháng, lỗi đổi mới, hỗ trợ kích hoạt miễn phí.
            </p>
            <p>
              <strong>Mua sim ghép</strong> có thể đặt qua Shopee (giao hàng toàn quốc) hoặc đến trực tiếp cửa hàng tại Hà Nội, Đà Nẵng. Khách ở Hà Nội và Đà Nẵng còn có thể đặt lịch ghép sim tận nơi – kỹ thuật viên mang sim đến và ghép trực tiếp.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            Các Loại Sim Ghép – Mua Sim Ghép Phù Hợp Với Máy Bạn
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">
                Sim ghép 1 mảnh và 2 mảnh
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Khi <strong>mua sim ghép</strong>, bạn cần chọn loại phù hợp với dòng máy. Sim ghép 1 mảnh phù hợp iPhone có eSIM, sim ghép 2 mảnh cho iPhone chỉ có 1 khe sim. Ngáo Store có đầy đủ các loại sim ghép Bison, Heicard cho mọi dòng iPhone Lock từ 6 đến 16 Pro Max.
              </p>
              <h3 className="text-xl font-bold text-primary mb-4">
                Sim ghép EID và TMSI
              </h3>
              <p className="text-white/70 leading-relaxed">
                Sim ghép EID ổn định hơn, ít lỗi hơn TMSI nhưng giá cao hơn. Sim ghép TMSI giá rẻ, phù hợp ngân sách thấp. Khi <strong>mua sim ghép</strong>, nhân viên Ngáo Store sẽ tư vấn loại phù hợp với máy và nhu cầu của bạn.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Sim ghép EID, TMSI",
                "Sim ghép Bison chính hãng",
                "Sim ghép Heicard chính hãng",
                "Hỗ trợ iPhone 6 – iPhone 16 Pro Max",
                "Hỗ trợ kích hoạt miễn phí",
                "Bảo hành 3 tháng, lỗi đổi mới",
                "4G/5G ổn định",
                "Giao hàng toàn quốc",
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
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
            Sản Phẩm Sim Ghép – Mua Sim Ghép Ngay
          </h2>
          <p className="text-secondary/70 text-center mb-12 max-w-2xl mx-auto">
            Chọn sản phẩm sim ghép phù hợp với máy của bạn. Giá từ 99.000đ, bảo hành 3 tháng.
          </p>
          <ProductList useSlideshow={false} headingLevel="h2" />
          <div className="text-center mt-12">
            <Link href="https://shopee.vn/ngaostore86" target="_blank" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all">
              Xem Tất Cả Trên Shopee
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary-dark">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/20 to-primary/5 border-2 border-primary rounded-3xl p-10 md:p-14 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Cần Mua Sim Ghép? Liên Hệ Ngay Để Được Tư Vấn!
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Liên hệ Zalo 0988 012 895 để được tư vấn loại sim ghép phù hợp. Mua sim ghép qua Shopee hoặc đến trực tiếp Hà Nội, Đà Nẵng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="http://zalo.me/0988012895" target="_blank" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-primary/30">
                Zalo: 0988 012 895
                <ArrowRight size={22} />
              </Link>
              <Link href="https://shopee.vn/ngaostore86" target="_blank" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold text-lg transition-all">
                Mua Sim Ghép Trên Shopee
              </Link>
            </div>
            <p className="text-white/50 text-sm mt-6">
              Hà Nội: Số 10 ngõ 28B Hạ Đình | Đà Nẵng: 206 Phan Huỳnh Điểu
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <ContactPinned />
    </main>
  );
}
