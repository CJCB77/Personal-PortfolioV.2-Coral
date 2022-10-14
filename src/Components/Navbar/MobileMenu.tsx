//React Spring animation
import { useSpring, animated} from 'react-spring'
//React hooks
import { useState } from 'react'
//Icons
import LinkedinIcon from '../../assets/icons/linkedinMobile.svg'
import GitHubIcon from '../../assets/icons/githubMobile.svg'
//CSS
import "./MobileMenu.css"
//Animation Components
import DownToTop from '../Animations/DownToTop'
import LeftToRight from '../Animations/LeftToRight'
import LoopRight from '../Animations/LoopRight'
import FadeIn from '../Animations/FadeIn'


interface Props {
  openMenu: boolean
}

function MobileMenu({openMenu}: Props): JSX.Element {

  //Spring animation properties mobile menu
  const menuStyles = useSpring({
    //Make menu appear
    transform: openMenu ? 'translateX(0%)' : 'translateX(100vw)',
    config: { duration: 600 },
    delay: openMenu ? 500 : 1500
  })
  

  
  return (
    <animated.div className="mobile-menu-outer" style={menuStyles}>
      {/* If openMenu is true display the menu */}
      <aside className={"mobile-menu"}>
        <FadeIn openMenu={openMenu} duration={400}>
          <h1 className="mobile-logo">JC Dev</h1>
        </FadeIn>
        <ul className='mobile-menu__list'>
          <div className='mobile-menu__list--after'>
            <li className='mobile-menu__list--item'>
              <a href="#">
                <DownToTop delay={600} openMenu={openMenu}>
                    <span>About</span>
                </DownToTop>
              </a>
            </li>
            <li className='mobile-menu__list--item'>
              <a href="#">
                  <DownToTop delay={900} openMenu={openMenu}>
                      <span>Skills</span>
                  </DownToTop>
                </a>
            </li>
            <li className='mobile-menu__list--item'>
              <a href="#">
                  <DownToTop delay={1200} openMenu={openMenu}>
                      <span>Projects</span>
                  </DownToTop>
                </a>
            </li>
          </div>
          
        </ul>

        {/* Social media icons */}
        <div className="mobile-menu__socials">
          <a href="https://github.com/CJCB77" target={"_blank"}>
            <LeftToRight delay={1200} openMenu={openMenu}>
              <img src={GitHubIcon} className="mobile-menu__icon"/>
            </LeftToRight>
          </a>
          <a href="https://www.linkedin.com/in/johnny-coral/" target={"_blank"}>
            <LeftToRight delay={1200} openMenu={openMenu}>
              <img src={LinkedinIcon} className="mobile-menu__icon"/>
            </LeftToRight>
          </a>
        </div>

        {/* Contact Button */}
        <button className='mobile-menu__btn  btn--light'>
          <LoopRight openMenu={openMenu} >
            <span>Contact me</span>
            <span>Contact me</span>
          </LoopRight>
        </button>
      </aside>
    </animated.div>
    
  )
}

export default MobileMenu