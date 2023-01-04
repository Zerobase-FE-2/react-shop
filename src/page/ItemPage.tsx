import React, { useEffect } from 'react';
import ProductsTable from '../components/productShow/ProductsTable';
import tw from 'tailwind-styled-components';
import BreadCrumb from '../components/navigation/BreadCrumb';
import { useAppDispatch, useAppSelector } from '../hooks/rtkHooks';
import { fetchProducts, Product } from '../reducers/productSlice';
import { getPropsFn } from '../containers/Main/Products';
import SEOTag from '../components/SEOTag';
import Navbar from '../containers/Navigation/Navbar';
import useProducts from '../hooks/useProducts';

interface ItemPageProps {
  category: 'digital' | 'accessory' | 'fashion';
}

const getTitle = {
  digital: '디지털',
  accessory: '악세서리',
  fashion: '패션',
};

const Title = tw.h1`
  text-3xl font-bold pb-6 text-center text-black dark:text-white
  `;

export default function ItemPage({ category }: ItemPageProps) {
  const { products, loading } = useProducts(category);

  return (
    <div className="h-[100vh] bg-white dark:bg-gray-800">
      <SEOTag title={category} />
      <Navbar />
      <div className="p-4">{/* <BreadCrumb /> */}</div>
      <Title>{getTitle[category]}</Title>
      <div>
        <ProductsTable products={products} loading={loading} />
      </div>
    </div>
  );
}
