export interface ExternalLoLChessSummoner {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  internalName: string;
  profileIconId: number;
  entry: object;
}

export interface ExternalLoLChessMatch {
  metadata: ExternalLoLChessMatchMetaData;
  info: ExternalLoLChessMatchInfo;
}

export interface ExternalLoLChessMatchMap {
  [key: number]: ExternalLoLChessMatch;
}

export interface ExternalLoLChessParticipant {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  internalName: string;
  profileIconId: string;
}

export interface ExternalLoLChessMatchMetaData {
  dataVersion: string;
  matchId: string;
  participants: ExternalLoLChessParticipant[];
  version: string;
}

export interface ExternalLoLChessMatchInfo {
  gameDatetime: number;
  gameLength: number;
  gameVariation: string;
  queueId: number;
  tftGameType: string;
}
