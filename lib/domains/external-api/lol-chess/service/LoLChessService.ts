import {
  ExternalLoLChessMatch,
  ExternalLoLChessMatchMap,
  ExternalLoLChessSummoner,
  LoLChessFriend,
} from '@domains/external-api/lol-chess/interface';

type SummonerInternalName = string;
type MatchCountMap = Map<SummonerInternalName, number>;
type SummonerIconMap = Map<SummonerInternalName, string>;

export class LoLChessService {
  private static externalBaseUrl = 'https://tft-api.op.gg/api/v1';

  public async getLoLChessFriends(
    name: string,
    summonerID: string,
  ): Promise<LoLChessFriend[]> {
    const matchCountMap = new Map<SummonerInternalName, number>();
    const summonerIconMap = new Map<SummonerInternalName, string>();
    let lastMatchDate: Date | undefined;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const index of Array.from({ length: 4 }, (_, i) => i)) {
      const matchesData = await this.getMatchesData(summonerID, {
        startedAt: lastMatchDate,
      });
      this.applyMatchData(matchCountMap, summonerIconMap, matchesData);

      lastMatchDate = new Date(matchesData.at(-1).info.gameDatetime);
      if (matchesData.length < 30) break;
    }

    return this.getFriendListFromMap(name, matchCountMap, summonerIconMap);
  }

  public async getSummonerData(
    name: string,
  ): Promise<ExternalLoLChessSummoner> {
    const url = new URL(`${LoLChessService.externalBaseUrl}/kr/summoners`);
    url.searchParams.append('name', name);

    const response = await fetch(url).then((res) => res.json());

    return response.data as ExternalLoLChessSummoner;
  }

  private async getMatchesData(
    puuid: string,
    { startedAt }: { startedAt?: Date } = {},
  ): Promise<ExternalLoLChessMatch[]> {
    const url = new URL(
      `${LoLChessService.externalBaseUrl}/kr/summoners/${puuid}/matches`,
    );
    if (startedAt) {
      url.searchParams.append('startedAt', startedAt.toISOString());
    }

    const response = await fetch(url).then((res) => res.json());
    const matchMap = response.data as ExternalLoLChessMatchMap;

    return Object.values(matchMap);
  }

  private applyMatchData(
    matchCountMap: MatchCountMap,
    summonerIconMap: SummonerIconMap,
    matches: ExternalLoLChessMatch[],
  ): void {
    for (const match of matches) {
      for (const participant of match.metadata.participants) {
        const { internalName, profileIconId } = participant;
        const count = matchCountMap.get(internalName) ?? 0;
        matchCountMap.set(internalName, count + 1);
        summonerIconMap.set(internalName, profileIconId);
      }
    }
  }

  private getFriendListFromMap(
    name: string,
    matchCountMap: MatchCountMap,
    summonerIconMap: SummonerIconMap,
  ): LoLChessFriend[] {
    const friendList: LoLChessFriend[] = [];

    for (const [internalName, count] of matchCountMap) {
      if (count < 2 || internalName === name) continue;
      const iconNumber = summonerIconMap.get(internalName) ?? '1';

      friendList.push({
        name: internalName,
        count,
        profileImageUrl: LoLChessService.getProfileImageUrl(iconNumber),
      });
    }

    return friendList;
  }

  static getProfileImageUrl(iconNumber: string | number): string {
    return `https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon${iconNumber}.jpg?image=q_auto,f_webp,w_200`;
  }
}
