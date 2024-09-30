import { useGameManagerContext } from "../contexts/GameManagerContext";

export default function GameoverModal() {

    const { closeGameoverModal } = useGameManagerContext()
  
  return (
    <div className="flex fixed top-0 left-0 right-0 bottom-0">
        <div className="flex justify-center items-center bg-yellow-50/80 h-full w-full">
            
            <strong
                className="text-8xl "
            >GAMEOVER</strong>

            <button onClick={closeGameoverModal}>fechar</button>
            
        </div>
    </div>
  );
}
