import { NextResponse } from "next/server";

/**
 * Proxy gửi đơn hàng tới Slack
 * Chạy trên server nên không bị chặn CORS
 */
export async function POST(request: Request) {
  const url = process.env.NEXT_PUBLIC_ORDER_SLACK_WEBHOOK_URL;
  if (!url) {
    return NextResponse.json(
      { error: "NEXT_PUBLIC_ORDER_SLACK_WEBHOOK_URL chưa cấu hình" },
      { status: 500 }
    );
  }

  try {
    const order = await request.json();
    const itemsText = order.items
      ?.map(
        (i: { product: string; quantity: number; price: number }) =>
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
              text: "⚠️ Hãy kiểm tra trạng thái chuyển khoản trước khi bàn giao cho khách hàng. Nhắn tin xác nhận đơn hàng để bắt đầu quá trình vận chuyển.",
            },
          ],
        },
      ],
    };

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(slackPayload),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Slack webhook error:", res.status, errText);
      return NextResponse.json(
        { error: `Slack trả về ${res.status}: ${errText}` },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Order notify error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Lỗi gửi Slack" },
      { status: 500 }
    );
  }
}
