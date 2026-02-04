"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-secondary-dark">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/10 blur-[100px] rounded-full translate-y-1/4 -translate-x-1/4" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-white/80 text-sm font-medium uppercase tracking-wider">
              Sim Ghép Thế Hệ Mới 2026
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Ghép Sim <span className="text-primary">iPhone Lock</span> <br />
            Chưa Bao Giờ Dễ Thế
          </h1>
          
          <p className="text-white/60 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
            Ghép sim iPhone Lock sóng sánh ổn định với sim ghép mới nhất từ Ngáo Store. 
            Tự động kích hoạt, fix full lỗi, hỗ trợ từ iPhone 6 đến iPhone 17.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary/25 group">
              <a target="_blank" href="https://shopee.vn/ngaostore86">Mua Sim Ngay</a>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold text-lg transition-all">
              <a href="#pricing">Xem Bảng Giá</a>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {[
              { icon: <Zap className="text-yellow-400" />, text: "Kích hoạt 10s" },
              { icon: <Shield className="text-green-400" />, text: "Bảo hành 3 tháng" },
              { icon: <CheckCircle className="text-primary" />, text: "Hỗ trợ ghép 24/7" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/80 font-medium">
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 p-4 rounded-[40px] border border-white/10 backdrop-blur-sm">
            <Image src="/images/hero-banner.png" alt="Sim iPhone Lock" width={600} height={600} className="rounded-[30px] shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl animate-bounce-slow">
              <div className="text-secondary-dark font-black text-3xl leading-none">99%</div>
              <div className="text-secondary/60 text-sm font-bold uppercase mt-1">Ổn định</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-primary p-6 rounded-3xl shadow-2xl animate-pulse">
              <div className="text-white font-black text-2xl leading-none">24/7</div>
              <div className="text-white/80 text-sm font-bold uppercase mt-1">Hỗ Trợ</div>
            </div>
          </div>
          
          {/* Decorative shapes */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-white/5 rounded-full scale-125" />
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-white/5 rounded-full scale-150" />
        </motion.div>
      </div>
      
      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
