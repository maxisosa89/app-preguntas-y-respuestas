import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Questions from './components/Questions/Questions';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path= '/' element={<Home />} />
          <Route path= '/:category' element={<Questions />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
