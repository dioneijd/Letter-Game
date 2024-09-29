import LettersBoard from "../components/LettersBoard";
import CountdownTimer from "../components/CountdownTimer";
import { useGameManagerContext } from "../contexts/GameManagerContext";

export default function Game() {
  const { question } = useGameManagerContext();

  return (
    <>
      <div className="flex justify-evenly w-full mt-4 mb-4">
        <CountdownTimer />

        <h1 className="text-4xl font-bold w-screen text-center">{question}</h1>
      </div>

      <LettersBoard />
    </>
  );
}
