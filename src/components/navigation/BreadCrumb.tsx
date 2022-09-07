import { useLocation } from 'react-router';
import tw from 'tailwind-styled-components';
import { ChevronRightIcon } from '@heroicons/react/outline';

export default function BreadCrumb(props: any) {
  const location = useLocation();
  const path = location.pathname;
  const getCategoryName = (name: string) => {
    switch (name) {
      case '/fasion':
        return '패션';
        break;
      case '/accessory':
        return '악세서리';
        break;
      case '/digital':
        return '디지털';
        break;
      case '/cart':
        return '장바구니';
        break;
      default:
        return '홈';
        break;
    }
  };

  const getProductCategory = (name: string) => {
    switch (name) {
      case "men's clothing":
        return '패션';
        break;
      case "women's clothing":
        return '패션';
        break;
      case 'jewelery':
        return '악세서리';
        break;
      case 'electronics':
        return '디지털';
        break;
      default:
        break;
    }
  };
  const BreadCrumb = tw.div`
        flex items-center
    `;
  return (
    <>
      {Object.keys(props).length < 1 ? (
        <BreadCrumb>
          {getCategoryName('')}
          <ChevronRightIcon className="w-3 h-3 mx-2" />
          {getCategoryName(path)}
        </BreadCrumb>
      ) : (
        <BreadCrumb>
          {getProductCategory(props.category)}
          <ChevronRightIcon className="w-3 h-3 mx-2" />
          {props.title}
        </BreadCrumb>
      )}
    </>
  );
}
