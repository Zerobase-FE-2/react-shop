import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Index from './components/Index';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Index />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
