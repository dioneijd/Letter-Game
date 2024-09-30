import "./App.css";

import Initial from "./pages/Initial";
import Game from "./pages/Game";

import { useGameManagerContext } from "./contexts/GameManagerContext";
import { useCountdownContext } from "./contexts/CountdownContext";
import { useEffect } from "react";

export default function App() {
  const { isPlaying, gameOver } = useGameManagerContext();

  const { hasFinished } = useCountdownContext()

  useEffect(() => {
    if( hasFinished ){
      gameOver()
    }

  }, [hasFinished])


  return (
    <main>
      {!isPlaying && <Initial />}

      {isPlaying && <Game />}
    </main>
  );
}
