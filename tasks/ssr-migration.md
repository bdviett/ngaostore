# Chuyển SPA sang SSR - Tối ưu SEO Google

## Thay đổi đã thực hiện

### 1. Next.js Config (`next.config.mjs`)
- **Xóa** `output: 'export'` – không còn static export
- **Xóa** `images.unoptimized: true` – bật tối ưu ảnh mặc định của Next.js

### 2. Bật SSR cho các trang
Thêm `export const dynamic = "force-dynamic"` vào:
- `src/app/page.tsx` (Trang chủ)
- `src/app/blog/page.tsx`
- `src/app/products/page.tsx`

→ Các trang này được **render trên server mỗi request** (SSR).

### 3. Kết quả build
```
ƒ  (Dynamic)  server-rendered on demand  → /, /blog, /products
○  (Static)   prerendered               → robots.txt, sitemap.xml
```

---

## Lợi ích cho SEO

1. **HTML đầy đủ khi crawl** – Google nhận HTML đã render sẵn từ server
2. **Tối ưu ảnh** – Next.js Image Optimization (WebP, AVIF)
3. **Nội dung động** – Có thể fetch dữ liệu mới mỗi request
4. **Meta tags** – Metadata được render trên server

---

## Deploy

**Quan trọng:** Cần môi trường chạy Node.js, không dùng static hosting thuần.

### Khuyến nghị: Vercel
```bash
npm i -g vercel
vercel
```

### Hoặc: Node server
```bash
npm run build
npm run start
# Chạy trên port 3000
```

### Không dùng được
- GitHub Pages (static)
- Netlify static
- Bất kỳ host chỉ serve file tĩnh

---

## Chạy local
```bash
npm run dev   # Development
npm run build && npm run start  # Production
```
