import React from 'react'
import Logo from '../film-production.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className = 'flex border space-x-8 items-center pl-3 py-4'>

        <img className = 'w-[50px]' src = {Logo} alt = " " />

        <Link to = '/' className = 'text-3xl text-blue-400'> Movies </Link>

        <Link to = '/watchlist' className = 'text-3xl text-blue-400'> WatchList </Link>

    </div>
  )
}

export default Navbar