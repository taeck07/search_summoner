import styled from "styled-components";
import { MatchGameType } from "../../types/summonerTypes";
import { getDateKoStr, getTimeKoStr } from "../../utils/getDateStr";

const GameSummaryContainer = styled.div`
    display; flex;
    flex-direction: row;
    align-itmes: center;
    justify-content: center;
    font-size: 11px;
	text-align: center;
`;

const GameSummary = ({game}: {game:MatchGameType}) => {
	const {isWin, createDate, gameLength, gameType, needRenew} = game;
	const createDateStr = getDateKoStr(createDate);
	const gameLengthStr = getTimeKoStr(gameLength);
	const gameResult = needRenew ? "다시하기" : isWin? "승리" : "패배";
	return<GameSummaryContainer>
		<p>{gameType}</p>
		<p>{createDateStr}</p>
		<div></div>
		<p>{gameResult}</p>
		<p>{gameLengthStr}</p>
	</GameSummaryContainer>;
};

export {GameSummary};