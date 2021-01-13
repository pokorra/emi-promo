import React, {useState} from 'react';
import all from './data';
import emi_logo from '../scss/img/emi_logo.svg';
// import mazurscy_logo from '../scss/img/mazurscy_logo.svg';
import Snow from './Snow';


// const maz = mazurscy_logo;
const logo = emi_logo;

const Question =({setScore, isFinished, setFinished, number, setNumber, snowflake, setSnowflake}) => {   
  const quiz = all[0];
  const quest = quiz[number];
  const length = quiz.length;

  //next question btn
  const [isVisible, setVisible] = useState(false);
  
  const [isGoodAns, setGoodans] = useState(false);
  const [isOk, setOk] = useState(false);
  const endOfGame = () => {
      setFinished(true);
      setNumber(0);
  }
  // const [bgColor, setBgcolor] = useState("rgba(0, 0, 0, 0");       
  const answear = (e) => {
    // e.preventDefault();
    if (!isVisible && e.target.value === quest.goodOne) {
      setVisible(true);
      setScore((prev) => prev + 1);
      setGoodans(true);
      // setBgcolor("rgb(226, 0, 122)");
      (console.log('dobra odpowiedź, gdzie moje tło'))
    } else if (!isVisible && e.target.value !== quest.goodOne) {
      setVisible(true);
      setOk(true);
    console.log('zła odp.');
    } else {
      console.log('już kliknięte')
    }
  }

  const nextQuest = () => {
    setVisible(false);
  }
  const next = (e) => {
    if (number + 1 < length && e.target.value === quest.goodOne) {
      setNumber((prev) => prev + 1);
      setScore((prev) => prev + 1);
    } else if (number + 1 < length) {
      setNumber((prev) => prev + 1);
    } else if (number < length && e.target.value === quest.goodOne) {
      setScore((prev) => prev + 1);
      endOfGame();
    } else {
      endOfGame();
    }
  };
  
  return (
      <div className={`quiz ${isFinished ? 'hidden' : ''}`}>
        <Snow snowflake={snowflake} setSnowflake={setSnowflake}/>
          <div className='quiz-number'>
            <p> {quest.num} </p>
          </div>
          <h2 className='quiz-instruction'>kliknij <span>prawidłową</span> odpowiedź</h2>
          <div className='quiz-question'>
            <p>{quest.question} </p>
          </div>
          <ul className='quiz-buttons'>
              {quest.answers.map(item => (
                  <li key={item.ans}> 
                     <button className='quiz-btn' value={item.ans} onClick={next}>
                                   <span> {item.num}</span> {item.ans} 
                            </button> 
                </li>  
              ))}
          </ul>
          {/* <div className='next-container'> 
            <button className={`next-btn ${isVisible ? '' : 'hidden'}`} onClick={nextQuest}>następne pytanie</button> 
          </div> */}
          <div className='book-logo'>
            <img src={logo} alt='book-title' className='img-title'></img>
          </div>

        </div>
  )
};

    export default Question;