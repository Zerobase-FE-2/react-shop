import { Outlet } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import LeftNavContainers from './LeftNavContainers';
import RightNavContainers from './RightNavContainers';

export default function Navbar() {
  const NavBar = tw.nav`
  w-full h-16 p-2 bg-white dark:bg-gray-900 flex justify-between shadow-lg sticky z-40
  `;

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
