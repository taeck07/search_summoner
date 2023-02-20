import styled from "styled-components";
import { RecentWinRateType } from "../../types/summonerTypes";
import { LastWinRate } from "./LastWinRate";

const LastWinRateListContainer = styled.div`

`;

type PropTypes = {
    rateList: RecentWinRateType[];
}

const LastWinRateList = ({rateList}: PropTypes) => {
	return <LastWinRateListContainer>
		{
			rateList.map((rate, index) => <LastWinRate key={rate.id} winRate={rate} borderBottom={index !==rateList.length-1}/>)
		}
	</LastWinRateListContainer>;
};

export {LastWinRateList};