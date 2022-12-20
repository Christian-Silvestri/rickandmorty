import React from 'react'

const FilterBtn = ({ setPageNumber, items,filterState }) => {

  const handleFilter = () => {
    filterState(items)
    setPageNumber(1)

  }

  return (
    <button onClick={handleFilter} className='border px-4 rounded-md bg-zinc-800 py-2'>
      {items}
    </button>
  )
}

export default FilterBtn