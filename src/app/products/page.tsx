import Navbar from "@/components/Navbar";
import ProductList from "@/components/ProductList";
import Footer from "@/components/Footer";
import ContactPinned from "@/components/ContactPinned";
import type { Metadata } from "next";
import productsData from "@/data/products.json";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ngao.store";

export const metadata: Metadata = {
  title: "Sản Phẩm Sim Ghép iPhone Lock | Ngáo Store",
  description:
    "Sim ghép iPhone Lock chính hãng Bison, Heicard. Sạc cáp, ốp lưng, cường lực. Giá rẻ, bảo hành 3 tháng. Giao hàng toàn quốc.",
  alternates: { canonical: `${SITE_URL}/products` },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Sản phẩm Sim Ghép iPhone Lock - Ngáo Store",
  description: "Sim ghép iPhone Lock, sạc cáp, ốp lưng, cường lực chính hãng.",
  url: `${SITE_URL}/products`,
  numberOfItems: productsData.length,
  itemListElement: productsData.map(
    (p: { id: string; name: string; shortDescription?: string; description: string; image: string; price: string }, i: number) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        shortDescription: p.shortDescription,
        description: p.description,
        image: `${SITE_URL}${p.image}`,
        offers: {
          "@type": "Offer",
          price: parseInt(p.price.replace(/\./g, ""), 10),
          priceCurrency: "VND",
        },
      },
    })
  ),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Sản phẩm", item: `${SITE_URL}/products` },
  ],
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <div className="pt-20">
        <ProductList useSlideshow={false} />
      </div>
      <Footer />
      <ContactPinned />
    </main>
  );
}
