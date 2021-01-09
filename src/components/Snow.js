import React, {useState} from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import '../scss/config/_input_range.scss';

const Snow = ({snowflake, setSnowflake}) => {

    
    const value = snowflake;
    
    const slower = () => {
        if (snowflake > 20) {
            setSnowflake(prevState => prevState - 50);
            console.log(snowflake);
        } else {
            console.log('nie ma co zabierać')
        }
    };
    const quicker = () => {
        if (snowflake < 1000) {
            setSnowflake(prevState => prevState + 50);
            console.log(snowflake);
        } else {
            console.log('panie ten śnieg się już nie mieści')
        }
    }

    return (
    <div className='snow-regulator'>
        <button className='snow-btn' onClick={slower} disabled={snowflake < 30}> - </button>
        <div className='snow-pic'></div>
        <button className='snow-btn' onClick={quicker} disabled={snowflake > 1000}> + </button>
    </div>
    )
};

export default Snow;