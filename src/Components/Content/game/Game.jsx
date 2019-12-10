import React from 'react';
import inClass from './Game.module.css';
import Control from './Control/Control';
import FaceChecker from './FaceChecker/FaceChecker';
import Answers from './Answers/Answers';

const Game = () => {

    let answers = [
        {
            id: 1,
            name: 'Pavel Rafeev'
        },
        {
            id: 2,
            name: 'Grodon Freeman'
        },
        {
            id: 3,
            name: 'Sasha G'
        },
        {
            id: 4,
            name: 'Masha Berkova'
        }
    ]


    return (
        <div className={ inClass.wrapper }>
            <FaceChecker image="https://s11.stc.all.kpcdn.net/share/i/12/10491591/inx960x640.jpg"/>
            <Answers answers={ answers }/>
            <Control />
        </div>
    )
}

export default Game;