import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CategoryGrid from './Pages/CategoryGrid';
import CategoryPage from './Pages/CategoryPage.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/menu" element={<CategoryGrid />} />

      </Routes>
    </Router>
  );
}

export default App;
