import { createContext, useContext, useState } from "react";

export const GameSettingsContext = createContext({});

export function GameSettingsProviderCtx({ children }) {
    const [answerTime, setAnswerTime] = useState(15);
    const [maxLetterUsage, setMaxLetterUsage] = useState(1);

    return (
        <GameSettingsContext.Provider
            value={{
                answerTime,
                setAnswerTime,
                maxLetterUsage,
                setMaxLetterUsage,
            }}
        >
            {children}
        </GameSettingsContext.Provider>
    );
}

export function useGameSettingsContext() {
    return useContext(GameSettingsContext);
}
