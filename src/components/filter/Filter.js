import React, { useState } from 'react'
import Button from '../Button';
import FilterValue from './FilterValue';

const Filter = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
  const status = ['Alive', 'Dead', 'Unknown'];
  const gender = ['female', 'male', 'genderless', 'unknown'];
  const species = [
    'Human',
    'Alien',
    'Humanoid',
    'Poopybutthole',
    'Mythological',
    'Unknown',
    'Animal',
    'Disease',
    'Robot',
    'Cronenberg',
    'Planet',
  ];


  const handleClearFilter = () => {
    setStatus('');
    setGender('');
    setSpecies('');
    setPageNumber(1);

  }
  return (
    <div className='font-magra uppercase'>
      <div className='flex justify-center gap-x-2 w-full relative pt-2'>
        <FilterValue setPageNumber={setPageNumber} filterState={setStatus} filterList={status} label={'status'} />
        <FilterValue setPageNumber={setPageNumber} filterState={setGender} filterList={gender} label={'gender'} />
        <FilterValue setPageNumber={setPageNumber} filterState={setSpecies} filterList={species} label={'species'} />
      </div>
      <div>
        <Button value='reset' color='bg-rick_darkGreen' onClick={handleClearFilter} className='w-full' />

      </div>
      
    </div>

  )
}

export default Filter