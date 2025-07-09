"use client";

import React, { useState, useMemo, useEffect } from 'react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
import { Search, Filter, Grid, List } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProductCard } from '@/components/ProductCard';
import { useCart } from '@/context/CartContext';
import { CartProvider } from '@/context/CartContext';
import { Product } from '@/types/product';

const categories = [
  'All',
  'Electronics',
  'Jewelery',
  "Men's Clothing",
  "Women's Clothing",
];

// Map display categories to API categories
const categoryMapping: { [key: string]: string } = {
  'Electronics': 'electronics',
  'Jewelery': 'jewelery',
  "Men's Clothing": "men's clothing",
  "Women's Clothing": "women's clothing",
};

const sortOptions = [
  { value: 'name', label: 'Name' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
];

// Fallback data in case API fails
const fallbackProducts: Product[] = [
  {
    id: '1',
    name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 10995,
    currency: 'USD',
    imageUrl: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    variants: [{ id: 'default', name: 'Default', inStock: true }],
    category: 'Electronics'
  },
  {
    id: '2',
    name: 'Mens Casual Premium Slim Fit T-Shirts',
    price: 2230,
    currency: 'USD',
    imageUrl: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    variants: [{ id: 'default', name: 'Default', inStock: true }],
    category: "Men's Clothing"
  },
  {
    id: '3',
    name: 'Mens Cotton Jacket',
    price: 5599,
    currency: 'USD',
    imageUrl: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    variants: [{ id: 'default', name: 'Default', inStock: true }],
    category: "Men's Clothing"
  },
  {
    id: '4',
    name: 'Mens Casual Slim Fit',
    price: 1599,
    currency: 'USD',
    imageUrl: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    variants: [{ id: 'default', name: 'Default', inStock: true }],
    category: "Men's Clothing"
  },
  {
    id: '5',
    name: 'John Hardy Women\'s Legends Naga Gold & Silver Dragon Station Chain Bracelet',
    price: 69500,
    currency: 'USD',
    imageUrl: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    variants: [{ id: 'default', name: 'Default', inStock: true }],
    category: 'Jewelery'
  },
  {
    id: '6',
    name: 'Solid Gold Petite Micropave',
    price: 16800,
    currency: 'USD',
    imageUrl: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    variants: [{ id: 'default', name: 'Default', inStock: true }],
    category: 'Jewelery'
  },
  {
    id: '7',
    name: 'White Gold Plated Princess',
    price: 9999,
    currency: 'USD',
    imageUrl: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    variants: [{ id: 'default', name: 'Default', inStock: true }],
    category: 'Jewelery'
  },
  {
    id: '8',
    name: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
    price: 10995,
    currency: 'USD',
    imageUrl: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
    variants: [{ id: 'default', name: 'Default', inStock: true }],
    category: 'Jewelery'
  },
  {
    id: '9',
    name: 'WD 2TB Elements Portable External Hard Drive - USB 3.0',
    price: 6400,
    currency: 'USD',
    imageUrl: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    variants: [{ id: 'default', name: 'Default', inStock: true }],
    category: 'Electronics'
  },
  {
    id: '10',
    name: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
    price: 10900,
    currency: 'USD',
    imageUrl: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
    variants: [{ id: 'default', name: 'Default', inStock: true }],
    category: 'Electronics'
  },
  {
    id: '11',
    name: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
    price: 10900,
    currency: 'USD',
    imageUrl: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
    variants: [{ id: 'default', name: 'Default', inStock: true }],
    category: 'Electronics'
  },
  {
    id: '12',
    name: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
    price: 11400,
    currency: 'USD',
    imageUrl: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
    variants: [{ id: 'default', name: 'Default', inStock: true }],
    category: 'Electronics'
  },
  {
    id: '13',
    name: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
    price: 59900,
    currency: 'USD',
    imageUrl: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
    variants: [{ id: 'default', name: 'Default', inStock: true }],
    category: 'Electronics'
  },
  {
    id: '14',
    name: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED',
    price: 99999,
    currency: 'USD',
    imageUrl: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
    variants: [{ id: 'default', name: 'Default', inStock: true }],
    category: 'Electronics'
  },
  {
    id: '15',
    name: 'BIYLACLESEN Women\'s 3-in-1 Snowboard Jacket Winter Coats',
    price: 5699,
    currency: 'USD',
    imageUrl: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
    variants: [{ id: 'default', name: 'Default', inStock: true }],
    category: "Women's Clothing"
  },
  {
    id: '16',
    name: 'Lock and Love Women\'s Removable Hooded Faux Leather Moto Biker Jacket',
    price: 2995,
    currency: 'USD',
    imageUrl: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
    variants: [{ id: 'default', name: 'Default', inStock: true }],
    category: "Women's Clothing"
  },
  {
    id: '17',
    name: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
    price: 3999,
    currency: 'USD',
    imageUrl: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
    variants: [{ id: 'default', name: 'Default', inStock: true }],
    category: "Women's Clothing"
  },
  {
    id: '18',
    name: 'MBJ Women\'s Solid Short Sleeve Boat Neck V',
    price: 905,
    currency: 'USD',
    imageUrl: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
    variants: [{ id: 'default', name: 'Default', inStock: true }],
    category: "Women's Clothing"
  },
  {
    id: '19',
    name: 'Opna Women\'s Short Sleeve Moisture',
    price: 795,
    currency: 'USD',
    imageUrl: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
    variants: [{ id: 'default', name: 'Default', inStock: true }],
    category: "Women's Clothing"
  },
  {
    id: '20',
    name: 'DANVOUY Womens T Shirt Casual Cotton Short',
    price: 1299,
    currency: 'USD',
    imageUrl: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
    variants: [{ id: 'default', name: 'Default', inStock: true }],
    category: "Women's Clothing"
  }
];

export default function Products() {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((data) => {
        // Map API data to local Product type
        const mapped: Product[] = data.map((item: any) => ({
          id: String(item.id),
          name: item.title,
          price: Math.round(Number(item.price) * 100), // convert to cents
          currency: 'USD',
          imageUrl: item.image,
          variants: [
            { id: 'default', name: 'Default', inStock: true }
          ],
          category: item.category
        }));
        setProducts(mapped);
        setLoading(false);
      })
      .catch((err) => {
        console.log('API failed, using fallback data');
        setProducts(fallbackProducts);
        setLoading(false);
      });
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (selectedCategory !== 'All') {
      const apiCategory = categoryMapping[selectedCategory];
      filtered = filtered.filter(product => product.category === apiCategory);
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [products, searchQuery, selectedCategory, sortBy]);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                All Products
              </h1>
              <p className="text-gray-600">
                Discover our complete collection of premium products
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Filters Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1 mb-8 lg:mb-0"
            >
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </h3>

                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search products..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          selectedCategory === category
                            ? 'bg-indigo-100 text-indigo-700'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sort By
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white text-gray-900"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value} className="text-gray-900">
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* View Controls */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center justify-between mb-6"
              >
                <p className="text-sm text-gray-700">
                  Showing {filteredAndSortedProducts.length} products
                </p>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md ${
                      viewMode === 'grid'
                        ? 'bg-indigo-100 text-indigo-600'
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <Grid className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md ${
                      viewMode === 'list'
                        ? 'bg-indigo-100 text-indigo-600'
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <List className="h-5 w-5" />
                  </button>
                </div>
              </motion.div>

              {/* Loading/Error State */}
              {loading && (
                <div className="text-center py-12 text-gray-500">Loading products...</div>
              )}

              {/* Products */}
              {!loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className={
                    viewMode === 'grid'
                      ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                      : 'space-y-6'
                  }
                >
                  {filteredAndSortedProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <ProductCard
                        product={product}
                        onAddToCart={addToCart}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {!loading && filteredAndSortedProducts.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-center py-12"
                >
                  <p className="text-gray-500 text-lg">
                    No products found matching your criteria.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </CartProvider>
  );
} 