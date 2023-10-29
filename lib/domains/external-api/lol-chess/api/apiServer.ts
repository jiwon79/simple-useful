import { NextRequest } from 'next/server';
import { LoLChessService } from '@domains/external-api/lol-chess/service';

export const GET = async (
  request: NextRequest,
  { params }: { params: { name: string } },
) => {
  const lolChessService = new LoLChessService();

  const loLChessFriends = await lolChessService.getLoLChessFriends(params.name);

  const response = {
    name: params.name,
    friends: loLChessFriends,
    status: 200,
  };

  return new Response(JSON.stringify(response), {
    status: response.status,
  });
};
