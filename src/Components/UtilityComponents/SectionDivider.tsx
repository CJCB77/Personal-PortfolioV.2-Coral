import React from 'react'
import "./SectionDivider.css";
import {useSpring, animated} from 'react-spring'
//Hooks
import { useInterventionObserver } from '../../CustomHooks/useInterventionObserver';


interface Props {
  section: string;
}


const SectionDivider = ({section}:Props) => {  

  //Refence for intersection observer
  const triggerRef = React.useRef<HTMLHRElement>(null);
  const dataRef = useInterventionObserver(triggerRef, { freezeOnceVisible: true });

  //H2 reference
  const h2Ref = React.useRef<HTMLHeadingElement>(null);
  const h2DataRef = useInterventionObserver(h2Ref, { freezeOnceVisible: true });

  //Spring for hr
  const leftToRightSpring = useSpring({
    from: {transform: 'translateX(-100%)'},
    to: {transform: dataRef?.isIntersecting ? 'translateX(0%)' : 'translateX(-100%)'},
    config: {duration: 300},
  });

  //Spring for h2
  const leftToRightSpring2 = useSpring({
    from: {transform: 'translateX(-40%)'},
    to: {transform: h2DataRef?.isIntersecting ? 'translateX(0%)' : 'translateX(-40%)'},
    config: {duration: 300},
  });


  
  return (
    <div ref={triggerRef} className='section-divider'>
      <div className='hr-wrapper'>
        <animated.hr style={leftToRightSpring} ref={triggerRef} />
      </div>
      <div className='wrapper'>
        <animated.h2 style={leftToRightSpring2} ref={h2Ref}>{section}</animated.h2>
      </div>
    </div>

  )
}

export default SectionDivider