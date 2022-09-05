import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as act from './reducers/actions';
import axios from 'axios';
import useSWR from 'swr';

import Navbar from './components/navigation/Navbar';
import MainPage from './components/MainPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import FashionPage from './components/productShow/FashionPage';
import AccessoryPage from './components/productShow/AccessoryPage';
import DigitalPage from './components/productShow/DigitalPage';
import ProductDescription from './components/productShow/ProductDescription';
import Cart from './components/Cart';

function App() {
  const dispatch = useDispatch();
  const productListApi = 'https://fakestoreapi.com/products';
  async function fetcher(url: string) {
    const result = await axios.get(url);
    return result.data;
  }
  const { data: docs, error } = useSWR('post', () => fetcher(productListApi));

  if (error) return <div>failed to load</div>;
  if (!docs) return <div>Loading...</div>;
  dispatch(act.callapi(docs));
  const something = dispatch(act.callapi(docs));
  console.log(something);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/fasion" element={<FashionPage />} />
          <Route path="/accessory" element={<AccessoryPage />} />
          <Route path="/digital" element={<DigitalPage />} />
          <Route path="/:docId" element={<ProductDescription />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
