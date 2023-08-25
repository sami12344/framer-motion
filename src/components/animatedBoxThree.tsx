import { motion } from 'framer-motion'
import './box.css'

const Box3 = () => {
const boxVariant = {
 lion:{
  x:100,
  scale:1.5,
  backgroundColor:'yellow'
 },
 elephant:{
  x:1000,
  scale:0.3
 }
}
  return (
    <div className='box-container'>
      <motion.div
      variants={boxVariant}
      initial='lion'
      animate='elephant'
        className='box'
      
      ></motion.div>
    </div>
  )
}

export default Box3
