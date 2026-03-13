# Nhận thông báo đơn hàng qua Slack

Khi khách đặt hàng, tin nhắn sẽ được gửi vào channel Slack.

## Cách thiết lập Slack

1. Vào [Slack API](https://api.slack.com/apps) → Create New App → From scratch
2. Chọn workspace → Đặt tên app (vd: "Ngáo Store Orders")
3. Vào **Incoming Webhooks** → Bật **Activate Incoming Webhooks**
4. **Add New Webhook to Workspace** → Chọn channel (vd: #don-hang) → Authorize
5. Copy **Webhook URL**

## Cấu hình theo môi trường

### Local (next dev)

Thêm vào `.env.local`:

```
NEXT_PUBLIC_ORDER_SLACK_WEBHOOK_URL=https://hooks.slack.com/services/T.../B.../xxx
```

API route `/api/order-notify` chạy trên Next.js server.

### Production (Cloudflare Workers)

Firebase Hosting dùng static export → không có API routes. Dùng **Cloudflare Workers** (free, không cần Blaze).

1. Deploy Worker:

```bash
cd workers
npx wrangler deploy
```

2. Cài secret (Webhook URL):

```bash
cd workers
npx wrangler secret put ORDER_SLACK_WEBHOOK_URL
# Dán Webhook URL khi được hỏi
```

3. Lấy Worker URL (vd: `https://ngaostore-order-notify.<account>.workers.dev`)

4. Build Next.js với env:

```bash
NEXT_PUBLIC_ORDER_NOTIFY_URL=https://ngaostore-order-notify.<account>.workers.dev npm run build
```

Hoặc thêm `NEXT_PUBLIC_ORDER_NOTIFY_URL` vào env của CI/CD (GitHub Actions secrets).

Mỗi khi có đơn mới, tin nhắn sẽ xuất hiện trong channel Slack.
