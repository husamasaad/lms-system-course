import React from 'react'
import SideBarNav from '../_components/SideBarNav'

function HomeLayout({ children }) {
  return (
    <div>
      <div>
        <SideBarNav />
      </div>
      {children}
    </div>
  )
}

export default HomeLayout