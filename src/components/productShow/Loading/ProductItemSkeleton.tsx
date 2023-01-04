import React from 'react';

const product = {
  id: '1',
  image: '',
  title: 'Default Title',
  price: '000',
};

export default function ProductItemSkeleton() {
  return (
    <div className="m-2 animate-pulse rounded-lg border dark:border-none">
      <div className="flex h-80 items-center justify-center rounded-t-lg bg-gray-400"></div>
      <div className="flex h-24 flex-col items-start justify-between overflow-auto bg-gray-200 p-4 text-black dark:rounded-b-lg dark:bg-gray-700 dark:text-gray-400">
        <span className="bg-gray-400 text-start font-semibold text-gray-400">
          {product.title}
        </span>
        <span className="bg-gray-400 text-gray-400">${product.price}</span>
      </div>
    </div>
  );
}
