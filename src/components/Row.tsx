import { useState } from "react";
import { Cell } from "./Cell";
type Props = {
	guesses: string[][];
	word: string[];
	enterPressed: boolean[];
	keyboardGuesses: {
		[key: string]: string;
	};
	setKeyboardGuesses: (keyboardGuesses: { [key: string]: string }) => void;
};

export const checkGuess = (
	letter: string,
	row: number,
	guessIndex: number,
	guesses: string[][],
	word: string[],
	enterPressed: boolean[],
	setKeyboardGuesses: (keyboardGuesses: { [key: string]: string }) => void,
	keyboardGuesses: { [key: string]: string }
): string => {
	const newKeyboardGuesses = { ...keyboardGuesses };

	if (!guesses[guessIndex].includes("") && enterPressed[guessIndex]) {
		if (letter === word[row]) {
			return "correct";
		} else if (word.includes(letter)) {
			return "includes";
		}
	}

	return "incorrect";
};

export const Row = ({
	guesses,
	word,
	enterPressed,
	setKeyboardGuesses,
	keyboardGuesses,
}: Props) => {
	// check if guess was correct

	return (
		<div className="row">
			{guesses.map((guess, guessIndex) => {
				return guess.map((letter, row) => {
					return (
						<Cell
							state={checkGuess(
								letter,
								row,
								guessIndex,
								guesses,
								word,
								enterPressed,
								setKeyboardGuesses,
								keyboardGuesses
							)}
							value={letter}
							key={row}
						/>
					);
				});
			})}
		</div>
	);
};
