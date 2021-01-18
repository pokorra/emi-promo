import React from 'react';
import {Link} from 'react-router-dom';
import '../scss/notfind/notfind.scss';

const NotFound =() => {

    return (
        <div className='notfound'>
            <h1 className='notfound-txt'> BŁĄD </h1>
            <h2 className='notfound-txt'>strona nie istnieje :(</h2>
            <Link to='/'><button className='back-btn' > strona główna </button></Link>
        </div>
    )
}

export default NotFound;