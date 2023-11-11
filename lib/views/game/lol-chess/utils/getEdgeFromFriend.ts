import { LoLChessFriend } from '@domains/external-api/lol-chess/interface';
import { VisGraphEdge } from '@domains/vis-graph/interface';

export const getEdgeFromFriend = (
  fromName: string,
  friend: LoLChessFriend,
): VisGraphEdge => {
  return {
    from: fromName,
    to: friend.name,
    color: '#A2A2A2',
    value: Math.log(friend.count),
    arrows: '',
  };
};
