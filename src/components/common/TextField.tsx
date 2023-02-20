import { InputBase } from "@mui/material";
import { ChangeEvent, useEffect, useRef, KeyboardEvent } from "react";
import styled from "styled-components";
import { useFocus } from "../../hooks/common/useFocus";

const StyledMuiTextField = styled(InputBase)`
`;

export type TextFieldType = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    onEnter?: (val: string) => void;
    handleFocus?: (state: boolean) => void
}

export const TextField = ({
	value,
	onChange,
	placeholder="",
	onEnter= () => {},
	handleFocus = () => {}
}:TextFieldType) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isFocus] = useFocus(inputRef);
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const {value} = e.target;
		onChange(value);
	};
	const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			onEnter(value);
		}
	};

	useEffect(() => {
		handleFocus(isFocus as boolean);
	},[isFocus]);

	return <StyledMuiTextField
		inputRef={inputRef}
		onChange={handleChange}
		value={value}
		fullWidth={true}
		size="small"
		placeholder={placeholder}
		inputProps={{onKeyDown:handleKeydown}}/>;
};