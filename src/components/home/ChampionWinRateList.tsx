import styled from "styled-components";
import { ChampionType } from "../../types/summonerTypes";
import { ChampionWinRate } from "./ChampionWinRate";

const ChampionWinRateContainer = styled.div`

`;

type PropTypes = {
    championList: ChampionType[];
}

const ChampionWinRateList = ({championList}: PropTypes) => {
	return <ChampionWinRateContainer>
		{
			championList.map((champion, index) => <ChampionWinRate key={`${champion.id}_${champion.key}`} champion={champion} borderBottom={index !==championList.length-1}/>)
		}
	</ChampionWinRateContainer>;
};

export {ChampionWinRateList};