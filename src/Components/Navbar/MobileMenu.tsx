//React Spring animation
import { useSpring, animated} from 'react-spring'
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
import { HashLink } from 'react-router-hash-link';
import { useEffect } from 'react'



interface Props {
  openMenu: boolean
  toggleMenu: () => void
}

function MobileMenu({openMenu,toggleMenu}: Props): JSX.Element {


  //Spring animation properties mobile menu
  const menuStyles = useSpring({
    //Make menu appear
    transform: openMenu ? 'translateX(0%)' : 'translateX(100vw)',
    config: { duration: 400 },
    delay: openMenu ? 400 : 1200
  })
  

  const handleClick = () => {
    toggleMenu()
  }

  useEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow
    if(openMenu){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = originalOverflow
    }

    return () => {
      document.body.style.overflow = originalOverflow
    }
    
  },[openMenu])

  
  return (
    <animated.div className="mobile-menu-outer" style={menuStyles}>
      {/* If openMenu is true display the menu */}
      <aside className={"mobile-menu"}>
        <FadeIn openMenu={openMenu}  duration={300}>
          <h1 className="mobile-logo">JC Dev</h1>
        </FadeIn>
        <ul className='mobile-menu__list'>
          <div className='mobile-menu__list--after'>
            <li className='mobile-menu__list--item' onClick={handleClick}>
              <HashLink to="/#about" onClick={handleClick}>
                <DownToTop delay={openMenu? 600 : 300} openMenu={openMenu}>
                    <span >About</span>
                </DownToTop>
              </HashLink>
            </li>
            <li className='mobile-menu__list--item'>
              <HashLink to="/#skills" onClick={handleClick}>
                  <DownToTop delay={openMenu? 800 : 500} openMenu={openMenu}>
                      <span >Skills</span>
                  </DownToTop>
                </HashLink>
            </li>
            <li className='mobile-menu__list--item'>
              <HashLink to="/#projects" onClick={handleClick}>
                  <DownToTop delay={openMenu? 1000 : 700} openMenu={openMenu}>
                      <span>Projects</span>
                  </DownToTop>
              </HashLink>
            </li>
          </div>
          
        </ul>

        {/* Social media icons */}
        <div className="mobile-menu__socials">
          <a href="https://github.com/CJCB77" target={"_blank"}>
            <LeftToRight delay={openMenu? 1100 : 900} openMenu={openMenu}>
              <img src={GitHubIcon} className="mobile-menu__icon"/>
            </LeftToRight>
          </a>
          <a href="https://www.linkedin.com/in/johnny-coral/" target={"_blank"}>
            <LeftToRight delay={openMenu? 1100 : 900} openMenu={openMenu}>
              <img src={LinkedinIcon} className="mobile-menu__icon"/>
            </LeftToRight>
          </a>
        </div>

        {/* Contact Button */}
        <HashLink to='/#contact' className='mobile-menu__btn  btn--light' onClick={handleClick}>
          <LoopRight openMenu={openMenu} >
            <span>Contact me</span>
            <span>Contact me</span>
          </LoopRight>
        </HashLink>
      </aside>
    </animated.div>
    
  )
}

export default MobileMenu