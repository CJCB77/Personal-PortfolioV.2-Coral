import { animated, useSpring } from '@react-spring/web'

interface Props {
  delay: number
  openMenu?: boolean
  children: React.ReactNode,
  className?: string
}

const DownToTop:React.FC<Props> = ({delay,openMenu,children,className}:Props) => {
  
  const styles = useSpring({
    from: { transform: 'translateY(55px)'},
    to: { transform: 'translateY(0px)' },
    config: { duration: 300 },
    delay: delay,
    reset: openMenu != undefined? openMenu : false,
    reverse: openMenu != undefined? !openMenu : false
  })
  
  return (
    <animated.div style={styles} className={className}> 
      {children} 
    </animated.div>
  )
}

export default DownToTop