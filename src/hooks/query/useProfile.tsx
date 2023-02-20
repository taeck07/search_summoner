import { useQuery } from "react-query";
import { useSetRecoilState } from "recoil";
import { SummonerApi } from "../../apis";
import { SummonerKeys } from "../../constant/queryKeys";
import { snackbarState } from "../../recoil/snackbarRecoil";
import { SummonerType } from "../../types/summonerTypes";

export const useProfile = (name: string) => {
	return useQuery<{ summoner: SummonerType }, Error, SummonerType>(SummonerKeys.profile(name), () => SummonerApi.get(name), {
		enabled: true,
		retry: 3,
		onError: () => {
			const setSnackbar = useSetRecoilState(snackbarState);
			setSnackbar({ type: "error", msg: "프로필 정보를 가져오는데 실패하였습니다." });
		},
		notifyOnChangeProps: ["data", "isError", "isLoading"],
		select: ({ summoner }) => summoner
	});
};