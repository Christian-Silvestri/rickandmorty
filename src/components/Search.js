import React, { useState } from 'react'

const Search = ({setSearch, setPageNumber}) => {
  const [value, setValue] = useState('')
  
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

  return (
    <form className='flex flex-col sm:flex-row sm:items-center sm:justify-center text-2xl font-magra gap-2'>
      <input 
      type='text' 
      value={value} 
      onChange={handleSeaarch} 
      placeholder='Search characters...'
      className='rounded-md py-2 px-4 sm:w-full '  />
      <button 
      type='button' 
      onClick={handleClear} 
      className='btn-search rounded-md py-2 sm:px-10'>
       Clear
      </button>
    </form>
  )
}

export default Search