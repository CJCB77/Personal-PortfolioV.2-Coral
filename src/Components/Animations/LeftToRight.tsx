import { animated, useSpring } from '@react-spring/web'

interface Props {
  delay: number
  openMenu: boolean
  children: JSX.Element
}

const LeftToRight:React.FC<Props> = ({delay,openMenu,children}:Props) => {
  
  const styles = useSpring({
    from: { transform: 'translateX(-60px)', opacity: 0 },
    to: { transform: 'translateX(0)', opacity: 1 },
    config: { duration: 500 },
    delay: delay,
    reset: openMenu,
    reverse:!openMenu
  })
  
  return (
    <animated.div style={styles}> {children} </animated.div>
  )
}

export default LeftToRight