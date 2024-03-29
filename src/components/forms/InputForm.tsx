import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { TypeProps } from "./TypeProps";

const InputForm = ({
	id,
	label,
	placeholder,
	name,
	type,
	disabled,
	required,
	error,
	value,
	onChange,
	isRequired,
}: TypeProps) => {
	const { register } = useFormContext();
	return (
		<FormControl flexGrow={1} isInvalid={Boolean(error)}>
			{label && <FormLabel>{label}</FormLabel>}
			<Input
				id={id}
				type={type}
				value={value}
				placeholder={placeholder}
				disabled={disabled}
				{...register(id, { required, onChange })}
				isRequired={isRequired}
			/>
			{error && <FormErrorMessage>{error}</FormErrorMessage>}
		</FormControl>
	);
};
export default InputForm;
