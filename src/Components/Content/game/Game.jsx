import React from 'react';
import inClass from './Game.module.css';
import Control from './Control/Control';

const Game = () => {
    return (
        <div className={ inClass.wrapper }>
            <Control />
        </div>
    )
}

export default Game;