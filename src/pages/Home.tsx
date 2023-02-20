
import styled from "styled-components";
import UserProfile from "../components/home/UserProfile";
import Template from "../components/templates/Template";
import { useProfile } from "../hooks/query/useProfile";
import { LeaguePlayRank } from "../components/home/LeaguePlayRank";
import { MachesTab } from "../components/home/MachesTab";
import { useGetMatches } from "../hooks/query/useGetMaches";
import { MatchList } from "../components/home/MatchList";
import { LastMatchAnalysisTabs } from "../components/home/LastMatchAnalysisTabs";
import { SearchSummoner } from "../components/home/SearchSummoner";
import { useState } from "react";
import { throttle } from "../utils/throttle";

const HomeContainer = styled.div`
  position: relative;
`;

const HomeWrap = styled.div`
    ${props => props.theme.templateStyle.width};
    display: flex;
    margin-top: 10px;
    gap: 8px;
    >div:first-of-type {
        width: 300px;
        display: flex;
        flex-direction: column;
        row-gap: 8px;
    }
    >div:last-of-type {
        flex-grow: 1;
    }
`;

const HomeContentSection = styled.article<{ border?: boolean }>`
    width: 100%;
    height: auto;
    min-height: 20px;
    background-color: ${props => props.theme.color.white};
    ${props => props.border && `border: ${props.theme.border.default}`}
`;


const nameList = ["신지드", "리산드라", "케이틀리", "볼리베어", "카르마", "트리스타나", "갱플랭크"];

const selectedName = function () {
	const index = Math.floor(Math.random() * nameList.length);
	return nameList[index];
}();

const Home = () => {
	const [searchSummonerName, setSearchSummonerName] = useState("");
	const [searchName, setSearchName] = useState(selectedName);
	const { data: summonerProfile, isError: summonerProfileIsError, isLoading: summonerProfileIsLoading} = useProfile(searchName);
	const {data: lastMatchList, isError: getMatchesIsError, isLoading: getMatchesIsLoading} = useGetMatches(searchName);

	const searchSummoner = (name: string) => {
		setSearchName(name);
	};

	const handleSearchSummoner = (name: string) => {
		setSearchSummonerName(name);
	};

	return <Template rightChild={<SearchSummoner value={searchSummonerName} onChange={handleSearchSummoner} onEnter={searchSummoner}/>}>
		<HomeContainer>
			<UserProfile summoner={summonerProfile} />
			<HomeWrap>
				<div>
					{
						summonerProfile?.leagues.map(league => (
							<HomeContentSection key={league.tierRank.name} border={true}>
								<LeaguePlayRank league={league}/>
							</HomeContentSection>
						))
					}
					<HomeContentSection>
						<MachesTab summonerName={searchName}/>
					</HomeContentSection>
				</div>
				<div>
					<HomeContentSection>
						<LastMatchAnalysisTabs lastMatchList={lastMatchList}/>
					</HomeContentSection>
					<div>
						<MatchList games={lastMatchList?.games || []}/>
					</div>
				</div>
			</HomeWrap>
		</HomeContainer>
	</Template>;
};

export default Home;