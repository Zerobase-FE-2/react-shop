import React from 'react';
import tw from 'tailwind-styled-components';
import { ChevronRightIcon } from '@heroicons/react/outline';
import { Category, Title } from '../../types';

interface BreadCrumbProps {
  category: Category | 'cart';
  title?: Title;
}

const BreadCrumbWrap = tw.div`
flex items-center shrink-0 bg-white p-10 dark:bg-gray-800
`;

export default function BreadCrumb({ category, title }: BreadCrumbProps) {
  const getCategory = (category: string) => {
    if (category === 'electronics') return '디지털';
    if (category === 'jewelery') return '악세서리';
    if (category === 'cart') return '장바구니';
    else return '패션';
  };

  return (
    <BreadCrumbWrap>
      {title ? (
        <>
          {getCategory(category)}
          <ChevronRightIcon className="mx-2 h-3 w-3" />
          {title}
        </>
      ) : (
        <>
          <span>홈</span>
          <ChevronRightIcon className="mx-2 h-3 w-3" />
          {getCategory(category)}
        </>
      )}
    </BreadCrumbWrap>
  );
}
