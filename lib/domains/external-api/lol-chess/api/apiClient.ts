import { LoLChessGETResponse } from './interface';

export class LoLChessApiClient {
  private static url: string = '/api/game/lol-chess';

  static async getLoLChessFriends(name: string): Promise<LoLChessGETResponse> {
    const url = new URL(`${this.url}/${name}`);
    const response = await fetch(url.toString()).then((res) => res.json());

    return response as LoLChessGETResponse;
  }
}
