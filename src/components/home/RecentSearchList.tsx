import styled from "styled-components";
import { SearchSummonerType } from "../../types/searchTypes";
import ClearIcon from "@mui/icons-material/Clear";
import StarIcon from "@mui/icons-material/Star";
import { IconButton } from "@mui/material";
const RecentSearchContainer = styled.div`
    display: flex;
    height: 35px;
    align-items: center;
    padding: 0 15px;
    >div {
        width: 30px;
    }
    >div:first-of-type {
        flex-grow: 1;
    }
`;

const RecentSearchList = ({searchList, setBookmark, removeSearchList}: {searchList: SearchSummonerType[], setBookmark: (isBookmark:boolean, value: string) => void, removeSearchList: (val: string) => void}) => {
	return <>
		{
			searchList.map(search => <RecentSearchContainer key={search.title}>
				<div>{search.title}</div>
				<div><IconButton color={search.bookmark ? "secondary" : "default"} onClick={() => setBookmark(!!search.bookmark, search.title)}><StarIcon/></IconButton></div>
				<div><IconButton onClick={() => removeSearchList(search.title)}><ClearIcon/></IconButton></div>
			</RecentSearchContainer>)
		}

	</>;
};

export {RecentSearchList};