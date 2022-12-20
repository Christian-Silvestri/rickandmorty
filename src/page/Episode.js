import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import useFetchData from '../utils/useFetchData';




const Episode = () => {
  const [infos, setInfos] = useState([]);
  const [id, setId] = useState(1);
  const [epi, setEpi] = useState([]);
  const [characters, setCharacters] = useState([]);
  const api = `https://rickandmortyapi.com/api/episode`;

 useEffect(() => {
  (async function() {
    const response = await fetch('https://rickandmortyapi.com/api/episode')
    .then((res) => res.json())
    setInfos(response)

    const episode = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
    .then((res) => res.json())
    setEpi(episode);
    const epiChar = await Promise.all(episode.characters.map((item) => {
      return fetch(item).then((res) => res.json());
    }))
    setCharacters(epiChar)
  })()
 }, [id])

const { results, info} = infos;
const totalEpisode = info?.count;
const listEpisode = [...Array(totalEpisode).keys()];
const {air_date, created, episode, name} = epi

const handleEpisode = (e) => {
  setId(e.target.value);
}

  return (
    <div>
      <select name='Episode' onChange={handleEpisode} defaultValue={1}>
        {listEpisode.map((item, index) => {
          return (
            <option key={index} value={item + 1}>
              Episode-{item + 1}
            </option>
          )
        })}
      </select>
      <div>
        <h1>NAME: {name}</h1>
        <h1>AIR DATE: {air_date}</h1>
        <h1>CREATED: {created}</h1>
      </div>
      <div className='flex flex-wrap'>
        <Card results={characters}/>
      </div>
    </div>
  )
}




export default Episode