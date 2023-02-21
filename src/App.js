import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import DarkMode from './components/DarkMode';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';
import Project from './components/Project';
import Scroll from './components/Scroll';
import Skills from './components/Skills';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/about-me' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      

        </div>
  );
}

export default App;
