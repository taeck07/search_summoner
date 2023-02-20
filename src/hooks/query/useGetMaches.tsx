import { useQuery } from "react-query";
import { useSetRecoilState } from "recoil";
import { SummonerApi } from "../../api";
import { SummonerKeys } from "../../constant/queryKeys";
import { snackbarState } from "../../recoil/snackbarRecoil";
import { MatchType } from "../../types/summonerTypes";

export const useGetMatches = (name: string) => {
	return useQuery<MatchType>(SummonerKeys.lastMatches(name), () => SummonerApi.getSumonnerLastMaches(name), {
		enabled: !!name,
		retry: 3,
		onError: () => {
			const setSnackbar = useSetRecoilState(snackbarState);
			setSnackbar({ type: "error", msg: "지난 게임 정보를 가져오는데 실패하였습니다." });
		},
	});
};