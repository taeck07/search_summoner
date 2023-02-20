import { Tab } from "../common/Tab";
import { useMostMaches } from "../../hooks/query/useMostMaches";
import { ChampionWinRateList } from "./ChampionWinRateList";
import { LastWinRateList } from "./LastWinRateList";

type PropTypes = {
    summonerName:string;
}

export const MachesTab = ({summonerName}: PropTypes) => {
	const {data, isError, isLoading} = useMostMaches(summonerName);

	return <Tab headerFullWidth={true} tabTitleList={["챔피언 승률", "7일간 랭크 승률"]} tabElements={[<ChampionWinRateList key='champion' championList={data?.champions || []}/>, <LastWinRateList key="lastWin" rateList={data?.recentWinRate || []}/>]}></Tab>;
};