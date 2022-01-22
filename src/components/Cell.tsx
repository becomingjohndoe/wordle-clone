type Props = {
	value: string;
	state: string;
};

export const Cell = ({ value, state }: Props) => {
	return <div className={`cell ${state}`}>{value}</div>;
};
