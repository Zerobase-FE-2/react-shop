import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartEmpty from './CartEmpty';
import PopUp from '../components/PopUp';
import tw from 'tailwind-styled-components';

import BreadCrumb from '../components/productShow/BreadCrumb';
import { useAppDispatch, useAppSelector } from '../hooks/rtkHooks';
import Layout from '../containers/Layout/LayoutContainer';

const CartWrap = tw.section`
flex flex-col w-full min-h-screen bg-white dark:bg-gray-800 box-border p-4 lg:flex-row justify-between
`;
const CartItems = tw.section`
flex flex-col
`;
const CartItem = tw.article`
flex flex-col lg:flex-row mt-4
`;
const ItemInfo = tw.div`
flex flex-col justify-evenly pb-12 lg:px-12
`;

export default function Cart() {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.cart);
  console.log('cart', products);

  const [popUp, setPopUp] = useState(false);

  return (
    <Layout>
      <BreadCrumb category="cart" />
      <CartWrap>
        <CartItems>
          {products &&
            products.map((item) => (
              <CartItem key={item.id}>
                <Link to={`/${item.id}`}>
                  <img
                    className="img-primary"
                    src={item.image}
                    alt={item.title}
                  />
                </Link>
                <ItemInfo>
                  <Link to={`/${item.id}`}>
                    <h2 className="text-xl font-semibold text-black underline-offset-2 hover:underline dark:text-gray-400">
                      {item.title}
                    </h2>
                  </Link>
                  <p className="my-4 text-3xl text-black dark:text-gray-400">
                    ${' '}
                    {/* {(
                      item.price *
                      products.find((product: product) => product.id === item.id)
                        .count
                    ).toFixed(2)} */}
                  </p>
                  <div>
                    <button className="h-12 rounded-l-lg bg-violet-700 px-4 font-semibold text-white hover:bg-violet-800">
                      -
                    </button>
                    <span className="mx-4 text-black dark:text-gray-400">
                      {/* {
                        cart.find((product: product) => product.id === item.id)
                          .count
                      } */}
                    </span>
                    <button
                      className="h-12 rounded-r-lg bg-violet-700 px-4 font-semibold text-white hover:bg-violet-800"
                      onClick={() => {
                        // dispatch({
                        //   type: 'ADD',
                        //   payload: { id: item.id, count: item.count },
                        // });
                      }}
                    >
                      +
                    </button>
                  </div>
                </ItemInfo>
              </CartItem>
            ))}
        </CartItems>
        <div className="mt-10 flex h-fit w-72 items-center">
          <label
            className="text-center text-2xl text-black dark:text-gray-400 lg:text-xl"
            htmlFor="buyBtn"
          >
            {/* 총 : ${Number(calculateTotalPrice().toFixed(2))}{' '} */}
          </label>
          <button
            className="btn-primary ml-5"
            id="buyBtn"
            onClick={() => {
              setPopUp(!popUp);
            }}
          >
            {' '}
            구매하기{' '}
          </button>
        </div>
        {popUp && <PopUp state={popUp} func={setPopUp} />}
      </CartWrap>
    </Layout>
  );
}
