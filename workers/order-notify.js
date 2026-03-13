/**
 * Cloudflare Worker - Proxy gửi đơn hàng tới Slack
 * Deploy: cd workers && npx wrangler deploy
 * Secret: npx wrangler secret put ORDER_SLACK_WEBHOOK_URL
 */

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const url = env.ORDER_SLACK_WEBHOOK_URL;
    if (!url) {
      return new Response(
        JSON.stringify({ error: "ORDER_SLACK_WEBHOOK_URL chưa cấu hình" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    try {
      const order = await request.json();
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
        return new Response(
          JSON.stringify({ error: `Slack trả về ${slackRes.status}: ${errText}` }),
          { status: 502, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }

      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    } catch (err) {
      console.error("Order notify error:", err);
      return new Response(
        JSON.stringify({ error: err instanceof Error ? err.message : "Lỗi gửi Slack" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }
  },
};
