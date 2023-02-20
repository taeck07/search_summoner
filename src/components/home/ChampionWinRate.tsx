import { useCallback } from "react";
import styled from "styled-components";
import { ChampionType } from "../../types/summonerTypes";
import { CircleImage } from "../common/CircleImage";
import { getKda } from "../../utils/getKda";

const ChampionWinRateContainer = styled.div<{borderBottom: boolean;}>`
    height: 53px;
    border-bottom: ${props => props.borderBottom ? props.theme.border.default : "none"};
    padding: 4px 15px;
    display: grid;
    grid-template-columns: 50px 1fr 80px 50px;
    align-items: center;
    width: 100%;
    >div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        >p {
           &:first-of-type {
                font-size: 13px;
                font-weight: bold;
                color: ${props => props.theme.color.brownishGrey};
           }
           &:last-of-type {
                font-size: 13px;
                font-weight: bold;
                color: ${props => props.theme.color.coolGrey};
           }
       }

        &:nth-of-type(3) {
            width: 80px;
        }
        &:last-of-type {
            width: 50px;
        }
    }

`;

type ChampionWinRateType = {
    borderBottom?: boolean;
    champion: ChampionType;
};

type ItemType = "kills"| "deaths" | "assists";

const ChampionWinRate = ({borderBottom = true, champion}:ChampionWinRateType ) => {
	const getAverage = useCallback((item: ItemType) => {
		return Math.floor(champion[item]/champion.games * 10)/10;
	}, [champion]);
	const kda = getKda(champion.kills, champion.assists, champion.deaths);
	const winRate = Math.floor(champion.wins/champion.games*100);
	return <ChampionWinRateContainer borderBottom={borderBottom}>
		<CircleImage src={champion.imageUrl} width={45}/>
		<div>
			<p>{champion.name}</p>
			<p>CS {champion.cs}</p>
		</div>
		<div>
			<p>{kda}</p>
			<p>{getAverage("kills")}/{getAverage("assists")}/{getAverage("deaths")}</p>
		</div>
		<div>
			<p>{winRate}</p>
			<p>{champion.games}게임</p>
		</div>
	</ChampionWinRateContainer>;
};

export {ChampionWinRate};