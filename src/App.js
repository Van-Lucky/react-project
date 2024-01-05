import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
  useEffect(() => {
    // Perform update or any other actions when the page is loaded
    // You can add your code here
  }, []);

  return (
    <>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Doctor" component={Doctor} />
          <Route path="/Appointment" component={Appointment} />
          <Route path="/Detail" component={Detail} />
          <Route path="/Blog" component={Blog} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Login" component={Login} />
        </Switch>
    </>
  );
}

export default App;