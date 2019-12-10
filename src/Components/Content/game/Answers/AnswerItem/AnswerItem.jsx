import React from 'react';
import inClass from './AnswerItem.module.css';

const AnswerItem = (props) => {
    return (
        <div className={ inClass.wrapper }>
            <div className={ inClass.text }>{ props.name }</div>
        </div>
    )
}

export default AnswerItem;