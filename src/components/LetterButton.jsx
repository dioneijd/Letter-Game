
import { useContext, useEffect, useState } from "react"
import { CountdownContext } from "../contexts/CountdownContext"



export default function LetterButton({letter, clicksMax}) {

  const { resetCountdown } = useContext(CountdownContext)
  
  
  let [clickedTimes, setClickedTimes] = useState(0)
  let [isClickable, setIsClickable] = useState(true)

  useEffect(() => {
    if (clickedTimes >= clicksMax) {
      setIsClickable(false)
    }
    
  }, 
    [clickedTimes] 
  )

  
  function handleClick () {
    console.log(isClickable)
    if (clickedTimes < clicksMax) {
      setClickedTimes(clickedTimes + 1)
      resetCountdown()
    }
  }
    
  return (

    <div
      className="h-120 w-20 border border-gray-400 rounded shadow "
    >
      {
        isClickable 
        &&
        <button 
          onClick={ handleClick } 
          className= {'py-2 px-4 h-full w-full bg-blue-500'}
          >
          
            <p className='text-4xl text-white text-gray-800 font-semibold '>
              { letter }
            </p>
          
        </button>
      }
    </div>
  )
}


