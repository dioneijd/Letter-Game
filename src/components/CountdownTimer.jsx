import { useCountdownContext } from "../contexts/CountdownContext";

export default function CountdownTimer() {
  const { isActive, seconds } = useCountdownContext();

  return (
    <div className="flex items-center justify-center h-full">
      {isActive && seconds > 5 && (
        <div className="text-4xl font-bold">{seconds} segundos</div>
      )}

      {isActive && seconds <= 5 && (
        <div className="text-4xl font-bold text-[#fc1703] animate-ping">
          {seconds} segundos
        </div>
      )}
    </div>
  );
}
