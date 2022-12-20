import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import InputGroup from '../components/filter/InputGroup';




const Episode = () => {
  const [infoEpisode, setInfoEpisode] = useState([]);
  const [id, setId] = useState(1);
  const [epi, setEpi] = useState([]);
  const [characters, setCharacters] = useState([]);


  useEffect(() => {
    (async function () {
      const response = await fetch('https://rickandmortyapi.com/api/episode')
        .then((res) => res.json())
      setInfoEpisode(response)

      const episode = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
        .then((res) => res.json())
      setEpi(episode);
      const epiChar = await Promise.all(episode.characters.map((item) => {
        return fetch(item).then((res) => res.json());
      }))
      setCharacters(epiChar)
    })();
    window.scrollTo(0, 0)
  }, [id])


  //Destructuring infoEpisode variable for taken the total number of episodes 
  const { info } = infoEpisode;
  const totalEpisode = info?.count;

  const { air_date, name } = epi



  return (
    <div>

      <div className='text-center text-rick_blue text-2xl md:text-4xl lg:text-5xl xl:text-6xl xl:py-24 2xl:py-48 py-8 px-4'>
        <h1 className=''>
          EPISODE :
          <span className='text-white'>
            {` ${name}`}
          </span>
        </h1>
        <h1>
          AIR DATE :
          <span className='text-white'>
            {` ${air_date}`}
          </span>
        </h1>
      </div>
      <div className='xl:flex w-full xl:px-24'>
        <div className='text-center pb-4 px-4 md:px-12  xl:w-[10&] xl:fixed'>
          <InputGroup label={'Episode'} setId={setId} totalEpisode={totalEpisode} />
        </div>
        <div className='flex flex-wrap xl:pl-96 px-8'>
          <Card results={characters} />
        </div>
      </div>
    </div>
  )
}







export default Episode