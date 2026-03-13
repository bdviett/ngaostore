"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import {
  addToCart as addToCartStorage,
  removeFromCart as removeFromCartStorage,
  updateCartItem as updateCartItemStorage,
  clearCart as clearCartStorage,
  getCartItems,
  type CartItem,
} from "@/lib/cartStorage";

interface CartContextValue {
  items: CartItem[];
  count: number;
  addToCart: (productSlug: string, quantity?: number) => void;
  removeFromCart: (productSlug: string) => void;
  updateQuantity: (productSlug: string, quantity: number) => void;
  clearCart: () => void;
  refresh: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const refresh = useCallback(() => {
    setItems(getCartItems());
  }, []);

  useEffect(() => {
    refresh();
    if (typeof window !== "undefined") {
      const handleStorage = (e: StorageEvent) => {
        if (e.key === "ngao_cart") refresh();
      };
      window.addEventListener("storage", handleStorage);
      return () => window.removeEventListener("storage", handleStorage);
    }
  }, [refresh]);

  const addToCart = useCallback(
    (productSlug: string, quantity = 1) => {
      setItems(addToCartStorage(productSlug, quantity));
    },
    []
  );

  const removeFromCart = useCallback((productSlug: string) => {
    setItems(removeFromCartStorage(productSlug));
  }, []);

  const updateQuantity = useCallback((productSlug: string, quantity: number) => {
    setItems(updateCartItemStorage(productSlug, quantity));
  }, []);

  const clearCart = useCallback(() => {
    clearCartStorage();
    setItems([]);
  }, []);

  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        count,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        refresh,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
