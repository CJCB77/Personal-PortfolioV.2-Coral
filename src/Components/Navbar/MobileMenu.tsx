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


  return (
    <div className={openMenu ? 'mobile-menu-outer active' : 'mobile-menu-outer'}>
      <aside className={"mobile-menu"}>
        <FadeIn openMenu={openMenu} duration={800}>
          <h1 className="mobile-logo">JC Dev</h1>
        </FadeIn>
        <ul className='mobile-menu__list'>
          <div className='mobile-menu__list--after'>
            <li className='mobile-menu__list--item'>
              <a href="#">
                <DownToTop delay={800} openMenu={openMenu}>
                    <span>About</span>
                </DownToTop>
              </a>
            </li>
            <li className='mobile-menu__list--item'>
              <a href="#">
                  <DownToTop delay={1100} openMenu={openMenu}>
                      <span>Skills</span>
                  </DownToTop>
                </a>
            </li>
            <li className='mobile-menu__list--item'>
              <a href="#">
                  <DownToTop delay={1400} openMenu={openMenu}>
                      <span>Projects</span>
                  </DownToTop>
                </a>
            </li>
          </div>
          
        </ul>

        <div className="mobile-menu__socials">
          <a href="https://github.com/CJCB77" target={"_blank"}>
            <LeftToRight delay={1700} openMenu={openMenu}>
              <img src={GitHubIcon} className="mobile-menu__icon"/>
            </LeftToRight>
          </a>
          <a href="https://www.linkedin.com/in/johnny-coral/" target={"_blank"}>
            <LeftToRight delay={1700} openMenu={openMenu}>
              <img src={LinkedinIcon} className="mobile-menu__icon"/>
            </LeftToRight>
          </a>
        </div>

        <button className='mobile-menu__btn  btn--light'>
          <LoopRight openMenu={openMenu} >
            <span>Contact me</span>
            <span>Contact me</span>
          </LoopRight>
        </button>
      </aside>
    </div>
    
  )
}

export default MobileMenu