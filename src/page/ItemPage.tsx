import React from 'react';
import ProductsTable from '../components/productShow/ProductsTable';
import tw from 'tailwind-styled-components';
import BreadCrumb from '../components/navigation/BreadCrumb';
import { useAppSelector } from '../hooks/rtkHooks';
import { getFashionProducts, Product } from '../reducers/productSlice';
import { getPropsFn } from '../containers/Main/Products';

const Title = tw.h1`
  text-3xl font-bold pb-6 text-center text-black dark:text-white
  `;
interface ItemPageProps {
  category: 'digital' | 'accessory' | 'fashion';
}

const getTitle = {
  digital: '디지털',
  accessory: '악세서리',
  fation: '패션',
};

export default function ItemPage({ category }: ItemPageProps) {
  const products = useAppSelector<Product[]>(getPropsFn[category]);

  return (
    <div className="min-h-full bg-white dark:bg-gray-800">
      <div className="p-4">
        <BreadCrumb />
      </div>
      <Title>{getTitle[category]}</Title>
      <div>
        <ProductsTable products={products} />
      </div>
    </div>
  );
}
