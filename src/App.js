import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './CommonComponents/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Aboutus from './Pages/Aboutus/Aboutus';
import Gallery from './Pages/Gallery/Gallery';
import Menu from './Pages/Menu/Menu';
import BookATable from './Pages/BookATable/BookATable';
import Contact from './Pages/Contact/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/bookatable" element={<BookATable />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
