import { animated, useSpring } from '@react-spring/web'

interface Props {
  openMenu?: boolean
  children: JSX.Element[] | JSX.Element,
  duration?: number,
  delay?: number,
  className?: string
}

const FadeIn:React.FC<Props> = ({openMenu,children,duration,delay,className}:Props) => {
  
  const animationStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: duration ? duration : 500 },
    reset: openMenu != undefined? openMenu : false,
    cancel: openMenu != undefined? !openMenu : false,
    reverse: openMenu != undefined? !openMenu : false,
    delay: delay ? delay : 0,
  })
  
  return (
    <animated.div style={animationStyles} className={className}>
      {children} 
    </animated.div>
  )
}

export default FadeIn