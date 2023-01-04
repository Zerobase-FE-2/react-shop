import React from 'react';
import ProductsTable from '../../components/productShow/ProductsTable';
import {
  getAccesoryProducts,
  getFashionProducts,
  getElectronicsProducts,
} from '../../reducers/productSlice';
import tw from 'tailwind-styled-components';
import useProducts from '../../hooks/useProducts';

interface ProductsProps {
  title: string;
  category: 'fashion' | 'accessory' | 'digital';
}

const Title = tw.h1`
  text-3xl font-bold p-6 text-black dark:text-white
  `;

export const getPropsFn = {
  fashion: getFashionProducts,
  digital: getElectronicsProducts,
  accessory: getAccesoryProducts,
};

export default function Products({ title, category }: ProductsProps) {
  const { products, loading } = useProducts({ category });

  return (
    <>
      <Title>{title}</Title>
      <div>
        <ProductsTable products={products.slice(0, 8)} loading={loading} />
      </div>
    </>
  );
}
