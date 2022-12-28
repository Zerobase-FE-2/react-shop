import { useDispatch } from 'react-redux';
import axios from 'axios';
import useSWR from 'swr';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import * as act from './actions';
import MainPage from './components/MainPage';
import Login from './page/Login';
import SignUp from './page/SignUp';
import FashionPage from './components/productShow/FashionPage';
import AccessoryPage from './components/productShow/AccessoryPage';
import DigitalPage from './components/productShow/DigitalPage';
import ProductDescription from './components/productShow/ProductDescription';
import Cart from './components/Cart';
import Skel from './Skel';
import Footer from './components/Footer';
import ScrollToTop from './components/function/ScrollToTop';

function App() {
  const dispatch = useDispatch();
  const apapap = window.location.pathname;
  const productListApi = 'https://fakestoreapi.com/products';
  async function fetcher(url: string) {
    const result = await axios.get(url);
    return result.data;
  }
  // const { data: docs, error } = useSWR('post', () => fetcher(productListApi));

  // if (error) return <div>failed to load</div>;
  // if (!docs) return <Skel path={apapap} />;
  // dispatch(act.callapi(docs));

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/fasion" element={<FashionPage />} />
          <Route path="/accessory" element={<AccessoryPage />} />
          <Route path="/digital" element={<DigitalPage />} />
          <Route path="/:docId" element={<ProductDescription />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
