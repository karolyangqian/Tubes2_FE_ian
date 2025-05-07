import React from 'react'
import RetroButton from '@/components/buttons/retrobutton'
import RetroTextInput from '@/components/text/retrotextinput'

export default function Start() {
  const [dfs, setDfs] = React.useState(false)
  const [bfs, setBfs] = React.useState(false)
  const [bidirectional, setBidirectional] = React.useState(false)
  const [multipleRecipe, setMultipleRecipe] = React.useState(false)
  const [elements, setElements] = React.useState([])
  const [maxRecipe, setMaxRecipe] = React.useState(0)

  const handleOnSearch = () => {
    // Handle search logic here
    console.log("Searching for:", elements);
  }

  return (
    <div className='absolute inset-0 bg-[#2E1855]/84 bg- rounded-lg m-10 p-8'>
      <h1 className="text-center text-white text-xs md:text-lg lg:text-2xl font-bold font-press-start text-shadow-press-start tracking-widest">
        PICK YOUR ALGORITHM, LET THE ALCHEMY BEGIN.
      </h1>
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
              onChange={(e) => setMaxRecipe(e.target.value > 0 ? e.target.value : "")}
              placeholder="N"
              stretch={false}
              type='number'
            />
            <RetroButton
              iconPath="/start/magnifying-glass.svg"
              text={null}
              onClick={handleOnSearch}
            />
          </div>
        </div>
      </div>

    </div>
  )
}