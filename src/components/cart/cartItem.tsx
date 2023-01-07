import React from 'react';
import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { useAppDispatch } from '../../hooks/rtkHooks';
import { addProduct, removeProduct } from '../../reducers/cartSlice';

const ItemWrapper = tw.article`
flex flex-col lg:flex-row mt-4
`;
const ItemInfo = tw.div`
flex flex-col justify-evenly pb-12 lg:px-12
`;

export default function CartItem({ product, cnt }) {
  const dispatch = useAppDispatch();

  return (
    <ItemWrapper key={product.id}>
      <Link to={`/${product.id}`}>
        <img className="img-primary" src={product.image} alt={product.title} />
      </Link>
      <ItemInfo>
        <Link to={`/${product.id}`}>
          <h2 className="text-xl font-semibold text-black underline-offset-2 hover:underline dark:text-gray-400">
            {product.title}
          </h2>
        </Link>
        <p className="my-4 text-3xl text-black dark:text-gray-400">
          ${product.price}
        </p>
        <div>
          <button
            className="h-12 rounded-l-lg bg-violet-700 px-4 font-semibold text-white hover:bg-violet-800"
            onClick={() => {
              dispatch(removeProduct(product));
            }}
          >
            -
          </button>
          <span className="mx-4 text-black dark:text-gray-400">{cnt}</span>
          <button
            className="h-12 rounded-r-lg bg-violet-700 px-4 font-semibold text-white hover:bg-violet-800"
            onClick={() => {
              dispatch(addProduct(product));
            }}
          >
            +
          </button>
        </div>
      </ItemInfo>
    </ItemWrapper>
  );
}
