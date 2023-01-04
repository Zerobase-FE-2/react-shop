import { useEffect } from 'react';
import { getPropsFn } from './../containers/Main/Products';
import { fetchProducts, Product } from '../reducers/productSlice';
import { useAppSelector, useAppDispatch } from './rtkHooks';

interface UseProductsProps {
  category?: 'digital' | 'accessory' | 'fashion';
}

export default function useProducts({ category }: UseProductsProps) {
  const dispatch = useAppDispatch();
  let products;
  if (category) {
    products = useAppSelector<Product[]>(getPropsFn[category]);
  } else {
    products = useAppSelector((state) => state.products);
  }

  const loading = useAppSelector((state) => state.products.loading);

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, [products, dispatch]);

  return { products, loading };
}
