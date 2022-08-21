import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import Index from './Index'

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
      </div>
    </div>
  )
}