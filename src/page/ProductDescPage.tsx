import React from 'react';

import { useParams } from 'react-router';
import { useAppSelector } from '../hooks/rtkHooks';
import { getSelectedProduct } from '../reducers/productSlice';

import ProductDescription from '../components/productShow/ProductDescription';
import BreadCrumb from '../components/productShow/BreadCrumb';
import Layout from '../containers/Layout/LayoutContainer';

export default function ProductDescPage() {
  const { productId } = useParams();
  const result = useAppSelector(getSelectedProduct(Number(productId)));
  const product = result[0];

  return (
    <Layout seoTitle={product.title}>
      <BreadCrumb category={product.category} title={product.title} />
      <ProductDescription product={product} />
    </Layout>
  );
}
