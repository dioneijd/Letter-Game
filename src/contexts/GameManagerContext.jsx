import { createContext, useState, useEffect, useContext } from "react";
import questions from "../data/questions.json";

import GameoverModal from "../components/GameoverModal"



export const GameManagerContext = createContext({});

export function GameManagerProviderCtx({ children }) {
    const [question, setQuestion] = useState("")
    const [isPlaying, setIsplaying] = useState(false)    
    const [isGameoverModalOpen, setIsGameoverModalOpen] = useState(false)

    useEffect(() => {
        refreshQuestion()
    }, [])

    function refreshQuestion() {
        const id = Math.floor(Math.random() * questions.length)
        setQuestion(questions[id])
    }

    function startGame() {
        setIsplaying(true)
    }

    function gameOver(){
        setIsplaying(false)
        setIsGameoverModalOpen(true)
    }

    function closeGameoverModal(){
        setIsGameoverModalOpen(false)
    }

    return (
        <GameManagerContext.Provider
            value={{
                question,
                refreshQuestion,
                setQuestion,

                isPlaying,
                startGame,
                gameOver,
                closeGameoverModal
            }}
        >
            
            { children }            
            { isGameoverModalOpen && <GameoverModal /> }

        </GameManagerContext.Provider>
    );
}

export function useGameManagerContext() {
    return useContext(GameManagerContext);
}
