export interface VisGraphNode {
  id: string;
  label: string;
  image?: string;
  value?: number;
}

export interface VisGraphEdge {
  from: string;
  to: string;
  color: string;
  value?: number;
  arrows?: string;
}
