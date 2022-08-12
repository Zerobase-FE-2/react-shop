import React from 'react'
import ProductsTable from './ProductsTable'

export default function DigitalPage() {
  return (
    <div style={{display: "block", width:"100%", height:"100%"}}>
      <div>홈 {">"} 디지털</div>
      <h1 style={{textAlign:"center"}}>디지털</h1>
      <ProductsTable category={"digital"}/>
    </div>
  )
}
