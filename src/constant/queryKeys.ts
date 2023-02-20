const SUMMONER_PROFILE_KEY = "SUMMONER_PROFILE_KEY";
const SUMMONER_MOST_MACHES_KEY = "SUMMONER_MOST_MACHES_KEY";
const SUMMONER_LAST_MACHES_KEY = "SUMMONER_LAST_MACHES_KEY";
const SUMMONER_MACHE_DETAIL_KEY = "SUMMONER_MACHE_DETAIL_KEY";

export const SummonerKeys = {
	profile: (name: string) => [SUMMONER_PROFILE_KEY, name],
	mostInfo: (name: string) => [SUMMONER_MOST_MACHES_KEY, name],
	lastMatches: (name: string) => [SUMMONER_LAST_MACHES_KEY, name],
	matchDetail: (name: string, gameId: string) => [SUMMONER_MACHE_DETAIL_KEY, name, gameId],
};