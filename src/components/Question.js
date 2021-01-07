import React from 'react';
import data from './data';
// import mazurscy_logo from '../scss/img/mazurscy_logo.svg';


// const maz = mazurscy_logo;

const Question =({setScore, isFinished, setFinished, number, setNumber}) => {   
        const quiz = data.quiz;
        const quest = quiz[number];
        const length = quiz.length;


        const endOfGame = () => {
            setFinished(true);
            setNumber(0);
        }
              
        const next = (e) => {
            if (number + 1 < length && e.target.value === quest.goodOne) {
              setNumber((prev) => prev + 1);
              setScore((prev) => prev + 1);
            } else if (number + 1 < length) {
              setNumber((prev) => prev + 1);
            } else if (number < length && e.target.value === quest.goodOne) {
              setScore((prev) => prev + 1);
              endOfGame();
            } else {
              endOfGame();
            }
          };
        
        return (
            <div className={`quiz ${isFinished ? 'hidden' : ''}`}>
                <div className='quiz-number'>
                  <p> {quest.num} </p>
                </div>
                <div className='quiz-question'>
                  <p>{quest.question} </p>
                </div>
                <ul className='quiz-buttons'>
                    {quest.answers.map(item => (
                        <li key={item.ans}> 
                            <button className='quiz-btn' value={item.ans} onClick={next}>
                                   <span> {item.num}</span> {item.ans} 
                            </button> 
                      </li>  
                    ))}
                </ul>
                <div className='book-logo'>
                  {/* <img src={maz} alt='book-title' className='img-title'></img> */}
                </div>
    
             </div>
        )
    };

    export default Question;