import { LoLChessApiClient } from '@domains/external-api/lol-chess/api';
import { VisGraph } from '@domains/vis-graph/views';
import { VisGraphNode } from '@domains/vis-graph/interface';
import {
  getEdgeFromFriend,
  getNodeFromFriend,
} from '@views/game/lol-chess/utils';

interface DetailPageProps {
  params: DetailPageParams;
}

interface DetailPageParams {
  name: string;
}

export const DetailPage = async ({ params: { name } }: DetailPageProps) => {
  const data = await LoLChessApiClient.getLoLChessFriends(name);

  const node: VisGraphNode = {
    id: data.name,
    label: data.name,
    image: data.profileImageUrl,
  };

  const friendNodes = data.friends.map(getNodeFromFriend);
  const friendEdges = data.friends.map((friend) => {
    return getEdgeFromFriend(data.name, friend);
  });

  return (
    <div>
      <VisGraph
        nodes={[node, ...friendNodes]}
        edges={[...friendEdges]}
        style={{
          width: 'calc(100vw - 200px)',
          height: '400px',
          border: '1px solid #000',
        }}
      />
    </div>
  );
};
