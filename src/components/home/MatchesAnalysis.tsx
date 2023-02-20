
import { MatchSummaryType, MatchType } from "../../types/summonerTypes";
import { MatchRateChart } from "./MatchRateChart";
import styled from "styled-components";
import { MatchChampionInfo } from "./MatchChampionInfo";
import { MatchMostPositionInfo } from "./MatchMostPositionInfo";

const MatchesAnalysisContainer = styled.div`
    display: grid;
    grid-template-columns: auto 230px 185px;
	>div {
		border-right: ${props => props.theme.border.default};
		&:last-of-type {
			border: 0;
		}
	}
`;


type PropTypes = {
    matches?: MatchType;
}

const MatchesAnalysis = ({matches}: PropTypes) => {
	const {games, champions, positions} = matches || {};
	const matchStats = games?.reduce<MatchSummaryType>((pre, curr) => {
		if (curr.isWin) {
			pre.wins += 1;
		} else {
			pre.losses += 1;
		}
		const {stats: {general: {kill, death, assist}}} = curr;
		pre.kills += kill;
		pre.deaths += death;
		pre.assists += assist;
		return pre;
	}, {wins: 0, losses: 0, kills: 0, assists: 0, deaths: 0});

	return <MatchesAnalysisContainer>
		<MatchRateChart matchCount={games?.length || 0} stats={matchStats}/>
		<div>
			<MatchChampionInfo championList={champions || []}/>
		</div>
		<div>
			<MatchMostPositionInfo positions={positions || []}/>
		</div>
	</MatchesAnalysisContainer>;
};
export {MatchesAnalysis};