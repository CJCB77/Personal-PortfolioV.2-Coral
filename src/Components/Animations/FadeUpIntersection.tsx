import React from 'react'
import { animated, useSpring } from '@react-spring/web'
import { useInterventionObserver } from '../../CustomHooks/useInterventionObserver';

interface Props {
  children: JSX.Element[] | JSX.Element
}


const FadeUpIntersection:React.FC<Props> = ({children}:Props) => {

  const elementRef = React.useRef(null);
  const entry = useInterventionObserver(elementRef, {
    threshold: 0.10,
    freezeOnceVisible: true
  });

  const fadeUpProps = useSpring({
    opacity: entry?.isIntersecting ? 1 : 0,
    transform: entry?.isIntersecting ? 'translateY(0px)' : 'translateY(50px)',
    config: {duration: 300}
  })

  return (
    <animated.div ref={elementRef} style={fadeUpProps}>
      {children}
    </animated.div>
  )
}

export default FadeUpIntersection