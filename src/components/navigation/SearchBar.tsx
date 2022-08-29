import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

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
  // async function fetchData() {
  //   return fetch(
  //     'https://fakestoreapi.com/products'
  //   )
  //     .then((res) => res.json())
  //     .then((data) => data.slice(0,100))
  // }
  const calledItems = useSelector((state:any) => state.itemList);
  // console.log(calledItems.state);
  let itemList = calledItems.state;
  // console.log(itemList);

  interface ICity {
    includes(data:string): boolean;
    title?: any;
  }
  const updateData = async() => {
    // const res = await itemList;
    const res = itemList;
    let b = res.filter((list: ICity) => list.title.toLowerCase().includes(keyword) === true || list.title.toLowerCase().split(' ').join('').includes(keyword) === true || list.title.toUpperCase().includes(keyword) === true || list.title.toUpperCase().split(' ').join('').includes(keyword) === true)
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
    const SearchContainer = tw.div`
      flex items-center
    `
    const SearchBar = tw.input`
      w-42 h-5/6 px-4 bg-gray-700 rounded-sm outline-none text-white
    `
    const AutoCompleteContainer = tw.div`
      w-60 h-auto absolute z-10 top-16 p-1 bg-gray-700
    `
    const SearchedList = tw.ul`
    w-full h-80 overflow-hidden overflow-y-scroll
    `
    const SearchedItem = tw.li`
    p-1 hover:bg-gray-600 text-white
    `
    return (
    <SearchContainer>
      <SearchBar value={keyword} placeholder='검색' onChange={onChangeData}/>
      {keyItems.length > 0 && keyword && (
        <AutoCompleteContainer>
         <SearchedList>
          {keyItems.map((search) => (
              <Link to={`${search.id}`} key={search.title}>
                <SearchedItem onClick={() => {setKeyword("")}}>
                  {search.title}
                </SearchedItem>
              </Link>
          ))}
         </SearchedList>
        </AutoCompleteContainer>
      )}
      </SearchContainer>
     );
}

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
