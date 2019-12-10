import React from 'react';
import inClass from './LevelItem.module.css';
import { NavLink } from 'react-router-dom';

const LevelItem = (props) => {
    return (
        <NavLink to="/game" className={ inClass.wrapper }>
            <span className={ inClass.title }>Level title</span>
        </NavLink>
    )
}

export default LevelItem;