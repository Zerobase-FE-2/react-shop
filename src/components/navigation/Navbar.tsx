import {Link, Outlet} from 'react-router-dom';
import tw from 'tailwind-styled-components';
import SearchBar from './SearchBar';
import { ShoppingBagIcon, SunIcon, MoonIcon } from '@heroicons/react/outline'

export default function Navbar() {
  const NavBar = tw.nav`
  w-full h-16 p-2 bg-gray-900 flex justify-between
  `
  const LeftBar = tw.div`
  flex items-center
  `
  const RightBar = tw.div`
  flex
  `
  const HomeBtn = tw.h1`
  inline text-white text-sm md:text-base lg:text-lg font-bold px-3 py-1
  `
  const NavBtn = tw.div`
  text-white invisible md:visible md:text-sm lg:text-base font-semibold px-3 py-2 mx-2 hover:bg-gray-700 hover:rounded-lg
  `
  return (
  <div>
    <NavBar>
      <LeftBar>
          <Link to='/'><HomeBtn>React Shop</HomeBtn></Link>
          <Link to='/fasion'><NavBtn>패션</NavBtn></Link>
          <Link to='/accessory'><NavBtn>악세서리</NavBtn></Link>
          <Link to='/digital'><NavBtn>디지털</NavBtn></Link>
          <Link to='/login'><NavBtn>로그인</NavBtn></Link>
      </LeftBar>
      <RightBar>
          <NavBtn><SunIcon className='w-7 h-7 mx-2' /></NavBtn>
          <SearchBar/>
          <Link to='/cart'><NavBtn><ShoppingBagIcon className='w-7 h-7 mx-2' /></NavBtn></Link>
      </RightBar>
    </NavBar>
    <Outlet />
  </div>
  )
}