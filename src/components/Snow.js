import React, {useState} from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const Snow = ({snowflake, setSnowflake}) => {
    
    // const slower = () => {
    //     if (snowflake > 20) {
    //         setSnowflake(prevState => prevState - changeNumber);
    //     }
    // };
    // const quicker = () => {
    //     if (snowflake < stopSnowing) {
    //         setSnowflake(prevState => prevState + changeNumber);
    //     } 
    // }


    const onStart = snowflake;
    let stepN;
    let minN;
    let maxN;

    if (window.innerWidth > 1100) {
        stepN = 400;
        minN = 500;
        maxN = 1800;
      } else if (window.innerWidth > 750) {
        stepN = 200;
        minN = 300;
        maxN = 1000;
      } else {
        stepN = 70;
        minN = 30;
        maxN = 360;
      }

    // const [value, setValue] = useState(snowflake)

    // function change(range){
    //     setSnowflake(range);
    //     console.log(range);
    // }

    const [checked, setChecked] = useState(false);
    // const changeCheck = () => {
        
    //     if (checked) {
    //         setSnowflake(maxN)
    //         // console.log(snowflake);
    //     } else {
    //         setSnowflake(minN);
    //         // console.log(snowflake);
    //     }
    //     setChecked(!checked);
    //     console.log(checked);
    // }
    const changeCheck = e => {
        setChecked(e.target.checked);
        checked ? setSnowflake(maxN) : setSnowflake(minN);
        console.log(checked, snowflake);
    }
    
    return (
    <div className='snow-regulator'>
        {/* <input type='checkbox' checked={checked} onChange={changeCheck}/> */}
        {/* <InputRange minValue={minN} maxValue={maxN} step={stepN} value={snowflake} onChange={change} /> */}
        {/* <button className='snow-btn' onClick={slower} disabled={snowflake < 30}> <span className='tooltip'>Mniej śniegu!</span> <FontAwesomeIcon icon = {faMinus}/> </button>
        <div className='snow-pic'></div>
        <button className='snow-btn' onClick={quicker} disabled={snowflake > stopSnowing}> <span className='tooltip'>Więcej śniegu!</span> <FontAwesomeIcon icon = {faPlus}/> </button> */}
    </div>
    )
};

export default Snow;