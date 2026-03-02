# Firebase deployment - Đã chuyển về static export

## Đã thực hiện (Option A)

- [x] Thêm `output: 'export'` vào next.config.mjs
- [x] Thêm `images.unoptimized: true` (bắt buộc cho static)
- [x] Xóa `dynamic = "force-dynamic"` khỏi tất cả trang
- [x] Thêm `generateStaticParams` cho /products/[slug]
- [x] Cập nhật firebase.json rewrites cho static HTML

## Deploy lên Firebase

```bash
npm run build
firebase deploy
```

Hoặc: `npm run build:firebase`

## Lưu ý

- Firebase Hosting chỉ serve static → không có image optimization (WebP/AVIF)
- Mỗi lần thêm sản phẩm mới → cần build lại để tạo HTML
