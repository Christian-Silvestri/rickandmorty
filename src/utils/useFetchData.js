import { useState, useEffect } from 'react';




function useFetchData(Endpoint) {
  const [data, setData] = useState([]);
  const base_url = `https://rickandmortyapi.com/api${Endpoint}`;

  useEffect(() => {
    (async function () {
      const response = await fetch(base_url)
        .then((res) => res.json())
      setData(response);
    })();
  }, [base_url])

  return {
    info: data.info,
    results: data.results
  }

}

export default useFetchData;