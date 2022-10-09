import { animated, useSpring } from '@react-spring/web'

interface Props {
  openMenu: boolean
  children: JSX.Element[] | JSX.Element
  styles?: any
}

const LoopRight:React.FC<Props> = ({openMenu,children,styles}:Props) => {
  
  const animationStyles = useSpring({
    from: { transform: 'translateX(0%)' },
    to: { transform: 'translateX(-100%)' },
    config: { duration: 3000 },
    reset: openMenu,
    loop: openMenu,
    cancel: !openMenu,
  })
  
  return (
    <animated.div style={animationStyles}>
      {children} 
    </animated.div>
  )
}

export default LoopRight