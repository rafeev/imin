import React from 'react';
import inClass from './Counter.module.css';

const Counter = () => {
    return (
        <div className={ inClass.wrapper } >
            <div className={ inClass.title } >1000</div>
        </div>
    )
}

export default Counter;