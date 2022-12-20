import React, { useState, useRef, useEffect } from 'react'
import FilterBtn from './FilterBtn'
import useOutsideClick from '../../utils/useOutsideClick';

const Status = ({ setStatus, setPageNumber, filterState }) => {
  const [isOpen, setIsOpen] = useState(false);
  const status = ['Alive', 'Dead', 'Unknown']

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const ref = useOutsideClick(handleOpen);

  return (
    <div className='w-full'>
      <div className='text-center border' onClick={handleOpen}>
        status
      </div>
      {isOpen && (
        <div
          ref={ref}
          onClick={() => setIsOpen(!isOpen)}
          className='bg-zinc-800 z-10 flex w-screen  items-start flex-wrap gap-x-8 gap-y-4 border absolute top-10 left-0'>
          {status.map((items, index) => (
            <FilterBtn
              key={index}
              name='status'
              setPageNumber={setPageNumber}
              filterState={setStatus}
              items={items}
            />
          )
          )}
        </div>
      )}
    </div>
  )
}

export default Status



