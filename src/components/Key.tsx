interface KeyProps {
	value: string;
}

export const Key = ({ value }: KeyProps) => {
	return <div style={{ width: `58px`, height: "58px" }}>{value}</div>;
};
