import React, {useState} from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const Range = ({snowflake, setSnowflake}) => {

    
    const value = snowflake;
    const change = range => {
        setSnowflake(range);
    }


    return (
    <div className='slider'>
        <label>LABEL</label>
        <InputRange
            minValue={0}
            maxValue={500}
            step={20}
            value={value} 
            onChange={change}
            />
    </div>
    )
};

export default Range;