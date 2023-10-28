import VisGraphWrapper, { Options } from "react-vis-graph-wrapper";
import { ViwNetworkEdge, VisNetworkNode } from "../interface"

const options: Options = {
  layout: {
    // randomSeed: 0
  },
  nodes: {
    borderWidth: 0,
    shape: 'circularImage',
    image: 'https://cdn-store.leagueoflegends.co.kr/images/v2/profileicons/4025.jpg',
    scaling: {
      customScalingFunction: function (min, max, total, value) {
        return value / total;
      },
      min: 5,
      max: 150,
    },
    font: {
      size: 20,
    },
  },
  edges: {
    color: '#CCD1FF',
  },
};

interface VisGraphProp {
  nodes: VisNetworkNode[];
  edges: ViwNetworkEdge[];
}

export const VisGraph = ({nodes, edges}: VisGraphProp) => {
  const graphData = {
    nodes,
    edges,
  };

  return (<VisGraphWrapper options={options} graph={graphData}/>)
}
