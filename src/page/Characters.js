import React, { useState, useEffect } from 'react'
import useFetchData from '../utils/useFetchData'
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import Search from '../components/Search';

const Characters = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState('');

  const endpoint = `/character/?page=${pageNumber}&name=${search}`

  const { info, results } = useFetchData(endpoint);





  return (
    <div className=''>
      <div className=''>
        <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      </div>
      <div className='flex flex-wrap justify-center gap-5' >
        <Card results={results} />
      </div>
      <div className='pt-4 md:'>
        <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} info={info} />
      </div>
    </div>

  )
}

export default Characters