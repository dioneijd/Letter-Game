import { createContext, useEffect, useState } from "react";


const defaultTimeInSeconds = 10



export const CountdownContext = createContext({})

export function CountdownProviderCtx({ children }){
    const [time, setTime] = useState(defaultTimeInSeconds) // seconds
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const seconds = Math.floor(time % 60)

    let countdownTimeout
    
    
    function startCountdown(){
        setTime(defaultTimeInSeconds)
        
        setIsActive(true)
    }
    
    function resetCountdown(){
        clearTimeout(countdownTimeout)
        setTime(defaultTimeInSeconds)
    }

    useEffect(() => {

        if (isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        }
        else if (isActive && time == 0) {
            //setHasFinished(true)
            setIsActive(false)
        }

    }, [ isActive, time ])
    
    
    return (
        <CountdownContext.Provider value={{
            isActive,
            seconds,
            
            startCountdown,
            resetCountdown
            
        }}>
            {children}
        </CountdownContext.Provider>
    )    
}