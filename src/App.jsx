import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Login from './pages/Login';
import './App.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    const routeTitles = {
      '/': 'Home',
      '/about': 'About',
      '/gallery': 'Gallery',
      '/contact': 'Contact Us',
      '/login': 'Login',
    };

    const baseTitle = 'MPHSI';
    const currentTitle = routeTitles[location.pathname] || baseTitle;
    document.title = currentTitle === baseTitle ? baseTitle : `${currentTitle} | ${baseTitle}`;
  }, [location.pathname]);

  return (
    <div className="App">
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <BackToTop />
    </div>
  );
}

export default App;
