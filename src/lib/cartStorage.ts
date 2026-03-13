/**
 * Cart storage (localStorage)
 * Cart items: productSlug + quantity
 */

export interface CartItem {
  productSlug: string;
  quantity: number;
}

const STORAGE_KEY = "ngao_cart";

function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function setCart(items: CartItem[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore
  }
}

export function getCartItems(): CartItem[] {
  return getCart();
}

export function addToCart(productSlug: string, quantity = 1): CartItem[] {
  const items = getCart();
  const existing = items.find((i) => i.productSlug === productSlug);
  if (existing) {
    existing.quantity += quantity;
  } else {
    items.push({ productSlug, quantity });
  }
  setCart(items);
  return items;
}

export function updateCartItem(productSlug: string, quantity: number): CartItem[] {
  const items = getCart();
  const item = items.find((i) => i.productSlug === productSlug);
  if (!item) return items;
  if (quantity <= 0) {
    return removeFromCart(productSlug);
  }
  item.quantity = quantity;
  setCart(items);
  return items;
}

export function removeFromCart(productSlug: string): CartItem[] {
  const items = getCart().filter((i) => i.productSlug !== productSlug);
  setCart(items);
  return items;
}

export function clearCart(): void {
  setCart([]);
}

export function getCartCount(): number {
  return getCart().reduce((sum, i) => sum + i.quantity, 0);
}
