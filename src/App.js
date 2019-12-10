import React from 'react';
import './App.css';
import Content from './Components/Content/Content';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
        <Content />
    </BrowserRouter>
  )
}

export default App;