import { Product } from '../types/product';

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Sony WH-1000XM5 Wireless Headphones',
    price: 34999, // $349.99
    currency: 'USD',
    imageUrl: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=800',
    variants: [
      { id: 'v1-black', name: 'Black', inStock: true },
      { id: 'v1-silver', name: 'Silver', inStock: true },
    ],
  },
  {
    id: '2',
    name: 'Apple MacBook Pro 14" (M2)',
    price: 199999, // $1999.99
    currency: 'USD',
    imageUrl: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    variants: [
      { id: 'v2-512', name: '512GB SSD', inStock: true },
      { id: 'v2-1tb', name: '1TB SSD', inStock: true },
    ],
  },
  {
    id: '3',
    name: 'Samsung Galaxy S23 Ultra',
    price: 119999, // $1199.99
    currency: 'USD',
    imageUrl: 'https://images.pexels.com/photos/6078127/pexels-photo-6078127.jpeg?auto=compress&cs=tinysrgb&w=800',
    variants: [
      { id: 'v3-black', name: 'Phantom Black', inStock: true },
      { id: 'v3-green', name: 'Green', inStock: false },
      { id: 'v3-cream', name: 'Cream', inStock: true },
    ],
  },
  {
    id: '4',
    name: 'Apple iPad Pro 12.9" (2022)',
    price: 109999, // $1099.99
    currency: 'USD',
    imageUrl: 'https://images.pexels.com/photos/5082560/pexels-photo-5082560.jpeg?auto=compress&cs=tinysrgb&w=800',
    variants: [
      { id: 'v4-128', name: '128GB', inStock: true },
      { id: 'v4-256', name: '256GB', inStock: true },
      { id: 'v4-512', name: '512GB', inStock: false },
    ],
  },
  {
    id: '5',
    name: 'Canon EOS R6 Mirrorless Camera',
    price: 249999, // $2499.99
    currency: 'USD',
    imageUrl: 'https://images.pexels.com/photos/51383/camera-lens-dslr-slr-51383.jpeg?auto=compress&cs=tinysrgb&w=800',
    variants: [
      { id: 'v5-body', name: 'Body Only', inStock: true },
      { id: 'v5-kit', name: 'With 24-105mm Lens', inStock: true },
    ],
  },
  {
    id: '6',
    name: 'Bose SoundLink Revolve+ II Bluetooth Speaker',
    price: 32999, // $329.99
    currency: 'USD',
    imageUrl: 'https://images.pexels.com/photos/374703/pexels-photo-374703.jpeg?auto=compress&cs=tinysrgb&w=800',
    variants: [
      { id: 'v6-black', name: 'Triple Black', inStock: true },
      { id: 'v6-silver', name: 'Luxe Silver', inStock: false },
    ],
  },
  {
    id: '7',
    name: 'Dell UltraSharp 27" 4K Monitor',
    price: 59999, // $599.99
    currency: 'USD',
    imageUrl: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    variants: [
      { id: 'v7-standard', name: 'Standard', inStock: true },
      { id: 'v7-premium', name: 'Premium', inStock: true },
    ],
  },
  {
    id: '8',
    name: 'Apple Watch Series 8',
    price: 39999, // $399.99
    currency: 'USD',
    imageUrl: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=800',
    variants: [
      { id: 'v8-41mm', name: '41mm', inStock: true },
      { id: 'v8-45mm', name: '45mm', inStock: true },
    ],
  },
  {
    id: '9',
    name: 'Sony PlayStation 5 Console',
    price: 49999, // $499.99
    currency: 'USD',
    imageUrl: 'https://images.pexels.com/photos/8452552/pexels-photo-8452552.jpeg?auto=compress&cs=tinysrgb&w=800',
    variants: [
      { id: 'v9-standard', name: 'Standard', inStock: true },
      { id: 'v9-digital', name: 'Digital Edition', inStock: false },
    ],
  },
  {
    id: '10',
    name: 'GoPro HERO11 Black Action Camera',
    price: 49999, // $499.99
    currency: 'USD',
    imageUrl: 'https://images.pexels.com/photos/442573/pexels-photo-442573.jpeg?auto=compress&cs=tinysrgb&w=800',
    variants: [
      { id: 'v10-standard', name: 'Standard', inStock: true },
      { id: 'v10-bundle', name: 'Adventure Bundle', inStock: true },
    ],
  },
  {
    id: '11',
    name: 'JBL Tune 230NC TWS Earbuds',
    price: 7999, // $79.99
    currency: 'USD',
    imageUrl: 'https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg?auto=compress&cs=tinysrgb&w=800',
    variants: [
      { id: 'v11-black', name: 'Black', inStock: true },
      { id: 'v11-white', name: 'White', inStock: true },
    ],
  },
  {
    id: '12',
    name: 'Amazon Kindle Paperwhite (11th Gen)',
    price: 13999, // $139.99
    currency: 'USD',
    imageUrl: 'https://images.pexels.com/photos/507704/pexels-photo-507704.jpeg?auto=compress&cs=tinysrgb&w=800',
    variants: [
      { id: 'v12-8gb', name: '8GB', inStock: true },
      { id: 'v12-16gb', name: '16GB', inStock: true },
    ],
  },
];