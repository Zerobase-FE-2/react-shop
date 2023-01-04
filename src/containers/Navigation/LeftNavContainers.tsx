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
      <Link to="/">
        <HomeBtn>React Shop</HomeBtn>
      </Link>
      <Btn title="패션" isLink={true} link="fashion" />
      <Btn title="악세서리" isLink={true} link="accessory" />
      <Btn title="디지털" isLink={true} link="digital" />
    </LeftBar>
  );
}
