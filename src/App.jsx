import "./App.css";

import Initial from "./pages/Initial";
import Game from "./pages/Game";

import { useGameManagerContext } from "./contexts/GameManagerContext";

export default function App() {
  const { isPlaying } = useGameManagerContext();

  return (
    <main>
      {!isPlaying && <Initial />}

      {isPlaying && <Game />}
    </main>
  );
}
