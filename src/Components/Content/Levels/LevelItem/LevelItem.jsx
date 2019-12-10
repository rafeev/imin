import React from 'react';
import inClass from './LevelItem.module.css'

const LevelItem = () => {
    return (
        <div className={ inClass.wrapper }>
            <div className={ inClass.title }>Level title</div>
        </div>
    )
}

export default LevelItem;