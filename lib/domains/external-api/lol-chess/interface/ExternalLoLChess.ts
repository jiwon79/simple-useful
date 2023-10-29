export interface ExternalLoLChessResponse {
  meta: ExternalLoLChessMeta;
  matches: ExternalLoLChessMatch[];
  summoners: ExternalLoLChessSummoner[];
}

export interface ExternalLoLChessMeta {
  page: number;
  perPage: number;
  totalCount: number;
}

export interface ExternalLoLChessMatch {
  shard: string;
  matchId: number;
  gameCreatedAt: Date;
  gameLength: number;
  gameVariation: string | null;
  gameVersion: string;
  patchVersion: string;
  queueId: number;
  participants: ExternalLoLChessParticipant[];
}

export interface ExternalLoLChessParticipant {
  // legends: string[];
  // augments: string[];
  companionId: string;
  companionImageUrl: string;
  // goldLeft: number;
  // lastRound: number;
  // level: number;
  // placement: number;
  // playersEliminated: number;
  puuid: string;
  // timeEliminated: number;
  // totalDamageToPlayers: number;
}

export interface ExternalLoLChessSummoner {
  puuid: string;
  shard: string;
  name: string;
  // summonerLevel: number;
  profileIconUrl: string;
}
