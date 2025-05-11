let nodeCounter = 0;

export function generateNodeId() {
  return nodeCounter++;
}

export function resetNodeCounter() {
  nodeCounter = 0;
}

export function convertDataToNetwork(data) {
  console.log("Converting data to network:", data);
  const recipes = data.recipes;
  var networkData = {nodes: [], edges: []};
  if (recipes && recipes.length > 0) {
    const root = recipes[0];
    resetNodeCounter();
    recipesToNetworkHelper(root, networkData);
  } else {
    networkData.nodes.push({
      id: 0,
      label: data.elementName,
      group: "target"
    });
  }
  return networkData;
}

function recipesToNetworkHelper(parent, networkData) {
    const id = generateNodeId();
    const group = parent.isBaseElement ? parent.namaElemen.toLowerCase() : 'derivedElement';
    const node = {
        id: id,
        label: parent.namaElemen,
        group: id === 0 ? "target" : group,
    }
    networkData.nodes.push(node);
    if (parent.dibuatDari) {
      parent.dibuatDari.forEach(combinations => {
        const addId = generateNodeId();
        const addNode = {
          id: addId,
          label: "",
          group: "add"
        };
        networkData.nodes.push(addNode);
        combinations.forEach(element => {
          const childId = recipesToNetworkHelper(element, networkData);
          networkData.edges.push({
              from: childId,
              to: addId,
              arrows: ""
          });
        });
        networkData.edges.push({
          from: addId,
          to: id,
          arrows: "middle",
        });
      });
    }
    return id;
}
