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
  return (
    <div>
      {/* Dark Mode */}

      <DarkMode />

      <div className="wrapper">
        {/* <!-- header section --> */}

        <Header />

        {/* <!-- hero section --> */}

        <Hero />

        {/* <!-- info section --> */}

        <Info />

        {/* <!-- skills section --> */}

        <Skills />

        {/* <!-- project section --> */}

        <Project />
        {/* <!-- about me section --> */}

        <About />

        {/* Contact section */}

        <Contact />

        {/* <!-- footer section --> */}

        <Footer />

        {/* <!-- Scroll Button --> */}

        <Scroll />

      </div>

    </div>
  );
}

export default App;
