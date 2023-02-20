import { ReactElement } from "react";
import styled from "styled-components";


const TemplateContainer = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    min-height: 100vh;
    background-color: #eaeaea;
`;

const TemplateHeader = styled.header`
    width: 100%;
    height: 97px;
    padding: 12px 0;
    background-color: #1ea1f7;
    > div {
        height: 100%;
        display: flex;
        justify-content: space-between;
        ${props => props.theme.templateStyle.width};
        >div:last-of-type {
            align-self: flex-end;
        }
    }
`;

const TemplateBody = styled.div`
    position: relative;
    width:100%;
    height: auto;
    padding-bottom: 50px;
`;

type PropTypes = {
    rightChild?: ReactElement;
    title?: string;
    children: ReactElement
};

const Template = ({ rightChild, title = "", children }: PropTypes) => {
	return <TemplateContainer>
		<TemplateHeader>
			<div>
				<div>{title}</div>
				<div>{rightChild}</div>
			</div>
		</TemplateHeader>
		<TemplateBody>{children}</TemplateBody>
	</TemplateContainer>;
};

export default Template;