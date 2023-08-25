import { useAnimation, motion } from 'framer-motion';
import './box.css'
const UseAnimationHook = () => {
  const control = useAnimation()
  return (
    <div>
      <button
        onClick={() => {
          control.start({
            x: 1500,
            transition: { duration: 2 },
          })
        }}
      >
        {' '}
        Move Right
      </button>
      <button
        onClick={() => {
          control.start({
            x: 0,
            transition: { duration: 2 },
          })
        }}
      >
        Move left
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: '50%',
            transition: { duration: 2 },
          })
        }}
      >
        Circle
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: 0,
            transition: { duration: 2 },
          })
        }}
      >
        Square
      </button>
   
      <motion.div animate={control} className='box'></motion.div>
    </div>
  )
}

export default UseAnimationHook
