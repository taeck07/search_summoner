import axios from "axios";

const client = axios.create({
	baseURL: "https://codingtest.op.gg/api/summoner/"
});

export const SummonerApi = {
	get: async (summonerName: string) => {
		try {
			const { data } = await client.get(`${summonerName}`);
			return data;
		} catch (error) { }
	},
	getSumonnerMostMaches: async (summonerName: string) => {
		try {
			const { data } = await client.get(`${summonerName}/mostInfo`);
			return data;
		} catch (error) { }
	},
	getSumonnerLastMaches: async (summonerName: string) => {
		try {
			const { data } = await client.get(`${summonerName}/matches`);
			return data;
		} catch (error) { }
	},
	getMatchDetail: async (summonerName: string, gameId: string) => {
		try {
			const { data } = await client.get(`${summonerName}/matchDetail/${gameId}`);
			return data;
		} catch (error) { }
	}
};