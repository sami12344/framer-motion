import { motion } from 'framer-motion'
import './box.css'
const Box2 = () => {
  return (
    <div className='box-container'>
      <motion.div drag dragConstraints={{
       right:20,
       left:-10,
       top:5,
       bottom:5
      }} className='box' whileHover={{
       scale:1.1 
       
      }} whileTap={{
       scale:0.9
      }}></motion.div>
    </div>
  )
}

export default Box2
