import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Contacts from './pages/Contacts';
import Careers from './pages/Careers';
import AboutUs from './pages/AboutUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route exact={true} path="/" element={<App />} />
    <Route exact={true} path="/landing" element={<LandingPage/>} />
    <Route exact={true} path="/careers" element={<Careers />} />
    <Route exact={true} path="/about-us" element={<AboutUs />} />
    <Route exact={true} path="/contacts" element={<Contacts />} />
</Routes>
</BrowserRouter>
);
