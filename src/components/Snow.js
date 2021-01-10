import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";


const Snow = ({snowflake, setSnowflake}) => {
        
    let stopSnowing;
    let changeNumber;

    if (window.innerWidth > 1100) {
        stopSnowing = 1800;
        changeNumber = 250;
      } else if (window.innerWidth > 750) {
        stopSnowing = 1000;
        changeNumber = 100;
      } else {
        stopSnowing = 500;
        changeNumber = 70;
      }

    const slower = () => {
        if (snowflake > 20) {
            setSnowflake(prevState => prevState - changeNumber);
        }
    };
    const quicker = () => {
        if (snowflake < stopSnowing) {
            setSnowflake(prevState => prevState + changeNumber);
        } 
    }

    return (
    <div className='snow-regulator'>
        <button className='snow-btn' onClick={slower} disabled={snowflake < 30}> <span className='tooltip'>Mniej śniegu!</span> <FontAwesomeIcon icon = {faMinus}/> </button>
        <div className='snow-pic'></div>
        <button className='snow-btn' onClick={quicker} disabled={snowflake > stopSnowing}> <span className='tooltip'>Więcej śniegu!</span> <FontAwesomeIcon icon = {faPlus}/> </button>
    </div>
    )
};

export default Snow;