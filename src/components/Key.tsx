interface KeyProps {
	value: string;
}

export const Key = ({ value }: KeyProps) => {
	return <div className="key">{value}</div>;
};
