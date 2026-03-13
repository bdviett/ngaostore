/**
 * Checkout config & helpers
 */

/** Parse price string "120.000" -> 120000 */
export function parsePrice(priceStr: string): number {
  return parseInt(priceStr.replace(/\./g, ""), 10) || 0;
}

/** Format price 120000 -> "120.000" */
export function formatPrice(amount: number): string {
  return amount.toLocaleString("vi-VN");
}

export const ZALO_URL = "https://zalo.me/0988012895";
