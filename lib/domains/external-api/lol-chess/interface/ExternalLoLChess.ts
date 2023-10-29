export interface ExternalResponse {
  meta: ExternalMeta;
  matches: ExternalMatch[];
  summoners: ExternalSummoner;
}

export interface ExternalMeta {
  page: number;
  perPage: number;
  totalCount: number;
}

export interface ExternalMatch {
  shard: string;
  matchId: number;
  gameCreatedAt: Date;
  gameLength: number;
  gameVariation: string | null;
  gameVersion: string;
  patchVersion: string;
  queueId: number;
  participants: ExternalParticipant[];
}

export interface ExternalParticipant {
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

export interface ExternalSummoner {
  puuid: string;
  shard: string;
  name: string;
  // summonerLevel: number;
  profileIconUrl: string;
}
