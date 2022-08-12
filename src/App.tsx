import Login from './components/Login';
//상품 페이지와 상세정보 페이지 + 검색기능
import {Routes, Route} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components'; //사용예정-styled-components 설치필요 [npm i -D @types/styled-components]
import MainPage from './components/MainPage';
import FashionPage from './components/FashionPage';
import AccessoryPage from './components/AccessoryPage';
import DigitalPage from './components/DigitalPage';
import Navbar from './components/Navbar';
import ProductDescription from './components/ProductDescription';
function App() {
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
