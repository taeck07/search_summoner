import { useQuery } from "react-query";
import { SummonerApi } from "../../api";
import { SummonerKeys } from "../../constant/queryKeys";
import { MatchDetailType } from "../../types/summonerTypes";

export const useMatcheDetail = (summonerName: string, gameId: string) => {
	return useQuery<MatchDetailType>(SummonerKeys.matchDetail(summonerName, gameId), () => SummonerApi.getMatchDetail(summonerName, gameId), {
		enabled: !!summonerName && !!gameId,
		retry: 3,
		onError: () => {
		},
	});
};