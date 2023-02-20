import styled from "styled-components";
import { MatchGameType } from "../../types/summonerTypes";
import { getKda } from "../../utils/getKda";

const GameKillDethInfoContainer = styled.div`
	p {
		text-align: center;
	}
	>div {
		display: flex;
		gap: 3px;
		justify-content: center;
	}
`;

const Badge = styled.div`
    width: fit-content;
    height: auto;
    border-radius: 9px;
    border: solid 1px #bf3b36;
    background-color: #ec4f48;
    font-size: 10px;
    color: #fff;
    padding: 3px 5px;

`;

const GameKillDeathInfo = ({game} : {game: MatchGameType}) => {
	const {stats : {general: {kill, death, assist, opScoreBadge, largestMultiKillString, kdaString}}} = game;
	return <GameKillDethInfoContainer>
		<p>{kill}/{assist}/{death}</p>
		<p>{kdaString}</p>
		<div>
			{largestMultiKillString && <Badge>{largestMultiKillString}</Badge>}
			{opScoreBadge && <Badge>{opScoreBadge}</Badge>}
		</div>
	</GameKillDethInfoContainer>;
};

export {GameKillDeathInfo};