export type TypeProps = {
	id: string;
	label?: string;
	placeholder: string;
	name: string;
	type?: string;
	disabled?: boolean;
	required?: boolean;
	error?: string;
	value?: string | number;
	option?: {
		value: string;
		label: string;
	}[];
	width?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
