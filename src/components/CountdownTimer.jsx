import { useState, useEffect, useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'


const defaultTimeInSeconds = 10

export default function CountdownTimer() {
  
  const {
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext)

  console.log(startCountdown)
  console.log(seconds)
  
  return (
    <div className="flex items-center justify-center h-full">

      {
        !isActive &&
        <button
          onClick={startCountdown}
          className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
        >
          Começar
        </button>
      }
      
      {
        isActive
        &&
        <div className="text-4xl font-bold">
          {seconds} segundos
        </div>
      }
      
    </div>
  );
};


