import LetterButton from "./LetterButton"

const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'W', 'X', 'Y', 'Z']

const clickMax = 1

export default function LettersBoard() {

  return (
    <div
      className="bg-gray-200 flex flex-wrap justify-center gap-4 p-4 "
    >
      {
        alpha.map(letter => {
          return (
            <LetterButton
              letter = {letter} 
              key = {letter} 
              clicksMax = {clickMax}
            /> )
        }) 
      }
    
    </div>
  )
}