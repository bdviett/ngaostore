import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPinned from "@/components/ContactPinned";
import ProductGallery from "@/components/ProductGallery";
import { products, getProductSlug } from "@/data/mock";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, ShieldCheck, Truck } from "lucide-react";
import AddToCartButton from "@/components/product/AddToCartButton";

export function generateStaticParams() {
  return products.map((p) => ({ slug: getProductSlug(p) }));
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ngao.store";
const ZALO_URL = "https://zalo.me/0988012895";
const SHOPEE_FALLBACK = "https://shopee.vn/ngaostore86";

function findProductBySlug(slug: string) {
  return products.find((p) => getProductSlug(p) === slug);
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = findProductBySlug(params.slug);
  if (!product) return { title: "Không tìm thấy" };

  return {
    title: `${product.name} - ${product.price} VNĐ | Ngáo Store`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | Ngáo Store`,
      description: product.shortDescription,
      images: [{ url: `${SITE_URL}${product.image}`, width: 800, height: 800, alt: product.name }],
    },
    alternates: { canonical: `${SITE_URL}/products/${getProductSlug(product)}` },
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = findProductBySlug(params.slug);
  if (!product) notFound();

  const inStock = product.inStock !== false;
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: `${SITE_URL}${product.image}`,
    offers: {
      "@type": "Offer",
      price: parseInt(product.price.replace(/\./g, ""), 10),
      priceCurrency: "VND",
      availability: inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      url: `${SITE_URL}/products/${getProductSlug(product)}`,
    },
    brand: {
      "@type": "Brand",
      name: "Ngáo Store",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Sản phẩm", item: `${SITE_URL}/products` },
      { "@type": "ListItem", position: 3, name: product.name, item: `${SITE_URL}/products/${getProductSlug(product)}` },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar variant="dark" />
      <div className="pt-24 pb-24">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mt-8 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Trang chủ</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary transition-colors">Sản phẩm</Link>
            <span>/</span>
            <span className="text-secondary font-medium truncate max-w-[200px] sm:max-w-none">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div>
              {product.media && product.media.length > 0 ? (
                <ProductGallery media={product.media} productName={product.name} />
              ) : (
                <div className="aspect-square relative rounded-3xl overflow-hidden bg-gray-100 border border-gray-100 shadow-lg shadow-gray-200/50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              )}
            </div>

            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight">{product.name}</h1>
              <div className="flex items-center gap-4">
                <p className="text-primary font-bold text-2xl">{product.price} VNĐ</p>
                <span
                  className={`px-4 py-1.5 rounded-full text-sm font-bold ${
                    inStock ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {inStock ? "Sẵn hàng" : "Hết hàng"}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>

              <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
                <a
                  href={product.shopeeUrl || SHOPEE_FALLBACK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline hover:text-amber-900"
                >
                  Mua qua Shopee
                </a>
                <span className="ml-1">— giá sẽ cao hơn vì phí sàn</span>
              </div>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:flex-wrap">
                {inStock && (
                  <Link
                    href={`/checkout?slug=${getProductSlug(product)}`}
                    className="inline-flex flex-1 items-center justify-center rounded-2xl bg-primary px-10 py-4 font-bold text-lg text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-primary/40"
                  >
                    Mua ngay
                  </Link>
                )}
                <AddToCartButton productSlug={getProductSlug(product)} inStock={inStock} />
              </div>

              <div className="mt-6 p-6 rounded-2xl bg-primary/5 border-2 border-primary/20 shadow-sm">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                  <a
                    href={ZALO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-secondary font-semibold hover:text-primary transition-colors"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <Phone size={20} />
                    </span>
                    <span>Tư vấn & hỗ trợ ghép sim miễn phí</span>
                  </a>
                  <div className="flex items-center gap-3 text-secondary">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <ShieldCheck size={20} />
                    </span>
                    <span>Bảo hành 3 tháng</span>
                  </div>
                  <div className="flex items-center gap-3 text-secondary">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <Truck size={20} />
                    </span>
                    <span>Giao hàng toàn quốc</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ContactPinned />
    </main>
  );
}
