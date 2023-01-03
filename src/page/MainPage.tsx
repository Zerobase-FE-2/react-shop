import Index from '../components/Index';
import ProductsTable from '../components/productShow/ProductsTable';

import Navbar from '../containers/Navigation/Navbar';
import SEOTag from '../components/SEOTag';
import Products from '../containers/Main/Products';
import { useAppDispatch, useAppSelector } from '../hooks/rtkHooks';
import { useEffect } from 'react';
import { fetchProducts, getAccesoryProducts } from '../reducers/productSlice';

export default function MainPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <SEOTag title="React Shop" />
      <Navbar />
      <div id="container" className="w-full">
        <Index />
        <div className="bg-white px-12 text-center dark:bg-gray-800">
          <Products title="패션" category="fashion" />
          <Products title="악세서리" category="accessory" />
          <Products title="디지털" category="digital" />
        </div>
      </div>
    </div>
  );
}
