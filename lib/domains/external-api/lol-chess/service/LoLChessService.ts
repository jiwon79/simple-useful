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
    const externalMeta = externalResponse.meta;
    const totalPage = Math.ceil(externalMeta.totalCount / externalMeta.perPage);

    const promises: Promise<ExternalLoLChessResponse>[] = [];
    for (let page = 2; page <= Math.min(totalPage, 5); page++) {
      promises.push(this.fetchExternalLoLChess(name, page));
    }

    const responses = await Promise.all(promises);

    const summonerMap = this.groupSummonerByPuuid(externalResponse.summoners);
    const matchCountMap = this.getMatchCountMap(externalResponse.matches);

    responses.forEach((response) => {
      this.groupSummonerByPuuid(response.summoners, summonerMap);
      this.getMatchCountMap(response.matches, matchCountMap);
    });

    return this.getFriendFromMap(name, matchCountMap, summonerMap);
  }

  private async fetchExternalLoLChess(
    name: string,
    page: number = 1,
  ): Promise<ExternalLoLChessResponse> {
    const url = new URL(
      `https://tft.dakgg.io/api/v1/summoners/kr/${name}/matches`,
    );
    url.searchParams.append('season', 'set9.5');
    url.searchParams.append('page', page.toString());
    url.searchParams.append('queueId', '0');
    const externalRequestUrl = url.toString();

    const response = await fetch(externalRequestUrl).then((res) => res.json());

    return response as ExternalLoLChessResponse;
  }

  private groupSummonerByPuuid(
    summoners: ExternalLoLChessSummoner[],
    summonerMap: SummonerMap = new Map<string, ExternalLoLChessSummoner>(),
  ): SummonerMap {
    summoners.forEach((summoner) => {
      summonerMap.set(summoner.puuid, summoner);
    });

    return summonerMap;
  }

  private getMatchCountMap(
    matches: ExternalLoLChessMatch[],
    matchCountMap: MatchCountMap = new Map<string, number>(),
  ): MatchCountMap {
    matches.forEach((match) => {
      match.participants.forEach((participant) => {
        const count = matchCountMap.get(participant.puuid) || 0;
        matchCountMap.set(participant.puuid, count + 1);
      });
    });

    return matchCountMap;
  }

  private getFriendFromMap(
    name: string,
    matchCountMap: MatchCountMap,
    summonerMap: SummonerMap,
  ): LoLChessFriend[] {
    const friends: LoLChessFriend[] = [];

    matchCountMap.forEach((count, puuid) => {
      if (count < 2) return;
      const summoner = summonerMap.get(puuid);
      if (!summoner || summoner.name === name) return;

      friends.push({
        name: summoner.name,
        count,
      });
    });

    return friends;
  }
}
