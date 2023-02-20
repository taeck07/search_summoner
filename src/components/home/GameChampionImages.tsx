import styled from "styled-components";
import { MatchGameType } from "../../types/summonerTypes";
import { CircleImage } from "../common/CircleImage";
import { LazyImage } from "../common/LazyImage";

const GameChampionImagesContainer = styled.div`
	>div {
		display: flex;
		gap: 10px;
		>div:last-of-type {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 3px;
		}
	}
	p {
		color: ${props => props.theme.color.greyishBrown};
		font-size: 11px;
		margin-top: 5px;
		text-align: center;
	}
`;

const GameChampionImages = ({game}: {game:MatchGameType}) => {
	const {champion, spells} = game;
	return <GameChampionImagesContainer>
		<div>
			<div><CircleImage width={46} src={champion.imageUrl}/></div>
			<div>
				{
					spells.map((spell, index) =>
						<LazyImage key={`${spell.imageUrl}_${index}`} src={spell.imageUrl} style={{width: 22, height:22}}/>
					)
				}
			</div>
		</div>
		<p>{game.summonerName}</p>
	</GameChampionImagesContainer>;
};

export {GameChampionImages};