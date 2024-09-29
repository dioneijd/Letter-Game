import { useEffect, useState } from "react";
import { useCountdownContext } from "../contexts/CountdownContext";

export default function LetterButton({ letter, clicksMax }) {
  const { resetCountdown } = useCountdownContext();

  let [clickedTimes, setClickedTimes] = useState(0);
  let [isClickable, setIsClickable] = useState(true);

  useEffect(() => {
    if (clickedTimes >= clicksMax) {
      setIsClickable(false);
    }
  }, [clickedTimes]);

  function handleClick() {
    if (clickedTimes < clicksMax) {
      setClickedTimes(clickedTimes + 1);
      resetCountdown();
    }
  }

  return (
    <div className="h-24 w-24 border border-gray-400 rounded shadow ">
      {isClickable && (
        <button
          onClick={handleClick}
          className={"py-2 px-4 h-full w-full bg-blue-500"}
        >
          <p className="text-4xl text-white text-gray-800 font-semibold ">
            {letter}
          </p>
        </button>
      )}
    </div>
  );
}
