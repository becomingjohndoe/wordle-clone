import { useState } from "react";
import { Cell } from "./Cell";
export const Row = () => {
	const [word, setWord] = useState(["R", "E", "A", "C", "T"]);
	const [guesses, setGuesses] = useState([
		["E", "R", "A", "C", "T"],
		["R", "E", "A", "C", "p"],
		["R", "E", "A", "C", "T"],
		["R", "E", "A", "C", "T"],
		["R", "E", "A", "C", "T"],
		["R", "E", "A", "C", "T"],
	]);

	// check if guess was correct
	const checkGuess = (letter: string, row: number): string => {
		if (letter === word[row]) return "correct";
		else if (guesses[row].includes(letter)) return "includes";
		return "incorrect";
	};

	return (
		<div className="row">
			{guesses.map((guess, index) => {
				return guess.map((letter, row) => {
					return <Cell state={checkGuess(letter, row)} value={letter} key={row} />;
				});
			})}
		</div>
	);
};
