import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Application from './components/Application';
import TermsConditions from './components/TermsConditions';
import Testimonials from './components/Testimonials';
import Specials from './components/Specials';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import TheContact from './components/TheContact';
import ResetPassword from './components/ResetPassword';
import ForgotPassword from './components/ForgotPassword';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/thelogin" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:email/:token" element={<ResetPassword />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/application" element={<Application />} />
          <Route path="/termsconditions" element={<TermsConditions />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contacts" element={<TheContact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
