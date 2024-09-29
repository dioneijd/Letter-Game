import { createContext, useState, useEffect, useContext } from "react";
import questions from "../data/questions.json";

export const GameManagerContext = createContext({});

export function GameManagerProviderCtx({ children }) {
    const [question, setQuestion] = useState("");

    const [isPlaying, setIsplaying] = useState(false);

    useEffect(() => {
        refreshQuestion();
    }, []);

    function refreshQuestion() {
        const id = Math.floor(Math.random() * questions.length);
        setQuestion(questions[id]);
    }

    function startGame() {
        setIsplaying(true);
    }

    return (
        <GameManagerContext.Provider
            value={{
                question,
                refreshQuestion,
                setQuestion,

                isPlaying,
                startGame,
            }}
        >
            {children}
        </GameManagerContext.Provider>
    );
}

export function useGameManagerContext() {
    return useContext(GameManagerContext);
}
