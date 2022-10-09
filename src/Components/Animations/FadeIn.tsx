import { animated, useSpring } from '@react-spring/web'

interface Props {
  openMenu: boolean
  children: JSX.Element[] | JSX.Element,
  duration?: number
}

const FadeIn:React.FC<Props> = ({openMenu,children,duration}:Props) => {
  
  const animationStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: duration ? duration : 500 },
    reset: openMenu,
    cancel: !openMenu,
    reverse: !openMenu
  })
  
  return (
    <animated.div style={animationStyles}>
      {children} 
    </animated.div>
  )
}

export default FadeIn