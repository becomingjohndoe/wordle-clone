import { Key } from "./Key";
import React from "react";
type Props = {
	setGuesses: (guesses: string[][]) => void;
	guesses: string[][];
	tick: number;
	checkWin: () => boolean;
	setTick: (tick: number) => void;
};

export const Keyboard = ({
	setGuesses,
	tick,
	guesses,
	checkWin,
	setTick,
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
		if (checkWin()) alert("You Win!");
		else setTick(tick + 1);
	};

	return (
		<div>
			<div className="keyboard-row">
				<Key value="Q" onClick={handleClick} />
				<Key onClick={handleClick} value="W" />
				<Key onClick={handleClick} value="E" />
				<Key onClick={handleClick} value="R" />
				<Key onClick={handleClick} value="T" />
				<Key onClick={handleClick} value="Y" />
				<Key onClick={handleClick} value="U" />
				<Key onClick={handleClick} value="I" />
				<Key onClick={handleClick} value="O" />
				<Key onClick={handleClick} value="P" />
			</div>
			<div className="keyboard-row">
				<Key onClick={handleClick} value="A" />
				<Key onClick={handleClick} value="S" />
				<Key onClick={handleClick} value="D" />
				<Key onClick={handleClick} value="F" />
				<Key onClick={handleClick} value="G" />
				<Key onClick={handleClick} value="H" />
				<Key onClick={handleClick} value="J" />
				<Key onClick={handleClick} value="K" />
				<Key onClick={handleClick} value="L" />
			</div>
			<div className="keyboard-row">
				<Key onClick={handleEnter} value="ENTER" />

				<Key onClick={handleClick} value="Z" />
				<Key onClick={handleClick} value="X" />
				<Key onClick={handleClick} value="C" />
				<Key onClick={handleClick} value="V" />
				<Key onClick={handleClick} value="B" />
				<Key onClick={handleClick} value="N" />
				<Key onClick={handleClick} value="M" />
				<Key onClick={handleClick} value="DELETE" />
			</div>
		</div>
	);
};
