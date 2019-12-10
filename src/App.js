import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Welcome from './Components/Welcome/Welcome';
import Levels from './Components/Levels/Levels';
import Game from './Components/Game/Game';

const App = (props) => {
  return (
    <BrowserRouter>
      <Route path='/levels' render={ () => <Levels /> } />
      <Route path='/game' render={ Game } />
      <Route path='/welcome' render={ Welcome } />
    </BrowserRouter>
  )
}

export default App;