import React from 'react';
import ProductsTable from '../components/productShow/ProductsTable';
import tw from 'tailwind-styled-components';

import useProducts from '../hooks/useProducts';

import Layout from '../containers/Layout/LayoutContainer';
import BreadCrumb from '../components/productShow/BreadCrumb';
import { Category } from '../types';

interface ItemPageProps {
  category: Category;
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
  const { products, loading } = useProducts({ category });

  return (
    <Layout>
      <BreadCrumb category={category} />
      <Title>{getTitle[category]}</Title>
      <div>
        <ProductsTable products={products} loading={loading} />
      </div>
    </Layout>
  );
}
