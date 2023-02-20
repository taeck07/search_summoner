import { ReactElement } from "react";
import styled from "styled-components";

type ButtonStyleType = "icon" | "default";

type ButtonPropTypes = {
    type?: ButtonStyleType;
    children?: ReactElement | string;
};
const StyledButton = styled.button<{ styleType: ButtonStyleType }>`
    border-radius: 2px;
    border: solid 1px #d0d3d4;
    background-color: #e0e3e3;
    padding: 4px 5px;
    ${props => props.styleType === "default" && props.theme.border.default}
`;


const Button = ({ type = "default", children }: ButtonPropTypes) => {
	return <StyledButton styleType={type}>{children}</StyledButton>;

};

export { Button };