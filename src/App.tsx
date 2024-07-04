import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Computers from './pages/Computers';
import Laptops from './pages/Laptops';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/computers" element={<Computers />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

