import styled from "styled-components";
import { LeagueType } from "../../types/summonerTypes";

const LeaguePlayContainer = styled.div`
    width: 100%;
    padding: 10px 8px;
    display: flex;
    column-gap: 8px;
    flex: 0 1;
    >img {
        width: 108px;
        height: auto;
    }
    >div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2px;
        color:${props => props.theme.color.coolGrey};
        font-size: 12px;
        .bold {
            font-weight: bold;
        }
        .tier {
            font-size: 15px;
            font-weight: bold;
            color:${props => props.theme.color.bluish};
        }
    }
`;


export const LeaguePlayRank = ({league} :{league?: LeagueType}) => {
	const { hasResults, tierRank, losses, wins }= league || {hasResults: false, tierRank:{}, losses: 0, wins: 0};
	const winRate = Math.floor(wins / (wins + losses) * 100);
	return <LeaguePlayContainer>
		<img src={tierRank.imageUrl}/>
		{
			hasResults?
				<div>
					<h5> {tierRank.name === "솔랭"? "솔로 랭크":tierRank.name}</h5>
					<p><span className="bold">탑</span>({wins + losses})</p>
					<p className="tier">{tierRank.tier} {tierRank.tierRankPoint}</p>
					<p><span className="bold">{tierRank.lp}LP</span>/{wins}승 {losses}패</p>
					<p>승률 {winRate}%</p>
				</div>: <div><h5>솔로 랭크</h5><span className="bold">Unranked</span></div>
		}
	</LeaguePlayContainer>;
};