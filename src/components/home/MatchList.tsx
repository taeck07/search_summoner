import styled from "styled-components";
import { MatchGameType } from "../../types/summonerTypes";
import { GameInfo } from "./GameInfo";

const MatchListContainer = styled.div`
    width: 100%;
    height: 100%;
`;

type PropTypes = {
    games: MatchGameType[];
};

const MatchList = ({games}:PropTypes) => {
	return <MatchListContainer>
		{games.map(game => <GameInfo key={game.gameId} game={game}></GameInfo>)}
	</MatchListContainer>;
};

export {MatchList};