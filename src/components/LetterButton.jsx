import { useEffect, useState } from "react";
import { useCountdownContext } from "../contexts/CountdownContext";

export default function LetterButton({ letter, clicksMax }) {
  const { resetCountdown } = useCountdownContext();

  const letterButtonId = `btn-${letter}`;

  let [clickedTimes, setClickedTimes] = useState(0);
  let [isClickable, setIsClickable] = useState(true);

  useEffect(() => {
    if (clickedTimes >= clicksMax) {
      setIsClickable(false);
    }
  }, [clickedTimes]);

  function handleClick() {
    if (clickedTimes < clicksMax) {
      makeCLickEffect();
      setClickedTimes(clickedTimes + 1);
      resetCountdown();
    }
  }

  function makeCLickEffect() {
    const button = document.getElementById(letterButtonId);

    button.classList.add("animate-ping");

    setTimeout(() => {
      button.classList.remove("animate-ping");
    }, 500);
  }

  return (
    <div
      id={letterButtonId}
      className="h-32 w-32 border border-gray-400 rounded shadow "
    >
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
