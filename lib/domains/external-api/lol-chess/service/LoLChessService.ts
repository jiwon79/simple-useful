import {
  ExternalLoLChessResponse,
  LoLChessFriend,
} from '@domains/external-api/lol-chess/interface';

export class LoLChessService {
  public async getLoLChessFriends(name: string): Promise<LoLChessFriend[]> {
    const externalResponse = await this.fetchExternalLoLChess(name);

    return [] as LoLChessFriend[];
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
}
