import React, {useState} from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Snowfall from 'react-snowfall'
import Home from './components/Home';
import Quiz from './components/Quiz';
import Final from './components/Final';
import NotFound from './components/NotFound';
// import Fquiz from './components/FquizMain';


function App() {
  const [score, setScore] = useState(0);
  const [number, setNumber] = useState(0);
  const [isFinished, setFinished] = useState(false);
  // const [isFine, setFine];
  
  let startSnow;
  if (window.innerWidth > 1100) {
    startSnow = 500;
  } else if (window.innerWidth > 750) {
    startSnow = 300;
  } else {
    startSnow = 0;
  }
  // const [snowflake, setSnowflake] = useState(startSnow);
  console.log(startSnow);
  const snowflake = startSnow;
  return (
  <>
    <Snowfall color="white" snowflakeCount={snowflake}/>
    {/* <Main /> */}
      <Router>
        <Switch>
              <Route exact path ='/' component={()=> <Home 
              // snowflake={snowflake} setSnowflake={setSnowflake} 
              />} />
              <Route path='/quiz' component={()=> <Quiz setScore={setScore} score={score} 
                number={number} setNumber={setNumber} 
                isFinished={isFinished} setFinished={setFinished} 
                // snowflake={snowflake} setSnowflake={setSnowflake} 
                />} />
              {/* <Route path='/quiz' component={()=> <Fquiz 
              // setScore={setScore} score={score} 
              />} /> */}
              <Route path='/final' component={()=> <Final 
              setScore={setScore} score={score} 
              setFinished={setFinished} 
              // snowflake={snowflake} setSnowflake={setSnowflake} 
              />} />
              <Route component={()=> <NotFound />} />
        </Switch>
    </Router> 
  </>

  );
}

export default App;
