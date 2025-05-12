import React from 'react'
import { Network } from 'vis-network'
import { useEffect } from 'react'
import { options } from './networkoptions.js'
import { convertDataToNetwork } from './utils.js'
import RetroButton from '@/components/buttons/retrobutton'
import RetroTextInput from '@/components/text/retrotextinput'

export default function Start() {
  const [bfs, setBfs] = React.useState(true)
  const [dfs, setDfs] = React.useState(false)
  const [bidirectional, setBidirectional] = React.useState(false)
  const [multipleRecipe, setMultipleRecipe] = React.useState(false)
  const [elements, setElements] = React.useState([])
  const [maxRecipe, setMaxRecipe] = React.useState(1)
  const [searched, setSearched] = React.useState(false)
  const [graphData, setGraphData] = React.useState([])
  const [time, setTime] = React.useState(0)
  const [node, setNode] = React.useState(0)
  const [recipeFound, setRecipeFound] = React.useState(false)
  

  const handleOnSearch = () => {
    console.log("Searching for:", elements);
  }
  const readStubTree = async () => {
    try {
      const response = await fetch('/stub-tree.json');
      const data = await response.json();
      setGraphData(convertDataToNetwork(data));
      setSearched(!searched);
      setTime(data['searchTimeMs']);
      setNode(data['nodesVisited']);
      return;
    } catch (err) {
      console.error('Error loading JSON:', err);
      return;
    }
  };

  const fetchGraphData = async () => {
    if (elements.length > 0 && (bfs || dfs || bidirectional) && maxRecipe > 0) {
      setSearched(false);
      setRecipeFound(false);
      setGraphData([]);
      setTime(0);
      setNode(0);
      try {
        const algorithm = bfs ? 'bfs' : dfs ? 'dfs' : 'bidirectional';
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/solve-recipe?element=${elements}&algorithm=${algorithm}&count=${maxRecipe}`);
        const data = await response.json();
        setGraphData(convertDataToNetwork(data));
        setRecipeFound(data.recipes.length > 0);
        console.log('Data fetched:', data);
        console.log('Graph data:', graphData);
        setSearched(true);
        setTime(data.searchTimeMs);
        setNode(data.nodesVisited);
      }
      catch (error) {
        // setGraphData([]);
        setSearched(true);
      }
    }
  }

  useEffect(() => {
    if (!multipleRecipe) {
      setMaxRecipe(1);
    }
  }, [multipleRecipe]);
  
  useEffect(() => {
    if (searched && graphData) {
      const container = document.getElementById("graph");
      if (container) {
        new Network(container, graphData, options);
      }
    }
  }, [searched, graphData]);

  return (
    <div className='absolute flex flex-col inset-0 bg-[#2E1855]/84 rounded-4xl m-10 p-8 overflow-y-auto snap-always snap-y'>
      <h1 className="text-center text-white text-xs md:text-lg lg:text-2xl font-bold font-press-start text-shadow-press-start tracking-widest">
        PICK YOUR ALGORITHM, LET THE ALCHEMY BEGIN.
      </h1>
      { /* UI components */ }
      <div className='flex p-8 justify-between snap-always snap-x overflow-x-auto'>
        <div className='flex flex-col'>
          {/* Top Row - 3 Buttons */}
          <div className='flex justify-between mb-4 gap-4 flex-wrap'>
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
          <div className='flex justify-between pb-8'>
            <RetroTextInput
              value={elements.toString().toUpperCase()}
              onChange={(e) => setElements(e.target.value.toLowerCase())}
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
          <div className='flex justify-between mt-4 gap-4 pb-8'>
            <RetroTextInput
              label={"MAX RECIPE: "}
              value={maxRecipe}
              onChange={(e) => setMaxRecipe(e.target.value > 0 ? e.target.value : 1)}
              placeholder="N"
              stretch={false}
              type='number'
              isActive={multipleRecipe}
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
        <div className='flex justify-between grid-cols-2 gap-4 items-center snap-x overflow-hidden'>
          <div id='graph' className='h-full w-full mt-8'></div>
          <div className='flex flex-col items-center gap-10'>
            <div className='text-center text-[#E77BFF] text-xl lg:text-xl max-w-[600px] font-bold font-press-start text-shadow-press-start tracking-widest leading-10'>
              {recipeFound ? 
                "VOILÀ, YOU FOUND THE RECIPE!" : "NO RECIPE FOUND, TRY ANOTHER!"
              }
            </div>
            <div className='flex items-center bg-[url("/start/button-brown-plain.svg")] bg-cover bg-no-repeat h-[60px] md:h-[90px] aspect-[356/108] '>
              <h1 className="text-left text-black font-press-start text-shadow-press-start text-xs md:text-lg font-bold tracking-wider pl-8">
                TIME:{time.toPrecision(5)}ms
              </h1>
            </div>
            <div className='flex items-center bg-[url("/start/button-brown-plain.svg")] bg-cover bg-no-repeat h-[60px] md:h-[90px] aspect-[356/108]'>
              <h1 className="text-left text-black font-press-start text-shadow-press-start text-xs md:text-lg font-bold tracking-wider pl-8">
                NODE:{node}
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}