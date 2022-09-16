import React from 'react'
import Index from './components/Index'
import ProductsTable from './components/productShow/ProductsTable'
import tw from 'tailwind-styled-components'
import Skel_Item from './Skel_Item';

export default function Skel(props:any) {
  const {path} = props;
  console.log(path);

  const NavBar = tw.nav`
  w-full h-16 p-2 bg-gray-500 dark:bg-gray-900 flex justify-between shadow-lg sticky z-40
  `

  if(path == "/"){
    const Title = tw.h1`
    text-3xl font-bold p-6 text-black dark:text-white
    `
    const SliderSection = tw.section`
    block box-content w-full h-96 bg-black
    `;
    
    return (
        <div id="container" className='animate-pulse w-full'>
          <NavBar />
          <SliderSection />
          <div className='text-center bg-white dark:bg-gray-800'>
              <Title>패션</Title>
              <Skel_Item skelForm={path}/>
            <br />
              <Title>악세서리</Title>
              <Skel_Item skelForm={path}/>
            <br />
              <Title>디지털</Title>
              <Skel_Item skelForm={path}/>
            <br />
          </div>
        </div>
    )
  } else if(path == "/fasion" || path == "/accessory" || path == "/digital"){
    const Title = tw.h1`
    text-3xl font-bold pb-6 text-center text-black dark:text-white
    `
    let title = "";
    if(path == "/fasion"){
      title = "패션";
    }else if(path == "/accessory"){
      title = "악세서리";
    }else if(path == "/digital"){
      title = "디지털";
    }else title ="ETC";

    return (
      <div id="container" className='animate-pulse w-full'>
        <NavBar />
        <div className="block w-40 h-6 m-4 bg-slate-200 rounded"></div>
        <Title>{title}</Title>
        <Skel_Item skelForm={path}/>
        <Skel_Item skelForm={path}/>
      </div>
    )
  } else if(Number(parseInt(path.split('').splice(1).join('')))){
    return (
      <div id="container" className='animate-pulse w-full'>
        <NavBar />
        <div className="block w-1/2 h-6 m-4 bg-slate-200 rounded"></div>
        <Skel_Item skelForm={path}/>
      </div>
    )
  } else if(path == "/cart"){
    return (
      <div id="container" className='animate-pulse w-full'>
        <NavBar />
        <div className="block w-40 h-6 m-4 bg-slate-200 rounded"></div>
        <Skel_Item skelForm={path}/>
      </div>
    )
  } else if(path == "/login"){
    return (
      <div id="container" className='animate-pulse w-full'>
        <NavBar />
      </div>
    )
  }
  else return <div><Skel_Item cartonly={path}/></div>;
}