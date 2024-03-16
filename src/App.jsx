import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer'
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <AnimatePresence>
    <Router>
      <ScrollToTop />
      <div className="relative h-screen">
        {/* Background  */}
        <div className="fixed inset-0 bg-neutral-950 ">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950
          bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          </div>
        </div>
        {/* Main content container */}
        <div className="relative z-10 h-auto overflow-hidden">
          <Navbar className />
          <Routes>
            <Route path="/" element={<Home />} className="container mx-auto" />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  </AnimatePresence>
  );
};

export default App