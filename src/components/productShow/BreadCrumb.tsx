import React from 'react';
import tw from 'tailwind-styled-components';
import { ChevronRightIcon } from '@heroicons/react/outline';
import { Category, Title } from '../../types';

interface BreadCrumbProps {
  category: Category;
  title?: Title;
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
      {title ? <ChevronRightIcon className="mx-2 h-3 w-3" /> : null}
      {title}
    </BreadCrumbWrap>
  );
}
