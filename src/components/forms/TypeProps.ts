export type TypeProps = {
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
	onChange?: any;
};
