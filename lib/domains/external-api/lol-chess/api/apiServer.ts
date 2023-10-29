import { NextRequest } from 'next/server';
import { LoLChessService } from '../service';
import { LoLChessGETResponse } from './interface';

export const GET = async (
  request: NextRequest,
  { params }: { params: { name: string } },
) => {
  const lolChessService = new LoLChessService();

  const loLChessFriends = await lolChessService.getLoLChessFriends(params.name);

  const response: LoLChessGETResponse = {
    name: params.name,
    friends: loLChessFriends,
    status: 200,
  };

  return new Response(JSON.stringify(response), {
    status: response.status,
  });
};
