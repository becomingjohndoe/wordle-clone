import { useState } from "react";
import { Keyboard } from "./Keyboard";
import { Row } from "./Row";
import { WORDS } from "../constants/wordList";
export const Game = () => {
	const [tick, setTick] = useState(0);
	const [word, setWord] = useState(
		WORDS[Math.floor((Date.now() - 1641013200000) / 86400000)]
			.toUpperCase()
			.split("")
	);
	const [enterPressed, setEnterPressed] = useState([
		false,
		false,
		false,
		false,
		false,
		false,
	]);
	const [guesses, setGuesses] = useState([
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
	]);
	const [keyboardGuesses, setKeyboardGuesses] = useState({});

	const checkWin = (): boolean => {
		if (JSON.stringify(word) === JSON.stringify(guesses[tick])) {
			return true;
		}
		if (tick === 5) alert("You Lose!");
		return false;
	};

	return (
		<div className="main">
			<Row
				guesses={guesses}
				word={word}
				enterPressed={enterPressed}
				keyboardGuesses={keyboardGuesses}
				setKeyboardGuesses={setKeyboardGuesses}
			/>
			<Keyboard
				setGuesses={setGuesses}
				tick={tick}
				guesses={guesses}
				checkWin={checkWin}
				setTick={setTick}
				setEnterPressed={setEnterPressed}
				enterPressed={enterPressed}
				word={word}
			/>
		</div>
	);
};
