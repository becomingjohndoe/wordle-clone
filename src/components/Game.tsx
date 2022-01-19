import { useState } from "react";
import { Keyboard } from "./Keyboard";
import { Row } from "./Row";
export const Game = () => {
	const [tick, setTick] = useState(0);
	const [word, setWord] = useState(["R", "E", "A", "C", "T"]);
	const [guesses, setGuesses] = useState([
		["", "", "", "", ""],
		["R", "E", "A", "C", "p"],
		["R", "E", "A", "C", "T"],
		["R", "E", "A", "C", "T"],
		["R", "E", "A", "C", "T"],
		["", "", "", "", ""],
	]);

	return (
		<div className="main">
			<Row guesses={guesses} word={word} />
			<Keyboard setGuesses={setGuesses} tick={tick} guesses={guesses} />
		</div>
	);
};
