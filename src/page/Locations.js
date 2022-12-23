import React, { useEffect, useState } from 'react'
import useFetchData from '../utils/useFetchData'
import Card from '../components/Card';
import InputGroup from '../components/filter/InputGroup';

const Locations = () => {
  const [id, setId] = useState(1);
  const [resident, setResidents] = useState([]);
  const [location, setLocation] = useState([]);
  const endPoint = `/location/`;
  const { info } = useFetchData(endPoint);

  const api = `https://rickandmortyapi.com/api`

  const totalLocations = info?.count;
  console.log(totalLocations);

  useEffect(() => {
    (async function () {
      const response = await fetch(`${api}${endPoint}${id}`)
        .then((res) => res.json())
      setLocation(response);
      const residentLocation = await Promise.all(response.residents.map((resident) => {
        return fetch(resident).then((res) => res.json());
      }))
      setResidents(residentLocation);
    })();
    window.scrollTo(0, 0)
  }, [id, api, endPoint])

  console.log(location);
  const { dimension, name, type } = location;

  return (
    <div>
      <div className='text-center text-rick_blue text-2xl md:text-4xl lg:text-5xl xl:text-6xl xl:py-24 2xl:py-48 py-8 px-4'>
        <h1 className=''>
          NAME :
          <span className='text-white'>
            {` ${name}`}
          </span>
        </h1>
        <h1>
          TYPE :
          <span className='text-white'>
            {` ${type}`}
          </span>
        </h1>
        <h1>
          DIMENSION :
          <span className='text-white'>
            {` ${dimension}`}
          </span>
        </h1>
      </div>
      <div className='xl:flex w-full xl:px-24'>
        <div className='text-center pb-4 px-4 md:px-12  xl:w-[10&] xl:fixed'>
          <InputGroup setId={setId} totalEpisode={totalLocations} label={'Location'} />
        </div>
        <div className='flex flex-wrap xl:pl-96 px-8'>
          {location?.residents?.length !== 0 ?
            <Card results={resident} /> :
            <h1 className=' xl:text-4xl w-full text-center 2xl:pl-60 uppercase'>
            this location has no residents...</h1>
}
        </div>
      </div>
    </div>
  )
}

export default Locations