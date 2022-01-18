import { useState } from "react";
import { Cell } from "./Cell";
type Props = {
	guesses: string[][];
	word: string[];
};

export const Row = ({ guesses, word }: Props) => {
	// check if guess was correct
	const checkGuess = (letter: string, row: number): string => {
		if (letter === word[row]) return "correct";
		else if (word.includes(letter)) return "includes";
		return "incorrect";
	};
	return (
		<div className="row">
			{guesses.map((guess) => {
				return guess.map((letter, row) => {
					return <Cell state={checkGuess(letter, row)} value={letter} key={row} />;
				});
			})}
		</div>
	);
};
