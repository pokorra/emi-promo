import React, { Component } from 'react';
import Fquestion from './Fquestion';
import Fanswer from './Fanswer';
import {Link} from 'react-router-dom';

class Fquiz extends Component {

    state = {
        questions: {
            1: 'Jak brzmi pełne imię i nazwisko Emi?',
            2: 'Jak nazywa się pies cioci Juli, który często bywa u Gacków?',
            3: 'Gdzie w pierwszym tomie przygód cyklu „Dookoła świata” wyruszyli przyjaciele?'
        },
        answers: {
            1: {
                1: 'Aniela Kowalska',
                2: 'Stanisława Emilia Gacek',
                3: 'Agnieszka Zakrzewska'
            },
            2: {
                1: 'Czekolada',
                2: 'Żelek',
                3: 'Lizak'
            },
            3: {
                1: 'Do Teksasu',
                2: 'Do Kalifornii',
                3: 'Na Alaskę'
            }
        },
        correctAnswers: {
            1: '2',
            2: '1',
            3: '2'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
            console.log(score);
            
        } else {
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            })
        }
    }

    nextStep = step => {
        this.setState({
            step: step +1,
            correctAnswer: 0,
            clickedAnswer: 0
        })
        // this.props.setScore(score);
        // console.log(this.props.score);
    }

    render() {
        let { questions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        // let {score, setScore} = this.props;
        return (
            <div> 
                { step <= Object.keys(questions).length ? 
               ( <div className='quiz'>
               <Fquestion 
                    question={questions[step]}
                    step={step}
                />
                <Fanswer
                    answer={answers[step]}
                    step={step} 
                    checkAnswer={this.checkAnswer}
                    correctAnswer={correctAnswer}
                    clickedAnswer={clickedAnswer}
                    />
                <div className='next-container'> 
                    <button className={`next-btn `}
                        disabled={
                            clickedAnswer && Object.keys(questions).length >= step ? false : true
                        }
                        onClick={() => {this.nextStep(step)}}
                    >
                        następne pytanie</button> 
                </div> 
                </div>) : (
                <div className={`done`}>
                    {/* <Snow snowflake={snowflake} setSnowflake={setSnowflake}/> */}
                    <div className='appear'>
                    <p> Gratulacje, udało Ci się ukończyć quiz! </p>
                    <p>Twój wynik to: {score} / 10!</p>
                <Link to='/final'> <button className='butt'> Sprawdź, co dalej! </button> </Link>
            </div>
        </div> )
            }
            </div>
                
        )
    }
}

export default Fquiz;