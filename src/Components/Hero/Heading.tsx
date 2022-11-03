//Animation components
import FadeIn from "../Animations/FadeIn";
import DownToTop from "../Animations/DownToTop";
//Custom hooks
import useIsMobile from '../../CustomHooks/useIsMobile';
//Css
import './Heading.css'

const Heading = () => {
  
  return (
    <div className="hero__title">
    <h2 className="hero__greeting">
      <DownToTop delay={300} className="animation-wrap">
        Hello!, I am Johnny Coral
      </DownToTop>
    </h2>
    <h1 className="hero__main">
      <div className="hero__main--line">
        <DownToTop delay={300} className="animation-wrap">
          I <span className="text--yellow">Design</span> and 
          <span className="text--green"> Develop</span> 
        </DownToTop>
      </div>
      <div className="hero__main--line">
        <DownToTop delay={300} className="animation-wrap">
          Web Applications
        </DownToTop>
      </div>
    </h1>
    <h3 className="hero__description">
      <div className="hero__main--line">
        <DownToTop delay={500} className="animation-wrap">
          Lets work together to build a great user 
        </DownToTop> 
      </div>
      <div className="hero__main--line">
        <DownToTop delay={500} className="animation-wrap">
          experience and deliver software 
        </DownToTop> 
      </div>
      <div className="hero__main--line">
        <DownToTop delay={500} className="animation-wrap">
          solutions for your business.
        </DownToTop> 
      </div>
    </h3>
    {/* Desktop contact button in hero */}
    {!useIsMobile() && <FadeIn className="hero__cta" delay={1500}>
      <a href='#contact' className="hero__cta--btn btn--light">Lets Connect</a>
    </FadeIn>}
  </div>
  )
}

export default Heading