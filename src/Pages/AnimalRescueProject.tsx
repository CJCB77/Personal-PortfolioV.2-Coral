import { Fragment } from 'react';
import Footer  from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import FadeUpIntersection from '../Components/Animations/FadeUpIntersection';
//Images
import heroImg from '../assets/images/projects/animal-rescue/hero.png'
import heroImg2 from '../assets/images/projects/animal-rescue/hero2.png'
import heroImg3 from '../assets/images/projects/animal-rescue/hero3.png'
import display1 from '../assets/images/projects/animal-rescue/display1.png'
import displayMobile1 from '../assets/images/projects/animal-rescue/display-mobile1.png'
import display2 from '../assets/images/projects/animal-rescue/display2.png'
import displayMobile2 from '../assets/images/projects/animal-rescue/display-mobile2.png'
import display3 from '../assets/images/projects/animal-rescue/display3.png'
import displayMobile3 from '../assets/images/projects/animal-rescue/display-mobile3.png'
//Icons
import css3Icon from '../assets/skills/css3.png'
import htmlIcon from '../assets/skills/html.png'
import javascriptIcon from '../assets/skills/javascript.png'
import bootstrapIcon from '../assets/skills/bootstrap.png'
import useIsMobile from '../CustomHooks/useIsMobile';
import Carousel from '../Components/UtilityComponents/Carousel';


const AnimalRescueProject = () => {

  const isMobile = useIsMobile();

  return (
    <Fragment>
      <Navbar/>
      <section className='project-details'>
        <div className='project-details__container'>
          <FadeUpIntersection>
            <Carousel imagesArray={[
              heroImg,
              heroImg2,
              heroImg3,
              ]}
            />
          </FadeUpIntersection>
          <div className='project-details__content'>
            <FadeUpIntersection>
              <header className='project-details__header'>
                  <h1 style={{color:"#4B5D67"}}>Animal Rescue and Shelter website </h1>
                  <div className='stack'>
                      <img src={htmlIcon} alt="react logo" className='stack__icon'/>
                      <img src={css3Icon} alt="express logo" className='stack__icon'/>
                      <img src={javascriptIcon} alt="node logo" className='stack__icon'/>
                      <img src={bootstrapIcon} alt="postgres logo" className='stack__icon'/>
                  </div>
                  <p className='project-details__paragraph'>
                    Website theme perfect for animal shelters or rescues; displays 
                    information about the organization's goals, values, and services. 
                  </p>
              </header>
            </FadeUpIntersection>
            <FadeUpIntersection>
              <img className='project-details__img' src={isMobile? displayMobile1 : display1} alt=''/>
              <img className='project-details__img' src={isMobile? displayMobile2 : display2} alt=''/>
              <img className='project-details__img' src={isMobile? displayMobile3 : display3} alt=''/>
            </FadeUpIntersection>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  )
}

export default AnimalRescueProject
