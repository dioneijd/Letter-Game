import { useEffect, useState } from 'react'
import './App.css'
import questions from './data/questions.json'
import LettersBoard from './components/LettersBoard'
import CountdownTimer from './components/CountdownTimer'
import { CountdownContext } from './contexts/CountdownContext'


export default function App() {

  const [questionId, setQuestionId] = useState(-1)

  useEffect(() => {
    //getrandowid from questions
    setQuestionId(Math.floor(Math.random() * questions.length))
  }, [])

  
  return (
    <main>
      <CountdownContext.Consumer>
        
        <CountdownTimer/>
        </CountdownContext.Consumer>

        <h1 className="text-3xl font-bold w-screen text-center">
          {
            questions[questionId]
          }
        </h1>

        <LettersBoard/>
        
      

 
    </main>
  )
}
