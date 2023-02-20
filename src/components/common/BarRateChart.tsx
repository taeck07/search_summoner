import styled from "styled-components";

const BarRateChartContainer = styled.div<BarRateChartType>`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    >.right {
        width: 100%;
        height: 100%;
        background-color: ${props => props.rightColor || props.theme.color.coral};
        padding-left: ${props => props.rate}%;
    }
    >.left {
        width: ${props => props.rate}%;
        height: 100%;
        background-color: ${props => props.leftColor || props.theme.color.bluish};
        position: absolute;
        top:0;
        left:0;
    }
`;
const TextWrap = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 4px;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    align-items: center;
`;

export interface BarRateChartType {
    leftColor?: string;
    rightColor?: string;
    fontStyle?: React.CSSProperties;
    barStyle?: React.CSSProperties;
    rate: number;
    leftText?: string;
    rightText?: string;
}

export const BarRateChart = ({barStyle, fontStyle, leftText, rightText, ...properties}:BarRateChartType) => {
	return <BarRateChartContainer style={barStyle} {...properties}>
		<div className="right"><TextWrap style={fontStyle}><span>{rightText}</span></TextWrap></div>
		<div className="left"><TextWrap style={fontStyle}><span>{leftText}</span></TextWrap></div>
	</BarRateChartContainer>;
};