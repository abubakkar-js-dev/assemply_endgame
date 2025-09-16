const NewGameButton = ({ isGameOver, startNewGame }) => {
  if (!isGameOver) return null;
  return (
    <button className="new-game" onClick={startNewGame}>
      New Game
    </button>
  );
};

export default NewGameButton;
