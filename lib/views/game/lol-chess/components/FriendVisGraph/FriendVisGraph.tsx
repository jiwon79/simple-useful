'use client';

import { VisGraphEdge, VisGraphNode } from '@domains/vis-graph/interface';
import { VisGraph } from '@domains/vis-graph/views';
import styles from './FriendVisGraph.module.scss';

interface FriendVisGraphProp {
  nodes: VisGraphNode[];
  edges: VisGraphEdge[];
}

export const FriendVisGraph = ({ nodes, edges }: FriendVisGraphProp) => {
  return <VisGraph nodes={nodes} edges={edges} className={styles.graphWrap} />;
};

export const FriendVisGraphLoading = () => {
  return (
    <div className={styles.graphWrap}>
      <p className={styles.loadingText}>loading...</p>
    </div>
  );
};
