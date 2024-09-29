import LetterButton from "./LetterButton";

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
  const { maxLetterUsage: clickMax } = useGameSettingsContext();

  return (
    <>
      <div className="bg-gray-200 flex flex-wrap justify-center gap-4 p-4">
        {alpha.map((letter) => {
          return (
            <LetterButton key={letter} letter={letter} clicksMax={clickMax} />
          );
        })}
      </div>
    </>
  );
}
