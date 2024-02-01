import React from 'react'
import SideBarNav from '../_components/SideBarNav'

function HomeLayout({ children }) {
  return (
    <div>
      <div className='h-full w-64 flex flex-col fixed inset-y-0 z-50'>
        <SideBarNav />
      </div>
      {children}
    </div>
  )
}

export default HomeLayout