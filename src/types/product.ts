export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  currency: string;
  images: string[];
  category: string;
  isNew?: boolean;
  isCombo?: boolean;
  isExclusive?: boolean;
  slug: string;
  description?: string;
  sizes?: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}

export type ProductCategory = 'All' | 'Jordan' | 'Yeezy' | 'Nike' | 'Adidas' | 'Combos' | 'New Release';