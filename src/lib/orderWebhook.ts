/**
 * Gửi thông báo đơn hàng mới qua Slack
 */

export interface WebhookOrderPayload {
  id: string;
  name: string;
  phone: string;
  address: string;
  note?: string;
  items: Array<{ product: string; productSlug?: string; price: number; quantity: number }>;
  totalAmount: number;
  status: string;
  createdAt: number;
}

export async function sendOrderToSlack(order: WebhookOrderPayload): Promise<boolean> {
  try {
    // Local: /api/order-notify (Next.js). Production: Cloudflare Worker URL
    const url = process.env.NEXT_PUBLIC_ORDER_NOTIFY_URL || "/api/order-notify";
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });
    return res.ok;
  } catch (err) {
    console.error("sendOrderToSlack error:", err);
    return false;
  }
}

/** Gửi thông báo đơn hàng mới qua Slack */
export async function notifyOrderToSeller(order: WebhookOrderPayload): Promise<void> {
  await sendOrderToSlack(order);
}

/**
 * Format order as text for customer to copy & send via Zalo
 */
export function formatOrderForShare(order: WebhookOrderPayload): string {
  const lines = [
    `Đơn hàng: ${order.id}`,
    ``,
    `Khách hàng: ${order.name}`,
    `SĐT: ${order.phone}`,
    `Địa chỉ: ${order.address}`,
    order.note ? `Ghi chú: ${order.note}` : null,
    ``,
    `Sản phẩm:`,
    ...order.items.map((i) => `- ${i.product} × ${i.quantity} = ${(i.price * i.quantity).toLocaleString("vi-VN")}đ`),
    ``,
    `Tổng: ${order.totalAmount.toLocaleString("vi-VN")}đ`,
  ];
  return lines.filter(Boolean).join("\n");
}
