import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home';
import Doctors from './Components/Pages/Doctors';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Footer from './Components/Footer/Footer';
import Login from './Components/Auth/Login';
import MyProfile from './Components/Pages/MyProfile';
import MyAppointment from './Components/Pages/MyAppointment';
import Appointment from './Components/Appointment';
import TopDoctor from './Components/TopDoctor';
import LoginPage from './Components/Auth/Login';
// import Card from './Components/Card/Card';

const App = () => {
  return (
    <div className='container m-auto'>
      
      <LoginPage/>
      {/* Header */}
      <Header />


      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<TopDoctor />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointment />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
      </Routes>
      {/* footer */}
      {/* <Card/> */}
      <Footer/>
    </div>
  );
};

export default App;
