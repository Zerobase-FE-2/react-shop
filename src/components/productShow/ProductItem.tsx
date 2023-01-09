import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import { Product } from '../../types';

interface ProductItemProps {
  product: Product;
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <div
      key={product.id}
      className="group m-2 rounded-lg border-2 shadow-xl transition-opacity hover:opacity-60 dark:border-none"
    >
      <Link className="h-full w-full" to={`/${product.id}`}>
        <div className="group flex h-80 items-center justify-center rounded-t-lg bg-white text-center transition-all">
          <LazyLoadImage
            className="img-primary h-60 transition-all duration-300 ease-out group-hover:scale-110"
            alt={product.title}
            effect="blur"
            src={product.image}
          />
        </div>
        <div className="flex h-28 flex-col items-start justify-between overflow-auto rounded-b-lg bg-gray-200 p-4 text-black dark:bg-gray-700 dark:text-gray-400">
          <span className="overflow-hidden text-start text-lg font-semibold">
            {product.title}
          </span>
          <span className="font-semibold text-gray-500">${product.price}</span>
        </div>
      </Link>
    </div>
  );
}
