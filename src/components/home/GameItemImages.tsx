import styled from "styled-components";
import { MatchGameType } from "../../types/summonerTypes";
import { LazyImage } from "../common/LazyImage";

const GameItemImagesContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 17px;
`;

const GameItemImagesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 22px);
    gap: 2px;
    width: auto;
`;

const GameItemImages = ({game} : {game: MatchGameType}) => {
	const {items} = game;
	return<GameItemImagesContainer>
		<GameItemImagesGrid>
			{items.map((item, index) => <LazyImage src={item.imageUrl} key={`${item.imageUrl}_${index}`} style={{width:22}}/>)}
		</GameItemImagesGrid>
	</GameItemImagesContainer>;
};

export {GameItemImages};
