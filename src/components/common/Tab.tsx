import styled from "styled-components";
import { TabHeader, TabHeaderPropTypes } from "./TabHeader";
import { ReactElement, useState } from "react";

const TabContainer = styled.div<{height?: string}>`
    width: 100%;
    height: ${props => props.height || "auto"};
    display: flex;
    flex-direction: column;
    flex: 0 1;
    border: ${props =>  props.theme.border.default};
`;


const TabBody = styled.div<{length: number, tabIndex: number}>`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    border-top: ${props =>  props.theme.border.default};
    margin-top: -1px;
    z-index: 0;
    >div {
        position: absolute;
        transition: all ease 0.3s;
        transform: translateX(${props => 1/props.length*(-100)*props.tabIndex}%);
        width: ${props => props.length*100}%;
        height: 100%;
        display: flex;
        >div {
            width:${props => 1/props.length*100}%;
            height: 100%;
            display: inline-block;
            overflow: auto;
        }
    }
`;

type TabPropTypes = {
    tabElements: ReactElement[];
    height?: string;
} & TabHeaderPropTypes;

const Tab = ({tabElements, tabTitleList, handleTabChanged=() => {}, headerFullWidth, height= "200px"}: TabPropTypes) => {
	const [tabIndex, setTabIndex] = useState(0);
	const handleTabIndexChanged = (index: number) => {
		handleTabChanged(index);
		setTabIndex(index);
	};
	return <TabContainer height={height}>
		<TabHeader tabIndex={tabIndex} tabTitleList={tabTitleList} handleTabChanged={handleTabIndexChanged} headerFullWidth={headerFullWidth}/>
		<TabBody length={tabElements.length} tabIndex={tabIndex}>
			<div>
				{
					tabElements.map(element => <div key={element.key}>{element}</div>)
				}
			</div>
		</TabBody>
	</TabContainer>;
};

export {Tab};