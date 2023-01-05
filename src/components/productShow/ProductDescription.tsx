import React from 'react';
import { Product } from '../../types';

import tw from 'tailwind-styled-components';
import { Link } from 'react-router-dom';

const ProductDIV = tw.div`
  flex flex-col min-h-screen lg:flex-row px-10 pt-16 bg-white dark:bg-gray-800
  `;

interface ProductDescriptionProps {
  product: Product;
}

export default function ProductDescription({
  product,
}: ProductDescriptionProps) {
  return (
    <ProductDIV key={product.id}>
      <figure className="h-80 w-full rounded-2xl bg-white p-4 pb-4 lg:mb-0 lg:w-96">
        <img
          src={product.image}
          className="img-primary h-72 w-full"
          alt={product.title}
        />
      </figure>
      <div className="flex w-full flex-col lg:px-8">
        <h1 className="text-2xl font-bold text-black dark:text-gray-400 lg:pb-4">
          {product.title}
        </h1>
        <p className="py-4 text-black dark:text-gray-400 lg:py-0">
          {product.description}
        </p>
        <div className="py-0 lg:py-4">
          {product.rating.count}/{product.rating.count}
        </div>
        <p className="py-4 text-xl font-semibold text-black dark:text-gray-400 lg:py-0">
          ${product.price}
        </p>
        <div className="py-0 lg:py-4">
          <button
            className="btn-primary mr-4"
            onClick={
              () => {}
              // dispatch({
              //   type: 'ADD',
              //   payload: { id: product.id, count: 1 },
              // })
            }
          >
            장바구니에 담기
          </button>
          <button className="btn-primary border-2 border-solid border-black bg-inherit text-black hover:border-black hover:bg-black hover:text-white dark:border-gray-100 dark:text-white dark:hover:border-gray-500 dark:hover:bg-gray-500">
            <Link to="/cart">장바구니로 이동</Link>
          </button>
        </div>
      </div>
    </ProductDIV>
  );
}
