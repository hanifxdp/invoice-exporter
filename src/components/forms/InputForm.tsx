import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { TypeProps } from "./TypeProps";

const InputForm = ({
	label,
	placeholder,
	name,
	type,
	disabled,
	required,
	error,
	value,
}: TypeProps) => {
	const { register } = useFormContext();
	return (
		<FormControl flexGrow={1} isInvalid={Boolean(error)}>
			{label && <FormLabel>{label}</FormLabel>}
			<Input
				type={type}
				value={value}
				placeholder={placeholder}
				disabled={disabled}
				{...register(name, { required })}
			/>
			{error && <FormErrorMessage>{error}</FormErrorMessage>}
		</FormControl>
	);
};
export default InputForm;
