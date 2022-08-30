import { useState, useEffect } from 'react';
import {Link, Outlet} from 'react-router-dom';
import { useSelector } from 'react-redux';
import tw from 'tailwind-styled-components';
import SearchBar from './SearchBar';
import { ShoppingBagIcon, SunIcon, MoonIcon, SearchIcon } from '@heroicons/react/outline'
import localStorage from 'redux-persist/es/storage';

type item = {
  id : number;
  title : string;
  price : number;
  image : string;
  count : number;
};

export default function Navbar() {
  const [theme, setTheme] = useState('dark');
  const colorTheme = theme === 'dark' ? 'light' : 'dark';
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme)
  },[theme, colorTheme])
  const condition = useSelector((state : any) => state.cart);
  const count = condition.reduce((acc : number, cur : item) => {
    acc += cur.count;
    return acc;
  },0)
  const NavBar = tw.nav`
  w-full h-16 p-2 bg-white dark:bg-gray-900 flex justify-between shadow-lg sticky
  `
  const LeftBar = tw.div`
  flex items-center
  `
  const RightBar = tw.div`
  flex
  `
  const HomeBtn = tw.h1`
  text-black dark:text-white text-sm md:text-base lg:text-lg font-bold px-3 py-1
  `
  const NavBtn = tw.div`
  relative text-black dark:text-white hidden md:block md:text-sm lg:text-base font-semibold px-3 py-2 mx-2 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-lg
  `
  const CartCount = tw.div`
  absolute flex justify-center items-center text-white top-2 left-9 w-4 h-4 text-xs border-2 border-red-500 bg-red-500 rounded-full
  `
  return (
  <>
    <NavBar>
      <LeftBar>
          <Link to='/'><HomeBtn>React Shop</HomeBtn></Link>
          <Link to='/fasion'><NavBtn>패션</NavBtn></Link>
          <Link to='/accessory'><NavBtn>악세서리</NavBtn></Link>
          <Link to='/digital'><NavBtn>디지털</NavBtn></Link>
          <Link to='/login'><NavBtn>로그인</NavBtn></Link>
      </LeftBar>
      <RightBar>
          <NavBtn className="block" onClick={() => setTheme(colorTheme)}>{colorTheme === 'light' ? <SunIcon className='w-7 h-7 mx-2' /> : <MoonIcon className='w-7 h-7 mx-2' />}</NavBtn>
          <SearchBar />
          <NavBtn className="block md:hidden"><SearchIcon className='w-7 h-7 mx-2' onClick={() => {
            const search = document.querySelector('input');
            if(search?.classList.contains('hidden')){
              search?.classList.remove('hidden');
              search?.classList.add('block');
            } else {
              search?.classList.remove('block');
              search?.classList.add('hidden');
            }
          }} /></NavBtn>
          <Link to='/cart'>
            <NavBtn className="block">
              <ShoppingBagIcon className='w-7 h-7 mx-2' />
              <CartCount className="blcok">{count}</CartCount>
            </NavBtn>
          </Link>
      </RightBar>
    </NavBar>
    <Outlet />
  </>
  )
}