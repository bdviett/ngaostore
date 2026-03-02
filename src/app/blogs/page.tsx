import Navbar from "@/components/Navbar";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import ContactPinned from "@/components/ContactPinned";
import type { Metadata } from "next";
import blogData from "@/data/blog.json";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ngao.store";

export const metadata: Metadata = {
  title: "Blog & Video Hướng Dẫn Sim Ghép iPhone Lock | Ngáo Store",
  description:
    "Hướng dẫn kích hoạt sim ghép, fix lỗi iPhone Lock, mẹo sử dụng sim ghép từ Ngáo Store. Video và bài viết chi tiết.",
  alternates: { canonical: `${SITE_URL}/blogs` },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Blog & Video Hướng Dẫn Sim Ghép iPhone Lock",
  description: "Hướng dẫn ghép sim, fix lỗi iPhone Lock từ Ngáo Store.",
  url: `${SITE_URL}/blogs`,
  numberOfItems: blogData.length,
  itemListElement: blogData.map(
    (p: { id: string; title: string; excerpt?: string; thumbnail: string; videoUrl: string }, i: number) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Article",
        name: p.title,
        description: p.excerpt || p.title,
        image: `${SITE_URL}${p.thumbnail}`,
        url: p.videoUrl,
      },
    })
  ),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blogs` },
  ],
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <div className="pt-20">
        <Blog useSlideshow={false} />
      </div>
      <Footer />
      <ContactPinned />
    </main>
  );
}
