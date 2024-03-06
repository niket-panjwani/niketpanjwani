import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import { CSSTransition } from 'react-transition-group';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import SocialMediaBar from './components/SocialMediaBar';
import EmailBar from './components/EmailBar';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 5000);
    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /><About/><Contact/></>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SocialMediaBar />
      <EmailBar />
    </Router>
  );
}

export default App;