import React from 'react';
import { Outlet } from 'react-router-dom';
import tw from 'tailwind-styled-components';

import LeftNavContainers from './LeftNavContainers';
import RightNavContainers from './RightNavContainers';

const NavBar = tw.nav`
  w-full h-16 p-2 fixed t-0 r-0 bg-white dark:bg-gray-900 flex justify-between shadow-lg sticky z-40
  `;

export default function Navbar() {
  return (
    <>
      <NavBar>
        <LeftNavContainers />
        <RightNavContainers />
      </NavBar>
      <Outlet />
    </>
  );
}
