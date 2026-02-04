import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "Ngáo Store - Chuyên Sim Ghép iPhone Lock Giá Rẻ, Uy Tín",
  description: "Cung cấp các loại sim ghép mới nhất cho iPhone Lock. Hỗ trợ fix lỗi, kích hoạt iPhone Lock nhanh chóng, ổn định.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  keywords: [
    "sim ghép iphone 6",
    "sim ghép iphone 7",
    "sim ghép iphone 8",
    "sim ghép iphone 9",
    "sim ghép iphone x",
    "sim ghép iphone xs",
    "sim ghép iphone xs max",
    "sim ghép iphone xr",
    "sim ghép iphone xr max",
    "sim ghép iphone 11",
    "sim ghép iphone 11 pro",
    "sim ghép iphone 11 pro max",
    "sim ghép iphone 12",
    "sim ghép iphone 12 pro",
    "sim ghép iphone 12 pro max",
    "sim ghép iphone 13",
    "sim ghép iphone 13 pro",
    "sim ghép iphone 13 pro max",
    "sim ghép iphone 14",
    "sim ghép iphone 14 pro",
    "sim ghép iphone 14 pro max",
    "sim ghép iphone 15",
    "sim ghép iphone 15 pro",
    "sim ghép iphone 15 pro max",
    "sim ghép iphone 16",
    "sim ghép iphone 16 pro",
    "sim ghép iphone 16 pro max",
    "sim ghép iphone 17",
    "sim ghép iphone 17 pro",
    "sim ghép iphone 17 pro max",
    "sim ghép eid",
    "sim ghép qpe",
    "sim ghép tmsi",
    "iphone lock",
    "fix lỗi iphone lock",
    "sim ghép giá rẻ",
    "ngao store",
    "sim ghép pro new",
    "sim ghép bison",
    "kích hoạt iphone lock",
    "sim ghép tự động",
    "sim ghép tphcm",
    "sim ghép hà nội",
    "sim ghép mới nhất",
    "ghép sim iphone",
  ],
  authors: [{ name: "Ngáo Store" }],
  openGraph: {
    title: "Ngáo Store - Chuyên Sim Ghép iPhone Lock Giá Rẻ, Uy Tín",
    description: "Cung cấp các loại sim ghép mới nhất cho iPhone Lock. Hỗ trợ fix lỗi, kích hoạt iPhone Lock nhanh chóng, ổn định.",
    type: "website",
    locale: "vi_VN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
