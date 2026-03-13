/**
 * Generate unique Order ID
 * Format: NG + yymmdd + random
 * Example: NG240311-4821
 */
export function generateOrderId(): string {
  const now = new Date();

  const year = now.getFullYear().toString().slice(2);
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const random = Math.floor(Math.random() * 9000) + 1000;

  return `NG${year}${month}${day}-${random}`;
}

/**
 * Stronger Order ID (timestamp based)
 * Example: NG240311-1710151234
 */
export function generateStrongOrderId(): string {
  const now = new Date();

  const year = now.getFullYear().toString().slice(2);
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const timestamp = Date.now().toString().slice(-6);

  return `NG${year}${month}${day}-${timestamp}`;
}
