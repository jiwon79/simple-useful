import { NextRequest } from 'next/server';
import { LoLChessService } from '../service';
import { LoLChessGETResponse } from './interface';

interface GetFriendListParams {
  name: string;
}

export const GETFriendList = async (
  request: NextRequest,
  { params: { name } }: { params: GetFriendListParams },
) => {
  const lolChessService = new LoLChessService();

  const summoner = await lolChessService.getSummonerData(name);

  const friends = await lolChessService.getLoLChessFriends(name, summoner.id);

  const response: LoLChessGETResponse = {
    name: summoner.internalName,
    profileImageUrl: LoLChessService.getProfileImageUrl(summoner.profileIconId),
    friends,
    status: 200,
  };

  return new Response(JSON.stringify(response), {
    status: response.status,
  });
};
