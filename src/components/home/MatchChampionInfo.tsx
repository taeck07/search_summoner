import { MatchChampionStatsType } from "../../types/summonerTypes";
import styled from "styled-components";
import { MatchChampion } from "./MatchChampion";

const ChampionListContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    flex-direction: column;
    text-align: left;
    gap: 5px;
`;

type PropTypes = {
    championList: MatchChampionStatsType[];
}

const MatchChampionInfo = ({championList}:PropTypes) => {
	return <ChampionListContainer>
		{
			championList.map(champion => <MatchChampion key={champion.id} champion={champion}/>)
		}
	</ChampionListContainer>;
};

export {MatchChampionInfo};

