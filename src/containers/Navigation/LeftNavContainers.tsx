import React from 'react';
import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

import Btn from '../../components/navigation/Btn';

const LeftBar = tw.div`
  flex items-center
  `;

const HomeBtn = tw.h1`
  text-black dark:text-white text-xl font-bold px-3 py-1
  `;

export default function LeftBtns() {
  return (
    <LeftBar>
      <label
        htmlFor="my-drawer"
        className="btn btn-ghost drawer-button flex items-center justify-center lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
          />
        </svg>
      </label>
      <Link to="/">
        <HomeBtn>React Shop</HomeBtn>
      </Link>
      <Btn title="패션" isLink={true} link="fashion" />
      <Btn title="악세서리" isLink={true} link="accessory" />
      <Btn title="디지털" isLink={true} link="digital" />
    </LeftBar>
  );
}
