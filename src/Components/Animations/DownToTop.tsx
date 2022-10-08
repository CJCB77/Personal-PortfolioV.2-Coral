import { animated, useSpring } from '@react-spring/web'

interface Props {
  delay: number
  openMenu: boolean
  children: JSX.Element
}

const DownToTop:React.FC<Props> = ({delay,openMenu,children}:Props) => {
  
  const styles = useSpring({
    from: { transform: 'translateY(40px)'},
    to: { transform: 'translateY(0px)' },
    config: { duration: 500 },
    delay: delay,
    reset: openMenu,
    reverse:!openMenu
  })
  
  return (
    <animated.div style={styles}> {children} </animated.div>
  )
}

export default DownToTop