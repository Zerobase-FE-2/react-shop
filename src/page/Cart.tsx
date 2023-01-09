import React, { useEffect } from 'react';
import { useState } from 'react';
import PopUp from '../components/PopUp';
import tw from 'tailwind-styled-components';

import BreadCrumb from '../components/productShow/BreadCrumb';
import { useAppDispatch, useAppSelector } from '../hooks/rtkHooks';
import Layout from '../containers/Layout/LayoutContainer';
import CartItem from '../components/cart/cartItem';
import CartEmpty from './CartEmpty';
import { getTotalPrice, removeCart } from '../reducers/cartSlice';

const CartWrap = tw.section`
flex flex-col w-full min-h-screen bg-white dark:bg-gray-800 box-border p-4 lg:flex-row justify-between
`;
const CartItems = tw.section`
flex flex-col
`;

export default function Cart() {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.cart);
  const totalPrice = useAppSelector(getTotalPrice);
  const [popUp, setPopUp] = useState(false);

  const handlePopup = () => {
    setPopUp(!popUp);
  };

  useEffect(() => {
    products?.forEach((product) => {
      if (product.cnt <= 0) dispatch(removeCart(product));
    });
  }, [products]);

  return (
    <Layout>
      <BreadCrumb category="cart" />
      <CartWrap>
        {products?.length ? (
          <>
            <CartItems>
              {products.map((product) => (
                <CartItem
                  key={product.id}
                  product={product.product}
                  cnt={product.cnt}
                />
              ))}
            </CartItems>
            <div className="mt-10 flex h-fit w-72 items-center">
              <label
                className="text-center text-2xl text-black dark:text-gray-400 lg:text-xl"
                htmlFor="buyBtn"
              >
                총 : ${totalPrice}
              </label>
              <button
                className="btn-primary ml-5"
                id="buyBtn"
                onClick={() => {
                  setPopUp(!popUp);
                }}
              >
                구매하기
              </button>
            </div>
          </>
        ) : (
          <CartEmpty />
        )}

        {popUp && <PopUp handlePopup={handlePopup} />}
      </CartWrap>
    </Layout>
  );
}
