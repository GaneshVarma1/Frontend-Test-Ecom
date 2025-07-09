"use client";

import React, { useState, useEffect } from 'react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Star, 
  Shield, 
  Truck, 
  RotateCcw, 
  Heart,
  Share2,
  Minus,
  Plus,
  ShoppingCart
} from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { useCart } from '@/context/CartContext';
import { formatCurrency } from '@/utils/currency';
import { Product, Variant } from '@/types/product';
import { CartProvider } from '@/context/CartContext';

const productDetails = {
  '1': {
    description: 'Experience premium audio quality with our flagship wireless headphones. Featuring advanced noise cancellation, 30-hour battery life, and studio-quality sound reproduction.',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Premium leather ear cushions',
      'Bluetooth 5.0 connectivity',
      'Quick charge: 5 min = 2 hours playback',
      'Voice assistant compatible'
    ],
    specifications: {
      'Driver Size': '40mm',
      'Frequency Response': '20Hz - 20kHz',
      'Impedance': '32 ohms',
      'Weight': '250g',
      'Connectivity': 'Bluetooth 5.0, 3.5mm jack',
      'Battery': '30 hours (ANC on), 40 hours (ANC off)'
    },
    reviews: {
      average: 4.8,
      count: 1247
    }
  },
  '2': {
    description: 'Stay connected and motivated with our advanced fitness watch. Track your workouts, monitor health metrics, and receive smart notifications all day long.',
    features: [
      'Heart rate monitoring',
      'GPS tracking',
      'Water resistant (50m)',
      '7-day battery life',
      'Sleep tracking',
      'Smart notifications'
    ],
    specifications: {
      'Display': '1.4" AMOLED',
      'Battery Life': '7 days typical use',
      'Water Resistance': '5ATM (50m)',
      'Sensors': 'Heart rate, GPS, Accelerometer',
      'Compatibility': 'iOS 12+, Android 6+',
      'Storage': '4GB'
    },
    reviews: {
      average: 4.6,
      count: 892
    }
  },
  '3': {
    description: 'Transform your workspace with our ergonomically designed office chair. Built for all-day comfort with premium materials and adjustable features.',
    features: [
      'Ergonomic lumbar support',
      'Adjustable armrests',
      'Breathable mesh back',
      '360° swivel base',
      'Height adjustment',
      'Premium casters'
    ],
    specifications: {
      'Seat Height': '17" - 21"',
      'Weight Capacity': '300 lbs',
      'Materials': 'Mesh, Steel, Plastic',
      'Dimensions': '26" W x 26" D x 40-44" H',
      'Warranty': '5 years',
      'Assembly': 'Required (30 min)'
    },
    reviews: {
      average: 4.7,
      count: 634
    }
  },
  '4': {
    description: 'Elevate your gaming experience with our mechanical keyboard featuring premium switches, RGB lighting, and durable construction.',
    features: [
      'Mechanical switches',
      'RGB backlighting',
      'Anti-ghosting',
      'Detachable cable',
      'Aluminum frame',
      'Programmable keys'
    ],
    specifications: {
      'Switch Type': 'Mechanical (Multiple options)',
      'Layout': 'Full-size (104 keys)',
      'Backlighting': 'RGB per-key',
      'Connection': 'USB-C detachable',
      'Polling Rate': '1000Hz',
      'Key Life': '50 million keystrokes'
    },
    reviews: {
      average: 4.9,
      count: 2156
    }
  },
  '5': {
    description: 'Capture stunning images with our professional camera lens. Designed for photographers who demand exceptional image quality and versatility.',
    features: [
      'Professional optics',
      'Fast f/1.8 aperture',
      'Weather sealed',
      'Silent autofocus',
      'Image stabilization',
      'Multi-coating'
    ],
    specifications: {
      'Focal Length': '50mm',
      'Aperture': 'f/1.8 - f/22',
      'Mount': 'Canon EF/Nikon F',
      'Weight': '600g',
      'Filter Size': '67mm',
      'Min Focus': '0.45m'
    },
    reviews: {
      average: 4.8,
      count: 445
    }
  },
  '6': {
    description: 'Enjoy rich, immersive sound anywhere with our portable Bluetooth speaker. Perfect for home, office, or outdoor adventures.',
    features: [
      'Wireless Bluetooth 5.0',
      '12-hour battery life',
      'Water resistant (IPX6)',
      '360° sound',
      'Built-in microphone',
      'Compact design'
    ],
    specifications: {
      'Output Power': '20W',
      'Battery Life': '12 hours',
      'Bluetooth': '5.0 (30ft range)',
      'Water Rating': 'IPX6',
      'Dimensions': '7" x 3" x 3"',
      'Weight': '1.2 lbs'
    },
    reviews: {
      average: 4.5,
      count: 789
    }
  },
  '7': {
    description: 'Expand your connectivity with our versatile USB-C hub. Perfect for modern laptops and devices requiring multiple ports.',
    features: [
      'Multiple port types',
      'USB-C Power Delivery',
      '4K HDMI output',
      'Fast data transfer',
      'Compact design',
      'Plug and play'
    ],
    specifications: {
      'Ports': 'USB-C, USB-A x3, HDMI, SD',
      'Power Delivery': '100W pass-through',
      'HDMI': '4K@60Hz',
      'Data Transfer': 'USB 3.0 (5Gbps)',
      'Compatibility': 'USB-C devices',
      'Cable Length': '6 inches'
    },
    reviews: {
      average: 4.4,
      count: 567
    }
  },
  '8': {
    description: 'Start your day right with our premium ceramic coffee mug. Designed for coffee enthusiasts who appreciate quality and style.',
    features: [
      'Premium ceramic',
      'Perfect size (12oz)',
      'Comfortable handle',
      'Microwave safe',
      'Dishwasher safe',
      'Elegant design'
    ],
    specifications: {
      'Capacity': '12 oz (355ml)',
      'Material': 'High-grade ceramic',
      'Dimensions': '4.5" H x 3.5" W',
      'Weight': '0.8 lbs',
      'Care': 'Dishwasher & microwave safe',
      'Design': 'Minimalist modern'
    },
    reviews: {
      average: 4.3,
      count: 234
    }
  }
};

interface ProductDetailProps {
  productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'reviews'>('description');
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const apiProduct = await response.json();
        
        // Transform API product to our Product type
        const transformedProduct: Product = {
          id: apiProduct.id.toString(),
          name: apiProduct.title,
          price: Math.round(apiProduct.price * 100), // Convert to cents
          currency: 'USD',
          imageUrl: apiProduct.image,
          variants: [{ id: 'default', name: 'Default', inStock: true }],
          category: apiProduct.category
        };
        
        setProduct(transformedProduct);
        setSelectedVariant(transformedProduct.variants[0]);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  // Generate dynamic product details or use fallback
  const generateProductDetails = (product: Product) => {
    // Try to get hardcoded details first
    const hardcodedDetails = productDetails[product.id as keyof typeof productDetails];
    
    if (hardcodedDetails) {
      return hardcodedDetails;
    }
    
    // Generate deterministic review count based on product ID
    const productIdNum = parseInt(product.id) || 1;
    const reviewCount = 100 + (productIdNum * 23) % 500; // Deterministic but varied
    
    // Generate fallback details based on product category
    const fallbackDetails = {
      description: `${product.name} is a high-quality product from our ${product.category} collection. This premium item offers excellent value and performance for discerning customers.`,
      features: [
        'High-quality materials',
        'Durable construction',
        'Modern design',
        'Easy to use',
        'Reliable performance',
        'Great value for money'
      ],
      specifications: {
        'Category': product.category,
        'Material': 'Premium quality',
        'Weight': 'Varies by size',
        'Dimensions': 'Standard sizing',
        'Warranty': '1 year',
        'Care Instructions': 'Follow manufacturer guidelines'
      },
      reviews: {
        average: 4.5,
        count: reviewCount
      }
    };
    
    return fallbackDetails;
  };

  const details = product ? generateProductDetails(product) : null;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Loading...</h1>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {error || 'Product Not Found'}
          </h1>
          <Link href="/products" className="text-indigo-600 hover:text-indigo-500">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // For now, we'll show a simple message for similar products since we don't have the full product list
  const similarProducts: Product[] = [];

  const handleAddToCart = () => {
    if (selectedVariant) {
      addToCart(product, selectedVariant, quantity);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : i < rating
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              <span className="text-gray-400">/</span>
              <Link href="/products" className="text-gray-500 hover:text-gray-700">Products</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-medium">{product.name}</span>
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/products"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-500 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Link>
          </motion.div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8 lg:mb-0"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Title and Rating */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(details!.reviews.average)}
                  </div>
                  <span className="text-sm text-gray-600">
                    {details!.reviews.average} ({details!.reviews.count} reviews)
                  </span>
                </div>
                <p className="text-4xl font-bold text-gray-900">
                  {formatCurrency(product.price, product.currency)}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed">
                {details!.description}
              </p>

              {/* Variant Selection */}
              {product.variants.length > 1 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Variant
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {product.variants.map((variant) => (
                      <button
                        key={variant.id}
                        onClick={() => setSelectedVariant(variant)}
                        disabled={!variant.inStock}
                        className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
                          selectedVariant?.id === variant.id
                            ? 'bg-indigo-600 text-white border-indigo-600'
                            : variant.inStock
                            ? 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                            : 'bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed'
                        }`}
                      >
                        {variant.name}
                        {!variant.inStock && ' (Out of Stock)'}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Quantity
                </label>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4 text-gray-700" />
                  </button>
                  <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={e => setQuantity(Math.max(1, Number(e.target.value)))}
                    className="w-16 text-center text-lg font-medium border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    aria-label="Quantity"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4 text-gray-700" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedVariant?.inStock}
                  className={`flex-1 flex items-center justify-center space-x-2 px-6 py-3 text-base font-medium rounded-lg transition-colors ${
                    selectedVariant?.inStock
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>
                    {selectedVariant?.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </span>
                </button>
                <div className="flex space-x-2 sm:space-x-0 sm:flex-col sm:space-y-2">
                  <button className="flex-1 sm:flex-none p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Heart className="h-5 w-5 text-gray-700" />
                  </button>
                  <button className="flex-1 sm:flex-none p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Share2 className="h-5 w-5 text-gray-700" />
                  </button>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-600">Secure Payment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-gray-600">Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <RotateCcw className="h-5 w-5 text-purple-600" />
                  <span className="text-sm text-gray-600">30-Day Returns</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Product Details Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                {[
                  { key: 'description', label: 'Description' },
                  { key: 'specifications', label: 'Specifications' },
                  { key: 'reviews', label: 'Reviews' },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as any)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.key
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="py-8">
              {activeTab === 'description' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {details!.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="h-2 w-2 bg-indigo-600 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(details!.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-900">{key}</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-1">
                      {renderStars(details!.reviews.average)}
                    </div>
                    <span className="text-2xl font-bold text-gray-900">
                      {details!.reviews.average}
                    </span>
                    <span className="text-gray-600">
                      Based on {details!.reviews.count} reviews
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Customer reviews and ratings would be displayed here in a real application.
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Similar Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Similar Products</h2>
            {similarProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {similarProducts.map((similarProduct, index) => (
                  <motion.div
                    key={similarProduct.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  >
                    <ProductCard
                      product={similarProduct}
                      onAddToCart={addToCart}
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">
                No similar products available at the moment.
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </CartProvider>
  );
} 