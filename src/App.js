import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={ <Home/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
