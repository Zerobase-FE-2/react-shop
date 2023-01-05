export type Category = 'fashion' | 'accessory' | 'digital';

export type Title = '패션' | '악세서리' | '디지털';

export interface Product {
  category: Category;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rating: number; count: number };
  title: Title;
}
