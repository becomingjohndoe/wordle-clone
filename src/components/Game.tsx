import { useState } from "react";
import { Keyboard } from "./Keyboard";
import { Row } from "./Row";
export const Game = () => {
	const [tick, setTick] = useState(0);
	const [word, setWord] = useState(["R", "E", "A", "C", "T"]);
	const [guesses, setGuesses] = useState([
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
	]);

	const checkWin = (): boolean => {
		if (JSON.stringify(word) === JSON.stringify(guesses[tick])) {
			return true;
		}
		return false;
	};

	return (
		<div className="main">
			<Row guesses={guesses} word={word} />
			<Keyboard
				setGuesses={setGuesses}
				tick={tick}
				guesses={guesses}
				checkWin={checkWin}
				setTick={setTick}
			/>
		</div>
	);
};
