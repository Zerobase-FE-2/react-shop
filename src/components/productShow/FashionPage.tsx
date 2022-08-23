import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import ProductsTable from './ProductsTable';

export default function FashionPage() {

  return (
    <div style={{display: "block", width:"100%", height:"100%"}}>
      <div>홈 {">"} 패션</div>
      <h1 style={{textAlign:"center"}}>패션</h1>
      <ProductsTable category={"fasion"}/>
    </div>
  )
}
//https://fakestoreapi.com/products