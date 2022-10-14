import React from 'react'
//Images
import Programmer from '../../assets/images/hero-img.png';
import HeroImgMobile from '../../assets/images/hero-img-mobile.png';
import Python from '../../assets/images/python.svg';
import Javascript from '../../assets/images/javascript.svg';
import Responsive from '../../assets/images/responsive.svg';
import Css from '../../assets/images/css.svg';
//Hooks
import useIsMobile from '../../CustomHooks/useIsMobile';
import { animated, useSpring } from '@react-spring/web'
//Animation components
import FadeIn from "../Animations/FadeIn";
//CSS
import "./HeroImg.css";


const HeroImg = () => {

  const floatProps = useSpring({
    from: { transform: 'translateY(0px)' },
    to: { transform: 'translateY(-5px)' },
    config: { duration: 1500, mass: 1, tension: 280, friction: 120 },
    loop: { reverse: true },
  })

  const floatPropsReverse = useSpring({
    from: { transform: 'translateY(0px)' },
    to: { transform: 'translateY(5px)' },
    config: { duration: 1500, mass: 1, tension: 280, friction: 120 },
    loop: { reverse: true },
  })

  return (
    <div className="hero__img">
        {/* Fade in the main image */}
        <FadeIn delay={1200}>
          <img src={useIsMobile()? HeroImgMobile : Programmer} alt="Hero Image" className="programmer-img"/>
        </FadeIn>
        {/* The skills images floating in absolute position       */}
        <FadeIn delay={1400}>
          <animated.img style={floatProps} src={Css} alt="css styling image" className="css-img" />
        </FadeIn>
        <FadeIn delay={1800}>
          <animated.img style={floatPropsReverse} src={Python} alt="python file image" className="python-img" />
        </FadeIn>
        <FadeIn delay={2000}>
          <animated.img style={floatProps} src={Javascript} alt="javascript file image" className="js-img" />
        </FadeIn>
        <FadeIn delay={1600}>
          <animated.img style={floatPropsReverse} src={Responsive} alt="responsive design image" className="responsive-img" />
        </FadeIn>
      </div>
  )
}

export default HeroImg