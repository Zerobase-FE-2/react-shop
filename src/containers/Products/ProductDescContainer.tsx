import React from 'react';
import ProductDescription from '../../components/productShow/ProductDescription';
import { useAppDispatch } from '../../hooks/rtkHooks';
import { addCart } from '../../reducers/cartSlice';
import { Product } from '../../types';

interface ProductDescContainerProps {
  product: Product;
}

export default function ProductDescContainer({
  product,
}: ProductDescContainerProps) {
  const dispatch = useAppDispatch();

  return (
    <ProductDescription
      product={product}
      handleClick={() => dispatch(addCart({ product }))}
    />
  );
}
