import { motion } from 'framer-motion'
import './box.css'
import { useState } from 'react';
const Box1 = () => {
  const [animate, setAnimate] = useState(true)
  return (
    <div className='box-container'>
      <motion.div className='box'  animate={
        {
          x: animate? 100 : 0 ,
          y:10,
          opacity:1,
          rotate:360,
          backgroundColor:'black'
        }
      } initial={{
        opacity:1,
        backgroundColor:'red'
      }}
      
      transition={{
        type:'spring',
        stiffness:133,
        
      } } onClick={()=> setAnimate(prev=> !prev)}></motion.div>
    </div>
  )
}

export default Box1
