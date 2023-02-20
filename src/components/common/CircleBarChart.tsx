import styled from "styled-components";

const ChartContainer = styled.div`
    width: 100%;
    height: 100%;
    g {
        transform-origin: center;
        transform: rotate(-90deg) translate(10px,10px);
    }
`;


export type CircleBarChartPropTypes = {
    rate: number;
    backgroundColor?: string;
    sectionColor?: string;

};
const CircleBarChart = ({rate = 20, backgroundColor, sectionColor} : CircleBarChartPropTypes) => {
	// 원 길이 C=2 * PI * R = 314
	const getSectionBound = (per:number) => {
		const bound = 2 * 3.14 * 50 * (per / 100);
		return `${bound} ${(2 * 3.14 * 50) - bound}`;
	};
	const bound = getSectionBound(rate);

	return <ChartContainer>
		<svg  xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 120 120">
			<g>
				<circle cx="50" cy="50" r="50" style={{fill:"none",stroke:"#92D050",strokeWidth:10}} />
				<circle  cx="50" cy="50" r="50" stroke="#C0504D" strokeWidth="10" strokeDasharray={bound} strokeDashoffset="" fill="none" />
			</g>
			<text x="50%" y="52%" dominantBaseline="middle" textAnchor="middle">{rate}%</text>
		</svg>
	</ChartContainer>;
};

export {CircleBarChart};