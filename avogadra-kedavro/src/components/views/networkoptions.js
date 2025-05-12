export const options = {
  nodes: {
    shape: 'box',
    margin: 10,
    font: {
      size: 14,
      face: 'Arial',
      color: '#333333'
    },
    borderWidth: 1,
    scaling: {
      label: {
        enabled: true,
        min: 14,
        max: 20
      }
    },
    shadow: false
  },
  edges: {
    arrows: {
      to: { enabled: true, scaleFactor: 0.6, type: 'arrow' }
    },
    color: {
      color: '#cccccc',
      highlight: '#b0b0b0',
      hover: '#b0b0b0',
      opacity: 0.8
    },
    smooth: {
      enabled: true,
      type: "continuous",
      roundness: 0.1
    },
    width: 0.5
  },
  groups: {
    derivedElement: {
      color: { background: '#dcedc8', border: '#486328' },
      shape: 'box',
      font: { size: 16, color: '#486328' }
    },
    water: {
      color: { background: '#7E96A4', border: '#003655' },
      shape: 'ellipse',
      font: { size: 16, color: '#003655' }
    },
    fire: {
      color: { background: '#D57060', border: '#680000' },
      shape: 'ellipse',
      font: { size: 16, color: '#680000' }
    },
    air: {
      color: { background: '#D9D9D9', border: '#636363' },
      shape: 'ellipse',
      font: { size: 16, color: '#636363' }
    },
    earth: {
      color: { background: '#86654E', border: '#4E2001' },
      shape: 'ellipse',
      font: { size: 16, color: '#4E2001' }
    },
    target: {
        color: { background: '#A575A1', border: '#570C51' },
        shape: 'box',
        font: { size: 16, color: '#570C51' }
    },
    add: {
      color: { background: '#000000', border: '#7E7E7E' },
      shape: 'dot',
      size: 0,
    },
  },
  interaction: {
    hover: true,
    dragNodes: true,
    dragView: true,
    zoomView: true,
    tooltipDelay: 200
  },
  layout: {
    improvedLayout: false,
    hierarchical: {
      direction: "DU",
      sortMethod: "directed",
    },
  }
};