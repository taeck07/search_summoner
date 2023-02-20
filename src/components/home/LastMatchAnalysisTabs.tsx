import { MatchType } from "../../types/summonerTypes";
import { Tab } from "../common/Tab";
import { MatchesAnalysis } from "./MatchesAnalysis";


const DEFAULT_MATCH = {
	champions: [],
	games: [],
	positions: [],
	summary: {
		wins: 0,
		kills: 0,
		assists: 0,
		deaths: 0,
		losses: 0,
	}
};

type PropType = {
    lastMatchList?: MatchType;
}

const LastMatchAnalysisTabs = ({lastMatchList}:PropType) => {
	const soloMatches = {
		...DEFAULT_MATCH,
		...lastMatchList,
		games: lastMatchList?.games.filter((game)=> game.gameType === "솔랭") || [],
	};

	const freeMatches = {
		...DEFAULT_MATCH,
		...lastMatchList,
		games: lastMatchList?.games.filter((game)=> game.gameType !== "솔랭") || [],
	};
	return <Tab height="194px" tabTitleList={["전체", "솔로게임", "자유랭크"]} tabElements={[<div key="all"><MatchesAnalysis matches={lastMatchList}/></div>,<div key="solo"><MatchesAnalysis matches={soloMatches}/></div>, <div key="free"><MatchesAnalysis matches={freeMatches}/></div>]}/>;
};

export {LastMatchAnalysisTabs};