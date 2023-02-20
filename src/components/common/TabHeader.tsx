import MuiTabs from "@mui/material/Tabs";
import MuiTab from "@mui/material/Tab";
import styled, {css} from "styled-components";

const TabContainer = styled.div<{height?: string; fullWidth: boolean}>`
    width: 100%;
    height: ${props => props.height || "auto"};
	z-index: 10;
	${props => props.fullWidth && css`
		span {
			background-color: ${props => props.theme.color.white};
		}
	`}
`;

const StyledMuiTab = styled(MuiTab)<{fullWidth: boolean;target: boolean}>`
	${props => props.fullWidth && css`
		border-bottom: 0;
		height: calc(100% + 1px);
		z-index: 11;
		border-right: ${props => props.theme.border.default} !important;
		&:last-of-type {
			border-right: 0;
		}
	`}
`;

export type TabHeaderPropTypes = {
	tabIndex?: number;
    tabTitleList: string[];
	handleTabChanged?: (index: number) => void;
	headerFullWidth?: boolean;
}

const TabHeader = ({tabIndex = 0, tabTitleList, handleTabChanged = () => {}, headerFullWidth = false}:TabHeaderPropTypes) => {
	return <TabContainer fullWidth={headerFullWidth}>
		<MuiTabs value={tabIndex} onChange={(e, index) => handleTabChanged(index)} variant={headerFullWidth ? "fullWidth" : "standard"}>
			{
				tabTitleList.map((title, index) => <StyledMuiTab key={`tab_${index}_${title.trim()}`} label={title} disableRipple={true} target={tabIndex === index} fullWidth={headerFullWidth}/>)
			}
		</MuiTabs>
	</TabContainer>;
};

export {TabHeader};