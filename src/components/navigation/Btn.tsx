import React from 'react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface BtnProps {
  title?: string;
  isLink?: boolean;
  isVisible?: boolean;
  link?: string;
  children?: ReactNode;
}

export default function Btn({
  title,
  isLink = false,
  link,
  isVisible,
  children,
}: BtnProps) {
  return (
    <>
      {isLink ? (
        <button className="text-md btn-ghost relative mx-2 hidden h-full w-full p-2 font-semibold text-black hover:rounded-lg hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 lg:block">
          <Link className=" h-full w-full" to={`/${link}`}>
            {title}
            {children}
          </Link>
        </button>
      ) : (
        <button
          className={`${
            isVisible ? '' : 'hidden'
          } text-md relative mx-2 hidden p-2 font-semibold text-black hover:rounded-lg hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 lg:block`}
        >
          {title}
          {children}
        </button>
      )}
    </>
  );
}
