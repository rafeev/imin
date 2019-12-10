import React from 'react';
import { Route } from 'react-router-dom';
import inClass from './Content.module.css';
import Welcome from './Welcome/Welcome';
import Game from './Game/Game';
import Levels from './Levels/Levels';

const Content = () => {
    return (
        <div className={ inClass.content }>
            <Route path='/start' component={ Levels } />
            <Route path='/game' component={ Game } />
            <Route path='/welcome' component={ Welcome } />
        </div>
    )
 }

 export default Content;