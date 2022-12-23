import rick from '../assets/rick.png';
import {motion} from 'framer-motion';

const Loader = () => {

  const animation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: [0.5, 0.8, 1, 0.8, 0.5],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        
        ease: 'linear'
      }
    }
  }

  return (
    <div className='flex flex-col items-center justify-center pt-24'>
      <img src={rick} alt='rickandmorty' />
      <motion.h1 initial={'hidden'} animate={'visible'} variants={animation} className='text-3xl font-magra uppercase text-rick_lightGreen'>
        loading...
      </motion.h1>
    </div>
  )
}
export default Loader;