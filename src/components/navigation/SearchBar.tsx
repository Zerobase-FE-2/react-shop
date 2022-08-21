import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: inline;
  float: right;
  top: 5px;
  right: 20px;
  width: 400px;
  height: 40px;
  position: relative;
  border: 0;
`;

const Search = styled.input`
  border: 0;
  padding-left: 10px;
  background-color: #eaeaea;
  width: 100%;
  height: 100%;
  outline: none;
`;


const AutoSearchContainer = styled.div`
  z-index: 3;
  height: 50vh;
  width: 400px;
  background-color: #fff;
  position: absolute;
  top: 40px;
  border: 0;
  padding: 5px;
`;

const AutoSearchWrap = styled.ul`
  list-style:none;
  width: 100%;
  margin: 0px;
  padding: 10px 0px;
`;

const AutoSearchData = styled.li`
  text-align: center;
  padding: 20px 0px;
  border: 1px solid black;
  width: 100%;
  /* height: 30px; */
  font-size: 14px;
  font-weight: bold;
  z-index: 4;
  letter-spacing: 2px;
  &:hover {
    background-color: #edf5f5;
    cursor: pointer;
  }
  position: relative;
  img {
    position: absolute;
    right: 5px;
    width: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
interface autoDatas {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
      rate: number;
      count: number;
  }
}
export default function SearchBar() {
	const [keyword, setKeyword] = useState<string>("");
    const [keyItems, setKeyItems] = useState<autoDatas[]>([]);
    const onChangeData = (e:React.FormEvent<HTMLInputElement>) => {
      setKeyword(e.currentTarget.value);
    };
  async function fetchData() {
    return fetch(
      'https://fakestoreapi.com/products'
    )
      .then((res) => res.json())
      .then((data) => data.slice(0,100))
  }
  interface ICity {
    includes(data:string): boolean;
    title?: any;
  }
  const updateData = async() => {
    const res = await fetchData();
    let b = res.filter((list: ICity) => list.title.includes(keyword) === true)
                .slice(0,10);
    // console.log(b);
    setKeyItems(b);
  }
  useEffect(() => {
		const debounce = setTimeout(() => {
      		if(keyword) updateData();
    	},100)
        return () => {
          clearTimeout(debounce)
        }
    },[keyword]) //키워드가 변경되면 api를 호출
    return (
    <SearchContainer>
     <Search value={keyword} onChange={onChangeData}/>
       {keyItems.length > 0 && keyword && (
        <AutoSearchContainer>
         <AutoSearchWrap>
          {keyItems.map((search) => (
              <LinkReset>
            <Link to={`${search.id}`} key={search.title}>
              <AutoSearchData
                onClick={() => {
                  setKeyword("");
                }}
                >
                {search.title}
              </AutoSearchData>
            </Link>
                </LinkReset>
          ))}
         </AutoSearchWrap>
        </AutoSearchContainer>
       )}
      </SearchContainer>
     );
}

const LinkReset = styled.div`
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


// import React from 'react'
// // import Header from './Header';

// export default function SearchBar(props:any) {
//   // const {text} = props.filter;

//   // function handleText(e:any) {
//   //   props.updateFilter(e.target.name, e.target.value);
//   // }
  
//   // return (
//   //   <div style={{display:"inline", float:'right'}}>
//   //     {/* <input name={"text"} value={text} onChange={handleText} placeholder="Search..." /> */}
//   //     <Header />
//   //   </div>
//   // )
// }
