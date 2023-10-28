import {VisNetworkEdge} from "@domains/vis-graph/interface";

interface UseEdgesProp {
  from: string;
  toList: string[];
}

export function useEdges({from, toList}: UseEdgesProp): VisNetworkEdge[] {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);

  return toList.map(to => ({
    from,
    to,
    color: `#${randomColor}`
  }));
}
