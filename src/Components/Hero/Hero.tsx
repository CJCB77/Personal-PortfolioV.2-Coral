import "./Hero.css";
//Components
import HeroImg from "./HeroImg";
//Animation components
import FadeIn from "../Animations/FadeIn";
//Custom hooks
import useIsMobile from '../../CustomHooks/useIsMobile';
import Heading from "./Heading";

const Hero = () => {
  
  return (
    <section className="hero">
      <Heading />
      <HeroImg />

      {/*Mobile contact button version */}
      {useIsMobile() && 
      <FadeIn className="hero__cta" delay={1000}>
          <a href="#contact" className="hero__cta--btn btn--light">Lets Connect</a>
      </FadeIn>}
    </section>
  )
}

export default Hero