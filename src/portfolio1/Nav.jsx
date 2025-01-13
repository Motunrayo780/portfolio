
import React from 'react'

const Nav =() =>  {
  return (
    <nav  className='fixed top-0 z-10 flex w-full items-center 
    justify-between border-b border-b-gray-700  bg-black/70 px-16 
    py-6 text-white backdrop:-blur-md md:justify-evenly'>

      <a href=" "  className='bg-gradient-to-r  from-blue-500
      to-pink-500 bg-clip-text text-transparent opacity-80 
      text-3xl font-semibold transition-all duration-300
      hover:opacity-100'> Aaron</a>

      <ul className='hidden md-flex gap-10'>
        <a href="Home"  className='cursor-pointer opacity-70
        hover:opacity-100   transition-all duration-300'>
          
          <li>Home</li>
          </a>
          
          <a href="Tech"  className='cursor-pointer opacity-70
        hover:opacity-100   transition-all duration-300'>
          
          <li>Tech</li>
          </a>

          <a href=""  className='cursor-pointer opacity-70
        hover:opacity-100   transition-all duration-300'>
          
          <li>Home</li>
          </a>

          <a href="Home"  className='cursor-pointer opacity-70
        hover:opacity-100   transition-all duration-300'>
          
          <li>Home</li>
          </a>

      </ul>

</nav>
      )}
export default Nav
