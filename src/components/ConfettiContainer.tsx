import type { JSX } from "react"
import Confetti from "react-confetti"

const ConfettiContainer = ({isGameWon}: {isGameWon: boolean}): JSX.Element | null => {
    if(!isGameWon) return null
  return (
   <Confetti 
    numberOfPieces={1000}
    recycle={false}
   />
  )
}

export default ConfettiContainer
