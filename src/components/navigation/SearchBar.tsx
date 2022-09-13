import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
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
const SearchContainer = tw.div`
flex items-center
`
const Search = tw.input`
hidden md:block absolute md:static top-16 left-0 w-full md:w-42 h-5/6 px-4 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-sm outline-none
`
const AutoCompleteContainer = tw.div`
absolute w-screen md:w-60 h-auto absolute z-10 top-28 md:top-16 left-0 md:left-auto p-1 bg-white dark:bg-gray-700 shadow-xl
`
const SearchedList = tw.ul`
w-screen md:w-full h-fit
`
const SearchedItem = tw.li<{isFocus?: boolean}>`
p-1 hover:bg-gray-100 dark:hover:bg-gray-600 text-black dark:text-white ${(props:any) => props.isFocus? "bg-gray-100 dark:bg-gray-600" : "bg-white dark:bg-gray-700"}
`
export default function SearchBar() {
	const [keyword, setKeyword] = useState<string>("");
  const [keyItems, setKeyItems] = useState<autoDatas[]>([]);
  const [index, setIndex] = useState<number>(-1);
  const autoRef = useRef<HTMLUListElement>(null);
  const onChangeData = (e:React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };
  const navigate = useNavigate();
  const ArrowDown = "ArrowDown";
  const ArrowUp = "ArrowUp";
  const Escape = "Escape";
  const Selec = "Enter";
  const handleKeyArrow = (e:React.KeyboardEvent) => {
    if (keyItems.length > 0) {
      switch (e.key) {
        case ArrowDown: //키보드 아래 키
        console.log(e);
          setIndex(index + 1);
          if (autoRef.current?.childElementCount === index + 1) setIndex(0);
          console.log(index);

          break;
        case ArrowUp: //키보드 위에 키
          setIndex(index - 1);
          console.log(e);
          if (index <= 0) {
            //setKeyItems([]);
            setIndex(-1);
          }
          console.log(index);
          break;
        case Selec: // enter key를 눌렀을때,
          // setKeyword(`${keyItems[index].title}`);
          setKeyword(``);
          setKeyItems([]);
          setIndex(-1);
          // location.href = `${keyItems[index].id}`;
          // return <Link to={`${keyItems[index].id}`} key={keyItems[index].title} />
          navigate(`/${keyItems[index].id}`);
          break;
        case Escape: // esc key를 눌렀을때,
          console.log(index);
          setKeyItems([]);
          setIndex(-1);
          break;  
      }  
    } 
  };

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
    return (
    <SearchContainer>
      <Search value={keyword} placeholder='검색' onChange={onChangeData} onKeyDown={handleKeyArrow}/>
      {keyItems.length > 0 && keyword && (
        <AutoCompleteContainer>
         <SearchedList ref={autoRef}>
          {keyItems.map((search, idx) => (
              <Link to={`${search.id}`} key={search.title}>
                <SearchedItem
                  isFocus={index === idx ? true : false}
                  onClick={() => {
                    setKeyword("");
                  }}
                >
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
