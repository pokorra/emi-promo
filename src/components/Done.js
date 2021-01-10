import React from 'react';
import {Link} from 'react-router-dom';
import Snow from './Snow';

const Done = ({isFinished, snowflake, setSnowflake}) => {

    return (
        <div className={`${isFinished ? 'done' : 'hidden'}`}>
            <Snow snowflake={snowflake} setSnowflake={setSnowflake}/>
            <div className='appear'>
                <p> Gratulacje, udało Ci się ukończyć quiz! </p>
                <Link to='/final'> <button className='butt'> Sprawdź swój wynik </button> </Link>
            </div>
        </div>
    )
}

export default Done;