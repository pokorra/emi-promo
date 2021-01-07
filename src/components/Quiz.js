import React from 'react';
import Done from './Done';
import Question from './Question';
import '../scss/question/main_question.scss';



const Quiz = ({score, setScore, number, setNumber, isFinished, setFinished}) => {

    return (
        <div className='quiz-container'>
            <Question setScore={setScore} score={score} isFinished={isFinished} setFinished={setFinished} number={number} setNumber={setNumber} />
            <Done score={score} isFinished={isFinished} setFinished={setFinished}/>
        </div>
    )
}

export default Quiz;