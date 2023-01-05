import React from 'react';
import tw from 'tailwind-styled-components';
import {
  ShoppingBagIcon,
  SunIcon,
  MoonIcon,
  SearchIcon,
} from '@heroicons/react/outline';

import Btn from '../../components/navigation/Btn';

const RightBar = tw.div`
flex
`;

const CartCount = tw.div`
absolute flex justify-center items-center text-white top-2 left-9 w-4 h-4 text-xs border-2 border-red-500 bg-red-500 rounded-full
`;

export default function RightBtns() {
  return (
    <RightBar>
      <Btn>
        {'light' === 'light' ? (
          <SunIcon className="mx-2 h-7 w-7" />
        ) : (
          <MoonIcon className="mx-2 h-7 w-7" />
        )}
      </Btn>
      {/* <SearchBar /> */}
      <Btn>
        <SearchIcon
          className="mx-2 h-7 w-7"
          onClick={() => {
            const search = document.querySelector('input');
            if (search?.classList.contains('hidden')) {
              search?.classList.remove('hidden');
              search?.classList.add('block');
            } else {
              search?.classList.remove('block');
              search?.classList.add('hidden');
            }
          }}
        />
      </Btn>
      <Btn isLink={true} link="cart">
        <ShoppingBagIcon className="mx-2 h-7 w-7" />
        <CartCount>{1}</CartCount>
      </Btn>
      <Btn title="로그인" isLink={true} link="login" />
    </RightBar>
  );
}
