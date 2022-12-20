import React from 'react'

const FilterBtn = ({ setPageNumber, items, filterState }) => {

  const handleFilter = () => {
    filterState(items)
    setPageNumber(1)

  }

  return (
    
      <button onClick={handleFilter} className='border w-1/2  border-amber-400 uppercase text-sm px-8 rounded-md bg-zinc-800 py-2'>
        {items}
      </button>
    
  )
}

export default FilterBtn