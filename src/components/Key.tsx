import { AiOutlineEnter } from "react-icons/ai";
import { BsBackspace } from "react-icons/bs";

interface KeyProps {
	value: string;
	onClick: (e: React.MouseEvent<Element>) => void;
	status: (letter: string) => string;
}

export const Key = ({ value, onClick, status }: KeyProps) => {
	return (
		<div
			className={`key ${status(value)}`}
			onClick={(e) => {
				if (e) onClick(e);
			}}
		>
			{value === "DELETE" ? (
				<BsBackspace />
			) : value === "ENTER" ? (
				<AiOutlineEnter />
			) : (
				value
			)}
		</div>
	);
};
