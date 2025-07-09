import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { CartNotification } from '../CartNotification';
import { useCart } from '../../context/CartContext';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { notification, hideNotification } = useCart();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <CartNotification
        isVisible={notification.isVisible}
        onClose={hideNotification}
        productName={notification.productName}
        variantName={notification.variantName}
        quantity={notification.quantity}
      />
    </div>
  );
}