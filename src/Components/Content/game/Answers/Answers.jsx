import React from 'react';
import inClass from './Answers.module.css';
import AnswerItem from './AnswerItem/AnswerItem';

const Answers = (props) => {

    let answerElement = props.answers.map( param =><AnswerItem name={ param.name } key={ param.id } /> )

    return (
        <div className={ inClass.wrapper }>
            { answerElement }
            {/* <AnswerItem name="Pavel Rafeev"/>
            <AnswerItem name="Mashsa Berkova"/>
            <AnswerItem name="Gordon Freeman"/>
            <AnswerItem name="Saha G"/> */}
        </div>
    )
}

export default Answers;