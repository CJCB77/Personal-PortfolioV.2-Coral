import "./Hero.css";
//Images
import HeroImg from '../../assets/images/hero-img.png';
import Python from '../../assets/images/python.svg';
import Javascript from '../../assets/images/javascript.svg';
import Responsive from '../../assets/images/responsive.svg';
import Css from '../../assets/images/css.svg';
//Animation components
import FadeIn from "../Animations/FadeIn";
import DownToTop from "../Animations/DownToTop";

const Hero = () => {

  
  return (
    <section className="hero">

      <div className="hero__title">
        <h2 className="hero__greeting">
          <DownToTop delay={300} className="animation-wrap">
            Hello!, I am Carlos Coral
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
            <DownToTop delay={600} className="animation-wrap">
              Lets work together to build a great user 
            </DownToTop> 
          </div>
          <div className="hero__main--line">
            <DownToTop delay={600} className="animation-wrap">
              experience and deliver software 
            </DownToTop> 
          </div>
          <div className="hero__main--line">
            <DownToTop delay={600} className="animation-wrap">
              solutions for your business.
            </DownToTop> 
          </div>
        </h3>
      </div>

      <div className="hero__img">
        {/* Fade in the main image */}
        <FadeIn delay={1200}>
          <img src={HeroImg} alt="Hero Image" className="programmer-img"/>
        </FadeIn>
        {/* The skills images floating in absolute position       */}
        <FadeIn delay={1500}>
          <img src={Css} alt="css styling image" className="css-img" />
        </FadeIn>
        <FadeIn delay={2100}>
          <img src={Python} alt="python file image" className="python-img" />
        </FadeIn>
        <FadeIn delay={2400}>
          <img src={Javascript} alt="javascript file image" className="js-img" />
        </FadeIn>
        <FadeIn delay={1800}>
          <img src={Responsive} alt="responsive design image" className="responsive-img" />
        </FadeIn>
      </div>

      <div className="hero__cta">
          <button className="hero__cta--btn btn--light">Lets Connect</button>
      </div>

    </section>
  )
}

export default Hero