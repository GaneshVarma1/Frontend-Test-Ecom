export interface Variant {
  id: string;
  name: string;
  inStock: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: number; // in smallest currency unit (cents)
  currency: string;
  imageUrl: string;
  variants: Variant[];
  category?: string; // Added for API-based category filtering
}

export interface CartItem {
  product: Product;
  variant: Variant;
  quantity: number;
}