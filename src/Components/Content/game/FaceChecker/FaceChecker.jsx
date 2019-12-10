import React from 'react';
import inClass from './FaceChecker.module.css';

const FaceChecker = (props) => {
    return (
        <div className={ inClass.wrapper }>
            <img className={ inClass.image } src={ props.image } />
        </div>
    )
}

export default FaceChecker;