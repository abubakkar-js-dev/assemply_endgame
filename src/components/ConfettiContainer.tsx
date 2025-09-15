import Confetti from "react-confetti"

const ConfettiContainer = ({isGameWon}) => {
    if(!isGameWon) return null
  return (
   <Confetti 
    numberOfPieces={1000}
    recycle={false}
   />
  )
}

export default ConfettiContainer
