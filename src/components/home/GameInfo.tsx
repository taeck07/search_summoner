import styled from "styled-components";
import { GameSummary } from "./GameSummary";
import { MatchGameType } from "../../types/summonerTypes";
import { GameChampionImages } from "./GameChampionImages";
import { GameKillDeathInfo } from "./GameKillDeathInfo";
import { GameItemImages } from "./GameItemImages";
import { GameTeamInfo } from "./GameTeamInfo";

const GameInfoContainer = styled.div<{isWin: boolean; needRenew: boolean;}>`
    width: 100%;
    height: 96px;
    display: grid;
	padding-left: 15px;
    grid-template-columns: 80px 120px 1fr 1fr 100px 155px 30px;
    grid-template-rows: 100%;
    align-items: center;
    background-color: ${props => props.needRenew ? props.theme.color.greyish : props.isWin ? props.theme.color.lightBlueGrey : props.theme.color.pinkishGrey};
	margin-top: 8px;
	border-width: 1px;
	border-style: solid;
	border-color: ${props => props.needRenew ? props.theme.color.greyish : props.isWin ? props.theme.color.lightGreyBlue : props.theme.color.pinkishGreyTwo};
	>div:last-of-type {
		height: 100%;
		background-color: ${props => props.needRenew ? props.theme.color.greyishTwo : props.isWin ? "#7fb0e1" : "#e89c95"};
		border-left: 1px solid ${props => props.needRenew ? props.theme.color.greyish : props.isWin ? props.theme.color.lightGreyBlue : props.theme.color.pinkishGreyTwo};
	}
`;

export const GameInfo = ({game} : {game: MatchGameType}) => {
	const {isWin, needRenew} = game;
	return <GameInfoContainer isWin={isWin} needRenew={needRenew}>
		<GameSummary game={game} />
		<GameChampionImages game={game}/>
		<GameKillDeathInfo game={game}/>
		<div></div>
		<GameItemImages game={game}/>
		<GameTeamInfo summonerName="test" gameId={game.gameId}/>
		<div></div>
	</GameInfoContainer>;
};