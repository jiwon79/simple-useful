'use client';

import { LoLChessApiClient } from '@domains/external-api/lol-chess/api';
import { VisGraphEdge, VisGraphNode } from '@domains/vis-graph/interface';
import {
  getEdgeFromFriend,
  getNodeFromFriend,
} from '@views/game/lol-chess/utils';
import { useEffect, useRef, useState } from 'react';
import {
  FriendVisGraph,
  FriendVisGraphLoading,
} from '@views/game/lol-chess/components/FriendVisGraph/FriendVisGraph';
import { removeDuplicatedNodeIDs } from '@domains/vis-graph/utils';

interface DetailPageProps {
  name: string;
}

export const DetailPage = ({ name }: DetailPageProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [nodes, setNodes] = useState<VisGraphNode[]>([]);
  const [edges, setEdges] = useState<VisGraphEdge[]>([]);
  const friendNamesRef = useRef<string[]>([]);

  useEffect(() => {
    const fetchSummoner = async () => {
      const data = await LoLChessApiClient.getLoLChessFriends(name);
      const rootNode: VisGraphNode = {
        id: data.name,
        label: data.name,
        image: data.profileImageUrl,
        value: data.friends.length * 1.3,
      };
      const friendNames = data.friends.map((friend) => friend.name);
      friendNamesRef.current = friendNames;
      const friendNodes = data.friends.map((friend) =>
        getNodeFromFriend(friend, true),
      );
      const friendEdges = data.friends.map((friend) => {
        return getEdgeFromFriend(data.name, friend, true);
      });

      setNodes([rootNode, ...friendNodes]);
      setEdges([...friendEdges]);
      setIsLoading(false);

      return friendNames;
    };

    const fetchFriend = async (friendName: string) => {
      const data = await LoLChessApiClient.getLoLChessFriends(friendName);
      const slicedFriends = data.friends.slice(0, 8);
      const friendNodes = slicedFriends.map((friend) =>
        getNodeFromFriend(friend),
      );
      const friendEdges = slicedFriends.map((friend) => {
        return getEdgeFromFriend(data.name, friend);
      });

      setNodes((prev) => removeDuplicatedNodeIDs([...prev, ...friendNodes]));
      setEdges((prev) => [...prev, ...friendEdges]);
    };

    fetchSummoner()
      .then(async (friendNames) => {
        await Promise.all(friendNames.map(fetchFriend));
      })
      .then(() => {
        setNodes((prevNodes) => {
          return prevNodes.map((node, index) => {
            if (index <= friendNamesRef.current.length) {
              return {
                ...node,
                value:
                  (node.value * Math.log(friendNamesRef.current.length)) / 2,
              };
            }
            return node;
          });
        });
      });
  }, [name]);

  if (isLoading) {
    return <FriendVisGraphLoading />;
  }

  return (
    <div>
      <FriendVisGraph nodes={nodes} edges={edges} />
    </div>
  );
};
