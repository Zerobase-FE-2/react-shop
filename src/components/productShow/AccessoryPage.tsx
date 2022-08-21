import React from 'react'
import ProductsTable from './ProductsTable'

export default function AccessoryPage() {
  return (
    <div style={{display: "block", width:"100%", height:"100%"}}>
      <div>홈 {">"} 악세서리</div>
      <h1 style={{textAlign:"center"}}>악세서리</h1>
      <ProductsTable category={"accessory"}/>
    </div>
  )
}
