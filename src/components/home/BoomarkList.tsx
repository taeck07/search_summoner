import styled from "styled-components";
import { SearchSummonerType } from "../../types/searchTypes";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";

const BookmarkListContainer = styled.div`
    display: flex;
	height: 30px;
	align-items: center;
	padding: 0 15px;
    >div {
        width: 30px;
    }
    >div:first-of-type {
        flex-grow: 1;
    }
`;

const BookmarkList = ({bookmarkList, setBookmark}: {bookmarkList: SearchSummonerType[]; setBookmark: (isBookmark:boolean, value: string) => void}) => {
	return <>
		{
			bookmarkList.map(search => <BookmarkListContainer key={search.title}>
				<div>{search.title}</div>
				<div><IconButton onClick={() => setBookmark(true, search.title)}><ClearIcon/></IconButton></div>
			</BookmarkListContainer>)
		}

	</>;
};

export {BookmarkList};