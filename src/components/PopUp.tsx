import React from 'react';

import { useDispatch } from 'react-redux';
import tw from 'tailwind-styled-components';
import { useAppDispatch } from '../hooks/rtkHooks';
import { initializeCart } from '../reducers/cartSlice';

const PopUpDiv = tw.div`
fixed bottom-0 md:top-1/3 md:left-1/3 w-full md:w-1/3 md:min-w-fit h-1/3 p-8 -ml-4 md:m-0 bg-white dark:bg-gray-700 rounded-lg shadow-xl
`;
const Title = tw.h1`
text-xl font-bold text-black dark:text-gray-400 pb-4
`;
const BtnDiv = tw.div`
absolute bottom-10 right-10
`;

interface PopUpProps {
  handlePopup: React.MouseEventHandler<HTMLButtonElement>;
}

export default function PopUp({ handlePopup }: PopUpProps) {
  const dispatch = useAppDispatch();
  return (
    <PopUpDiv>
      <Title>정말로 구매하시겠습니까?</Title>
      <p>장바구니의 모든 상품이 삭제됩니다.</p>
      <BtnDiv>
        <button
          type="submit"
          className="btn-primary mr-4"
          onClick={() => {
            dispatch(initializeCart());
            handlePopup();
          }}
        >
          네
        </button>
        <button type="reset" className="btn-primary" onClick={handlePopup}>
          아니오
        </button>
      </BtnDiv>
    </PopUpDiv>
  );
}
