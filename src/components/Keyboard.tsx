import { clsx } from "clsx";
import type {JSX} from "react";



type KeyboardProps = {
  alphabet: string;
  guessedLetters: string[];
  currentWord: string;
  isGameOver: boolean;
  addGuessedLetter: (letter: string) => void;
}

const Keyboard = ({
  alphabet,
  guessedLetters,
  currentWord,
  isGameOver,
  addGuessedLetter,
}: KeyboardProps) => {
  const keyboardElements = alphabet.split("").map((letter): JSX.Element => {
    const isGuessed: boolean = guessedLetters.includes(letter);
    const isCorrect: boolean = isGuessed && currentWord.includes(letter);
    const isWrong: boolean = isGuessed && !currentWord.includes(letter);
    const className: string = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        className={className}
        key={letter}
        disabled={isGameOver}
        aria-disabled={isGuessed}
        aria-label={`Letter ${letter}`}
        onClick={() => addGuessedLetter(letter)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  return <section className="keyboard">{keyboardElements}</section>;
};

export default Keyboard;
