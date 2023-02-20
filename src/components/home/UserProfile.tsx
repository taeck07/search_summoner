import styled from "styled-components";
import { SummonerType } from "../../types/summonerTypes";
import { Button } from "../common/Button";

const ProfileContainer = styled.div`
    border-bottom: ${props => props.theme.border.default};
    width: 100%;
    > div {
        padding: 15px 20px;
        ${props => props.theme.templateStyle.width}
    }
`;

const Profile = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex: 0 1;
    align-items: stretch;
    gap: 17px;
    margin-top: 12px;
    > div:first-of-type {
        width: 120px;
        height: 120px;
        display: flex;
        align-items: center;
        > img {
            width: 100%;
            height: auto;
        }
    }
`;

const ProfileInfo = styled.div`
    margin-top: 11px;
    > h3 {
        color: ${props => props.theme.color.charcoal}
    }
    > p {
        margin-top: 5px;
        color: ${props => props.theme.color.greyish}
    }
`;


const UserProfile = ({ summoner }: { summoner?: SummonerType }) => {

	return <ProfileContainer>
		<div>
			<Profile>
				<div>
					<img src={summoner?.profileImageUrl} />
				</div>
				<ProfileInfo>
					<h3>{summoner?.name}</h3>
					<p>레더 랭킹 {summoner?.ladderRank.rank}위 (상위 {summoner?.ladderRank.rankPercentOfTop}%)</p>
				</ProfileInfo>
			</Profile>
		</div>
	</ProfileContainer>;
};

export default UserProfile;