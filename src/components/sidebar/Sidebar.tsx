
import Link from 'next/link'
import React from 'react'
import MenuIcon from '../Icons/MenuIcon'








const Sidebar = () => {
  return (
    <div className="fixed top-0 z-20 w-1/2 h-screen p-6 duration-200 ease-out delay-150 bg-white -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition">


  <MenuIcon />
  <ul>
    <li>
    <a href='home'>Home</a>
    </li>
  </ul>
  <li>
    <a href='home'>Home</a>
    </li>
    <li>
    <a href='home'>Home</a>
    </li>

  <li>
    <a href='home'>Home</a>
    </li>

    </div>
  )
}

export default Sidebar
