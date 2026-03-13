import { onRequest } from "firebase-functions/v2/https";

/**
 * Proxy gửi đơn hàng tới Slack.
 * Rewrite từ Hosting: /api/order-notify -> orderNotify
 *
 * Cấu hình: tạo file functions/.env với ORDER_SLACK_WEBHOOK_URL=...
 * (Không cần Blaze plan - dùng env thay vì Secret Manager)
 */
export const orderNotify = onRequest(async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const url = process.env.ORDER_SLACK_WEBHOOK_URL;
  if (!url) {
    res.status(500).json({ error: "ORDER_SLACK_WEBHOOK_URL chưa cấu hình" });
    return;
  }

  try {
    const order = req.body;
    const itemsText = order.items
      ?.map(
        (i) =>
          `• ${i.product} × ${i.quantity} = ${(i.price * i.quantity).toLocaleString("vi-VN")}đ`
      )
      .join("\n");

    const slackPayload = {
      text: `🛒 Đơn hàng mới: ${order.id}`,
      blocks: [
        {
          type: "header",
          text: { type: "plain_text", text: `🛒 Đơn hàng mới: ${order.id}`, emoji: true },
        },
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: `*Khách hàng:*\n${order.name}` },
            { type: "mrkdwn", text: `*SĐT:*\n${order.phone}` },
          ],
        },
        {
          type: "section",
          text: { type: "mrkdwn", text: `*Địa chỉ:*\n${order.address}` },
        },
        ...(order.note
          ? [{ type: "section", text: { type: "mrkdwn", text: `*Ghi chú:* ${order.note}` } }]
          : []),
        {
          type: "section",
          text: { type: "mrkdwn", text: `*Sản phẩm:*\n${itemsText || "-"}` },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Tổng:* ${order.totalAmount?.toLocaleString("vi-VN")}đ`,
          },
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text:
                "⚠️ Hãy kiểm tra trạng thái chuyển khoản trước khi bàn giao cho khách hàng. Nhắn tin xác nhận đơn hàng để bắt đầu quá trình vận chuyển.",
            },
          ],
        },
      ],
    };

    const slackRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(slackPayload),
    });

    if (!slackRes.ok) {
      const errText = await slackRes.text();
      console.error("Slack webhook error:", slackRes.status, errText);
      res.status(502).json({ error: `Slack trả về ${slackRes.status}: ${errText}` });
      return;
    }

    res.json({ ok: true });
  } catch (err) {
    console.error("Order notify error:", err);
    res.status(500).json({
      error: err instanceof Error ? err.message : "Lỗi gửi Slack",
    });
  }
});
