import { MatchChampionStatsType } from "../../types/summonerTypes";
import styled from "styled-components";
import { CircleImage } from "../common/CircleImage";
import { getKda } from "../../utils/getKda";

const MatchChampionContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    >div:last-of-type {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 3px;
        font-size: 10px;

    }
`;

const MatchChampion = ({champion}: {champion: MatchChampionStatsType}) => {
	return <MatchChampionContainer>
		<CircleImage width={34} src={champion.imageUrl}/>
		<div>
			<p>{champion.name}</p>
			<p>
				{Math.round(champion.wins/champion.games*100)} ({champion.wins}승 {champion.losses}패)
                |
				{getKda(champion.kills, champion.assists, champion.deaths)}
			</p>
		</div>
	</MatchChampionContainer>;
};

export {MatchChampion};