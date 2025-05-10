export const nodes = [
  { id: 1, label: "Water", group: "water" },
  { id: 2, label: "Fire", group: "fire" },
  { id: 3, label: "Air", group: "air" },
  { id: 4, label: "Earth", group: "earth" },

  { id: 5, label: "Brick", group: "target" },

  { id: 6, label: "", group: "add" },
  { id: 7, label: "", group: "add" },

  { id: 8, label: "Node 1", group: "derivedElement" },
  { id: 9, label: "Node 2", group: "derivedElement" },
  { id: 10, label: "", group: "add"},
];

export const edges = [
  { from: 1, to: 6, arrows: "" },
  { from: 2, to: 6, arrows: "" },
  
  { from: 3, to: 7, arrows: "" },
  { from: 4, to: 7, arrows: "" },
  { from: 6, to: 8, arrows: "middle" },
  { from: 7, to: 9, arrows: "middle" },
  { from: 8, to: 10, arrows: "" },
  { from: 9, to: 10, arrows: "" },
  { from: 10, to: 5, arrows: "middle" },
];

export const data = {
  nodes: nodes,
  edges: edges,
};