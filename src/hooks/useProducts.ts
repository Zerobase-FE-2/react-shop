import { useEffect } from 'react';
import { getPropsFn } from './../containers/Main/Products';
import { fetchProducts } from '../reducers/productSlice';
import { useAppSelector, useAppDispatch } from './rtkHooks';
import { Category, Product } from '../types';

interface UseProductsProps {
  category?: Category;
}

export default function useProducts({ category }: UseProductsProps) {
  let products;
  if (category) {
    products = useAppSelector<Product[]>(getPropsFn[category]);
  } else {
    products = useAppSelector((state) => state.products);
  }

  const loading = useAppSelector((state) => state.products.loading);

  return { products, loading };
}
