import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ngao.store";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ghép Sim & Mở Khóa iPhone Lock Giá Rẻ Tại Hà Nội, Đà Nẵng | Ngáo Store | ngao.store",
    template: "%s | Ngáo Store",
  },
  description:
    "Sim ghép iPhone Lock chính hãng. Mở khóa iPhone Lock, ghép sim tận nơi Hà Nội & Đà Nẵng. Ghép sim tận nơi, mở khóa quốc tế. Bảo hành 3 tháng. Liên hệ Zalo: 0988 012 895.",
  keywords: [
    "sim ghép iphone lock",
    "sim ghép iphone giá rẻ",
    "mở khóa iphone lock",
    "ghép sim tận nơi",
    "ghép sim tại nhà hà nội",
    "sim ghép tại hà nội",
    "sim ghép cầu giấy",
    "sim ghép cầu giấy hà nội",
    "sim ghép hoàng mai",
    "sim ghép long biên",
    "sim ghép thanh xuân",
    "sim ghép đống đa",
    "sim ghép bắc từ liêm",
    "sim ghép nam từ liêm",
    "sim ghép thanh xuân",
    "sim ghép hoàng mai",
    "sim ghép long biên",
    "sim ghép thanh xuân",
    "sim ghép đống đa",
    "sim ghép bắc từ liêm",
    "sim ghép tại đà nẵng",
    "ghép sim đà nẵng",
    "sim ghép bison",
    "sim ghép heicard",
    "sim ghép qpe",
    "sim ghép tmsi",
    "sim ghép eid",
    "fix lỗi iphone lock",
    "fix lỗi danh bạ iphone",
    "kích hoạt iphone lock",
    "iphone lock dùng được sim việt",
    "sim ghép iphone 16",
    "sim ghép iphone 15",
    "sim ghép iphone 14",
    "sim ghép iphone 13",
    "sim ghép iphone 12",
    "sim ghép iphone 11",
    "sim ghép iphone x",
    "ngao store",
    "sim ghép hà nội",
    "sim ghép đà nẵng",
    "mở khóa iphone lock tại nhà",
    "ghép sim iphone 24/7",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  authors: [{ name: "Ngáo Store", url: SITE_URL }],
  creator: "Ngáo Store",
  publisher: "Ngáo Store",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: SITE_URL,
    siteName: "Ngáo Store",
    title: "Sim Ghép iPhone Lock Giá Rẻ Tại Hà Nội, Đà Nẵng | Ngáo Store | ngao.store",
    description:
      "Sim ghép iPhone Lock chính hãng. Ghép sim tận nơi Hà Nội & Đà Nẵng. Fix lỗi danh bạ, 4G/5G ổn định. Bảo hành 3 tháng.",
    images: [{ url: "/favicon.png", width: 512, height: 512, alt: "Ngáo Store - Sim Ghép iPhone Lock" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sim Ghép iPhone Lock Giá Rẻ Tại Hà Nội, Đà Nẵng | Ngáo Store | ngao.store",
    description: "Sim ghép iPhone Lock, mở khóa iPhone. Ghép sim tận nơi Hà Nội & Đà Nẵng. Bảo hành 3 tháng.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "technology",
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  }),
};

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ngáo Store",
  description: "Chuyên sim ghép iPhone Lock, mở khóa iPhone Lock. Ghép sim tận nơi Hà Nội & Đà Nẵng. Sim ghép Bison, Heicard chính hãng.",
  url: SITE_URL,
  telephone: "+84988012895",
  email: "ngaostore86@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Số 10 ngõ 28B Hạ Đình, Thanh Xuân",
    addressLocality: "Hà Nội",
    addressCountry: "VN",
  },
  areaServed: [{ "@type": "City", name: "Hà Nội" }, { "@type": "City", name: "Đà Nẵng" }],
  priceRange: "99.000đ - 250.000đ",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [
    "https://www.facebook.com/ngaostore86",
    "https://www.instagram.com/ngaostore.86",
  ],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ngáo Store",
  url: SITE_URL,
  description: "Sim ghép iPhone Lock, mở khóa iPhone. Ghép sim tận nơi Hà Nội & Đà Nẵng.",
  publisher: {
    "@type": "Organization",
    name: "Ngáo Store",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
  inLanguage: "vi-VN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        {children}
      </body>
    </html>
  );
}
