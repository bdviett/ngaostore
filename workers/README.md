# Order Notify Worker (Cloudflare)

Proxy gửi đơn hàng tới Slack. Chạy trên Cloudflare Workers (free tier).

## Deploy lần đầu

1. Đăng nhập Cloudflare (nếu chưa):

```bash
npx wrangler login
```

2. Deploy:

```bash
# Từ project root
npm run deploy:worker

# Hoặc
cd workers && npx wrangler deploy
```

## Cấu hình secret

```bash
cd workers
npx wrangler secret put ORDER_SLACK_WEBHOOK_URL
# Dán Slack Webhook URL khi được hỏi
```

## Lấy Worker URL

Sau khi deploy, Wrangler in ra URL dạng:
`https://ngaostore-order-notify.<account>.workers.dev`

Thêm vào build env: `NEXT_PUBLIC_ORDER_NOTIFY_URL=<url>`
