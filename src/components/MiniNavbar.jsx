import React from 'react'
import { Link } from 'react-router-dom'

function MiniNavbar() {
  return (
    <div className='bg-black text-white p-5'>
      <Link to="/" className='text-5xl font-extrabold text-white mb-4 cursor-pointer'>D!</Link>
    </div>
  )
}

export default MiniNavbar
