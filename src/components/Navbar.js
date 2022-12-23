import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  const handleOpen = () => {
    setisOpen(!isOpen);
  }

  return (
    <div className='fixed w-full  z-30  '>
      <div className=' px-4 py-2 lg:py-4 border-b-4 border-rick_blue xl:py-4 flex items-center justify-between  xl:px-8 bg-zinc-800 '>
        <div>
          <div className='font-rickmorty text-4xl text-rick_lightGreen'>
            <NavLink to={'/rickandmorty'}> Rick and Morty</NavLink>
          </div>
        </div>
        <div className='font-magra text-2xl '>
          <div className='hidden lg:flex gap-x-12'>
            <NavLink to={'/rickandmorty'}>Characters</NavLink>
            <NavLink to={'/episode'}>Episode</NavLink>
            <NavLink to={'/location'}>Location</NavLink>
          </div>
          <button type='button' onClick={handleOpen} className='lg:hidden'>
            {
              !isOpen ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg> :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            }
          </button>
        </div>
      </div>
      <div className='lg:hidden  '>
        {isOpen && (
          <div onClick={() => setisOpen(false)} className='flex  flex-col items-center py-4 gap-y-4 bg-zinc-800 text-3xl border-b-2 border-rick_blue'>
            <NavLink to={'/rickandmorty'}>Characters</NavLink>
            <NavLink to={'/episode'}>Episode</NavLink>
            <NavLink to={'/location'}>Location</NavLink>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar