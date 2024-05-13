import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import React from 'react';
import Navbar from './Navbar.js'; // Importe o componente Navbar
import Coco from './tela-loja';
import Footer from './rodape';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Coco/> 
      <Footer/>
        </div>
  );
}

export default App;