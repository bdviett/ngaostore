import productsData from "./products.json";
import blogData from "./blog.json";

export type ProductCategory =
  | "all"
  | "sim-ghep"
  | "sac-cap"
  | "cuong-luc"
  | "op-lung"
  | "phu-kien-khac";

export interface Product {
  id: string;
  name: string;
  price: string;
  /** Mô tả ngắn (dùng cho card, meta, SEO) */
  shortDescription: string;
  /** Mô tả đầy đủ chi tiết (hiển thị trang chi tiết sản phẩm) */
  description: string;
  image: string;
  category: ProductCategory;
  slug?: string;
  /** Link mua hàng trên Shopee (nếu có) */
  shopeeUrl?: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getProductSlug(product: Product): string {
  return (product as { slug?: string }).slug || `${slugify(product.name)}-${product.id}`;
}

export interface BlogPost {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  excerpt?: string;
}

export const products: Product[] = productsData as Product[];
export const blogPosts: BlogPost[] = blogData as BlogPost[];
