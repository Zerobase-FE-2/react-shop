import React from 'react';
import { Product } from '../../types';
import ProductItemSkeleton from './Loading/ProductItemSkeleton';
import ProductItem from './ProductItem';

interface ProductsTableProps {
  products: Product[];
  loading?: boolean;
}

export default function ProductsTable({
  products,
  loading = false,
}: ProductsTableProps) {
  return (
    <>
      {loading ? (
        <div className={`grid gap-10 pb-20 lg:grid-cols-2 xl:grid-cols-4`}>
          {Array.from({ length: 8 }, (_, idx) => idx).map((idx) => (
            <ProductItemSkeleton key={idx} />
          ))}
        </div>
      ) : (
        <div className={`grid gap-10 pb-20 lg:grid-cols-2 xl:grid-cols-4`}>
          {products.map((product: Product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      )}
    </>
  );
}
