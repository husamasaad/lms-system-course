'use client'

import React from 'react'
import SearchBar from './SearchBar'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

function Header() {

  const { user} = useUser()

  return (
    <div className='ml-64 p-6 border-b flex items-center justify-between'>
      <SearchBar />
      {!user ? (
        <SignInButton />
        ) : (
        <UserButton />
      )}
    </div>
  )
}

export default Header