import Login from './components/Login';
import Cart from './components/Cart';
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Cart />
      </Provider>
    </div>
  );
}

export default App;
