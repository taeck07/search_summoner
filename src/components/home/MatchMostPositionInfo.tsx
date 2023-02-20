import styled from "styled-components";
import { MatchPositionType } from "../../types/summonerTypes";

const PositionListContainer = styled.div`
	img {
		width: 28px;
	}
	h5 {
		color: ${props => props.theme.color.brownishGreyTwo};
		font-weight: normal;
	}
	padding: 0 16px;
	padding-top: 16px;
`;

const PositionContainer = styled.div`
    width: 100%;
	display: flex;
	align-items: center;
	margin-top: 20px;
	>div:last-of-type{
		margin-left: 10px;
		>p:first-of-type {
			font-size: 14px;
		}
		>p:last-of-type {
			font-size: 11px;
		}
	}
`;

type PropTypes = {
    positions: MatchPositionType[];
}

const MatchMostPositionInfo = ({positions}:PropTypes) => {
	const allGameCount = positions.reduce((pre, curr) => pre + curr.games, 0);
	return <PositionListContainer>
		<h5>선호 포지션(랭크)</h5>
		{
			positions.map(position => <PositionContainer key={position.position}>
				<div>
					<img src={`./icons/icon-mostposition-${position.position}.png`}/>
				</div>
				<div>
					<p>{position.positionName}</p>
					<p><span>{Math.round(position.games/allGameCount * 100)}</span> | <span>승률</span><span>{Math.round(position.wins/position.games*100)}%</span></p>
				</div>
			</PositionContainer>)
		}
	</PositionListContainer>;
};

export {MatchMostPositionInfo};

