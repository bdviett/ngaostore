import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Youtube, MapPin, Mail, Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary-dark text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <div className="bg-primary p-2 rounded-lg">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="font-bold text-2xl tracking-tight">
                Ngáo <span className="text-primary">Store</span>
              </span>
            </Link>
            <p className="text-white/50 leading-relaxed mb-8">
              Ngáo Store - Chuyên sim ghép và các giải pháp mở khóa iPhone Lock hàng đầu Việt Nam. Uy tín, chất lượng và bảo hành tận tâm.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/ngaostore86" target="_blank" rel="noopener noreferrer" aria-label="Facebook Ngáo Store" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all"><Facebook size={20} aria-hidden /></a>
              <a href="https://www.instagram.com/ngaostore.86" target="_blank" rel="noopener noreferrer" aria-label="Instagram Ngáo Store" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all"><Instagram size={20} aria-hidden /></a>
              <a href="https://www.youtube.com/@ngaostore86" target="_blank" rel="noopener noreferrer" aria-label="YouTube Ngáo Store" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all"><Youtube size={20} aria-hidden /></a>
              <a href="https://www.tiktok.com/@ngaostore86" target="_blank" rel="noopener noreferrer" aria-label="TikTok Ngáo Store" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden>
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Sản Phẩm
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-4 text-white/60">
              <li><Link target="_blank" href="/products/sim-ghep-bison-new-2025" className="hover:text-primary transition-all flex items-center gap-2"><ExternalLink size={14} /> Sim Ghép TMSI/QPE</Link></li>
              <li><Link target="_blank" href="/products/sim-ghep-eid" className="hover:text-primary transition-all flex items-center gap-2"><ExternalLink size={14} /> Sim Ghép EID</Link></li>
              <li><Link target="_blank" href="/products/o-sim-eid" className="hover:text-primary transition-all flex items-center gap-2"><ExternalLink size={14} /> Ổ sim iPhone Lock</Link></li>
              <li><Link target="_blank" href="/blogs/ghep-sim-iphone-lock" className="hover:text-primary transition-all flex items-center gap-2"><ExternalLink size={14} /> Ghép Sim Tận Nơi</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Chính Sách
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-4 text-white/60">
              <li><Link href="#" className="hover:text-primary transition-all">Chính sách bảo hành</Link></li>
              <li><Link href="#" className="hover:text-primary transition-all">Chính sách vận chuyển</Link></li>
              <li><Link href="#" className="hover:text-primary transition-all">Chính sách đổi trả</Link></li>
              <li><Link href="#" className="hover:text-primary transition-all">Bảo mật thông tin</Link></li>
            </ul>
          </div>

          <div itemScope itemType="https://schema.org/LocalBusiness">
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Liên Hệ
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-white/40 mb-1 font-bold uppercase tracking-wider">Địa chỉ</div>
                  <div className="text-white/80" itemProp="streetAddress"><a href="https://maps.app.goo.gl/PrvGM2vGQftcbCMb8" target="_blank" rel="noopener noreferrer">CS1: Số 10 ngõ 28B Hạ Đình, Thanh Xuân, Hà Nội</a></div>
                  <div className="text-white/80"><a href="https://maps.app.goo.gl/r3YDACgDfkLD7H9t9" target="_blank" rel="noopener noreferrer">CS2: 82 Duy Tân, Hà Nội</a></div>
                  <div className="text-white/80"><a href="https://maps.app.goo.gl/oLKE6XtCXRwicWdK6" target="_blank" rel="noopener noreferrer">CS3: Hòa Quý, Đà Nẵng</a></div>
                </div>
              </li>
              <li className="flex gap-4" itemProp="telephone">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-white/40 mb-1 font-bold uppercase tracking-wider">Hotline</div>
                  <div className="text-white/80 font-bold"><a href="tel:+84988012895">0988 012 895</a></div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white/40 text-sm">
            © {new Date().getFullYear()} Ngáo Store. Tất cả quyền được bảo lưu.
          </div>
          <div className="flex gap-8 text-white/40 text-sm">
            <Link href="#" className="hover:text-white transition-all">Điều khoản</Link>
            <Link href="#" className="hover:text-white transition-all">Quyền riêng tư</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
