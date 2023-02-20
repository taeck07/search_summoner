import styled from "styled-components";
import { MatchSummaryType } from "../../types/summonerTypes";
import { CircleBarChart } from "../common/CircleBarChart";
import { getKda } from "../../utils/getKda";

const MatchRateChartContainer = styled.div`
    padding: 16px 24px;
    >p {
        color: ${props => props.theme.color.brownishGreyTwo};
    }
    >div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

const StatsSummary = styled.div`
    text-align: center;
    .high-win-rate {
        color: #c6443e;
    }
    .kda-3 {
        color: #2daf7f;
    }
    .kda-4 {
        color: #1f8ecd;
    }
    .kda-high {
        color: #e19205;
    }
    .high-score {
        color: #e19205;
    }
`;

const ChartWrap = styled.div`
    width: 90px;
    height: 90px;
`;

type PropTypes = {
    matchCount: number;
    stats?: MatchSummaryType;
}

const STATS_DEFAULT = {
	wins: 0,
	kills: 0,
	assists: 0,
	deaths: 0,
	losses: 0,
};

const MatchRateChart = ({matchCount, stats = STATS_DEFAULT}: PropTypes) => {
	const rate = Math.floor(stats.wins/matchCount*100);
	return <MatchRateChartContainer>
		<p></p>
		<div>
			<ChartWrap>
				<CircleBarChart rate={rate}/>
			</ChartWrap>
			<StatsSummary>
				<p>
					<span>{(stats.kills/matchCount).toFixed(2)}</span>/
					<span>{(stats.assists/matchCount).toFixed(2)}</span>/
					<span>{(stats.deaths/matchCount).toFixed(2)}</span>
				</p>
				<p>
					{getKda(stats.kills, stats.assists, stats.deaths)}
				</p>
			</StatsSummary>
		</div>
	</MatchRateChartContainer>;
};

export {MatchRateChart};