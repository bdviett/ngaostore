/**
 * Order hash utility
 * Used to detect order modification
 */

export interface HashOrderInput {
  id: string;
  product: string;
  price: number;
  quantity: number;
}

export interface HashOrderMultiInput {
  id: string;
  items: Array<{ product: string; price: number; quantity: number }>;
}

function hashString(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash.toString();
}

/**
 * Simple hash generator (single product)
 */
export function generateOrderHash(order: HashOrderInput): string {
  const raw = `${order.id}|${order.product}|${order.price}|${order.quantity}`;
  return hashString(raw);
}

/**
 * Hash for multi-item orders
 */
export function generateOrderHashMulti(order: HashOrderMultiInput): string {
  const parts = order.items
    .map((i) => `${i.product}|${i.price}|${i.quantity}`)
    .sort();
  const raw = `${order.id}|${parts.join(";")}`;
  return hashString(raw);
}

/**
 * Verify order integrity
 */
export function verifyOrderHash(order: HashOrderInput, hash: string): boolean {
  const newHash = generateOrderHash(order);
  return newHash === hash;
}
