import type {JSX} from "react";

type NewGameButtonProps = {
  isGameOver: boolean;
  startNewGame: () => void;
}

const NewGameButton = ({ isGameOver, startNewGame }: NewGameButtonProps): JSX.Element | null => {
  if (!isGameOver) return null;
  return (
    <button className="new-game" onClick={startNewGame}>
      New Game
    </button>
  );
};

export default NewGameButton;
