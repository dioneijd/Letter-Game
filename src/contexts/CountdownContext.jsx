import { createContext, useEffect, useState } from "react";


const defaultTimeInSeconds = 10


export const CountdownContext = createContext({} )

export function CountdownProvider({ children }){

      const [time, setTime] = useState(defaultTimeInSeconds) // seconds
      const [isActive, setIsActive] = useState(false)
      const [hasFinished, setHasFinished] = useState(false)

      const seconds = Math.floor(time % 60)

      let countdownTimeout


      function startCountdown(){
          console.log('dionei')
          setIsActive(true)
      }

      function resetCountdown(){
          setIsActive(false)
          setTime(defaultTimeInSeconds)
      }

      useEffect(() => {

        if (isActive && time > 0){
            countdownTimeout = setTimeout(() => {

                console.log(`dft: ${defaultTimeInSeconds} | time: ${time} `)
                setTime(time - 1)
            }, 1000)
        }
        else if (isActive && time == 0) {
            setHasFinished(true)
            setIsActive(false)
        }

      }, [ isActive, time ])

    return (
        <CountdownContext.Provider 
            value={{
                seconds,
                hasFinished,
                isActive,
                startCountdown,
                resetCountdown
            }}>
                {children}
        </CountdownContext.Provider>
    )    
}