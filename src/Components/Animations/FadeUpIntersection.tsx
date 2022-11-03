import { useRef } from 'react';
import { animated, useSpring } from '@react-spring/web'
import { useInterventionObserver } from '../../CustomHooks/useInterventionObserver';

interface Props {
  children: JSX.Element[] | JSX.Element
  threshold?: number
}


const FadeUpIntersection:React.FC<Props> = ({children,threshold}:Props) => {

  const elementRef = useRef(null);
  const entry = useInterventionObserver(elementRef, {
    threshold: threshold || 0.1,
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