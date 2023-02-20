export type LadderRankType = {
    rank: number;
    rankPercentOfTop: number;
}

export type TierRankType = {
    division: string;
    imageUrl: string;
    lp: number;
    name: string;
    season: number;
    shortString: string;
    string: string;
    tier: string;
    tierDivision: string;
    tierRankPoint: number;
};

export type LeagueType = {
    hasResults: boolean;
    losses: number;
    wins: number;
    tierRank: TierRankType;
};

export type SummonerType = {
    ladderRank: LadderRankType;
    leagues: LeagueType[];
    level: number;
    name: string;
    previousTiers: TierRankType[];
    profileBackgroundImageUrl: string;
    profileBorderImageUrl: string;
    profileImageUrl: string;
    url: string;
};

export type ChampionType = {
    assists: number;
    cs: number;
    deaths: number;
    games: number;
    id: number;
    imageUrl: string;
    key: string;
    kills: number;
    losses: number;
    name: string;
    rank: number;
    wins: number;
};

export type RecentWinRateType = {
    id: number;
    imageUrl: string;
    key: string;
    losses: number;
    name: string;
    wins: number;
};

export type MostMacheType = {
    champions: ChampionType[];
    recentWinRate: RecentWinRateType[];

};

export type MatchChampionType =  {
    imageUrl: string;
    level: number;
}

export type MatchStatsGeneralType = {
    assist: number;
    contributionForKillRate: string;
    cs: number;
    csPerMin: number;
    death: number;
    goldEarned: number;
    kdaString: string;
    kill: number;
    largestMultiKillString: string;
    opScoreBadge: string;
    totalDamageDealtToChampions: number
}
export type MatchStatsWardType = {
    sightWardsBought: number;
    visionWardsBought: number
}

export type MatchStatsType = {
    general: MatchStatsGeneralType;
    ward: MatchStatsWardType;
};


export type MatchGameType = {
    champion: MatchChampionType;
    createDate: number;
    gameId: string;
    gameLength: number;
    gameType: string;
    isWin: boolean;
    items: {imageUrl: string}[];
    mapInfo: {
        imageUrl: string;
        mapId: number;
    };
    mmr: number;
    needRenew: boolean;
    peak:string[];
    spells: {imageUrl: string}[];
    summonerId: string;
    summonerName: string;
    tierRankShort: string;
    stats:MatchStatsType;
}

export type MatchPositionType = {
    games: number;
    losses: number;
    position: string;
    positionName: string;
    wins: number;
}

export type MatchSummaryType = {
    assists: number;
    deaths: number;
    kills: number;
    losses: number;
    wins: number;
}

export type MatchChampionStatsType = {
    key: string;
    id: number;
    games: number;
    imageUrl: string;
    name: string;
}&MatchSummaryType;

export type MatchType = {
    champions: MatchChampionStatsType[];
    games: MatchGameType[];
    positions: MatchPositionType[];
    summary: MatchSummaryType;
  };

export type PlayerType= {
    champion: MatchChampionType;
    summonerId: string;
    summonerName: string;
}

export type TeamType = {
    players: PlayerType[];
    teamId: number;
}

export type MatchDetailType = {
    gameId: string;
    teams: TeamType[];

}

