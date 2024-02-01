'use client'
import { Layout, Mail, Search, Shield } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const menuList = [
  {
    id: 1,
    name: 'Browse',
    icon: Search,
    path: '/browse'
  },
  {
    id: 2,
    name: 'Dashboard',
    icon: Layout,
    path: '/dashboard'
  },
  {
    id: 3,
    name: 'Upgrade',
    icon: Shield,
    path: '/upgrade'
  },
  {
    id: 4,
    name: 'Newsletter',
    icon: Mail,
    path: '/newsletter'
  },
]

function SideBarNav() {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className='h-full bg-white border-r flex flex-col overflow-y-auto shadow-md'>
      <div className='p-5 border-b'>
        <Image 
          src="/logo.svg"
          width={170}
          height={100}
        />
      </div>
      <div className='flex flex-col'>
        {menuList.map((item, index) => (
          <div onClick={() => setActiveIndex(index)}  key={item.id} className={`flex gap-2 items-center px-6 py-4 cursor-pointer text-gray-500 hover:bg-gray-100 ${activeIndex == index ? "bg-purple-50 text-purple-800" : null}`}>
            <item.icon />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideBarNav