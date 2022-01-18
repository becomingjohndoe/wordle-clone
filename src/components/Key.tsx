interface KeyProps {
	value: string;
	onClick: (e: React.MouseEvent<Element>) => void;
}

export const Key = ({ value, onClick }: KeyProps) => {
	return (
		<div
			className="key"
			onClick={(e) => {
				if (e) onClick(e);
			}}
		>
			{value}
		</div>
	);
};
