import {
	FormControl,
	FormLabel,
	Select,
	FormErrorMessage,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { TypeProps } from "./TypeProps";

const SelectInput = ({
	label,
	placeholder,
	name,
	option,
	required,
	error,
	value,
}: TypeProps) => {
	const { register } = useFormContext();
	return (
		<FormControl isInvalid={Boolean(error)}>
			<FormLabel>{label}</FormLabel>
			<Select
				value={value}
				placeholder={placeholder}
				{...register(name, {
					required: {
						value: !!required,
						message: `${name} is required`,
					},
				})}
			>
				{option?.map((item) => (
					<option key={item.value} value={item.value}>
						{item.label}
					</option>
				))}
			</Select>
			<FormErrorMessage>{error}</FormErrorMessage>
		</FormControl>
	);
};

export default SelectInput;
