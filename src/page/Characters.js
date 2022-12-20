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
    <div className=''>
      <div className=''>
        <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      </div>
      <div className='py-4'>
        <Filter setPageNumber={setPageNumber} setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} />
      </div>
      <div className='flex flex-wrap justify-center' >
        <Card results={results} />
      </div>
      <div className='pt-4 md:'>
        <Pagination results={results} setPageNumber={setPageNumber} pageNumber={pageNumber} info={info} />
      </div>
    </div>

  )
}

export default Characters