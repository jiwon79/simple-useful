import { VisGraphNode } from '@domains/vis-graph/interface';

export const removeDuplicatedNodeIDs = (nodes: VisGraphNode[]) => {
  const nodeIDs = new Set<string>();
  const filteredNodes: VisGraphNode[] = [];

  nodes.forEach((node) => {
    if (!nodeIDs.has(node.id)) {
      nodeIDs.add(node.id);
      filteredNodes.push(node);
    }
  });

  return filteredNodes;
};
