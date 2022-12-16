import {useState, useEffect} from 'react'


//This function returns the real-time updated width of the viewport
//it is used as a condition to trigger certain events
const useUpdateWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [])

  return width;
}

export default useUpdateWidth