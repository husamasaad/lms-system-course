'use client'

import React, { useState } from 'react'

function CategoryFilter() {

  const [activeIndex, setActiveIndex] = useState(0)

  const filterOptinos = [
    {
      id: 1,
      name: 'All',
      value: 'all'
    },
    {
      id: 2,
      name: 'React Js',
      value: 'reactjs'
    },
    {
      id: 3,
      name: 'Tailwind Css',
      value: 'tailwindcss'
    },
    {
      id: 4,
      name: 'Next Js',
      value: 'nextjs'
    },
    {
      id: 5,
      name: 'Firebase',
      value: 'firebase'
    },
  ]




  return (
    <div className='flex items-center gap-5 flex-wrap'>
      {filterOptinos.map((item, index) => (
        <button 
          key={item.id}
          className={`border py-2 px-4 text-sm rounded-md hover:border-purple-800 hover:bg-gray-50 font-semibold ${activeIndex == index? 'border-purple-800 bg-purple-50': null}`}
          onClick={() => setActiveIndex(index)}
        >
          <h2>
            {item.name}
          </h2>
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter