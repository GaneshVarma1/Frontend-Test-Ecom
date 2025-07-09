"use client";

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { ShoppingCart, ImageIcon } from 'lucide-react';
import { Product, Variant } from '@/types/product';
import { formatCurrency } from '@/utils/currency';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, variant: Variant) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [selectedVariant, setSelectedVariant] = useState<Variant>(product.variants[0]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = useCallback(() => {
    onAddToCart(product, selectedVariant);
  }, [product, selectedVariant, onAddToCart]);

  const handleVariantChange = useCallback((variantId: string) => {
    const variant = product.variants.find(v => v.id === variantId);
    if (variant) {
      setSelectedVariant(variant);
    }
  }, [product.variants]);

  const isOutOfStock = !selectedVariant.inStock;
  const hasMultipleVariants = product.variants.length > 1;

  return (
    <article className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-150 ease-out hover:scale-[1.02] motion-reduce:hover:scale-100 motion-reduce:transition-none">
      {/* Product Image */}
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden rounded-t-lg bg-gray-100">
          {!imageError ? (
            <img
              src={product.imageUrl}
              alt={product.name}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-50">
              <ImageIcon className="w-12 h-12 text-gray-400" aria-hidden="true" />
            </div>
          )}
          
          {/* Loading skeleton */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Product Name */}
        <Link href={`/product/${product.id}`}>
          <h3 className="font-medium text-gray-900 line-clamp-2 text-sm leading-5 hover:text-indigo-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Price */}
        <p className="text-lg font-semibold text-gray-900">
          {formatCurrency(product.price, product.currency)}
        </p>

        {/* Variant Selector */}
        {hasMultipleVariants && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 sr-only">
              Select variant
            </label>
            
            {product.variants.length <= 3 ? (
              /* Pill Variants */
              <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Product variants">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => handleVariantChange(variant.id)}
                    disabled={!variant.inStock}
                    className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors duration-150 ${
                      selectedVariant.id === variant.id
                        ? 'bg-gray-900 text-white border-gray-900'
                        : variant.inStock
                        ? 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                        : 'bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed'
                    }`}
                    role="radio"
                    aria-checked={selectedVariant.id === variant.id}
                    aria-disabled={!variant.inStock}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            ) : (
              /* Dropdown Variants */
              <select
                value={selectedVariant.id}
                onChange={(e) => handleVariantChange(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white text-gray-900"
                aria-label="Select product variant"
              >
                {product.variants.map((variant) => (
                  <option
                    key={variant.id}
                    value={variant.id}
                    disabled={!variant.inStock}
                  >
                    {variant.name} {!variant.inStock && '(Out of Stock)'}
                  </option>
                ))}
              </select>
            )}
          </div>
        )}

        {/* Add to Cart Button */}
        <div className="flex space-x-2">
          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isOutOfStock
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500'
            }`}
            aria-label={isOutOfStock ? 'Out of stock' : `Add ${product.name} to cart`}
          >
            <ShoppingCart className="w-4 h-4" aria-hidden="true" />
            {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
          </button>
          <Link
            href={`/product/${product.id}`}
            className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            aria-label={`View details for ${product.name}`}
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
}