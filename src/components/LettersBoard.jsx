import LetterButton from "./LetterButton";

import { useGameManagerContext } from "../contexts/GameManagerContext";
import { useGameSettingsContext } from "../contexts/GameSettingsContext";

const alpha = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export default function LettersBoard() {
  const { question } = useGameManagerContext();
  const { maxLetterUsage: clickMax } = useGameSettingsContext();

  return (
    <>
      <h1 className="text-3xl font-bold w-screen text-center">{question}</h1>

      <div className="bg-gray-200 flex flex-wrap justify-center gap-4 p-4 ">
        {alpha.map((letter) => {
          return (
            <LetterButton letter={letter} key={letter} clicksMax={clickMax} />
          );
        })}
      </div>
    </>
  );
}
