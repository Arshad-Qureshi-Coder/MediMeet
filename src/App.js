import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home';
import Doctors from './Components/Pages/Doctors';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Footer from './Components/Footer/Footer';
import Card from './Components/Card/Card';

const App = () => {
  return (
    <div className=' container mx-auto'>
      {/* Header */}
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* footer */}
      <Card/>
      <Footer/>
    </div>
  );
};

export default App;
