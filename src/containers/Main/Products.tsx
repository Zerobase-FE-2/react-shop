import ProductsTable from '../../components/productShow/ProductsTable';
import tw from 'tailwind-styled-components';

interface ProductsProps {
  title: string;
  category: 'fashion' | 'accessory' | 'digital';
}

const Title = tw.h1`
  text-3xl font-bold p-6 text-black dark:text-white
  `;

export default function Products({ title, category }: ProductsProps) {
  return (
    <>
      <Title>{title}</Title>
      <div>
        <ProductsTable category={category} />
      </div>
    </>
  );
}
