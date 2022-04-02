import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Resume from './components/pages/MyResume.js';
import About from './components/pages/MyAbout.js';
import Work from './components/pages/MyWork';


ReactDOM.render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<About />} />
    <Route path="/about" element={<About />} />
    <Route path="/work" element={<Work />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="ET-PORTFOLIO-REACT" element={<About />} />
   
  </Routes>
  <Footer/>
</BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();