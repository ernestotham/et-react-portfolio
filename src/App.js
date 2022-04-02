import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import About from "./components/pages/about";


export default function App() {
    return (
      <div className="App">
        <Navbar />
        <About />
        <Footer />
      </div>
    );
  }
  