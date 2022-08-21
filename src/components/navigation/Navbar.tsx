import React, { useState } from 'react'
import {Link, Outlet} from 'react-router-dom'
import styled from 'styled-components';
import SearchBar from './SearchBar';

export default function Navbar() {
  const [itemFilter, setitemFilter] = useState({text:'',itemCategory:''})

  function updateFilter(key:string, value:string){
    setitemFilter({
      ...itemFilter,
      [key]: value,
    });
  }

  return (
    <div>
      <div className='navigation' style={{display: "block", float:'right', padding:"0px", width:"100%", height:"50px", backgroundColor:"purple"}}>
        <div style={{display:"inline"}}>
          <LinkReset>
            <div style={{display: "inline-block"}}>
              <Link to='/'>React Shop </Link>
            </div>
            <div style={{display: "inline-block"}}>
              <button style={{}}>
                <Link to='/fasion'> 패션 </Link>
              </button>
              <button style={{}}>
                <Link to='/accessory'> 악세서리 </Link>
              </button>
              <button style={{}}>
                <Link to='/digital'> 디지털 </Link>
              </button>
              <button style={{}}>
                <Link to='/login'> 로그인페이지{"임시"} </Link>
              </button>
              <button style={{}}>
                <Link to='/cart'> 쇼핑카트{"임시"} </Link>
              </button>
            </div>
          </LinkReset>
        </div>
        <div style={{display:"inline", float:'right'}}>
          <SearchBar />
        </div>
      </div>
      <Outlet />
    </div>
  )
}
const LinkReset = styled.div`
  display: inline-block;
  margin-top: 15px;
  a:link {
    color : black;
    text-decoration: none;
  }
  a:visited {
    color : black;
    text-decoration: none;
  }
  a:hover {
    color : black;
    background-color: grey;
    text-decoration: none;
  }
  a:active {
    color : black;
    text-decoration: none;
  }
`