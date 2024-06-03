import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactPage from './Pages/ContactPage';
import Home from './Pages/Home';
import ShopPage from './Pages/ShopPage';
import ThreeDPrintingPage from './Pages/3DPrintingPage';
import Bookings from './Pages/Bookings';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/booking" element={<Bookings/>} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/3d-printing" element={<ThreeDPrintingPage />} />
     
      </Routes>
    </Router>
  );
}

export default App;