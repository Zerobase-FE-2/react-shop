import { useDispatch } from 'react-redux';
import axios from 'axios';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import MainPage from './page/MainPage';
import Login from './page/Login';
import SignUp from './page/SignUp';
import FashionPage from './components/productShow/FashionPage';
import AccessoryPage from './components/productShow/AccessoryPage';
import DigitalPage from './components/productShow/DigitalPage';
import ProductDescription from './components/productShow/ProductDescription';
import Cart from './components/Cart';

import ScrollToTop from './components/function/ScrollToTop';

function App() {
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
