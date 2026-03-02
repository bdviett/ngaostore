# Sitemap & SEO Plan for ngao.store

## Goal
Improve Google indexing and search visibility via sitemap, robots.txt, and structured data.

---

## What Was Implemented

### 1. Structured Data (JSON-LD)

| Schema | Location | Purpose |
|--------|----------|---------|
| **LocalBusiness** | Layout | Địa chỉ, SĐT, giờ mở cửa, khu vực phục vụ |
| **WebSite** | Layout | Tên site, publisher, ngôn ngữ |
| **FAQPage** | FAQ component | Rich snippet FAQ trên Google |
| **ItemList + Product** | /products | Danh sách sản phẩm cho rich results |
| **ItemList + Article** | /blogs | Danh sách bài viết |
| **BreadcrumbList** | /products, /blogs | Breadcrumb trong kết quả tìm kiếm |

### 2. Google Search Console Verification
- Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` = mã xác minh từ Search Console
- Meta tag sẽ tự động thêm vào `<head>`

### 3. Canonical URLs
- Homepage: `https://ngao.store`
- /products: `https://ngao.store/products`
- /blogs: `https://ngao.store/blogs`

### 4. Trang chi tiết sản phẩm (`/products/[slug]`)
- Mỗi sản phẩm có URL riêng: `ngao.store/products/sim-ghep-bison-new-2025`
- **Product schema** + **BreadcrumbList** cho từng trang
- **Meta động**: title, description, Open Graph theo từng sản phẩm
- **Canonical URL** cho mỗi trang
- Thêm `slug` trong `products.json` để tùy chỉnh URL (nếu không có thì tự sinh từ tên + id)

### 5. Sitemap (`/sitemap.xml`)
- **File**: `src/app/sitemap.ts`
- **Output**: `https://ngao.store/sitemap.xml` (auto-generated at build)
- **Current URLs**: Homepage, /products, /blogs, và tất cả URL sản phẩm (`/products/[slug]`)
- **Extensible**: Add more URLs when you create new pages (e.g. `/blog`, `/products`)

### 2. Robots.txt (`/robots.txt`)
- **File**: `src/app/robots.ts`
- **Output**: `https://ngao.store/robots.txt`
- **Rules**: Allow all crawlers (`*`), allow `/`, no disallow
- **Sitemap reference**: Points crawlers to `/sitemap.xml`

---

## Next Steps for SEO

### A. Submit to Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://ngao.store`
3. Verify ownership (HTML tag, DNS, or file upload)
4. Submit sitemap: `https://ngao.store/sitemap.xml`
5. Request indexing for main URL

### B. When You Add New Pages
Update `src/app/sitemap.ts`:

```ts
return [
  { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
  { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  { url: `${SITE_URL}/products`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
];
```

### C. Priority & Change Frequency Guide
| Page Type   | Priority | Change Frequency |
|-------------|----------|-------------------|
| Homepage    | 1.0      | weekly            |
| Main pages  | 0.8–0.9  | weekly            |
| Blog/News   | 0.6–0.7  | daily/weekly      |
| Static info | 0.5      | monthly           |

---

## Environment Variables
| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Base URL (default: https://ngao.store) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Mã xác minh Google Search Console (optional) |

---

## Verification
After deploy, check:
- https://ngao.store/sitemap.xml
- https://ngao.store/robots.txt
