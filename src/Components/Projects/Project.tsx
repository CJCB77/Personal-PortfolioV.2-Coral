import React from 'react'
//Hooks
import useIsMobile from '../../CustomHooks/useIsMobile'
import {useSpring, animated} from 'react-spring'
import {useInterventionObserver} from '../../CustomHooks/useInterventionObserver'
import { Link } from 'react-router-dom';

interface ProjectProps {
  title: string;
  description: string;
  imgMobile: string;
  imgDesktop: string;
  stack: string[];
  path?: string;
}

export const Project = ({imgMobile,imgDesktop,title,description,stack,path}:ProjectProps) => {

  const renderStack = stack.map((tech, index) => {
    return <img key={index} src={tech} alt={'stack used in project icon'} className="stack-icon" />
  })
  
  //Create an intersection observer to trigger animation when element is visible
  const elementRef = React.useRef(null);
  const entry = useInterventionObserver(elementRef, {
    threshold: 0.10,
    freezeOnceVisible: true
  });

  const props = useSpring({
    opacity: entry?.isIntersecting ? 1 : 0,
    transform: entry?.isIntersecting ? 'translateY(0px)' : 'translateY(50px)',
    config: {duration: 300}
  })

  return (
    <animated.article ref={elementRef} style={props} className='project'>
          <div className='project__img'>
            <img src={useIsMobile() ? imgMobile : imgDesktop } alt="project image" />
            <div className='project__hover'>
              <button>
                <Link to='/energy-meter-ocr' >View More</Link>
              </button>
            </div>
          </div>
          <div className='project__info'>
            <h3 className='project__title'>{title}</h3>
            <p className='project__description'>
              {description}
            </p>
            <div className="project__stack">
              {renderStack}
            </div>
          </div>
      </animated.article>
  )
}
