import { LoLChessFriend } from '@domains/external-api/lol-chess/interface';

export interface LoLChessGETResponse {
  name: string;
  profileImageUrl: string;
  friends: LoLChessFriend[];
  status: number;
}
