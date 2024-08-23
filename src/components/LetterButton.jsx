
import { useEffect, useState } from "react"



export default function LetterButton({letter, clicksMax}) {

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
    }
  }
    
  return (

    <div
      className="h-20 w-20 border border-gray-400 rounded shadow "
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


