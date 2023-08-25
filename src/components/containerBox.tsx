import { motion } from 'framer-motion';
import './box.css'
const containerBox = () => {
 const boxVariant = {
  hidden:{
   x:"-100vw"
  },
  visible:{
   x:700,
   transition:{
    delay:0.5,
    when:'beforeChildren'

   }
  }
 }

 const listVariant = {
   hidden: {
     x: -100,
     y:100,
     opacity: 0,
   },
   visible:(index:number)=>({
     x: 0,
     y:0,
     opacity: 1,
   
     transition: {
       delay: 0.5*index,
      
     },
   }),
 }
  return <motion.div variants={boxVariant} initial="hidden" animate="visible" className='box'>
   {[1,2,3].map((box, index)=>{

    return(
     <motion.li variants={listVariant} animate='visible' initial='hidden' whileInView="animate" viewport={{
      once:true
     }}  custom={index}className='boxItem' key={index}>{box}</motion.li>
    )
   })}
  </motion.div>
}

export default containerBox
