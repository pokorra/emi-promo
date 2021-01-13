import React from 'react';

const Fanswer = ({answer, checkAnswer, correctAnswer, clickedAnswer, step}) => {

    let answerList = Object.keys(answer)
        .map((qAnswer, i) => (
            <li className={`quiz-btn ${
                correctAnswer === qAnswer ?
                'good-answer' :
                clickedAnswer === qAnswer ?
                'wrong-answer' : ''}
                `}
                onClick={() => checkAnswer((qAnswer))}
                key={qAnswer}>
                {answer[qAnswer]}
            </li>
        ));

    return (
        <ul className='quiz-buttons' disabled={clickedAnswer ? true : false}>
            {answerList}
        </ul>
    )

}

export default Fanswer;