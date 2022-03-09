import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Questions from './components/Questions/Questions';
import Readme from './components/Readme/Readme';
import Contacto from './components/Contacto/Contacto'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path= '/' element={<Home />} />
          <Route path= '/:category' element={<Questions />} />
          <Route path= '/readme' element={<Readme />} />
          <Route path= '/contacto' element={<Contacto />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
