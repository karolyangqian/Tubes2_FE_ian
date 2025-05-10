import React, { use } from 'react'
import Image from 'next/image'

export default function Start() {


  return (
    <div className='absolute flex flex-col items-center inset-0 bg-[#2E1855]/84 rounded-4xl m-10 p-8 overflow-hidden'>
      <Image
        src="/about/about.svg"
        alt="About"
        width={900}
        height={200}
      />
    </div>
  )
}