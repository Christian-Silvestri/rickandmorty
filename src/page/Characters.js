import React, { useState, useEffect } from 'react'
import useFetchData from '../utils/useFetchData'
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import Filter from '../components/filter/Filter';

const Characters = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState('');

  const [status, setStatus] = useState('');

  const endpoint = `/character/?page=${pageNumber}&name=${search}&status=${status}`

  const { info, results } = useFetchData(endpoint);





  return (
    <div className=''>
      <div className=''>
        <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      </div>
      <div>
        <Filter setPageNumber={setPageNumber} setStatus={setStatus} />
      </div>
      <div className='flex flex-wrap justify-center gap-5' >
        <Card results={results} />
      </div>
      <div className='pt-4 md:'>
        <Pagination results={results} setPageNumber={setPageNumber} pageNumber={pageNumber} info={info} />
      </div>
    </div>

  )
}

export default Characters