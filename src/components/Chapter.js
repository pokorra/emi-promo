import React from 'react';
import {Link} from 'react-router-dom';
import book from './book';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const Chapter = ({isChapter, setChapter, setFinished, setScore}) => {
    const empik = 'https://www.empik.com/emi-i-tajny-klub-superdziewczyn-dookola-swiata-nowy-jork-mielech-agnieszka,p1258369891,ksiazka-p';
    const toFinal = () => {
        setChapter(false);
        setFinished(false);
        setScore(0);
    }
    return (
        <div className={`${isChapter ? 'chapter' : 'hidden'}`}>
            <Link to='/'><button className='back-btn' onClick={toFinal} > powrót </button></Link>
            <a href={empik} target="_blank" rel="noopener noreferrer" className='buy-link'> 
                <button className='buy-btn' data-hover='KUP'> 
                    <span className='buy-par'> <FontAwesomeIcon icon = {faShoppingCart}/> </span> 
                </button>
            </a> 
            {book.map(item => (
                <p key={item.num} className={'paragraph'}> {item.content} </p>
            ))}
        </div>
    )
};

export default Chapter;