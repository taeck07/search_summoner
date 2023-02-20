import { SearchSummonerType } from "../types/searchTypes";

const RECENT_SEARCH_LIST = "RECENT_SEARCH_LIST";
const BOOKMARK_LIST = "BOOKMARK_LIST";

export const setRecentSearchList = (value: SearchSummonerType[]) => {
	localStorage.setItem(RECENT_SEARCH_LIST, JSON.stringify(value));
};

export const getRecentSearchList = (): SearchSummonerType[]  => {
	const searchList = localStorage.getItem(RECENT_SEARCH_LIST);
	return JSON.parse(searchList || "[]");
};


export const setBookmarkList = (value: SearchSummonerType[]) => {
	localStorage.setItem(BOOKMARK_LIST, JSON.stringify(value));
};

export const getBookmarkList = (): SearchSummonerType[] => {
	const bookmarkList = localStorage.getItem(BOOKMARK_LIST);
	return JSON.parse(bookmarkList || "[]");
};
