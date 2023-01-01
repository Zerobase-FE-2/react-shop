import Index from './Index';
import ProductsTable from './productShow/ProductsTable';
import tw from 'tailwind-styled-components';
import Navbar from '../containers/Navigation/Navbar';

export default function MainPage() {
  const Title = tw.h1`
  text-3xl font-bold p-6 text-black dark:text-white
  `;

  return (
    <div>
      <Navbar />
      <div id="container" className="w-full">
        <Index />
        <div className="bg-white text-center dark:bg-gray-800">
          <Title>패션</Title>
          <div>
            <ProductsTable category="main" catego="fasion" />
          </div>
          <br />
          <Title>악세서리</Title>
          <div>
            <ProductsTable category="main" catego="accessory" />
          </div>
          <br />
          <Title>디지털</Title>
          <div>
            <ProductsTable category="main" catego="digital" />
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
