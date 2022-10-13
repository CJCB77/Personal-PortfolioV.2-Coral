import { useSpring, animated} from 'react-spring'
//Animations
import FadeIn from '../Animations/FadeIn'
//CSS
import './Hamburguer.css'

interface Props {
  openMenu: boolean,
  toggleMenu: () => void
}

const Hamburguer = ({openMenu,toggleMenu}:Props) => {

  const leftBarStyles = useSpring({
    transform: openMenu ? 'rotate(135deg)' : 'rotate(0deg)',
    background: openMenu ? '#53CDE9' : '#093F68',
    top: openMenu ? '1.2rem' : '0',
    config: { duration: 300 },
    delay: !openMenu ? 2000 : 0

  })

  const rightBarStyles = useSpring({
    transform: openMenu ? 'rotate(-135deg)' : 'rotate(0deg)',
    background: openMenu ? '#53CDE9' : '#093F68',
    config: { duration: 300 },
    delay: !openMenu ? 2000 : 0
  })
  
  const fadeStyles = useSpring({
    from: {opacity: 0},
    to: {opacity: 1},
  })

  return (
    <div className="hamburguer-wrap">
    {/* Toggle menu icon open or close with animation */}
      <animated.div className={openMenu? "hamburguer-inner active" : "hamburguer-inner"} 
          onClick={toggleMenu} style={fadeStyles}>
        <animated.span style={leftBarStyles}></animated.span>
        <animated.span style={rightBarStyles} ></animated.span>
      </animated.div>   
    </div>
  )
}

export default Hamburguer