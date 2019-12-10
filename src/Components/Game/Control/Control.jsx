import React from 'react';
import inClass from './Control.module.css';
import Counter from './Counter/Counter';
import Skiper from './Skiper/Skiper';

const Control = () => {
    return (
        <div className={ inClass.wrapper }>
            <Counter />
            <Skiper />
        </div>
    )
}

export default Control;