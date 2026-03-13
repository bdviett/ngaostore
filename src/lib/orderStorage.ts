/**
 * Local order storage (localStorage)
 * No backend - orders stored client-side
 */

export type OrderStatus = "pending" | "confirmed" | "shipped";

export interface OrderLineItem {
  product: string;
  productSlug?: string;
  price: number;
  quantity: number;
}

export interface StoredOrder {
  id: string;
  name: string;
  phone: string;
  address: string;
  note?: string;
  /** Multi-item orders */
  items?: OrderLineItem[];
  /** Legacy single-product (for backward compat) */
  product?: string;
  productSlug?: string;
  price?: number;
  quantity?: number;
  status: OrderStatus;
  hash: string;
  createdAt: number;
}

const STORAGE_KEY = "ngao_orders";

function getOrders(): StoredOrder[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function setOrders(orders: StoredOrder[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  } catch {
    // ignore
  }
}

export function saveOrder(order: StoredOrder): void {
  const orders = getOrders();
  const existing = orders.findIndex((o) => o.id === order.id);
  if (existing >= 0) {
    orders[existing] = order;
  } else {
    orders.unshift(order);
  }
  setOrders(orders);
}

export function getOrderById(id: string): StoredOrder | null {
  return getOrders().find((o) => o.id === id) ?? null;
}

export function getAllOrders(): StoredOrder[] {
  return getOrders();
}

export function deleteOrder(id: string): void {
  const orders = getOrders().filter((o) => o.id !== id);
  setOrders(orders);
}
