import React from 'react';
import { useAppDispatch } from '../hooks/rtkHooks';
import { useEffect } from 'react';

import { fetchProducts } from '../reducers/productSlice';

import Index from '../components/Index';
import Products from '../containers/Main/Products';
import Layout from '../containers/Layout/LayoutContainer';
import { Category, Title } from '../types';

export interface ProductsAttributes {
  title: Title;
  category: Category;
}

const categories: ProductsAttributes[] = [
  { title: '패션', category: 'fashion' },
  { title: '악세서리', category: 'accessory' },
  { title: '디지털', category: 'digital' },
];

export default function MainPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Layout>
      <div id="container" className="w-full">
        <Index />
        <div className="px-12">
          {categories.map((category, idx) => (
            <Products
              key={idx}
              title={category.title}
              category={category.category}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
