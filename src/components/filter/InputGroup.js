

const InputGroup = ({ setId, totalEpisode, label }) => {
  const listEpisode = [...Array(totalEpisode).keys()];
  const handleEpisode = (e) => {
    setId(e.target.value);
  }

  return (
    <select name='Episode' onChange={handleEpisode} defaultValue={1} className='w-full rounded-md md:w-max md:pr-48 md:px-2 py-2'>
      {listEpisode.map((item, index) => {
        return (
          <option key={index} value={item + 1} >
            {label}-{item + 1}
          </option>
        )
      })}
    </select>
  )
}

export default InputGroup;