import styled from "styled-components";
import { useMatcheDetail } from "../../hooks/query/useMatchDetail";
import { LazyImage } from "../common/LazyImage";

const GameTeamContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 65px);
    grid-auto-rows: 16px;
    align-items: center;
    justify-content: center;
    gap: 2px;
    >div {
        display: flex;
        gap: 3px;
    }
`;

const SummonerName = styled.span`
    text-overflow: ellipsis;
    font-size: 10px;
    white-space: nowrap;
  overflow: hidden;
    color: ${props => props.theme.color.greyishBrown};
`;

type PropTypes = {
    gameId: string;
    summonerName: string;
}

const GameTeamInfo = ({gameId, summonerName}: PropTypes) => {
	const {data, isLoading, isError} = useMatcheDetail(summonerName, gameId);
	return <GameTeamContainer>
		{data?.teams.map(({players}, index) => players.map((player, playerIndex) => <div style={{gridColumnStart: index+1, gridColumnEnd: index+2, gridRowStart: playerIndex+1, gridRowEnd: playerIndex+2}} key={player.summonerId}><LazyImage src={player.champion.imageUrl} style={{width: 16, height: 16}}/><SummonerName>{player.summonerName}</SummonerName></div>))}
	</GameTeamContainer>;
};

export {GameTeamInfo};