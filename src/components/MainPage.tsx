import React from 'react';
import Index from './Index';
import ProductsTable from './productShow/ProductsTable';

export default function MainPage() {

  return (
    <div>
      <div className='navbar'>mainpage</div>
      <div id="container" style={{width: "1500px"}}>
        <Index />
        <br />
          <div>
            <p>item list slide</p>
          </div>
        <br />
          <div style={{textAlign:"center"}}>
              <p>패션</p>
              <div>
                <ProductsTable category="main" catego="fasion"/>
              </div>
            <br />
              <p>악세서리</p>
              <div>
                <ProductsTable category="main" catego="accessory"/>
              </div>
            <br />
              <p>디지털</p>
              <div>
                <ProductsTable category="main" catego="digital"/>
              </div>
            <br />
          </div>
      </div>
    </div>
  )
}