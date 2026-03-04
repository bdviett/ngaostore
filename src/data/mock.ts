import productsData from "./products.json";
import blogData from "./blog.json";

export type ProductCategory =
  | "all"
  | "sim-ghep"
  | "sac-cap"
  | "cuong-luc"
  | "op-lung"
  | "phu-kien-khac";

export interface ProductMediaItem {
  type: "image" | "video";
  /** Đường dẫn ảnh hoặc link video (YouTube, TikTok, ...) */
  url: string;
  /** Ảnh thumbnail cho video (optional, dùng ảnh mặc định nếu không có) */
  thumbnail?: string;
}

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
  /** Trạng thái tồn kho: true = sẵn hàng, false = hết hàng. Mặc định true nếu không có */
  inStock?: boolean;
  /** Gallery: danh sách ảnh + video. Nếu có thì dùng thay cho image ở trang chi tiết */
  media?: ProductMediaItem[];
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
  /** Link video ngoài (TikTok, YouTube...) - dùng khi không có slug */
  videoUrl?: string;
  /** Slug trang nội bộ - khi có thì link tới /{slug} thay vì videoUrl */
  slug?: string;
  excerpt?: string;
}

export const products: Product[] = productsData as Product[];
export const blogPosts: BlogPost[] = blogData as BlogPost[];
