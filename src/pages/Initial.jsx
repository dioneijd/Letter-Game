import { useCountdownContext } from "../contexts/CountdownContext";
import { useGameManagerContext } from "../contexts/GameManagerContext";
import { useGameSettingsContext } from "../contexts/GameSettingsContext";

export default function Initial() {
  const { answerTime, setAnswerTime, maxLetterUsage, setMaxLetterUsage } =
    useGameSettingsContext();
  const { startGame, refreshQuestion, question, setQuestion } =
    useGameManagerContext();

  const { startCountdown } = useCountdownContext();

  function handleStartGame() {
    startGame();
    startCountdown();
  }

  return (
    <div className="h-full w-full flex flex-col items-center">
      <h1 className="w-full text-center text-8xl">LETTER GAME</h1>

      <div className="w-full max-w-sm min-w-[400px] relative mt-6 m-10">
        <input
          className="w-full pr-11 h-16 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md text-center text-4xl mt-20 mb-10"
          placeholder="pergunta é ..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>

      <div className="w-[400px] flex justify-between mb-20">
        <button
          className="w-40 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
          onClick={handleStartGame}
        >
          Começar
        </button>
        <button
          className="w-40 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={refreshQuestion}
        >
          Nova pergunta
        </button>
      </div>

      <div className="w-[400px]">
        <h2 className="font-bold">Configurações</h2>

        <div className="flex p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
            className="mr-2"
          >
            <path d="M419-80q-28 0-52.5-12T325-126L107-403l19-20q20-21 48-25t52 11l74 45v-328q0-17 11.5-28.5T340-760q17 0 29 11.5t12 28.5v472l-97-60 104 133q6 7 14 11t17 4h221q33 0 56.5-23.5T720-240v-160q0-17-11.5-28.5T680-440H461v-80h219q50 0 85 35t35 85v160q0 66-47 113T640-80H419ZM167-620q-13-22-20-47.5t-7-52.5q0-83 58.5-141.5T340-920q83 0 141.5 58.5T540-720q0 27-7 52.5T513-620l-69-40q8-14 12-28.5t4-31.5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 17 4 31.5t12 28.5l-69 40Zm335 280Z" />
          </svg>
          <p className="mr-2">Cliques Máximos</p>
          <input
            type="number"
            value={maxLetterUsage}
            onChange={(e) => setMaxLetterUsage(e.target.value)}
            className="w-14 text-center"
          />
        </div>

        <div className="flex p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
            className="mr-2"
          >
            <path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z" />
          </svg>
          <p className="mr-2">Tempo de resposta (s)</p>
          <input
            type="number"
            value={answerTime}
            onChange={(e) => setAnswerTime(e.target.value)}
            className="w-14 text-center"
          />
        </div>
      </div>
    </div>
  );
}
