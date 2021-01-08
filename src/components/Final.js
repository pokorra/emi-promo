import React, {useState} from 'react';
import Chapter from './Chapter';
import {Link} from 'react-router-dom';
import all from './data';
// import mazurscy_logo from '../scss/img/mazurscy_logo.svg';
import '../scss/final/main_final.scss';

// const maz = mazurscy_logo;

const Final =({score, setScore, setFinished}) => {
    const finish = all[2];

    const [isChapter, setChapter] = useState(false);
    
    const resetQuiz = () => {
        setFinished(false);
        setScore(0);
    }

    const showText = () => {
        setChapter(true);
    }

    return (
        <div className='final-page'>
            { score < 3 ? (
                <div className='final for-the-loose'> 
                    <div className='final-text-elements'> 
                        {/* <img src={maz} alt='book-title' className='final-title'></img> */}
                        <p className='final-score'>Twój wynik to... {score} / 10!</p>
                        <p className='final-text'>{finish[0].display}</p>
                    <Link to='/quiz'> <button className='final-btn' onClick={resetQuiz}> {finish[0].btn} </button> </Link>
                    </div>
                    <div className='bottom-pic pic-loose'> </div>
                </div>
            ) : (
                <div className='final for-the-win'>
                    <div className={`${isChapter ? 'hidden' : 'final-text-elements'}`}>
                        {/* <img src={maz} alt='book-title' className='final-title'></img> */}
                        <p className='final-score'>Twój wynik to... {score} / 10!</p>
                        <p className='final-text'>{finish[1].display}</p>
                        <button onClick={showText} className='final-btn'> {finish[1].btn} </button>
                        
                    </div>
                    <Chapter isChapter={isChapter} setChapter={setChapter} setScore={setScore} setFinished={setFinished}/>
                    <div className='bottom-pic pic-win'> </div>
                </div>
            )}
            

            
        </div>
    )
}

export default Final;