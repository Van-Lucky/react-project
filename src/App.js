import logo from './logo.svg';
import {Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Navbar from './component/NavbarComponent';
import Doctor from './component/DoctorComponent';
import Appointment from './component/AppointmentComponent';
import Detail from './component/DetailComponent';
import Blog from './component/BlogComponent';
import Contact from './component/ContactComponent';
import Login from './component/LoginComponent';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Doctor' element={<Doctor />} />
          <Route path='/Appointment' element={<Appointment />} />
          <Route path='/Detail' element={<Detail />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
