import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Welcome from './Components/Welcome/Welcome';
import Levels from './Components/Levels/Levels';
import Game from './Components/Game/Game';

const App = () => {
  return (
    <BrowserRouter>
      <Route path='/levels' component={ Levels } />
      <Route path='/game' component={ Game } />
      <Route path='/welcome' component={ Welcome } />
    </BrowserRouter>
  )
}

export default App;