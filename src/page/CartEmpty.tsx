import React from 'react';
import { Link } from 'react-router-dom';

export default function CartEmpty() {
  return (
    <div>
      <span className="text-2xl text-black dark:text-gray-400">
        장바구니에 물품이 없습니다.
      </span>
      <Link to="/">
        <button className="btn-primary mt-10">담으러 가기</button>
      </Link>
    </div>
  );
}
