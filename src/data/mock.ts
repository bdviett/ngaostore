export type ProductCategory = "all" | "sim-ghep" | "sac-cap" | "cuong-luc" | "op-lung" | "phu-kien-khac";

export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: ProductCategory;
}

export interface BlogPost {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Sim Ghép Bison New",
    price: "120.000",
    description: "Sim ghép Bison New 2 mảnh, hỗ trợ iPhone 8 đến 16 Pro Max, fix full lỗi danh bạ, 4G/5G ổn định.",
    image: "/images/products/bs-new.png",
    category: "sim-ghep",
  },
  {
    id: "2",
    name: "Sim Ghép Bison Pro 1.2",
    price: "99.000",
    description: "Sim ghép Bison Pro 1.2 (1 Mảnh), hỗ trợ iPhone 6 đến Xs, 4G/5G ổn định.",
    image: "/images/products/bs-pro.png",
    category: "sim-ghep",
  },
  {
    id: "3",
    name: "Sim Ghép Dual EID",
    price: "200.000",
    description: "Sim ghép Dual EID, hỗ trợ iPhone 13 đến 16 Pro Max, Mode EID, 4G/5G ổn định.",
    image: "/images/products/dual.png",
    category: "sim-ghep",
  },
  {
    id: "4",
    name: "Ổ sim EID sẵn sim ghép",
    price: "300.000",
    description: "Ổ sim EID tích hợp sẵn sim ghép, hỗ trợ iPhone 12 đến 16 Pro Max, Mode EID, 4G/5G ổn định.",
    image: "/images/products/o-eid.png",
    category: "sim-ghep",
  },
  {
    id: "5",
    name: "Củ sạc Bison 33W GaN",
    price: "199.000",
    description: "Củ sạc nhanh Bison 33W GaN BCH180, chính hãng, bảo hành 12 tháng.",
    image: "/images/products/bch180.jpg",
    category: "sac-cap",
  },
  {
    id: "6",
    name: "Củ sạc Bison GaN 20w",
    price: "160.000",
    description: "Củ cáp sạc nhanh Bison GaN 20w mini BCH541, chính hãng, bảo hành 12 tháng.",
    image: "/images/products/bch541.jpg",
    category: "sac-cap",
  },
  {
    id: "7",
    name: "Cáp sạc C to Lightning",
    price: "100.000",
    description: "Chất liệu Silicon, mã CB110, chính hãng, bảo hành 12 tháng.",
    image: "/images/products/cb110.jpg",
    category: "sac-cap",
  },
  {
    id: "8",
    name: "Cáp sạc C to C",
    price: "100.000",
    description: "Chất liệu Silicon, mã CB100, chính hãng, bảo hành 12 tháng.",
    image: "/images/products/cb100.jpg",
    category: "sac-cap",
  },
  {
    id: "9",
    name: "Cáp dù C to Lightning",
    price: "120.000",
    description: "Cáp bọc dù C to Lightning, mã CB113, chính hãng, bảo hành 12 tháng.",
    image: "/images/products/cb113.jpg",
    category: "sac-cap",
  },
  {
    id: "10",
    name: "Cáp dù C to C",
    price: "120.000",
    description: "Cáp bọc dù C to C, mã CB103, chính hãng, bảo hành 12 tháng.",
    image: "/images/products/cb103.jpg",
    category: "sac-cap",
  },
  {
    id: "11",
    name: "Sim ghép Heicard Pro",
    price: "120.000",
    description: "Sim ghép Heicard Pro GTR 5.8, hỗ trợ iPhone 8 đến 16 Pro Max, Mode TMSI/EID, 4G/5G ổn định.",
    image: "/images/products/hc.png",
    category: "sim-ghep",
  },
  {
    id: "12",
    name: "Sim ghép VipBS 2.03",
    price: "90.000",
    description: "Sim ghép VipBS 2.03, hỗ trợ chuyên iPhone 6s (trừ nhà mạng Tracfone), Mode TMSI ổn định.",
    image: "/images/products/vipbs.png",
    category: "sim-ghep",
  },
  {
    id: "13",
    name: "Sim ghép Only SED",
    price: "120.000",
    description: "Sim ghép Only SED, hỗ trợ iPhone 13 đến 16 Pro Max (đã độ ổ 2 sim vật lý), Mode SED, lắp khay mặt dưới, 4G/5G ổn định.",
    image: "/images/products/bs-eid.png",
    category: "sim-ghep",
  },
  {
    id: "14",
    name: "Cường lực Bison",
    price: "40.000",
    description: "Cường lực Bison, chính hãng, bảo hành 12 tháng.",
    image: "/images/products/cuong-luc-bison.jpg",
    category: "cuong-luc",
  },
  {
    id: "15",
    name: "Cường lực Baiko",
    price: "30.000",
    description: "Cường lực Baiko, chính hãng, bảo hành 12 tháng.",
    image: "/images/products/cuongluc-baiko.jpg",
    category: "cuong-luc",
  },
  {
    id: "16",
    name: "Cường lực KingKong",
    price: "80.000",
    description: "Cường lực KingKong, chống nhìn trộm, chính hãng, bảo hành 12 tháng.",
    image: "/images/products/kingkong-cnt.png",
    category: "cuong-luc",
  },
  {
    id: "17",
    name: "Ốp Lưng Silicon",
    price: "15.000",
    description: "Ốp Lưng Silicon, chính hãng, bảo hành 3 tháng.",
    image: "/images/products/silicol.jpg",
    category: "op-lung",
  },
  {
    id: "18",
    name: "Ốp Lưng MagSafe",
    price: "50.000",
    description: "Ốp Lưng MagSafe, chính hãng, bảo hành 3 tháng.",
    image: "/images/products/magsafe.jpg",
    category: "op-lung",
  },
  {
    id: "19",
    name: "Cáp USB to Lightning",
    price: "80.000",
    description: "Cáp sạc Bison USB to Lightning, mã CB105, chính hãng, bảo hành 12 tháng.",
    image: "/images/products/cb105.jpg",
    category: "sac-cap",
  },
  {
    id: "20",
    name: "Loa Bluetooth Energizer",
    price: "500.000",
    description: "Loa Bluetooth Energizer (BTS055), chính hãng, bảo hành 12 tháng.",
    image: "/images/products/bts055.jpg",
    category: "phu-kien-khac",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Hướng dẫn ghép sim Bison New 2 mảnh chi tiết",
    thumbnail: "/images/bs-new.png",
    videoUrl: "#",
  },
  {
    id: "2",
    title: "Hướng dẫn check nhà mạng iPhone Lock chi tiết",
    thumbnail: "/images/sickw-2.png",
    videoUrl: "#",
  },
  {
    id: "3",
    title: "Dịch vụ mở khóa quốc tế dễ dàng và tiết kiệm tại Ngáo Store",
    thumbnail: "/images/unlock-2.png",
    videoUrl: "#",
  },
  {
    id: "4",
    title: "Ngáo Store hỗ trợ ghép sim tận nơi 24/7",
    thumbnail: "/images/ghep-sim-tan-noi.png",
    videoUrl: "#",
  },
  {
    id: "5",
    title: "Hướng dẫn ghép sim Bison Pro 1.2 chi tiết",
    thumbnail: "/images/bison-pro.png",
    videoUrl: "#",
  },
  {
    id: "6",
    title: "Hướng dẫn ghép sim DB Dual EID chi tiết",
    thumbnail: "/images/dual.png",
    videoUrl: "#",
  },
  {
    id: "7",
    title: "Hướng dẫn ghép sim Heicard Pro GTR chi tiết",
    thumbnail: "/images/heicard.png",
    videoUrl: "#",
  },
  {
    id: "8",
    title: "Hướng dẫn ghép sim VipBS 2.03 chi tiết",
    thumbnail: "/images/vipbs.png",
    videoUrl: "#",
  },
  {
    id: "9",
    title: "Hướng dẫn ghép sim Only SED chi tiết",
    thumbnail: "/images/bison-sed.png",
    videoUrl: "#",
  },
  {
    id: "10",
    title: "Fix lỗi +84 và danh bạ trên iPhone Lock đơn giản",
    thumbnail: "/images/fix-danh-ba.png",
    videoUrl: "#",
  },
];
