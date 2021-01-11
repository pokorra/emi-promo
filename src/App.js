import React, {useState} from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
// import useWindowWidth from './components/useWindowWidth'
import Snowfall from 'react-snowfall'
import Home from './components/Home';
import Quiz from './components/Quiz';
import Final from './components/Final';
import NotFound from './components/NotFound';


function App() {
  const [score, setScore] = useState(0);
  const [number, setNumber] = useState(0);
  const [isFinished, setFinished] = useState(false);
  
  
  let startSnow;
  if (window.innerWidth > 1100) {
    startSnow = 620;
  } else if (window.innerWidth > 750) {
    startSnow = 420;
  } else {
    startSnow = 60;
  }
  const [snowflake, setSnowflake] = useState(startSnow);

  return (
  <>
    <Snowfall color="white" snowflakeCount={snowflake}/>
      <Router>
        <Switch>
              <Route exact path ='/' component={()=> <Home snowflake={snowflake} setSnowflake={setSnowflake} />} />
              <Route path='/quiz' component={()=> <Quiz setScore={setScore} score={score} number={number} setNumber={setNumber} isFinished={isFinished} setFinished={setFinished} snowflake={snowflake} setSnowflake={setSnowflake} />} />
              <Route path='/final' component={()=> <Final setScore={setScore} score={score} setFinished={setFinished} snowflake={snowflake} setSnowflake={setSnowflake} />} />
              <Route component={()=> <NotFound setSnowflake={setSnowflake} />} />
        </Switch>
    </Router> 
  </>

  );
}

export default App;
