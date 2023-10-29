import {
  ExternalLoLChessMatch,
  ExternalLoLChessResponse,
  ExternalLoLChessSummoner,
  LoLChessFriend,
} from '@domains/external-api/lol-chess/interface';

type SummonerMap = Map<string, ExternalLoLChessSummoner>;
type MatchCountMap = Map<string, number>;

export class LoLChessService {
  public async getLoLChessFriends(name: string): Promise<LoLChessFriend[]> {
    const externalResponse = await this.fetchExternalLoLChess(name);
    const summonerMap = this.groupSummonerByPuuid(externalResponse.summoners);
    const matchCountMap = this.getMatchCountMap(externalResponse.matches);

    return this.getFriendFromMap(matchCountMap, summonerMap);
  }

  private async fetchExternalLoLChess(
    name: string,
  ): Promise<ExternalLoLChessResponse> {
    const url = new URL(
      `https://tft.dakgg.io/api/v1/summoners/kr/${name}/matches`,
    );
    url.searchParams.append('season', 'set9.5');
    url.searchParams.append('page', '1');
    url.searchParams.append('queueId', '0');
    const externalRequestUrl = url.toString();

    const response = await fetch(externalRequestUrl).then((res) => res.json());

    return response as ExternalLoLChessResponse;
  }

  private groupSummonerByPuuid(
    summoners: ExternalLoLChessSummoner[],
  ): SummonerMap {
    const summonerMap = new Map<string, ExternalLoLChessSummoner>();

    summoners.forEach((summoner) => {
      summonerMap.set(summoner.puuid, summoner);
    });

    return summonerMap;
  }

  private getMatchCountMap(matches: ExternalLoLChessMatch[]): MatchCountMap {
    const matchCountMap = new Map<string, number>();

    matches.forEach((match) => {
      match.participants.forEach((participant) => {
        const count = matchCountMap.get(participant.puuid) || 0;
        matchCountMap.set(participant.puuid, count + 1);
      });
    });

    return matchCountMap;
  }

  private getFriendFromMap(
    matchCountMap: MatchCountMap,
    summonerMap: SummonerMap,
  ): LoLChessFriend[] {
    const friends: LoLChessFriend[] = [];

    matchCountMap.forEach((count, puuid) => {
      const summoner = summonerMap.get(puuid);
      if (!summoner || count < 2) {
        return;
      }

      friends.push({
        name: summoner.name,
        count,
      });
    });

    return friends;
  }
}
