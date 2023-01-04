import React from 'react';
import { useLocation } from 'react-router';
import tw from 'tailwind-styled-components';
import { ChevronRightIcon } from '@heroicons/react/outline';

interface BreadCrumbProps {
  category: string;
  title: string;
}

const BreadCrumbWrap = tw.div`
flex items-center shrink-0 bg-white p-10 dark:bg-gray-800
`;

export default function BreadCrumb({ category, title }: BreadCrumbProps) {
  const getCategory = (category: string) => {
    if (category.includes('electronics')) return 'electronics';
    if (category.includes('jewelery')) return 'accessory';
    return 'fashion';
  };

  return (
    <BreadCrumbWrap>
      {getCategory(category)}
      <ChevronRightIcon className="mx-2 h-3 w-3" />
      {title}
    </BreadCrumbWrap>
  );
}
