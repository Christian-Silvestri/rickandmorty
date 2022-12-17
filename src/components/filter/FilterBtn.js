import React from 'react'

const FilterBtn = ({ setPageNumber, setStatus, items, name, index }) => {

  const handleFilter = () => {
    setStatus(items)
    setPageNumber(1)

  }

  return (
    <button onClick={handleFilter} className='border px-2'>
      {items}
    </button>
  )
}

export default FilterBtn