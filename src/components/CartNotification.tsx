"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

interface CartNotificationProps {
  isVisible: boolean;
  onClose: () => void;
  productName: string;
  variantName: string;
  quantity: number;
}

export function CartNotification({ 
  isVisible, 
  onClose, 
  productName, 
  variantName, 
  quantity 
}: CartNotificationProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm w-full mx-4"
        >
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <CheckCircle className="h-6 w-6 text-green-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">
                Added to cart!
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {quantity}x {productName} ({variantName})
              </p>
              <div className="flex space-x-3 mt-3">
                <Link
                  href="/cart"
                  className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-md hover:bg-indigo-100 transition-colors"
                  onClick={onClose}
                >
                  <ShoppingCart className="h-3 w-3 mr-1" />
                  View Cart
                </Link>
                <button
                  onClick={onClose}
                  className="text-xs font-medium text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}