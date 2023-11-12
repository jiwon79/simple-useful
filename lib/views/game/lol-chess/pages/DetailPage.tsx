'use client';

import { LoLChessApiClient } from '@domains/external-api/lol-chess/api';
import { VisGraphEdge, VisGraphNode } from '@domains/vis-graph/interface';
import {
  getEdgeFromFriend,
  getNodeFromFriend,
} from '@views/game/lol-chess/utils';
import { useEffect, useState } from 'react';
import {
  FriendVisGraph,
  FriendVisGraphLoading,
} from '@views/game/lol-chess/components/FriendVisGraph/FriendVisGraph';

interface DetailPageProps {
  name: string;
}

export const DetailPage = ({ name }: DetailPageProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [nodes, setNodes] = useState<VisGraphNode[]>([]);
  const [edges, setEdges] = useState<VisGraphEdge[]>([]);

  useEffect(() => {
    const fetchSummoner = async () => {
      const data = await LoLChessApiClient.getLoLChessFriends(name);
      const rootNode: VisGraphNode = {
        id: data.name,
        label: data.name,
        image: data.profileImageUrl,
      };
      const friendNodes = data.friends.map(getNodeFromFriend);
      const friendEdges = data.friends.map((friend) => {
        return getEdgeFromFriend(data.name, friend);
      });
      setNodes([rootNode, ...friendNodes]);
      setEdges([...friendEdges]);
      setIsLoading(false);
    };
    fetchSummoner();
  }, []);

  if (isLoading) {
    return <FriendVisGraphLoading />;
  }

  return (
    <div>
      <FriendVisGraph nodes={nodes} edges={edges} />
    </div>
  );
};
