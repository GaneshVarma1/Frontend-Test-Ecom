"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Shield, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Star,
    text: 'Premium Quality',
  },
  {
    icon: Shield,
    text: 'Secure Shopping',
  },
  {
    icon: Truck,
    text: 'Fast Delivery',
  },
];

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 sm:py-24 lg:py-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  Discover
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                    Premium Products
                  </span>
                  for Modern Living
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-2xl">
                  Curated collection of high-quality products that blend style, functionality, 
                  and innovation. From cutting-edge electronics to premium lifestyle essentials.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
                >
                  Learn More
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 flex flex-wrap items-center gap-4 sm:gap-8"
              >
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <feature.icon className="h-5 w-5 text-indigo-600" />
                    <span className="text-sm font-medium text-gray-700">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="mt-12 lg:mt-0 lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/3945654/pexels-photo-3945654.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Premium headphones showcase"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Cards */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -left-2 sm:-left-4 top-1/4 bg-white rounded-lg shadow-lg p-3 sm:p-4 max-w-[200px] sm:max-w-xs"
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 sm:h-10 sm:w-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-gray-900">Secure Payment</p>
                      <p className="text-xs text-gray-500">256-bit SSL encryption</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute -right-2 sm:-right-4 bottom-1/4 bg-white rounded-lg shadow-lg p-3 sm:p-4 max-w-[200px] sm:max-w-xs"
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 sm:h-10 sm:w-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Truck className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-gray-900">Fast Shipping</p>
                      <p className="text-xs text-gray-500">Free delivery over $50</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}