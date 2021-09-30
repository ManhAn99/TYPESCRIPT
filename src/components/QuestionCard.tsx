import React from 'react'
import {Wrapper,ButtonWrapper} from './QuestionCard.styles'
import { AnswerObject} from '../App'
type Props = {
    question : string;
    answers : string[];
    checkAnswer  : any;
    userAnswer : AnswerObject | undefined;
    totalQuestion : number;
    questionNumber : number
}

const QuestionCard : React.FC<Props> = ({question,answers,checkAnswer,userAnswer,totalQuestion,questionNumber}) => {
    return (
        <Wrapper>
            <p className="nunber">
                Question : {questionNumber} / {totalQuestion}
            </p>
            <p dangerouslySetInnerHTML = {{ __html : question}} />
            <div>
                {
                    answers.map(answer => (
                        <ButtonWrapper 
                          correct = {answer === userAnswer?.correctAnswer }
                          userClicked = {answer === userAnswer?.answer}
                          key = {answer} >
                           <button disabled = {userAnswer ? true : false} onClick = {checkAnswer} value = {answer}>
                               <span dangerouslySetInnerHTML = {{ __html : answer}} />
                           </button>
                        </ButtonWrapper>
                    ))
                }
            </div>
        </Wrapper>
    )
}

export default QuestionCard
