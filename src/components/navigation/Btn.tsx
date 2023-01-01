import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface BtnProps {
  title?: string;
  isLink?: boolean;
  link?: string;
  children?: ReactNode;
}

export default function Btn({
  title,
  isLink = false,
  link,
  children,
}: BtnProps) {
  return (
    <>
      {isLink ? (
        <Link to={`/${link}`}>
          <button className="text-md relative mx-2 hidden p-2 font-semibold text-black hover:rounded-lg hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 lg:block">
            {title}
            {children}
          </button>
        </Link>
      ) : (
        <button className="text-md relative mx-2 hidden p-2 font-semibold text-black hover:rounded-lg hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 lg:block">
          {title}
          {children}
        </button>
      )}
    </>
  );
}
