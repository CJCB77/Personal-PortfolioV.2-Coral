import SectionDivider from '../UtilityComponents/SectionDivider';
//CSS
import './About.css';
//Images
import OctopusMobile from "../../assets/images/aboutMobile.png";
import Octopus from "../../assets/images/about.png";
//Hooks
import useIsMobile from '../../CustomHooks/useIsMobile';
//Spring
import { useSpring, animated} from 'react-spring'
import FadeUpIntersection from '../Animations/FadeUpIntersection';



const About = () => {
  
  //Float image
  const floatSpring = useSpring({
    from: { transform: 'translateY(0px)' },
    to: { transform: 'translateY(-10px)' },
    config: { duration: 1000, mass: 1, tension: 280, friction: 120 },
    loop: { reverse: true },
  })

  return (
    //About section
    <section className='about' id="about">
      {/*If not on mobile show image first*/}
      {!useIsMobile() && <animated.div style={floatSpring} className='about__img'>
        <img src={Octopus} alt="image of an octopus multitasking" className='octopus-img' />
      </animated.div>}
      
      {/*Description text*/}
      <div className='about__text'>
        <SectionDivider section={"About me"}/>
        <div className='about__body'>
          <FadeUpIntersection>
            <p className='about__paragraph'>
              I am a fullstack software developer, I create apps and websites with a 
              different set of technologies and skills depending on your needs.
            </p>
          </FadeUpIntersection>
          {/*If on mobile show image second*/}
          {useIsMobile() && <animated.div style={floatSpring} className='about__img'>
            <img src={OctopusMobile} alt="image of an octopus multitasking" className='octopus-img' />
          </animated.div>}

          <FadeUpIntersection>
            <p className='about__paragraph'>
              Years of development experience building websites, APIs, SPAs, databases, 
              ecommerce and even mobile apps.
            </p>
          </FadeUpIntersection>
        </div>
      </div>
    </section>
  )
}

export default About