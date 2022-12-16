import React from 'react'
import {motion} from 'framer-motion';
import useUpdateWidth from './useUpdateWidth';

const Button = (props) => {
  const width = useUpdateWidth();

  const animationButton = {
    animate: {
      scale: 1.1,
      transition: {
        duration: 0.05,
        ease: 'linear',
        stiffness: 200,
        dumping: 50
      }
    }
  }
  return (
    <motion.button 
    type='button'
    className={`${props.className} text-2xl font-bold rounded-md py-2 sm:px-10 border-2 border-white uppercase bg-rick_blue`}
    onClick={props?.onClick}
    whileHover={'animate'}
    variants={width > 1024 && animationButton}
    >
      {props.value}</motion.button>
  )
}

export default Button