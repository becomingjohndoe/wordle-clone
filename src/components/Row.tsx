import { useState } from "react";
import { Cell } from "./Cell";
export const Row = () => {
	const [guesses, setGuesses] = useState([
		["R", "E", "A", "C", "T"],
		["R", "E", "A", "C", "T"],
		["R", "E", "A", "C", "T"],
		["R", "E", "A", "C", "T"],
		["R", "E", "A", "C", "T"],
		["R", "E", "A", "C", "T"],
	]);
	return (
		<div className="row">
			{guesses.map((guess, index) => {
				return guess.map((letter, index) => {
					return <Cell value={letter} key={index} />;
				});
			})}
		</div>
	);
};
