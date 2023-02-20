
import { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { SearchSummonerType } from "../../types/searchTypes";
import { Tab } from "../common/Tab";
import { TextField, TextFieldType } from "../common/TextField";
import { getBookmarkList, getRecentSearchList, setBookmarkList as saveBookmarkList, setRecentSearchList } from "../../utils/localStorage";
import { RecentSearchList } from "./RecentSearchList";
import { BookmarkList } from "./BoomarkList";
import { Popover } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";

const SearchSummonerContainer = styled.div`
    position: relative;
    width: 260px;
`;

const SearchSummonerWrap = styled.div`
    background-color: #fff;
    padding: 3px 10px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    width: 100%;
`;

const SearchInputWrap = styled.div`
    flex: 1;
`;
const SearchBtn = styled.button`
    font-weight: bolder;
    color: #1ea1f7;
    background-color: transparent;
    border: 0;
    &:hover {
        cursor: pointer;
    }
`;

const SearchedListWrap = styled.div`
    margin-top: 2px;
    height: 192px;
    width: 260px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 3px 3px 3px 1px #00000010;
    z-index: 100;
`;

const TabListContainer = styled.div`
    overflow: auto;
`;

type PropTypes = {
    recentSearchList?: SearchSummonerType[];
}&TextFieldType;

const SearchSummoner = ({value, onChange, onEnter = () => {}}:PropTypes) => {

	const [bookmarkList, setBookmarkList] = useState<SearchSummonerType[]>([]);
	const [recentSearch, setRecentSearch] = useState<SearchSummonerType[]>([]);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const resentSearchWithBookmark= useMemo(() => recentSearch.map(
		(recent)=> bookmarkList.some(
			bookmark => bookmark.title === recent.title)?
			{...recent, bookmark: true}:{...recent, bookmark: false}), [bookmarkList, recentSearch]);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};


	useEffect(() => {
		const bookmarks = getBookmarkList();
		let recents = getRecentSearchList();

		if (bookmarks.length) {
			recents = recents.map(
				(recent)=> bookmarks.some(
					bookmark => bookmark.title === recent.title)?
					{...recent, bookmark: true}:{...recent, bookmark: false});
		}
		setBookmarkList(bookmarks);
		setRecentSearch(recents);
	}, []);

	const handleSearch = useCallback((value: string) => {
		const recent = recentSearch.filter(({title})=> title !== value);
		const list = [{title: value, date: moment(new Date()).format("YYYY-MM-DD")}, ...recent];
 		setRecentSearchList(list);
		setRecentSearch(list);
		onEnter(value);
	}, [recentSearch]);

	const setBookmark = (isBookmark:boolean, value: string) => {
		let bookmarks = [];
		if (isBookmark) {
			bookmarks = bookmarkList.filter(({title})=> title!==value);
		} else {
			bookmarks = [...bookmarkList, {title: value, date: moment(new Date()).format("YYYY-MM-DD")}];
		}
		saveBookmarkList(bookmarks);
		setBookmarkList(bookmarks);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const removeSearchList = useCallback((value: string) => {
		const recent = recentSearch.filter(({title})=> title !== value);
		setRecentSearchList(recent);
		setRecentSearch(recent);
	},[recentSearch])
;

	return <SearchSummonerContainer >
		<SearchSummonerWrap onClick={handleClick} aria-describedby="popover">
			<SearchInputWrap>
				<TextField value={value} onChange={onChange} onEnter={handleSearch} />
			</SearchInputWrap>
			<SearchBtn onClick={() => handleSearch(value)}>.GG</SearchBtn>
		</SearchSummonerWrap>
		<Popover
			open={!!anchorEl}
			anchorEl={anchorEl}
			id="popover"
			onClose={() => handleClose()}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "left",
			}}
		>
			<SearchedListWrap>

				<Tab
					headerFullWidth={true}
					tabTitleList={["최근검색","즐겨찾기"]}
					tabElements={[<TabListContainer key="searched"><RecentSearchList searchList={resentSearchWithBookmark} setBookmark={setBookmark} removeSearchList={removeSearchList}/></TabListContainer>, <TabListContainer key="bookmark"><BookmarkList bookmarkList={bookmarkList} setBookmark={setBookmark}/></TabListContainer>]}/>

			</SearchedListWrap>
		</Popover>


	</SearchSummonerContainer>;
};

export {SearchSummoner};