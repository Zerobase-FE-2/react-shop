import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { useAppSelector } from '../../hooks/rtkHooks';

import { Product } from '../../types';
const SearchContainer = tw.div`
flex items-center
`;
const Search = tw.input`
h-5/6 px-4 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-sm outline-none
`;
const AutoCompleteContainer = tw.div`
absolute w-screen md:w-60 h-auto absolute z-10 top-28 md:top-16 left-0 md:left-auto p-1 bg-white dark:bg-gray-700 shadow-xl
`;
const SearchedList = tw.ul`
w-screen md:w-full h-fit
`;
const SearchedItem = tw.li<{ isFocus?: boolean }>`
p-1 hover:bg-gray-100 dark:hover:bg-gray-600 text-black dark:text-white ${(
  props: any
) =>
  props.isFocus ? 'bg-gray-100 dark:bg-gray-600' : 'bg-white dark:bg-gray-700'}
`;
export default function SearchBar({ isVisible }: { isVisible: boolean }) {
  const [keyword, setKeyword] = useState<string>('');
  const [keyItems, setKeyItems] = useState<Product[]>([]);
  const [index, setIndex] = useState<number>(-1);

  const itemList = useAppSelector((state) => state.products.products);

  const autoRef = useRef<HTMLUListElement>(null);

  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const navigate = useNavigate();

  const handleKeyArrow = (e: React.KeyboardEvent) => {
    if (keyItems.length > 0) {
      switch (e.key) {
        case 'ArrowDown':
          setIndex(index + 1);
          if (autoRef.current?.childElementCount === index + 1) setIndex(0);
          break;
        case 'ArrowUp':
          setIndex(index - 1);
          if (index <= 0) setIndex(-1);
          break;
        case 'Enter':
          setKeyword(``);
          setKeyItems([]);
          setIndex(-1);
          navigate(`/${keyItems[index].id}`);
          break;
        case 'Escape':
          setKeyItems([]);
          setIndex(-1);
          break;
      }
    }
  };

  useEffect(() => {
    const newItems = itemList.filter((item) => item.title.includes(keyword));
    setKeyItems(newItems);
  }, [keyword]);

  return (
    <SearchContainer>
      <Search
        value={keyword}
        placeholder="검색"
        onChange={onChangeData}
        onKeyDown={handleKeyArrow}
      />
      {keyItems.length > 0 && keyword && (
        <AutoCompleteContainer>
          <SearchedList ref={autoRef}>
            {keyItems.map((item, idx) => (
              <Link to={`/${item.id}`} key={item.title}>
                <SearchedItem
                  isFocus={index === idx ? true : false}
                  onClick={() => {
                    setKeyword('');
                  }}
                >
                  {item.title}
                </SearchedItem>
              </Link>
            ))}
          </SearchedList>
        </AutoCompleteContainer>
      )}
    </SearchContainer>
  );
}
