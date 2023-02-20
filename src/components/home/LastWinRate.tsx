import styled from "styled-components";
import { RecentWinRateType } from "../../types/summonerTypes";
import { CircleImage } from "../common/CircleImage";
import { BarRateChart } from "../common/BarRateChart";

const LastWinRateContainer = styled.div<{borderBottom: boolean;}>`
    height: 48px;
    border-bottom: ${props => props.borderBottom ? props.theme.border.default : "none"};
    padding: 0 15px;
    display: grid;
    grid-template-columns: 50px 1fr 50px auto;
    align-items: center;
    >div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        >p {
           &:first-of-type {
                font-size: 13px;
                font-weight: bold;
                color: ${props => props.theme.color.brownishGrey};
           }
           &:last-of-type {
                font-size: 13px;
                font-weight: bold;
                color: ${props => props.theme.color.coolGrey};
           }
       }ß
    }

`;

const ChartWrap = styled.div`
    width: 123px;
    height: 24px;
`;

type LastWinRateType = {
    borderBottom?: boolean;
    winRate: RecentWinRateType;
};

type ItemType = "kills"| "deaths" | "assists";

const LastWinRate = ({borderBottom = true, winRate}:LastWinRateType ) => {
	const rate = Math.floor(winRate.wins / (winRate.wins+winRate.losses) * 100);
	return <LastWinRateContainer borderBottom={borderBottom}>
		<CircleImage src={winRate.imageUrl} width={43}/>
		<div>
			<p>{winRate.name}</p>
		</div>
		<div>
			<p>{rate}%</p>
		</div>
		<div>
			<ChartWrap>
				<BarRateChart rate={rate} leftText={`${winRate.wins}승`} rightText={`${winRate.losses}패`}/>
			</ChartWrap>

		</div>
	</LastWinRateContainer>;
};

export {LastWinRate};