import { Key } from "./Key";
import React from "react";
import { checkGuess } from "./Row";
type Props = {
	setGuesses: (guesses: string[][]) => void;
	guesses: string[][];
	tick: number;
	checkWin: () => boolean;
	setTick: (tick: number) => void;
	setEnterPressed: (enterPressed: boolean[]) => void;
	enterPressed: boolean[];
	word: string[];
};

export const Keyboard = ({
	setGuesses,
	tick,
	guesses,
	checkWin,
	setTick,
	setEnterPressed,
	enterPressed,
	word,
}: Props) => {
	const handleClick = (e: React.MouseEvent<Element>) => {
		if (e) {
			const newguesses: string[][] = [...guesses];
			const turn: number = newguesses[tick].findIndex((e) => e === "");
			newguesses[tick][turn] = e.currentTarget.innerHTML;
			setGuesses(newguesses);
		}
	};

	const handleEnter = () => {
		const newEnterPressed: boolean[] = [...enterPressed];
		newEnterPressed[tick] = true;
		setEnterPressed(newEnterPressed);
		if (checkWin()) alert("You Win!");
		else {
			setTick(tick + 1);
		}
	};

	const handleDelete = () => {
		const newguesses: string[][] = [...guesses];
		const turn: number = newguesses[tick].findIndex((e) => e === "");
		turn === -1 ? (newguesses[tick][4] = "") : (newguesses[tick][turn - 1] = "");
		setGuesses(newguesses);
	};

	const checkStatus = (letter: string): string => {
		let includedInGuess = guesses.some((e) => e.indexOf(letter) !== -1);
		let correctGuess = guesses.some(
			(e) => e.indexOf(letter) !== -1 && e.indexOf(letter) === word.indexOf(letter)
		);
		let indexInGuesses = 0;
		guesses.forEach((e, i) => {
			if (e.indexOf(letter) !== -1) {
				indexInGuesses = i;
			}
		});
		if (enterPressed[indexInGuesses]) {
			if (correctGuess) {
				return "correct";
			} else if (includedInGuess && word.includes(letter)) return "includes";
			else if (includedInGuess) return "incorrect";
		}
		return "";
	};

	return (
		<div>
			<div className="keyboard-row">
				<Key value="Q" onClick={handleClick} status={checkStatus} />
				<Key onClick={handleClick} value="W" status={checkStatus} />
				<Key onClick={handleClick} value="E" status={checkStatus} />
				<Key onClick={handleClick} value="R" status={checkStatus} />
				<Key onClick={handleClick} value="T" status={checkStatus} />
				<Key onClick={handleClick} value="Y" status={checkStatus} />
				<Key onClick={handleClick} value="U" status={checkStatus} />
				<Key onClick={handleClick} value="I" status={checkStatus} />
				<Key onClick={handleClick} value="O" status={checkStatus} />
				<Key onClick={handleClick} value="P" status={checkStatus} />
			</div>
			<div className="keyboard-row">
				<Key onClick={handleClick} value="A" status={checkStatus} />
				<Key onClick={handleClick} value="S" status={checkStatus} />
				<Key onClick={handleClick} value="D" status={checkStatus} />
				<Key onClick={handleClick} value="F" status={checkStatus} />
				<Key onClick={handleClick} value="G" status={checkStatus} />
				<Key onClick={handleClick} value="H" status={checkStatus} />
				<Key onClick={handleClick} value="J" status={checkStatus} />
				<Key onClick={handleClick} value="K" status={checkStatus} />
				<Key onClick={handleClick} value="L" status={checkStatus} />
			</div>
			<div className="keyboard-row">
				<Key onClick={handleEnter} value="ENTER" status={checkStatus} />

				<Key onClick={handleClick} value="Z" status={checkStatus} />
				<Key onClick={handleClick} value="X" status={checkStatus} />
				<Key onClick={handleClick} value="C" status={checkStatus} />
				<Key onClick={handleClick} value="V" status={checkStatus} />
				<Key onClick={handleClick} value="B" status={checkStatus} />
				<Key onClick={handleClick} value="N" status={checkStatus} />
				<Key onClick={handleClick} value="M" status={checkStatus} />
				<Key onClick={handleDelete} value="DELETE" status={checkStatus} />
			</div>
		</div>
	);
};
