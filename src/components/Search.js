import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import useUpdateWidth from '../utils/useUpdateWidth';
import Button from './Button';

const Search = ({ setSearch, setPageNumber }) => {
  const [value, setValue] = useState('')

  //width of viewport
  const width = useUpdateWidth();

  //Update and Clear the value of search result 
  const handleSeaarch = (e) => {
    setSearch(e.target.value);
    setValue(e.target.value)
    setPageNumber(1);
  }
  const handleClear = (e) => {
    setSearch('');
    setValue('');
    setPageNumber(1);
    e.preventDefault()
  }

  //Animation for clear button
  /* const animationButton = {
    animate: {
      scale: 1.1,
      transition: {
        duration: 0.05,
        ease: 'linear',
        stiffness: 200,
        dumping: 50
      }
    }
  } */

  return (
    <form className='flex flex-col sm:flex-row xl:flex-col sm:items-center sm:justify-center text-2xl font-magra gap-2'>
      <input
        type='text'
        value={value}
        onChange={handleSeaarch}
        placeholder='Search characters...'
        className='rounded-md py-2 px-4  sm:w-full ' />
      {/* <motion.button
        whileHover={'animate'}
        variants={width > 1024 && animationButton}
        type='button'
        onClick={handleClear}
        className='btn-search font-bold rounded-md py-2 sm:px-10 border-2 border-white'>
        Clear
      </motion.button> */}
      <Button value='clear' className='w-full' border='border-rick_lightGreen' color='' onClick={handleClear} />
    </form>
  )
}

export default Search