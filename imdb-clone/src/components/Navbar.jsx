import React from 'react'
import Logo from '../film-production.png'
function Navbar() {
  return (
    <div className = 'flex border space-x-8 items-center pl-3 py-4'>

        <img className = 'w-[50px]' src = {Logo} alt = " " />

        <a href = '/' className = 'text-3xl text-blue-400'> Home </a>

        <a href = '\watchlist' className = 'text-3xl text-blue-400'>WatchList</a>

    </div>
  )
}

export default Navbar