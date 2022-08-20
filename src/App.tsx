import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Index from './components/Index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
