'use client';

import VisGraphWrapper, { Options } from 'react-vis-graph-wrapper';
import { VisGraphEdge, VisGraphNode } from '../interface';

const options: Options = {
  layout: {
    clusterThreshold: 3,
  },
  nodes: {
    borderWidth: 0,
    shape: 'circularImage',
    image:
      'https://cdn-store.leagueoflegends.co.kr/images/v2/profileicons/4025.jpg',
    scaling: {
      customScalingFunction(min, max, total, value) {
        return value / total;
      },
      min: 5,
      max: 150,
    },
    font: {
      size: 18,
    },
  },
  edges: {
    color: '#CCD1FF',
    physics: true,
  },
};

interface VisGraphProp {
  nodes: VisGraphNode[];
  edges: VisGraphEdge[];
  style?: React.CSSProperties;
  className?: string;
}

export const VisGraph = ({ nodes, edges, style, className }: VisGraphProp) => {
  const graphData = {
    nodes,
    edges,
  };

  return (
    <VisGraphWrapper
      graph={graphData}
      options={options}
      style={style}
      className={className}
    />
  );
};
