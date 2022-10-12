import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Portraits from './Pages/Portraits';
import NavVertical from './Components/NavVertical';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column flex-md-row navItem">
          <NavVertical />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutUs' element={<AboutUs />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/portraits' element={<Portraits />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
