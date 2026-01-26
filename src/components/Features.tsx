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

const features = [
  {
    title: "Sóng Khỏe & Ổn Định",
    desc: "Cải thiện khả năng bắt sóng, hỗ trợ 4G/5G cực tốt như máy Quốc Tế.",
    icon: <Wifi className="w-8 h-8" />,
    color: "bg-blue-500"
  },
  {
    title: "Fix Full Lỗi Danh Bạ",
    desc: "Không cần thêm +84, tự động nhận diện đầu số và hiển thị tên người gọi.",
    icon: <Settings className="w-8 h-8" />,
    color: "bg-primary"
  },
  {
    title: "Hỗ Trợ Mọi iOS",
    desc: "Từ iOS cũ đến iOS 19, 20 mới nhất đều có thể kích hoạt mượt mà.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "bg-purple-500"
  },
  {
    title: "Dễ Dàng Cài Đặt",
    desc: "Chỉ cần lắp sim vào là máy tự động nhận, không cần cấu hình phức tạp, hỗ trợ tự động kích hoạt.",
    icon: <Zap className="w-8 h-8" />,
    color: "bg-yellow-500"
  },
  {
    title: "Bảo Mật Tuyệt Đối",
    desc: "Sim ghép không can thiệp phần cứng, iCloud, không ảnh hưởng đến chức năng của máy.",
    icon: <Lock className="w-8 h-8" />,
    color: "bg-green-500"
  },
  {
    title: "Cập Nhật Liên Tục",
    desc: "Phần mềm được cập nhật thường xuyên để thích nghi với các bản iOS mới nhất.",
    icon: <RefreshCw className="w-8 h-8" />,
    color: "bg-orange-500"
  },
  {
    title: "Chuyển Vùng Quốc Tế",
    desc: "Tự tin mang iPhone Lock đi du lịch nước ngoài với hỗ trợ roaming tốt, sóng 4G/5G ổn định.",
    icon: <Globe className="w-8 h-8" />,
    color: "bg-indigo-500"
  },
  {
    title: "Hỗ Trợ 24/7",
    desc: "Đội ngũ kỹ thuật của Ngáo Store luôn sẵn sàng hỗ trợ bạn bất cứ lúc nào, hỗ trợ ghép 24/7.",
    icon: <LifeBuoy className="w-8 h-8" />,
    color: "bg-pink-500"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
