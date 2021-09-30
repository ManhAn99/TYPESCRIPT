import React,{useState} from 'react';
import {fetchQuizzQuestion} from './API'
import { Difficulty,QuestionState } from './API';
import QuestionCard from './components/QuestionCard';
import { GlobalStyle,Wrapper } from './App.styles';
const TOTAL_QUESTIONS = 15  

export type AnswerObject = {
  correct : boolean;
  question : string;
  answer : string;
  correctAnswer : string
}

function App() {

  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)
  const [loading, setLoading] = useState(false)
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])

  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)

    const newQuestions = await fetchQuizzQuestion(TOTAL_QUESTIONS,Difficulty.EASY)
    setQuestions(newQuestions)
    setScore(0)
    setNumber(0)
    setUserAnswers([])
    setLoading(false)
  }

  const checkAnswer = (e : React.MouseEvent<HTMLButtonElement>) => {
   
    //answers
    const answer = e.currentTarget.value;
    //check correct
    const correct = answer === questions[number].correct_answer
    // if correct increase score to 1
    if(correct) setScore(score + 1)
    // save user's anwer in the array useranswers
    const AnswerObject = {
      question : questions[number].question,
      correct,
      answer,
      correctAnswer : questions[number].correct_answer
    }

    setUserAnswers([...userAnswers,AnswerObject])

  }

  const nextQuestion = () => {
  
    const nextQuestion = number + 1
    if(nextQuestion !== TOTAL_QUESTIONS ) {
      setNumber(nextQuestion)
    }
    else {
      setGameOver(true)
    }
  }
  
   return (
    <>
       <GlobalStyle />
       <Wrapper>
       <h1>REACT QUIZZ</h1>
       {(gameOver || userAnswers.length === TOTAL_QUESTIONS) && <button className="start" onClick = {startTrivia} >Start</button>}
       {!gameOver && <p className = 'score' >Score : {score} </p>}
       { loading && <p>Loading Question ....</p>}
        {
          !gameOver && !loading && (
            <QuestionCard
             question = {questions[number].question}
             answers = {questions[number].answers}
              checkAnswer = {checkAnswer}
             userAnswer = {userAnswers ? userAnswers[number] : undefined}
              totalQuestion = {TOTAL_QUESTIONS}
             questionNumber = {number + 1}
          />
          )
        }
      {!loading && !gameOver && userAnswers.length - 1 === number && number !== TOTAL_QUESTIONS - 1 && (
        <button className="next" onClick = {nextQuestion}>Next Question</button>
      )}
      </Wrapper>
    </>
  );
}

export default App;
