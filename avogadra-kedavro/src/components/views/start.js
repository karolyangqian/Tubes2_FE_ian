import React from 'react'
import RetroButton from '@/components/buttons/retrobutton'

export default function Start() {
  return (
    <div className='absolute inset-0 bg-[#2E1855]/84 bg- rounded-lg m-10 p-8'>
      <h1 className="text-center text-white text-xs md:text-lg lg:text-2xl font-bold font-press-start text-shadow-press-start">
        PICK YOUR ALGORITHM, LET THE ALCHEMY BEGIN.
      </h1>
      <div className='flex p-8'>
      <div className='flex-1 flex flex-col justify-between'>
        {/* Top Row - 3 Buttons */}
        <div className='flex justify-between mb-4'>
          <RetroButton
            iconPath="/start/orb-purple.svg"
            text="BFS"
            onClick={() => {}}
          />
          <RetroButton
            iconPath="/start/orb-black.svg"
            text="DFS"
            onClick={() => {}}
          />
          <RetroButton
            iconPath="/start/orb-black.svg"
            text="BIDIRECTIONAL"
            onClick={() => {}}
          />
        </div>
        
        {/* Bottom Button */}
        <div className='flex justify-between'>
          <RetroButton
            iconPath="/start/magnifying-glass.svg"
            text="ENTER YOUR ELEMENTS HERE"
            onClick={() => {}}
            className="w-full"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className='flex-1 flex flex-col justify-between ml-8'>
        {/* Top Button */}
        <div className='flex justify-between'>
          <RetroButton
            iconPath="/start/toggle-on.svg"
            text="MULTIPLE RECIPE"
            onClick={() => {}}
            className="w-full"
          />
        </div>
        
        {/* Bottom Row - 2 Buttons */}
        <div className='flex justify-between mt-4'>
          <RetroButton
            iconPath={null}
            text="MAX RECIPE: N"
            onClick={() => {}}
          />
          <RetroButton
            iconPath="/start/magnifying-glass.svg"
            text={null}
            onClick={() => {}}
          />
        </div>
      </div>
      </div>

    </div>
  )
}