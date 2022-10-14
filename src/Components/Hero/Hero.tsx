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

      {useIsMobile() && 
      <FadeIn className="hero__cta" delay={2000}>
          <button className="hero__cta--btn btn--light">Lets Connect</button>
      </FadeIn>}
    </section>
  )
}

export default Hero