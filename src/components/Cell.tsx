type Props = {
	value: string;
};

export const Cell = ({ value }: Props) => {
	return <div className="cell">{value}</div>;
};
