import { LoLChessFriend } from '@domains/external-api/lol-chess/interface';
import { VisGraphNode } from '@domains/vis-graph/interface';

export const getNodeFromFriend = (friend: LoLChessFriend): VisGraphNode => {
  return {
    id: friend.name,
    label: friend.name,
    image: friend.profileImageUrl,
    value: Math.log(friend.count),
  };
};
