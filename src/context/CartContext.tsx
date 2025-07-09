"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Product, Variant, CartItem } from '@/types/product';

interface CartNotification {
  isVisible: boolean;
  productName: string;
  variantName: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, variant: Variant, quantity?: number) => void;
  updateQuantity: (productId: string, variantId: string, newQuantity: number) => void;
  removeFromCart: (productId: string, variantId: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
  notification: CartNotification;
  hideNotification: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [notification, setNotification] = useState<CartNotification>({
    isVisible: false,
    productName: '',
    variantName: '',
    quantity: 0
  });

  const addToCart = useCallback((product: Product, variant: Variant, quantity: number = 1) => {
    if (!variant.inStock) {
      console.warn('Cannot add out of stock item to cart');
      return;
    }

    console.log('Adding to cart:', { product: product.name, variant: variant.name, quantity });
    
    // Show notification
    setNotification({
      isVisible: true,
      productName: product.name,
      variantName: variant.name,
      quantity
    });
    
    setCartItems(prev => {
      const existingItem = prev.find(
        item => item.product.id === product.id && item.variant.id === variant.id
      );
      
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id && item.variant.id === variant.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      return [...prev, { product, variant, quantity }];
    });
  }, []);

  const removeFromCart = useCallback((productId: string, variantId: string) => {
    setCartItems(prev =>
      prev.filter(item => !(item.product.id === productId && item.variant.id === variantId))
    );
  }, []);

  const updateQuantity = useCallback((productId: string, variantId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId, variantId);
      return;
    }

    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId && item.variant.id === variantId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const getCartTotal = useCallback(() => {
    return cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }, [cartItems]);

  const getCartItemCount = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const hideNotification = useCallback(() => {
    setNotification(prev => ({ ...prev, isVisible: false }));
  }, []);

  const value: CartContextType = {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartItemCount,
    notification,
    hideNotification
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}