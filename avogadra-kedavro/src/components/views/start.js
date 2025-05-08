import React from 'react'
import { Network } from 'vis-network'
import { useEffect } from 'react'
import RetroButton from '@/components/buttons/retrobutton'
import RetroTextInput from '@/components/text/retrotextinput'

export default function Start() {
  const [dfs, setDfs] = React.useState(false)
  const [bfs, setBfs] = React.useState(false)
  const [bidirectional, setBidirectional] = React.useState(false)
  const [multipleRecipe, setMultipleRecipe] = React.useState(false)
  const [elements, setElements] = React.useState([])
  const [maxRecipe, setMaxRecipe] = React.useState(0)
  const [searched, setSearched] = React.useState(false)
  const [graphData, setGraphData] = React.useState([])
  const [time, setTime] = React.useState(0)
  const [node, setNode] = React.useState(0)
  

  const handleOnSearch = () => {
    console.log("Searching for:", elements);
  }

  const fetchGraphData = async () => {
    try {
      const response = await fetch('http://localhost:8080/graph-data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const graphData = await response.json();
      setGraphData(graphData);
      console.log('Graph data fetched:', graphData);
    } catch (error) {
      console.error('Error fetching graph data:', error);
    }
    setSearched(!searched);
    setTime(100);
    setNode(100);
    
  }

  useEffect(() => {
    if (searched && graphData) {
      const container = document.getElementById("graph");
      if (container) {
        var nodes = [
          { id: 1, label: "Node 1" },
          { id: 2, label: "Node 2" },
          { id: 3, label: "Node 3" },
          { id: 4, label: "Node 4" },
          { id: 5, label: "Node 5" },
          { id: 11, label: "Node 1" },
          { id: 12, label: "Node 2" },
          { id: 13, label: "Node 3" },
          { id: 14, label: "Node 4" },
          { id: 15, label: "Node 5" },
        ];
        
        var edges = [
          { from: 1, to: 3, arrows: "to" },
          { from: 2, to: 1, arrows: "to" },
          { from: 2, to: 4, arrows: "to" },
          { from: 2, to: 5, arrows: "to" },
          { from: 1, to: 13, arrows: "to" },
          { from: 2, to: 11, arrows: "to" },
          { from: 2, to: 14, arrows: "to" },
          { from: 12, to: 2, arrows: "to" },
          { from: 12, to: 5, arrows: "to" },
        ];
        const data = {
          nodes: nodes,
          edges: edges,
        };
        const options = {
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
          baseElement: {
              color: { background: '#E77BFF', border: '#0077cc' },
              shape: 'ellipse',
              font: { size: 16, color: '#004c8c' }
          },
          derivedElement: {
              color: { background: '#E77BFF', border: '#387002' }
          }
        },
        interaction: {
          hover: true,
          dragNodes: true,
          dragView: true,
          zoomView: true,
          tooltipDelay: 200
        },
        };
        new Network(container, data, options);
      }
    }
  }, [searched, graphData]);

  return (
    <div className='absolute inset-0 bg-[#2E1855]/84 bg- rounded-lg m-10 p-8'>
      <h1 className="text-center text-white text-xs md:text-lg lg:text-2xl font-bold font-press-start text-shadow-press-start tracking-widest">
        PICK YOUR ALGORITHM, LET THE ALCHEMY BEGIN.
      </h1>
      { /* UI components */ }
      <div className='flex p-8 justify-between'>
        <div className='flex flex-col'>
          {/* Top Row - 3 Buttons */}
          <div className='flex justify-between mb-4 gap-4'>
            <RetroButton
              iconPath={bfs ? "/start/orb-purple.svg" : "/start/orb-black.svg"}
              text="BFS"
              onClick={() => { setBfs(true); setDfs(false); setBidirectional(false); }}
            />
            <RetroButton
              iconPath={dfs ? "/start/orb-purple.svg" : "/start/orb-black.svg"}
              text="DFS"
              onClick={() => { setDfs(true); setBfs(false); setBidirectional(false); }}
            />
            <RetroButton
              iconPath={bidirectional ? "/start/orb-purple.svg" : "/start/orb-black.svg"}
              text="BIDIRECTIONAL"
              onClick={() => { setBidirectional(true); setDfs(false); setBfs(false); }}
            />
          </div>
          
          {/* Bottom Button */}
          <div className='flex justify-between'>
            <RetroTextInput
              value={elements}
              onChange={(e) => setElements(e.target.value.toUpperCase())}
              placeholder="ENTER YOUR ELEMENTS HERE"
              iconPath="/start/magnifying-glass.svg"
              stretch={true}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className='flex flex-col justify-between ml-8'>
          {/* Top Button */}
          <div className='flex justify-between'>
            <RetroButton
              iconPath={multipleRecipe ? "/start/toggle-on.svg" : "/start/toggle-off.svg"}
              text="MULTIPLE RECIPE"
              onClick={() => { setMultipleRecipe(!multipleRecipe); }}
            />
          </div>
          
          {/* Bottom Row - 2 Buttons */}
          <div className='flex justify-between mt-4 gap-4'>
            <RetroTextInput
              label={"MAX RECIPE: "}
              value={maxRecipe}
              onChange={(e) => setMaxRecipe(e.target.value > 0 ? e.target.value : 1)}
              placeholder="N"
              stretch={false}
              type='number'
            />
            <RetroButton
              iconPath="/start/magnifying-glass.svg"
              text={null}
              onClick={fetchGraphData}
            />
          </div>
        </div>
      </div>
      {searched && (
        <div className='flex justify-between max-h-[600px] overflow-hidden'>
          <div id='graph' className='w-[1000px] mt-8'></div>
          <div className='flex flex-col mt-20 items-center gap-10'>
            <div className='text-center text-[#E77BFF] text-3xl max-w-[600px] font-bold font-press-start text-shadow-press-start tracking-widest leading-15'>
              Voilà, YOU FOUND THE RECIPE!
            </div>
            <div className='flex items-center bg-[url("/start/button-brown-plain.svg")] bg-cover bg-no-repeat h-[110px] aspect-[356/108]'>
              <h1 className="text-left text-black font-press-start text-shadow-press-start text-xs md:text-lg lg:text-2xl font-bold tracking-wider pl-8">
                TIME:{time}ms
              </h1>
            </div>
            <div className='flex items-center bg-[url("/start/button-brown-plain.svg")] bg-cover bg-no-repeat h-[110px] aspect-[356/108]'>
              <h1 className="text-left text-black font-press-start text-shadow-press-start text-xs md:text-lg lg:text-2xl font-bold tracking-wider pl-8">
                NODE:{node}
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}