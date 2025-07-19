import React from 'react'

import { Usestate } from 'react'
const Cards = ({hello}) => {
  
 
  
  return (
<div className="max-w-sm mb-6 md:md-0 col-span-12 sm:col-span-6 lg:col-span-4 border p-4 rounded-lg shadow-lg">
  <a href="#">
    <img srcSet= {hello.image} />
    <div className="flex items-center mb-3">
      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold leading-5 text-white font-display mr-2 capitalize bg-red-500">
        {hello.description}
      </span>
      <p className="font-mono text-xs font-normal opacity-75 text-black">{hello.title}</p>
    </div>
    <p className="font-display max-w-sm text-2xl font-bold leading-tight">
      <span className="link-underline link-underline-black text-black">
       {hello.subtitle}
      </span>
    </p>
  </a>
</div>


  )
}

export default Cards