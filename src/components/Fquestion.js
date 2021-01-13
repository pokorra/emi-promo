import React from 'react';

const Fquestion = ({question, step}) => {

    return (
        <>
            <div className='quiz-number'>
                <p> {step} </p>
            </div>
            <div className='quiz-question'>
                <p>{question} </p>
            </div>
        </>
    )
}

export default Fquestion;