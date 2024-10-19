
import React from 'react'

const Nav =() =>  {
  return (
    <>
      {/* Navbar */}
      <header className="bg-blue-800 text-white p-4 fixed w-full top-0 shadow-lg z-10">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-3xl font-bold">MOTUNRAYO</div>
          <div className="space-x-4">
            <a href="#about" className="hover:text-fuchsia-200">About</a>
            <a href="#skills" className="hover:text-fuchsia-200">Skills</a>
            <a href="#projects" className="hover:text-fuchsia-200">Projects</a>
            <a href="#contact" className="hover:text-fuchsia-200">Contact</a>
          </div>
        </nav>
      </header>

</>
      )}
export default Nav
