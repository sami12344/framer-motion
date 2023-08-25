import './App.css'
import Box1 from './components/animatedBox';
import Box4 from './components/animatedBoxFour';
import Box3 from './components/animatedBoxThree';
import Box2 from './components/animatedBoxTwo';
import ContainerBox from './components/containerBox';
import UseAnimationHook from './components/useAnimationHook';

const App: React.FC = () => {
  return (
    <>
     <Box1 />
      <Box2 />
      <Box3 /> 
      <ContainerBox />
      <Box4 />
      <UseAnimationHook />
    </>
  )
}

export default App
