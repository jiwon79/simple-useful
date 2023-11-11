import { LoLChessGETResponse } from './interface';

export class LoLChessApiClient {
  private static path: string = '/api/game/lol-chess';

  static async getLoLChessFriends(name: string): Promise<LoLChessGETResponse> {
    const url = new URL(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${this.path}/${name}`,
    );
    const response = await fetch(url.toString()).then((res) => res.json());

    return response as LoLChessGETResponse;
  }
}
