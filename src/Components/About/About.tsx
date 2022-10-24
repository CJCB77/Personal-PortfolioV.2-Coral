import React, { useEffect } from 'react'
import SectionDivider from '../UtilityComponents/SectionDivider';
//CSS
import './About.css';
//Images
import OctopusMobile from "../../assets/images/aboutMobile.png";
import Octopus from "../../assets/images/about.png";
//Hooks
import useIsMobile from '../../CustomHooks/useIsMobile';
import { useInterventionObserver } from '../../CustomHooks/useInterventionObserver';
//Spring
import { useSpring, animated} from 'react-spring'



const About = () => {

  //First paragraph ref
  const triggerRef = React.useRef<HTMLParagraphElement>(null);
  const dataRef = useInterventionObserver(triggerRef, { freezeOnceVisible: true,threshold: 1.0});

  const textSpring = useSpring({
    from: {opacity: 0, transform: 'translateY(60px)'},
    to: {opacity: dataRef?.isIntersecting ? 1 : 0, transform: dataRef?.isIntersecting ? 'translateY(0px)' : 'translateY(60px)'},
    config: {duration: 300}
  });

  //Second paragraph ref
  const triggerRef2 = React.useRef<HTMLParagraphElement>(null);
  const dataRef2 = useInterventionObserver(triggerRef2, { freezeOnceVisible: true });

  const textSpring2 = useSpring({
    from: {opacity: 0, transform: 'translateY(60px)'},
    to: {opacity: dataRef2?.isIntersecting ? 1 : 0, transform: dataRef2?.isIntersecting ? 'translateY(0px)' : 'translateY(60px)'},
    config: {duration: 300},
  });

  //Float image
  const floatSpring = useSpring({
    from: { transform: 'translateY(0px)' },
    to: { transform: 'translateY(-10px)' },
    config: { duration: 1000, mass: 1, tension: 280, friction: 120 },
    loop: { reverse: true },
  })

  return (
    //About section
    <section className='about'>
      {/*If not on mobile show image first*/}
      {!useIsMobile() && <animated.div style={floatSpring} className='about__img'>
        <img src={Octopus} alt="image of an octopus multitasking" className='octopus-img' />
      </animated.div>}
      
      {/*Description text*/}
      <div className='about__text'>
        <SectionDivider section={"About me"}/>
        <div className='about__body'>
          <animated.p ref={triggerRef} style={textSpring} className='about__paragraph'>
            I am a fullstack software developer, I create apps and websites with a 
            different set of technologies and skills depending on your needs.
          </animated.p>
          {/*If on mobile show image second*/}
          {useIsMobile() && <animated.div style={floatSpring} className='about__img'>
            <img src={OctopusMobile} alt="image of an octopus multitasking" className='octopus-img' />
          </animated.div>}

          <animated.p ref={triggerRef2} style={textSpring2} className='about__paragraph'>
            Years of development experience building websites, APIs, SPAs, databases, 
            ecommerce and even mobile apps.
          </animated.p>
        </div>
      </div>
    </section>
  )
}

export default About