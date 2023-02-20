import { useQuery } from "react-query";
import { useSetRecoilState } from "recoil";
import { SummonerApi } from "../../apis";
import { SummonerKeys } from "../../constant/queryKeys";
import { snackbarState } from "../../recoil/snackbarRecoil";
import { MostMacheType } from "../../types/summonerTypes";

export const useMostMaches = (name: string) => {
	return useQuery<MostMacheType>(SummonerKeys.mostInfo(name), () => SummonerApi.getSumonnerMostMaches(name), {
		enabled: !!name,
		retry: 3,
		onError: () => {
			const setSnackbar = useSetRecoilState(snackbarState);
			setSnackbar({ type: "error", msg: "프로필 정보를 가져오는데 실패하였습니다." });
		},
	});
};