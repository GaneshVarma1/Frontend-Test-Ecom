"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { getCartItemCount } = useCart();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <ShoppingBag className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">EliteStore</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-indigo-600'
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500 transition-colors">
              <User className="h-5 w-5" />
            </button>
            <Link 
              href="/cart" 
              className="relative p-2 text-gray-400 hover:text-gray-500 transition-colors"
            >
              <ShoppingBag className="h-5 w-5" />
              {getCartItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-indigo-600 text-white text-xs rounded-full flex items-center justify-center">
                  {getCartItemCount()}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 text-gray-400 hover:text-gray-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-200 bg-white shadow-lg"
            >
              <div className="space-y-1 py-4 px-4">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-3 py-3 text-base font-medium transition-colors rounded-md border-l-4 ${
                        isActive
                          ? 'text-indigo-600 bg-indigo-50 border-indigo-600 font-semibold'
                          : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50 border-transparent'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        color: isActive ? '#4f46e5' : '#374151',
                        backgroundColor: isActive ? '#eef2ff' : 'transparent'
                      }}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                {/* Mobile Actions */}
                <div className="pt-4 border-t border-gray-200 mt-4">
                  <div className="flex items-center justify-between">
                    <button className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors rounded-md hover:bg-gray-50">
                      <Search className="h-5 w-5 mr-2" />
                      <span className="text-base font-medium">Search</span>
                    </button>
                    <button className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors rounded-md hover:bg-gray-50">
                      <User className="h-5 w-5 mr-2" />
                      <span className="text-base font-medium">Account</span>
                    </button>
                    <Link 
                      href="/cart" 
                      className="relative flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors rounded-md hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <ShoppingBag className="h-5 w-5 mr-2" />
                      <span className="text-base font-medium">Cart</span>
                      {getCartItemCount() > 0 && (
                        <span className="absolute -top-1 -right-1 h-4 w-4 bg-indigo-600 text-white text-xs rounded-full flex items-center justify-center">
                          {getCartItemCount()}
                        </span>
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}