import ProductsTable from '../../components/productShow/ProductsTable';

import {
  getAccesoryProducts,
  getFashionProducts,
  getElectronicsProducts,
} from '../../reducers/productSlice';
import tw from 'tailwind-styled-components';
import { useAppSelector } from '../../hooks/rtkHooks';
import { useEffect } from 'react';

interface ProductsProps {
  title: string;
  category: 'fashion' | 'accessory' | 'digital';
}

const Title = tw.h1`
  text-3xl font-bold p-6 text-black dark:text-white
  `;
const getPropsFn = {
  fashion: getFashionProducts,
  digital: getElectronicsProducts,
  accessory: getAccesoryProducts,
};

export default function Products({ title, category }: ProductsProps) {
  const products = useAppSelector(getPropsFn[category]);
  const loading = useAppSelector((state) => state.products.loading);

  return (
    <>
      <Title>{title}</Title>
      <div>
        <ProductsTable products={products.slice(0, 8)} loading={loading} />
      </div>
    </>
  );
}
