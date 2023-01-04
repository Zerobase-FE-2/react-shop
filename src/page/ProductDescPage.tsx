import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';

import { useAppSelector } from '../hooks/rtkHooks';
import { getSelectedProduct } from '../reducers/productSlice';
import Navbar from '../containers/Navigation/Navbar';
import ProductDescription from '../components/productShow/ProductDescription';
import BreadCrumb from '../components/productShow/BreadCrumb';

export default function ProductDescPage() {
  const { productId } = useParams();
  const result = useAppSelector(getSelectedProduct(Number(productId)));
  const product = result[0];

  return (
    <div>
      <Helmet>
        <title>{product.title}</title>
      </Helmet>
      <Navbar />
      <BreadCrumb category={product.category} title={product.title} />
      <ProductDescription product={product} />
    </div>
  );
}
