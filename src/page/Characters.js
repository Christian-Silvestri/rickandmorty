import React, { useState, useEffect } from 'react'
import useFetchData from '../utils/useFetchData'
import Card from '../components/Card';

const Characters = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const endpoint = `/character/?page=${pageNumber}`

  const { info, results } = useFetchData(endpoint);





  return (

    <div className='flex flex-wrap justify-center gap-5' >
      <Card results={results} />
    </div>


  )
}

export default Characters