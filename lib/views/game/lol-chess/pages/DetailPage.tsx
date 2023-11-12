'use client';

import { LoLChessApiClient } from '@domains/external-api/lol-chess/api';
import { VisGraph } from '@domains/vis-graph/views';
import { VisGraphEdge, VisGraphNode } from '@domains/vis-graph/interface';
import {
  getEdgeFromFriend,
  getNodeFromFriend,
} from '@views/game/lol-chess/utils';
import { useEffect, useState } from 'react';

interface DetailPageProps {
  name: string;
}

export const DetailPage = ({ name }: DetailPageProps) => {
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
    };
    fetchSummoner();
  }, []);

  return (
    <div>
      <VisGraph
        nodes={nodes}
        edges={edges}
        style={{
          width: 'calc(100vw - 200px)',
          height: '400px',
          border: '1px solid #000',
        }}
      />
    </div>
  );
};
