import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import FilterBtn from './FilterBtn'
import useOutsideClick from '../../utils/useOutsideClick';
import Button from '../Button';

const FilterValue = ({ setPageNumber, label, filterList, filterState}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen)

  }

  const ref = useOutsideClick(handleOpen);

  return (
    <div className='w-full font-magra'>
      <div className='text-center '>
        <button
          type='button'
          onClick={handleOpen}
          className={`${isOpen ? 'bg-amber-400' : 'bg-rick_darkGreenh'} 
           text-white w-full rounded-md border-rick_blue border-2 py-2 uppercase `} >
          {label}
        </button>
      </div>
      {isOpen && (
        <div
          ref={ref}
          onClick={() => setIsOpen(!isOpen)}
          className='bg-zinc-800 z-10 flex w-screen flex-wrap justify-between  gap-4 absolute top-16 left-0'>
          {filterList.map((items, index) => (
            <FilterBtn
              key={index}
              setPageNumber={setPageNumber}
              filterState={filterState}
              items={items}
            />
          )
          )}
        </div>
      )}
    </div>
  )
}

export default FilterValue;