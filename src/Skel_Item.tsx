import React from 'react'
import tw from 'tailwind-styled-components'

export default function Skel_Item(props:any) {
  const {skelForm} = props;
  console.log(skelForm);
  const sample = [1, 2, 3, 4];
  const Product = tw.div`
  flex flex-col min-h-screen lg:flex-row px-10 pt-16 bg-white dark:bg-gray-800
  `
  const Cart= tw.section`
  flex flex-col w-full min-h-screen bg-white dark:bg-gray-800 box-border p-4 lg:flex-row justify-between
  `
  const CartItems = tw.section`
  flex flex-col
  `;
  const CartItem = tw.article`
  flex flex-col lg:flex-row
  `;
  const ItemInfo = tw.div`
  flex flex-col justify-evenly ml-4 pb-1 lg:px-12
  `

  if(Number(parseInt(skelForm.split('').splice(1).join('')))){
    return(
      <Product>
        <figure className='w-full h-80 lg:w-96 bg-slate-200 p-4 pb-4 lg:mb-0 rounded-2xl'>
        </figure>
        <div className='w-full lg:px-8 flex flex-col'>
          <div className='lg:pb-4 block w-full h-6 mt-1 bg-slate-200 rounded'></div>
          <div className='block w-full h-4 py-4 mt-6 lg:py-0 bg-slate-200 rounded'></div>
          <div className='block w-full h-4 py-4 mt-2 lg:py-0 bg-slate-200 rounded'></div>
          <div className='block w-2/3 h-4 py-4 mt-2 lg:py-0 bg-slate-200 rounded'></div>
          <div className='block w-20 h-4 py-4 mt-6 lg:py-0 bg-slate-200 rounded'></div>
          <div className='block w-20 h-4 py-4 mt-6 lg:py-0 bg-slate-200 rounded'></div>
          <div className='py-0 lg:py-4 h-20'>
            <div className='inline-block w-1/6 h-full py-4 lg:py-0 bg-slate-200 rounded-lg'></div>
            <div className='inline-block w-1/6 h-full py-4 ml-4 lg:py-0 bg-slate-200 rounded-lg'></div>
          </div>
        </div>
      </Product>
    )
  } else if(skelForm == "/cart"){
    return(
      <Cart>
        <CartItems>
          <CartItem key={1}>
            <div className="w-52 h-52 bg-slate-200 p-4 lg:mb-0 rounded-2xl"/>
            <ItemInfo>
                <div className="h-6 mt-0 bg-slate-200 rounded"></div>
                <div className="block w-20 h-8 py-4 mt-2 mb-1/2 lg:py-0 bg-slate-200 rounded"></div>
                <div>
                    <button className="bg-slate-200 rounded-l-lg px-4 h-12 "> </button>
                    <span className="mx-4 text-black dark:text-gray-400"> </span>
                    <button className="bg-slate-200 rounded-r-lg px-4 h-12 "> </button>
                </div>
            </ItemInfo>
          </CartItem>
        </CartItems>
      </Cart>
    )
  } else return (
    <div className='flex flex-wrap justify-center'>
      {sample.map((i) => (
        <div key={i} className="w-full md:w-1/3 lg:w-1/5 m-2 shrink-0 border dark:border-none rounded-lg">
          {/* <div className="animate-pulse"> */}
            <div className="h-80 bg-slate-400 flex justify-center items-center rounded-t-lg"></div>
            <div className="h-36 w-full dark:text-gray-400 bg-gray-200 dark:bg-gray-700 flex flex-col rounded-b-lg">
              <div className="h-full w-full">
                <div className="block h-4 m-4 bg-slate-400 rounded"></div>
                <div className="block w-2/3 h-4 m-4 mt-0 bg-slate-400 rounded"></div>
                <div className="block w-16 h-4 mx-4 mt-10 bg-slate-400 rounded"></div>
              </div>
            </div>
          {/* </div> */}
        </div>
      ))}
    </div>
  )

}

