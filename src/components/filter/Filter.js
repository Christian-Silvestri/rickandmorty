import React, { useState } from 'react'
import Button from '../Button';
import Status from './Status';

const Filter = ({ setStatus, setPageNumber }) => {
  

  const handleClearFilter = () => {
    setStatus('');
    setPageNumber(1);
    
  }
  return (
    <div>
      <h2>
        Filter
      </h2>
     
      <div>
        <Button value='reset' color='bg-rick_darkGreen' onClick={handleClearFilter} className='w-full' />
       
      </div>
      <div className='flex justify-center gap-x-24 w-full relative'>
        <Status  setStatus={setStatus} setPageNumber={setPageNumber} />
        <Status  setStatus={setStatus} setPageNumber={setPageNumber} />
        <Status  setStatus={setStatus} setPageNumber={setPageNumber} />
      </div>
    </div>

  )
}

export default Filter