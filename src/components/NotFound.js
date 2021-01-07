import React from 'react';
import '../scss/notfind/notfind.scss';

const NotFound =() => {

    return (
        <div className='notfound'>
            <h1 className='notfound-txt'> BŁĄD </h1>
            <div className='notfound-inner'> </div>
            <h2 classname='notfound-txt'>strona nie istnieje</h2>

        </div>
    )
}

export default NotFound;