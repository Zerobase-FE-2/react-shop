import ProductsTable from './ProductsTable';
import tw from 'tailwind-styled-components';
import BreadCrumb from '../navigation/BreadCrumb';

export default function FashionPage() {
  
  const Title = tw.h1`
  text-3xl font-bold p-6 text-center
  `

  return (
    <div>
      <div className='m-4'>
        <BreadCrumb />
      </div>
      <Title>패션</Title>
      <div>
        <ProductsTable category={"fasion"}/>
      </div>
    </div>
  )
}
//https://fakestoreapi.com/products