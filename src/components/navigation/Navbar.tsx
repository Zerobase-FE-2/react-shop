import {Link, Outlet} from 'react-router-dom'
import tw from 'tailwind-styled-components'
import SearchBar from './SearchBar';

export default function Navbar() {
  const NavBar = tw.nav`
  w-full h-16 p-2 bg-gray-900 flex
  `
  const LeftBar = tw.div`
  w-3/5 flex items-center
  `
  const RightBar = tw.div`
  w-2/5 flex relative
  `
  const HomeBtn = tw.h1`
  inline text-white text-sm md:text-base lg:text-lg font-bold px-3 py-1
  `
  const NavBtn = tw.span`
  text-white invisible sm:visible sm:text-xs md:text-sm lg:text-base font-semibold px-3 py-2 mx-2 hover:bg-gray-700 hover:rounded-lg
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
          <NavBtn>테마</NavBtn>
          <div className='w-48 overflow-auto'>
            <SearchBar/>
          </div>
          <Link to='/cart'><NavBtn>장바구니</NavBtn></Link>
      </RightBar>
    </NavBar>
    <Outlet />
  </div>
  )
}