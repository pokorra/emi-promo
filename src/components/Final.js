import React, {useState} from 'react';
import Chapter from './Chapter';
import {Link} from 'react-router-dom';
import all from './data';
import emi_logo_pion from '../scss/img/emi_logo_pion.svg';
import wilga_logo from '../scss/img/wilga_logo.svg';
import Snow from './Snow';
import '../scss/final/main_final.scss';

// const maz = mazurscy_logo;

const Final =({score, setScore, setFinished, snowflake, setSnowflake}) => {
    const finish = all[2];
    const wilga = wilga_logo;
    const emi = emi_logo_pion;

    const [isChapter, setChapter] = useState(false);
    
    const resetQuiz = () => {
        setFinished(false);
        setScore(0);
    }

    const showText = () => {
        setChapter(true);
    }

    return (
        <div>
            { score < 3 ? (
                <div className='final for-the-loose'> 
                    <Snow snowflake={snowflake} setSnowflake={setSnowflake}/>
                    <img src={wilga} alt='logo' className='final-wilga-logo'></img>
                    <img src={emi} alt='book-title' className='final-book-title'></img>
                    <p className='final-score'>Twój wynik to... {score} / 10!</p>
                    <p className='final-text'>{finish[0].display}</p>
                    <Link to='/quiz'> <button className='final-btn' onClick={resetQuiz}> {finish[0].btn} </button> </Link>
                </div>
            ) : (
                <div className='final for-the-win'>
                    <div className={`${isChapter ? 'hidden' : 'final'}`}>
                        <Snow snowflake={snowflake} setSnowflake={setSnowflake}/>
                        <img src={wilga} alt='logo' className='final-wilga-logo'></img>
                        <img src={emi} alt='book-title' className='final-book-title'></img>
                        <p className='final-score'>Twój wynik to... {score} / 10!</p>
                        <p className='final-text'>{finish[1].display}</p>
                        <button onClick={showText} className='final-btn'> {finish[1].btn} </button>
                    </div>
                    <Chapter isChapter={isChapter} setChapter={setChapter} 
                    setScore={setScore} setFinished={setFinished}/>
                </div>
            )}
            

            
        </div>
    )
}

export default Final;