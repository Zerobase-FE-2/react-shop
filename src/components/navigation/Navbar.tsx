import { useState, useEffect } from 'react';
import {Link, Outlet} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import tw from 'tailwind-styled-components';
import SearchBar from './SearchBar';
import Menu from './Menu';
import { ShoppingBagIcon, SunIcon, MoonIcon, SearchIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

type item = {
  id : number;
  title : string;
  price : number;
  image : string;
  count : number;
};

export default function Navbar() {
  const initialMode = useSelector((state : any) => state.mode) 
  const [theme, setTheme] = useState(initialMode || 'light');
  const [menu, setMenu] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  },[theme, colorTheme]);

  useEffect(() => {
    const handleWidth = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWidth);
    if(width > 768){
      setMenu(false);
      setClicked(false);
    };
    return(() => {
      window.removeEventListener('resize', handleWidth);
    });
  },[width]);

  const condition : item[] = useSelector((state : any) => state.cart);
  const dispatch = useDispatch();
  const count = condition.reduce((acc : number, cur : item) => {
    acc += cur.count;
    return acc;
  },0)
  const NavBar = tw.nav`
  w-full h-16 p-2 bg-white dark:bg-gray-900 flex justify-between shadow-lg sticky z-40
  `
  const LeftBar = tw.div`
  flex items-center
  `
  const RightBar = tw.div`
  flex
  `
  const HomeBtn = tw.h1`
  text-black dark:text-white text-lg md:text-base lg:text-xl font-bold px-3 py-1
  `
  const NavBtn = tw.div`
  relative text-black dark:text-white hidden md:block md:text-sm lg:text-base font-semibold p-2 mx-2 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-lg
  `
  const MenuBtn = tw.div`
  relative text-black dark:text-white block md:hidden md:text-sm lg:text-base font-semibold px-1 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-lg
  `
  const CartCount = tw.div`
  absolute flex justify-center items-center text-white top-2 left-9 w-4 h-4 text-xs border-2 border-red-500 bg-red-500 rounded-full
  `
  return (
  <>
    <NavBar>
      {menu && <Menu menu={menu} clicked={clicked} setMenu={setMenu} setClicked={setClicked} />}
      <LeftBar>
          <MenuBtn>
            {
              clicked === false 
                ? <MenuIcon className='w-7 h-7 mx-2' onClick={() => {
                  setMenu(!menu);
                  setClicked(!clicked);
                }} />
                : <XIcon className='w-7 h-7 mx-2' onClick={() => {
                  setMenu(!menu);
                  setClicked(!clicked);
                }} />
            }
          </MenuBtn>
          <Link to='/'><HomeBtn>React Shop</HomeBtn></Link>
          <Link to='/fasion'><NavBtn>패션</NavBtn></Link>
          <Link to='/accessory'><NavBtn>악세서리</NavBtn></Link>
          <Link to='/digital'><NavBtn>디지털</NavBtn></Link>
      </LeftBar>
      <RightBar onClick={() => {
        setClicked(false);
        setMenu(false);
      }}>
          <NavBtn className="block" onClick={() => {
            setTheme(colorTheme);
            dispatch({type : "CHANGE", payload : colorTheme});
            }}>{colorTheme === 'light' ? <SunIcon className='w-7 h-7 mx-2' /> : <MoonIcon className='w-7 h-7 mx-2' />}</NavBtn>
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
          <Link to='/login'>
            <div className='relative text-black dark:text-white md:text-sm lg:text-base font-semibold p-2 mx-2 mt-1 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-lg'>
              로그인
            </div>
          </Link>
      </RightBar>
    </NavBar>
    <Outlet />
  </>
  )
}