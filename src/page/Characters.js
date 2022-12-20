import React, { useState, useEffect } from 'react'
import useFetchData from '../utils/useFetchData'
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import Filter from '../components/filter/Filter';

const Characters = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');
  const [status, setStatus] = useState('');

  const endpoint = `/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`

  const { info, results } = useFetchData(endpoint);

  return (

    <div className='xl:flex xl:item-center xl:justify-center w-full xl:px-24 relative'>
      <div className='px-4 md:px-24 lg:px-48 xl:px-0 xl:flex xl:flex-col  xl:min-w-[350px] xl:fixed left-16 top-48'>
        <div className=''>
          <h1 className='uppercase text-5xl pt-4 pb-8 text-center'>
            characters
          </h1>
          <Search setSearch={setSearch} setPageNumber={setPageNumber} />
        </div>
        <div className='py-4'>
          <Filter setPageNumber={setPageNumber} setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} />
        </div>
      </div>
      <div>
        <div className='flex flex-wrap justify-center xl:pl-80 xl:pt-72' >
          <Card results={results} />
        </div>
        <div className='pt-4 xl:py-12'>
          <Pagination results={results} setPageNumber={setPageNumber} pageNumber={pageNumber} info={info} />
        </div>
      </div>
    </div>

  )
}

export default Characters