import React from 'react';
import { Route } from 'react-router-dom'
import inClass from './Content.module.css';
import Welcome from './Welcome/Welcome';
import Game from './game/Game';

const Content = () => {
    return (
        <div className={ inClass.content }>
            <Route path='/game' component={ Game } />
            <Route path='/welcome' component={ Welcome } />
        </div>
    )
 }

 export default Content;