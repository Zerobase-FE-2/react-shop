import React from 'react'
import {Link, Outlet} from 'react-router-dom';
import axios from 'axios'
import useSWR from 'swr'
import ProductsTable from './ProductsTable';

export default function FashionPage() {
  // async function fetcher(url:string){
  //   const result = await axios.get(url)
    
  //   // console.log(result.data);
  //   return result.data;
  // }
  // const {data: docs, error} = useSWR('post', () => fetcher('https://fakestoreapi.com/products'));

  // console.log(docs);
  // const targetProduct: any[] = docs.filter((p:any) => p.category === "men's clothing");
  // const filteredProducts = targetProduct;


  // if(error) return <div>failed to load</div>;
  // if(!docs) return <div>Loading...</div>;
  return (
    <div style={{display: "block", width:"100%", height:"100%"}}>
      <div>홈 {">"} 패션</div>
      <h1 style={{textAlign:"center"}}>패션</h1>
      <ProductsTable category={"fasion"}/>
    </div>
  )
}
//https://fakestoreapi.com/products