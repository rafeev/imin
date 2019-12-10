import React from 'react';
import LevelItem from './LevelItem/LevelItem';
import inClass from './Levels.module.css';

const Levels = () => {
    return (
        <div className={ inClass.wrapper } >
            <div className={ inClass.image }></div>
            <div className={ inClass.content }>
                <LevelItem />
                <LevelItem />
                <LevelItem />
                <LevelItem />
            </div>
        </div>
    )
}

export default Levels;