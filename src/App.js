import { useState } from 'react';
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

function App() {
  const [showScreen, setShowScreen] = useState("")
  
  const screens = {
    skills: <Skills />,
    projects: <Project />,
    about:<About />,
    contact: <Contact />
  }
  
  return (
    <div>
      {/* Dark Mode */}

      <DarkMode />

      <div className="wrapper">
        {/* <!-- header section --> */}

        <Header setShowScreen={setShowScreen} />

        {!showScreen ? (
          <>
          <Hero />
          {Object.values(screens)}
          </>
        ):(
          screens[showScreen]
        )}

        
        <Footer />

        {/* <!-- Scroll Button --> */}

        <Scroll />

      </div>

    </div>
  );
}

export default App;
