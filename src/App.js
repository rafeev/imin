import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
        {/* <Header /> */}
        <Content />
        <Footer />
    </BrowserRouter>
  )
}

export default App;