import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../reducers/productSlice';

interface ProductItemProps {
  product: Product;
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <div
      key={product.id}
      className="group m-2 rounded-lg border-2 shadow-md transition-opacity hover:opacity-60 dark:border-none"
    >
      <Link to={`/${product.id}`}>
        <figure className="hover: flex h-80 items-center justify-center rounded-t-lg bg-white">
          <img
            src={product.image}
            className="img-primary transition group-hover:scale-110"
            alt={product.title}
          />
        </figure>
        <div className="flex h-28 flex-col items-start justify-between overflow-auto bg-gray-200 p-4 text-black dark:rounded-b-lg dark:bg-gray-700 dark:text-gray-400">
          <span className="overflow-hidden text-start text-lg font-semibold">
            {product.title}
          </span>
          <span className="font-semibold text-gray-500">${product.price}</span>
        </div>
      </Link>
    </div>
  );
}
